/* 
Используя Symbol.iterator, создайте объект "Библиотека", который можно
итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
1. Создайте объект library, который содержит массив книг и имеет свойство-
символ Symbol.iterator.
2. Реализуйте кастомный итератор для объекта library. Итератор должен
перебирать книги по порядку.
3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
консоль.
*/

// Вариант 1.
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

let library = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                if (index < books.length) {

                    return {
                        value: books[index++],
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (const book of library) {
    console.log(book.title, book.author);
}
/*
1984 George Orwell
Brave New World Aldous Huxley
Fahrenheit 451 Ray Bradbury
*/


// Вариант 2.
// let library = {
//     books: [
//         { title: "1984", author: "George Orwell" },
//         { title: "Brave New World", author: "Aldous Huxley" },
//         { title: "Fahrenheit 451", author: "Ray Bradbury" }
//     ],
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next() {
//                 if (index < library.books.length) {

//                     return {
//                         value: library.books[index++],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }

// for (const book of library) {
//     console.log(book.title, book.author);
// }
// /*
// 1984 George Orwell
// Brave New World Aldous Huxley
// Fahrenheit 451 Ray Bradbury
// */