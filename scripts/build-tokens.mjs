// scripts/build-tokens.mjs
// Reads W3C design token JSON files from tokens-source/ and generates CSS custom properties in src/tokens/

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, copyFileSync, statSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE_DIR = join(ROOT, 'tokens-source')
const OUT_DIR = join(ROOT, 'src', 'tokens')

// Ensure output directory exists
mkdirSync(OUT_DIR, { recursive: true })
mkdirSync(SOURCE_DIR, { recursive: true })

// ---------------------------------------------------------------------------
// Step 1: Copy fresh files from the Figma export location if they exist there
// ---------------------------------------------------------------------------
const FIGMA_EXPORT_DIR = '/Users/sikisiki/Downloads/design-tokens 2'
if (existsSync(FIGMA_EXPORT_DIR)) {
  const entries = readdirSync(FIGMA_EXPORT_DIR)
  for (const entry of entries) {
    const srcPath = join(FIGMA_EXPORT_DIR, entry)
    const stat = statSync(srcPath)
    if (stat.isFile() && entry.endsWith('.json')) {
      const destPath = join(SOURCE_DIR, entry)
      copyFileSync(srcPath, destPath)
    } else if (stat.isDirectory()) {
      // Handle nested directories (e.g. "semanticColor.Blue /")
      const subEntries = readdirSync(srcPath)
      for (const sub of subEntries) {
        const subSrc = join(srcPath, sub)
        if (statSync(subSrc).isFile() && sub.endsWith('.json')) {
          // Flatten: prefix with parent dir name
          const flatName = entry.trimEnd() + ' ' + sub
          copyFileSync(subSrc, join(SOURCE_DIR, flatName))
        }
      }
    }
  }
  console.log('Copied token files from Figma export directory.')
}

// ---------------------------------------------------------------------------
// Step 2: Token parsing utilities
// ---------------------------------------------------------------------------

/**
 * Convert a dot-separated token path into a CSS custom property name.
 * e.g. ["ref", "blue", "500"] -> "--ref-blue-500"
 * Special chars (✓, spaces, /) are stripped or replaced with hyphens.
 */
function pathToCssVar(parts) {
  const sanitized = parts
    .map(p =>
      p
        .replace(/[✓✗]/g, '')           // strip check marks
        .replace(/\s*[-–]\s*/g, '-')     // normalize dashes
        .replace(/[\s/\\()]+/g, '-')     // spaces, slashes, parens → hyphen
        .replace(/[^a-zA-Z0-9_-]/g, '') // strip remaining special chars
        .replace(/-+/g, '-')             // collapse multiple hyphens
        .replace(/^-|-$/g, '')           // trim leading/trailing hyphens
    )
    .filter(Boolean)
  return '--' + sanitized.join('-')
}

/**
 * Resolve an alias reference like "{ref.blue.500}" to "var(--ref-blue-500)".
 */
function resolveAlias(value) {
  if (typeof value !== 'string') return value
  return value.replace(/\{([^}]+)\}/g, (_, path) => {
    const parts = path.split('.')
    return `var(${pathToCssVar(parts)})`
  })
}

/**
 * Format a shadow token value array into a CSS box-shadow string.
 */
function formatShadow(shadows) {
  if (!Array.isArray(shadows)) return String(shadows)
  return shadows
    .map(s => `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`)
    .join(', ')
}

/**
 * Flatten a nested token object into an array of { path: string[], type, value } entries.
 * Stops recursing when it finds a node with "$value".
 */
function flattenTokens(obj, pathSoFar = []) {
  const results = []
  if (typeof obj !== 'object' || obj === null) return results

  if ('$value' in obj) {
    results.push({ path: pathSoFar, type: obj.$type, value: obj.$value })
    return results
  }

  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue // skip $description etc
    results.push(...flattenTokens(val, [...pathSoFar, key]))
  }
  return results
}

/**
 * Convert a single token entry to one or more CSS variable declarations.
 * Returns an array of "  --var-name: value;" strings.
 */
