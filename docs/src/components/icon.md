# Icon 图标

## 安装

现在 `ivy-icon` 被抽离成了一个单独的 npm 包，现在使用时需要单独安装 `ivy-icon`

```bash
npm i ivy-icon
```

## 使用

```js
// 全量引入
import { registerComponent} from 'ivy-icon'
registerComponent()

// 按需引入
import { registerComponent as registerBackComponent } from 'ivy-icon/dist/es/back.js'
registerBackComponent()
```

## 基础用法

通过`name`来设置不同的图标

<ivy-icon-download></ivy-icon-download>
<ivy-icon-edit class="margin-left"></ivy-icon-edit>
<ivy-icon-reading class="margin-left"></ivy-icon-reading>

```html
<ivy-icon-download></ivy-icon-download>
<ivy-icon-edit class="margin-left"></ivy-icon-edit>
<ivy-icon-reading class="margin-left"></ivy-icon-reading>
```

## 旋转

添加`spin`属性来使 icon 旋转

<ivy-icon-loading spin></ivy-icon-loading>
<ivy-icon-refresh-right spin class="margin-left"></ivy-icon-refresh-right>
<ivy-icon-refresh spin class="margin-left"></ivy-icon-refresh>

```html
<ivy-icon-loading spin></ivy-icon-loading>
<ivy-icon-refresh-right spin class="margin-left"></ivy-icon-refresh-right>
<ivy-icon-refresh spin class="margin-left"></ivy-icon-refresh>
```

## 大小

添加`size`属性来设置大小

<ivy-icon-loading size="12px"></ivy-icon-loading>
<ivy-icon-loading class="margin-left"></ivy-icon-loading>
<ivy-icon-loading size="16px" class="margin-left"></ivy-icon-loading>
<ivy-icon-loading size="18px" class="margin-left"></ivy-icon-loading>
<ivy-icon-loading size="20px" class="margin-left"></ivy-icon-loading>

```html
<ivy-icon-loading size="12"></ivy-icon-loading>
<ivy-icon-loading></ivy-icon-loading>
<ivy-icon-loading size="16"></ivy-icon-loading>
<ivy-icon-loading size="18"></ivy-icon-loading>
<ivy-icon-loading size="20"></ivy-icon-loading>
```

## 颜色

添加`color`属性来设置颜色

<ivy-icon-loading></ivy-icon-loading>
<ivy-icon-loading color="red" class="margin-left"></ivy-icon-loading>
<ivy-icon-loading color="blue" class="margin-left"></ivy-icon-loading>
<ivy-icon-loading color="pink" class="margin-left"></ivy-icon-loading>
<ivy-icon-loading color="green" class="margin-left"></ivy-icon-loading>

```html
<ivy-icon-loading></ivy-icon-loading>
<ivy-icon-loading color="red"></ivy-icon-loading>
<ivy-icon-loading color="blue"></ivy-icon-loading>
<ivy-icon-loading color="pink"></ivy-icon-loading>
<ivy-icon-loading color="green"></ivy-icon-loading>
```

## Attrs

| 属性名   | 说明   |类型| 可选值       | 默认值    |
|-------|------|-|-----------|--------|
| size  | 图标大小 |`string`| 合法的 css 单位 | `14px` |
| color | 图标颜色 |`string`| 合法的颜色值    | -      |

## 所有 icon

