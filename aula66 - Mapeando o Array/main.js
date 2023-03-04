
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const numerosx2 = numeros.map((value) =>  value * 2)

// Dobre somente os números pares
const numerosparx2 = numeros.map((value) => {
    if(value % 2 == 0){
        return value * 2; 
    }
    return value
})
// console.log(numerosx2, numerosparx2);

///////////////////////////////////////////////////////////
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

// Para cada elemento retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => {
    let newObj = {...obj}
    return newObj.nome
});

// console.log(nomes);

// Remove apenas a chave "nome" do objeto
const idades = pessoas.map(obj => {
    let newObj = {...obj}
    delete newObj.nome
    return newObj
})

// console.log(idades);

// Adicione uma chave de id no objeto
const id = pessoas.map((obj, index) => {
    let newObj = {...obj}
    newObj.id = index + 1;
    return newObj
})

console.log(id, pessoas);
