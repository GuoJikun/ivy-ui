# Collapse 折叠面板

## 基础用法

默认时都可以打开的

<ivy-collapse>
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
    </ivy-collapse-item>
</ivy-collapse>

```html
<ivy-collapse>
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </div>
    </ivy-collapse-item>
</ivy-collapse>
```

## 默认打开

通过设置`collapse`的`active`属性来默认展开某一项--collapseItem 组件需要通过`index`来设置唯一标识

<ivy-collapse active="2">
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
    </ivy-collapse-item>
</ivy-collapse>

```html
<ivy-collapse active="2">
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </div>
    </ivy-collapse-item>
</ivy-collapse>
```

## 通过 slot 自定义标题

<ivy-collapse active="1">
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div slot="name">史蒂夫·乔布斯<ivy-icon name="info" class="ml-10"></ivy-icon></div>
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
    </ivy-collapse-item>
</ivy-collapse>

```html
<ivy-collapse active="1">
    <ivy-collapse-item index="1" name="史蒂夫·乔布斯">
        <div slot="name">史蒂夫·乔布斯<ivy-icon name="info" class="ml-10"></ivy-icon></div>
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" name="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" name="乔纳森·伊夫">
        <div>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </div>
    </ivy-collapse-item>
</ivy-collapse>
```
