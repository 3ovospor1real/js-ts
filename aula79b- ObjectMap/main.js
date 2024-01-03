const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

/*
const novasPessoas = {};
for (const iterator of pessoas) {
    let {id} = iterator
    console.log('id: ', id)
    novasPessoas[id] = {...iterator}
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    let {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
    
}
console.log(novasPessoas.get(1));

for(const [identifier, {id, nome}] of novasPessoas) {
    console.log(`identifier: ${identifier} \nid: ${id} \nnome: ${nome} \n`)
}

