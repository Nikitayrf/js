// ---------------------------- Работа с Promise ------------------------
// ---------- Создание Promise ------------------------
// Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 сек и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен должен быть отклонен с сообщением об ошибке.

// let generateRandomNumber = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 10) + 1;
//             if (randomNumber) {
//                 resolve(randomNumber);
//             } else {
//                 reject('Ошибка генерации случайного числа');
//             }
//         }, 1000);
//     });
// };

// generateRandomNumber()
//     .then(number => console.log('Сгенерировано случайное число:', number))
//     .catch(error => console.log('Ошибка:', error));


// ------------ Создание Promise с fetch(url) -----------------------------------


// Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((responce) => responce.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     });
// }
// // https://dog.ceo/api/breeds/image/random
// // https://api.example.com/data
// fetchData('https://dog.ceo/api/breeds/image/random')
//     .then((data) => {
//         console.log('Полученные данные:', data);
//     }).catch((error) => {
//         console.log('Ошибка:', error);
//     });


// -------- Создание Promise с проверкой наличия файла и задержкой---------------


// Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и возвращает Promise, выполняющийся через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.

// Функция checkIfFileExists должна проверять есть ли файл возварщать boolean
// let checkIfFileExists = (file) => {

// };

// let checkFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExist = checkIfFileExists(file);
//             if (fileExist) {
//                 resolve('Файл существует');
//             } else {
//                 reject('Файл не существует');
//             }
//         }, 2000);
//     });
// };

// checkFileExists('example.txt')
//     .then((message) => {
//         console.log(message);
//     }).catch((err) => {
//         console.log('Ошибка', err);  // Ошибка Файл не существует
//     });


//  ------------------------ Пример функции then() -----------------------

// Пример работы then() без catch() без проверуи данных
// Напишите функцию calculateSum(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

// const calculateSum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;
//         resolve(sum);
//     });
// }

// calculateSum(3, 7)
//     .then((result) => {
//         console.log('Сумма чисел:', result);  // Сумма чисел: 10
//     });


// ------- Пример работы then() и catch() с проверкой данных

// Напишите функцию divideNumbers(a, b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.

// let divideNumbers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject('Невозможно делить на 0');
//         } else {
//             resolve(a / b);
//         }
//     });
// }

// divideNumbers(10, 2)
//     .then((result) => {
//         console.log('Результат деления:', result);  // Результат деления: 5
//     }).catch((err) => {
//         console.log('Ошибка:', err);
//     });


// ---------------------------- Цепочка Promis-ов ------------------------

// new Promise(function (resolve) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then(function (result) {
//     console.log(result);
// });


// --------------------- Пример функции finally() --------------------

// let processData = (data) => {
//     // Implemet your logic to process the data
//     // Return the processed result
// };

// let performOperation = (data) => {
//     return new Promise((resolve, reject) => {
//         // Perform the operation with the gata
//         let result = processData(data);

//         // Complete the Promise
//         if (result) {
//             resolve(result);
//         } else {
//             reject('Ошибка операции');
//         }
//     }).finally(() => {
//         console.log('Операция завершена');  // Операция завершена
//     });
// };

// performOperation('example')
//     .then((result) => {
//         console.log('Результат операции', result);
//     }).catch((err) => {
//         console.log('Ошибка:', err);  // Ошибка: Ошибка операции
//     });

// --------------------- Методы для работы с массивом промисов -----------------

// --------------------- Пример функции all() --------------------


// метод all() завершается с ошибкой, т.к. один Promise возвращает ошибку
// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
// ])
//     .then(console.log)
//     .catch(console.log)

// метод all() завершается корректно
// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
// ])
//     .then(console.log)  // (3) [1, 2, 3]
//     .catch(console.log)

// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресоов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL-адресом сервера, который первый ответил на запрос.


// --- Будет 4 ошибки. НЕ будет победителя, т.к. api не доступно ---
// let urls = [
//     'https://api.example.com/server1',
//     'https://api.example.com/server2',
//     'https://api.example.com/server3'
// ];

// let checkServerResponse = (urls) => {
//     let promises = urls.map((url) => fetch(url));

//     return Promise.race(promises).then((response) => {
//         return response.url;
//     });
// };

// checkServerResponse(urls)
//     .then((fastestServer) => {
//         console.log('Самый быстрый сервер', fastestServer);
//     }).catch((err) => {
//         console.log('Ошибка:', err);
//     });


//  --- Будет 3 ошибки. НЕ будет победителя, но главное что смогли обратиться --

let urls = [
    'https://dog.ceo/api/breeds/image/random',
    'https://api.example.com/server2',
    'https://api.example.com/server3'
];

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises).then((response) => {
        return response.url;
    });
};

checkServerResponse(urls)
    .then((fastestServer) => {
        console.log('Самый быстрый сервер', fastestServer);
    }).catch((err) => {
        console.log('Ошибка:', err);
    });
