function Produto (nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        }
    })
}

const p2 = new Produto('Camiseta', 20, 3);
console.log(p2);