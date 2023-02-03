// Arguments que sustenta todos os argumentos enviados (somente quando declarada com function)

/*
function funcao() {
    let total = 0;
    for (const i of arguments) {
        total += i
    };

    console.log(total);
}
funcao(1,3,4)
*/

/*
function funcao(a, b, c, d ,e ,f) {
    console.log(a, b, c, d, e ,f);
}
funcao(1, 2, 3);
*/

// Definindo valores padrão
/*
function soma (a, b = 2, c = 4){
    console.log(a + b + c)
}
soma(2, undefined, 20)
*/

// Atribuição via desestruturação (Objeto)
/*
function funcao ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}

let obj = {
    nome: 'João',
    sobrenome: 'Ribeiro',
    idade: 15,
}

funcao(obj);
funcao({nome: 'João', sobrenome: 'Ribeiro', idade: 15,})
*/

// Atribuição via desestruturação (Array)
/*
function funcao ([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao(['João', 'Ribeiro', 15])
*/

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }

    console.log(acumulador);
}
conta('+', 0, 10, 20, 30, 40);