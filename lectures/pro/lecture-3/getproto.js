'use strict';
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model);  // dancing series

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model);  // vacuum cleaner

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto);  // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
