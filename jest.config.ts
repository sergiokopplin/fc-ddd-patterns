export default {
  transform: {
    "^.+.(t|j)sx?$": ["@swc/jest"],
  },
  testEnvironment: "node",
  coverageProvider: "v8",
  modulePaths: ["<rootDir>/src/"],
};
