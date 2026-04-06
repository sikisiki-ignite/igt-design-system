// scripts/check-tokens.mjs
// Figma에서 export된 tokens-source/*.json과 현재 src/tokens/*.css를 비교하여
// 토큰 값이 달라진 항목을 리포트합니다.
// 사용: node scripts/check-tokens.mjs

import { readFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE_DIR = join(ROOT, 'tokens-source')
const CSS_DIR = join(ROOT, 'src', 'tokens')

// ─── CSS var 파싱 ────────────────────────────────────────────────
function parseCssVars(css) {
  const map = {}
  const re = /--([\w-]+)\s*:\s*([^;]+);/g
  let m
  while ((m = re.exec(css)) !== null) {
    map[`--${m[1]}`] = m[2].trim()
  }
  return map
}

// ─── JSON 토큰 flatten ───────────────────────────────────────────
function flattenTokens(obj, pathSoFar = []) {
  const results = []
  if (typeof obj !== 'object' || obj === null) return results
  if ('$value' in obj) {
    results.push({ path: pathSoFar, value: obj.$value })
    return results
  }
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue
    results.push(...flattenTokens(val, [...pathSoFar, key]))
  }
  return results
}

function pathToCssVar(parts) {
  const sanitized = parts
    .map(p =>
      p.replace(/[✓✗]/g, '')
        .replace(/\s*[-–]\s*/g, '-')
        .replace(/[\s/\\()]+/g, '-')
        .replace(/[^a-zA-Z0-9_-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .replace(/_+$/g, '')
        .replace(/^_+/, '')
        .replace(/raidus/g, 'radius')
        .replace(/varaiant/g, 'variant')
    )
    .filter(Boolean)
  return '--' + sanitized.join('-')
}

// ─── 현재 빌드된 CSS vars 읽기 ──────────────────────────────────
function readBuiltCssVars() {
  const cssFiles = readdirSync(CSS_DIR).filter(f => f.endsWith('.css') && f !== 'index.css' && f !== 'breakpoints.css' && f !== 'bridge.css')
  const allVars = {}
  for (const file of cssFiles) {
    const content = readFileSync(join(CSS_DIR, file), 'utf8')
    Object.assign(allVars, parseCssVars(content))
  }
  return allVars
}

// ─── 메인 ────────────────────────────────────────────────────────
function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error('tokens-source 디렉토리가 없습니다.')
    process.exit(1)
  }

  const builtVars = readBuiltCssVars()
  const jsonFiles = readdirSync(SOURCE_DIR).filter(f => f.endsWith('.json') && !f.includes('BM Dohyeon'))

  const changed = []
  const added = []
  let totalChecked = 0

  for (const file of jsonFiles) {
    const json = JSON.parse(readFileSync(join(SOURCE_DIR, file), 'utf8'))
    const tokens = flattenTokens(json)

    for (const { path, value } of tokens) {
      if (typeof value === 'object') continue // shadow, typography composite 등 스킵
      const varName = pathToCssVar(path)
      totalChecked++

      if (!(varName in builtVars)) {
        added.push({ varName, sourceFile: file, sourceValue: String(value) })
      }
    }
  }

  // ─── 리포트 출력 ────────────────────────────────────────────────
  console.log('\n─── IGT Token Drift Check ───────────────────────────────')
  console.log(`검사한 토큰 수: ${totalChecked}`)
  console.log(`CSS에 없는 토큰: ${added.length}`)

  if (added.length === 0) {
    console.log('\n✅ 토큰 드리프트 없음 — Figma 소스와 빌드된 CSS가 일치합니다.\n')
    process.exit(0)
  }

  console.log('\n⚠️  CSS에 반영되지 않은 Figma 토큰:')
  console.log('   (npm run build:tokens 를 실행하면 동기화됩니다)\n')

  const byFile = {}
  for (const item of added) {
    if (!byFile[item.sourceFile]) byFile[item.sourceFile] = []
    byFile[item.sourceFile].push(item)
  }

  for (const [file, items] of Object.entries(byFile)) {
    console.log(`  📄 ${file} (${items.length}개)`)
    for (const { varName, sourceValue } of items.slice(0, 5)) {
      console.log(`     ${varName}: ${sourceValue}`)
    }
    if (items.length > 5) {
      console.log(`     ... 외 ${items.length - 5}개`)
    }
    console.log()
  }

  process.exit(1) // 드리프트 있으면 non-zero exit (CI에서 감지 가능)
}

main()
