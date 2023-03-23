# Space 间距

虽然我们拥有 `Divider` 组件，但很多时候我们需要不是一个被 `Divider` 组件 分割开的页面结构，因此我们会重复的使用很多的 `Divider` 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。

## 基本用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

<div class="demo-block">
<ivy-space>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## 垂直布局

使用 `vertical` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

<div class="demo-block">
<ivy-space direction="vertical">
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## 控制间距的大小

通过css变量 `--ivy-space-size` 来调整间距大小，默认是 `12px`。

<div class="demo-block">
<ivy-space style="--ivy-space-size:8px">
    <ivy-button>8px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space style="--ivy-space-size:12px" class="margin-top">
    <ivy-button>默认值</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
<br>
<ivy-space style="--ivy-space-size:24px" class="margin-top">
    <ivy-button>24px</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>


## API

### Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|direction|方向|string|`horizontal/vertical`|horizontal|

<style scoped>
.page-modal {
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
    width: 600px;
}
</style>
