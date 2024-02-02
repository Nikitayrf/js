'use strict';
// Объект робот-пылесос
const VacuumCleaner = {
    model: 'vacuum cleaner',
    counterOfStarts: 0,
    isFull: false,
    isObstacle: false,

    startCleaning: function () {
        this.counterOfStarts++;
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызываем.
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    },

    goCharge: function () {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    }
};