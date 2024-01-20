'use strict';

// Задание 1:

// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.

// 1.
// const day = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// };

// console.log(day[2]);

// 2.
// const user = {
//     name: 'Никита',
//     surname: 'Арт',
//     age: 36,
// };

// console.log(`${user.name} ${user.surname} ${user.age}`);

// 3.

// user.middleName = prompt('Введите фамилию');
// console.log(`${user.name} ${user.surname} ${user.age} ${user.middleName}`);

// 4.
// delete user.surname;

// console.log(`${user.name} ${user.surname} ${user.age} ${user.middleName}`);


// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// 1.
// const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// const dayNumbers = [1, 2, 3, 4, 5, 6, 7];

//2.
// const daysObj = {

// };

// for (const key in dayNumbers) {
//     daysObj[days[key]] = dayNumbers[key];
// }

// console.log(daysObj);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
// 3.
// const xy = {
//     x: 1,
//     y: 2,
//     z: 3,
// };

// for (const key in xy) {
//     xy[key] = xy[key] ** 2;
// }

// console.log(xy);

// Задание 3:

// ```
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// }
// ```

// Найдите сумму всех чисел, приведенного объекта.

// const obj = {
//     num: 10,
//     key1: {
//         problem: {
//             trable: 1000,
//         },
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// function getSum(object) {
//     let summ = 0;
//     for (const key in object) {
//         if (typeof object[key] === 'number') {
//             summ += object[key];
//         } else {
//             summ += getSum(object[key]);
//         }
//     }
//     return summ;
// }

// console.log(getSum(obj));

// Задание 4:

// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

// 1.
// const riddleNew = {
//     question: 'зимой и летом?',
//     hints: ['это зеленое', 'это на новый год'],
//     answer: 'елка',
//     askQuestion() {
//         let inputAnswer = prompt(this.question);
//         if (inputAnswer.toLowerCase() === this.answer.toLowerCase()) {
//             alert("Поздравляем");
//         } else {
//             for (let index = 0; index < this.hints.length; index++) {
//                 inputAnswer = prompt(this.hints[index])
//                 if (inputAnswer.toLowerCase() === this.answer.toLowerCase()) {
//                     alert('Поздравляем');
//                     return;
//                 }
//             }
//             alert('Проиграли');
//         }
//     }
// }

// riddleNew.askQuestion();

// 
// arr.forEach((num, index) => console.log(`Индекс ${index}, значение ${num}`));

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((num, index) => {
//     if (num === 4) {
//         numCallback(() => {
//             console.log(123);
//         });
//     }
// });

// function numCallback(callbackNew) {

//     setTimeout(() => {
//         console.log('done');
//         callbackNew();
//     }, 4000)

// }

const arr = [13, 21, 34, 64, 55];
console.log(arr.map((num, index) => num * index));