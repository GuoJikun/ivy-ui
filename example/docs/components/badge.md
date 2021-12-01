# Badge 标记

出现在按钮、图标旁的数字或状态标记

## 基础用法

展示新消息数量。

<ivy-badge value="12">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="10" class="ml-40">
    <ivy-button>踩</ivy-button>
</ivy-badge>
<ivy-badge value="22" class="ml-40">
    <ivy-button>点赞</ivy-button>
</ivy-badge>

```html
<ivy-badge value="12">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="10" class="ml-40">
    <ivy-button>踩</ivy-button>
</ivy-badge>
<ivy-badge value="22" class="ml-40">
    <ivy-button>点赞</ivy-button>
</ivy-badge>
```

## 最大值

可使用`max`自定义最大值,默认最大值为`99`。

<ivy-badge value="100">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="100" max="10" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>

```html
<ivy-badge value="100">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="100" max="10" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
```

## 自定义内容

使用`value`输入非数字字符串来自定义显示内容。

<ivy-badge value="new">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="hot" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>

```html
<ivy-badge value="new">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="hot" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
```

## 小红点

以红点的形式标注需要关注的内容。

<ivy-badge is-dot>
    <ivy-icon name="chat-dot-round"></ivy-icon>
</ivy-badge>
<ivy-badge is-dot class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>

```html
<ivy-badge is-dot>
    <ivy-icon name="chat-dot-round"></ivy-icon>
</ivy-badge>
<ivy-badge is-dot class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
```

## 类型

支持5中类型，`primary`、`success`、`warning`、`error`、`info`；默认是`error`、

<ivy-badge value="12">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="primary" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="success" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="warning" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="info" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>

```html
<ivy-badge value="12">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="primary" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="success" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="warning" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="12" type="info" class="ml-40">
    <ivy-button>评论</ivy-button>
</ivy-badge>
```

<style>
.ml-40{
    margin-left: 40px;
}
</style>
