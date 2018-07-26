<h1 id="ngenfactory">NGenFactory</h1>
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
<p>Import <code>GenericAbstractFactory</code>, <code>GenericAbstractProduct</code> and <code>GenericFactoryClient</code>from <code>ngen-factory</code> in your service and implement the <code>GenericAbstractFactory&lt;T&gt;</code> interface, implementing the  <code>manufacture</code> method. This method should have this follow signature:</p>
<pre><code>manufacture(response: Response): GenericAbstractProduct&lt;T&gt;
</code></pre>
<p>So inside the constructor of this service instantiate <code>GenericFactoryClient&lt;T&gt;(this)</code>, where <code>this</code> is who implements the <code>manufacture</code> method. Like that:</p>
<pre><code>private  factoryClient:  GenericFactoryClient&lt;T&gt;;

constructor() {
	this.factoryClient = new GenericFactoryClient(this);
}
</code></pre>
<p>Then you can use the <code>manufacture</code> and <code>manufactureCollection</code> method by <code>GenericFactoryClient</code> referency.</p>

