import {Copayable} from "../shared/copayable";

class ShallowHero implements Copayable<ShallowHero>{
    name:string;
    inventory: string[]

    constructor(name: string, inventoty:string[]) {
        this.name = name;
        this.inventory = inventoty
    }
    clone(): ShallowHero {
        return new ShallowHero(this.name, this.inventory)
    }
}

class DeepHero implements Copayable<DeepHero>{
    name:string;
    inventory:string[]

    constructor(name:string, inventory:string[]) {
        this.name = name;
        this.inventory = inventory
    }

    clone(): DeepHero {
        return new DeepHero(this.name, [...this.inventory])
    }
}

const shallowOriginal = new ShallowHero("Ali", ['Qilich', "Kamon"])
const shallowClone = shallowOriginal.clone()
shallowClone.name = "Vali";
shallowClone.inventory.push( "Tank T90")

console.log("original :", shallowOriginal.name, shallowOriginal.inventory);
console.log("nusxa    :", shallowClone.name, shallowClone.inventory);
console.log("bir xil massivmi?", shallowOriginal.inventory === shallowClone.inventory);


console.log("\n--- Deepcopy: to'g'ri yechim ---");
const deepOriginal = new DeepHero("Arslon", ["Qilich"]);
const deepClone = deepOriginal.clone();
deepClone.name = "Bahodir";
deepClone.inventory.push("Qalqon");