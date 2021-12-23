# Split 分割面板

可将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。

## 左右分割

左右分割用法。

<ivy-split style="height: 100px;">
    <div slot="left">
        <p>左侧面板</p>
    </div>
    <div slot="right">右侧面板</div>
</ivy-split>


```html
<ivy-split>
    <div slot="left">左侧面板</div>
    <div slot="right">右侧面板</div>
</ivy-split>
```

## 上下分割

上下分割用法。

<ivy-split vertical="vertical">
    <div slot="top">左侧面板</div>
    <div slot="bottom">右侧面板</div>
</ivy-split>

```html
<ivy-split>
    <div slot="left">左侧面板</div>
    <div slot="right">右侧面板</div>
</ivy-split>
```

<style>
.ml-40{
    margin-left: 40px;
}
</style>
