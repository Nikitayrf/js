'use strict';
/* Вы разрабатываете простой веб-интерфейс для отображения списка пользователей с сервера и возможности сортировки этих пользователей по имени. У вас уже есть функциональность для получения списка пользователей с сервера и отображения их в виде списка на странице.

https://jsonplaceholder.typicode.com/users
*/

//// Созданный class= "userList" смотри в index !

const promise = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())

// вернуть первый элемент, соответствующтий указанному селектор
const userList = document.querySelector('.userList');

// метод выводит список пользователей (значение name) в html
function printListOfUserInHTML(promise) {
    promise.then((arrOfObj) => arrOfObj.map((item) => userList.innerHTML +=item.name + '<br>'))
}

// метод выводить список пользователей (значение name) в html сортированным
function printListOfUserInHTMLSorted(promise) {
    promise.then((arrOfObj) => arrOfObj.sort((a, b) => a.name.localeCompare(b.name))),
    promise.then((arrOfObj) => arrOfObj.map((item) => userList.innerHTML +=item.name + '<br>'))
}


console.log(promise);
printListOfUserInHTML(promise);
printListOfUserInHTMLSorted(promise);
