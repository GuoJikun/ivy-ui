"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[671],{1062:(a,s,n)=>{n.r(s),n.d(s,{data:()=>t});const t={key:"v-23835ae5",path:"/components/switch.html",title:"Switch 开关",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础用法",slug:"基础用法",children:[]},{level:2,title:"禁止点击",slug:"禁止点击",children:[]},{level:2,title:"change 事件",slug:"change-事件",children:[]}],filePathRelative:"components/switch.md",git:{updatedTime:1638349457e3,contributors:[{name:"GuoJikun",email:"21582741+GuoJikun@users.noreply.github.com",commits:1}]}}},7873:(a,s,n)=>{n.r(s),n.d(s,{default:()=>c});var t=n(6252);const e=(0,t.uE)('<h1 id="switch-开关" tabindex="-1"><a class="header-anchor" href="#switch-开关" aria-hidden="true">#</a> Switch 开关</h1><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><p>通过<code>checked</code>设置是否开启</p><ivy-switch checked></ivy-switch><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-switch</span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-switch</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="禁止点击" tabindex="-1"><a class="header-anchor" href="#禁止点击" aria-hidden="true">#</a> 禁止点击</h2><p>通过设置 <code>disabled</code> 属性来禁止点击</p><ivy-switch disabled></ivy-switch><ivy-switch checked disabled></ivy-switch><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-switch</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-switch</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-switch</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="change-事件" tabindex="-1"><a class="header-anchor" href="#change-事件" aria-hidden="true">#</a> change 事件</h2><p>通过判断 <code>switch</code> 组件是否拥有 <code>checked</code> 属性来判断是否被选中</p><ivy-switch checked id="switchChange"></ivy-switch><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-switch</span> <span class="token attr-name">checked</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-switch</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',14),c={setup:a=>((0,t.bv)((()=>{document.getElementById("switchChange").addEventListener("change",(a=>{console.log(a.detail)}))})),(a,s)=>e)}}}]);