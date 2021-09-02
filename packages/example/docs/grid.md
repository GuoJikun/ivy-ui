# Grid 栅格

## 基础用法

常规用法，只设置`span`属性

<ivy-row>
    <ivy-col span="12" style="height: 32px;background-color: #409EFF;color: white;">12</ivy-col>
    <ivy-col span="12" style="height: 32px;background-color: #67C23A;color: white;">12</ivy-col>
</ivy-row>
&nbsp;
<ivy-row>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #67C23A;color: white;">8</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
</ivy-row>
&nbsp;
<ivy-row>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
</ivy-row>

```html
<ivy-row>
    <ivy-col span="12" style="height: 32px;background-color: #409EFF;color: white;">12</ivy-col>
    <ivy-col span="12" style="height: 32px;background-color: #67C23A;color: white;">12</ivy-col>
</ivy-row>
<ivy-row>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #67C23A;color: white;">8</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
</ivy-row>
<ivy-row>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
</ivy-row>
```

## 间隔

通过`Gutter`设置col组件之间的间隔

<ivy-row gutter="10">
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
</ivy-row>

```html
<ivy-row gutter="10">
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #409EFF;color: white;">6</ivy-col>
    <ivy-col span="6" style="height: 32px;background-color: #67C23A;color: white;">6</ivy-col>
</ivy-row>
```

## 偏移量

通过`Offset`设置偏移量

<ivy-row>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
    <ivy-col span="4" offset="4" style="height: 32px;background-color: #67C23A;color: white;">4</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
</ivy-row>

```html
<ivy-row>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
    <ivy-col span="4" offset="4" style="height: 32px;background-color: #67C23A;color: white;">4</ivy-col>
    <ivy-col span="8" style="height: 32px;background-color: #409EFF;color: white;">8</ivy-col>
</ivy-row>
```
