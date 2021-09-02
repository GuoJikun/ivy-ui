import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "index.js",
    output: {
        file: "lib/ivy-ui.js",
        format: "esm",
    },
    plugins: [resolve()],
};