<div id="icons">
<ivy-icon-edit size="20" style="margin: 10px;"></ivy-icon-edit>
<ivy-icon-download size="20" style="margin: 10px;"></ivy-icon-download>
<ivy-icon-coin size="20" style="margin: 10px;"></ivy-icon-coin>
<ivy-icon-female size="20" style="margin: 10px;"></ivy-icon-female>
<ivy-icon-edit-outline size="20" style="margin: 10px;"></ivy-icon-edit-outline>
<ivy-icon-files size="20" style="margin: 10px;"></ivy-icon-files>
<ivy-icon-film size="20" style="margin: 10px;"></ivy-icon-film>
<ivy-icon-error size="20" style="margin: 10px;"></ivy-icon-error>
<ivy-icon-eleme size="20" style="margin: 10px;"></ivy-icon-eleme>
<ivy-icon-coffee size="20" style="margin: 10px;"></ivy-icon-coffee>
<ivy-icon-folder-remove size="20" style="margin: 10px;"></ivy-icon-folder-remove>
<ivy-icon-folder-checked size="20" style="margin: 10px;"></ivy-icon-folder-checked>
<ivy-icon-folder-add size="20" style="margin: 10px;"></ivy-icon-folder-add>
<ivy-icon-folder-delete size="20" style="margin: 10px;"></ivy-icon-folder-delete>
<ivy-icon-football size="20" style="margin: 10px;"></ivy-icon-football>
<ivy-icon-finished size="20" style="margin: 10px;"></ivy-icon-finished>
<ivy-icon-folder size="20" style="margin: 10px;"></ivy-icon-folder>
<ivy-icon-fork-spoon size="20" style="margin: 10px;"></ivy-icon-fork-spoon>
<ivy-icon-first-aid-kit size="20" style="margin: 10px;"></ivy-icon-first-aid-kit>
<ivy-icon-goblet-full size="20" style="margin: 10px;"></ivy-icon-goblet-full>
<ivy-icon-food size="20" style="margin: 10px;"></ivy-icon-food>
<ivy-icon-folder-opened size="20" style="margin: 10px;"></ivy-icon-folder-opened>
<ivy-icon-full-screen size="20" style="margin: 10px;"></ivy-icon-full-screen>
<ivy-icon-goblet-square-full size="20" style="margin: 10px;"></ivy-icon-goblet-square-full>
<ivy-icon-goblet size="20" style="margin: 10px;"></ivy-icon-goblet>
<ivy-icon-goblet-square size="20" style="margin: 10px;"></ivy-icon-goblet-square>
<ivy-icon-goods size="20" style="margin: 10px;"></ivy-icon-goods>
<ivy-icon-guide size="20" style="margin: 10px;"></ivy-icon-guide>
<ivy-icon-help size="20" style="margin: 10px;"></ivy-icon-help>
<ivy-icon-headset size="20" style="margin: 10px;"></ivy-icon-headset>
<ivy-icon-house size="20" style="margin: 10px;"></ivy-icon-house>
<ivy-icon-ice-cream-round size="20" style="margin: 10px;"></ivy-icon-ice-cream-round>
<ivy-icon-hot-water size="20" style="margin: 10px;"></ivy-icon-hot-water>
<ivy-icon-heavy-rain size="20" style="margin: 10px;"></ivy-icon-heavy-rain>
<ivy-icon-ice-drink size="20" style="margin: 10px;"></ivy-icon-ice-drink>
<ivy-icon-ice-cream size="20" style="margin: 10px;"></ivy-icon-ice-cream>
<ivy-icon-key size="20" style="margin: 10px;"></ivy-icon-key>
<ivy-icon-ice-cream-square size="20" style="margin: 10px;"></ivy-icon-ice-cream-square>
<ivy-icon-knife-fork size="20" style="margin: 10px;"></ivy-icon-knife-fork>
<ivy-icon-ice-tea size="20" style="margin: 10px;"></ivy-icon-ice-tea>
<ivy-icon-info size="20" style="margin: 10px;"></ivy-icon-info>
<ivy-icon-grape size="20" style="margin: 10px;"></ivy-icon-grape>
<ivy-icon-light-rain size="20" style="margin: 10px;"></ivy-icon-light-rain>
<ivy-icon-location-information size="20" style="margin: 10px;"></ivy-icon-location-information>
<ivy-icon-lock size="20" style="margin: 10px;"></ivy-icon-lock>
<ivy-icon-location-outline size="20" style="margin: 10px;"></ivy-icon-location-outline>
<ivy-icon-lightning size="20" style="margin: 10px;"></ivy-icon-lightning>
<ivy-icon-magic-stick size="20" style="margin: 10px;"></ivy-icon-magic-stick>
<ivy-icon-link size="20" style="margin: 10px;"></ivy-icon-link>
<ivy-icon-lollipop size="20" style="margin: 10px;"></ivy-icon-lollipop>
<ivy-icon-location size="20" style="margin: 10px;"></ivy-icon-location>
<ivy-icon-loading size="20" style="margin: 10px;"></ivy-icon-loading>
<ivy-icon-male size="20" style="margin: 10px;"></ivy-icon-male>
<ivy-icon-menu size="20" style="margin: 10px;"></ivy-icon-menu>
<ivy-icon-microphone size="20" style="margin: 10px;"></ivy-icon-microphone>
<ivy-icon-minus size="20" style="margin: 10px;"></ivy-icon-minus>
<ivy-icon-message size="20" style="margin: 10px;"></ivy-icon-message>
<ivy-icon-map-location size="20" style="margin: 10px;"></ivy-icon-map-location>
<ivy-icon-message-solid size="20" style="margin: 10px;"></ivy-icon-message-solid>
<ivy-icon-mic size="20" style="margin: 10px;"></ivy-icon-mic>
<ivy-icon-milk-tea size="20" style="margin: 10px;"></ivy-icon-milk-tea>
<ivy-icon-medal size="20" style="margin: 10px;"></ivy-icon-medal>
<ivy-icon-medal- size="20" style="margin: 10px;"></ivy-icon-medal->
<ivy-icon-mobile size="20" style="margin: 10px;"></ivy-icon-mobile>
<ivy-icon-mobile-phone size="20" style="margin: 10px;"></ivy-icon-mobile-phone>
<ivy-icon-money size="20" style="margin: 10px;"></ivy-icon-money>
<ivy-icon-more size="20" style="margin: 10px;"></ivy-icon-more>
<ivy-icon-no-smoking size="20" style="margin: 10px;"></ivy-icon-no-smoking>
<ivy-icon-more-outline size="20" style="margin: 10px;"></ivy-icon-more-outline>
<ivy-icon-notebook- size="20" style="margin: 10px;"></ivy-icon-notebook->
<ivy-icon-s-home size="20" style="margin: 10px;"></ivy-icon-s-home>
<ivy-icon-news size="20" style="margin: 10px;"></ivy-icon-news>
<ivy-icon-odometer size="20" style="margin: 10px;"></ivy-icon-odometer>
<ivy-icon name="notebook-1" size="20" style="margin: 10px;"></ivy-icon>
<ivy-icon-s-open size="20" style="margin: 10px;"></ivy-icon-s-open>
<ivy-icon-s-marketing size="20" style="margin: 10px;"></ivy-icon-s-marketing>
<ivy-icon-mouse size="20" style="margin: 10px;"></ivy-icon-mouse>
<ivy-icon-s-management size="20" style="margin: 10px;"></ivy-icon-s-management>
<ivy-icon-s-operation size="20" style="margin: 10px;"></ivy-icon-s-operation>
<ivy-icon-office-building size="20" style="margin: 10px;"></ivy-icon-office-building>
<ivy-icon-open size="20" style="margin: 10px;"></ivy-icon-open>
<ivy-icon-ship size="20" style="margin: 10px;"></ivy-icon-ship>
<ivy-icon-sell size="20" style="margin: 10px;"></ivy-icon-sell>
<ivy-icon-search size="20" style="margin: 10px;"></ivy-icon-search>
<ivy-icon-service size="20" style="margin: 10px;"></ivy-icon-service>
<ivy-icon-scissors size="20" style="margin: 10px;"></ivy-icon-scissors>
<ivy-icon-shopping-bag- size="20" style="margin: 10px;"></ivy-icon-shopping-bag->
<ivy-icon-orange size="20" style="margin: 10px;"></ivy-icon-orange>
<ivy-icon-phone-outline size="20" style="margin: 10px;"></ivy-icon-phone-outline>
<ivy-icon-picture size="20" style="margin: 10px;"></ivy-icon-picture>
<ivy-icon-receiving size="20" style="margin: 10px;"></ivy-icon-receiving>
<ivy-icon-phone size="20" style="margin: 10px;"></ivy-icon-phone>
<ivy-icon-picture-outline-round size="20" style="margin: 10px;"></ivy-icon-picture-outline-round>
<ivy-icon-refresh-left size="20" style="margin: 10px;"></ivy-icon-refresh-left>
<ivy-icon-picture-outline size="20" style="margin: 10px;"></ivy-icon-picture-outline>
<ivy-icon-pie-chart size="20" style="margin: 10px;"></ivy-icon-pie-chart>
<ivy-icon-s-data size="20" style="margin: 10px;"></ivy-icon-s-data>
<ivy-icon-refrigerator size="20" style="margin: 10px;"></ivy-icon-refrigerator>
<ivy-icon-s-cooperation size="20" style="margin: 10px;"></ivy-icon-s-cooperation>
<ivy-icon-s-check size="20" style="margin: 10px;"></ivy-icon-s-check>
<ivy-icon-s-flag size="20" style="margin: 10px;"></ivy-icon-s-flag>
<ivy-icon-s-custom size="20" style="margin: 10px;"></ivy-icon-s-custom>
<ivy-icon-s-fold size="20" style="margin: 10px;"></ivy-icon-s-fold>
<ivy-icon-s-finance size="20" style="margin: 10px;"></ivy-icon-s-finance>
<ivy-icon-remove-outline size="20" style="margin: 10px;"></ivy-icon-remove-outline>
<ivy-icon-s-comment size="20" style="margin: 10px;"></ivy-icon-s-comment>
<ivy-icon-remove size="20" style="margin: 10px;"></ivy-icon-remove>
<ivy-icon-refresh-right size="20" style="margin: 10px;"></ivy-icon-refresh-right>
<ivy-icon-s-unfold size="20" style="margin: 10px;"></ivy-icon-s-unfold>
<ivy-icon-school size="20" style="margin: 10px;"></ivy-icon-school>
<ivy-icon-s-shop size="20" style="margin: 10px;"></ivy-icon-s-shop>
<ivy-icon-s-ticket size="20" style="margin: 10px;"></ivy-icon-s-ticket>
<ivy-icon-sort-up size="20" style="margin: 10px;"></ivy-icon-sort-up>
<ivy-icon-star-on size="20" style="margin: 10px;"></ivy-icon-star-on>
<ivy-icon-success size="20" style="margin: 10px;"></ivy-icon-success>
<ivy-icon-sort size="20" style="margin: 10px;"></ivy-icon-sort>
<ivy-icon-takeaway-box size="20" style="margin: 10px;"></ivy-icon-takeaway-box>
<ivy-icon-stopwatch size="20" style="margin: 10px;"></ivy-icon-stopwatch>
<ivy-icon-thumb size="20" style="margin: 10px;"></ivy-icon-thumb>
<ivy-icon-tickets size="20" style="margin: 10px;"></ivy-icon-tickets>
<ivy-icon-turn-off-microphone size="20" style="margin: 10px;"></ivy-icon-turn-off-microphone>
<ivy-icon-time size="20" style="margin: 10px;"></ivy-icon-time>
<ivy-icon-truck size="20" style="margin: 10px;"></ivy-icon-truck>
<ivy-icon-upload size="20" style="margin: 10px;"></ivy-icon-upload>
<ivy-icon-user size="20" style="margin: 10px;"></ivy-icon-user>
<ivy-icon-user-solid size="20" style="margin: 10px;"></ivy-icon-user-solid>
<ivy-icon name="upload1" size="20" style="margin: 10px;"></ivy-icon>
<ivy-icon-video-camera-solid size="20" style="margin: 10px;"></ivy-icon-video-camera-solid>
<ivy-icon-video-play size="20" style="margin: 10px;"></ivy-icon-video-play>
<ivy-icon-video-camera size="20" style="margin: 10px;"></ivy-icon-video-camera>
<ivy-icon-right size="20" style="margin: 10px;"></ivy-icon-right>
<ivy-icon-video-pause size="20" style="margin: 10px;"></ivy-icon-video-pause>
<ivy-icon-star-off size="20" style="margin: 10px;"></ivy-icon-star-off>
<ivy-icon-trophy size="20" style="margin: 10px;"></ivy-icon-trophy>
<ivy-icon-wallet size="20" style="margin: 10px;"></ivy-icon-wallet>
<ivy-icon-watch size="20" style="margin: 10px;"></ivy-icon-watch>
<ivy-icon-warning-outline size="20" style="margin: 10px;"></ivy-icon-warning-outline>
<ivy-icon-wind-power size="20" style="margin: 10px;"></ivy-icon-wind-power>
<ivy-icon-view size="20" style="margin: 10px;"></ivy-icon-view>
<ivy-icon-watermelon size="20" style="margin: 10px;"></ivy-icon-watermelon>
<ivy-icon-share size="20" style="margin: 10px;"></ivy-icon-share>
<ivy-icon-set-up size="20" style="margin: 10px;"></ivy-icon-set-up>
<ivy-icon-zoom-in size="20" style="margin: 10px;"></ivy-icon-zoom-in>
<ivy-icon-water-cup size="20" style="margin: 10px;"></ivy-icon-water-cup>
<ivy-icon-warning size="20" style="margin: 10px;"></ivy-icon-warning>
<ivy-icon-watch- size="20" style="margin: 10px;"></ivy-icon-watch->
<ivy-icon-setting size="20" style="margin: 10px;"></ivy-icon-setting>
<ivy-icon-plus size="20" style="margin: 10px;"></ivy-icon-plus>
<ivy-icon-zoom-out size="20" style="margin: 10px;"></ivy-icon-zoom-out>
<ivy-icon-place size="20" style="margin: 10px;"></ivy-icon-place>
<ivy-icon-pear size="20" style="margin: 10px;"></ivy-icon-pear>
<ivy-icon-partly-cloudy size="20" style="margin: 10px;"></ivy-icon-partly-cloudy>
<ivy-icon-paperclip size="20" style="margin: 10px;"></ivy-icon-paperclip>
<ivy-icon-platform-eleme size="20" style="margin: 10px;"></ivy-icon-platform-eleme>
<ivy-icon-s-claim size="20" style="margin: 10px;"></ivy-icon-s-claim>
<ivy-icon-s-goods size="20" style="margin: 10px;"></ivy-icon-s-goods>
<ivy-icon-s-grid size="20" style="margin: 10px;"></ivy-icon-s-grid>
<ivy-icon-s-help size="20" style="margin: 10px;"></ivy-icon-s-help>
<ivy-icon name="shopping-bag-1" size="20" style="margin: 10px;"></ivy-icon>
<ivy-icon-shopping-cart- size="20" style="margin: 10px;"></ivy-icon-shopping-cart->
<ivy-icon name="shopping-cart-1" size="20" style="margin: 10px;"></ivy-icon>
<ivy-icon-smoking size="20" style="margin: 10px;"></ivy-icon-smoking>
<ivy-icon-shopping-cart-full size="20" style="margin: 10px;"></ivy-icon-shopping-cart-full>
<ivy-icon-soccer size="20" style="margin: 10px;"></ivy-icon-soccer>
<ivy-icon-s-promotion size="20" style="margin: 10px;"></ivy-icon-s-promotion>
<ivy-icon-sort-down size="20" style="margin: 10px;"></ivy-icon-sort-down>
<ivy-icon-s-release size="20" style="margin: 10px;"></ivy-icon-s-release>
<ivy-icon-s-opportunity size="20" style="margin: 10px;"></ivy-icon-s-opportunity>
<ivy-icon-s-order size="20" style="margin: 10px;"></ivy-icon-s-order>
<ivy-icon-s-tools size="20" style="margin: 10px;"></ivy-icon-s-tools>
<ivy-icon-sold-out size="20" style="margin: 10px;"></ivy-icon-sold-out>
<ivy-icon-s-platform size="20" style="margin: 10px;"></ivy-icon-s-platform>
<ivy-icon-suitcase size="20" style="margin: 10px;"></ivy-icon-suitcase>
<ivy-icon-suitcase- size="20" style="margin: 10px;"></ivy-icon-suitcase->
<ivy-icon-sugar size="20" style="margin: 10px;"></ivy-icon-sugar>
<ivy-icon-refresh size="20" style="margin: 10px;"></ivy-icon-refresh>
<ivy-icon-sunset size="20" style="margin: 10px;"></ivy-icon-sunset>
<ivy-icon-sunrise size="20" style="margin: 10px;"></ivy-icon-sunrise>
<ivy-icon-sunrise size="20" style="margin: 10px;"></ivy-icon-sunrise>
<ivy-icon-top-left size="20" style="margin: 10px;"></ivy-icon-top-left>
<ivy-icon-add-location size="20" style="margin: 10px;"></ivy-icon-add-location>
<ivy-icon-switch-button size="20" style="margin: 10px;"></ivy-icon-switch-button>
<ivy-icon-aim size="20" style="margin: 10px;"></ivy-icon-aim>
<ivy-icon-toilet-paper size="20" style="margin: 10px;"></ivy-icon-toilet-paper>
<ivy-icon-back size="20" style="margin: 10px;"></ivy-icon-back>
<ivy-icon-timer size="20" style="margin: 10px;"></ivy-icon-timer>
<ivy-icon-arrow-left size="20" style="margin: 10px;"></ivy-icon-arrow-left>
<ivy-icon-table-lamp size="20" style="margin: 10px;"></ivy-icon-table-lamp>
<ivy-icon-attract size="20" style="margin: 10px;"></ivy-icon-attract>
<ivy-icon-tableware size="20" style="margin: 10px;"></ivy-icon-tableware>
<ivy-icon-arrow-right size="20" style="margin: 10px;"></ivy-icon-arrow-right>
<ivy-icon-top-right size="20" style="margin: 10px;"></ivy-icon-top-right>
<ivy-icon-arrow-up size="20" style="margin: 10px;"></ivy-icon-arrow-up>
<ivy-icon-trophy- size="20" style="margin: 10px;"></ivy-icon-trophy->
<ivy-icon-alarm-clock size="20" style="margin: 10px;"></ivy-icon-alarm-clock>
<ivy-icon-top size="20" style="margin: 10px;"></ivy-icon-top>
<ivy-icon-arrow-down size="20" style="margin: 10px;"></ivy-icon-arrow-down>
<ivy-icon-turn-off size="20" style="margin: 10px;"></ivy-icon-turn-off>
<ivy-icon-apple size="20" style="margin: 10px;"></ivy-icon-apple>
<ivy-icon-monitor size="20" style="margin: 10px;"></ivy-icon-monitor>
<ivy-icon-bangzhu size="20" style="margin: 10px;"></ivy-icon-bangzhu>
<ivy-icon-unlock size="20" style="margin: 10px;"></ivy-icon-unlock>
<ivy-icon-bell size="20" style="margin: 10px;"></ivy-icon-bell>
<ivy-icon-postcard size="20" style="margin: 10px;"></ivy-icon-postcard>
<ivy-icon-bottom-right size="20" style="margin: 10px;"></ivy-icon-bottom-right>
<ivy-icon-umbrella size="20" style="margin: 10px;"></ivy-icon-umbrella>
<ivy-icon-box size="20" style="margin: 10px;"></ivy-icon-box>
<ivy-icon-moon size="20" style="margin: 10px;"></ivy-icon-moon>
<ivy-icon-brush size="20" style="margin: 10px;"></ivy-icon-brush>
<ivy-icon-present size="20" style="margin: 10px;"></ivy-icon-present>
<ivy-icon-bank-card size="20" style="margin: 10px;"></ivy-icon-bank-card>
<ivy-icon-position size="20" style="margin: 10px;"></ivy-icon-position>
<ivy-icon-bottom-left size="20" style="margin: 10px;"></ivy-icon-bottom-left>
<ivy-icon-price-tag size="20" style="margin: 10px;"></ivy-icon-price-tag>
<ivy-icon-bicycle size="20" style="margin: 10px;"></ivy-icon-bicycle>
<ivy-icon-potato-strips size="20" style="margin: 10px;"></ivy-icon-potato-strips>
<ivy-icon-baseball size="20" style="margin: 10px;"></ivy-icon-baseball>
<ivy-icon-printer size="20" style="margin: 10px;"></ivy-icon-printer>
<ivy-icon-caret-left size="20" style="margin: 10px;"></ivy-icon-caret-left>
<ivy-icon-sunny size="20" style="margin: 10px;"></ivy-icon-sunny>
<ivy-icon-camera-solid size="20" style="margin: 10px;"></ivy-icon-camera-solid>
<ivy-icon-moon-night size="20" style="margin: 10px;"></ivy-icon-moon-night>
<ivy-icon-caret-right size="20" style="margin: 10px;"></ivy-icon-caret-right>
<ivy-icon-reading size="20" style="margin: 10px;"></ivy-icon-reading>
<ivy-icon-caret-top size="20" style="margin: 10px;"></ivy-icon-caret-top>
<ivy-icon-rank size="20" style="margin: 10px;"></ivy-icon-rank>
<ivy-icon-caret-bottom size="20" style="margin: 10px;"></ivy-icon-caret-bottom>
<ivy-icon-question size="20" style="margin: 10px;"></ivy-icon-question>
<ivy-icon-basketball size="20" style="margin: 10px;"></ivy-icon-basketball>
<ivy-icon-burger size="20" style="margin: 10px;"></ivy-icon-burger>
<ivy-icon-bottom size="20" style="margin: 10px;"></ivy-icon-bottom>
<ivy-icon-c-scale-to-original size="20" style="margin: 10px;"></ivy-icon-c-scale-to-original>
<ivy-icon-camera size="20" style="margin: 10px;"></ivy-icon-camera>
<ivy-icon-chat-dot-round size="20" style="margin: 10px;"></ivy-icon-chat-dot-round>
<ivy-icon-check size="20" style="margin: 10px;"></ivy-icon-check>
<ivy-icon-chat-line-square size="20" style="margin: 10px;"></ivy-icon-chat-line-square>
<ivy-icon-chat-round size="20" style="margin: 10px;"></ivy-icon-chat-round>
<ivy-icon-chat-dot-square size="20" style="margin: 10px;"></ivy-icon-chat-dot-square>
<ivy-icon-chat-line-round size="20" style="margin: 10px;"></ivy-icon-chat-line-round>
<ivy-icon-chat-square size="20" style="margin: 10px;"></ivy-icon-chat-square>
<ivy-icon-circle-check size="20" style="margin: 10px;"></ivy-icon-circle-check>
<ivy-icon-circle-close size="20" style="margin: 10px;"></ivy-icon-circle-close>
<ivy-icon-chicken size="20" style="margin: 10px;"></ivy-icon-chicken>
<ivy-icon-circle-plus-outline size="20" style="margin: 10px;"></ivy-icon-circle-plus-outline>
<ivy-icon-circle-plus size="20" style="margin: 10px;"></ivy-icon-circle-plus>
<ivy-icon-close-notification size="20" style="margin: 10px;"></ivy-icon-close-notification>
<ivy-icon-close size="20" style="margin: 10px;"></ivy-icon-close>
<ivy-icon-cloudy-and-sunny size="20" style="margin: 10px;"></ivy-icon-cloudy-and-sunny>
<ivy-icon-cherry size="20" style="margin: 10px;"></ivy-icon-cherry>
<ivy-icon-coffee-cup size="20" style="margin: 10px;"></ivy-icon-coffee-cup>
<ivy-icon-cloudy size="20" style="margin: 10px;"></ivy-icon-cloudy>
<ivy-icon-collection-tag size="20" style="margin: 10px;"></ivy-icon-collection-tag>
<ivy-icon-cold-drink size="20" style="margin: 10px;"></ivy-icon-cold-drink>
<ivy-icon-collection size="20" style="margin: 10px;"></ivy-icon-collection>
<ivy-icon-coordinate size="20" style="margin: 10px;"></ivy-icon-coordinate>
<ivy-icon-connection size="20" style="margin: 10px;"></ivy-icon-connection>
<ivy-icon-crop size="20" style="margin: 10px;"></ivy-icon-crop>
<ivy-icon-cpu size="20" style="margin: 10px;"></ivy-icon-cpu>
<ivy-icon-copy-document size="20" style="margin: 10px;"></ivy-icon-copy-document>
<ivy-icon-d-caret size="20" style="margin: 10px;"></ivy-icon-d-caret>
<ivy-icon-d-arrow-right size="20" style="margin: 10px;"></ivy-icon-d-arrow-right>
<ivy-icon-data-board size="20" style="margin: 10px;"></ivy-icon-data-board>
<ivy-icon-data-analysis size="20" style="margin: 10px;"></ivy-icon-data-analysis>
<ivy-icon-data-line size="20" style="margin: 10px;"></ivy-icon-data-line>
<ivy-icon-d-arrow-left size="20" style="margin: 10px;"></ivy-icon-d-arrow-left>
<ivy-icon-delete-solid size="20" style="margin: 10px;"></ivy-icon-delete-solid>
<ivy-icon-delete-location size="20" style="margin: 10px;"></ivy-icon-delete-location>
<ivy-icon-discount size="20" style="margin: 10px;"></ivy-icon-discount>
<ivy-icon-date size="20" style="margin: 10px;"></ivy-icon-date>
<ivy-icon-dessert size="20" style="margin: 10px;"></ivy-icon-dessert>
<ivy-icon-dish size="20" style="margin: 10px;"></ivy-icon-dish>
<ivy-icon-delete size="20" style="margin: 10px;"></ivy-icon-delete>
<ivy-icon-document-copy size="20" style="margin: 10px;"></ivy-icon-document-copy>
<ivy-icon-document size="20" style="margin: 10px;"></ivy-icon-document>
<ivy-icon-discover size="20" style="margin: 10px;"></ivy-icon-discover>
<ivy-icon-document-add size="20" style="margin: 10px;"></ivy-icon-document-add>
<ivy-icon-document-checked size="20" style="margin: 10px;"></ivy-icon-document-checked>
<ivy-icon-document-delete size="20" style="margin: 10px;"></ivy-icon-document-delete>
<ivy-icon-document-remove size="20" style="margin: 10px;"></ivy-icon-document-remove>
<ivy-icon-dish- size="20" style="margin: 10px;"></ivy-icon-dish->
</div>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    document.getElementById('icons').addEventListener('click', ev=>{
        const target = ev.target;
        const nodeName = target.nodeName;
        const name = target.name;
        const icon = `<ivy-icon name="${name}"></ivy-icon>`;
        if(nodeName === 'IVY-ICON'){
            if (window.navigator.clipboard) {
                window.navigator.clipboard
                    .writeText(icon)
                    .then(
                        () => {
                            alert(`已复制到粘贴板：${icon}`);
                        },
                        () => {
                            alert(`复制到粘贴板失败：${icon}`);
                        }
                    )
                    .catch(e => {
                        throw e;
                    });
            }else{
                alert('浏览器不支持，请切换到chrome浏览器')
            }
        }
    },false)

    document.getElementById("table").setAttribute('data-source', JSON.stringify([
        {name: 'name', desc: '图标的名称', type: 'String', value: '-', defaultValue: '-' },
        {name: 'spin', desc: '旋转图标', type: 'String', value: '-', defaultValue: '-' },
        {name: 'size', desc: '图标的大小-同fontSize', type: 'String', value: '-', defaultValue: '14px' },
        {name: 'color', desc: '图标的颜色-合法的css颜色', type: 'String', value: '-', defaultValue: '-' }
    ]))
})
</script>
