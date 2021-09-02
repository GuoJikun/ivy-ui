import { defineClientAppEnhance } from "@vuepress/client";
import "ivy-ui";

export default defineClientAppEnhance(({ app }) => {
    app.config.compilerOptions.isCustomElement = tag => tag.startsWith("ivy-");
});
