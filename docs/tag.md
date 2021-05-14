# Tag 标签

## 常规用法

<ivy-tag>default</ivy-tag>
<ivy-tag color="primary">primary</ivy-tag>
<ivy-tag color="success">success</ivy-tag>
<ivy-tag color="warning">warning</ivy-tag>
<ivy-tag color="error">error</ivy-tag>
<ivy-tag color="info">info</ivy-tag>

<ivy-tag theme="plain">default</ivy-tag>
<ivy-tag theme="plain" color="primary">primary</ivy-tag>
<ivy-tag theme="plain" color="success">success</ivy-tag>
<ivy-tag theme="plain" color="warning">warning</ivy-tag>
<ivy-tag theme="plain" color="error">error</ivy-tag>
<ivy-tag theme="plain" color="info">info</ivy-tag>

<ivy-tag theme="dark">default</ivy-tag>
<ivy-tag theme="dark" color="primary">primary</ivy-tag>
<ivy-tag theme="dark" color="success">success</ivy-tag>
<ivy-tag theme="dark" color="warning">warning</ivy-tag>
<ivy-tag theme="dark" color="error">error</ivy-tag>
<ivy-tag theme="dark" color="info">info</ivy-tag>

<!-- <ivy-tag>主要标签</ivy-tag> -->

## 自定义颜色

通过`color`属性来设置主题,默认颜色有 5 中-`primary`、`success`、`warning`、`error`、`info`

<ivy-tag color="#008000">#008000</ivy-tag>
<ivy-tag color="#67C23A">#67C23A</ivy-tag>
<ivy-tag color="#E6A23C">#E6A23C</ivy-tag>
<ivy-tag color="#F56C6C">#F56C6C</ivy-tag>
<ivy-tag color="#909399">#909399</ivy-tag>

```html
<ivy-tag color="#008000">#008000</ivy-tag>
<ivy-tag color="#67C23A">#67C23A</ivy-tag>
<ivy-tag color="#E6A23C">#E6A23C</ivy-tag>
<ivy-tag color="#F56C6C">#F56C6C</ivy-tag>
<ivy-tag color="#909399">#909399</ivy-tag>
```

## theme

通过`theme`属性来设置主题,一共有三种`plain`、`dark`、`default`,其中`default`是默认的不用写

default：
<ivy-tag color="primary">#409eff</ivy-tag>
<ivy-tag color="success">#67C23A</ivy-tag>
<ivy-tag color="warning">#E6A23C</ivy-tag>
<ivy-tag color="error">#F56C6C</ivy-tag>
<ivy-tag color="info">#909399</ivy-tag>

dark：
<ivy-tag theme="dark" color="primary">#409eff</ivy-tag>
<ivy-tag theme="dark" color="success">#67C23A</ivy-tag>
<ivy-tag theme="dark" color="warning">#E6A23C</ivy-tag>
<ivy-tag theme="dark" color="error">#F56C6C</ivy-tag>
<ivy-tag theme="dark" color="info">#909399</ivy-tag>

plain：
<ivy-tag theme="plain" color="primary">#409eff</ivy-tag>
<ivy-tag theme="plain" color="success">#67C23A</ivy-tag>
<ivy-tag theme="plain" color="warning">#E6A23C</ivy-tag>
<ivy-tag theme="plain" color="error">#F56C6C</ivy-tag>
<ivy-tag theme="plain" color="info">#909399</ivy-tag>

```html
default：
<ivy-tag color="primary">#409eff</ivy-tag>
<ivy-tag color="success">#67C23A</ivy-tag>
<ivy-tag color="warning">#E6A23C</ivy-tag>
<ivy-tag color="error">#F56C6C</ivy-tag>
<ivy-tag color="info">#909399</ivy-tag>

dark：
<ivy-tag theme="dark" color="primary">#409eff</ivy-tag>
<ivy-tag theme="dark" color="success">#67C23A</ivy-tag>
<ivy-tag theme="dark" color="warning">#E6A23C</ivy-tag>
<ivy-tag theme="dark" color="error">#F56C6C</ivy-tag>
<ivy-tag theme="dark" color="info">#909399</ivy-tag>

plain：
<ivy-tag theme="plain" color="primary">#409eff</ivy-tag>
<ivy-tag theme="plain" color="success">#67C23A</ivy-tag>
<ivy-tag theme="plain" color="warning">#E6A23C</ivy-tag>
<ivy-tag theme="plain" color="error">#F56C6C</ivy-tag>
<ivy-tag theme="plain" color="info">#909399</ivy-tag>
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
