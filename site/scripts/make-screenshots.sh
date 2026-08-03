#!/usr/bin/env bash
#
# make-screenshots.sh — Figma export → 웹 배포용 스크린샷 세트
#
# Figma가 WebP export를 지원하지 않으므로, PNG/JPEG로 내보낸 원본을
# 사이트에 넣을 WebP + JPEG 폴백 세트로 변환한다.
#
#   - 폭 828px로 다운스케일 (원본이 더 작으면 건드리지 않음)
#     Figma에서 2x(1656px)로 뽑으면 다운스케일이 글자 획을 매끄럽게 다듬어 준다
#   - WebP  q82 / method 6 / sharp_yuv   → <picture>의 source
#   - JPEG  q85 / 4:2:0 / progressive    → <img>의 폴백
#   - 리사이즈는 PNG 중간 단계를 거쳐서 이중 압축 아티팩트를 피한다
#   - Figma PNG에 남는 반투명 경계 픽셀은 밴드 배경색으로 합성해 없앤다.
#     안 그러면 알파를 지원하는 WebP와 지원하지 않는 JPEG의 결과가 달라진다.
#   - 출력 파일명은 site/components/home/Home*.js가 참조하는
#     screenshot_<N>[_<lang>].{webp,jpg} 규칙을 따른다
#
# 필요 도구: ImageMagick(magick), cwebp — 둘 다 `brew install imagemagick webp`
# (extract/verify와 달리 Node도 npm 의존성도 쓰지 않는다.)
#
# 사용 예 — site/ 에서:
#   npm run screenshots                      # <repo>/temp/*.png|jpg → temp/dist/ (영어)
#   npm run screenshots -- --install         # 변환 후 site/public/assets 로 복사
#   npm run screenshots -- -l ko             # screenshot_1_ko.webp ... 로 생성
#   npm run screenshots -- -i ~/Downloads/figma
#   npm run screenshots -- -n                # 무엇이 생길지만 출력 (dry run)
#
# 어느 위치에서든 직접 실행해도 된다: bash site/scripts/make-screenshots.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # site/scripts
SITE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"                     # site
REPO_ROOT="$(cd "$SITE_DIR/.." && pwd)"
ASSET_DIR="$SITE_DIR/public/assets/images/appstore"

# Figma export를 놓아두는 자리. temp/ 는 .gitignore 대상이라 원본 마스터가
# 실수로 커밋되지 않는다.
IN_DIR="$REPO_ROOT/temp"
OUT_DIR=""        # 비어 있으면 <입력>/dist 로 결정한다 (인자 파싱 뒤)
LANG_CODE=""
PREFIX="screenshot_"
WIDTH=828
JPEG_Q=85
WEBP_Q=82
BG="#fcfdff"   # home.css 의 --pc-band. 스크린샷 밴드 배경과 같은 색이어야 한다.
INSTALL=0
DRY_RUN=0

usage() {
  # 셔뱅 다음부터 첫 비주석 줄 전까지 = 위 헤더 주석
  awk 'NR>1 { if (!/^#/) exit; sub(/^# ?/, ""); print }' "${BASH_SOURCE[0]}"
  cat <<'EOF'

옵션:
  -i, --in DIR        입력 폴더 (기본: 레포 루트의 temp/)
  -o, --out DIR       출력 폴더 (기본: <입력>/dist)
  -l, --lang CODE     언어 접미사. ko → screenshot_1_ko.webp (기본: 없음 = 영어)
  -w, --width PX      리사이즈 목표 폭 (기본: 828)
  -q, --jpeg-quality  JPEG 품질 (기본: 85)
  -Q, --webp-quality  WebP 품질 (기본: 82)
      --bg COLOR      반투명 픽셀을 합성할 배경색 (기본: #fcfdff = --pc-band)
      --prefix NAME   출력 파일명 접두사 (기본: screenshot_)
      --install       변환 결과를 site/public/assets/images/appstore/ 로 복사
  -n, --dry-run       실제 변환 없이 계획만 출력
  -h, --help          이 도움말
EOF
}

die() { printf '\033[31m에러:\033[0m %s\n' "$1" >&2; exit 1; }

while [[ $# -gt 0 ]]; do
  case "$1" in
    -i|--in)            IN_DIR="${2:?}"; shift 2 ;;
    -o|--out)           OUT_DIR="${2:?}"; shift 2 ;;
    -l|--lang)          LANG_CODE="${2:?}"; shift 2 ;;
    -w|--width)         WIDTH="${2:?}"; shift 2 ;;
    -q|--jpeg-quality)  JPEG_Q="${2:?}"; shift 2 ;;
    -Q|--webp-quality)  WEBP_Q="${2:?}"; shift 2 ;;
    --bg)               BG="${2:?}"; shift 2 ;;
    --prefix)           PREFIX="${2:?}"; shift 2 ;;
    --install)          INSTALL=1; shift ;;
    -n|--dry-run)       DRY_RUN=1; shift ;;
    -h|--help)          usage; exit 0 ;;
    *)                  die "알 수 없는 옵션: $1  (--help 참고)" ;;
  esac
