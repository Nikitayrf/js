// -------------- Генератор -----------------------

// Генератор для генерации последовательности чисел

function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

// Создаём экземпляр генератора
const generator = numberGenerator();

// Генерируем итератор, который будет возвращать следующее число при каждом выхове next()
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2
console.log(generator.next().value);  // 3
console.log(generator.next().value);  // 4


const next = generator.next();
/* 
Object
    done: false
    value: 5
    [[Prototype]]: Object
*/