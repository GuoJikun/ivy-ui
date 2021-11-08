# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<ivy-radio>苹果</ivy-radio>

```html
<ivy-radio>苹果</ivy-radio>
```

## 禁用效果

<ivy-radio checked disabled>苹果</ivy-radio>
<ivy-radio disabled>苹果</ivy-radio>

```html
<ivy-radio checked disabled>苹果</ivy-radio> <ivy-radio disabled>苹果</ivy-radio>
```

## 配合`ivy-radio-group`使用

<ivy-radio-group onchange="console.log(this.value)">
    <ivy-radio label="1" checked>苹果</ivy-radio>
    <ivy-radio label="2">橘子</ivy-radio>
    <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

```html
<ivy-radio-group value="1" onchange="console.log(this.value)">
    <ivy-radio label="1">苹果</ivy-radio>
    <ivy-radio label="2">橘子</ivy-radio>
    <ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>
```
