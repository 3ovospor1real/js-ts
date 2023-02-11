// Fabric Functions
// Fabric function 
function criaPessoa (nome, sobrenome, altura, peso) {
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
           return (`${nome} está falando sobre ${assunto}`);
        },

        altura,
        peso,
        // Getter
        get imc(){
            let i = (this.peso / (this.altura ** 2));
            return i.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Joâo', 'Ribeiro');
const p2 = criaPessoa('Nívia', 'Cristina', 1.65, 60);

p1.nomeCompleto = 'Miguel Ferreira da Silva'

console.log(`Nome: ${p1.nome}`)
console.log(`Sobrenome: ${p1.sobrenome}`)