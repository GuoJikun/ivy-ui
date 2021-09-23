import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const components = ["icon", "button"];

const generatorConfig = components => {
    return components.map(c => {
        return {
            input: `./packages/${c}/src/index.js`,
            output: ["es", "umd", "esnext"].map(type => {
                if (type === "esnext") {
                    return {
                        name: `ivy-${c}`,
                        format: "es",
                        file: `./packages/ivy-ui/dist/es/${c}.js`,
                    };
                } else {
                    return {
                        name: `ivy-${c}`,
                        format: type,
                        file: `./packages/${c}/dist/ivy-${c}.${type}.js`,
                    };
                }
            }),
            plugins: [nodeResolve(), terser()],
        };
    });
};

export default [...generatorConfig(components)];
