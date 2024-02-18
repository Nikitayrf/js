// // ------ Работа с защищенным свойством класса -----
// class AutoMobile {
//     _horsePowers = 0;  // Объявление защищенного свойства _horsePower со значением 0, используя синтаксис защищенных полей <-- -

//     set horsePowers(value) {  // Определение сеттера для свойства horsePowers <-- -
//         if (value < 0) throw new Error("Отрицательное количсество сил");  // проверка, что значение больше или равно 0, иначе выбрасывается исключение <--
//         this._horsePowers = value;  // Запись значения в свойство _horsePower
//     }

//     get horsePowers() {  // определение геттера для свойства horsePowers
//         return this._horsePowers; // возвращает значение свойства _horsePowers
//     }

//     constructor(power) {  // определение конструктора класса
//         this._horsePowers = power; // установка значения свойства _horsePowers при создании объекта  класса
//     }
// }

// // создаём новую машину
// let auto = new AutoMobile(100);  // Создание нового объекта класса AutoMobile и передача значения 100 в конструктор

// // // устанавливаем количество сил
// // auto.horsePowers = -10;  // установка значения свойства horsePowers на -10 вызывыет исключение "Отрицительное количество сил" <--


// // // А что будет если закоментировть сеттер set horsePowers()
// // auto.horsePowers = 10;  // свойство horsePowers не измениться будет 100, т.к. нет сеттера для возможности изменения защищенного свойства класса <-- -

// // А что будет если закоментировать геттер get horsePowers()
// console.log(auto.horsePowers);  // undefined мы не сможем получить значение свойства
// console.log(auto._horsePowers);  // 100

// // Если геттер и сеттер не закоментированы, то  свойство horsePowers доступно всегда
// console.log(auto.horsePowers);  // 100
// console.log(auto._horsePowers);  // 100


// ------ Работа с приватным свойством класса -----

// Приватные свойста - эти свойства начинаются со знака # и имеют защиту на уровне языка.

class AutoMobile {
    #horsePowers = 0;  // Объявление защищенного свойства _horsePower со значением 0, используя синтаксис приватных полей.

    set horsePowers(value) {  // <--
        if (value < 0) throw new Error("Отрицательное количсество сил");
        this.#horsePowers = value;
    }

    get horsePowers() {
        return this.#horsePowers;
    }

    constructor(power) {
        this.#horsePowers = power;
    }
}

// создаём новую машину
let auto = new AutoMobile(100);

// устанавливаем количество сил через сеттер <--
auto.horsePowers = 50;
console.log(auto.horsePowers);  // 50

// устанавливаем количество сил напрямую
// auto.#horsePowers = 10;  // Private field '#horsePowers' must be declared in an enclosing class // Получаем ошибку так как нет доступа к приватному полю #horsePowers