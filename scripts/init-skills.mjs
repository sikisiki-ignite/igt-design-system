#!/usr/bin/env node
/**
 * IGT Design System — Claude Skills 설치
 *
 * 사용법: npx igt-init
 *
 * 다른 프로젝트에서 실행하면 .claude/commands/ 에 IGT skills를 복사합니다.
 * 복사 후 Claude Code에서 /ui, /page, /component 커맨드를 사용할 수 있습니다.
 */

import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const packageRoot = join(__dirname, '..')
const targetRoot = process.cwd()

// 이 스크립트가 IGT 패키지 자체에서 실행되는 경우 중단
if (targetRoot === packageRoot) {
  console.log('IGT 패키지 디렉토리에서는 실행할 필요가 없습니다.')
  process.exit(0)
}

console.log('IGT Design System — Claude Skills 설치 중...\n')

// .claude/commands 디렉토리 생성
const targetDir = join(targetRoot, '.claude', 'commands')
mkdirSync(targetDir, { recursive: true })

// skills 파일 복사
const skills = ['ui.md', 'page.md', 'component.md']
let installed = 0

for (const skill of skills) {
  const src = join(packageRoot, '.claude', 'commands', skill)
  const dest = join(targetDir, skill)

  if (!existsSync(src)) {
    console.log(`⚠  ${skill} 소스 파일 없음, 건너뜀`)
    continue
  }

  if (existsSync(dest)) {
    console.log(`↩  .claude/commands/${skill} 이미 존재, 건너뜀`)
  } else {
    copyFileSync(src, dest)
    console.log(`✓  .claude/commands/${skill} 설치됨`)
    installed++
  }
}

// CLAUDE.md 에 IGT 사용 안내 추가
const claudeMdPath = join(targetRoot, 'CLAUDE.md')
const igt_notice = `
## IGT Design System

이 프로젝트는 IGT Design System을 사용합니다.

- 컴포넌트 설치: \`npm install igt-design-system\`
- CSS 토큰 임포트: \`import 'igt-design-system/styles'\`

### Claude Code Skills

| 커맨드 | 용도 |
|--------|------|
| \`/ui\` | IGT 컴포넌트로 UI 조각 생성 |
| \`/page\` | IGT 컴포넌트로 전체 페이지 생성 |
| \`/component\` | 특정 컴포넌트 props/예시 조회 |
`

if (!existsSync(claudeMdPath)) {
  writeFileSync(claudeMdPath, igt_notice.trim() + '\n')
  console.log(`✓  CLAUDE.md 생성됨`)
} else {
  const existing = readFileSync(claudeMdPath, 'utf-8')
  if (!existing.includes('IGT Design System')) {
    writeFileSync(claudeMdPath, existing + '\n' + igt_notice)
    console.log(`✓  CLAUDE.md 에 IGT 안내 추가됨`)
  } else {
    console.log(`↩  CLAUDE.md 에 이미 IGT 안내 있음, 건너뜀`)
  }
}

console.log(`\n✅ 완료! (${installed}개 설치됨)`)
console.log('Claude Code에서 /ui, /page, /component 커맨드를 사용하세요.')
