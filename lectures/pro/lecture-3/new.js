'use strict';
// // Наша реализация оператора new через функцию createObject.
// function createObject(constructor) {
//     // Создаём новый объект.
//     const obj = {};

//     // Установим новому объекту прототипом прототип функции-конструктора
//     Object.setPrototypeOf(obj, constructor.prototype);

//     /* Вызовем функцию-конструктор, передав ей как this созданный на шаге
//     1 объект, и передадим остальные аргументы, если они были переданы
//     в createObject. */
//     const argsArray = Array.prototype.slice.apply(arguments);
//     const result = constructor.apply(obj, argsArray.slice(1));

//     /* Вернйм новый объект, если конструктор вернул примитивное значение или
//     undefined, Иначе вернём то, что вернул конструктор. */

//     if (!result || typeof result === 'string' || typeof result === 'number' ||
//         typeof result === 'boolean') {
//         return obj;
//     } else {
//         return result;
//     }
// }

// // Создадим экземпляр нового объекта.
// const Samba3 = createObject(NewSamba, 1014778);

// // Проверим установку свойств в конструкторе.
// console.log(Samba3.serialNumber);  // 1014778

// /* Проверим, что прототип установился корректно, и мы можем вызывать методы из
// родительских объектов. */
// console.log(Samba3.__proto__);  // {model: 'dancing series', power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, …}

// Samba3.startCleaning();  // I am the method of VacuumCleaner
// // I am cleaning... I have been started:  1 times.

// // Проверим присвоение конструктора.
// console.log(Samba3.constructor);  // Object() { [native code] }

// Конструктор объекта робота-пылесоса.
function NewSamba(serialNumber) {
    // Создаём свойства объекта, используя this.
    this.serialNumber = serialNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}

// Делаем ссылку на прототип от родителя.
NewSamba.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba3 = new NewSamba(1014778);

// Посмотрим на свойство __proto и prototype
console.log(Samba3.__proto__);  // {model: 'dancing series', power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, …}

console.log(Samba3.prototype);  // undefined
console.log(NewSamba.prototype);  // {model: 'dancing series', power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, …}
console.log(Samba3.__proto__ === NewSamba.prototype);  // true