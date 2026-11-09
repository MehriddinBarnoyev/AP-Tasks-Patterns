import {GameCharacter} from "./Gamecharacter";

export class CharacterFactory{
    #prototype: GameCharacter;

    constructor(prototype: GameCharacter) {
        this.#prototype = prototype;
    }

    setCharacter(prototype: GameCharacter): void {
        this.#prototype = prototype;
    }

    getCharacter(): GameCharacter {
        return this.#prototype;
    }

    cloneCharacter(): GameCharacter {
        return this.#prototype.clone();
    }

    cloneCharacterShallow(): GameCharacter {
        return this.#prototype.shallowClone();
    }
}
