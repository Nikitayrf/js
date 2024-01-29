'use strict';

function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('Молодец угадал');
    } else {
        console.log('Не угадал');
    }
}

function puzzle() {
    askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает, тот слезы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом');
}
