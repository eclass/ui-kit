const path = require('path')
const tsconfigPaths = require('vite-tsconfig-paths').default

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: true
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths({ extensions: ['ts', 'tsx', 'mdx'] })],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/css': toPath('node_modules/@emotion/css'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  }
}
