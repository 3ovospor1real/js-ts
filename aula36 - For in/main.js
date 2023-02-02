const pessoa = {
    nome: 'Joao',
    sobrenome: 'Ribeiro',
    idade: 15
}

for(let key in pessoa) {
    console.log(pessoa[key])
}