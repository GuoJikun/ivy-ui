"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[638],{6592:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-2a54ea56",path:"/components/badge.html",title:"Badge 标记",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础用法",slug:"基础用法",children:[]},{level:2,title:"最大值",slug:"最大值",children:[]},{level:2,title:"自定义内容",slug:"自定义内容",children:[]},{level:2,title:"小红点",slug:"小红点",children:[]},{level:2,title:"类型",slug:"类型",children:[]}],filePathRelative:"components/badge.md",git:{updatedTime:163869369e4,contributors:[{name:"GuoJiKun",email:"guojikun486546@163.com",commits:1}]}}},1989:(a,n,s)=>{s.r(n),s.d(n,{default:()=>u});var t=s(6252);const p=(0,t.uE)('<h1 id="badge-标记" tabindex="-1"><a class="header-anchor" href="#badge-标记" aria-hidden="true">#</a> Badge 标记</h1><p>出现在按钮、图标旁的数字或状态标记</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><p>展示新消息数量。</p><ivy-badge value="12"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="10" class="ml-40"><ivy-button>踩</ivy-button></ivy-badge><ivy-badge value="22" class="ml-40"><ivy-button>点赞</ivy-button></ivy-badge><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>踩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>22<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>点赞<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="最大值" tabindex="-1"><a class="header-anchor" href="#最大值" aria-hidden="true">#</a> 最大值</h2><p>可使用<code>max</code>自定义最大值,默认最大值为<code>99</code>。</p><ivy-badge value="100"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="100" max="10" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="自定义内容" tabindex="-1"><a class="header-anchor" href="#自定义内容" aria-hidden="true">#</a> 自定义内容</h2><p>使用<code>value</code>输入非数字字符串来自定义显示内容。</p><ivy-badge value="new"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="hot" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>new<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hot<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="小红点" tabindex="-1"><a class="header-anchor" href="#小红点" aria-hidden="true">#</a> 小红点</h2><p>以红点的形式标注需要关注的内容。</p>',20),e=(0,t._)("ivy-badge",{"is-dot":""},[(0,t._)("ivy-icon",{name:"chat-dot-round"})],-1),o=(0,t._)("ivy-badge",{"is-dot":"",class:"ml-40"},[(0,t._)("ivy-button",null,"评论")],-1),l=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">is-dot</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chat-dot-round<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-icon</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">is-dot</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><p>支持5中类型，<code>primary</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>info</code>；默认是<code>error</code>、</p><ivy-badge value="12"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="12" type="primary" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="12" type="success" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="12" type="warning" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><ivy-badge value="12" type="info" class="ml-40"><ivy-button>评论</ivy-button></ivy-badge><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-40<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ivy-button</span><span class="token punctuation">&gt;</span></span>评论<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ivy-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',9),c={},u=(0,s(3744).Z)(c,[["render",function(a,n){return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,o,l],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{for(const[s,t]of n)a[s]=t;return a}}}]);