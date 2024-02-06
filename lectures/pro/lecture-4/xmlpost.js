'use strict';
// XHR POST запрос
// Создадим объект ForData.
const formData = new FormData();

// Добавим в него два наших пола.
formData.append('name', 'Slava');
formData.append('surname', 'Belkin');

// Для создания запроса сначала нужно создать объект XMLHttpRequest, конструктор вызывается без аргументов.
const xhr = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...), второй адрес, куда нужно отправить запрос. У данного метода есть ещё аргументы, которые мы рассмотрим позже. В данном случае мы создадим POST запрос на тестовый сервер https://httpbin.org/post.
xhr.open('POST', 'https://httpbin.org/post');

// Отправляем запрос на сервер. Метод send() может принимать один аргумент - это тело запроса, если оно есть. Отправляет POST запрос, поэтому передаем в качестве аргумента объект FormData.
xhr.send(formData);

// После отправки запроса нам нужно использовать методы слушатели, которые будут асинхронно выполнены при наступлении соответствующего собятия. Это методы onload, onerror и onprogress - мы сами определяем их функции.
// onload - функция будет вызвана, когда сервер вернёт ответ. Это может быть положительный ответ сервера с кодом 200 (все хорошо), так и ошибка, например страница не найдена, тогда код будет 404. Мы должны обрабатывать такие ситуации сами.
xhr.onload = function () {
    if (xhr.status != 200) { // если статус не 200, то произошла ошибка
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(`user : ${xhr.response}`);  // response - это ответ сервера
    }
};
// oneprogress - функция будет вызываться пока запрос находится в процессе, и позволет ослеживать ход процесса отправки запроса и получения ответа от сервера. Бывает полезна при отладке сложных запросов.
xhr.onprogress = function (event) {
    console.log(`Get from server: ${event.loaded} bytes`);
};
// onerror - функция будет вызываться, если в запросе пошло что-то не так. Например нет соединения с сервером или ошибка в адресе запроса.
xhr.onerror = function () {
    console.log("Request error");
};

// Вывод из функции onprogress.
// "Get from server: 1067 bytes"

// Вывод из функции onload.

// "user : {
//   'args': {},
//   'data': '',
//   'files': {},
//   'form': {
//     'name': 'Slava', <----- Внимание в сервера пришёл ответ содержащий ключ/значение
//     'surname': 'Belkin' <----Внимание в сервера пришёл ответ содержащий
//   },
//   'headers': {
//     'Accept': '*/*',
//     'Accept-Encoding': 'gzip, deflate, br',
//     'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6',
//     'Content-Length': '240',
//     'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary0B84S3VcUP9Cu8YG',
//     'Dnt': '1',
//     'Host': 'httpbin.org',
//     'Origin': 'https://cdpn.io',
//     'Referer': 'https://cdpn.io/',
//     'Sec-Ch-Ua': '\'Not A(Brand\';v=\'99\', \'Google Chrome\';v=\'121\', \'Chromium\';v=\'121\'',
//     'Sec-Ch-Ua-Mobile': '?0',
//     'Sec-Ch-Ua-Platform': '\'Windows\'',
//     'Sec-Fetch-Dest': 'empty',
//     'Sec-Fetch-Mode': 'cors',
//     'Sec-Fetch-Site': 'cross-site',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
//     'X-Amzn-Trace-Id': 'Root=1-65bfd340-243f62f407f2bd1775078b04'
//   },
//   'json': null,
//   'origin': '41.141.208.65',
//   'url': 'https://httpbin.org/post'
// }
// "

///
// Создан объект xhr и был выполнен запрос, но дальше он нам не нужен, прервем его.
xhr.abort();