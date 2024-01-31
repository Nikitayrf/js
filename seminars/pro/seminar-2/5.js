'use strict';
/*Создайте класс BankAccount, который представляет банковский счет.
У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит названиебанка.

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890 */

class BankAccount {
    accountNumber = 0;
    balance = 0;
    static bankName = 'SBER';

    constructor(accountNumber = 0, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposired ${amount} into ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);  // Deposired 500 into 1234567890. New balance: 1500
account1.withdraw(200);  // Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500);  // Insufficient funds in account 1234567890