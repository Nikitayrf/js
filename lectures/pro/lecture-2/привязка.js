'use strict';
// Объект Roomba - робот-пылесос. Код самого объекта в листинге 1.

// Обращение к свойствам объекта.
console.log(Roomba.model);  // Roomba-1
console.log(Roomba.isFull);  // false

// Вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000);

/* Установим свойства объекта isUVLampOn в true, чтобы продемонстировать 
результат работы метода switchUVLamp.*/
Roomba.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в 
свойствах объекта, а также от того, как этот метод был вызван. */
setTimeout(Roomba.switchUVLamp, 2000);

setTimeout(Roomba.goCharge, 3000);

// I am cleaning... I have been started:  NaN times.
// UV lamp is working.
// I am going to charge...


//////


// Объект Roomba - робот-пылесос. Код самого объекта в листинге 1.
// Обращение к свойствам объекта.
console.log(Roomba.model);  // Roomba-1
console.log(Roomba.isFull);  // false

// Вызов методов объекта.
setTimeout(function () {
    Roomba.startCleaning();
}, 1000);

/* Установим свойства объекта isUVLampOn в true, чтобы продемонстировать 
результат работы метода switchUVLamp.*/
Roomba.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в 
свойствах объекта, а также от того, как этот метод был вызван (об этом поговорим
чуть ниже).*/
setTimeout(function () {
    Roomba.switchUVLamp();
}, 2000);

setTimeout(function () {
    Roomba.goCharge();
}, 3000);

// I am cleaning... I have been started:  2 times.
// UV lamp is not working.
// I am going to charge...