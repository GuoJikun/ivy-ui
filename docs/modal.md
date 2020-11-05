### Modal 对话框

#### 基础用法

<ivy-button type="primary" onclick="document.getElementById('modal1').setAttribute('show', '')">显示 Modal</ivy-button>

<ivy-modal show id="modal1" title="Modal标题" onclose="console.log('自定义事件')">
    <div>这是Modal的内容部分<br>这是Modal的内容部分<br>这是Modal的内容部分<br></div>
</ivy-modal>
