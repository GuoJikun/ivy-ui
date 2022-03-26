import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { join } from "path";

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
    "tip",
    "steps",
    "breadcrumb",
    "split",
];

const generatorConfig = components => {
    return components.map(c => {
        return {
            input: `./packages/${c}/src/index.ts`,
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
                    file: `./ivy-ui/dist/component/${c}.js`,
                },
            ],
            plugins: [
                json(),
                typescript({
                    tsconfig: join(__dirname, "tsconfig.json"),
                    exclude: [join(__dirname, "packages/**/__test__/*.ts")],
                }),
                nodeResolve(),
                commonjs(),
                terser(),
            ],
        };
    });
};

export default [
    ...generatorConfig(components),
    {
        input: join(__dirname, `ivy-ui/src/index.ts`),
        output: [
            {
                format: "es",
                file: `./ivy-ui/dist/index.js`,
            },
            {
                format: "es",
                file: `./ivy-ui/dist/index.module.js`,
            },
        ],
        plugins: [
            json(),
            typescript({
                tsconfig: join(__dirname, "tsconfig.json"),
            }),
            nodeResolve(),
            commonjs(),
            terser(),
        ],
    },
];
