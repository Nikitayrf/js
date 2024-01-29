const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

// Создаём счётчик.
const counter2 = createCounter();
console.log(counter2());  // 1
console.log(counter2());  // 2

// Создадим ещё один счётчик. Каждый будет работать независимо.
const counter3 = createCounter();
console.log(counter3());  // 1
console.log(counter3());  // 2
console.log(counter3());  // 3
console.log(counter3());  // 4
console.log(counter3());  // 5

console.log(counter2());  // 3
console.log(counter3());  // 6