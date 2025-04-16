import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// VITE_REACT_DEPLOY_DOCUMENTATION viene de tu script "deploy"
const isDocs = process.env.VITE_REACT_DEPLOY_DOCUMENTATION === 'DOCUMENTATION'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
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