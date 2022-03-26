import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "src/index.js",
    output: {
        file: "dist/ivy-ui.js",
        format: "es",
    },
    plugins: [resolve({
        alias: {
            
        }
    }), commonjs()],
};
