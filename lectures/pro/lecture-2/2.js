'use strict';
// Обращение к свойствам объекта.
console.log(Roomba.model);  // Roomba-1
console.log(Roomba.isFull);  // false

// Вызов методов объекта.
Roomba.startCleaning(); // I am cleaning... I have been started:  1 times.

/* Установим свойства объекта isUVLampOn в true, чтобы продемонстировать 
результат работы метода switchUVLamp.*/
Roomba.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в 
свойствах объекта, а также от того, как этот метод был вызван (об этом поговорим
чуть ниже).*/
Roomba.switchUVLamp();  // UV lamp is not working.

Roomba.goCharge();  // I am going to charge...