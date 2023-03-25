// Object.assign(target, ...sources)

const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, { material: 'porcelana',});

caneca.nome = 'Outro nome';
caneca.preco = 2.4;
console.log(produto)
console.log(caneca)