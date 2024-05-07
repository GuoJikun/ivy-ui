# Detail 详情

增强原生 `details` 元素

## 常规用法

<ivy-details>
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>

```html
<ivy-details>
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>
```

## 设置标题

通过设置 `summary` 属性来设置标题

<ivy-details summary="浣溪沙">
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>

```html
<ivy-details summary="浣溪沙">
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>
```

## 不显示动画

通过设置 `remove-transition` 为 `true` 来移除动画效果

<ivy-details summary="浣溪沙" remove-transition>
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>

```html
<ivy-details summary="浣溪沙" remove-transition>
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>
```

## 可用的 CSS 变量

通过暴露的 CSS 变量可以修改其 `ivy-details` 的样式

::: details 点击代开

```css
:host {
    --ivy-details-border-radius: 8px;
    --ivy-background-color: #f7f7f7;
    --ivy-details-summary-color: #666;
    --ivy-details-color: #515a6e;
    --ivy-details-font-size: 13px;
    --ivy-details-summary-font-size: 14px;
}
```

:::

## Props

| Prop                | 描述     | 类型      | 可选值 | 默认值     |
| ------------------- | -------- | --------- | ------ | ---------- |
| `summary`           | 标题     | `string`  | -      | `详细信息` |
| `open`              | 展开组件 | `boolean` | -      | `-`        |
| `remove-transition` | 移除动画 | `boolean` | -      | `-`        |
