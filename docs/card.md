### Card 卡片

#### 常规用法

<fox-button onclick="document.querySelector('#test').setAttribute('header','这是设置后的标题')">改变 card 标题</fox-button>

<ins-card style="width: 300px;" header="123" id="test">
    <div>卡片</div>
</ins-card>

<ins-card style="width: 300px;">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ins-card>

```html
<ins-card style="width: 300px;" header="123" id="test">
    <div>卡片</div>
</ins-card>

<ins-card style="width: 300px;">
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ins-card>
```

#### 阴影

<ins-card style="width: 300px;" shadow>
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ins-card>

```html
<ins-card style="width: 300px;" shadow>
    <p slot="header" style="margin: 0;">卡片头部</p>
    <div>卡片</div>
</ins-card>
```
