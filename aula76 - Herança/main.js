// Produto -> Aumento, desconto

// Camiseta = cor, Caneca = material

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (porcentagem) {
    this.preco += ((this.preco / 100) * porcentagem)
}   
Produto.prototype.desconto = function (porcentagem) {
    this.preco -= ((this.preco / 100) * porcentagem)
}


function Camiseta(nome, preco, cor) {
    //.call() linka com outra função construtora
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// Define o prototype da função construtura como o prototype da função Produto
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;   

// Sobescrevendo a função aumento do prototype
Camiseta.prototype.aumento = function (quantia) {
    this.preco += quantia
}


const camisa = new Camiseta('Regata', 10, 'vermelho');
camisa.desconto(10);
camisa.aumento(2);
console.log(camisa);




function Caneca (nome, preco, material, estoque) {
    //Herda os argumentos do produto
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if( typeof valor !== 'number') return;
            estoque = valor;
        },
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const xicara = new Caneca('Xícara', 15, 'Porcelana', 2)
console.log(xicara);