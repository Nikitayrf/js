'use strict';
// // Класс робот-пылесоса.
// class RobotVacuumCleaner {
//     // Свойства класс.
//     model = "Romba-1";
//     power = 200;
//     batterySize = 2100;
//     boxSize = 0.5;
//     workTime = 45;
//     counterOfStarts = 0;  // Количество запусков
//     isFull = false;  // Полон ли?
//     isObstacle = false;
//     isUVLampOn = false;

//     // Конструктор класса, мы изучим его подробнее на следующем уроке.
//     constructor() {

//     }

//     // Методы класса.
//     startCleaning() {
//         this.counterOfStarts++;
//         console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
//     }

//     goCharge() {
//         console.log('I am going to charge...');
//     }

//     switchUVLamp() {
//         this.isUVLampOn = !this.isUVLampOn;
//         console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
//     }
// }

// // Создадим экземпляр класса.
// const Roomba = new RobotVacuumCleaner();
// // console.log(Roomba);



// //////



// // Обращение к свойствам объекта.
// console.log(Roomba.model);  // Roomba-1
// console.log(Roomba.isFull);  // false

// // Отложенный вызов метода объекта.
// setTimeout(Roomba.startCleaning, 1000);

// /* Установим свойство объекта isUVLampOn в true, чтобы продемонстировать результат
// работы метода switchUVLamp. */
// Roomba.isUVLampOn = true;

// setTimeout(Roomba.switchUVLamp, 2000);

// setTimeout(Roomba.goCharge, 3000);

// // I am cleaning... I have been started:  NaN times.
// // class.js:32 UV lamp is working.
// // class.js:27 I am going to charge...



////////


// // Класс робот-пылесоса.
// class RobotVacuumCleaner {
//     // Свойства класс.
//     model = "Romba-1";
//     power = 200;
//     batterySize = 2100;
//     boxSize = 0.5;
//     workTime = 45;
//     counterOfStarts = 0;  // Количество запусков
//     isFull = false;  // Полон ли?
//     isObstacle = false;
//     isUVLampOn = false;

//     /* Используем конструктор, чтобы привязать все методы класса к контексту - текущему
//     объекту (this)*/
//     constructor() {
//         this.startCleaning = this.startCleaning.bind(this);
//         this.goCharge = this.goCharge.bind(this);
//         this.switchUVLamp = this.switchUVLamp.bind(this);
//     }

//     // Методы класса.
//     startCleaning() {
//         this.counterOfStarts++;
//         console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
//     }

//     goCharge() {
//         console.log('I am going to charge...');
//     }

//     switchUVLamp() {
//         this.isUVLampOn = !this.isUVLampOn;
//         console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
//     }
// }

// // Создадим экземпляр класса.
// const Roomba = new RobotVacuumCleaner();
// console.log(Roomba);

// // Обращение к свойствам объекта.
// console.log(Roomba.model);  // Roomba-1
// console.log(Roomba.isFull);  // false

// // Отложенный вызов метода объекта.
// setTimeout(Roomba.startCleaning, 1000);

// /* Установим свойство объекта isUVLampOn в true, чтобы продемонстировать результат
// работы метода switchUVLamp. */
// Roomba.isUVLampOn = true;

// setTimeout(Roomba.switchUVLamp, 2000);

// setTimeout(Roomba.goCharge, 3000);

// I am cleaning... I have been started:  1 times.
// UV lamp is not working.
// I am going to charge...



///////


// Класс робот-пылесоса.
class RobotVacuumCleaner {
    // Свойства класс.
    model = "Romba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;  // Количество запусков
    isFull = false;  // Полон ли?
    isObstacle = false;
    isUVLampOn = false;

    /* Конструктор класса, мы изучим его подробнее на следующем уроке. */
    constructor() {
    }

    // Методы класса.
    startCleaning = () => {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge = () => {
        console.log('I am going to charge...');
    }

    switchUVLamp = () => {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
}

// Создадим экземпляр класса.
const Roomba = new RobotVacuumCleaner();
console.log(Roomba);

// Обращение к свойствам объекта.
console.log(Roomba.model);  // Roomba-1
console.log(Roomba.isFull);  // false

// Отложенный вызов метода объекта.
setTimeout(Roomba.startCleaning, 1000);

/* Установим свойство объекта isUVLampOn в true, чтобы продемонстировать результат
работы метода switchUVLamp. */
Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp, 2000);

setTimeout(Roomba.goCharge, 3000);

// I am cleaning... I have been started:  1 times.
// UV lamp is not working.
// I am going to charge...