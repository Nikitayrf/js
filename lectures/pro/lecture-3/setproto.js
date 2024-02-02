'use strict';
// Объект робот-пылесос.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойства model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,

    // Добавляем новый метод.
    startWipe: function () {
        // Добавим дополнитлеьный вывод, чтобы знать чей метод мы вызывали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },

    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};


// Создадим нашего нового робота:
// Объект робот-пылесос.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Blues-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// Теперь можно попробовать вызвать методы наших роботов, проверяя кто является их прототипом:
// Объявление базовового родительского объекта смотри в листинг 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Djaiv смотри в листинге 5.
// Объявление MusicSeries смотри в листинге 10.
// Объект Blues смотри в листинге 11.
if (Object.getPrototypeOf(Djaiv).model === "dancing series") {
    Djaiv.startCleaning(); // I am the method of Djaiv
    // I am Djaiv,and I am cleaning... I have been started:  1 times.
}

if (Object.getPrototypeOf(Blues).model === 'music series') {

    Blues.startWipe();  // I am the method of MusicSeries
    // I am starting to wipe the floor...
}

/* Если мы не будем проверять прототип и просто вызовем метод чужого прототипа
мы, естественно, получим ошибку.*/
Djaiv.startWipe();  // Uncaught TypeError: Djaiv.startWipe is not a function