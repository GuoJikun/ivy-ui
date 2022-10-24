# Breadcrumb 面包屑

## 基础用法

基础用法当然是最基础的用法

<ivy-breadcrumb>
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>

```html
<ivy-breadcrumb>
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>
```

## 自定义分隔符

通过  `separator` 属性设置分隔符

<ivy-breadcrumb separator=">">
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>

```html
<ivy-breadcrumb separator=">">
    <ivy-breadcrumb-item href="http://www.baidu.com">首页</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>产品动态</ivy-breadcrumb-item>
    <ivy-breadcrumb-item>动态1</ivy-breadcrumb-item>
</ivy-breadcrumb>
```

<script setup>
import { ref } from 'vue';
const active = ref(0);

const next = ()=>{
    console.log(active.value)
    if(active.value < 3){
        active.value = active.value + 1
    }else{
        active.value = 0
    }
}
</script>
