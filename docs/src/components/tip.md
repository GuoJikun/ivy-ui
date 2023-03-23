# TimePicker 时间选择器

## 常规用法

没有任何参数

<ivy-tip>默认消息提示的文案</ivy-tip>


```html
<ivy-tip>默认消息提示的文案</ivy-tip>
```

## Title

通过 设置 `title` 属性来设置标题

<ivy-tip type="info" title="提示">主要消息提示的文案</ivy-tip>

```html
<ivy-tip type="info" title="提示">主要消息提示的文案</ivy-tip>
```

## Line

通过 设置 `line` 属性在左侧添加一条竖线

<ivy-tip line>默认消息提示的文案</ivy-tip>
<ivy-tip line type="info" class="margin-top">主要消息提示的文案</ivy-tip>
<ivy-tip line type="success" class="margin-top">成功消息提示的文案</ivy-tip>
<ivy-tip line type="warning" class="margin-top">警告消息提示的文案</ivy-tip>
<ivy-tip line type="error" class="margin-top">错误消息提示的文案</ivy-tip>

```html
<ivy-tip line>默认消息提示的文案</ivy-tip>
<ivy-tip line type="info">主要消息提示的文案</ivy-tip>
<ivy-tip line type="success">成功消息提示的文案</ivy-tip>
<ivy-tip line type="warning">警告消息提示的文案</ivy-tip>
<ivy-tip line type="error">错误消息提示的文案</ivy-tip>
```

## Type

通过 设置 `type` 属性来改变颜色

<ivy-tip type="info">主要消息提示的文案</ivy-tip>
<ivy-tip type="success" class="margin-top">成功消息提示的文案</ivy-tip>
<ivy-tip type="warning" class="margin-top">警告消息提示的文案</ivy-tip>
<ivy-tip type="error" class="margin-top">错误消息提示的文案</ivy-tip>

```html
<ivy-tip type="info">主要消息提示的文案</ivy-tip>
<ivy-tip type="success">成功消息提示的文案</ivy-tip>
<ivy-tip type="warning">警告消息提示的文案</ivy-tip>
<ivy-tip type="error">错误消息提示的文案</ivy-tip>
```

## 支持的`CSS`变量

可以通过更改一下属性来自定义`tip`组件的样式

```css
--ivy-tip-border-radius  /**圆角 */
--icy-tip-line-width  /**左侧竖线的宽度 */
--ivy-tip-title-font-size  /**标题的字体大小 */
--ivy-tip-font-size  /**字体大小 */
/**下面的仅在没有设置type属性时可用 */
--ivy-tip-bg-color  /**背景颜色 */
--ivy-tip-color  /**字体颜色 */
--ivy-tip-line-color  /**左侧竖线颜色 */
```
