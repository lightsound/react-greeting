import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "./lib/index.ts",

  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],

  external: [...Object.keys(pkg.peerDependencies || {})],

  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015",
          declaration: true,
          moduleResolution: "node",
        },
      },
    }),
    terser(),
  ],
};
