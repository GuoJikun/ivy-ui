import DefaultTheme from "vitepress/theme";
import { defineCustomElements } from "ivy-ui";
import "./index.css";

export default {
    ...DefaultTheme,
    async enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        if (!import.meta.env.SSR) {
            defineCustomElements();
        }
    },
};
