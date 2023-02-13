
function Pessoa(nome, sobrenome) {
    // Valor que não existe fora do objeto (propriedades privadas)
    const id = 123;
    
    // Método que não existe fora do objeto (métodos privados)
    const metodoInterno = function() {
        console.log('oi')
    }

    // Atributos ou métodos públicos
    this.nome = nome,
    this.sobrenome = sobrenome,

    this.fala = () => {
        console.log(this.nome + ' - Olá')
    }
}

const p1 = new Pessoa('João', 'Ribeiro')
const p2 = new Pessoa('Nívia', 'Cristina')
const p3 = new Pessoa('Miguel', 'Ferrerira')

p2.fala()