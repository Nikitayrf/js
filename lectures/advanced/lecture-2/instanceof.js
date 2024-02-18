// ----- Работа с оператором instanceof ------

// Определение класса Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Определение класса Dog, который наследуется от класса Animal
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

// Создание объектов
const animal = new Animal("Animal");
const dog = new Dog("Dog");

// Проверка с помощью insanceof
// Выводит true, т.к. animal является экземпляром класса Animal
console.log(animal instanceof Animal);

// Выводит true, т.к. dog является экземпляром класса Animal (наследуется от Animal)
console.log(dog instanceof Animal);

// Выводит true, т.к. dog является экземпляром класса Dog
console.log(dog instanceof Dog);


// Проверка на экземпляр родительского класса
// Выводит false, т.к. animal не является экземпляром класса Dog
console.log(animal instanceof Dog);

// Проверка экземпляра на принадлежность к несуществующему классу
// Cat is not defined - выводит ошибку т.к. Cat не существует
console.log(dog instanceof Cat); 