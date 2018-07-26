<h1 id="ngenfactory---angular-generic-abstract-factory">NGenFactory - Angular Generic Abstract Factory</h1>
<h2 id="requirements">Requirements</h2>
<blockquote>
<ul>
<li>Angular 2 or higher.</li>
</ul>
</blockquote>
<h2 id="installing">Installing</h2>
<pre><code>$ npm i ngen-factory --save
</code></pre>
<h2 id="usage">Usage</h2>
<p>Import <code>NGenFactory</code> from <code>ngen-factory</code> in your service and implement the <code>GenericAbstractFactory&lt;T&gt;</code> interface, implementing the  <code>manufacture</code> method, like that:</p>
<pre class=" language-typescript"><code class="prism  language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> NGenFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ngen-factory'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token keyword">implements</span> <span class="token class-name">NGenFactory<span class="token punctuation">.</span>GenericAbstractFactory</span><span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token punctuation">{</span>

	<span class="token function">manufacture</span><span class="token punctuation">(</span>response<span class="token punctuation">:</span> Response<span class="token punctuation">)</span><span class="token punctuation">:</span> NGenFactory<span class="token punctuation">.</span>GenericAbstractProduct<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span>
		
<span class="token punctuation">}</span>
</code></pre>
<p>So inside the constructor of this service instantiate <code>NGenFactory.GenericFactoryClient</code>, like that:</p>
<pre class=" language-typescript"><code class="prism  language-typescript"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token keyword">implements</span> <span class="token class-name">NGenFactory<span class="token punctuation">.</span>GenericAbstractFactory</span><span class="token operator">&lt;</span>MyService<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">private</span>  factoryClient<span class="token punctuation">:</span>  NGenFactory<span class="token punctuation">.</span>GenericFactoryClient<span class="token operator">&lt;</span>MyService<span class="token operator">&gt;</span><span class="token punctuation">;</span>
	
	<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>factoryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NGenFactory<span class="token punctuation">.</span>GenericFactoryClient</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre>
<p>Where <code>this</code> is who implements the <code>manufacture</code> method.</p>
<p>Then you can use the <code>manufacture</code> and <code>manufactureCollection</code> method by <code>GenericFactoryClient</code> reference.</p>
<p>If you want to return a <code>GenericAbstractProduct&lt;T&gt;</code> in a service method, you can to catch the concrete object implementing the <code>getConcrete</code> method of this interface. Like that:</p>
<pre class=" language-typescript"><code class="prism  language-typescript"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyModel</span> <span class="token keyword">implements</span> <span class="token class-name">NGenFactory<span class="token punctuation">.</span>GenericAbstractProduct</span><span class="token operator">&lt;</span>MyModel<span class="token operator">&gt;</span> <span class="token punctuation">{</span>

	<span class="token function">getConcrete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> MyModel <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre>

