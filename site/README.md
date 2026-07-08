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
```

## 구조

```
app/
  (en)/           영어(루트) 페이지: /, /faq/, /privacy/, /guide/markdown/,
                  /download/desktop/, /download/mobile/
  (i18n)/[lang]/  8개 언어(ko·ja·zh-cn·zh-tw·de·es·pt·fr) 동일 6페이지
  (changelog)/    /changelog/desktop/ (?lang= 쿼리로 언어 선택)
components/       페이지 렌더러(SitePage)와 클라이언트 동작들
  NotionBehaviors.js       토글·#해시 스크롤+하이라이트·이미지 패딩 픽스
  DownloadHandlers.js      PC 다운로드 링크(data-download) 클릭 처리
  MobileDownloadRedirect.js 홈의 모바일 다운로드 버튼 UA 분기
  GoogleAnalytics.js       gtag 로더 (G-ZZNDMTFTKD)
  ChangelogApp.js          PC 버전 업데이트 기록 페이지
content/<lang>/<page>.json  페이지별 콘텐츠 (메타 + 본문 블록)
lib/
  download.js     ★ PC 앱 버전 상수(MAC_VERSION/WIN_VERSION)와 다운로드 URL
  changelog-data.js ★ PC 버전 업데이트 기록 데이터
  blocks.js       새 콘텐츠 블록 빌더 (callout·heading·text·bullet·image…)
  metadata.js     추출된 메타 → Next Metadata 매핑
scripts/          extract.mjs(이관), verify.mjs(충실도 검증)
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
2. `app/(en)/<경로>/page.js` + `app/(i18n)/[lang]/<경로>/page.js` 를 기존 라우트 파일
   복사로 생성 (pageKey만 변경)
3. `public/sitemap.xml` 에 URL 추가, 관련 페이지 hreflang/언어 스위처 링크 갱신

### FAQ 앵커 ID (중요)
FAQ 질문 블록의 `id` / `data-block-id` uuid는 앱에서 딥링크로 사용됩니다.
**절대 변경하지 마세요.** `npm run verify` 가 레거시 대비 누락을 검사합니다
(레거시 HTML이 레포에 남아 있는 동안).

## 배포

`.github/workflows/deploy.yml` 이 main 푸시 시 빌드 후 GitHub Pages로 배포합니다.
최초 1회 설정: 레포 Settings → Pages → Source 를 **GitHub Actions** 로 변경.
커스텀 도메인은 `public/CNAME`(pencake.app)으로 유지됩니다.
