# Image 图片

图片容器，在保留原生 `img` 的特性下，自定义占位、加载失败等

## 基础用法

可通过 `fit` 确定图片如何适应到容器框，同原生 `object-fit`。

<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="fit"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="contain" class="ml-10"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="cover" class="ml-10"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="none" class="ml-10"></ivy-image>
<ivy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="height: 100px;width: 100px;" fit="scale-down" class="ml-10"></ivy-image>

```html
<ivy-image
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    style="height: 100px;width: 100px;"
    fit="fit"
></ivy-image>
<ivy-image
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    style="height: 100px;width: 100px;"
    fit="contain"
    class="ml-10"
></ivy-image>
<ivy-image
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    style="height: 100px;width: 100px;"
    fit="cover"
    class="ml-10"
></ivy-image>
<ivy-image
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    style="height: 100px;width: 100px;"
    fit="none"
    class="ml-10"
></ivy-image>
<ivy-image
    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    style="height: 100px;width: 100px;"
    fit="scale-down"
    class="ml-10"
></ivy-image>
```

## 占位内容

可通过 `slot = placeholder` 可自定义占位内容

第一个为默认加载中的占位内容，第二个为自定义加载中的占位内容

<ivy-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;"></ivy-image>
<ivy-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;" class="ml-20">
    <ivy-icon name="refresh" size="28" spin slot="placeholder"></ivy-icon>
</ivy-image>

```html
<ivy-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;"></ivy-image>
<ivy-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;" class="ml-20">
    <ivy-icon name="refresh" size="28" spin slot="placeholder"></ivy-icon>
</ivy-image>
```

## 加载失败

可通过 `slot = error` 可自定义加载失败内容

第一个为默认加载失败的显示，第二个为自定义错误信息

<ivy-image style="width: 300px;height: 200px;"></ivy-image>
<ivy-image style="width: 300px;height: 200px;" class="ml-20">
<ivy-icon name="picture-outline" size="28" slot="error"></ivy-icon>
</ivy-image>

```html
<ivy-image style="width: 300px;height: 200px;"></ivy-image>
<ivy-image style="width: 300px;height: 200px;" class="ml-20">
    <ivy-icon name="picture-outline" size="28" slot="error"></ivy-icon>
</ivy-image>
```

<style>
ivy-image+ivy-image{
    margin-left: 24px;
}
</style>
