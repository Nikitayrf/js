// -------------- Навигация по document -------------
// console.log(document.documentElement);  // тег <html>
// console.log(document.body);  // тег <body>
// console.log(document.head);  // тег <head>


// -------------- Навигация по Node (узлу) ----------

// console.log(document.body.firstChild);  // #text
// console.log(document.body.lastChild); // <script src="navelem.js"></script>
// console.log(document.body.childNodes);  // NodeList(14) [text, comment, text, div, text, comment, text, br, text, span, text, div, text, script]
// console.log(document.body.children);  // HTMLCollection(5) [div, br, span, div, script]


// ----------- Перебор коллекции узлов --------
// Сделаем в переборе коллекции вывод проверки, является ли он div
// console.log(document.body.children);
// for (const val of document.body.children) {
//     console.log(val.localName === 'div' ? "Это DIV" : "Это не DIV");
// }

// Вывести все типы узлов
// for (const val of document.body.childNodes) {
//     console.log(val.nodeType);
// }

// // https://dom.spec.whatwg.org/#node

// for (const val of document.body.childNodes) {
//     console.dir(val.nodeValue);
// }

// ------- Свойства текстового узла --------
// Вывести содержание текстового узла
// const textNode = document.body.firstChild;

// console.dir(textNode);
// console.log(`textNode = "${textNode.data}"`);

console.dir(document.body.firstElementChild.style);