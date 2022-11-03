# Tag 标签

## 常规用法

默认显示的样式

<ivy-tag>default</ivy-tag>
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">danger</ivy-tag>
<ivy-tag type="info">info</ivy-tag>


## 自定义颜色

通过`type`属性来设置主题,默认颜色有 5 中-`primary`、`success`、`warning`、`error`、`info`

<ivy-tag type="#008000">#008000</ivy-tag>
<ivy-tag type="#67C23A">#67C23A</ivy-tag>
<ivy-tag type="#E6A23C">#E6A23C</ivy-tag>
<ivy-tag type="#F56C6C">#F56C6C</ivy-tag>
<ivy-tag type="#909399">#909399</ivy-tag>

```html
<ivy-tag type="#008000">#008000</ivy-tag>
<ivy-tag type="#67C23A">#67C23A</ivy-tag>
<ivy-tag type="#E6A23C">#E6A23C</ivy-tag>
<ivy-tag type="#F56C6C">#F56C6C</ivy-tag>
<ivy-tag type="#909399">#909399</ivy-tag>
```

## theme

通过`theme`属性来设置主题,一共有三种`plain`、`dark`、`default`,其中`default`是默认的不用写

default：
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">#F56C6C</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

dark：
<ivy-tag theme="dark" type="primary">primary</ivy-tag>
<ivy-tag theme="dark" type="success">success</ivy-tag>
<ivy-tag theme="dark" type="warning">warning</ivy-tag>
<ivy-tag theme="dark" type="danger">danger</ivy-tag>
<ivy-tag theme="dark" type="info">info</ivy-tag>

```html
default：
<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">#F56C6C</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

dark：
<ivy-tag theme="dark" type="primary">primary</ivy-tag>
<ivy-tag theme="dark" type="success">success</ivy-tag>
<ivy-tag theme="dark" type="warning">warning</ivy-tag>
<ivy-tag theme="dark" type="danger">danger</ivy-tag>
<ivy-tag theme="dark" type="info">info</ivy-tag>
```

## Size 大小

通过`size`属性来设置主题,一共有四种`mini`、`small`、`medium`、`default`,其中`default`是默认的不用写

<ivy-tag>default</ivy-tag>
<ivy-tag size="medium">medium</ivy-tag>
<ivy-tag size="small">small</ivy-tag>
<ivy-tag size="mini">mini</ivy-tag>

```html
<ivy-tag>default</ivy-tag>
<ivy-tag size="medium">medium</ivy-tag>
<ivy-tag size="small">small</ivy-tag>
<ivy-tag size="mini">mini</ivy-tag>
```
