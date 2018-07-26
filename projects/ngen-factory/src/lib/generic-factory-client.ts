import { GenericAbstractFactory } from './generic-abstract-factory';
import { GenericAbstractProduct } from './generic-abstract-product';


export class GenericFactoryClient<T> {

    private collection: Array<GenericAbstractProduct<T>>;

    constructor(private manufacturer: GenericAbstractFactory<T>) { }

    manufacture(response: Response): GenericAbstractProduct<T> {
        return this.manufacturer.manufacture(response);
    }

    manufactureCollection(response: Response): Array<GenericAbstractProduct<T>> {
        const
            collection: Array<GenericAbstractProduct<T>> = [];

        let
            object: Response,
            model: GenericAbstractProduct<T>;

        Object.keys(response).forEach((k) => {
            object = response[k];
            model = this.manufacture(object);
            collection.push(model);
        });

        this.collection = collection;

        return collection;
    }

}
