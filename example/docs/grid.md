# Grid 栅格

## 基础用法

常规用法，只设置`span`属性

<ivy-row class="grid-row">
    <ivy-col span="12" class="grid-item">12</ivy-col>
    <ivy-col span="12" class="grid-item" style="background-color: #67C23A;">12</ivy-col>
</ivy-row>
&nbsp;
<ivy-row class="grid-row">
    <ivy-col span="8" class="grid-item">8</ivy-col>
    <ivy-col span="8" class="grid-item" style="background-color: #67C23A;">8</ivy-col>
    <ivy-col span="8" class="grid-item">8</ivy-col>
</ivy-row>
&nbsp;
<ivy-row class="grid-row">
    <ivy-col span="6" class="grid-item">6</ivy-col>
    <ivy-col span="6" class="grid-item" style="background-color: #67C23A;">6</ivy-col>
    <ivy-col span="6" class="grid-item">6</ivy-col>
    <ivy-col span="6" class="grid-item" style="background-color: #67C23A;">6</ivy-col>
</ivy-row>

```html
<ivy-row>
    <ivy-col span="12">12</ivy-col>
    <ivy-col span="12" style="background-color: #67C23A;">12</ivy-col>
</ivy-row>
<ivy-row>
    <ivy-col span="8">8</ivy-col>
    <ivy-col span="8" style="background-color: #67C23A;">8</ivy-col>
    <ivy-col span="8">8</ivy-col>
</ivy-row>
<ivy-row>
    <ivy-col span="6">6</ivy-col>
    <ivy-col span="6" style="background-color: #67C23A;">6</ivy-col>
    <ivy-col span="6">6</ivy-col>
    <ivy-col span="6" style="background-color: #67C23A;">6</ivy-col>
</ivy-row>
```

## 间隔

通过`Gutter`设置col组件之间的间隔

<ivy-row gutter="10" class="grid-row">
    <ivy-col span="6" class="grid-item">6</ivy-col>
    <ivy-col span="6" class="grid-item">6</ivy-col>
    <ivy-col span="6" class="grid-item">6</ivy-col>
    <ivy-col span="6" class="grid-item">6</ivy-col>
</ivy-row>

```html
<ivy-row gutter="10">
    <ivy-col span="6">6</ivy-col>
    <ivy-col span="6" style="background-color: #67C23A;">6</ivy-col>
    <ivy-col span="6">6</ivy-col>
    <ivy-col span="6" style="background-color: #67C23A;">6</ivy-col>
</ivy-row>
```

## 偏移量

通过`Offset`设置偏移量

<ivy-row class="grid-row">
    <ivy-col span="8" class="grid-item">8</ivy-col>
    <ivy-col span="4" class="grid-item" offset="4">4</ivy-col>
    <ivy-col span="8" class="grid-item">8</ivy-col>
</ivy-row>

```html
<ivy-row>
    <ivy-col span="8">8</ivy-col>
    <ivy-col span="4" offset="4" style="background-color: #67C23A;">4</ivy-col>
    <ivy-col span="8">8</ivy-col>
</ivy-row>
```


<style>
.grid-item {
    height: 32px;
    line-height: 32px;
    background-color: #409EFF;
    color: white;
    text-align: center;
}
.grid-item:nth-child(2n){
    background-color: #67C23A;
}
</style>
