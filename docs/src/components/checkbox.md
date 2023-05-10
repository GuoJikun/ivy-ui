# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<ivy-checkbox>苹果</ivy-checkbox>

```html
<ivy-checkbox>苹果</ivy-checkbox>
```

## 自定义选中和没有选中的值

> 通过 `true-label` 和 `false-label` 来设置选中和没有选中的值，通常适用于单个选择框的情况

<ivy-checkbox true-label="1" false-label="0" checked onchange="console.log(this.value)">勾选即同意本协议</ivy-checkbox>

```html
<ivy-checkbox true-label="1" false-label="0">勾选即同意本协议</ivy-checkbox>
```

## 禁用效果

<ivy-checkbox disabled>苹果</ivy-checkbox>
<ivy-checkbox disabled checked>苹果</ivy-checkbox>

```html
<ivy-checkbox disabled>苹果</ivy-checkbox>
```

## 配合`ivy-checkbox-group`使用

<ivy-checkbox-group onchange="console.log(this.value)">
    <ivy-checkbox value="1" checked>苹果</ivy-checkbox>
    <ivy-checkbox value="2">橘子</ivy-checkbox>
    <ivy-checkbox value="3">香蕉</ivy-checkbox>
</ivy-checkbox-group>

```html
<ivy-checkbox-group onchange="console.log(this.value)">
    <ivy-checkbox value="1" checked>苹果</ivy-checkbox>
    <ivy-checkbox value="2">橘子</ivy-checkbox>
    <ivy-checkbox value="3">香蕉</ivy-checkbox>
</ivy-checkbox-group>
```
