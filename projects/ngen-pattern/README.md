# NGenPattern - Angular Generic Pattern

## Requirements

>- Angular 2 or higher.

## Installing

	$ npm i ngen-pattern --save

## Usage

### Creational Pattern

#### Abstract Factory

Import ```NGenPattern``` from ```ngen-pattern``` in your service and implement the ```NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<T>``` interface, implementing the  ```manufacture``` method, like that:

```typescript
import { NGenPattern } from 'ngen-pattern';

export class MyService implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<MyService> {

	manufacture(response: Response): NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<MyService> {
		return new MyModel(response);
	}
	
}
```

So inside the constructor of this service instantiate ```NGenPattern.Creational.AbstractFactory.GenericFactoryClient```, like that:

```typescript
@Injectable()
export class MyService implements NGenPattern.Creational.AbstractFactory.GenericAbstractFactory<MyService> {
	
	private  factoryClient: NGenPattern.Creational.AbstractFactory.GenericFactoryClient<MyService>;
	
	constructor() {
		this.factoryClient = new NGenPattern.Creational.AbstractFactory.GenericFactoryClient(this);
	}
	
}
```

Where ```this``` is who implements the ```manufacture``` method.

Then you can use the ```manufacture``` and ```manufactureCollection``` method by ```GenericFactoryClient``` reference.

If you want to return a ```GenericAbstractProduct<T>``` in a service method, you can to catch the concrete object implementing the ```getConcrete``` method of this interface. Like that:

```typescript
export class MyModel implements NGenPattern.Creational.AbstractFactory.GenericAbstractProduct<MyModel> {

	getConcrete(): MyModel {
		return this;
	}

}
```

### Structural Pattern

#### Flyweight

Import ```NGenPattern``` from ```ngen-pattern``` in your model and implement the ```NGenPattern.Structural.Flyweight.GenericAbstractFlyweight<T>``` interface, implementing the  ```getConcrete``` method, like that:

```typescript
import { NGenPattern } from 'ngen-pattern';

export class MyModel implements NGenPattern.Structural.Flyweight.GenericAbstractFlyweight<MyModel> {

	getConcrete(): MyModel {
		return this;
	}

}
```

So in your service you can save the flyweight to share with your components.

```typescript
@Injectable()
export class MyService {
	
	constructor(private flyweightWarehouse:  NGenPattern.Structural.Flyweight.GenericFlyweightWarehouse<MyModel>) {
		this.flyweightWarehouse.add(..., new MyModel());
	}
	
}
```

