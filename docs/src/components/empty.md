# Empty 空状态

## 常规用法

空状态时的占位提示。

<ivy-empty>描述文字</ivy-empty>

```html
<ivy-empty>描述文字</ivy-empty>
```

## 禁用选项

通过 `name` 为 `image` 的 `slot` 来重写占位图片

<ivy-empty>
    <ivy-icon name="picture-outline" size="160" color="#cfcfcf" slot="image"></ivy-icon>
    <!-- <img src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" slot="image"> -->
    暂无数据
</ivy-empty>

```html
<ivy-empty>
    <ivy-icon name="picture-outline" size="160" color="#cfcfcf" slot="image"></ivy-icon>
    暂无数据
</ivy-empty>
```
