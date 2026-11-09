import {GameCharacter} from "./Gamecharacter";
import {CharacterFactory} from "./CharakterFactory";

export class GameRunner{
    static main(): void{
        const original = new GameCharacter(1, "Arslon", 10, "Qilich", ["Qalqon", "Iksir"]);
        const factory = new CharacterFactory(original)

        console.log("1. Original:");
        console.log("   " + original.toString());

        // ----- SHALLOW COPY -----
        const shallowCopy = factory.cloneCharacterShallow()
        shallowCopy.setId(2)
        shallowCopy.setName("Bars")
        shallowCopy.addItem("Yangi qalqon")

        console.log("\n2. Shallow copy (inventory ESKI massiv bilan baham ko'rilgan):");
        console.log("   shallowCopy: " + shallowCopy.toString());
        console.log("   original:    " + original.toString());
        console.log("   -> original.inventory ham o'zgardi, chunki ikkalasi bitta massivga ishora qiladi!");

        // ----- DEEP COPY -----
        const deepOriginal = new GameCharacter(1, "Arslon", 10, "Qilich", ["Qalqon", "Iksir"]);
        const deepFactory = new CharacterFactory(deepOriginal)

        const deepCopy = deepFactory.cloneCharacter()
        deepCopy.setId(3)
        deepCopy.setName("Qaplon")
        deepCopy.addItem("Maxfiy xarita")

        console.log("\n3. Deep copy (inventory mustaqil nusxa):");
        console.log("   deepCopy:    " + deepCopy.toString());
        console.log("   original:    " + deepOriginal.toString());
        console.log("   -> original.inventory o'zgarmadi, chunki deepCopy o'zining mustaqil massiviga ega.");
    }
}

GameRunner.main()
