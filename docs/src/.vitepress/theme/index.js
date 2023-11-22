import DefaultTheme from "vitepress/theme";
import { defineCustomElements } from "ivy-ui";
import { registerComponent } from 'ivy-icon'
import "./index.css";
import 'ivy-ui/dist/index.css'

export default {
    ...DefaultTheme,
    async enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        if (!import.meta.env.SSR) {
            defineCustomElements();
            registerComponent()
        }
    },
};
