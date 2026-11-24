import {BlockType} from "./BlockType";

const BLOCK_DATA: Record<string, { texture: string; color: string }> = {
    Grass: {texture: "grass.png", color: "yashil"},
    Stone: {texture: "stone.png", color: "kulrang"},
    Dirt: {texture: "dirt.png", color: "jigarrang"},
    Water: {texture: "water.png", color: "ko'k"},
};

export class BlockFactory {
    private types: Map<string, BlockType> = new Map();

    getBlockType(name: string): BlockType {
        if (!this.types.has(name)) {
            const data = BLOCK_DATA[name];
            console.log(`Yangi BlockType yaratilmoqda: ${name}`)
            this.types.set(name, new BlockType(name, data.texture, data.color))
        }
        return this.types.get(name)!;
    }

    getTypeCount(): number {
        return this.types.size;
    }
}
