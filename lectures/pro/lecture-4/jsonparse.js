'use strict';
console.log(JSON.parse(`{"name": "Slava", "surname": "Belkin", "age": 20, "practice": { "place": "IKGT", "hours": 47}}`));

// {
//     name: 'Slava', 
//     surname: 'Belkin', 
//     age: 20, 
//     practice: {
//         place: "IKGT",
//         hours: 47,
//         [[Prototype]]: Object
//     },
//     [[Prototype]]: Object
// }

console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]'));  // (3) ['Belkin', 'Ivanov', 'Petrov']