# Text 文字

文本的常见操作

## 基础用法

由 `type` 属性来选择 Text 的类型。

<ivy-text>default</ivy-text>
<ivy-text type="primary" class="margin-left">primary</ivy-text>
<ivy-text type="success" class="margin-left">success</ivy-text>
<ivy-text type="warning" class="margin-left">warning</ivy-text>
<ivy-text type="danger" class="margin-left">danger</ivy-text>
<ivy-text type="info" class="margin-left">info</ivy-text>

```html
<ivy-text>default</ivy-text>
<ivy-text type="primary">primary</ivy-text>
<ivy-text type="success">success</ivy-text>
<ivy-text type="warning">warning</ivy-text>
<ivy-text type="danger">danger</ivy-text>
<ivy-text type="info">info</ivy-text>
```

## 省略

通过 `truncated` 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 `line-clamp` 属性控制多行的样式

<ivy-text truncated style="width: 200px"> 这里是测试超出宽度显示省略号功能的 </ivy-text>
<br />
<ivy-text truncated line-clamp="2">
这个功能是使用 CSS 属性 -webkit-line-clamp<br> 来设置显示行数的，超出<br> 的内容将不显示。
</ivy-text>

```html
<ivy-text truncated style="width: 200px">
    这里是测试超出宽度显示省略号功能的
</ivy-text>
<ivy-text truncated line-clamp="2">
    这个功能是使用 CSS 属性 -webkit-line-clamp<br />
    来设置显示行数的，超出<br />
    的内容将不显示。
</ivy-text>
```

## 自定义颜色和字体大小

通过自定义 css 属性 来更改 Text 组件的字体颜色和大小

<ivy-text>默认</ivy-text>
<ivy-text style="--ivy-text-color: darkblue;" class="margin-left">自定义颜色</ivy-text>
<ivy-text style="--ivy-text-color: darkblue; --ivy-text-font-size: 20px;" class="margin-left">自定义颜色和字体大小</ivy-text>

```html
<ivy-text>默认</ivy-text>
<ivy-text style="--ivy-text-color: darkblue;">自定义颜色</ivy-text>
<ivy-text style="--ivy-text-color: darkblue; --ivy-text-font-size: 20px;">
    自定义颜色和字体大小
</ivy-text>
```

## 可用的 CSS 变量

通过暴露的 CSS 变量可以修改其组件的部分样式

::: details 点击代开

```css
:host {
  --ivy-text-color: var(--ivy-text-color-regular, #606266);
  --ivy-text-font-size: var(--ivy-font-size, 14px);
}
```

:::

## Props

| 属性名     | 说明           | 类型      | 可选值                                | 默认值 |
| ---------- | -------------- | --------- | ------------------------------------- | ------ |
| type       | 类型           | `string`  | `primary/success/warning/danger/info` | -      |
| truncated  | 超出显示省略号 | `boolean` | -                                     | -      |
| line-clamp | 行数           | `number`  | -                                     | -      |
