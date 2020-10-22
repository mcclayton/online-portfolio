module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  "moduleNameMapper": {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node",
  ],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,ts}'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
  ],
};
