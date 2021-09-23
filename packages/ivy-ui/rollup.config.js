import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const Global = `var process = {
  env: {
    NODE_ENV: 'production'
  }
}`;

export default {
    input: "src/index.js",
    output: {
        file: "lib/index.js",
        format: "es",
        banner: Global,
    },
    plugins: [resolve(), commonjs()],
};
