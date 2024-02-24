// -------------------------- Cookie ---------------------

// ----------- Установка cookie с сервера в браузер -----
// Напишите функцию setCookie(name, value, days), которая устанавливает cookie с указанным именем, значением и сроком действия в днях.

// const setCookies = (name, value, days) => {
//     let expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + days);

//     let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
//     document.cookie = name + '=' + cookieValue; // Самая важная часть добавляем значения в свойство cokkie глобального объекта
// };

// setCookies('username', 'John Doe', 7);
// setCookies('userinfo', 'Miser', 5);
// setCookies('ПОЛЬЗОВАТЕЛЬ', 'кири', 5);


// ------------- Получение cookie из браузера -------------------

// Напишите функцию getCookie(name), которая возвращает значение cookie с указанным именем.

// Для примера устанавливаем куки на прямую в document
// document.cookie = "username=John%20Doe"
// document.cookie = "userinfo=Miser";
// document.cookie = "ПОЛЬЗОВАТЕЛЬ=%D0%BA%D0%B8%D1%80%D0%B8";

// const getCookie = (name) => {
//     let cookies = document.cookie.split(';');  // Возвращаем значение свойства cookie
//     for (let cookie of cookies) {
//         let [cookieName, cookieValue] = cookie.trim().split('=');
//         if (cookieName === name) {
//             return decodeURIComponent(cookieValue);
//         }
//     }
//     return null;
// }

// let username = getCookie('username');
// console.log('Значение cookie "username":', username);  // Значение cookie "username: John Doe


// ------------- Удаление cookie из браузера -------------------

// Напишите функцию deleteCookie(name), которая удаляет cookie с указанным именем.

// Для примера устанавливаем куки на прямую в document
document.cookie = "username=John%20Doe"
document.cookie = "userinfo=Miser";
document.cookie = "ПОЛЬЗОВАТЕЛЬ=%D0%BA%D0%B8%D1%80%D0%B8";

const deleteCookie = (name) => {
    // Этот вариант не сработал, но имею ввиду
    // document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};

deleteCookie('username');