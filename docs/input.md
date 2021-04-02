# Input 输入框

## 基础用法

<ivy-input id="input1" style="width: 224px;" placeholder="请输入"></ivy-input>

```html
<ivy-input style="width: 224px;" placeholder="请输入"></ivy-input>
```

## 禁用状态

?> 通过设置 `disabled` 属性来禁用输入框

<ivy-input disabled style="width: 224px;"></ivy-input>

```html
<ivy-input disabled style="width: 224px;"></ivy-input>
```

## 只读状态

?> 通过设置 `readonly` 属性来禁用输入框

<ivy-input readonly style="width: 224px;"></ivy-input>

```html
<ivy-input readonly style="width: 224px;"></ivy-input>
```

## 前置图标和后置图标

?> 通过设置 `prefix-icon` 属性来添加前置图标，通过设置 `suffix-icon` 属性来添加后置图标

<ivy-input style="width: 224px;" prefix-icon="reading"></ivy-input>

<ivy-input style="width: 224px;" suffix-icon="date"></ivy-input>

<ivy-input style="width: 224px;" prefix-icon="reading" suffix-icon="date"></ivy-input>

```html
<ivy-input style="width: 224px;" prefix-icon="reading"></ivy-input>
<ivy-input style="width: 224px;" suffix-icon="date"></ivy-input>
<ivy-input style="width: 224px;" prefix-icon="reading" suffix-icon="date"></ivy-input>
```

<script>
document.getElementById('input1').addEventListener('change', ev=>{
    console.log(ev, this.value)
})
</script>
