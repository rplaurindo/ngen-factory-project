# NGenFactory - Angular Generic Abstract Factory

## Requirements

>- Angular 2 or higher.

## Installing

	$ npm i ngen-factory --save

## Usage

Import ```NGenFactory``` from ```ngen-factory``` in your service and implement the ```GenericAbstractFactory<T>``` interface, implementing the  ```manufacture``` method, like that:

```typescript
import { NGenFactory } from 'ngen-factory';

export class MyService implements NGenFactory.GenericAbstractFactory<MyService> {

	manufacture(response: Response): NGenFactory.GenericAbstractProduct<MyService> {
		return new MyModel(response);
	}
	
}
```

So inside the constructor of this service instantiate ```NGenFactory.GenericFactoryClient```, like that:

```typescript
export class MyService implements NGenFactory.GenericAbstractFactory<MyService> {
	
	private  factoryClient:  NGenFactory.GenericFactoryClient<MyService>;
	
	constructor() {
		this.factoryClient = new NGenFactory.GenericFactoryClient(this);
	}
	
}
```

Where ```this``` is who implements the ```manufacture``` method.

Then you can use the ```manufacture``` and ```manufactureCollection``` method by ```GenericFactoryClient``` reference.

If you want to return a ```GenericAbstractProduct<T>``` in a service method, you can to catch the concrete object implementing the ```getConcrete``` method of this interface. Like that:

```typescript
export class MyModel implements NGenFactory.GenericAbstractProduct<MyModel> {

	getConcrete(): MyModel {
		return this;
	}

}
```

