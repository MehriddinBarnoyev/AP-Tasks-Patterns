import {BlockType} from "./BlockType";

export class Block {
    private x: number;
    private y: number;
    private z: number;
    private blockType: BlockType;

    constructor(x: number, y: number, z: number, blockType: BlockType) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.blockType = blockType;
    }

    getBlockType(): BlockType {
        return this.blockType;
    }

    toString(): string {
        return `(${this.x}, ${this.y}, ${this.z}) -> ${this.blockType.getName()}`;
    }
}
