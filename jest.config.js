module.exports = {
  testEnvironment: 'jsdom',
  roots: ['test'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {tsconfig: './tsconfig.test.json'},
    ],
  }
};
