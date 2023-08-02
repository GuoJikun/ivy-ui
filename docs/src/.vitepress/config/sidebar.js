const guide = [
  {
    text: "基础",
    items: [
      {
        text: "快速开始",
        link: "/guide/index",
        items: [],
      },
      {
        text: "Color 色彩",
        link: "/guide/color",
        items: [],
      },
      {
        text: "theme 主题",
        link: "/guide/theme",
        items: [],
      },
    ],
  },
];

const components = [
  {
    text: "基础/布局",
    collapsible: true,
    items: [
      {
        text: "Icon 图标",
        link: "/components/icon",
      },
      {
        text: "Button 按钮",
        link: "/components/button",
      },
      {
        text: "Space 间距",
        link: "/components/space",
      },
      {
        text: "Grid 宫格布局",
        link: "/components/grid-layout.md",
      },
      {
        text: "Row/Col 栅格",
        link: "/components/grid",
      },
      {
        text: "Split 分割面板",
        link: "/components/split",
      },
      {
        text: "Divider 分割线",
        link: "/components/divider",
      },
    ],
  },
  {
    text: "表单",
    collapsible: true,
    items: [
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
        text: "Rate 评分",
        link: "/components/rate",
      },
    ],
  },
  {
    text: "数据展示",
    collapsible: true,
    items: [
      {
        text: "Description 描述列表",
        link: "/components/description",
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
        text: "Card 卡片",
        link: "/components/card",
      },
      {
        text: "Progress 进度条",
        link: "/components/progress",
      },
      {
        text: "Collapse 折叠面板",
        link: "/components/collapse",
      },
      {
        text: "Image 图片",
        link: "/components/image",
      },
    ],
  },
  {
    text: "通知/反馈",
    collapsible: true,
    items: [
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
        text: "Drawer 抽屉",
        link: "/components/drawer",
      },
      {
        text: "Result 结果",
        link: "/components/result",
      },
      {
        text: "Loading 加载",
        link: "/components/loading",
      },
    ],
  },
  {
    text: "导航",
    collapsible: true,
    items: [
      {
        text: "Breadcrumb 面包屑",
        link: "/components/breadcrumb",
      },
      {
        text: "Steps 步骤条",
        link: "/components/steps",
      },
    ],
  },
  {
    text: "其它",
    collapsible: true,
    items: [
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
];

const sidebar = {
  "/guide/": guide,
  "/components/": components,
};

export default sidebar;
