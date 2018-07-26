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
<pre><code>import { NGenFactory } from 'ngen-factory';

export class MyService implements NGenFactory.GenericAbstractFactory&lt;T&gt; {

	manufacture(response: Response): NGenFactory.GenericAbstractProduct&lt;T&gt;
	
}
</code></pre>
<p>So inside the constructor of this service instantiate <code>NGenFactory.GenericFactoryClient</code>, like that:</p>
<pre><code>export class MyService implements NGenFactory.GenericAbstractFactory&lt;MyService&gt; {

	private  factoryClient:  NGenFactory.GenericFactoryClient&lt;MyService&gt;;

	constructor() {
		this.factoryClient = new NGenFactory.GenericFactoryClient(this);
	}
	
}
</code></pre>
<p>Where <code>this</code> is who implements the <code>manufacture</code> method.</p>
<p>Then you can use the <code>manufacture</code> and <code>manufactureCollection</code> method by <code>GenericFactoryClient</code> reference.</p>
<p>If you want to return a <code>GenericAbstractProduct&lt;T&gt;</code> in a service method, you can to catch the concrete object implementing the <code>getConcrete</code> method of this interface. Like that:</p>
<pre><code>export class MyModel implements NGenFactory.GenericAbstractProduct&lt;MyModel&gt; {

	getConcrete(): MyModel {
		return this;
	}
	
}
</code></pre>

