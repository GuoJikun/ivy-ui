import { defineConfig } from "vitepress";
import sidebar from "./config/sidebar";
import nav from './config/nav'

export default defineConfig({
    lang: "zh-CN",
    title: "ivy-ui 文档",
    description: "一个名为 ivy-ui 的 web component 组件库",
    lastUpdated: true,
    outDir: "../dist",
    themeConfig: {
        editLink: {
            pattern:
                "https://github.com/GuoJikun/ivy-ui/edit/main/docs/src/components/:path",
            text: "Edit on GitHub",
        },
        lastUpdatedText: "更新时间",
        outlineTitle: "章节目录",
        nav,
        socialLinks: [
            { icon: "github", link: "https://github.com/GuoJikun/ivy-ui" },
        ],
        sidebar,
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2022-present GuoJiKun",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.startsWith("ivy-");
                },
            },
        },
    },
    vite: {
        build: {
            target: "es2015",
        },
    },
});
