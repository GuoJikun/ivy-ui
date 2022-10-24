import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const ivyUI = await import("ivy-ui/loader");
      console.log(ivyUI);
      if (ivyUI.defineCustomElements) {
        ivyUI.defineCustomElements();
      }
      await import("ivy-icon/dist/components/index");
    }
  },
};
