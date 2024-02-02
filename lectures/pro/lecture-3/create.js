'use strict';
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге proto.

// Конструктор объекта робота-пылесоса.
function NewSamba(serialNumber) {
    // Создаём свойства объекта, используя this.
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}


// Создание робота-пылесоса NewSamba.
const Samba4 = new NewSamba(101);

/* Попробуем обратиться к стандартному методы toString, хоть мы его и не объявляли 
ни в одном из объектов. */
console.log(Samba4.toString());  // [object Object]

/* Хоть мы и не объявляли метод toString в нашей цепочке объектов, но он 
присутствует и идёт от самого первого объекта (базового), т.к. его прототип - это
сам объект Object, и метод toString пришел от него. */

// Создадим пустой объект без прототипа.
const Samba5 = Object.create(null);

// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__

console.log(Samba5.toString);  // undefined
console.log(Samba5.__proto__);  // undefined