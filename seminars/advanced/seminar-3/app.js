/*
  Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в LocalStorage.

Приложение будет состоять из трёх основных страниц:

1. Страница регистрации:
1. Предлагает пользователю ввести логин и пароль.
2. После ввода данных, они сохраняются в LocalStorage.
3. Пользователь перенаправляется на страницу входа.
2. Страница входа:
1. Предлагает пользователю ввести логин и пароль.
2. Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
3. Если данные не совпадают, выводится сообщение об ошибке.
3. Страница приветствия:
1. Простое приветственное сообщение для авторизованного пользователя.
2. Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.*/

const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const error = document.querySelector('.error-message');
const registrationBtn = document.querySelector('.register-btn');

if (registrationBtn) {
    registrationBtn.addEventListener('click', () => {
        localStorage.setItem('username', userInput.value);
        localStorage.setItem('password', passwordInput.value);
        window.location.href = 'login.html';
    });

}

const loginBtn = document.querySelector('.login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        if (username === userInput.value && password === passwordInput.value) {
            window.location.href = 'welcome.html';
        } else {
            error.textContent = 'Ошибка авторизации';
        }
    });
}

const logoutBtn = document.querySelector('.logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}
