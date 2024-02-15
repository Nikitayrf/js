// ------------ Symbol.iterator --------------------------------
// // 1. Итерирование строк, строки это массивы
// const string = 'Hello';
// console.log(string[2]);  // l
// console.log(string.length); // 5

// for (const letter of string) {
//     console.log(letter);
// }
// /*
// H
// e
// l
// l
// o
// */

// // все работает, как с циклами. Это так же просто работает и с другими символами, даже нестандартными, имеющими свои ASCII-коды.

// // 2. Добавление объекту свойства итерируемости (Symbol.iterator) для возможности работы c for...of

// /* Мы хотим из него сделать последовательность с таким образом:
// for(let number of range), где на выходе последовательность от 1 до 17
// */

// let range = {
//     from: 1,
//     to: 10
// };
// console.dir(range); // В свойствам объекта range нет Symbol.iterator, это значит что он не итерируемый
// /*
// Object
// from: 1
// to: 10
// [[Prototype]]: Object
// */

// // Соответсвенно если мы захотим проитерировать объект то....
// // for (const number of range) {
// //     console.log(number);
// // }
// // ...будет ошибка range is not iterable т.к. range не итерируемый объект


// // Cделаем range итерируемым объектом и опишем как будет происходит итерация
// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function () {
//     // ...она возвращает объект итератора:
//     // 2. Далее, for(..of..) работает только с этим итератором, запрашивая у него новые значения
//     return {
//         current: this.from,
//         last: this.to,

//         // 3. next() вызывает на каждой итерации цикла for(..of..)
//         next() {
//             // 4. он должен вернуть значение в виде объекта {done:.., value:...}
//             return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
//         }
//     };
// };

// // теперь работает!
// // У объекта range появилось свойство Symbol.iterator
// /*
// Object
// from: 1
// to: 10
// Symbol(Symbol.iterator): ƒ ()
// [[Prototype]]: Object
// */
// for (const number of range) {
//     console.log(number);
// }
// /*
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// */

// 3. Создание объекта сразу со свойством итерации, но тогда this будет общим (на первых парах не рекомендуется)

// // Можно было и вместе, но тогла this будет общий
// let range = {
//     from: 1,
//     to: 10,
//     [Symbol.iterator]() {
//         this.current = this.from;  // это сложный момент, поэтому не рекомендуется
//         return this;
//     },
//     next() {
//         return this.current <= this.to ? { done: false, value: this.current++ } : {
//             done: true
//         };
//     }
// };
// console.dir(range);
// /*
// Object
// current: 11
// from: 1
// next: ƒ next()
// to: 10
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// */

// for (const number of range) {
//     console.log(number);
// }
// /*
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// */

// ------------ Array.from ----------------------

// // 1. Создание массива из объекта

// let pseudo = {
//     0: 'first',
//     1: 'second',
//     length: 2
// }
// console.log(pseudo);
// /*
// 0: "first"
// 1: "second"
// length: 2
// [[Prototype]]: Object */

// let array = Array.from(pseudo);
// console.log(array);
// // В объекта array нет 'second' потому что при раскрытие в отладчике, происходит повторное обращение к объекту array, а у него в этот момент уже удалено через pop() свойство 'second'
// /*
// (2) ['first', 'second']
// 0: "first"
// length: 1
// [[Prototype]]: Array(0)
// */

// console.log(array.pop());  // second

// 2. Создание массива из строки
// // Работает даже со строкой
// let pseudo2 = 'It`a Array Like!';
// let array2 = Array.from(pseudo2);
// console.log(array2);
// /*
// 0: "I"
// 1: "t"
// 2: "`"
// 3: "a"
// 4: " "
// 5: "A"
// 6: "r"
// 7: "r"
// 8: "a"
// 9: "y"
// 10: " "
// 11: "L"
// 12: "i"
// 13: "k"
// 14: "e"
// 15: "!"
// length: 16
// [[Prototype]]: Array(0)
//  */