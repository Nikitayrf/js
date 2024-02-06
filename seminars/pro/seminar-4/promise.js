'use strict';
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
  // reject запустит вторую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // не будет запущена
//     error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
//   );

// Получение объекта Promise с сервера 
// const promise = fetch('https://jsonplaceholder.com/users');
// console.log(promise);


// const promiseResult = promise.then(
//     (response) => response.json(),  // обработает успешное выполнение
//     (error) => console.log('Ошибка') // <- работает эта строка /* обработает ошибку */
// );

// console.log(promiseResult);

let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
  });

  console.log(promise);