function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - percentual * (this.preco / 100);
};

Produto.prototype.acrescimo = function (percentual) {
    this.preco = this.preco + percentual * (this.preco / 100);
};

const p1 = new Produto('Caneca', 100);
p1.desconto(13);
// console.log(p1)

// Literal
const p2 = {
    nome: 'Camisa',
    preco: 50,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.acrescimo(2);
//console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 2,
    },
    nome: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 'Caneta',
    }
});

p3.acrescimo(100);
console.log(p3);