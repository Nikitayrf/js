"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const newArr = [];

for (let i = 0; i < 5; i++) {
    newArr.push(Math.floor(Math.random() * 10));
}
console.log(newArr);

let sumEl = 0;
for (const iterator of newArr) {
    sumEl += iterator
}
console.log(`Сумму элементов массива: ${sumEl}`);

let minNewArr = newArr[0];
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < minNewArr) {
        minNewArr = newArr[i];
    }
}
console.log(`Минимальное значение в массиве ${minNewArr}`);

const arrWithIndexWhenElement3 = [];
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 3) {
        arrWithIndexWhenElement3.push(i);
    }
}
console.log(arrWithIndexWhenElement3);