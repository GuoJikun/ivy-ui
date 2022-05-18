import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/ns-ui.js",
        format: "es",
    },
    plugins: [
        resolve({
            alias: {
                "@": "./src",
            },
        }),
        commonjs(),
    ],
};
