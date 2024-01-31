'use strict';
// Объект робот-пылесос.
const Roomba = {  // Есть негласное правило называть объекты в алгоритмах с большой буквы.
    // Обычно сначало объявляют свойство объкта.
    model: "Roomba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,  // Количество запусков
    isFull: false,  // Полон ли?
    isObstacle: false,
    isUVLampOn: false,

    //  После свойств объявляют его методы.
    startCleaning: () => {  // Начать уборку
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: () => {  // Идти на зарядку
        console.log('I am going to charge...');
    },
    switchUVLamp: () => {  // Тогл, включить/выключить уф-лампу 
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};


///////


/* Объект Roomba - робот-пылесос. Код самого объекта смотри в листинге 16, с 
использованием синтаксиса ES2015. */

// Вызов метода объекта.
Roomba.startCleaning();  // I am cleaning... I have been started:  NaN times.
Roomba.startCleaning.call(Roomba);  // I am cleaning... I have been started:  NaN times.
Roomba.startCleaning.apply(Roomba);  // I am cleaning... I have been started:  NaN times.
const bindedMethod = Roomba.startCleaning.bind(Roomba);
bindedMethod();  // I am cleaning... I have been started:  NaN times.

setTimeout(Roomba.startCleaning.bind(Roomba), 1000);  // I am cleaning... I have been started:  NaN times. Почему NaN?


///


const Stand = {
    model: "Stand-1",
    robots: ['Roomba-1', 'Tango-1', 'Samba-1', 'Roomba-2'],
    /* Метод, с использованием стрелочной функции в качестве функции обратного 
    вызова */
    startTestingArrow: function () {
        console.log('Start testing...');
        this.robots.forEach((value) => {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    },
    /* Метод, с использованиес классической функции в качестве функции обратного
    вызова */
    startTestingClassic: function () {
        console.log('Start testing...');
        this.robots.forEach(function (value) {
            console.log('stand: ', this.model, 'is testing robot: ', value);
        })
    },
};
Stand.startTestingArrow();
// Start testing...
// stand:  Stand-1 is testing robot:  Roomba-1
// stand:  Stand-1 is testing robot:  Tango-1
// stand:  Stand-1 is testing robot:  Samba-1
// stand:  Stand-1 is testing robot:  Roomba-2
Stand.startTestingClassic();
// Start testing...
// stand:  undefined is testing robot:  Roomba-1
// stand:  undefined is testing robot:  Tango-1
// stand:  undefined is testing robot:  Samba-1
// stand:  undefined is testing robot:  Roomba-2