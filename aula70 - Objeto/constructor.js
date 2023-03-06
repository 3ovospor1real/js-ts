// Constructor Functions
function Pessoa (nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade

    Object.freeze(this) // Nenhum objeto feito a partir dessa função poderá ser modificado
}

const pessoa1 = new Pessoa ('João', 'Ribeiro', 15);
Object.freeze(pessoa1) // Não permite modificação desse objeto específico
pessoa1.nome = 'Jaum'
console.log(pessoa1)

const pessoa2 = new Pessoa ('Miguel', 'Ferreira', 14)

// Fabric Functions
function criarPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa3 = criarPessoa('Nívia', 'Cristina', 16)

// console.log(pessoa3.nomeCompleto)
// console.log(pessoa3)
