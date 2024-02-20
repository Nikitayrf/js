/* Задание 1
Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.
*/

class BankAccount {
    // Приватное свойство для хранения баланса
    #balance = 0;

    // Геттер для получения текущего баланса
    get balance() {
        return this.#balance;
    }

    // Метод для внесения денег на счет
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        this.#balance += amount;
    }

    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds in account');
        }
        this.#balance -= amount;
    }

    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance) {
        if (initialBalance <= 0) {
            throw new Error('Initial balance must be positive');
        }
        this.#balance = initialBalance;
    }

}
// Создаем новый банковский счет с начальным балансом 500
let account = new BankAccount(500);
console.log(account.balance); // Выводит: 500


account.deposit(200);
console.log(account.balance); // Выводит: 700


account.withdraw(100);
console.log(account.balance); // Выводит: 600