done

# 출력 폴더 기본값은 입력 폴더를 따라간다 (-i만 주고 -o를 생략한 경우)
: "${OUT_DIR:=$IN_DIR/dist}"

command -v magick >/dev/null || die "magick 을 찾을 수 없습니다. brew install imagemagick"
command -v cwebp  >/dev/null || die "cwebp 를 찾을 수 없습니다. brew install webp"
[[ -d "$IN_DIR" ]] || die "입력 폴더가 없습니다: $IN_DIR"

SUFFIX=""
[[ -n "$LANG_CODE" ]] && SUFFIX="_$LANG_CODE"

# ── 입력 수집 ────────────────────────────────────────────────────────────
# 파일명 끝의 숫자를 스크린샷 번호로 쓴다 (PenCake_Screenshot_EN_3.jpg → 3).
# 숫자가 없으면 이름순 위치를 번호로 삼는다. dist/ 와 .DS_Store 는 건너뛴다.
entries=()
fallback_idx=0
while IFS= read -r f; do
  base="${f##*/}"
  [[ "$base" == .* ]] && continue
  stem="${base%.*}"
  fallback_idx=$((fallback_idx + 1))
  if [[ "$stem" =~ ([0-9]+)$ ]]; then
    num=$((10#${BASH_REMATCH[1]}))
  else
    num=$fallback_idx
  fi
  entries+=("$num	$f")
done < <(find "$IN_DIR" -maxdepth 1 -type f \
           \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort)

[[ ${#entries[@]} -gt 0 ]] || die "$IN_DIR 에 변환할 jpg/jpeg/png 가 없습니다."

# 번호순 정렬
IFS=$'\n' sorted=($(printf '%s\n' "${entries[@]}" | sort -n -k1,1)) ; unset IFS

# 번호 중복 검사 — 조용히 덮어쓰는 사고 방지
dupes="$(printf '%s\n' "${sorted[@]}" | cut -f1 | uniq -d || true)"
[[ -z "$dupes" ]] || die "스크린샷 번호가 중복됩니다: $(echo "$dupes" | tr '\n' ' ')— 파일명을 확인하세요."

printf '입력   %s (%d장)\n' "$IN_DIR" "${#sorted[@]}"
printf '출력   %s\n' "$OUT_DIR"
printf '설정   폭 %spx · WebP q%s · JPEG q%s · 배경 %s%s\n\n' \
  "$WIDTH" "$WEBP_Q" "$JPEG_Q" "$BG" "${LANG_CODE:+ · 언어 $LANG_CODE}"

if [[ $DRY_RUN -eq 1 ]]; then
  for e in "${sorted[@]}"; do
    num="${e%%	*}"; src="${e#*	}"
    printf '  %-38s → %s%s%s.{webp,jpg}\n' "$(basename "$src")" "$PREFIX" "$num" "$SUFFIX"
  done
  printf '\n(dry run — 아무 파일도 만들지 않았습니다)\n'
  exit 0
fi

mkdir -p "$OUT_DIR"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

total_src=0; total_webp=0; total_jpeg=0; first_out=""

printf '%-30s %10s %10s %10s\n' "파일" "원본" "WebP" "JPEG"
printf '%s\n' "----------------------------------------------------------------"

for e in "${sorted[@]}"; do
  num="${e%%	*}"; src="${e#*	}"
  out_base="${PREFIX}${num}${SUFFIX}"
  flat="$TMP_DIR/${out_base}.png"
  [[ -z "$first_out" ]] && first_out="$out_base"

  # 1) 리사이즈 → 무손실 PNG. '>' 플래그라 원본이 목표 폭보다 작으면 확대하지 않는다.
  #    Figma export는 sRGB이므로 -colorspace sRGB 후 프로파일을 떼도 색이 틀어지지 않는다.
  #    -alpha remove 는 반투명 픽셀을 $BG 위에 합성한다. 리사이즈 '전에' 해야
  #    가장자리 픽셀이 축소 과정에서 주변과 올바르게 섞인다.
  magick "$src" -colorspace sRGB \
    -background "$BG" -alpha remove -alpha off \
    -resize "${WIDTH}x>" -strip "$flat"

  # 2) WebP — sharp_yuv 는 세리프 본문처럼 얇은 획의 색 번짐을 줄여준다
  cwebp -quiet -q "$WEBP_Q" -m 6 -sharp_yuv -metadata none \
    "$flat" -o "$OUT_DIR/${out_base}.webp"

  # 3) JPEG 폴백 — 4:2:0 서브샘플링 + 프로그레시브
  magick "$flat" -sampling-factor 2x2 -quality "$JPEG_Q" \
    -interlace JPEG -strip "$OUT_DIR/${out_base}.jpg"

  s_src=$(stat -f%z "$src")
  s_webp=$(stat -f%z "$OUT_DIR/${out_base}.webp")
  s_jpeg=$(stat -f%z "$OUT_DIR/${out_base}.jpg")
  total_src=$((total_src + s_src))
  total_webp=$((total_webp + s_webp))
  total_jpeg=$((total_jpeg + s_jpeg))

  printf '%-30s %9dK %9dK %9dK\n' "$out_base" $((s_src/1024)) $((s_webp/1024)) $((s_jpeg/1024))
done

printf '%s\n' "----------------------------------------------------------------"
printf '%-30s %9dK %9dK %9dK\n' "합계" \
  $((total_src/1024)) $((total_webp/1024)) $((total_jpeg/1024))
# 리사이즈가 실제로 먹었는지 눈으로 확인시켜 준다.
# (원본 열은 PNG 마스터라 절감률을 계산해봐야 의미가 없으므로 표시하지 않는다.)
src_dim="$(magick identify -format '%wx%h' "${sorted[0]#*	}")"
out_dim="$(magick identify -format '%wx%h' "$OUT_DIR/$first_out.jpg")"
printf '\n해상도      %s → %s\n' "$src_dim" "$out_dim"
printf '페이지 로드  WebP %dK (미지원 브라우저는 JPEG 폴백 %dK)\n' \
  $((total_webp/1024)) $((total_jpeg/1024))
printf 'HTML 속성    width="%s" height="%s"\n' "${out_dim%x*}" "${out_dim#*x}"

if [[ $INSTALL -eq 1 ]]; then
  [[ -d "$ASSET_DIR" ]] || die "사이트 assets 폴더가 없습니다: $ASSET_DIR"
  cp "$OUT_DIR"/*.webp "$OUT_DIR"/*.jpg "$ASSET_DIR/"
  printf '\n설치됨 → %s\n' "$ASSET_DIR"
  printf '다음: site/components/home/Home*.js 의 이미지 경로와 width/height 속성을 확인하세요.\n'
else
  printf '\n사이트에 반영하려면: --install 을 붙여 다시 실행하거나\n  cp %s/* %s/\n' \
    "$OUT_DIR" "$ASSET_DIR"
fi
