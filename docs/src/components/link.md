# Link 链接

文字超链接

## 基础用法

基础的文字链接用法。

<ivy-link href="https://www.baidu.com">default</ivy-link>
<ivy-link type="primary" class="margin-left">primary</ivy-link>
<ivy-link type="success" class="margin-left">success</ivy-link>
<ivy-link type="warning" class="margin-left">warning</ivy-link>
<ivy-link type="danger" class="margin-left">danger</ivy-link>
<ivy-link type="info" class="margin-left">info</ivy-link>

## 禁用状态

文字链接不可用状态。

<ivy-link href="https://www.baidu.com" disabled>default</ivy-link>
<ivy-link type="primary" disabled class="margin-left">primary</ivy-link>
<ivy-link type="success" disabled class="margin-left">success</ivy-link>
<ivy-link type="warning" disabled class="margin-left">warning</ivy-link>
<ivy-link type="danger" disabled class="margin-left">danger</ivy-link>
<ivy-link type="info" disabled class="margin-left">info</ivy-link>

## 显示下划线

<ivy-link href="https://www.baidu.com" underline>default</ivy-link>
<ivy-link type="primary" underline class="margin-left">primary</ivy-link>
<ivy-link type="success" underline class="margin-left">success</ivy-link>
<ivy-link type="warning" underline class="margin-left">warning</ivy-link>
<ivy-link type="danger" underline class="margin-left">danger</ivy-link>
<ivy-link type="info" underline class="margin-left">info</ivy-link>

## Props

| 属性名    | 说明             | 类型      | 可选值                                | 默认值 |
| --------- | ---------------- | --------- | ------------------------------------- | ------ |
| type      | 类型             | `string`  | `primary/success/warning/danger/info` | -      |
| disabled  | 禁用             | `boolean` | -                                     | -      |
| underline | 下划线           | `boolean` | -                                     | -      |
| href      | 同 a 标签的 href | `string`  | -                                     | -      |
