import { GenericAbstractProduct } from "./generic-abstract-product";

export interface GenericAbstractFactory<T> {

    manufacture(response: Object): GenericAbstractProduct<T>;

}
