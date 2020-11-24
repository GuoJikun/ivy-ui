# Rate 评分

## 基础用法

<ivy-rate value="2"></ivy-rate>

```html
<ivy-rate value="2"></ivy-rate>
```

## 只读

通过添加 `disabled` 属性是其处于只读状态

<ivy-rate disabled></ivy-rate>

<ivy-rate value="2" disabled></ivy-rate>

```
<ivy-rate disabled></ivy-rate>
<ivy-rate value="2" disabled></ivy-rate>
```

## 尺寸 size

通过 `size` 可以设置组件尺寸，默认为 `font-size` 大小（20px）。

<ivy-rate value="2" size="16"></ivy-rate>

<ivy-rate value="2"></ivy-rate>

<ivy-rate value="2" size="28"></ivy-rate>

<ivy-rate value="2" size="34"></ivy-rate>

```html
<ivy-rate value="2" size="16"></ivy-rate>
<ivy-rate value="2"></ivy-rate>
<ivy-rate value="2" size="28"></ivy-rate>
<ivy-rate value="2" size="34"></ivy-rate>
```

## 其它 Icon

通过 `icon` 可以设置其它图标。

<ivy-rate value="2" icon="star-off"></ivy-rate>

<ivy-rate value="2" icon="success"></ivy-rate>

<ivy-rate value="2" icon="error"></ivy-rate>

<ivy-rate value="2" icon="info"></ivy-rate>

```html
<ivy-rate value="2" icon="star-off"></ivy-rate>
<ivy-rate value="2" icon="success"></ivy-rate>
<ivy-rate value="2" icon="error"></ivy-rate>
<ivy-rate value="2" icon="info"></ivy-rate>
```

## 颜色

通过 `color` 可以设置图标的颜色。

<ivy-rate value="2" icon="star-off"></ivy-rate>

<ivy-rate value="2" icon="success" color="green"></ivy-rate>

<ivy-rate value="2" icon="error" color="red"></ivy-rate>

<ivy-rate value="2" icon="info" color="#888888"></ivy-rate>

```html
<ivy-rate value="2" icon="star-off"></ivy-rate>
<ivy-rate value="2" icon="success" color="green"></ivy-rate>
<ivy-rate value="2" icon="error" color="red"></ivy-rate>
<ivy-rate value="2" icon="info" color="#888888"></ivy-rate>
```

## 自定义事件

通过 `onchange` 事件可以在分值变化后执行操作

<ivy-rate value="2" onchange="alert(`当前的value：${this.value}`)" ></ivy-rate>

```html
<ivy-rate value="2" onchange="alert(`当前的value：${this.value}`)"></ivy-rate>
```

其它的触发方式

```js
<script>
rate.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail);
})
</script>
```

## Rate Attrs

| 名称     | 说明                      | 类型   | 可选值 | 默认值   |
| -------- | ------------------------- | ------ | ------ | -------- |
| value    | 评分的值                  | String | 1-5    | -        |
| disabled | 只读                      | String | -      | -        |
| size     | 大小-同 fontSize          | String | -      | 20px     |
| color    | 颜色-同 color             | String | -      | -        |
| icon     | 图标的名称-参考 icon 组件 | String | -      | start-on |
