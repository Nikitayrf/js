/*Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.

// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); 
// Ожидаемый результат: false

console.log(isPasswordValid('secret')); // Ожидаемый результат: true */

const createPasswordChecker = (num) => {
    return (arg) => {
        if (arg.length === num) {
            return false;
        }
        return true;

    }
};
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));