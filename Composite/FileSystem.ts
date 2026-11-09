export interface FileSystem {
    show(indent?: string): void;
}

export class File implements FileSystem {
    #name: string;

    constructor(name: string) {
        this.#name = name;
    }

    show(indent: string = ""): void {
        console.log(`${indent}File: ${this.#name}`)
    }
}

export class Folder implements FileSystem {
    #name: string;
    #children: FileSystem[] = [];

    constructor(name: string) {
        this.#name = name;
    }

    add(item: FileSystem): this {
        this.#children.push(item);
        return this;
    }

    remove(item: FileSystem): void {
        this.#children = this.#children.filter(child => child !== item)
    }

    show(indent: string = ""): void {
        console.log(`${indent}Folder: ${this.#name}`)
        this.#children.forEach(child => child.show(indent + "    "))
    }
}
