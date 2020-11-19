# Tab 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

<ivy-tab id="tab">
    <ivy-tab-pane title="用户管理">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane title="配置管理">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane title="角色管理">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
</ivy-tab>

```html
<ivy-tab>
    <ivy-tab-pane title="用户管理"> 用户管理 </ivy-tab-pane>
    <ivy-tab-pane title="配置管理"> 配置管理 </ivy-tab-pane>
    <ivy-tab-pane title="角色管理"> 角色管理 </ivy-tab-pane>
    <ivy-tab-pane title="权限管理"> 权限管理 </ivy-tab-pane>
</ivy-tab>
```

## 标识 name

每个`ivy-tab-pane`需要指定一个标识`name`，没有会默认以序列号为`name`,

`active` 作用在 `ivy-tab` 上，可以指定切换到具体标签页，也可以指定初始值。

<ivy-tab active="b" id="tab3">
    <ivy-tab-pane title="用户管理" name="a">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane title="配置管理" name="b">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane title="角色管理" name="c">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理" name="d">
        权限管理
    </ivy-tab-pane>
</ivy-tab>

<ivy-button type="success" onclick="document.getElementById('tab3').setAttribute('active', 'd')">跳转到-权限管理</ivy-button>

```html
<ivy-tab active="b" id="tab3">
    <ivy-tab-pane title="用户管理" name="a"> 用户管理 </ivy-tab-pane>
    <ivy-tab-pane title="配置管理" name="b"> 配置管理 </ivy-tab-pane>
    <ivy-tab-pane title="角色管理" name="c"> 角色管理 </ivy-tab-pane>
    <ivy-tab-pane title="权限管理" name="d"> 权限管理 </ivy-tab-pane>
</ivy-tab>
<ivy-button type="success" onclick="document.getElementById('tab3').setAttribute('active', 'd')">跳转到-权限管理</ivy-button>
```

## 其他

当 `tab-pane` 比较多时，两次会会出现按钮，点击按钮可以左右滚动。

<ivy-tab active="2" id="tab1">
    <ivy-tab-pane title="用户管理">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane title="配置管理">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane title="角色管理">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane title="权限管理">
        权限管理
    </ivy-tab-pane>
</ivy-tab>

<script>
document.getElementById("tab").addEventListener('change', ev => {
    console.log(ev)
    $ivy.message({message: `当前活动的标签页是：${ev.detail}`})
})
</script>
