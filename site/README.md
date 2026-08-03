# PenCake Website (Next.js)

pencake.app 정적 사이트의 소스입니다. Next.js(App Router) **정적 export**로 빌드되어
GitHub Pages로 배포됩니다. 빌드 결과물(`out/`)은 기존 사이트와 URL 구조·마크업·메타데이터가
동일하도록 설계되었습니다.

## 요구 사항

- Node.js 22 (`.nvmrc` 참고 — `nvm use`)

## 명령어

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 (http://localhost:3000)
npm run build      # 정적 빌드 → out/
npm run verify     # out/ 을 레거시 HTML(레포 루트)과 대조 검증
npm run extract    # 레거시 HTML → content/ JSON 재추출 (초기 이관용, 일반적으로 불필요)
npm run qr         # 모바일 다운로드 페이지의 QR SVG 재생성 (URL 변경 시에만)
```

## 구조

```
app/
  (home)/         리디자인된 영어 페이지 전체(/, /faq/, /privacy/,
                  /guide/markdown/, /download/desktop/, /download/mobile/)와
                  /changelog/desktop/(?lang= 쿼리로 언어 선택 — 전 언어 공용).
                  자체 레이아웃, home.css 를 공용 디자인 시스템으로 사용
                  (Notion CSS 미사용). 페이지별 스타일은 faq/faq.css 처럼
                  라우트 폴더에 둡니다
  (ko)/ko/        리디자인된 한국어 페이지 6종 — (home) 의 영어 페이지와 같은
                  구성(체인지로그는 전 언어 공용이라 제외). 자체 루트 레이아웃이
                  <html lang="ko"> 와 한글 세리프 웹폰트를 얹고, 스타일은
                  (home) 의 css 를 상대 경로로 그대로 재사용합니다
  (i18n)/[lang]/  나머지 언어의 레거시 렌더 페이지 6종.
                  전부 NOTION_LANGS(ko 제외 8개)를 사용 — 언어가 리디자인되면
                  이 목록에서 빠지면서 레거시 라우트 생성이 멈춥니다
components/       페이지 렌더러(SitePage)와 클라이언트 동작들.
                  리디자인 본문은 언어별로 <이름>En.js / <이름>Ko.js 쌍을
                  이룹니다(레이아웃은 공유, 카피·자산만 언어별)
  home/HomeEn.js  리디자인 홈 본문(히어로·스크린샷·특징·리뷰·CTA·문서 목차).
                  스크린샷: public/assets/images/appstore/ (앱스토어 원본 828px).
                  리뷰는 실제 App Store 후기 — 국가·날짜·별점만 표기(닉네임 제외).
  download/DownloadMobileEn.js
                  QR 우선 모바일 다운로드 페이지. QR 은 ?qr=1 을 실어
                  lib/stores.js 의 인라인 스크립트가 스캔한 기기를 스토어로
                  넘깁니다. QR 은 언어별 자산이며 재생성은 `npm run qr`
  faq/FaqEn.js    리디자인 영어 FAQ 본문 — 콘텐츠를 JSX 데이터로 보유.
                  섹션·질문 id 는 레거시 Notion 블록 id 를 유지(딥링크 호환),
                  faq/FaqDeepLinks.js 가 #해시 → <details> 열기+스크롤 처리
  pc/             리디자인 페이지 공용 컴포넌트(Kicker·Footer·TopNav).
                  Footer 는 path prop 으로 언어 링크를 페이지별로 생성
  NotionBehaviors.js       토글·#해시 스크롤+하이라이트·이미지 패딩 픽스
  DownloadHandlers.js      PC 다운로드 링크(data-download) 클릭 처리
  MobileDownloadRedirect.js 홈의 모바일 다운로드 버튼 UA 분기
                           (`#downloadMobile` = 레거시 홈,
                            `[data-download-mobile]` = 리디자인 홈. 리디자인
                            홈은 히어로·CTA 두 곳에 버튼이 있어 위임 처리)
  GoogleAnalytics.js       gtag 로더 (G-ZZNDMTFTKD)
  ChangelogApp.js          PC 버전 업데이트 기록 페이지
content/<lang>/<page>.json  페이지별 콘텐츠 (메타 + 본문 블록)
lib/
  download.js     ★ PC 앱 버전 상수(MAC_VERSION/WIN_VERSION)와 다운로드 URL
  stores.js       ★ 모바일 스토어 URL·기기 판별·QR 리다이렉트 스크립트
  changelog-data.js ★ PC 버전 업데이트 기록 데이터
  blocks.js       새 콘텐츠 블록 빌더 (callout·heading·text·bullet·image…)
  metadata.js     추출된 메타 → Next Metadata 매핑
scripts/          extract.mjs(이관), verify.mjs(충실도 검증 — 리디자인된
                  페이지는 REDESIGNED 목록으로 레거시 대조를 스킵하되 출력
                  존재 여부는 계속 검사), make-qr.mjs(QR SVG 생성)
public/           assets(css/images)·favicon·robots·sitemap·CNAME·검색엔진 인증 파일
```

## 자주 하는 작업

### PC 앱 새 버전 릴리스
1. `lib/download.js` 의 `MAC_VERSION` / `WIN_VERSION` 수정
2. `lib/changelog-data.js` 의 `logs` 배열 맨 앞에 새 항목 추가 (9개 언어)

### 기존 페이지 문구 수정
`content/<lang>/<page>.json` 의 `blocks` 배열에서 해당 블록의 `html` 을 수정합니다.
블록의 `type` 필드로 종류를 식별할 수 있습니다. 다국어 패리티: 같은 수정을
9개 언어 파일에 반영해야 합니다.

### 새 콘텐츠 블록 추가
`blocks` 배열에 빌더 참조 항목을 삽입합니다 (마크업은 자동 생성):

```json
{ "new": "callout", "icon": "💡", "html": "안내 문구 <b>강조</b> 가능" }
{ "new": "heading1", "html": "새 섹션" }
{ "new": "text", "html": "본문 문단" }
{ "new": "bullet", "html": "불릿 항목" }
{ "new": "image", "src": "/assets/images/pencake_xxx_ko.png" }
{ "new": "divider" }
{ "new": "spacer" }
```

지원 빌더는 `lib/blocks.js` 참고. `blockId`(uuid)를 주면 `#앵커` 딥링크 대상이 됩니다.

### 새 페이지 추가
1. `content/<lang>/<새페이지>.json` 생성 — 기존 페이지 JSON을 복사해 `meta`(title,
   description, og, hreflang, canonical)와 `blocks` 수정이 가장 쉬움
2. 영어는 `app/(home)/<경로>/page.js`, 나머지 언어는
   `app/(i18n)/[lang]/<경로>/page.js` 를 기존 라우트 파일 복사로 생성
   (pageKey만 변경). `(home)` 은 리디자인 디자인 시스템이므로 레거시 마크업을
   그대로 쓰려면 `SitePage` 를 렌더하지 말고 `(i18n)` 쪽 패턴을 따르세요
3. `public/sitemap.xml` 에 URL 추가, 관련 페이지 hreflang/언어 스위처 링크 갱신

### FAQ 앵커 ID (중요)
FAQ 질문 블록의 `id` / `data-block-id` uuid는 앱에서 딥링크로 사용됩니다.
**절대 변경하지 마세요.** `npm run verify` 가 레거시 대비 누락을 검사합니다
(레거시 HTML이 레포에 남아 있는 동안).

## 배포

`.github/workflows/deploy.yml` 이 main 푸시 시 빌드 후 GitHub Pages로 배포합니다.
최초 1회 설정: 레포 Settings → Pages → Source 를 **GitHub Actions** 로 변경.
커스텀 도메인은 `public/CNAME`(pencake.app)으로 유지됩니다.
