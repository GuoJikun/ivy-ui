import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      await import("ivy-ui");
    }
  },
};
