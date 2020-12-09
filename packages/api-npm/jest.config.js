export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/*spec.ts'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  preset: 'ts-jest',
  verbose: true,
  useStderr: true
}
