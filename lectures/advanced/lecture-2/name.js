// ---- Свойство name ----------

// // Свойство name объекта Function
// function sayHello() {
//     // console.log("Hello!");
// }
// // console.log(sayHello.name);  // Выводит имя функции - "sayHello"


// // Свойство name объекта window
// //т.е. имя окна браузера
// window.name = "lab_seb";
// console.log(window.name);


// Свойство name объекта frame
// Выводит имя фрейма, или пустую строку если оно не было задано
// console.log(frames[0].name);  // В данном случае будет ошибка, т.к. frame[0] не создан


// // Свойство name объекта объекта
// // Выводит значение undefined, т.к. свойство name не было определено для объекта
// const obj = {};
// console.log(obj.name);  // undefined


// // Свойство name класса
// Выводит имя класса "Rectangle" через свойство name конструктора объекта
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }
// const rect = new Rectangle(10, 5);
// console.log(rect.constructor.name);  // Rectangle