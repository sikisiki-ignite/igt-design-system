import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync } from 'fs'

// 폰트 파일을 dist/fonts/ 에 복사하는 플러그인
const copyFonts = {
  name: 'copy-fonts',
  closeBundle() {
    const srcDir = resolve(__dirname, 'public/fonts')
    const destDir = resolve(__dirname, 'dist/fonts')
    mkdirSync(destDir, { recursive: true })
    for (const file of readdirSync(srcDir)) {
      copyFileSync(resolve(srcDir, file), resolve(destDir, file))
    }
  },
}

// 라이브러리 배포 전용 빌드 설정 (npm publish용)
// 사용: npm run build:lib
export default defineConfig({
  plugins: [react(), copyFonts],
  // lib 빌드 시 public/ 을 그대로 복사하지 않음 (폰트는 플러그인으로 직접 처리)
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'style[extname]',
      },
    },
  },
})
