const { pathsToModuleNameMapper } = require('ts-jest');
const fs = require('fs');

// Verifica que tsconfig.json existe antes de requerirlo
const tsConfig = fs.existsSync('./tsconfig.json') ? require('./tsconfig.json') : {};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/jest-setup.ts'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  roots: ['<rootDir>'],
  maxWorkers: '50%',
  cacheDirectory: '<rootDir>/.jest-cache',
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  modulePaths: tsConfig.compilerOptions ? [tsConfig.compilerOptions.baseUrl] : [],
  moduleNameMapper: {
    ...(tsConfig.compilerOptions && tsConfig.compilerOptions.paths
      ? pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/' })
      : {}),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$': 'identity-obj-proxy'
  }
};
