# Drawer 抽屉

## 常规用法

<ivy-button type="success" @click="click('drawer')">打开 Drawer</ivy-button>

<ivy-drawer id="drawer" header="Drawer标题"></ivy-drawer>

```html
<ivy-button type="success" onclick="document.getElementById('drawer').open()">打开 Drawer</ivy-button>

<ivy-drawer id="drawer" header="Drawer标题"></ivy-drawer>
```

## 隐藏标题

<ivy-button type="success" @click="click('drawer1')">打开 Drawer</ivy-button>

<ivy-drawer id="drawer1" title="Drawer标题" hide-title></ivy-drawer>

```html
<ivy-button type="success" onclick="document.getElementById('drawer1').open()">打开 Drawer</ivy-button>

<ivy-drawer id="drawer1" title="Drawer标题" hide-title></ivy-drawer>
```

## 设置 zIndex

通过给组件设置`zIndex`样式来设置层级

<ivy-button type="success" @click="click('drawer2')">打开 Drawer</ivy-button>
<ivy-drawer id="drawer2" title="Drawer标题" hide-title style="z-index: 9000;"></ivy-drawer>

```html
<ivy-button type="success" onclick="document.getElementById('drawer2').open()"> 打开 Drawer </ivy-button>
<ivy-drawer id="drawer2" title="Drawer标题" hide-title style="z-index: 9000;"></ivy-drawer>
```

## 点击遮罩层是否关闭

通过给组件设置`maskClosable`属性来设置点击遮罩层是否关闭本组件

<ivy-button type="success" onclick="document.getElementById('drawer3').open()">打开 Drawer</ivy-button>
<ivy-drawer id="drawer3" title="Drawer标题" hide-title maskClosable="false">
<ivy-button type="primary" onclick="document.getElementById('drawer3').close()">关闭 Drawer</ivy-button>
</ivy-drawer>

```html
<ivy-button type="success" onclick="document.getElementById('drawer3').open()">打开 Drawer</ivy-button>
<ivy-drawer id="drawer3" title="Drawer标题" hide-title maskClosable="false">
    <ivy-button type="primary" onclick="document.getElementById('drawer3').close()">关闭 Drawer</ivy-button>
</ivy-drawer>
```

<script setup>
const click = (className)=>{
    document.getElementById(className).open()
}
</script>
