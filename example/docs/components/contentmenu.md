# ContentMenu 右键菜单

## 基础用法

使用 `contextmenu` 标签来生成自定义右键菜单的区域

<ivy-contextmenu>
    <div>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
    </div>
    <ul slot="menu" class="menu-wrap">
        <li class="menu-wrap-item" @click="menuClick('复制')">复制</li>
        <li class="menu-wrap-item" @click="menuClick('粘贴')">粘贴</li>
        <li class="menu-wrap-item" @click="menuClick('这里是右键菜单')">这里是右键菜单</li>
        <li class="menu-wrap-item" @click="menuClick('这里是右键菜单')">这里是右键菜单</li>
    </ul>
</ivy-contextmenu>

```html
<ivy-contextmenu>
    <div>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
    </div>
    <ul slot="menu" class="menu-wrap">
        <li class="menu-wrap-item" @click="menuClick('复制')">复制</li>
        <li class="menu-wrap-item" @click="menuClick('粘贴')">粘贴</li>
        <li class="menu-wrap-item" @click="menuClick('这里是右键菜单')">这里是右键菜单</li>
        <li class="menu-wrap-item" @click="menuClick('这里是右键菜单')">这里是右键菜单</li>
    </ul>
</ivy-contextmenu>

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
```

<script setup>
const menuClick = (menu)=>{
    alert(`点击了菜单${menu}`)
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