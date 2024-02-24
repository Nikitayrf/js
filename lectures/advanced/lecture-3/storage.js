// ------------ LocalStorage --------------------------------

// // Установка значения в LocalStorage
// localStorage.setItem("username", "John");
// localStorage.setItem("user", "Dima");


// // Получить значение из LocalStorage
// // let storageUsername = localStorage.getItem("username");
// // console.log("Значение из LocalStorage:", storageUsername);  // Значение из LocalStorage: John


// // Удаление значения из LocalStorage
// // localStorage.removeItem("username");


// // Проверка, что значение удалено
// // let storedUsername2 = localStorage.getItem("username");
// // console.log("Значение из LocalStorage:", storedUsername2);  // Значение из LocalStorage: null


// // Очистка localStorage
// localStorage.clear();



// // Проверка, что localStorage пуст
// console.log('LocalStorage', localStorage);  // Storage {length: 0}


// ------------ Создание счётчика посещений сайта с помощью localStorage --------------------

// // Проверка, есть ли значение счётчика в localStorage
// if (localStorage.getItem('counter')) {
//     // Если значение счётчика уже есть, увеличить его на 1
//     let counter = parseInt(localStorage.getItem('counter')) + 1;  // считываем значение из localStorage
//     localStorage.setItem('counter', counter.toString());  // устанавливаем новое значение в localStorage
// } else {
//     // Если значение счётчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// }

// // Выводим значение счётчика в консоль
// console.log('Счётчик посещений:', localStorage.getItem('counter'));

// // localStorage.clear(); // Отчистка значений счётчика посещений сайта


// ------------ Создание счётчика кликов на кнопку с помощью localStorage --------------------
// Проверяем, если ли значение счётчика в localStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счётчика и сохраняем его в localStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счётчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счётчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
})
