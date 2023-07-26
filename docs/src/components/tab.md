# Tab 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

最常见的用法

<ivy-tabs id="tab">
    <ivy-tab-pane label="用户管理">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane label="配置管理">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane label="角色管理">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
</ivy-tabs>

```html
<ivy-tabs>
    <ivy-tab-pane label="用户管理"> 用户管理 </ivy-tab-pane>
    <ivy-tab-pane label="配置管理"> 配置管理 </ivy-tab-pane>
    <ivy-tab-pane label="角色管理"> 角色管理 </ivy-tab-pane>
    <ivy-tab-pane label="权限管理"> 权限管理 </ivy-tab-pane>
</ivy-tabs>
```

## 标识 name

每个`ivy-tab-pane`需要指定一个标识`name`，没有会默认以序列号为`name`,

`active` 作用在 `ivy-tab` 上，可以指定切换到具体标签页，也可以指定初始值。

<ivy-button type="success" onclick="document.getElementById('tab3').setAttribute('active', 'd')">跳转到-权限管理</ivy-button>
&nbsp;
<ivy-tabs active="b" id="tab3">
    <ivy-tab-pane label="用户管理" index="a">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane label="配置管理" index="b">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane label="角色管理" index="c">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理" index="d">
        权限管理
    </ivy-tab-pane>
</ivy-tabs>


```html
<ivy-tabs active="b" id="tab3">
    <ivy-tab-pane label="用户管理" index="a"> 用户管理 </ivy-tab-pane>
    <ivy-tab-pane label="配置管理" index="b"> 配置管理 </ivy-tab-pane>
    <ivy-tab-pane label="角色管理" index="c"> 角色管理 </ivy-tab-pane>
    <ivy-tab-pane label="权限管理" index="d"> 权限管理 </ivy-tab-pane>
</ivy-tabs>
<ivy-button type="success" onclick="document.getElementById('tab3').setAttribute('active', 'd')">跳转到-权限管理</ivy-button>
```

## 其他

当 `tab-pane` 比较多时，两次会会出现按钮，点击按钮可以左右滚动。

<ivy-tabs active="2" id="tab1">
    <ivy-tab-pane label="用户管理">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane label="配置管理">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane label="角色管理">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
</ivy-tabs>

```html
<ivy-tabs active="2" id="tab1">
    <ivy-tab-pane label="用户管理">
        用户管理
    </ivy-tab-pane>
    <ivy-tab-pane label="配置管理">
        配置管理
    </ivy-tab-pane>
    <ivy-tab-pane label="角色管理">
        角色管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
    <ivy-tab-pane label="权限管理">
        权限管理
    </ivy-tab-pane>
</ivy-tabs>
```

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById("tab").addEventListener('change', ev => {
        console.log(ev)
        $ivy.message({message: `当前活动的标签页是：${ev.detail}`})
    })
})
</script>
