// Objetos
const eu = {
    nome: 'João',
    sobrenome: 'Ribeiro',
    idade: 15, 
}

// Funções construtoras
function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`A idade atual de ${this.nome} é ${this.idade} anos`)
        },
        incrementaIdade() {
            ++this.idade
        }
    }
}

let pessoa1 = criaPessoa('Nívia', 'Cristina', 16)

pessoa1['idade'] = 15
console.log(pessoa1)
