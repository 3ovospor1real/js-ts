const pessoa = {
    // nome: 'João',
    sobrenome: 'Ribeiro',
    idade: 15,
    endereco: {
        cidade: 'Svm',
        bairro: 'Rosário',
        rua: 'Av. Dom Pedro II'
    }
}

// Atribuição via desestruturação
const {nome: n} = pessoa
console.log(n)