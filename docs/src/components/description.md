# Description 描述列表

## 基础用法

<ivy-description>
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>

```html
<ivy-description>
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>
```

## 增加 border

<ivy-description border>
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>

```html
<ivy-description border>
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>
```

## 增加 header

<ivy-description border header="个人信息">
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>

```html
<ivy-description border header="个人信息">
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>
```

## 设置 label-width

<ivy-description border label-width="80px">
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>

```html
<ivy-description border>
    <ivy-description-item label="姓名">Tom</ivy-description-item>
    <ivy-description-item label="性别"> 男 </ivy-description-item>
    <ivy-description-item label="年龄"> 28 </ivy-description-item>
    <ivy-description-item label="地址" span="3"> 上海市青浦区华新镇 </ivy-description-item>
</ivy-description>
```

## Description Prop

| Prop         | 描述        | 类型         | 可选值 | 默认值         |
|--------------|-----------|------------|-----|-------------|
| `border`     | 是否显示边框    | `boolean`  | -   | `false`     |
| `columns`    | 每行显示的列数   | `number`   | -   | `3`         |
| `header`     | 标题        | `string`   | -   | `undefined` |
| `labelWidth` | label 的宽度 | `string`   | -   | `undefined` |

## DescriptionItem Prop

| Prop         | 描述         | 类型     | 可选值 | 默认值    |
|--------------|------------| -------- |-----|--------|
| `label`      | label 的内容  | `string` | -   | `''`   |
| `labelWidth` | label 的宽度  | `string` | -   | `'100px'` |
| `span`       | 占有的列数      | `string` | -   | `1`    |
