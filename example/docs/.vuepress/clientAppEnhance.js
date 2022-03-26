import { defineClientAppEnhance } from "@vuepress/client";
// import "ivy-ui";

export default defineClientAppEnhance(async ({ app }) => {
    if (!__VUEPRESS_SSR__) {
        import("ivy-ui");
    }
    // app.config.compilerOptions.isCustomElement = tag => tag.startsWith("ivy-");
});
