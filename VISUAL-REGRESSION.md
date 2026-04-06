# IGT Design System — Visual Regression Guide

## 구조 개요

```
Figma 수정
  ↓
check:tokens   → 토큰 드리프트 감지
  ↓
build:tokens   → CSS 재생성
  ↓
컴포넌트 코드 수정
  ↓
Chromatic      → 비주얼 diff + 디자이너 승인
  ↓
main 머지 → 배포
```

---

## 처음 시작 (Chromatic 연결)

**1. Chromatic 프로젝트 생성**
- [chromatic.com](https://www.chromatic.com) → GitHub 로그인
- "Add project" → 이 리포 선택
- Project Token 복사

**2. 첫 베이스라인 업로드**
```bash
npx chromatic --project-token=<YOUR_TOKEN>
```
첫 실행 시 모든 story가 베이스라인으로 자동 저장됨.

**3. GitHub Secret 등록**
- 리포 Settings → Secrets → `CHROMATIC_PROJECT_TOKEN` 등록
- 이후 PR마다 자동 실행됨

**4. `chromatic.config.json`에 projectId 입력**
```json
{
  "projectId": "YOUR_PROJECT_ID_HERE"
}
```

---

## 일상 워크플로우

### 개발자

```bash
# 1. Figma 토큰 export 후
npm run check:tokens      # 변경된 토큰 확인

# 2. 변경 있으면
npm run build:tokens      # CSS 재생성

# 3. 컴포넌트 수정 후 로컬 확인
npm run storybook

# 4. PR 올리면 Chromatic 자동 실행
```

### 디자이너

PR 생성 → Chromatic 링크 클릭 → Figma와 나란히 비교 → Accept / Deny

- **Accept**: 변경이 의도된 것. 새 베이스라인으로 확정.
- **Deny**: 의도하지 않은 변경. 개발자에게 피드백.

---

## 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run storybook` | 로컬 Storybook 실행 (포트 6006) |
| `npm run build-storybook` | Storybook 정적 빌드 |
| `npm run check:tokens` | Figma 소스 vs CSS 토큰 드리프트 확인 |
| `npm run build:tokens` | Figma JSON → CSS 재생성 |
| `npm run chromatic` | Chromatic 수동 실행 (토큰은 환경변수로) |

---

## Figma ↔ Storybook 직접 비교 (Chromatic 기능)

1. Chromatic 프로젝트에서 "Figma plugin" 설치
2. Figma에서 컴포넌트 선택 → story와 링크
3. 이후 Chromatic UI에서 Figma frame과 story를 나란히 표시
