// Импорт
// Чтобы получить доступ к объектам, надо их импортировать
import { name, draw } from './modules/square.js';

console.log(name);  // square

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
draw(ctx, 100, 50, 50, 'red');

// ./modules/square.js  // Точка в начале пути мы можем использовать для обозначения текущей директории.