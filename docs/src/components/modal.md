# Modal 对话框

## 基础用法

通过设置show属性来显示Modal

<ivy-button type="primary" @click="showDialog">显示 Modal</ivy-button>

<ivy-dialog id="modal1" @closed="closed">
    <span slot="header">Modal标题</span>
    <div>这是Modal的内容部分<br>这是Modal的内容部分<br>这是Modal的内容部分<br></div>
</ivy-dialog>

```html
<ivy-button type="primary" @click="showDialog">显示 Modal</ivy-button>
<ivy-dialog id="modal1" @close="closed">
    <p slot="header">Modal标题</p>
    <div>这是Modal的内容部分<br>这是Modal的内容部分<br>这是Modal的内容部分<br></div>
</ivy-dialog>
```

<script setup>
import { onMounted } from 'vue';
function sure(ev){
    console.log(ev)
}
onMounted(()=>{
    document.getElementById('modal1').addEventListener('sure', ev=>{
        console.log(ev)
    })
})

const showDialog = ()=>{
    document.getElementById('modal1').setAttribute('show', '')
}

const closed = ()=>{
    console.log('关闭了Modal')
}

</script>
