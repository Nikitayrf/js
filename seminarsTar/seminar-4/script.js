'use strict';

function toBeep() {
    console.log(`${this.model} подаёт сигнал!`);
}

function Car(model, wheelsCount) {
    // this = {}
    // this.__proto__ = Car.prototype;
    this.model = model;
    this.wheelsCount = wheelsCount;
    // };
    // return this
}

const car1 = new Car('BMW', 4);
const car2 = new Car('Toyota', 6);

toBeep.call(car1);  // BMW подаёт сигнал!
toBeep.call(car2);  // Toyota подаёт сигнал!