// Object.getOwnPropertyDescriptor(obj, prop)
// Retorna o descritor da propiedade de um objeto

const produto = { nome: 'Produto', preco: 1.8,};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))