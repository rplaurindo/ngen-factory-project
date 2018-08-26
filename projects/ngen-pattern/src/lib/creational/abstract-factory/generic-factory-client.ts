import { GenericAbstractFactory } from './generic-abstract-factory';
import { GenericAbstractProduct } from './generic-abstract-product';


export class GenericFactoryClient<T> {

    private collection: Array<GenericAbstractProduct<T>>;

    constructor(private manufacturer: GenericAbstractFactory<T>) { }

    manufacture(object: Object): GenericAbstractProduct<T> {
        return this.manufacturer.manufacture(object);
    }

    manufactureCollection(object: Array<Object>): Array<GenericAbstractProduct<T>> {
        const
            collection: Array<GenericAbstractProduct<T>> = [];

        let
            model: GenericAbstractProduct<T>;

        Object.keys(object).forEach((k) => {
            model = this.manufacture(object[k]);
            collection.push(model);
        });

        this.collection = collection;

        return collection;
    }

}
