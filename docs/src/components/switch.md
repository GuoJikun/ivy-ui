# Switch 开关

## 基础用法

通过`checked`设置是否开启

<ivy-switch checked></ivy-switch>

```html
<ivy-switch checked></ivy-switch>
```

## 禁止点击

通过设置 `disabled` 属性来禁止点击

<ivy-switch disabled></ivy-switch>

<ivy-switch checked disabled></ivy-switch>

```html
<ivy-switch disabled></ivy-switch>

<ivy-switch checked disabled></ivy-switch>
```

## change 事件

通过判断 `switch` 组件是否拥有 `checked` 属性来判断是否被选中

<ivy-switch checked id="switchChange"></ivy-switch>

```html
<ivy-switch checked id="switchChange"></ivy-switch>
```

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    document.getElementById('switchChange').addEventListener('change', ev=>{
        console.log(ev.detail)
    })
})

</script>
