/* Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

const cooks = new Map();
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

const disheAndTheirCooks = new Map();
disheAndTheirCooks.set("Маргарита", "Виктор")
disheAndTheirCooks.set("Пепперони", "Виктор")
disheAndTheirCooks.set("Филадельфия", "Ольга")
disheAndTheirCooks.set("Калифорния", "Ольга")
disheAndTheirCooks.set("Тирамису", "Дмитрий")
disheAndTheirCooks.set("Чизкейк", "Дмитрий")

const orders = new Map();

const clients = new Map();
const client1 = {
    name: "Алексей"
};

let clients1Order = new Set();
clients1Order.add("Маргарита");
clients1Order.add("Пепперони");

orders.set(client1, clients1Order);


const client2 = {
    name: "Мария"
}

let clients2Order = new Set();

clients2Order.add("Калифорния");
clients2Order.add("Маргарита")
orders.set(client2, clients2Order);

const client3 = {
    name: "Ирина"
}

let clients3Order = new Set();
clients3Order.add("Чизкейк");
orders.set(client3, clients3Order);


console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);

console.log(`Пицца "Маргарита" - повар: ${disheAndTheirCooks.get("Маргарита")}`);
console.log(`Пицца "Пепперони" - повар: ${disheAndTheirCooks.get("Пепперони")}`);
console.log(`Суши "Филадельфия" - повар: ${disheAndTheirCooks.get("Филадельфия")}`);
console.log(`Суши "Калифорния" - повар: ${disheAndTheirCooks.get("Калифорния")}`);
console.log(`Тирамису - повар: ${disheAndTheirCooks.get("Тирамису")}`);
console.log(`Чизкейк - повар: ${disheAndTheirCooks.get("Чизкейк")}`);

console.log(`Клиент ${client1.name} заказал: ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказал: ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказал: ${[...orders.get(client3)]}`);