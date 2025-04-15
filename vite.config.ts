import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
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
        'framer-motion'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chakra-ui/react': 'Chakra',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled',
          'framer-motion': 'framerMotion'
        }
      }
    }
  }
})