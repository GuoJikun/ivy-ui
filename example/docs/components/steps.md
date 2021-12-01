# steps 步骤条

## 基础用法

只设置时间和描述

<ivy-steps :active="active">
    <ivy-step  title="验证手机号"></ivy-step>
    <ivy-step title="修改密码"></ivy-step>
    <ivy-step title="完成"></ivy-step>
</ivy-steps>

<ivy-button @click="next">Next</ivy-button >

```html
<ivy-steps>
    <ivy-step  title="验证手机号"></ivy-step>
    <ivy-step title="修改密码"></ivy-step>
    <ivy-step title="完成"></ivy-step>
</ivy-steps>
```

## 增加描述文字

可以在标题下方增加描述性文字

<ivy-steps :active="active">
    <ivy-step  title="验证手机号">验证手机号是否正确</ivy-step>
    <ivy-step title="修改密码">设置新密码</ivy-step>
    <ivy-step title="完成">修改完成</ivy-step>
</ivy-steps>

```html
<ivy-steps :active="active">
    <ivy-step  title="验证手机号">验证手机号是否正确</ivy-step>
    <ivy-step title="修改密码">设置新密码</ivy-step>
    <ivy-step title="完成">修改完成</ivy-step>
</ivy-steps>
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
