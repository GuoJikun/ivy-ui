<div class="header">
    <div>
        <h1>IvyUI</h1>
        <p>是一套使用原生 Web Components 规范开发的跨框架UI组件库。</p>
        <ivy-button type="primary">快速开始</ivy-button>
    </div>
</div>

---

<div class="feature">
    <div class="feature-item">
        <h3>跨框架</h3>
        <p>无论是react、vue还是原生项目均可使用。</p>
    </div>
    <div class="feature-item">
        <h3>组件化</h3>
        <p>shadow dom真正意义上实现了样式和功能的组件化。</p>
    </div>
    <div class="feature-item">
        <h3>类原生</h3>
        <p>一个组件就像使用一个div标签一样。</p>
    </div>
    <div class="feature-item">
        <h3>无依赖</h3>
        <p>纯原生，无需任何预处理器编译。</p>
    </div>
</div>


:::warning 提示
所有组件的使用方式都和原生方式一致（获取元素的属性...）<br>
自定义事件（非原生事件）都需要使用`addEventListener`来绑定
:::


## 使用说明

### npm or yarn

```bash
npm i ivy-ui
#OR
yarn add ivy-ui
#OR
pnpm add ivy-ui
```

### script 引入

```html
<!--最新版-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui"></script>
<!--指定版本号-->
<script type="module" src="//cdn.jsdelivr.net/npm/ivy-ui@0.4.0"></script>
```


<style scoped>
.header{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 120px 0 60px;
}
.feature{
    display: flex;
    flex-wrap: wrap;
}
.feature-item{
    flex: 0 0 33%;
    padding: 12px 24px;
    box-sizing: border-box;
}
.feature-item > p {
    color: #898989;
}
</style>