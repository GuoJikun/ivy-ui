# Form 表单

<ivy-form id="form">
    <ivy-form-item label="姓名" message="请输入姓名" validator="function(val){return !!val}">
        <ivy-input></ivy-input>
    </ivy-form-item>
    <ivy-button type="primary" id="submits">提交</ivy-button>
</ivy-form>

<script>

document.getElementById('submits').addEventListener('click', ()=>{
    document.getElementById('form').validate(valid=>{
        console.log(valid)
    })
})
</script>
