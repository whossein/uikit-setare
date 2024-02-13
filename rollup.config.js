import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
// import copy from "rollup-plugin-copy";
// import images from "@rollup/plugin-image";
// import url from "@rollup/plugin-url";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      // copy({
      //   targets: [
      //     // { src: 'assets/images/**/*', dest: 'dist/public/images' },
      //     {
      //       src: "src/components/image/holder-images",
      //       dest: "dist/",
      //     },
      //   ],
      // }),

      // images(),
      // url({
      //   // Where to put files
      //   destDir: "dist/assets/",
      //   // Path to put infront of files (in code)
      //   publicPath:
      //     process.env.NODE_ENV === "development"
      //       ? "http://localhost:8000/dist/assets/"
      //       : "./assets/",
      //   // File name once copied
      //   fileName: "[name][extname]",
      //   // Kinds of files to process
      //   include: ["**/*.svg", "**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"],
      // }),
      commonjs(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
