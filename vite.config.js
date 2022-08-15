import { defineConfig } from "vite";
import { resolve } from "path";

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
    return {
      resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
        },
      },
      build: {
        lib: {
          entry: "src/index.js",
          name: "n-ui",
          format: (type) => {
            return `ivy-ui.${type}.js`;
          },
        },
        output: {
          globals: {
            HTMLElement: "HTMLElement",
          },
        },
      },
    };
  }
});
