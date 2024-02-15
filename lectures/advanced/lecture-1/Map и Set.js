// ----------- Map --------------

// 1. Создание коллекции Map
// let map = new Map();

// // 2. Добавление элементов в коллекцию Map через set
// let map = new Map();

// map.set("1", "str1");  // строка в качестве ключа
// map.set(1, "num1");  // цифра как ключ
// map.set(true, "bool1");  // булевое значение, как ключ

// console.log(map);
// /* [[Entries]]
// 0: {"1" => "str1"}
// 1: {1 => "num1"}
// 2: {true => "bool1"}
// size: 3
// [[Prototype]]: Map
// */

// 3. Вернуть значение по ключу из Map через get
// let map = new Map();

// map.set("1", "str1");  // строка в качестве ключа
// map.set(1, "num1");  // цифра как ключ
// map.set(true, "bool1");  // булевое значение, как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохраниться 2 разных значения:
// console.log(map.get(1));  // "num1"
// console.log(map.get("1")); // "str1"

// 4. Вернуть размер Map
// let map = new Map();

// map.set("1", "str1");  // строка в качестве ключа
// map.set(1, "num1");  // цифра как ключ
// map.set(true, "bool1");  // булевое значение, как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохраниться 2 разных значения:
// console.log(map.size);  // 3

// 5. Цепочка вызовов для добавления ключей со значениями в Map
// let map = new Map();
// map.set("1", "We")
//     .set(1, "likes")
//     .set(true, "JS");

// console.log(map);
// /*
// [[Entries]]
// 0: {"1" => "We"}
// 1: {1 => "likes"}
// 2: {true => "JS"}
// size: 3
// [[Prototype]]: Map
// */

// 6. Создание Map с массивом массивов
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// console.log(recipeMap);
// /*
// [[Entries]]
// 0: {"огурец" => 500}
// 1: {"помидор" => 350}
// 2: {"лук" => 50}
// size: 3
// [[Prototype]]: Map
// */

// 7. Перебор Map по ключам
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);  // огурец, помидор, лук
// }

// 8. Перебор Map по значениям
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// // перебор по значениям (числа)
// for (const amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }


// 9. Перебор Map по элементам в формате [ключ, значение]
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// // перебор по элементам в формате [ключ, значение]
// for (const entry of recipeMap) {  // то же самое, что и recipeMap.entries()
//     console.log(entry);  //
// }

// /*
// (2) ['огурец', 500]
// (2) ['помидор', 350]
// (2) ['лук', 50]
// */


// 10. Выполнить функцию для каждой пары (ключ, значение)
// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// // выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key} : ${value}`);
// })

// /*
// огурец : 500
// помидор : 350
// лук : 50
// */


// 11. Приведение из Object в Map
// // Работа с объектами
// const obj = {
//     a: 1,
//     b: 2
// };
// console.log(obj);  // {a: 1, b: 2}

// // Object.entries поможет создать Map:
// let map = new Map(Object.entries(obj));
// console.log(map);  // Map(2) {'a' => 1, 'b' => 2}


// 12. Приведение из Map в Object
// // Работа с объектами
// const obj = {
//     a: 1,
//     b: 2
// };
// console.log(obj);  // {a: 1, b: 2}

// // Object.entries поможет создать Map:
// let map = new Map(Object.entries(obj));
// console.log(map);  // Map(2) {'a' => 1, 'b' => 2}

// // Object.fromEntries поможет создать объект из Map:
// let objFromMap = Object.fromEntries(map);
// console.log(objFromMap);  // {a: 1, b: 2}

// -------- Set ---------

// 1. Приведение из Object в Set
// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Бобик',
//     'Жучка',
//     'Валера',
//     'Жучка',
//     'Тузик',
//     'Манька'
// ];

// let uniqueBuddies = new Set(buddies);
// console.log(uniqueBuddies);
// /*
// [[Entries]]
// 0: "Жучка"
// 1: "Тузик"
// 2: "Булька"
// 3: "Бобик"
// 4: "Валера"
// 5: "Манька"
// size: 6
// [[Prototype]]: Set
// */


// 2. Приведение из Set в Object

// // Перевести обратно в массив из Set нам поможет метод Array.from:
// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Бобик',
//     'Жучка',
//     'Валера',
//     'Жучка',
//     'Тузик',
//     'Манька'
// ];
// let uniqueBuddies = new Set(buddies);

// let arr = Array.from(uniqueBuddies);
// console.log(arr);  // (6) ['Жучка', 'Тузик', 'Булька', 'Бобик', 'Валера', 'Манька']