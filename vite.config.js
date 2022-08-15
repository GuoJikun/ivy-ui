import { defineConfig } from "vite";
import { resolve, join } from "path";
import Components from "./components.json";

const components = Object.keys(Components).map((key) => {
  return {
    external: ["vue"],
    input: join(__dirname, Components[key]),
    output: [
      {
        name: `ivy-${key}`,
        file: `dist/components/ivy-${key}.es.js`,
        format: "es",

        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      {
        name: `ivy-${key}`,
        file: `dist/components/ivy-${key}.umd.js`,
        format: "umd",
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    ],
  };
});

export default defineConfig(({ command, mode }) => {
  console.log(command, "----", mode);
  if (command === "serve") {
    return {
      resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
        },
      },
    };
  } else {
    const conf = {
      resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
        },
      },
      build: {
        rollupOptions: {
          output: {
            extend: true,
            globals: {
              HTMLElement: "HTMLElement",
            },
          },
        },
        lib: {
          entry: "src/index.js",
          name: "ivy-ui",
          fileName: (type) => {
            return `ivy-ui.${type}.js`;
          },
          formats: ["umd", "es", "iife", "cjs"],
        },
      },
    };
    return conf;
  }
});
