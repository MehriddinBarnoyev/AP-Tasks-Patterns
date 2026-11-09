import {Game, RacingGame, FootballGame, JavaDeveloper, CppDeveloper, SnakeGane} from "./Game";

export class GameRunner{
    static main(): void{
        const games: Game[] = [
            new RacingGame(new JavaDeveloper()),
            new RacingGame(new CppDeveloper()),
            new FootballGame(new JavaDeveloper()),
            new FootballGame(new CppDeveloper()),
            new SnakeGane(new JavaDeveloper()),
            new SnakeGane(new CppDeveloper())
        ];

        games.forEach(game => game.develop())
    }
}

GameRunner.main()
