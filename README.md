# hvvrnz.github.io — 포트폴리오

React(Vite) 기반 1페이지 포트폴리오. GitHub Actions로 `main` 브랜치 push 시 자동 빌드 → GitHub Pages 배포됩니다.

## 폴더 구조 (수정할 때 여기만 보면 됨)

```
src/
  content.js        ← 텍스트/숫자 전부 여기 있음. 글 고칠 땐 이 파일만 수정.
  index.css          ← 색상 토큰 (--bg, --olive, --brown 등). 톤 바꾸려면 여기.
  components.css     ← 섹션별 레이아웃 스타일.
  components/        ← 화면 구성 (보통 안 건드려도 됨)
  assets/notes/      ← 손필기 스캔 이미지 넣는 곳
```

## 자주 하는 작업

**텍스트/숫자 수정**
`src/content.js`에서 해당 값만 바꾸면 됩니다. JSX(컴포넌트)는 그 값을 그대로 화면에 그려주기 때문에 건드릴 필요 없음.

**손필기 이미지 추가**
1. 스캔 이미지를 `src/assets/notes/` 안에 넣기 (예: `semaphore.jpg`)
2. `src/content.js`의 `studyNotes.items` 배열에서 해당 항목의 `image` 값을 `null`에서 실제 경로로 교체

**색 톤 바꾸기**
`src/index.css` 맨 위 `:root { ... }`의 변수 값만 바꾸면 전체 페이지 톤이 한 번에 바뀝니다.

## 로컬에서 미리보기

```bash
npm install
npm run dev
```
→ `http://localhost:5173` 접속

## 배포

레포 이름을 정확히 `hvvrnz.github.io`로 설정하고, GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 지정한 뒤 `main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드 후 배포합니다. 별도 `gh-pages` 브랜치나 수동 빌드가 필요 없습니다.
