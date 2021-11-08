# Modal 对话框

## 基础用法

通过设置show属性来显示Modal

<ivy-button type="primary">显示 Modal</ivy-button>

<ivy-modal id="modal1" title="Modal标题" onclose="alert('点击了关闭按钮')"  oncancel="alert('点击了取消按钮')">
    <div>这是Modal的内容部分<br>这是Modal的内容部分<br>这是Modal的内容部分<br></div>
</ivy-modal>

```html
<ivy-button type="primary" onclick="document.getElementById('modal1').setAttribute('show', '')">显示 Modal</ivy-button>
<ivy-modal id="modal1" title="Modal标题" onclose="alert('点击了关闭按钮')" oncancel="alert('点击了取消按钮')" @onsure="sure()">
    <div>这是Modal的内容部分<br />这是Modal的内容部分<br />这是Modal的内容部分<br /></div>
</ivy-modal>
<script>
    document.getElementById("modal1").addEventListener("sure", ev => {
        console.log(ev);
    });
</script>
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

</script>
