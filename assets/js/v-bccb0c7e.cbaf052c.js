"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[426],{1358:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-bccb0c7e",path:"/components/contentmenu.html",title:"ContentMenu 右键菜单",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础用法",slug:"基础用法",children:[]}],filePathRelative:"components/contentmenu.md",git:{updatedTime:1638349457e3,contributors:[{name:"GuoJikun",email:"21582741+GuoJikun@users.noreply.github.com",commits:1}]}}},5992:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const p=(0,t._)("h1",{id:"contentmenu-右键菜单",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#contentmenu-右键菜单","aria-hidden":"true"},"#"),(0,t.Uk)(" ContentMenu 右键菜单")],-1),e=(0,t._)("h2",{id:"基础用法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#"),(0,t.Uk)(" 基础用法")],-1),c=(0,t._)("p",null,[(0,t.Uk)("使用 "),(0,t._)("code",null,"contextmenu"),(0,t.Uk)(" 标签来生成自定义右键菜单的区域")],-1),l=(0,t._)("div",null,[(0,t._)("p",null,"这里是显示右键菜单的区域"),(0,t._)("p",null,"这里是显示右键菜单的区域"),(0,t._)("p",null,"这里是显示右键菜单的区域"),(0,t._)("p",null,"这里是显示右键菜单的区域"),(0,t._)("p",null,"这里是显示右键菜单的区域")],-1),o={slot:"menu",class:"menu-wrap"},u=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-contextmenu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里是显示右键菜单的区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里是显示右键菜单的区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里是显示右键菜单的区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里是显示右键菜单的区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这里是显示右键菜单的区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-wrap-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClick(<span class="token punctuation">&#39;</span>复制<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>复制<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-wrap-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClick(<span class="token punctuation">&#39;</span>粘贴<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>粘贴<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-wrap-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClick(<span class="token punctuation">&#39;</span>这里是右键菜单<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里是右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-wrap-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClick(<span class="token punctuation">&#39;</span>这里是右键菜单<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这里是右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-contextmenu</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.menu-wrap</span><span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #cacaca<span class="token punctuation">;</span>\n    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 4px 0<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.menu-wrap-item</span><span class="token punctuation">{</span>\n    <span class="token property">white-space</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0 24px<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.menu-wrap-item:hover</span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>',1),i={setup(n){const s=n=>{alert(`点击了菜单${n}`)};return(n,a)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,c,(0,t._)("ivy-contextmenu",null,[l,(0,t._)("ul",o,[(0,t._)("li",{class:"menu-wrap-item",onClick:a[0]||(a[0]=n=>s("复制"))},"复制"),(0,t._)("li",{class:"menu-wrap-item",onClick:a[1]||(a[1]=n=>s("粘贴"))},"粘贴"),(0,t._)("li",{class:"menu-wrap-item",onClick:a[2]||(a[2]=n=>s("这里是右键菜单"))},"这里是右键菜单"),(0,t._)("li",{class:"menu-wrap-item",onClick:a[3]||(a[3]=n=>s("这里是右键菜单"))},"这里是右键菜单")])]),u],64))}}}}]);