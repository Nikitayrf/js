// ------ Контекст this для стрелочных и глобальных функций ------

// Обычная функция
function regularFunction() {
    console.log(this);
}

// Стрелочная функция
const arrowFunction = () => {
    console.log(this);
};


// Глобальная функция выводит контекст выполнения, например, объект Window (в браузере) или объект Global (в Node.js)
// regularFunction();  // Window {window: Window, self: Window, document: document }


// Стрелочная функция выводит контекст выполнения, который был определен во время создания функции (лексический контекст)
// arrowFunction();  // Window {window: Window, self: Window, document: document }


// Отличия в this проявляются при использовании внутри объекта
const obj = {
    regularMethod: function () {
        console.log(this);
    },
    arrowFunction: () => {
        console.log(this);
    }
};

// Выводит объект obj, т.к. метод вызывается на объекте obj
obj.regularMethod();  // {regularMethod: ƒ, arrowFunction: ƒ}

// Выводит контекст выполнения, в котором была создана стрелочная функция (например, объект Window или объект Global)
obj.arrowFunction(); // Window {window: Window, self: Window, document: document }


// --- автоматическое подставление return в однострочных стрелочных функция --

const result = (a, b) => a + b;

const arr = [1, 4, 2, 5]
const arrMore3 = arr.filter(item => item > 3);
console.log(arrMore3);  // (2) [4, 5]