'use strict';
// Объявление DancingSeries смотри в листинге 2.

// Конструктор объекта робота-пылесоса.
function NewSamba(serialNumber) {
    // Создаём свойства объекта, используя this.
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;

    // Делаем ссылку на прототип от родителя.
    this.__proto__ = DancingSeries;
}

// Создадим экземпляр нового объекта.
const Samba1 = new NewSamba(1014778);

console.log(Samba1.serialNumber);  // 1014778
Samba1.startCleaning();  // I am the method of VacuumCleaner
// I am cleaning... I have been started:  1 times.

// Объявление базового родительского объекта смотри в листинге 1.
// Объвление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос NewSamba смотри в constructor.

// Создадим 10 роботов пылесосов NewSamba, как на конвейере.
const robots = [];

for (let index = 0; index < 10; index++) {
    /* Создадим экземпляр нового объекта и добавляем его в массив наших роботов,
    каждый с уникальным серийным номером.*/
    robots.push(new NewSamba(index));
}

console.log(robots[3].serialNumber);  // 3
console.log(robots[7].serialNumber);  // 7

/* Далее мы можем взаимодействовать с нашим массивом роботов как нам удобно,
обрабатывать его в циклах, обращаться к каждому роботу по отдельности, и нам
понадобиться всего четыре строчки кода, чтобы создать такое количесвто роботов.
*/

// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.


// Делаем ссылку на прототип от родителя.
NewSamba.prototype = DancingSeries;

// Создадим экземляр нового объекта.
const Samba2 = new NewSamba(1014778);

console.log(Samba2.serialNumber);  // 1014778
Samba2.startCleaning();  // I am the method of VacuumCleaner
// I am cleaning... I have been started:  1 times.