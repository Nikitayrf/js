'use strict';

/* наследование свойств и методов другого класса 
 через перезапись базового класса ES 6 */

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    sayName() {
        console.log(`Меня зовут: ${this.name}.`);
    }
}

const person1 = new Person('Павел', 'm');

class Employee extends Person {
    constructor(name, gender, position) {
        super(name, gender);
        this.position = position;
    }
    sayPosition() {
        console.log(`Моя должность: ${this.position}.`);
    };
}

const empoyee1 = new Employee('Павел', 'm', 'Дворник');


class SuperEmployee extends Employee {
    constructor(name, gender, position, age) {
        super(name, gender, position);
        this.age = age;
    }
    sayAge() {
        console.log(`Мой возраст: ${this.age}`);
    }
}

const SuperEmployee1 = new SuperEmployee('Павел', 'm', 'Дворник', '32');