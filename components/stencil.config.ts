import { Config } from "@stencil/core";

export const config: Config = {
    namespace: "ivy",
    globalStyle: "src/index.css",
    globalScript: "src/global.ts",
    outputTargets: [
        {
            type: "dist-custom-elements",
            generateTypeDeclarations: true,
        },
        {
            type: "www",
            serviceWorker: null, // disable service workers
        },
    ],
};
