# Input 输入框

## 基础用法

<ivy-input value="baidu.com" id="input" oninput="console.log(document.getElementById('input').value)" disabled="true">
    <span slot="prepend">https://</span>
    <span slot="append">com</span>
</ivy-input>

<fox-button onclick="console.log(document.getElementById('input').value)">1234</fox-button>
