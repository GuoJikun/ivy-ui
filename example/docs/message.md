# Message 全局提示

## 一般用法

<ivy-button type="primary" id="btn">显示 Message</ivy-button>

<script>
document.getElementById('btn').addEventListener('click', ()=>{
    $ivy.message({message: '这是测试内容'})
})
</script>
