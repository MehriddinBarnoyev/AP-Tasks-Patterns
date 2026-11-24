export class Database {
    private static instance: Database | null = null;
    private connected: boolean;

    private constructor() {
        console.log("DB ga ulanilmoqda...");
        this.connected = true;
    }

    static getInstance(): Database {
        if (Database.instance === null) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    query(sql: string): void {
        if (!this.connected) {
            console.log("Xatolik: DB ga ulanmagan");
            return;
        }
        console.log(`Bajarildi: ${sql}`);
    }
}
