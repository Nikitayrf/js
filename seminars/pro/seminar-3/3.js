'use strict';
/* Создайте класс Product, который будет представлять товар в магазине. У 
товара должны быть следующие свойства:
name (строка) - имя товара.
price (число) - цена товара за одну единицу.

Создайте класс Shoppingitem, представляющий корзину интернет-магазина.
Конструктор класса Shoppingitem должен принимать два параметра:
customerName (строка) - имя покупателя.
initialTotalCost (число) - начальная общая стоимость заказа (может быть равно 0,
если корзина пуста). 
У класс Shoppingitem должен быть метод additem(product, quantity), который 
позволяет добавить товар в корзину. Метод должен принимать два параметра: 
product (объект класса Product) - товар, который добавляется в корзину.
quantity (число, по умолчанию 1) - количество единиц товара, которое нужно 
добавить в корзину. Если quantity не указано, считается, что добавляется одна 
единица товара.
У класса Shoppingitem должен быть метод getCurrentTotalCost(), который возвращает 
текущую стоимость заказа.

У класса Shoppingitem должен быть метод checkout(), который оформляет заказ и 
выводит сообщение с общей стоимостью заказа и благодарностью за покупку. 
Формат вывода сообзения: "Заказ оформлен для {имя покупателя}. Общая стоимость 
заказа: {общая стоимость} рублей. Спасибо за покупку!".*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.item = [];
    }
    additem(product, quantity = 1) {
        this.totalCost += quantity * product.price;
    }
    getCurrentTotalCost() {
        return this.totalCost;
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    }
}

const product = new Product("Футболка", 1000);
const product2 = new Product("Джинсы", 2000);

const cart = new ShoppingCart("Иван");
cart.additem(product, 2);  // 2000
cart.additem(product2);  // 2000
cart.additem(product2, 3)  // 6000

console.log("Текущая общая стоимость: ", cart.getCurrentTotalCost());  // Текущая общая стоимость:  10000
cart.checkout();  // Заказ оформлен для Иван. Общая стоимость заказа: 10000 рублей. Спасибо за покупку!
