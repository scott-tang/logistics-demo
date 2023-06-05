/* eslint-disable */
export default {
  displayName: 'user-api',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/user-api',
  moduleNameMapper: {
    '^uuid$': require.resolve('uuid'),
    '^typeorm$': require.resolve('typeorm'),
  },
};
