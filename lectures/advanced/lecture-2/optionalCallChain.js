//  ----- Опциональная цепочка вызовов методов и оператор нудевого слияния -----
// Объект с информацией о пользователе
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'john@example.com',
        phone: '+1234567890'
    }
};

// Опциональная цепочка вызовов методов

// Опциональная цепочка вызовов - существует
const email = user?.contacts?.email;
console.log(email);  // john@example.com

// Опциональная цепочка вызовов - НЕ существует
const emailFail = user?.con?.email;
console.log(emailFail);  // undefined

// Если значение не определено или равно null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default value';
console.log(defaultValue); // Выводит 'Default value', т.к. свойство otherValue не существует в объекте user

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName);  // Выводит '123 Main St', т.к. свойство 'street' существует в объекте user.address