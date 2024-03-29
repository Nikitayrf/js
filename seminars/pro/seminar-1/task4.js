/* Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// Пример использования: 
const greeting = createGreeting('John');
greeting(); 
// Ожидаемый результат: "Hello, John!"*/

const createGreeting = (arg) => {
    return () => {
        console.log(`Hello, ${arg}!`);
    }
};

const greeting = createGreeting('John');
greeting();
