// jest.config.js
export default {
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };
  