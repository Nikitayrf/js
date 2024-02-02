'use strict';
/* Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

const obj = {};
const prototypeChain = getPrototypeChain(obj);
console.log(prototypeChain); */

const MusicSeries = {
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    startWipe: function () {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
};

const Blues = {
    model: "Blues-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};


function getPrototypeChain(obj) {
    const arr = [];
    let currentObj = obj;
    while (currentObj !== null) {
        arr.push(currentObj)
        currentObj = Object.getPrototypeOf(currentObj)
    }
    return arr;
}

Object.setPrototypeOf(Blues, MusicSeries);
const prototypeChain = getPrototypeChain(Blues);
console.log(prototypeChain);
