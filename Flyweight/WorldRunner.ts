import {World} from "./World";

export class WorldRunner{
    static main(): void{
        const world = new World();

        world.addBlock(0, 0, 0, "Grass");
        world.addBlock(1, 0, 0, "Grass");
        world.addBlock(2, 0, 0, "Stone");
        world.addBlock(3, 0, 0, "Grass");
        world.addBlock(4, 0, 0, "Dirt");

        console.log("\n--- Dunyo ko'rinishi ---")
        world.render()

        console.log(`\nJami bloklar: ${world.getBlocks().length}`);
        console.log(`Noyob BlockType soni: ${world.getUniqueTypeCount()}`);

        const blocks = world.getBlocks();
        const grass0 = blocks[0].getBlockType();
        const grass1 = blocks[1].getBlockType();
        const grass3 = blocks[3].getBlockType();

        console.log(`\nblocks[0] va blocks[1] (ikkisi ham Grass) bitta xil BlockType'ni ishlatadimi: ${grass0 === grass1}`);
        console.log(`blocks[0] va blocks[3] (ikkisi ham Grass) bitta xil BlockType'ni ishlatadimi: ${grass0 === grass3}`);
    }
}

WorldRunner.main()
