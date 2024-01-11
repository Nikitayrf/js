'use strict';

/* наследование свойств и методов другого класса
 через перезапись базового класса ES 5 */

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

Person.prototype.sayName = function () {
    console.log(`Меня зовут: ${this.name}.`);
};

const person1 = new Person('Павел', 'm');


function Employee(name, gender, position) {
    Person.call(this, name, gender);
    this.position = position;
}

// { sayPosition: f(), __proto__: Person.prototype }
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayPosition = function () {
    console.log(`Моя должность: ${this.position}.`);
};

const empoyee1 = new Employee('Павел', 'm', 'Дворник');


function SuperEmployee(name, gender, position, age) {
    Employee.call(this, name, gender, position);
    this.age = age;
}

SuperEmployee.prototype = Object.create(Employee.prototype);
SuperEmployee.prototype.constructor = SuperEmployee;

SuperEmployee.prototype.sayAge = function () {
    console.log(`Мой возраст ${this.age}`);
};

const SuperEmployee1 = new SuperEmployee('Павел', 'm', 'Дворник', '32');
