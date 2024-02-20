/* Задание 2
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум аккаунте, а некоторые - нет. Ваша задача - создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и `instanceof`.

1. Создайте базовый класс `User` с базовой информацией (например, имя и фамилия).
2. Создайте классы `PremiumUser` и `RegularUser`, которые наследуются от `User`. Класс `PremiumUser` должен иметь свойство `premiumAccount` (допустим, дата истечения срока действия), а у `RegularUser` такого свойства нет.
3. Создайте функцию `getAccountInfo(user)`, которая принимает объект класса `User` и возвращает информацию о наличии и сроке действия премиум аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции `getAccountInfo` используйте `instanceof` для проверки типа переданного пользователя и дайте соответствующий ответ.
*/


// Вариант 1
// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

// }

// class PremiumUser extends User {
//     premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
// }

// // создать RegularUser
// class RegularUser extends User {

// }

// function getAccountInfo(user) {
//     // Премиум аккаунт действителен до такой-то даты или информация отсутствует
//     if (user instanceof PremiumUser && user.premiumAccount) {
//         return `Премиум аккаунт действителен до ${new Date(user.premiumAccount).toLocaleDateString()}` ?? user.premiumAccount;
//     } else if (user instanceof RegularUser && !user.premiumAccount) {
//         return `Пользователь без премиум аккаунта`;
//     } else {
//         return `Тип пользователя не определен`;
//     }

//     // пользователь без премиум аккаунта
//     // Тип пользователя не определен"
// }


// // Проверка
// const premiumUser = new PremiumUser("PremiumName", "PremiumSurname");
// const regularUser = new RegularUser("RegularName", "RegularSurname");
// const user = new User("Обычный Имя", "Обычный фамилия");

// console.log(getAccountInfo(premiumUser));  // Премиум аккаунт действителен до 19.02.2025
// console.log(getAccountInfo(regularUser));  // Пользователь без премиум аккаунта
// console.log(getAccountInfo(user));  // Тип пользователя не определен


// Вариант 2
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

}

class PremiumUser extends User {
    premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}

// создать RegularUser
class RegularUser extends User {

}

function getAccountInfo(user) {
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует
    const premiumAccountValid = user?.premiumAccount ?? false;
    if (user instanceof PremiumUser && premiumAccountValid) {
        return `Премиум аккаунт действителен до ${new Date(user.premiumAccount).toLocaleDateString()}`;
    } else if (user instanceof RegularUser && premiumAccountValid) {
        return `Пользователь без премиум аккаунта`;
    } else {
        return `Тип пользователя не определен`;
    }

    // пользователь без премиум аккаунта
    // Тип пользователя не определен"
}


// Проверка
const premiumUser = new PremiumUser("PremiumName", "PremiumSurname");
const regularUser = new RegularUser("RegularName", "RegularSurname");
const user = new User("Обычный Имя", "Обычный фамилия");

console.log(getAccountInfo(premiumUser));  // Премиум аккаунт действителен до 19.02.2025
console.log(getAccountInfo(regularUser));  // Пользователь без премиум аккаунта
console.log(getAccountInfo(user));  // Тип пользователя не определен
