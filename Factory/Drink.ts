export interface Drink {
    prepare(): void;
}

export class Espresso implements Drink {
    prepare(): void {
        console.log("Espresso tayyorlandi")
    }
}

export class GreenTea implements Drink {
    prepare(): void {
        console.log("Yashil choy damlandi")
    }
}

export interface DrinkFactory {
    createDrink(): Drink;
}

export class EspressoFactory implements DrinkFactory {
    createDrink(): Drink {
        return new Espresso();
    }
}

export class GreenTeaFactory implements DrinkFactory {
    createDrink(): Drink {
        return new GreenTea();
    }
}

export type DrinkType = "espresso" | "green-tea";

export function getDrinkFactory(type: DrinkType): DrinkFactory {
    switch (type) {
        case "espresso":
            return new EspressoFactory();
        case "green-tea":
            return new GreenTeaFactory();
    }
}
