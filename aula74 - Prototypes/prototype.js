
function Pessoa (nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}
Pessoa.prototype.nomeCompleto = () => {
    this.nome + " " + this.sobrenome
}

let p1 = new Pessoa('João', 'Ribeiro');
let p2 = new Pessoa('Miguel', 'Ferreira')

let data = new Date();
console.log(p1.nomeCompleto());
console.dir(data);