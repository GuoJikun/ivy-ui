import { defineClientAppEnhance } from "@vuepress/client";
import "ivy-ui";

export default defineClientAppEnhance(({ app }) => {
    console.log("***********************");
    app.config.compilerOptions.isCustomElement = tag => {
        const flag = tag.startsWith("ivy-");
        console.log("------", tag, flag);
        return flag;
    };
});
