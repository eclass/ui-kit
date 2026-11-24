/// <reference types="vitest/config" />
import { defineConfig, esmExternalRequirePlugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// VITE_REACT_DEPLOY_DOCUMENTATION viene de tu script "deploy"
const isDocs = process.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION'
// Solo al compilar la librería (vite build); no en dev, la documentación ni Vitest
const isLibBuild = !isDocs && process.argv.includes('build')

// Dependencias que pone el consumidor (peerDependencies): no se empaquetan
const peerExternals = [
  'react',
  'react-dom',
  '@chakra-ui/react',
  '@emotion/react',
  '@emotion/styled',
  'framer-motion',
]

export default defineConfig({
  plugins: [
    react(),
    // Las dependencias CommonJS empaquetadas (runtime de JSX, html-react-parser) hacen
    // require('react'). Sin este plugin quedan como require dinámico, que el webpack de los
    // consumidores (v8) no resuelve: "Cannot find module 'react'". Lo convierte en import.
    ...(isLibBuild ? [esmExternalRequirePlugin({ external: peerExternals })] : []),
  ],
  // Vite 2 reemplazaba process.env.NODE_ENV al compilar la librería y Vite 8 ya no: sin esto el
  // bundle accede a `process`, que no existe en el navegador del consumidor
  ...(isLibBuild ? { define: { 'process.env.NODE_ENV': JSON.stringify('production') } } : {}),
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
            // esmExternalRequirePlugin ya marca peerExternals como external
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