module.exports = {
    title: "ivy-ui",
    description: "符合Web Component规范的前端组件库",
    themeConfig: {
        navbar: [
            {
                text: "Github",
                link: "https://github.com/GuoJikun/ivy-ui",
            },
        ],
        sidebar: [
            {
                text: "快速开始",
                link: "/README.md",
            },
            {
                text: "主题自定义",
                link: "/theme.md",
            },
            {
                text: "更新日志",
                link: "/changelog.md",
            },
            {
                text: "组件",
                children: [
                    {
                        text: "基础",
                    },
                    {
                        text: "Icon 图标",
                        link: "/icon.md",
                    },
                    {
                        text: "Button 按钮",
                        link: "/button.md",
                    },
                    {
                        text: "Grid 栅格",
                        link: "/grid.md",
                    },
                    {
                        text: "表单",
                    },
                    {
                        text: "Input 输入框",
                        link: "/input.md",
                    },
                    {
                        text: "Select 选择框",
                        link: "/select.md",
                    },
                    {
                        text: "Radio 单选框",
                        link: "/radio.md",
                    },
                    {
                        text: "Checkbox 多选框",
                        link: "/checkbox.md",
                    },
                    {
                        text: "Switch 开关",
                        link: "/switch.md",
                    },
                    {
                        text: "未分类",
                    },
                    {
                        text: "Card 卡片",
                        link: "/card.md",
                    },
                    {
                        text: "Timeline 时间线",
                        link: "/timeline.md",
                    },
                    {
                        text: "Divider 分割线",
                        link: "/divider.md",
                    },
                    {
                        text: "Progress 进度条",
                        link: "/progress.md",
                    },
                    {
                        text: "Modal 对话框",
                        link: "/modal.md",
                    },
                    {
                        text: "Drawer 抽屉",
                        link: "/drawer.md",
                    },
                    {
                        text: "Collapse 折叠面板",
                        link: "/collapse.md",
                    },

                    {
                        text: "Rate 评分",
                        link: "/rate.md",
                    },
                    {
                        text: "Tab 标签页",
                        link: "/tab.md",
                    },
                    {
                        text: "Image 图片",
                        link: "/image.md",
                    },
                    {
                        text: "Tooltip 文字提示",
                        link: "/tooltip.md",
                    },
                    {
                        text: "Table 表格",
                        link: "/table.md",
                    },

                    {
                        text: "Tag 标签",
                        link: "/tag.md",
                    },
                    {
                        text: "Clipboard 复制到剪切板",
                        link: "/clipboard.md",
                    },
                    {
                        text: "Badge 徽标",
                        link: "/badge.md",
                    },
                    {
                        text: "ContextMenu 右键菜单",
                        link: "/contentmenu.md",
                    },
                ],
            },
        ],
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
