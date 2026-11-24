import {Block} from "./Block";
import {BlockFactory} from "./BlockFactory";

export class World {
    #blocks: Block[] = [];
    #factory: BlockFactory = new BlockFactory();

    addBlock(x: number, y: number, z: number, typeName: string): void {
        const blockType = this.#factory.getBlockType(typeName);
        this.#blocks.push(new Block(x, y, z, blockType))
    }

    render(): void {
        this.#blocks.forEach(block => console.log(block.toString()))
    }

    getBlocks(): Block[] {
        return this.#blocks;
    }

    getUniqueTypeCount(): number {
        return this.#factory.getTypeCount();
    }
}
