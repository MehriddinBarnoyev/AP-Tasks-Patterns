import {Database} from "./Database";

export class DatabaseRunner {
    static main(): void {
        const db1 = Database.getInstance();
        const db2 = Database.getInstance();

        db1.query("SELECT * FROM users");
        db2.query("SELECT * FROM orders");

        console.log("Bir xil instance: " + (db1 === db2));
    }
}

DatabaseRunner.main()
