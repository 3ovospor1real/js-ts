// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__ == Object.prototype
};

const objB = {
    chaveB: 'B',
};

const objC = new Object();
objC.chaveC = 'C';

// Object.setPrototypeOf(objA, objB)
//   Define o prototype como prototype do primeiro objeto o segundo objeto informado
Object.setPrototypeOf(objB, objC);
Object.setPrototypeOf(objA, objB);

console.log(objA.chaveC, objA.chaveB, objA.chaveA);

// Object.getPrototypeOf(obj)
let prototipo = Object.getPrototypeOf(objA);
console.log(prototipo);