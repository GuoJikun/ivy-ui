# Notification 通知

<ivy-button @click="test">点击打开Notification</ivy-button>

```html
<ivy-button>点击打开Notification</ivy-button>
```

<script>
export default {
    setup(){
        const test = (ev)=>{
            console.log(window)
        }
        return {test}
    }
}

</script>
