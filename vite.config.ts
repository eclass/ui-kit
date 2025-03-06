import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import { version } from './package.json'

// https://vitejs.dev/config/

let myDefineConfig

const buildEnv = process.env.VITE_REACT_DEPLOY_DOCUMENTATION

if (buildEnv === 'DOCUMENTATION') {
  myDefineConfig = {
    plugins: [react(), tsconfigPaths()],
    build: {
      sourcemap: true,
    },
    define : {
      _APP_VERSION_: JSON.stringify(version),
    }
  }
} else {
  myDefineConfig = {
    plugins: [react(), tsconfigPaths()],
    define : {
      _APP_VERSION_: JSON.stringify(version),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: '@eclass/ui-kit',
        fileName: (format: string) => `eclass-ui-kit.${format}.js`,
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
  }
}

export default defineConfig(myDefineConfig)
