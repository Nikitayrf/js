'use strict';
// Работа this
const checkThis = function () {
    console.log(this);
};

checkThis();  /* Window {0: global, window: Window, self: Window, document: 
document, name: "", localion: Location, ...}*/
/* Сейчас this не ссылается на Window он имеет значение undefined */


/////

const checkThisInObject = {
    testProperty: true,
    checkThis: function () {
        console.log(this);
    },
};

checkThisInObject.checkThis();  // {testProperty: true, checkThis: ƒ}