/* 3. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую. */

const createCalculator = (num = 0) => {
    let value = num;
    return {
        add: (num) => value += num,
        subtract: (num) => value -= num,
        result: () => value,
    }
}
const calc = createCalculator(5);
calc.add(10);
console.log(calc.result());
calc.subtract(3);
console.log(calc.result());