import {RealBankAccount, BankAccountProxy} from "./BankAccount";

export class BankApp{
    static main(): void{
        const realAccount = new RealBankAccount(100000);

        console.log("--- Tizimga kirgan foydalanuvchi ---")
        const loggedInProxy = new BankAccountProxy(realAccount, true);
        loggedInProxy.withdraw(30000)
        loggedInProxy.withdraw(90000)

        console.log("\n--- Tizimga kirmagan foydalanuvchi ---")
        const loggedOutProxy = new BankAccountProxy(realAccount, false);
        loggedOutProxy.withdraw(20000)
    }
}

BankApp.main()
