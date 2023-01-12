import{_ as s,o as n,c as a,a as l}from"./app.21261af6.js";const e=JSON.parse('{"title":"Built-in Special Elements","description":"","frontmatter":{},"headers":[{"level":2,"title":"<component>","slug":"component","link":"#component","children":[]},{"level":2,"title":"<slot>","slug":"slot","link":"#slot","children":[]},{"level":2,"title":"<template>","slug":"template","link":"#template","children":[]}],"relativePath":"api/built-in-special-elements.md"}'),o={name:"api/built-in-special-elements.md"},p=[l('<h1 id="built-in-special-elements" tabindex="-1">Built-in Special Elements <a class="header-anchor" href="#built-in-special-elements" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">Not Components</p><p><code>&lt;component&gt;</code>, <code>&lt;slot&gt;</code> and <code>&lt;template&gt;</code> are component-like features and part of the template syntax. They are not true components and are compiled away during template compilation. As such, they are conventionally written with lowercase in templates.</p></div><h2 id="component" tabindex="-1"><code>&lt;component&gt;</code> <a class="header-anchor" href="#component" aria-hidden="true">#</a></h2><p>A &quot;meta component&quot; for rendering dynamic components or elements.</p><ul><li><p><strong>Props</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DynamicComponentProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">is</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Details</strong></p><p>The actual component to render is determined by the <code>is</code> prop.</p><ul><li><p>When <code>is</code> is a string, it could be either an HTML tag name or a component&#39;s registered name.</p></li><li><p>Alternatively, <code>is</code> can also be directly bound to the definition of a component.</p></li></ul></li><li><p><strong>Example</strong></p><p>Rendering components by registered name (Options API):</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Bar.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Foo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      view</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Foo</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Rendering components by definition (Composition API with <code>&lt;script setup&gt;</code>):</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Foo </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Bar </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Bar.vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#89DDFF;">() &gt; </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;"> ? </span><span style="color:#A6ACCD;">Foo</span><span style="color:#89DDFF;"> : </span><span style="color:#A6ACCD;">Bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Rendering HTML elements:</p><div class="language-vue-html"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">href</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>The <a href="./built-in-components.html">built-in components</a> can all be passed to <code>is</code>, but you must register them if you want to pass them by name. For example:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Transition</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TransitionGroup</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    Transition</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    TransitionGroup</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isGroup</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TransitionGroup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Transition</span><span style="color:#89DDFF;">&#39;&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ...</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>Registration is not required if you pass the component itself to <code>is</code> rather than its name, e.g. in <code>&lt;script setup&gt;</code>.</p><p>If <code>v-model</code> is used on a <code>&lt;component&gt;</code> tag, the template compiler will expand it to a <code>modelValue</code> prop and <code>update:modelValue</code> event listener, much like it would for any other component. However, this won&#39;t be compatible with native HTML elements, such as <code>&lt;input&gt;</code> or <code>&lt;select&gt;</code>. As a result, using <code>v-model</code> with a dynamically created native element won&#39;t work:</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> username </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- This won&#39;t work as &#39;input&#39; is a native HTML element --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>In practice, this edge case isn&#39;t common as native form fields are typically wrapped in components in real applications. If you do need to use a native element directly then you can split the <code>v-model</code> into an attribute and event manually.</p></li><li><p><strong>See also:</strong> <a href="/guide/essentials/component-basics.html#dynamic-components">Dynamic Components</a></p></li></ul><h2 id="slot" tabindex="-1"><code>&lt;slot&gt;</code> <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h2><p>Denotes slot content outlets in templates.</p><ul><li><p><strong>Props</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SlotProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>\n<span class="line"><span style="color:#676E95;">   * Any props passed to &lt;slot&gt; to passed as arguments</span></span>\n<span class="line"><span style="color:#676E95;">   * for scoped slots</span></span>\n<span class="line"><span style="color:#676E95;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/**</span></span>\n<span class="line"><span style="color:#676E95;">   * Reserved for specifying slot name.</span></span>\n<span class="line"><span style="color:#676E95;">   */</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div></li><li><p><strong>Details</strong></p><p>The <code>&lt;slot&gt;</code> element can use the <code>name</code> attribute to specify a slot name. When no <code>name</code> is specified, it will render the default slot. Additional attributes passed to the slot element will be passed as slot props to the scoped slot defined in the parent.</p><p>The element itself will be replaced by its matched slot content.</p><p><code>&lt;slot&gt;</code> elements in Vue templates are compiled into JavaScript, so they are not to be confused with <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot" target="_blank" rel="noreferrer">native <code>&lt;slot&gt;</code> elements</a>.</p></li><li><p><strong>See also:</strong> <a href="/guide/components/slots.html">Component - Slots</a></p></li></ul><h2 id="template" tabindex="-1"><code>&lt;template&gt;</code> <a class="header-anchor" href="#template" aria-hidden="true">#</a></h2><p>The <code>&lt;template&gt;</code> tag is used as a placeholder when we want to use a built-in directive without rendering an element in the DOM.</p><ul><li><p><strong>Details:</strong></p><p>The special handling for <code>&lt;template&gt;</code> is only triggered if it is used with one of these directives:</p><ul><li><code>v-if</code>, <code>v-else-if</code>, or <code>v-else</code></li><li><code>v-for</code></li><li><code>v-slot</code></li></ul><p>If none of those directives are present then it will be rendered as a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" target="_blank" rel="noreferrer">native <code>&lt;template&gt;</code> element</a> instead.</p><p>A <code>&lt;template&gt;</code> with a <code>v-for</code> can also have a <a href="/api/built-in-special-attributes.html#key"><code>key</code> attribute</a>. All other attributes and directives will be discarded, as they aren&#39;t meaningful without a corresponding element.</p><p>Single-file components use a <a href="/api/sfc-spec.html#language-blocks">top-level <code>&lt;template&gt;</code> tag</a> to wrap the entire template. That usage is separate from the use of <code>&lt;template&gt;</code> described above. That top-level tag is not part of the template itself and doesn&#39;t support template syntax, such as directives.</p></li><li><p><strong>See also:</strong></p><ul><li><a href="/guide/essentials/conditional.html#v-if-on-template">Guide - <code>v-if</code> on <code>&lt;template&gt;</code></a></li><li><a href="/guide/essentials/list.html#v-for-on-template">Guide - <code>v-for</code> on <code>&lt;template&gt;</code></a></li><li><a href="/guide/components/slots.html#named-slots">Guide - Named slots</a></li></ul></li></ul>',11)];const t=s(o,[["render",function(s,l,e,o,t,c){return n(),a("div",null,p)}]]);export{e as __pageData,t as default};
