# Color 色彩

ivy 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

## 主色

ivy 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。

<div class="color-item" style="background: #2d8cf0;">Success #2d8cf0</div>
<div class="color-item" style="background: #5cadff;">Light Primary #5cadff</div>
<div class="color-item" style="background: #2b85e4;">Dark Primary #2b85e4</div>


## 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<div class="color-item" style="background: #67C23A;">Success #67C23A</div>
<div class="color-item" style="background: #E6A23C;">Warning #E6A23C</div>
<div class="color-item" style="background: #F56C6C;">Danger #F56C6C</div>
<div class="color-item" style="background: #909399;">Info #909399</div>

<style lang="scss">
.color-item{
    display: inline-flex;
    width: 23.5%;
    height: 80px;
    line-height: 80px;
    flex-direction: column;
    color: white;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    &+&{
        margin-left: 2%;
    }
}
</style>
