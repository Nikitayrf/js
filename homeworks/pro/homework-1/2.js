/*2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

const createCounter = () => {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        result: () => count,
    }
}
const counter = createCounter();
counter.increment();
console.log(counter.result());  // 1
counter.increment();
console.log(counter.result());  // 2

counter.decrement()
console.log(counter.result());  // 1