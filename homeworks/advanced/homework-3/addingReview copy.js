/* 
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
*/


// ---------- Добавление отзыва --------------------

const productNameInput = document.querySelector('.productname-input');
const reviewInput = document.querySelector('.review-input');

// const initialJson = '[{"id":1708971051521,"productname":"заголовок 1","review":"текст 1"},{"id":1708971051522,"productname":"заголовок 2","review":"текст 2"},{"id":1708971051523,"productname":"заголовок 3","review":"текст 3"}]';

const initialJson = '[]';

// const lsKey = "reviews";
const lsKey = productNameInput.value;

if (!localStorage.getItem(lsKey)) {
    localStorage.setItem(lsKey, initialJson);
}

const reviewsfromLS = JSON.parse(localStorage.getItem(lsKey));
console.log(reviewsfromLS);  // (6) [{…}, {…}, {…}, {…}, {…}, {…}]



const addBtn = document.querySelector('.addreview-btn');
if (addBtn) {
    addBtn.addEventListener('click', () => {
        // присваиваем имя продукту из поля ввода
        const productname = productNameInput.value;
        const review = reviewInput.value;

        // проверка что введены значения
        if (!productname || !review) {
            alert('Вы ввели не все данные');
            return;
        }
        // создание нового отзыва
        const newReview = {
            id: Date.now(),
            productname,
            review,
        };
        reviewsfromLS.push(newReview);
        localStorage.setItem(lsKey, JSON.stringify(reviewsfromLS));
        // window.location.href = 'viewReviews.html'
    });
}











// // localStorage.setItem('123', 'good');

// // let reviewList = JSON.parse(localStorage.getItem('123')) || [];
// // let allRows = JSON.parse(localStorage.getItem('123')) || [];
// // console.log(allRows);
// // let allRows = [];
// if (addReviewBtn) {
//     addReviewBtn.addEventListener('click', () => {
//         let allRows = JSON.parse(localStorage.getItem(productNameInput.value)) || [];


//         allRows.push(reviewInput.value);
//         localStorage.setItem(productNameInput.value, JSON.stringify(allRows));
//         reviewInput.value = '';
//         productNameInput.value = '';
//         window.location.href = 'viewReviews.html'
//         // console.log(test);
//     })
// }


// ------------- Просмотр отзывов --------------------

// Вывести значения по ключам из localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)));
// }

// Вывести ключи из localStorage
// for (let key of Object.keys(localStorage)) {

//     console.log(key);
// }





































// if (localStorage.getItem(productNameInput))
//     allRows = JSON.parse(localStorage.getItem(productNameInput));

// allRows.push(reviewInput);

// localStorage.setItem(productNameInput, JSON.stringify(allRows))

// console.log(reviewList);

// const updateShoppingList = () => {
//     // reviewList.innerHTML = "";

//     reviewList.forEach((item) => {
//         const reviewItem = document.createElement("li");
//         reviewItem.textContent = item;
//         reviewList.push(reviewItem);
//     });

//     localStorage.setItem('sdfdsf', JSON.stringify(reviewList));
// };


// addReviewBtn.addEventListener('click', () => {

//     const newItem = reviewInput.value.trim();

//     if (newItem !== "") {
//         // Добавляем новый пункт в список покупок
//         reviewList.push(reviewList);
//         reviewInput.value = "";
//         updateShoppingList();
//     }

//     console.log(reviewList);


//     localStorage.setItem(productNameInput.value, reviewInput.value);
//     // window.location.href = 'viewReviews.html'
// })


// updateShoppingList();

// for (const iterator of localStorage) {
//     console.log(iterator);
// }
// console.log(localStorage.key(0));



// for (let i = 0; i < localStorage.length; i++) {
//     const reviewCon
//     console.log(localStorage.getItem(localStorage.key(i)));
// }

// for (const key in localStorage) {
//     console.log(key);
//     // console.log(localStorage.getItem(key));
// }