function tokenToCssLines(token, { isTypography = false } = {}) {
  const { path, type, value } = token
  const varName = pathToCssVar(path)

  // Shadow type
  if (type === 'shadow') {
    return [`  ${varName}: ${formatShadow(value)};`]
  }

  // Typography: the value may be a composite object OR each property is its
  // own separate leaf token (as in the IGNITE Sans file where they are leaves).
  if (type === 'typography' && typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const lines = []
    for (const [prop, propValue] of Object.entries(value)) {
      const propVar = `${varName}-${prop}`
      let resolved = resolveAlias(typeof propValue === 'object' ? propValue.$value ?? propValue : propValue)
      if (prop === 'fontFamily' && isTypography) {
        resolved = `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
      }
      lines.push(`  ${propVar}: ${resolved};`)
    }
    return lines
  }

  // For individual typography leaf tokens (fontFamily specifically)
  let resolved = resolveAlias(value)
  if (isTypography && (path[path.length - 1] === 'fontFamily' || type === 'fontFamily')) {
    resolved = `'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
  }

  return [`  ${varName}: ${resolved};`]
}

/**
 * Generate a CSS block from a token JSON object.
 * @param {object} tokenObj - parsed JSON
 * @param {string} selector - CSS selector (e.g. ":root", '[data-theme="dark"]')
 * @param {object} opts
 */
function generateCssBlock(tokenObj, selector, opts = {}) {
  const { isTypography = false } = opts
  const tokens = flattenTokens(tokenObj)
  const lines = []

  for (const token of tokens) {
    const cssLines = tokenToCssLines(token, { isTypography })
    lines.push(...cssLines)
  }

  if (lines.length === 0) return ''
  return `${selector} {\n${lines.join('\n')}\n}\n`
}

// ---------------------------------------------------------------------------
// Step 3: Define the file → CSS mapping
// ---------------------------------------------------------------------------

function readJson(filename) {
  const filePath = join(SOURCE_DIR, filename)
  if (!existsSync(filePath)) {
    console.warn(`  Warning: source file not found: ${filename}`)
    return null
  }
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

function writeCSS(filename, content) {
  const outPath = join(OUT_DIR, filename)
  writeFileSync(outPath, content, 'utf8')
  console.log(`  Written: src/tokens/${filename}`)
}

// ---------------------------------------------------------------------------
// Build: primitives.css
// ---------------------------------------------------------------------------
console.log('\nBuilding primitives.css...')
{
  const data = readJson('primitives.Mode 1.tokens.json')
  if (data) {
    const css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n` +
      generateCssBlock(data, ':root')
    writeCSS('primitives.css', css)
  }
}

// ---------------------------------------------------------------------------
// Build: semantic-color.css  (light :root + dark [data-theme="dark"])
// ---------------------------------------------------------------------------
console.log('Building semantic-color.css...')
{
  const light = readJson('semanticColor.Blue.tokens.json')
  const dark = readJson('semanticColor.Blue  Dark.tokens.json') ||
               readJson('semanticColor.Blue Dark.tokens.json')

  let css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n`
  if (light) css += generateCssBlock(light, ':root')
  if (dark) css += '\n' + generateCssBlock(dark, '[data-theme="dark"]')
  writeCSS('semantic-color.css', css)
}

// ---------------------------------------------------------------------------
// Build: semantic-radius.css
// ---------------------------------------------------------------------------
console.log('Building semantic-radius.css...')
{
  const files = [
    { file: 'semanticRadius.soft (3).tokens.json',    selector: ':root' },
    { file: 'semanticRadius.formal (1).tokens.json',  selector: '[data-radius="formal"]' },
    { file: 'semanticRadius.neutral (2).tokens.json', selector: '[data-radius="neutral"]' },
    { file: 'semanticRadius.friendly (4).tokens.json',selector: '[data-radius="friendly"]' },
    { file: 'semanticRadius.playful (5).tokens.json', selector: '[data-radius="playful"]' },
  ]
  let css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n`
  for (const { file, selector } of files) {
    const data = readJson(file)
    if (data) css += generateCssBlock(data, selector) + '\n'
  }
  writeCSS('semantic-radius.css', css)
}

// ---------------------------------------------------------------------------
// Build: semantic-size.css
// ---------------------------------------------------------------------------
console.log('Building semantic-size.css...')
{
  const data = readJson('semanticSize.Mode 1.tokens.json')
  if (data) {
    const css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n` +
      generateCssBlock(data, ':root')
    writeCSS('semantic-size.css', css)
  }
}

// ---------------------------------------------------------------------------
// Build: semantic-typography.css
// ---------------------------------------------------------------------------
console.log('Building semantic-typography.css...')
{
  const data = readJson('semanticTypography.IGNITE Sans.tokens.json')
  if (data) {
    const css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n` +
      generateCssBlock(data, ':root', { isTypography: true })
    writeCSS('semantic-typography.css', css)
  }
}

// ---------------------------------------------------------------------------
// Build: component.css
// ---------------------------------------------------------------------------
console.log('Building component.css...')
{
  const data = readJson('component.Mode 1.tokens.json')
  if (data) {
    const css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n` +
      generateCssBlock(data, ':root')
    writeCSS('component.css', css)
  }
}

// ---------------------------------------------------------------------------
// Build: effect.css
// ---------------------------------------------------------------------------
console.log('Building effect.css...')
{
  const data = readJson('effect.styles.tokens.json')
  if (data) {
    const css = `/* Auto-generated by scripts/build-tokens.mjs — do not edit manually */\n\n` +
      generateCssBlock(data, ':root')
    writeCSS('effect.css', css)
  }
}

console.log('\nDone! All token CSS files have been generated in src/tokens/\n')
