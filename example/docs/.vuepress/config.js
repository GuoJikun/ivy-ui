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
    bundlerConfig: {
        chainWebpack: config => {
            config.module
                .rule("vue")
                .use("vue-loader")
                .tap(options => {
                    options.compilerOptions = {
                        ...options.compilerOptions,
                        isCustomElement: tag => tag.startsWith("ivy-"),
                    };
                    return options;
                });
        },
        vue: {
            compileOptions: {
                isCustomElement: tag => tag.startsWidth("ivy-"),
            },
        },
    },
};
