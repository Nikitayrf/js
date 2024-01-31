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
    startCleaning: function () {  // Начать уборку
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    },
    goCharge: function () {  // Идти на зарядку
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {  // Тогл, включить/выключить уф-лампу 
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}.`);
    }
};