// Atribuição por desestruturação
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// ... rest, spread
let [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);
console.log('======================================');

//arrays dentro de arrays
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const number = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [ , [ , , seis]] = number;


console.log(seis);