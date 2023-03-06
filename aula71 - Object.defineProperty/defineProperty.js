// defineProperty() - defineProperties()
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: false, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Pode alterar?
        configurable: false, // Pode configurar a chave?
    })
    /*
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode alterar?
        configurable: false, // Pode configurar a chave?
    })
    */
}
/*
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000
delete p1.estoque // Não apaga porque "configurable" está definido como FALSE
console.log(p1);
*/

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let key in p1) {
    console.log(key);
}