'use strict';
console.log('Start algorithm!');

setTimeout(function timeout() {
    console.log('This will be printed after 5 seconds!');
}, 5000);

console.log('End synchronous code.');

//
///////
/* Вот так все просто. Синхронные команды выполняются в стеке вызова, а все асинхронное выполняется API окружения, отложенные задачи попадают в очередь, а цикл событий следит за стеком и очередью отложенных задач, и как только стек опустошается, начинает заполнять его отложенными задачами. */