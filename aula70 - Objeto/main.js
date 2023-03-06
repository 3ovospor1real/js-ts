const objeto = {
    nome: 'João',
    sobrenome: 'Ribeiro',
    idade: 15,
    get anoNascimento () {
        let data = new Date();
        let ano = data.getFullYear() - this.idade
        return ano
    }
}
/*
let chave = 'idade'
console.log(objeto.nome);
console.log(objeto['sobrenome']);
console.log(objeto[chave]);
*/

/*
const objeto2 = new Object()
objeto2.nome = 'Miguel'
objeto2.sobrenome = 'Ferreira'

console.log(objeto2);
*/

delete objeto.idade
console.log(objeto)