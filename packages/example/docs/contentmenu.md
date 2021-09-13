# ContentMenu 右键菜单

## 基础用法

使用 `content-menu` 标签来生成自定义右键菜单的区域

<ivy-content-menu>
    <div>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
    </div>
    <ul slot="menu" class="menu-wrap">
        <li class="menu-wrap-item">复制</li>
        <li class="menu-wrap-item">粘贴</li>
        <li class="menu-wrap-item">这里是右键菜单</li>
        <li class="menu-wrap-item">这里是右键菜单</li>
    </ul>
</ivy-content-menu>

```html
<ivy-content-menu>
    <div>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
        <p>这里是显示右键菜单的区域</p>
    </div>
    <ul slot="menu" class="menu-wrap">
        <li class="menu-wrap-item">复制</li>
        <li class="menu-wrap-item">粘贴</li>
        <li class="menu-wrap-item">这里是右键菜单</li>
        <li class="menu-wrap-item">这里是右键菜单</li>
    </ul>
</ivy-content-menu>

<style>
.menu-wrap{
    display: inline-block;
    background-color: #fff;
    border: 1px solid #cacaca;
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
}
.menu-wrap-item{
    white-space: none;
    width: 160px;
    padding: 0 24px;
    box-sizing: border-box;
    cursor: pointer;
}
.menu-wrap-item:hover{
    background-color: #efefef;
}
</style>
```

<style>
.menu-wrap{
    display: inline-block;
    background-color: #fff;
    border: 1px solid #cacaca;
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
}
.menu-wrap-item{
    white-space: none;
    width: 160px;
    padding: 0 24px;
    box-sizing: border-box;
    cursor: pointer;
}
.menu-wrap-item:hover{
    background-color: #efefef;
}
</style>