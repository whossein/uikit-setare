/** @type {import('jest').Config} */

// const { pathsToModuleNameMapper } = require("ts-jest");
// const { compilerOptions } = require("./tsconfig");

const config = {
  verbose: true,
  preset: "ts-jest", // for typescript issues
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  setupFiles: ["jest-canvas-mock"], // for react lottie package error
  transform: {
    "\\.[jt]sx?$": "esbuild-jest",
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: "<rootDir>",
  // }),

  // {
  //   ".(css|less|scss)$": "identity-obj-proxy",
  //   "~src/(.*)": "<rootDir>/src/$1",
  // },
};

module.exports = config;
