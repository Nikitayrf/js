'use strict';
const getUser = async (url) => {
    // Делаем запрос, и ждём его результат (указание await), который будет сохранен в константу response.
    const response = await fetch(url);
    // Выполняем ещё один асинхронный метод, преобразования в текст, а также ждём результат, который сохраняется в константу пользователь.
    const user = await response.text();
    console.log(user);
}

getUser('https://api.github.com/octocat');

/*                MMM.           .MMM
               MMMMMMMMMMMMMMMMMMM
               MMMMMMMMMMMMMMMMMMM      _____________________
              MMMMMMMMMMMMMMMMMMMMM    |                     |
             MMMMMMMMMMMMMMMMMMMMMMM   | Speak like a human. |
            MMMMMMMMMMMMMMMMMMMMMMMM   |_   _________________|
            MMMM::- -:::::::- -::MMMM    |/
             MM~:~ 00~:::::~ 00~:~MM
        .. MMMMM::.00:::+:::.00::MMMMM ..
              .MM::::: ._. :::::MM.
                 MMMM;:::::;MMMM
          -MM        MMMMMMM
          ^  M+     MMMMMMMMM
              MMMMMMM MM MM MM
                   MM MM MM MM
                   MM MM MM MM
                .~~MM~MM~MM~MM~~.
             ~~~~MM:~MM~~~MM~:MM~~~~
            ~~~~~~==~==~~~==~==~~~~~~
             ~~~~~~==~==~==~==~~~~~~
                 :~==~==~==~==~~
*/