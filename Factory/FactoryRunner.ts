import { DrinkType, getDrinkFactory } from "./Drink";

export class FactoryRunner {
    static main(): void {
        const types: DrinkType[] = ["espresso", "green-tea"]

        types.forEach(type => {
            const factory = getDrinkFactory(type)
            const drink = factory.createDrink()
            drink.prepare()
        })
    }
}

FactoryRunner.main()
