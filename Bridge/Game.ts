export interface Developer {
    writeCode(): void;
}

export class JavaDeveloper implements Developer {
    writeCode(): void {
        console.log("Java dasturchi Java kodini yozmoqda")
    }
}

export class CppDeveloper implements Developer {
    writeCode(): void {
        console.log("C++ dasturchi C++ kodini yozmoqda")
    }
}

export abstract class Game {
    constructor(protected developer: Developer) {
    }

    abstract develop(): void;
}

export class RacingGame extends Game {
    develop(): void {
        console.log("Poyga o'yini yaratilmoqda:")
        this.developer.writeCode()
    }
}

export class FootballGame extends Game {
    develop(): void {
        console.log("Futbol o'yini yaratilmoqda:")
        this.developer.writeCode()
    }
}

export class SnakeGane extends Game{
    develop() : void{
        console.log("Ilon o'yini yaratilmoqda")
        this.developer.writeCode()
    }
}
