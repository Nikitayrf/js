/*
Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
3. Создать объект книги, добавить метаданные и вывести их на консоль.
*/

// reviewSymbol создать
// ratingSymbol
// tagsSymbol

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");


// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    // Добавить код
    if (!book[metadataType]) {
        book[metadataType] = [];
    }
    book[metadataType].push(data);
}


// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    // вернуть
    return book[metadataType];

}

// Создание объекта книги и добавление метаданных
const book = {
    title: "1984",
    author: "George Orwell"
};


addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");


// // // Вывод метаданных для книги
console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
console.log(getMetadata(book, ratingSymbol)); // [5]
console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]


console.log(book);
/* 
author: "George Orwell"
title: "1984"
Symbol(rating): [5]
Symbol(review): ['Отличная книга о дистопии!']
Symbol(tags): ['dystopia']
[[Prototype]]: Object
*/