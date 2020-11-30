# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<ivy-radio>苹果</ivy-radio>

```html
<ivy-radio>苹果</ivy-radio>
```

## 自定义选中和没有选中的值

?> 通过 `true-label` 和 `false-label` 来设置选中和没有选中的值，通常适用于单个选择框的情况

<ivy-radio true-label="1" false-label="0" checked onchange="console.log(this.value)">勾选即同意本协议</ivy-radio>

```html
<ivy-radio true-label="1" false-label="0">勾选即同意本协议</ivy-radio>
```

## 禁用效果

<ivy-radio disabled>苹果</ivy-radio>
<ivy-radio disabled checked>苹果</ivy-radio>

```html
<ivy-radio disabled>苹果</ivy-radio>
```

## 配合`ivy-radio-group`使用

<ivy-radio-group onchange="console.log(this.value)">
    <ivy-radio label="1" checked>苹果</ivy-radio>
    <ivy-radio label="2">橘子</ivy-radio>
    <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

```html
<ivy-radio-group onchange="console.log(this.value)">
    <ivy-radio label="1" checked>苹果</ivy-radio>
    <ivy-radio label="2">橘子</ivy-radio>
    <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>
```
