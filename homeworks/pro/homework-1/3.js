/*3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

// const findElementByClass = (root, className) => {
//     // if
//     console.log(root);
// };

const findElementByClass = (rootElement, className) => {
    for (let element of rootElement.childNodes) {
        if (element.className === className) {
            return element;
        } else {
            if (element.hasChildNodes()) {
                const foundElement = findElementByClass(element, className);
                if (foundElement) {
                    return foundElement;
                }
            }
        }
    }
};

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
