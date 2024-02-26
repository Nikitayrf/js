// /*
// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
// 2. При закрытии страницы (вкладки), необходимо выводить
// всплывающее окно или диалоговое окно браузера и
// спросить, уверен ли пользователь, что хочет покинуть
// страницу?
// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.
// */

// const heightWindow = document.querySelector('.height>span');
// const widthWindow = document.querySelector('.width>span');

// heightWindow.textContent = window.innerHeight;
// widthWindow.textContent = window.innerWidth;

// window.addEventListener('resize', () => {
//     heightWindow.textContent = window.innerHeight;
//     widthWindow.textContent = window.innerWidth;
// });

// // 2. При закрытии страницы (вкладки), необходимо выводить
// // всплывающее окно или диалоговое окно браузера и
// // спросить, уверен ли пользователь, что хочет покинуть
// // страницу?

// window.addEventListener('beforeunload', (event) => {
//     event.preventDefault();  // сами разбереимся
//     alert('Хотите ли покинуть страницу');
// })

// // 3. Используйте объект history для управления историей
// // переходов на веб-странице. Создайте кнопки "Назад" и
// // "Вперед" для перемещения по истории.
// // */

// const backButton = document.querySelector('.backButton');
// const forwardButton = document.querySelector('.forwardButton');

// backButton.addEventListener('click', () => {
//     window.history.back();
// });

// forwardButton.addEventListener('click', () => {
//     window.history.forward();
// });

// Задание 2
// Даны html и css:
// <style>
//   .box {
//     width: 100px;
//     height: 100px;
//     background-color: lightblue;
//     margin: 10px;
//     display: inline-block;
//   }
// </style>

// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//   <div class="box">1</div>
//   <div class="box">2</div>
//   <div class="box">3</div>
// </div>

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
// 100x100 пикселей. Этот элемент должен иметь класс .box
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).
// - При нажатии на кнопку "Удалить элемент" удаляется
// последний добавленный элемент, если таковой имеется.
// - При нажатии на кнопку "Клонировать элемент" создается
// копия последнего добавленного элемента и добавляется на
// страницу. Если последнего добавленного элемента нет на
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.

// const wrapContainer = document.querySelector('.wrapper');
// const container = wrapContainer.querySelector('#container');

// wrapContainer.addEventListener('click', (event) => {
//     if (event.target.closest('#addButton')) {
//         const box = document.createElement('div');
//         box.classList.add('box');
//         box.textContent = container.children.length + 1;
//         container.append(box);
//     } else if (event.target.closest('#removeButton')) {
//         container.lastElementChild?.remove();
//     } else if (event.target.closest('#cloneButton')) {
//         if (container.children.length > 0) {
//             const clone = container.lastElementChild.cloneNode(true);
//             container.append(clone);
//         }
//     }
// })

/* 
Задание 3.
Необходимо создать страницу со списком статей.
Каждая статья состоит из id, заголовка, текста статьи.
id - будем брать из unix timestamp.
Необходимо подготовить список статей в JSON-формате,
которые будут выводиться на странице при первом ее 
открытии.
Необходимо реализовать возможность удаления статьи.
Необходимо реализовать возможность добавления статьи.
Необходимо реализовать возможность изменения статьи,
ввод данных можно реализовать через prompt.
Статьи должны сохраняться в локальное хранилище 
браузера, и должны быть доступны после перезагрузки 
страницы.
*/

// const initialJson = JSON.stringify([
//     {
//         id: Date.now(),
//         title: 'заголовок 1',
//         text: "текст 1"
//     },
//     {
//         id: Date.now(),
//         title: 'заголовок 2',
//         text: "текст 2"
//     },
//     {
//         id: Date.now(),
//         title: 'заголовок 3',
//         text: "текст 3"
//     }
// ]);

const initialJson = '[{"id":1708971051521,"title":"заголовок 1","text":"текст 1"},{"id":1708971051522,"title":"заголовок 2","text":"текст 2"},{"id":1708971051523,"title":"заголовок 3","text":"текст 3"}]';

const lsKey = "articles";

if (!localStorage.getItem(lsKey)) {
    localStorage.setItem(lsKey, initialJson);
}

const articles = JSON.parse(localStorage.getItem(lsKey));
const ulList = document.querySelector('.news');
ulList.innerHTML = articles.map(createArticleHTML).join("");

function createArticleHTML(article) {
    return `<li id="${article.id}">
        <h2 class="title">${article.title}</h2>
        <p class="text">${article.text}</p>
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
    </li>`;
}

const deleteBtn = document.querySelector('.delete-btn');

ulList.addEventListener("click", ({ target }) => {
    const liItem = target.closest("li");
    if (target.closest(".delete-btn")) {
        liItem.remove();

        const articleIndex = articles.findIndex(article => article.id === +liItem.getAttribute("id"));
        articles.splice(articleIndex, 1);

        localStorage.setItem(lsKey, JSON.stringify(articles));
    } else if (target.closest(".edit-btn")) {
        const title = prompt("Введите название статьи");
        const text = prompt("Введите текст статьи");

        if (!text || !title) {
            alert("Не ввели данные");
            return;
        }
        const article = articles.find(article => article.id === +liItem.getAttribute("id"));

        article.title = title;
        article.text = text;

        localStorage.setItem(lsKey, JSON.stringify(articles));

        liItem.querySelector(".title").textContent = title;
        liItem.querySelector(".text").textContent = text;
    }
})


const addBtn = document.querySelector('.addnews-btn');

addBtn.addEventListener('click', () => {
    const title = prompt("Введите название статьи");
    const text = prompt("Введите текст статьи");

    if (text && title) {
        const newArticle = {
            id: Date.now(),
            title,
            text,
        };
        articles.push(newArticle);
        localStorage.setItem(lsKey, JSON.stringify(articles));
        ulList.insertAdjacentHTML('beforeend', createArticleHTML(newArticle));
    } else {
        alert("Вы неверно ввели данные статьи");
    }
})

/* 
Необходимо реализовать возможность изменения статьи,
ввод данных можно реализовать через prompt.*/

