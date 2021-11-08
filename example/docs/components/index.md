# ivy-ui

`ivy-ui` 是一套使用原生 `Web Components` 规范开发的跨框架UI组件库。[查看文档][https://ivy.jser.press]

[github项目地址][https://github.com/GuoJikun/ivy-ui]

## 文档

该文档基于 `vuepress@2.x` 创建，文中所有组件均为可交互实例。

## 使用须知

```js
-   所有组件的使用方式都和原生方式一致（获取元素的属性...）
-   自定义事件（非原生事件）都需要使用`addEventListener`来绑定
```

## 特性

- 跨框架：无论是react、vue还是原生项目均可使用。
- 组件化：shadow dom真正意义上实现了样式和功能的组件化。
- 类原生：一个组件就像使用一个div标签一样。
- 无依赖：纯原生，无需任何预处理器编译。
- 无障碍，支持键盘访问。

## 使用说明

### npm or yarn

```bash
npm i ivy-ui
#OR
yarn add ivy-ui
#OR
pnpm add ivy-ui
```

### script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui"></script>
<!--指定版本号-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui@0.4.0"></script>
```

## 已有组件

- [x] `Row` 组件
- [x] `Col` 组件
- [x] `Switch` 组件
- [x] `Collapse` 组件
- [x] `CollapseItem` 组件
- [x] `Drawer` 组件
- [x] `Icon` 组件
- [x] `Progress` 组件
- [x] `Button` 组件
- [x] `card` 组件
- [x] `timeline` 组件
- [x] `divider` 组件
- [x] `Modal` 组件
- [x] `Rate` 组件
- [x] `tab` 组件
- [x] `tab-pane` 组件
- [x] `Image` 组件
- [x] `Tooltip` 组件
- [x] `Table` 组件
- [x] `Input` 组件
- [x] `Checkbox` 组件
- [x] `CheckboxGroup` 组件
- [x] `Radio` 组件
- [x] `RadioGroup` 组件
- [x] `Tag` 组件
- [x] `Clipboard-copy` 组件
- [x] `Badge` 组件
- [x] `Contextmenu` 组件

## 未完成组件

- [ ] `Message` 组件
- [ ] `Select` 组件
- [ ] `Slider` 组件
- [ ] `Pagination` 组件
- [ ] `DatePicker` 组件
