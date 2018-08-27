import { GenericAbstractFactory } from './generic-abstract-factory';
import { GenericAbstractProduct } from './generic-abstract-product';


export class GenericFactoryClient<T> {

    constructor(private manufacturer: GenericAbstractFactory<T>) { }

    manufacture(object: Object): GenericAbstractProduct<T> {
        return this.manufacturer.manufacture(object);
    }

    manufactureCollection(collection: Array<Object>): Array<GenericAbstractProduct<T>> {
        const
            manufacturedCollection: Array<GenericAbstractProduct<T>> = [];

        let
            model: GenericAbstractProduct<T>;

        collection.forEach((object) => {
            model = this.manufacture(object);
            manufacturedCollection.push(model);
        });

        return manufacturedCollection;
    }

}
