'use strict';
/* Напишите программу, которая загружает данные с сервера с
использованием объекта XMLHttpRequest
1. Создайте функцию loadData(url), которая принимает аргумент url
(строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с
помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который
будет вызываться при изменении состояния запроса. Проверьте,
если успешно выполнен запрос и успешный статус ответа сервера, то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
4. Откройте запрос с помощью xhr.open("GET", url, true).
5. Отправьте запрос на сервер. */

function loadData(url) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status !== 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(`user : ${xhr.responseText}`);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadData('https://api.github.com/octocat');

// Вывод из функции onreadystatechange
/* 
Error 0: 
user : 
2 user : 
               MMM.           .MMM
               MMMMMMMMMMMMMMMMMMM
               MMMMMMMMMMMMMMMMMMM      ____________________________
              MMMMMMMMMMMMMMMMMMMMM    |                            |
             MMMMMMMMMMMMMMMMMMMMMMM   | Keep it logically awesome. |
            MMMMMMMMMMMMMMMMMMMMMMMM   |_   ________________________|
            MMMM::- -:::::::- -::MMMM    |/
             MM~:~ 00~:::::~ 00~:~MM
        .. MMMMM::.00:::+:::.00::MMMMM ..
              .MM::::: ._. :::::MM.
                 MMMM;:::::;MMMM
          -MM        MMMMMMM
          ^  M+     MMMMMMMMM
              MMMMMMM MM MM MM
                   MM MM MM MM
                   MM MM MM MM
                .~~MM~MM~MM~MM~~.
             ~~~~MM:~MM~~~MM~:MM~~~~
            ~~~~~~==~==~~~==~==~~~~~~
             ~~~~~~==~==~==~==~~~~~~
                 :~==~==~==~==~~
*/