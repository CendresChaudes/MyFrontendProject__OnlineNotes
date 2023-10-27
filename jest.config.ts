/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/tests/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/index.{ts,tsx}',
    '!**/tests-index.ts',
    '!**/const.ts',
    '!**/types.d.ts',
    '!**/*.config.ts'
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
