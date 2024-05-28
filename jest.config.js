// jest.config.js
export default {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };
  