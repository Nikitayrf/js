// ---- Разработка системы регистрации пользователей для веб приложения. ---

// Глобальный объект
const App = {};

// Защищенные свойства класса
class User {
    #name;  // защищенное свойство #name

    constructor(name) {
        this.#name = name;
    }

    get getName() {
        return this.#name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if (!name || !email || !password) {
            throw new Error('Не все данные введены');
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName,
            email, password
        };

        // Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер

        console.log('Пользователь успешно зарегистрирован:', user.getName);
        console.log('Дополнительные данные пользователя', userData);
    } catch (error) {
        console.error('Ошибка регистрации', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
}

// Вызов функции регистрации пользователя

// Успешная регистраци пользователя
// App.registerUser('John Doe', 'john@example.com', 'password123',);
/* 
Пользователь успешно зарегистрирован: John Doe
Дополнительные данные пользователя {name: 'John Doe', email: 'john@example.com', password: 'password123'}
Завершение регистрации пользователя
*/


// НЕ успешная регистрация пользователя
App.registerUser('John Doe', '', 'password456');
/* 
Ошибка регистрации Не все данные введены
Завершение регистрации пользователя
*/