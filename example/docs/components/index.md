# 快速开始

## 通过 script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui"></script>
<!--指定版本号-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui@0.4.0"></script>
```

## 通过包管理器使用

### 安装

```bash
npm i ivy-ui
#OR
yarn add ivy-ui
#OR
pnpm add ivy-ui
```

### vue 中使用

```js
// vue2
import Vue from 'vue'
import 'ivy-ui'
Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ivy-/
]

// vue3
import {createApp} from 'vue'
createApp().config.compilerOptions.isCustomElement = tag => tag.startsWith('ivy-')
```

### react 中使用

```js
import 'ivy-ui'
//如需单独使用
import 'ivy-ui/dist/es/ivy-button.js';
ReactDOM.render(<ivy-button>button</ivy-button>, document.body);
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
