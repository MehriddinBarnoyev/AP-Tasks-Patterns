export interface BankAccount {
    withdraw(amount: number): void;
}

export class RealBankAccount implements BankAccount {
    #balance: number;

    constructor(balance: number) {
        this.#balance = balance;
    }

    withdraw(amount: number): void {
        if (amount > this.#balance) {
            console.log(`Hisobda yetarli mablag' yo'q. Balans: ${this.#balance} so'm`);
            return;
        }
        this.#balance -= amount;
        console.log(`${amount} so'm yechildi. Qolgan balans: ${this.#balance} so'm`)
    }
}

export class BankAccountProxy implements BankAccount {
    #realAccount: RealBankAccount;
    #isAuthenticated: boolean;

    constructor(realAccount: RealBankAccount, isAuthenticated: boolean) {
        this.#realAccount = realAccount;
        this.#isAuthenticated = isAuthenticated;
    }

    withdraw(amount: number): void {
        console.log(`\nPul yechish urinishi: ${amount} so'm`);

        if (!this.#isAuthenticated) {
            console.log("Ruxsat yo'q: foydalanuvchi tizimga kirmagan")
            return;
        }

        this.#realAccount.withdraw(amount)
    }
}
