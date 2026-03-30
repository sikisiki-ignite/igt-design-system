# IGT 컴포넌트 조회

컴포넌트 이름: $ARGUMENTS

아래 경로 중 존재하는 곳에서 컴포넌트 정보를 읽고 아래 형식으로 정리하세요.
- `src/components/$ARGUMENTS/` 또는
- `node_modules/igt-design-system/src/components/$ARGUMENTS/`

타입 정보:
- `src/types/components.ts` 또는
- `node_modules/igt-design-system/src/types/components.ts`

## 출력 형식

### Props 테이블
| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|

### 허용값 목록
각 union 타입의 모든 허용값 나열

### 사용 예시
자주 쓰는 패턴 3가지 이상 코드로 보여주기

```tsx
// 기본 사용
// 다른 variant
// 비활성/에러 상태
```

### 주의사항
이 컴포넌트를 쓸 때 놓치기 쉬운 점
