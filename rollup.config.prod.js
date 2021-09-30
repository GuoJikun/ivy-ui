import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const components = [
    "badge",
    "button",
    "card",
    "checkbox",
    "collapse",
    "contextmenu",
    "copy",
    "divider",
    "drawer",
    "grid",
    "icon",
    "image",
    "input",
    "message",
    "modal",
    "progress",
    "radio",
    "rate",
    "select",
    "switch",
    "tab",
    "table",
    "tag",
    "timeline",
    "tooltip",
    "empty",
];

const generatorConfig = components => {
    return components.map(c => {
        return {
            input: `./packages/${c}/src/index.js`,
            output: [
                {
                    name: `ivy-${c}`,
                    format: "umd",
                    file: `./packages/${c}/dist/${c}.js`,
                },
                {
                    format: "es",
                    file: `./packages/${c}/dist/${c}.module.js`,
                },
                {
                    format: "es",
                    file: `./packages/ivy-ui/dist/es/${c}.js`,
                },
            ],
            plugins: [nodeResolve(), terser()],
        };
    });
};

export default [...generatorConfig(components)];
