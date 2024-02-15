/* 
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
1. Map будет использоваться для хранения соответствия между уроком и преподавателем.
2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
*/

// Вариант 2. В качестве ключа выступает объект student1

// Коллекция в которой ключ это урок, а значение это преподаватель, который ведёт этот урок
// 1. Map: урок => преподаватель
let lessons = new Map();
// "Математика", "Смирнов"
// "История", "Иванова"
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");
// console.log(lessons);  // Map(2) {'Математика' => 'Смирнов', 'История' => 'Иванова'}

// 2. Map: студент => Set уроков

// Коллекция Map в который ключ - это имя ученика, а значение это Set с предметами, которые он посетил
let students = new Map();

// значения будут одинаковые например Иван и Иван, то в students будет только один Иван
const student1 = {
    name: "Иван"
};

// Коллекция Set которая содержит какие уроки посетил student1 
let student1InviteLessons = new Set();
student1InviteLessons.add("Математика");
student1InviteLessons.add("Информатика");
student1InviteLessons.add("Информатика");  // Повторяющийся не будет добавлен в Set

// добавление в students первого student1 в качестве ключа и коллекцию его уроков хранящуюся в student1InviteLessons
students.set(student1, student1InviteLessons);

console.log(student1InviteLessons);  // Set(2) {'Математика', 'Информатика'}
console.log(students);
/*
[[Entries]]
0: {Object => Set(2)}
    key: {name: 'Иван'}
    value: Set(2) {'Математика', 'Информатика'}
size: 1
[[Prototype]]: Map
*/

// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: ${[...students.get(student1)]}`); // Математика, История