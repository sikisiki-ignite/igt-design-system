/**
 * 아이콘 빌드 스크립트
 *
 * src/icons/svg/{category}/*.svg
 *   → src/icons/components/{PascalName}.tsx  (React 컴포넌트)
 *   → src/icons/registry.ts                  (메타데이터 맵)
 *   → src/icons/index.ts                     (named exports)
 *
 * 사용법: node scripts/build-icons.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SVG_DIR    = path.resolve(__dirname, '../src/icons/svg');
const COMP_DIR   = path.resolve(__dirname, '../src/icons/components');

// ── 유틸 ────────────────────────────────────────────────────────────────────

/** kebab-case → PascalCase */
function toPascal(str) {
  return str
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

/**
 * SVG 파일 경로 → 컴포넌트 메타데이터
 *
 * svg/navigation/arrow-up-solid-2dp.svg
 *   → { category: 'navigation', baseName: 'arrow-up-solid-2dp',
 *        componentName: 'NavigationArrowUpSolid2dpIcon', style: 'solid', weight: '2dp' }
 */
function parseSvgPath(svgPath) {
  const rel      = path.relative(SVG_DIR, svgPath);
  const parts    = rel.split(path.sep);           // ['navigation', 'arrow-up-solid-2dp.svg']
  const category = parts[0];
  const baseName = path.basename(parts[1], '.svg'); // 'arrow-up-solid-2dp'

  const componentName = toPascal(category) + toPascal(baseName) + 'Icon';

  // style / weight 추론
  let style  = 'none';
  let weight = 'none';
  if (baseName.includes('solid'))   style  = 'solid';
  else if (baseName.includes('outline')) style = 'outline';
  if (baseName.includes('2dp'))     weight = '2dp';
  else if (baseName.includes('1dp')) weight = '1dp';
  else if (baseName.includes('1-5dp')) weight = '1.5dp';
  else if (baseName.includes('3dp')) weight = '3dp';

  // 순수 아이콘 이름 (style/weight 제거)
  const iconName = baseName
    .replace(/-solid$/, '')
    .replace(/-outline$/, '')
    .replace(/-solid-\d[\d.-]*dp$/, '')
    .replace(/-outline-\d[\d.-]*dp$/, '');

  return { category, baseName, iconName, componentName, style, weight };
}

// ── SVG 수집 ─────────────────────────────────────────────────────────────────
function collectSvgFiles() {
  const files = [];
  for (const cat of fs.readdirSync(SVG_DIR)) {
    const catDir = path.join(SVG_DIR, cat);
    if (!fs.statSync(catDir).isDirectory()) continue;
    for (const file of fs.readdirSync(catDir)) {
      if (!file.endsWith('.svg')) continue;
      files.push(path.join(catDir, file));
    }
  }
  return files.sort();
}

// ── React 컴포넌트 생성 ──────────────────────────────────────────────────────
function generateComponent(svgPath, meta) {
  const svgCode = fs.readFileSync(svgPath, 'utf-8');

  // SVG 내부 콘텐츠 추출 (<svg ...> ... </svg> 안쪽)
  const innerMatch = svgCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) throw new Error('SVG 파싱 실패');
  const inner = innerMatch[1]
    .trim()
    // fill="currentColor" 이미 처리됐지만 혹시 남은 것 정리
    .replace(/fill="#[0-9A-Fa-f]{3,8}"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9A-Fa-f]{3,8}"/g, 'stroke="currentColor"');

  const { componentName } = meta;

  return `import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const ${componentName} = ({ size = 24, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${inner}
  </svg>
);

export default ${componentName};
`;
}

// ── 메인 ─────────────────────────────────────────────────────────────────────
function main() {
  console.log('🔨 아이콘 컴포넌트 빌드 시작...\n');

  fs.mkdirSync(COMP_DIR, { recursive: true });

  const svgFiles = collectSvgFiles();
  console.log(`  SVG 파일 ${svgFiles.length}개 발견`);

  const allMeta = [];
  let success = 0;
  let failed  = 0;

  for (const svgPath of svgFiles) {
    const meta = parseSvgPath(svgPath);
    try {
      const tsx = generateComponent(svgPath, meta);
      const outPath = path.join(COMP_DIR, `${meta.componentName}.tsx`);
      fs.writeFileSync(outPath, tsx, 'utf-8');
      allMeta.push(meta);
      success++;
      if (success % 50 === 0) process.stdout.write(`  ${success}개 처리 중...\n`);
    } catch (err) {
      console.warn(`  ⚠️  실패: ${meta.componentName} — ${err.message}`);
      failed++;
    }
  }

  console.log(`  ✅ 컴포넌트 생성: ${success}개${failed ? ` / ❌ 실패: ${failed}개` : ''}`);

  // ── registry.ts 생성 ────────────────────────────────────────────────────
  const registryLines = [
    '// AUTO-GENERATED — do not edit manually. Run: node scripts/build-icons.mjs',
    '',
    "import type { FC, SVGProps } from 'react';",
    '',
    'export interface IconMeta {',
    '  name: string;',
    '  category: string;',
    '  style: string;',
    '  weight: string;',
    '  component: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;',
    '}',
    '',
  ];

  // 컴포넌트별 import
  for (const m of allMeta) {
    registryLines.push(`import { ${m.componentName} } from './components/${m.componentName}';`);
  }

  registryLines.push('');
  registryLines.push('export const iconRegistry: IconMeta[] = [');
  for (const m of allMeta) {
    registryLines.push(
      `  { name: '${m.category}-${m.iconName}', category: '${m.category}', style: '${m.style}', weight: '${m.weight}', component: ${m.componentName} },`
    );
  }
  registryLines.push('];');
  registryLines.push('');
  registryLines.push(
    'export const iconMap = new Map<string, IconMeta>(iconRegistry.map((m) => [m.component.displayName ?? m.component.name, m]));'
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../src/icons/registry.ts'),
    registryLines.join('\n'),
    'utf-8'
  );
  console.log('  ✅ registry.ts 생성 완료');

  // ── index.ts 생성 ───────────────────────────────────────────────────────
  const indexLines = [
    '// AUTO-GENERATED — do not edit manually. Run: node scripts/build-icons.mjs',
    '',
    "export * from './registry';",
    '',
  ];
  for (const m of allMeta) {
    indexLines.push(`export { ${m.componentName} } from './components/${m.componentName}';`);
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../src/icons/index.ts'),
    indexLines.join('\n'),
    'utf-8'
  );
  console.log('  ✅ index.ts 생성 완료');

  // ── 카테고리 요약 ───────────────────────────────────────────────────────
  const byCategory = allMeta.reduce((acc, m) => {
    acc[m.category] = (acc[m.category] || 0) + 1;
    return acc;
  }, {});

  console.log('\n카테고리별 컴포넌트 수:');
  for (const [cat, count] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${cat.padEnd(20)} ${count}개`);
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ 빌드 완료: 총 ${success}개 컴포넌트`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

try {
  main();
} catch (err) {
  console.error('❌ 빌드 오류:', err);
  process.exit(1);
}
