// --------  Работа с window  ------
// Показать объект window
// console.log(window); // Window {window: Window, self: Window, document: document,}


// Открыть новое окно в браузере
// const newWindow = window.open('https://www.example.com', 'blank');

// Проверка, открыто ли окно
// const newWindow = window.open('https://www.example.com', 'blank') !== null;
// console.log(newWindow); // true

// Закрыть текущее окно
// window.close();


// Изменение размеров окна на 800x600px
// window.resizeTo(800, 600);


// Перенаправить на другую страницу
// window.location.href = "https://www.example.com";

// Показать свойство window.location
// console.log(window.location);

// Получить ширину окна
// const windowWidth = window.innerWidth;
// console.log(windowWidth);

// Получить высоту окна
// const windowHeight = window.innerHeight;
// console.log(windowHeight);

// alert() это метод объекта window
// console.log(alert() === window.alert());  // true

// alert('Можно так');
// window.alert('А можно и так');


// -------- Работа с window.window  -----

// Проверить работает ли окно
// const isWindowOpen = window.window.open('https://www.example.com') !== null;
// console.log(isWindowOpen);

// Получить высоту окна
// const windowHeight = window.window.innerHeight;
// console.log(windowHeight);

// Перенаправить на другую страницу
// window.window.location.href = 'https://www.example.com';


// -------- Работа с self  -----

// // Открывает новое окно браузера c использованием self
// const newWindowSelf = self.open('https://www.example.com', '_blank');

// // Закрывает текущее окно с использованием self
// self.close();

// // Изменить размер окна на 800x600 px с использованием self
// self.resizeTo(800, 600);

// // Перенаправить на другую страницу с использованием self
// self.location.href = 'https://www.example.com';


// -------- Работа с frames  -----

// // Получить ссылку на фрейм по индексу
// // const frame = frames[0];
// // frame = 'https://www.example.com';
// window.frames[0] = 'https://www.example.com';

// // Перенаправление на другую страницу
// frames[0].location.href = 'https://www.example.com';

// // Получает колличество фреймов на странице
// const frameCount = frames.length

// // Получает доступ к родительскому окну из фрейма
// const parentWindow = window.parent;


// -------- Работа с globalThis  -----

// // Получаем глобальный объект, содержит значение глобального this
// const globalObject = globalThis;
// console.log(globalThis);  // Window {window: Window, self: Window, document: document}

// // Определить новую глобальную переменную
// globalThis.newVariable = 'Hello World';

// // Получаем доступ к глобальной переменной из разных сред исполнения
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker';
// console.log(globalVariable);  // Window


// -------- Глобальная переменная var, const, let  -----

// // var
// var glob = 5;
// // function
// function increment(val) {
//     return val + 1;
// }
// console.log(window.glob);  // 5
// console.log(window.increment);
// /*
// ƒ increment(val) {
//     return val + 1;
// }
// */

// // const и let
// const local = 5;  // <--
// let localLet = 10; // <-- --
// console.log(local);  // 5
// console.log(localLet);  // 10
// console.log(window.localLet);  // undefined <-- -- потому что не явдлется глобальной переменной, не достпна через window


// -------- Глобальная функция и стрелочная функция let  -----
// let localFunc = () => 'localFunc';  // <----
// console.log(window.local);  //undefined  <-- потому что переменная local объявленная через let не глобальный объект, её нет в window


// console.log(localFunc());  // localFunc <---- доступная для вызова
// console.log(window.localFunc); // undefined <---- но не доступна через window, потому что стрелочная функция () => - не является глобальным объектом, её нет в window

// function globalFunc() {
//     console.log("Функция доступна из глобального объекта window");
// }
// console.log(window.globalFunc);  // глобальна функция, доступна из глобального объекта window
// /*
// ƒ globalFunc() {
//     console.log("Функция доступна из глобального объекта window");
// }
// */

// -------- Глобальный свойства window  -----

// Через window доступны методы объекта Symbol и  объекта Array
// console.log(window.Symbol.for);  // for() { [native code] }
// console.log(window.Symbol.iterator);  // Symbol(Symbol.iterator)
// console.log(window.Array.from);  // from() { [native code] }