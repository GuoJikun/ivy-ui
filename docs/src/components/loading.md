# Loading 加载

加载数据时显示动效。

## 基础用法

<ivy-loading style="min-height: 20vh" loading>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>

```html
<ivy-loading style="min-height: 20vh" loading>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>
```


## 增加文字描述

通过 `text` 属性可以设置文字描述。

<ivy-loading style="min-height: 20vh" loading text="加载中请稍候">
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>

```html
<ivy-loading style="min-height: 20vh" loading text="加载中请稍候">
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>
```

## 自定义图标

<ivy-loading style="min-height: 20vh" loading text="加载中请稍候">
    <img src="/images/icon-1.svg" slot="icon" />
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>

```html
<ivy-loading style="min-height: 20vh" loading text="加载中请稍候">
  <img src="/images/icon-1.svg" slot="icon" />
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <ivy-divider value="默认位置-中间"></ivy-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <ivy-divider placement="left" value="左侧"></ivy-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <ivy-divider placement="right" value="右侧"></ivy-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
</ivy-loading>
```

## 通过 js 控制 loading 的加载

<ivy-button @click="startLoading">开启 loading</ivy-button>
<ivy-button @click="endLoading">关闭 loading</ivy-button>
<br>
<br>
<ivy-loading style="min-height: 20vh" text="加载中请稍候" id="test">
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider value="默认位置-中间"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="left" value="左侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<ivy-divider placement="right" value="右侧"></ivy-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</ivy-loading>

```vue
<template>
    <ivy-button @click="startLoading">开启 loading</ivy-button>
    <ivy-button @click="endLoading">关闭 loading</ivy-button>
    
    <ivy-loading style="min-height: 20vh" text="加载中请稍候" id="test">
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <ivy-divider value="默认位置-中间"></ivy-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <ivy-divider placement="left" value="左侧"></ivy-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <ivy-divider placement="right" value="右侧"></ivy-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    </ivy-loading>
</template>
<script setup>
const startLoading = () => {
    document.querySelector('#test').loading = true
}
const endLoading = () => {
    document.querySelector('#test').loading = false
}
</script>
```

## 可用的 CSS 变量

:::details 点击查看
```css
:host {
    --ivy-loading-mask-color: rgba(255, 255, 255, 0.85);
    --ivy-loading-text-color: var(--ivy-text-color-regular, #606266);
    --ivy-loading-text-margin-top: 12px;
    --ivy-loading-text-font-size: 13px;
}
```
:::

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| loading | 是否显示 loading | boolean | - | false |
| text | loading 时的文本 | string | - | - |

## Slots

| name    | 说明             |
|---------|----------------|
| icon    | 自定义 loading 图标 |
| default | 内容区域           |

<script setup>
const startLoading = () => {
    document.querySelector('#test').loading = true
}
const endLoading = () => {
    document.querySelector('#test').loading = false
}
</script>