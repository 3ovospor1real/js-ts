// defineProperty -> getters e setters

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        // value:
        get: () => {
            if(typeof estoquePrivado != 'number') {
                // Lança um erro se o valor passado não for number
                throw new TypeError("'estoque' must be a number");
            }
            return estoquePrivado
        },
        set: (valor) => {
            if(typeof valor != 'number') {
                // Lança um erro se o quando o valor for reescrito, não for um number
                throw new TypeError("'estoque' must be a number");
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 20);
p1.estoque = '51'
console.log(p1.estoque);