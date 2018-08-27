import { GenericAbstractProduct } from "./generic-abstract-product";

export interface GenericAbstractFactory<T> {

    manufacture(object: Object): GenericAbstractProduct<T>;

}
