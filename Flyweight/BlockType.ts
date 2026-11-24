export class BlockType {
    #name: string;
    #texture: string;
    #color: string;

    constructor(name: string, texture: string, color: string) {
        this.#name = name;
        this.#texture = texture;
        this.#color = color;
    }

    getName(): string {
        return this.#name;
    }

    getTexture(): string {
        return this.#texture;
    }

    getColor(): string {
        return this.#color;
    }

    toString(): string {
        return `BlockType{name='${this.#name}', texture='${this.#texture}', color='${this.#color}'}`;
    }
}
