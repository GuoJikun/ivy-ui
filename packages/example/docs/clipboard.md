# Clipboard 复制到剪切板

## 复制自身的 `value` 属性值

<ivy-clipboard-copy value="自身的 value 属性值" id="s">
    <ivy-button>Copy</ivy-button>
</ivy-clipboard-copy>
<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-clipboard-copy value="自身的 value 属性值" id="s">Copy</ivy-clipboard-copy>

<script type="module">
    document.getElementById("s").addEventListener("clipboard-copy", function (event) {
        alert("Copied!");
    });
</script>
```

> 可以使用自定义事件`clipboard-copy`在复制文本后做一些操作


## 通过 for 属性复制其它元素的内容

<ivy-clipboard-copy for="p" id="s">Copy</ivy-clipboard-copy>

<p id="p">p标签内的内容</p>

<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-clipboard-copy for="p" id="s">Copy</ivy-clipboard-copy>
<p id="p">p标签内的内容</p>
```

## 通过 for 属性复制其它元素的内容

<ivy-clipboard-copy for="input" id="s">Copy</ivy-clipboard-copy>

<input id="input" value="input元素的value值"/>

<textarea value="Paste" rows="5" cols="100">Paste</textarea>

```html
<ivy-clipboard-copy for="p" id="s">Copy</ivy-clipboard-copy>
<input id="p" value="input元素的value值" />
```


<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById("s").addEventListener('clipboard-copy', function(event) {
        alert("Copied!")
    })
})
</script>
