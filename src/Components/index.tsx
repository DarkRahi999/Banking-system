
//G -------{ Bank Account interface }-------- //
interface BankAccount{
    bankAccount : number;
    balance : number;
    withdraw( amount : number ): void;
    deposit( amount : number ): void;
    checkBalance() : void; 
}

class MyBankAccount implements BankAccount {
    bankAccount: number;
    balance: number;

    constructor( bankAccount : number, balance: number){
        if (balance < 0) throw new Error("Initial balance cannot be negative.");
        this.bankAccount = bankAccount;
        this.balance = balance;
    }

    //Y ---{ withdraw section }-----
    withdraw(amount: number): void {
        let totalWithdraw = amount;

        if (amount <= 100) {
            totalWithdraw += 1;     // -----{ $1 fee for withdrawal ≤ $100 }---- //
        }

        if( this.balance >= totalWithdraw){
            this.balance -= totalWithdraw;
            console.log(`Amount of $${amount} is successful. Now your remaining balance is $${this.balance}`);
        }else console.log("insufficient balance !!");
    }

    //Y ---{ deposit section }------
    deposit(amount: number): void {
        if( amount >= 100){
            amount -= 1;            // -----{ 1$ fee for deposit ≥ $100 }------ // 
        }
        this.balance += amount;
        console.log(`deposit of amount $${amount} is successful. Now your remaining balance is $${this.balance}`);
    }
    
    //Y ---{ checkout section }-----
    checkBalance(): void {
        console.log(`Your current balance is $${this.balance}`);
    }
}

