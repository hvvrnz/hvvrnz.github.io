# [![Portfolio](https://img.shields.io/badge/Portfolio-hvvrnz.github.io-8B6F52?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hvvrnz.github.io)

React(Vite) 기반 1페이지 포트폴리오. GitHub Actions로 `main` 브랜치 push 시 자동 빌드 → GitHub Pages 배포됩니다.

## 폴더 구조

```
src/
  content.js         ← 내용 수정시 content 파일만 수정 
  index.css          ← 색상 토큰 (--bg, --olive, --brown 등)
  components.css     ← 섹션별 레이아웃 스타일
  components/        ← 화면 구성 
  assets/notes/      ← 스캔 이미지
```

## 자주 하는 작업

**텍스트/숫자 수정**
`src/content.js`에서 해당 값만 바꾸면 됨.

**손필기 이미지 추가**
1. 스캔 이미지를 `src/assets/notes/` 안에 삽입 (예: `semaphore.jpg`)
2. `src/content.js`의 `studyNotes.items` 배열에서 해당 항목의 `image` 값을 `null`에서 실제 경로로 교체

**색 톤 바꾸기**
`src/index.css` 맨 위 `:root { ... }`의 변수 값만 바꾸면 전체 페이지 톤이 한 번에 변경.

## 배포

GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 지정한 뒤 `main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드 후 배포합니다. 별도 `gh-pages` 브랜치나 수동 빌드가 필요 없습니다.
