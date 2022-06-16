const sidebar = require("./config/sidebar.js");

module.exports = {
    title: "ivy-ui",
    description: "符合Web Component规范的前端组件库",
    themeConfig: {
        navbar: [
            {
                text: "首页",
                link: "/README.md",
            },
            {
                text: "组件",
                link: "/components/index.md",
            },
            {
                text: "更新日志",
                link: "/changelog.md",
            },
            {
                text: "Github",
                link: "https://github.com/GuoJikun/ivy-ui",
            },
        ],
        sidebar: sidebar,
    },
    bundler: "@vuepress/bundler-vite",
    bundlerConfig: {
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag.startsWith("ivy-"),
                },
            },
        },
    },
};
