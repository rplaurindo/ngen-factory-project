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

// class TestModel implements GenericAbstractFlyweight<TestModel> {

//     constructor(...args) {

//     }

//     getConcrete(): TestModel {
//         return this;
//     }

// }

// class TestService {

//     constructor(private flyweightFactory: GenericFlyweightWarehouse<TestModel>) {
//         flyweightFactory.add(TestModel, new TestModel());
//     }

// }

// class TestComponent {

//     private testModel: TestModel;

//     constructor(private testService: TestService) {
//         // testService
//     }

// }
