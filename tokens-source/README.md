# Token Source Files

Figma에서 내보낸 디자인 토큰 JSON 파일을 이 폴더에 넣은 후
아래 명령어를 실행하면 src/tokens/ CSS 파일이 자동 재생성됩니다.

```
npm run build:tokens
```

## 지원하는 파일 이름

| JSON 파일 | 생성되는 CSS |
|-----------|-------------|
| `primitives.Mode 1.tokens.json` | `src/tokens/primitives.css` |
| `semanticColor.Blue.tokens.json` | `src/tokens/semantic-color.css` (`:root`) |
| `semanticColor.Blue  Dark.tokens.json` | `src/tokens/semantic-color.css` (`[data-theme="dark"]` 추가) |
| `semanticRadius.soft (3).tokens.json` | `src/tokens/semantic-radius.css` (`:root` 기본값) |
| `semanticRadius.formal (1).tokens.json` | `src/tokens/semantic-radius.css` (`[data-radius="formal"]`) |
| `semanticRadius.neutral (2).tokens.json` | `src/tokens/semantic-radius.css` (`[data-radius="neutral"]`) |
| `semanticRadius.friendly (4).tokens.json` | `src/tokens/semantic-radius.css` (`[data-radius="friendly"]`) |
| `semanticRadius.playful (5).tokens.json` | `src/tokens/semantic-radius.css` (`[data-radius="playful"]`) |
| `semanticSize.Mode 1.tokens.json` | `src/tokens/semantic-size.css` |
| `semanticTypography.IGNITE Sans.tokens.json` | `src/tokens/semantic-typography.css` |
| `component.Mode 1.tokens.json` | `src/tokens/component.css` |
| `effect.styles.tokens.json` | `src/tokens/effect.css` |

## 참고 사항

- 스크립트는 Figma export 경로(`~/Downloads/design-tokens 2/`)에 파일이 있으면 자동으로 이 폴더로 복사합니다.
- 직접 이 폴더에 파일을 넣어도 정상 동작합니다.
- `semanticTypography`의 `fontFamily` 값은 `'Pretendard Variable'` 스택으로 자동 치환됩니다.
