'use strict';
// Класс робот-пылесос.
class newVacuumCleaner {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    // Для создания конструктора, нужно создать метод constructor.
    constructor() {
    }

    startCleaning() {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод вызвади.
        console.log('I am the method of newVacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge() {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of newVacuumCleaner');
        console.log('I am going to charge...');
    }
}

// Попробуем создать экземпляр класса и посмотреть как он работает.
const BaseRobot = new newVacuumCleaner;
console.log(BaseRobot.constructor);  /* class newVacuumCleaner {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;
    // Для создания конструктора, нужно создать метод constructor.
    constru… */

console.log(BaseRobot.model);  // vacuum cleaner
BaseRobot.startCleaning();  // I am the method of newVacuumCleaner
// I am cleaning... I have been started:  1 times.


////


// Расширенный класс NewDancingSeries. С помощью extends мы указываем от какого класса будем наследоваться.
class NewDancingSeries extends newVacuumCleaner {
    // Объявляем новые свойства и переопределяем model.
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;

    // Добавляем новый метод.
    switchUVLamp() {
        // Добавляем дополнительный вывод, чтобы знать чей метод мы вызывали.
        console.log('I am method of NewDancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}`);
    }
};

/* Создадим новый экземпляр класса, чтобы посмотреть как он работает и что в 
нём есть. */
const DancingRobot = new NewDancingSeries;
console.log(DancingRobot.__proto__);  // newVacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}
console.log(DancingRobot.model);  // dancing series
DancingRobot.switchUVLamp();  // I am method of NewDancingSeries
// UV lamp is working

////

// Созданный конструктор является функцией, код которой взят из конструктора.
console.log(NewDancingSeries === NewDancingSeries.prototype.constructor);  // true

// В созданном конструкторе есть свойство prototype и оно содержит все методы.
console.log(NewDancingSeries.prototype);  // newVacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}