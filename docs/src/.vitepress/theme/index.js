import DefaultTheme from "vitepress/theme";
import { defineCustomElements, applyPolyfills } from "ivy-ui/loader";
import "./index.css";

export default {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    if (!import.meta.env.SSR) {
      applyPolyfills().then(() => {
        defineCustomElements();
      });
    }
  },
};
