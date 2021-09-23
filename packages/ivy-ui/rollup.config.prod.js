import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.js",
    output: {
        file: "dist/ivy-ui.js",
        format: "es",
    },
    plugins: [resolve()],
};
