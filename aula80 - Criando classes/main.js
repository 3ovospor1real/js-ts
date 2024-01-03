class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar() {
        console.log(`${this.nome} está falando!`)
    }

}

let p1 = new Pessoa('João', 'Ribeiro');
console.log('pessoa 1: ', p1);


function Pessoa2 (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando!`)
}

let p2 = new Pessoa2('Nívia', 'Cristina');
console.log(`pessoa2: `, p2)
