const path = require("path");
const write = require("./modules/write");
const read = require("./modules/read");

const caminhoArquivo = path.resolve(__dirname, 'test.json');

// const people = [
//     {nome: 'João', sobrenome: 'Ribeiro'},
//     {nome: 'Nívia', sobrenome: 'Cristina'},
//     {nome: 'Miguel', sobrenome: 'Ferreira'},
//     {nome: 'Gustavo', sobrenome: 'Lima'}
// ]

// write(people, caminhoArquivo)

async function readFile(path) {
    const data = await read(path);
    loadData(data);
}

function loadData(data) {
    data = JSON.parse(data)
    data.forEach(e => console.log(e['nome'], e['sobrenome']));
}

readFile(caminhoArquivo);
