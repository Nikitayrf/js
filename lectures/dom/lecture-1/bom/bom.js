"use strict";
// ---------- Свойство navigator объекта window представляющее объект Navigator ------------

// // userAgent - Информация о браузере
// console.log(navigator.userAgent);  // AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0

// // cookieEnabled - включены ли cookies
// console.log(navigator.cookieEnabled); // true

// // doNotTrac - включена ли опция запрета на отслеживание
// console.log(navigator.doNotTrack);  // 1

// // geolocation - геолокация, в данном случае не активированная
// console.log(navigator.geolocation); // Geolocation {}

// ---------- Свойство location объекта window представляющее объект Location ---------

// Напишите функцию findClosestCity(userLocation, cities), которая принимает текущее местоположение пользователя в формате [latitude, longitude] и массив городв с их координатами в формате {name: 'City', location : [latitude, longitude]}. Функция должна вернуть название юлижайшего города пользователяю.

function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1;  // Разбивает координаты первого местоположения на широту и долготу
    const [lat2, lon2] = location2;  // Разбивает координаты второго местоположения на широту и долготу

    const toRed = value => (value * Math.PI) / 180;  // Преобразует значение в радианы
    const R = 6371; // Радиус Земли в километрах

    const dLat = toRed(lat2 - lat1);  // Вычисляет разницу широты в радианах
    const dLon = toRed(lon2 - lon1);  // Вычисляет разницу долготы в радианах
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +  // Вычиляет квадрат синуса половины разницы широты
        Math.cos(toRed(lat1)) * Math.cos(toRed(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);  // Вычисляет квадрат синуса половины разницы долготы и учитывает косинусы широты

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));  // Вычисляет центральный угол между двумя местоположениями
    const distance = R * c; // Вычисляет расстояние между местоположениями на сфере Земли

    return distance;  // Возвращает расстояние между местоположениями
}

function findClosestCity(cities) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {  // Проверяем поддержку геолокации в браузере
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLocation = [position.coords.latitude, position.coords.longitude];  // Получаем текущие координаты пользователя
                    let closestCity = null;  // Переменная для хранения ближайщего города
                    let shortestDistance = Infinity; // Переменная для хранения кратчайшего расстояния

                    cities.forEach(city => {  // Перебираем все города из массива cities
                        const distance = calculateDistance(userLocation, city.location);  // Вычисляем расстояние между местоположением пользователя и текущим городом
                        if (distance < shortestDistance) {  // Если расстояние меньше кратчайшего расстояния
                            closestCity = city.name;  // Записывает имя текущего города в closestCity
                            shortestDistance = distance;  // Записывает кратчайшее расстояние в shortestDistance
                        }
                    });

                    resolve(closestCity);  // Возвращает ближайший город
                },
                error => {
                    if (error.code === error.PERMISSION_DENIED) {  // Если пользователь отказал в доступе к геолокации
                        reject(new Error('Пользователь отказал в доступе к геолокации.'));  // Возвращает ошибку
                    } else {
                        reject(new Error('Ошибка приполучении местоположения.'));  // Возвращает ошибку
                    }
                }
            );
        } else {
            reject(new Error('Геолокация не поддерживается вашим браузером.')); // Возвращает ошибку
        }
    });
}

// Пример использования
const cities = [
    { name: 'Нью-Йорк', location: [40.7128, -74.0060] },
    { name: 'Лондон', location: [51.5074, -0.1278] },
    { name: 'Токио', location: [35.6895, 139.6917] },
    { name: 'Москва', location: [55.751244, 37.618423] },
    // ...другие города
];

findClosestCity(cities)
    .then(closestCity => {
        console.log(closestCity);  // Ожидаемый результат: название ближайшего города
    }).catch(err => {
        console.log(err.message);
    });