/* 1.Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа. */


// 1.
const getEvenNumbers = (args) => args.filter((element) => element % 2 === 0);

console.log(getEvenNumbers([1, 2, 4, 5, 8, 3, 10]));

/* 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел. */

// 2.
const calculateAverage = (args) => args.reduce((acc, currentNumber) => acc + currentNumber, 0) / args.length;
console.log(calculateAverage([1, 2, 3, 5]));

/* 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.*/

// 3.

const capitalizeFirstLetter = (str) => str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(capitalizeFirstLetter('nikita art'));