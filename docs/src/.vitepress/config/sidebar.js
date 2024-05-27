const guide = [
    {
        text: "基础",
        items: [
            { text: "快速开始", link: "/guide/index", items: [] },
            { text: "Color 色彩", link: "/guide/color", items: [] },
            { text: "theme 主题", link: "/guide/theme", items: [] },
        ],
    },
];

const components = [
    {
        text: "基础/布局",
        collapsible: true,
        items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Divider 分割线", link: "/components/divider" },
            { text: "Icon 图标", link: "/components/icon" },
            { text: "Grid 宫格布局", link: "/components/grid-layout.md" },
            { text: "Link 链接", link: "/components/link" },
            { text: "Row/Col 栅格", link: "/components/grid" },
            { text: "Space 间距", link: "/components/space" },
            { text: "Split 分割面板", link: "/components/split" },
            { text: "Text 文字", link: "/components/text" },
        ],
    },
    {
        text: "表单",
        collapsible: true,
        items: [
            { text: "Checkbox 多选框", link: "/components/checkbox" },
            { text: "Input 输入框", link: "/components/input" },
            { text: "Radio 单选框", link: "/components/radio" },
            { text: "Rate 评分", link: "/components/rate" },
            { text: "Select 选择框", link: "/components/select" },
            { text: "Switch 开关", link: "/components/switch" },
        ],
    },
    {
        text: "数据展示",
        collapsible: true,
        items: [
            { text: "Badge 徽标", link: "/components/badge" },
            { text: "Card 卡片", link: "/components/card" },
            { text: "Collapse 折叠面板", link: "/components/collapse" },
            { text: "Description 描述列表", link: "/components/description" },
            { text: "Empty 空状态", link: "/components/empty" },
            { text: "Image 图片", link: "/components/image" },
            { text: "Tab 标签页", link: "/components/tab" },
            { text: "Pager 分页", link: "/components/pager" },
            { text: "Progress 进度条", link: "/components/progress" },
            { text: "Table 表格", link: "/components/table" },
            { text: "Tag 标签", link: "/components/tag" },
            { text: "Timeline 时间线", link: "/components/timeline" },
        ],
    },
    {
        text: "通知/反馈",
        collapsible: true,
        items: [
            { text: "Drawer 抽屉", link: "/components/drawer" },
            { text: "Loading 加载", link: "/components/loading" },
            { text: "Message 消息提示", link: "/components/message" },
            { text: "Modal 对话框", link: "/components/modal" },
            { text: "Notification 通知框", link: "/components/notification" },
            { text: "Result 结果", link: "/components/result" },
            { text: "Tip 提示信息", link: "/components/tip" },
            { text: "Tooltip 文字提示", link: "/components/tooltip" },
        ],
    },
    {
        text: "导航",
        collapsible: true,
        items: [
            { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
            { text: "Steps 步骤条", link: "/components/steps" },
        ],
    },
    {
        text: "其它",
        collapsible: true,
        items: [
            { text: "Clipboard 复制到剪切板", link: "/components/clipboard" },
            { text: "ContextMenu 右键菜单", link: "/components/contextmenu" },
            { text: "Details 详情", link: "/components/details" },
        ],
    },
];

const sidebar = {
    "/guide/": guide,
    "/components/": components,
};

export default sidebar;
