'use strict';
/* Задание 2
    У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем выполняет каждую задачу через определенный промежуток времени.

    const tasks = [
        {name:'task 1', time: 1000},
        {name:'task 2', time: 2000},
        {name:'task 3', time: 3000},
        {name:'task 4', time: 4000},
        {name:'task 5', time: 5000}
    ];
 */

const tasks = [
    { name: 'task 1', time: 1000 },
    { name: 'task 2', time: 2000 },
    { name: 'task 3', time: 3000 },
    { name: 'task 4', time: 4000 },
    { name: 'task 5', time: 5000 }
];

function executeTasksSequentially(listTasks) {
    for (const task of listTasks) {
        setTimeout(() => console.log(task.name), task.time);
    }
}

executeTasksSequentially(tasks);

function executeTasksWithDelay(listTasks) {
    let count = 0;
    for (const task of listTasks) {
        count += task.time;
        setTimeout(() => console.log(task.name), count);
    }
}

executeTasksWithDelay(tasks);
