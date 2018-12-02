import { INSPECT_MAX_BYTES } from "buffer";

// assign types wherever possible... 

// starting code

/*
let bankAccount = {
    money: 2000, 
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max", 
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000); 

console.log(myself); 
*/

// my solution

type BankAccount = {money: number, deposit: (value: number) => void}; 

let bankAccount: BankAccount = {
    money: 2000, 
    deposit: function(value: number): void {
        this.money += value; 
    }
}

type Myself = {name: string, bankAccount: BankAccount, hobbies: string[]};

let myself: Myself = {
    name: "Max", 
    bankAccount: bankAccount, 
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000); 


// course solution

/*
type BankAccount = {money: number, deposit: (value: number) => void}; 

let bankAccount: BankAccount = {
    money: 2000, 
    deposit: function(value: number): void {
        this.money += value; 
    }
}

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max", 
    bankAccount: bankAccount, 
    hobbies: ["Sports", "Cooking"]
}
*/

myself.bankAccount.deposit(3000); 