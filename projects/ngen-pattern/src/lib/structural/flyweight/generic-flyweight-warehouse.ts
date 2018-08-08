import { GenericAbstractFlyweight } from "./generic-abstract-flyweight";


export class GenericFlyweightWarehouse<T> {

    private flyweights: Map<any, GenericAbstractFlyweight<T>>;

    constructor() {

    }

    add(key: any, reference: GenericAbstractFlyweight<T>) {
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, reference);
        }
    }

    get(key: any): T {
        return this.flyweights.get(key).getConcrete();
    }

}
