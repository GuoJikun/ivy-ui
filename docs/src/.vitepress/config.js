import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "ivy-ui 文档",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    // Type is `DefaultTheme.Config`
    layout: "page",
    repo: "GuoJikun/ivy-ui-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    outDir: "../dist",
    nav: [
      {
        text: "首页",
        link: "/index",
      },
      {
        text: "组件",
        link: "/components/index",
        activeMatch: "/components/",
      },
      {
        text: "更新日志",
        link: "/changelog",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/GuoJikun/ivy-ui" },
    ],

    sidebar: {
      "/components/": [
        {
          text: "简介",
          items: [
            {
              text: "快速开始",
              link: "/components/index",
              items: [],
            },
            {
              text: "Color 色彩",
              link: "/components/color",
              items: [],
            },
            {
              text: "theme 主题",
              link: "/components/theme",
              items: [],
            },
          ],
        },

        {
          text: "组件",
          collapsible: true,
          items: [
            {
              text: "基础/布局",
            },
            {
              text: "Icon 图标",
              link: "/components/icon",
            },
            {
              text: "Button 按钮",
              link: "/components/button",
            },
            {
              text: "Grid 栅格",
              link: "/components/grid",
            },
            {
              text: "Split 分割面板",
              link: "/components/split",
            },
            {
              text: "表单",
            },
            {
              text: "Input 输入框",
              link: "/components/input",
            },
            {
              text: "Select 选择框",
              link: "/components/select",
            },
            {
              text: "Radio 单选框",
              link: "/components/radio",
            },
            {
              text: "Checkbox 多选框",
              link: "/components/checkbox",
            },
            {
              text: "Switch 开关",
              link: "/components/switch",
            },
            {
              text: "数据",
            },
            {
              text: "Tab 标签页",
              link: "/components/tab",
            },
            {
              text: "Table 表格",
              link: "/components/table",
            },
            {
              text: "Tag 标签",
              link: "/components/tag",
            },
            {
              text: "Badge 徽标",
              link: "/components/badge",
            },
            {
              text: "Empty 空状态",
              link: "/components/empty",
            },
            {
              text: "Timeline 时间线",
              link: "/components/timeline",
            },
            {
              text: "通知/反馈",
            },
            {
              text: "Tip 提示信息",
              link: "/components/tip",
            },
            {
              text: "Message 消息提示",
              link: "/components/message",
            },
            {
              text: "Tooltip 文字提示",
              link: "/components/tooltip",
            },
            {
              text: "Modal 对话框",
              link: "/components/modal",
            },
            {
              text: "Notification 通知框",
              link: "/components/notification",
            },
            {
              text: "导航",
            },
            {
              text: "Breadcrumb 面包屑",
              link: "/components/breadcrumb",
            },
            {
              text: "Steps 步骤条",
              link: "/components/steps",
            },
            {
              text: "未分类",
            },
            {
              text: "Card 卡片",
              link: "/components/card",
            },
            {
              text: "Divider 分割线",
              link: "/components/divider",
            },
            {
              text: "Progress 进度条",
              link: "/components/progress",
            },
            {
              text: "Drawer 抽屉",
              link: "/components/drawer",
            },
            {
              text: "Collapse 折叠面板",
              link: "/components/collapse",
            },

            {
              text: "Rate 评分",
              link: "/components/rate",
            },
            {
              text: "Image 图片",
              link: "/components/image",
            },
            {
              text: "Clipboard 复制到剪切板",
              link: "/components/clipboard",
            },
            {
              text: "ContextMenu 右键菜单",
              link: "/components/contentmenu",
            },
          ],
        },
      ],
    },
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
          return /^ivy-/.test(tag);
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
