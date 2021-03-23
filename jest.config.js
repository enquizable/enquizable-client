module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: [
    '@testing-library/react',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'babel-jest',
  // },
};
