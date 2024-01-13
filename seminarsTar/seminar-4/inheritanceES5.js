'use strict';

/* наследование свойств и методов другого класса
 через перезапись базового класса ES 5 */

function PersonES5(name, gender) {
    this.name = name;
    this.gender = gender;
}

PersonES5.prototype.sayName = function () {
    console.log(`Меня зовут: ${this.name}.`);
};

const PersonES51 = new PersonES5('Павел', 'm');


function EmpoyeeES5(name, gender, position) {
    PersonES5.call(this, name, gender);
    this.position = position;
}

// { sayPosition: f(), __proto__: PersonES5.prototype }
EmpoyeeES5.prototype = Object.create(PersonES5.prototype);
EmpoyeeES5.prototype.constructor = EmpoyeeES5;

EmpoyeeES5.prototype.sayPosition = function () {
    console.log(`Моя должность: ${this.position}.`);
};

const empoyeeES5 = new EmpoyeeES5('Павел', 'm', 'Дворник');


function SuperEmployeeES5(name, gender, position, age) {
    EmpoyeeES5.call(this, name, gender, position);
    this.age = age;
}

SuperEmployeeES5.prototype = Object.create(EmpoyeeES5.prototype);
SuperEmployeeES5.prototype.constructor = SuperEmployeeES5;

SuperEmployeeES5.prototype.sayAge = function () {
    console.log(`Мой возраст ${this.age}`);
};

const SuperEmpoyeeEs5_1 = new SuperEmployeeES5('Павел', 'm', 'Дворник', '32');
