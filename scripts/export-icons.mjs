/**
 * Figma 아이콘 SVG export 스크립트
 *
 * 사용법:
 *   FIGMA_TOKEN=figd_xxx node scripts/export-icons.mjs
 *
 * 결과:
 *   src/icons/svg/{category}/{icon-name}.svg
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── 설정 ────────────────────────────────────────────────────────────────────
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_TOKEN 환경변수가 필요합니다.');
  console.error('   사용법: FIGMA_TOKEN=figd_xxx node scripts/export-icons.mjs');
  process.exit(1);
}
const FILE_KEY    = 'f0pUEjS8joIDXShjcxBy0j';
const FRAME_ID    = '622-35860';
const OUTPUT_DIR  = path.resolve(__dirname, '../src/icons/svg');
const BATCH_SIZE  = 80; // Figma API 안정적인 배치 크기

// ── 유틸 ─────────────────────────────────────────────────────────────────────
function fetchJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error: ${e.message}\nBody: ${data.slice(0, 200)}`)); }
      });
    });
    req.on('error', reject);
  });
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // S3 redirect 처리
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Figma 네이밍 → 파일명 변환
 * igt_core_icon_navigation_arrow_up_solid_2dp → navigation/arrow-up-solid-2dp.svg
 */
function parseIconName(figmaName) {
  // prefix 제거
  const stripped = figmaName.replace(/^igt_core_icon_/, '');
  const parts = stripped.split('_');

  // 첫 번째 segment = category
  const category = parts[0];
  const rest = parts.slice(1).join('-');

  return { category, filename: `${rest}.svg` };
}

/**
 * SVG 후처리: 하드코딩 색상 → currentColor
 */
function processSvg(svgContent) {
  return svgContent
    .replace(/fill="#[0-9A-Fa-f]{3,8}"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9A-Fa-f]{3,8}"/g, 'stroke="currentColor"')
    .replace(/fill="black"/gi, 'fill="currentColor"')
    .replace(/fill="white"/gi, 'fill="currentColor"')
    .trim();
}

// ── 메인 ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('🔍 Figma에서 아이콘 목록 로드 중...');

  // 1. 아이콘 목록 조회
  const fileData = await fetchJson(
    `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${FRAME_ID}`,
    { 'X-Figma-Token': FIGMA_TOKEN }
  );

  const frameNode = fileData.nodes[FRAME_ID.replace('-', ':')]?.document;
  if (!frameNode) throw new Error('프레임 노드를 찾을 수 없습니다.');

  const compFrame = frameNode.children?.find((c) => c.name === 'component');
  const coreFrame = compFrame?.children?.find((c) => c.name === 'core');
  if (!coreFrame) throw new Error('core 프레임을 찾을 수 없습니다.');

  const icons = coreFrame.children
    .filter((c) => c.type === 'COMPONENT')
    .map((c) => ({ id: c.id, name: c.name }));

  console.log(`✅ 총 ${icons.length}개 아이콘 발견`);

  // 2. 출력 디렉토리 생성
  const categories = [...new Set(icons.map((ic) => parseIconName(ic.name).category))];
  for (const cat of categories) {
    fs.mkdirSync(path.join(OUTPUT_DIR, cat), { recursive: true });
  }
  console.log(`📁 ${categories.length}개 카테고리 디렉토리 생성: ${categories.join(', ')}`);

  // 3. 배치별 SVG URL 요청
  const batches = [];
  for (let i = 0; i < icons.length; i += BATCH_SIZE) {
    batches.push(icons.slice(i, i + BATCH_SIZE));
  }

  console.log(`\n📦 ${batches.length}개 배치로 SVG export 시작...\n`);

  let totalSaved = 0;
  let totalFailed = 0;

  for (let batchIdx = 0; batchIdx < batches.length; batchIdx++) {
    const batch = batches[batchIdx];
    const ids = batch.map((ic) => ic.id).join(',');

    console.log(`  배치 ${batchIdx + 1}/${batches.length} (${batch.length}개) — URL 요청 중...`);

    const imageData = await fetchJson(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false&svg_simplify_stroke=true`,
      { 'X-Figma-Token': FIGMA_TOKEN }
    );

    if (imageData.err) {
      console.error(`  ❌ API 오류: ${imageData.err}`);
      totalFailed += batch.length;
      continue;
    }

    const imageUrls = imageData.images || {};

    // 4. SVG 다운로드 및 저장 (병렬)
    const downloadPromises = batch.map(async (icon) => {
      const url = imageUrls[icon.id];
      if (!url) {
        console.warn(`  ⚠️  URL 없음: ${icon.name}`);
        totalFailed++;
        return;
      }

      try {
        const svgContent = await fetchText(url);

        // SVG 여부 확인
        if (!svgContent.trim().startsWith('<svg')) {
          console.warn(`  ⚠️  SVG 아님 (PNG?): ${icon.name}`);
          totalFailed++;
          return;
        }

        const { category, filename } = parseIconName(icon.name);
        const outputPath = path.join(OUTPUT_DIR, category, filename);
        fs.writeFileSync(outputPath, processSvg(svgContent), 'utf-8');
        totalSaved++;
      } catch (err) {
        console.warn(`  ⚠️  다운로드 실패: ${icon.name} — ${err.message}`);
        totalFailed++;
      }
    });

    await Promise.all(downloadPromises);
    console.log(`  ✅ 배치 ${batchIdx + 1} 완료`);

    // API rate limit 방지
    if (batchIdx < batches.length - 1) {
      await sleep(500);
    }
  }

  // 5. 결과 리포트
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ 저장 완료: ${totalSaved}개`);
  if (totalFailed > 0) console.log(`❌ 실패: ${totalFailed}개`);
  console.log(`📂 출력 경로: ${OUTPUT_DIR}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // 6. 카테고리별 통계
  const saved = fs.readdirSync(OUTPUT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({
      category: d.name,
      count: fs.readdirSync(path.join(OUTPUT_DIR, d.name)).length,
    }))
    .sort((a, b) => b.count - a.count);

  console.log('카테고리별 아이콘 수:');
  for (const { category, count } of saved) {
    console.log(`  ${category.padEnd(20)} ${count}개`);
  }
}

main().catch((err) => {
  console.error('❌ 스크립트 오류:', err.message);
  process.exit(1);
});
