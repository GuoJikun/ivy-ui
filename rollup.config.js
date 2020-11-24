import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const Global = `var process = {
  env: {
    NODE_ENV: 'production'
  }
}`;

export default {
    input: "index.js",
    output: {
        file: "docs/ivy-ui.js",
        format: "esm",
        banner: Global,
    },
    plugins: [resolve(), commonjs()],
};
