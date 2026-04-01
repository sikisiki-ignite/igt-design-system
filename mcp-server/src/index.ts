import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { z } from 'zod'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..') // mcp-server/src → project root

// ─── Component Parser ────────────────────────────────────────

interface PropDef {
  name: string
  required: boolean
  type: string
  values?: string[] // enum 허용값 (union type alias인 경우)
}

interface ComponentDef {
  name: string
  props: PropDef[]
}

function parseComponents(): Record<string, ComponentDef> {
  const content = readFileSync(join(ROOT, 'src/types/components.ts'), 'utf-8')

  // 1. type alias 파싱 → 허용값 추출
  // ex: export type ButtonTone = 'primary' | 'secondary' | 'danger'
  const typeAliases: Record<string, string[]> = {}
  const typeAliasRe = /^export type (\w+)\s*=\s*([^\n]+)/gm
  let m: RegExpExecArray | null

  while ((m = typeAliasRe.exec(content)) !== null) {
    const name = m[1]
    const body = m[2]
    const values = [...body.matchAll(/'([^']+)'/g)].map((v) => v[1])
    if (values.length > 0) typeAliases[name] = values
  }

  // 2. interface 파싱 → props 추출 (라인 단위)
  const components: Record<string, ComponentDef> = {}
  const lines = content.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const ifaceMatch = line.match(/^export interface (\w+Props)(?:<[^>]+>)?\s*\{/)

    if (ifaceMatch) {
      const componentName = ifaceMatch[1].replace('Props', '')
      const props: PropDef[] = []
      i++

      while (i < lines.length && !lines[i].match(/^\}/)) {
        const propLine = lines[i]
        // prop 정의 라인 파싱: "  name?: Type  // comment"
        const propMatch = propLine.match(/^\s+([\w'"-]+)\??:\s*(.+)/)
        if (propMatch) {
          const propName = propMatch[1].replace(/['"]/g, '')
          const required = !propLine.includes('?:')
          const rawType = propMatch[2]
            .replace(/\/\/.*$/, '') // 인라인 주석 제거
            .trim()

          props.push({
            name: propName,
            required,
            type: rawType,
            values: typeAliases[rawType], // alias이면 허용값 포함
          })
        }
        i++
      }

      components[componentName] = { name: componentName, props }
    }

    i++
  }

  return components
}

// ─── Token Parser ─────────────────────────────────────────────

interface TokenGroup {
  file: string
  tokens: string[]
}

function parseTokens(): TokenGroup[] {
  const tokenDir = join(ROOT, 'src/tokens')
  const files = [
    'semantic-color.css',
    'semantic-typography.css',
    'semantic-size.css',
    'semantic-radius.css',
  ]

  return files.flatMap((file) => {
    try {
      const content = readFileSync(join(tokenDir, file), 'utf-8')
      const tokens: string[] = []
      const re = /^\s*(--[\w-]+)\s*:/gm
      let m: RegExpExecArray | null
      while ((m = re.exec(content)) !== null) tokens.push(m[1])
      return [{ file: file.replace('.css', ''), tokens }]
    } catch {
      return []
    }
  })
}

// ─── Category Map ─────────────────────────────────────────────

const CATEGORIES: Record<string, string[]> = {
  Actions: [
    'Button',
    'TextButton',
    'IconButton',
    'FloatingButton',
    'ButtonGroup',
    'Link',
    'OverlayAction',
  ],
  'Form Inputs': [
    'TextField',
    'TextArea',
    'SearchField',
    'Select',
    'Checkbox',
    'Radio',
    'Switch',
    'Rating',
    'NumberStepper',
  ],
  Selection: ['ActionChip', 'SelectChip', 'SegmentedControl', 'Tab'],
  Feedback: ['Toast', 'Alert', 'Dialog', 'Tooltip', 'Popover'],
  Display: ['Badge', 'Tag', 'Avatar', 'Divider', 'StatusIndicator'],
  Navigation: [
    'TopNavigation',
    'SideNavigation',
    'Breadcrumb',
    'Pagination',
    'Accordion',
  ],
  Loading: ['SkeletonRect', 'SkeletonCircle', 'SkeletonText'],
  Data: ['Table'],
}

// ─── MCP Server ───────────────────────────────────────────────

const server = new McpServer({
  name: 'igt-design-system',
  version: '0.1.0',
})

// Tool 1: 컴포넌트 목록
server.tool(
  'list_components',
  'IGT 디자인 시스템의 모든 컴포넌트 목록을 카테고리별로 반환합니다. 어떤 컴포넌트가 있는지 파악할 때 사용하세요.',
  {},
  async () => {
    let text = '# IGT Design System — 컴포넌트 목록\n\n'
    for (const [category, names] of Object.entries(CATEGORIES)) {
      text += `## ${category}\n`
      text += names.map((n) => `- ${n}`).join('\n')
      text += '\n\n'
    }
    text +=
      '> 특정 컴포넌트의 props를 확인하려면 get_component 도구를 사용하세요.\n'
    text += '> 사용 가능한 디자인 토큰을 찾으려면 search_tokens 도구를 사용하세요.'
    return { content: [{ type: 'text' as const, text }] }
  },
)

// Tool 2: 컴포넌트 상세 정보
server.tool(
  'get_component',
  '특정 IGT 컴포넌트의 props, 허용값, 타입을 반환합니다. UI 코드 작성 전 반드시 확인하세요.',
  {
    name: z
      .string()
      .describe(
        '컴포넌트 이름. 예: Button, TextField, Tag, SideNavigation, Table',
      ),
  },
  async ({ name }) => {
    const components = parseComponents()

    // 대소문자 무관 검색
    const key =
      Object.keys(components).find(
        (k) => k.toLowerCase() === name.toLowerCase(),
      ) ?? name

    const comp = components[key]

    if (!comp) {
      const available = Object.keys(components).sort().join(', ')
      return {
        content: [
          {
            type: 'text' as const,
            text: `'${name}' 컴포넌트를 찾을 수 없습니다.\n\n사용 가능한 컴포넌트:\n${available}`,
          },
        ],
      }
    }

    let text = `# ${comp.name} 컴포넌트\n\n## Props\n\n`

    for (const prop of comp.props) {
      const req = prop.required ? '**필수**' : '선택'
      const values = prop.values
        ? `\n  → 허용값: ${prop.values.map((v) => `\`'${v}'\``).join(' | ')}`
        : ''
      text += `- \`${prop.name}\` (${req}): \`${prop.type}\`${values}\n`
    }

    text += `\n## 임포트\n\`\`\`tsx\nimport { ${comp.name} } from 'igt-design-system'\n// 또는\nimport { ${comp.name} } from '../components/${comp.name}'\n\`\`\`\n`

    return { content: [{ type: 'text' as const, text }] }
  },
)

// Tool 3: 토큰 검색
server.tool(
  'search_tokens',
  'IGT 디자인 시스템의 CSS 토큰(변수)을 키워드로 검색합니다. 색상, 간격, 타이포그래피 토큰을 찾을 때 사용하세요.',
  {
    keyword: z
      .string()
      .describe(
        '검색 키워드. 예: content, surface, border, spacing, radius, heading, label, caption',
      ),
    category: z
      .enum([
        'semantic-color',
        'semantic-typography',
        'semantic-size',
        'semantic-radius',
        'all',
      ])
      .optional()
      .describe('검색 범위. 기본값: all'),
  },
  async ({ keyword, category = 'all' }) => {
    const groups = parseTokens()
    const filtered =
      category === 'all' ? groups : groups.filter((g) => g.file === category)

    let text = `# 토큰 검색: \`${keyword}\`\n\n`
    let totalFound = 0

    for (const group of filtered) {
      const matches = group.tokens.filter((t) =>
        t.toLowerCase().includes(keyword.toLowerCase()),
      )
      if (matches.length === 0) continue

      text += `## ${group.file}\n`
      text += matches.map((t) => `- \`${t}\``).join('\n')
      text += '\n\n'
      totalFound += matches.length
    }

    if (totalFound === 0) {
      text += `'${keyword}' 와 일치하는 토큰이 없습니다.\n`
      text += '다른 키워드를 시도해보세요: content, surface, border, background, spacing, radius, label, heading, caption'
    } else {
      text += `> 총 ${totalFound}개 토큰 발견\n`
      text +=
        '> 사용 시: `style={{ color: "var(--token-name)" }}` 형식으로 사용하세요.'
    }

    return { content: [{ type: 'text' as const, text }] }
  },
)

// ─── 시작 ─────────────────────────────────────────────────────

const transport = new StdioServerTransport()
await server.connect(transport)
