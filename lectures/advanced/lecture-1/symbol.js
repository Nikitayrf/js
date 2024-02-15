// 1. Создание переменной Symbol

// const symbol = Symbol();  // объявление

// const dogID = Symbol('dog');  // значение уникально, даже если мы создадим
// // несколько символов с одинаковым описание

// const dog1 = Symbol('dog1');
// const dog2 = Symbol('dog2');

// console.log(dog1);  // Symbol(dog1)
// console.log(dog2);  // Symbol(dog2)

// 2. Сравнение переменных Symbol
// console.log(dog1 == dog2);  // false
// console.log(dog1 === dog2);  // false

// 3. Symbol не работаетс alert, т.к. Symbol не приводиться к строке автоматически (защита)
// const dogID = Symbol('dog');
// // alert(dogID);  // TypeError: Cannot convert a Symbol value to a string
// console.log(dogID); // Symbol(dog)

// 4. Посмотреть значение свойства description (описание)
// const dogID = Symbol('super dog');
// console.log(dogID.description);  // super dog

// 5. Присвоение свойству объекта значение Symbol
// let id = Symbol('dogID');

// let buddy = {
//     [id]: 'Жучка'
// }

// console.log(buddy[id]);  // Жучка

// 6. Переопределение идентификатора Symbol
// let id = Symbol('id');
// let buddy = {
//     [id]: 'Жучка'
// }
// console.log(buddy[id]);  // Жучка

// buddy[id] = 'Бобик';  // Идентификаторы создаются уникальными всегда
// console.log(buddy[id]);  // Бобик

// 7. Пример проблемы при которой сторонняя библиотека перетирает текущий  индентификатор объекта.
// Проблемы которые могут возникнуть, без использования Symbol
// let buddy = { name: 'Тузик' };  // объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор';  // ...другой скрипт тоже хочет свой идентификатор...
// console.log(buddy.id);  // Наш идентификатор

// buddy.id = 'Их идентификатор';  // Ой! Свойство перезаписано сторонней библиотекой
// console.log(buddy.id);  // Их идентификатор

// 8. Решение проблемы перетирания идентификатора сторонней библиотекой
// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон'
// }

// console.log(buddies);

// /*
// cat: "Барсик"
// elephant: "Слон"
// Symbol(Жучка): "Жучка"
// Symbol(Мурка): "Мурка"
// Symbol(Таракашка): "Таракашка"
// [[Prototype]]: Object
// */

// let newBuddies = {};
// Object.assign(newBuddies, buddies);  // Object.assign скопирует все свойства, в том числе, и символьные.

// buddies.cat = 'Барсик';

// console.log(newBuddies);
// /*
// elephant: "Слон"
// Symbol(Жучка): "Жучка"
// Symbol(Мурка): "Мурка"
// Symbol(Таракашка): "Таракашка"
// [[Prototype]]: Object
// */

// console.log(buddies);
// /*
// cat: "Барсик"
// elephant: "Слон"
// Symbol(Жучка): "Жучка"
// Symbol(Мурка): "Мурка"
// Symbol(Таракашка): "Таракашка"
// */


// 9. Чтение Symbol из глобального реестра и запись его в переменную
//-------  Symbol.for  --------

// let id = Symbol.for("id");  // если Symbol не существует, он будет создан

// 10. читаем Symbol из глобального реестра и записываем его в переменную
// let id = Symbol.for("id");  // если Symbol не существует, он будет создан

// // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");

// // проверяем: это один и тот же Symbol
// alert(id === idAgain);  // true

// 11. сравнение переменных с типом данных Symbol
// // читаем Symbol из глобального реестра и записываем его в переменную
// let id = Symbol.for("id");  // если Symbol не существует, он будет создан

// // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");

// // проверяем: это один и тот же Symbol
// alert(id === idAgain);  // true

// 12. -------  Symbol.keyFor  -------- описание Symbol по идентификатору
// // получаем Symbol по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // получаем имя по Symbol
// console.log(Symbol.keyFor(sym));  // name
// console.log(Symbol.keyFor(sym2)); // id