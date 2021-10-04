import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@eclass/ui-kit',
      fileName: format => `eclass-ui-kit.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@atoms': path.resolve(__dirname, './src/atoms/'),
      '@theme': path.resolve(__dirname, './src/theme/'),
      '@molecules': path.resolve(__dirname, './src/molecules/'),
      '@organisms': path.resolve(__dirname, './src/organisms/'),
      '@icon': path.resolve(__dirname, './src/atoms/Icons/'),
      '@color': path.resolve(__dirname, './src/theme/colors'),
    },
  },
})
