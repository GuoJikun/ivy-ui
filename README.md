> Request ID = 31052023/11918543
# ivy-ui

使用 [stencil.js](https://stenciljs.com/) 框架开发的符合 Web Components 规范的 web 组件库

## 使用须知

```js
-   所有组件的使用方式都和原生方式一致（获取元素的属性...）
-   自定义事件（非原生事件）都需要使用`addEventListener`来绑定
```

## 使用说明

### npm or yarn

```bash
npm i ivy-ui
yarn add ivy-ui
pnpm i ivy-ui
```

### script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui"></script>
<!--指定版本号-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui@0.4.0"></script>
```

## 已有组件

| 组件名称 | 搭配子组件 | 组件描述 |
|--|--|--|
|grid|grid-item|宫格组件-常用于九宫格|
|row|col|行组件，子组件必须是col组件|
|col|-|row的子组件，不可单独使用|
|aspect-ratio|-|宽高保持固定比例的容器|
|button|-|按钮组件|
|card|-|卡片组件|
|input|-|输入组件|
|radio-group|radio|单选框组|
|radio|-|单选框|
|select|option|下拉选择组件|
|option|-|下拉选择子组件，不可单独使用|
|checkbox-group|checkbox|多选框组|
|checkbox|-|多选框|
|switch|-|开关组件|
|dialog|-|弹窗组件|
|tooltip|-|提示组件|
|drawer|-|抽屉组件|
|collapse|Collapse-item|折叠面板|
|collapse-item|-|折叠面板子组件，不可单独使用|
|timeline|timeline-item|时间线组件|
|timeline-item|-|时间线子组件，不可单独使用|
|steps|step|步骤条组件|
|step|-|步骤条子组件，不可单独使用|
|tabs|tab-pane|tab组件|
|tab-pane|-|tab子组件，不可单独使用|
|divider|-|分割线，常用于分割内容|
|tag|-|标签组件|
|Badge|-|徽章组件|
|contextmenu|contextmenu-item|右键菜单组件|
|contextmenu-item|-|右键菜单子组件，不可单独使用|
|dropdown|dropdown-item|下拉菜单组件|
|dropdown-item|-|下拉菜单子组件，不可单独使用|
|empty|-|空组件，常用于内容为空的场合|
|breadcrumb|breadcrumb-item|面包屑导航组件|
|breadcrumb-item|-|面包屑导航子组件，不可单独使用|
|image|-|图片组件|
|message|-|顶部弹层提示组件|
|tip|-|直接显示在界面上提示组件，等同于elementPlus的alert组件|
|process|-|进度条组件|


## 计划完成组件

| 组件名称 | 搭配子组件 | 组件描述 |
|--|--|--|
|slider|-|滑块组件|
|pager|-|分页组件|
|notification|-|通知组件|
|rate|-|评分组件|
