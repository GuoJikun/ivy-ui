# ContentMenu 右键菜单

## 基础用法

使用 `contextmenu` 标签来生成自定义右键菜单的区域

<ivy-contextmenu @command="menuClick">
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <div slot="menu">
        <ivy-contextmenu-item class="menu-wrap-item" command="copy">复制</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item" command="cute">复制</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item" command="paste">粘贴</ivy-contextmenu-item>
        <ivy-contextmenu-item line></ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item">这里是右键菜单</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item">这里是右键菜单</ivy-contextmenu-item>
    </div>
</ivy-contextmenu>

```vue
<ivy-contextmenu @command="menuClick">
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <p>这里是显示右键菜单的区域</p>
    <div slot="menu">
        <ivy-contextmenu-item class="menu-wrap-item" command="copy">复制</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item" command="cute">复制</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item" command="paste">粘贴</ivy-contextmenu-item>
        <ivy-contextmenu-item line></ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item">这里是右键菜单</ivy-contextmenu-item>
        <ivy-contextmenu-item class="menu-wrap-item">这里是右键菜单</ivy-contextmenu-item>
    </div>
</ivy-contextmenu>
<script>
export default {
    methods: {
        menuClick(ev){
            alert(`点击了菜单${ev.detail}`)
        }
    },
}
</script>
```

<script>
export default {
    methods: {
        menuClick(ev){
            alert(`点击了菜单${ev.detail}`)
        }
    },
}
</script>

<style>
.menu-wrap{
    display: inline-block;
    background-color: #fff;
    border: 1px solid #cacaca;
    list-style: none;
    padding: 4px 0;
    border-radius: 4px;
}
.menu-wrap-item{
    white-space: none;
    width: 160px;
    padding: 0 24px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    line-height: 2em;
}
.menu-wrap-item:hover{
    background-color: #efefef;
}
</style>