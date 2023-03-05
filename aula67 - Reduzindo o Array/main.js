const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Some todos os números (reduce)
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor
    return acumulador
});

// console.log(total);

// Retorne um Array com os pares (filter)
const pares = numeros.reduce((acumulador, value) => {
    if(value % 2 === 0) acumulador.push(value);
    return acumulador;
}, []);

// console.log(pares);

// Retorne um array com o dobro dos valores (map)
const double = numeros.reduce((acumulador, value) => {
    acumulador.push(value * 2);
    return acumulador;
}, []);
// console.log(double);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Wallace', idade: 63}
]

// Retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, value) => {
    if(acumulador.idade > value.idade) return acumulador;
    return value;
})

console.log(maisVelha);