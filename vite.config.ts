/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// VITE_REACT_DEPLOY_DOCUMENTATION viene de tu script "deploy"
const isDocs = process.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION'

export default defineConfig({
  plugins: [react()],
  // Alias de tsconfig.json (@atoms, @theme, ...)
  resolve: { tsconfigPaths: true },
  // Pruebas (Vitest)
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['src/test/vitest-setup.ts'],
    // vmThreads crea jsdom una vez por worker (mantiene el aislamiento por archivo) y con la
    // mitad de los núcleos se evita la competencia por CPU: la suite tarda menos de la mitad
    pool: 'vmThreads',
    maxWorkers: '50%',
    coverage: {
      provider: 'v8',
      // Barrels, mocks y tipos no tienen lógica que probar
      exclude: ['**/index.ts', '**/index.tsx', '__mocks__/**', '**/*.d.ts'],
    },
  },
  build: {
    // ES2019: la librería debe correr en los fronts consumidores sin polyfills
    target: 'es2019',
    // Cuando sea docs, salida por defecto (dist/)
    // y no usaremos el modo "lib"
    ...(isDocs
      ? {
          // build de la web de componentes
          sourcemap: true,
          rollupOptions: {
            external: [],       // empaquetar todo
          },
        }
      : {
          // build de la librería
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: '@eclass/ui-kit',
            fileName: (format: string) => `eclass-ui-kit.${format}.js`,
            // Mantiene el nombre que generaba Vite 2 (dist/style.css)
            cssFileName: 'style',
          },
          sourcemap: true,
          rollupOptions: {
            external: [
              'react',
              'react-dom',
              '@chakra-ui/react',
              '@emotion/react',
              '@emotion/styled',
              'framer-motion',
            ],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                '@chakra-ui/react': 'Chakra',
                '@emotion/react': 'EmotionReact',
                '@emotion/styled': 'EmotionStyled',
                'framer-motion': 'framerMotion',
              },
            },
          },
        }),
  },
})