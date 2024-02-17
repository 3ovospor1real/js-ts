const path = require('path');
const fs = require('node:fs');
const write = require('./modules/write');
const read = require('./modules/read');

const filePath = path.resolve(__dirname, 'file.json');

/*
const people = JSON.stringify([
    {nome: 'João'},
    {nome: 'Miguel'},
    {nome: 'Nívia'},
],'' , 2)

write(filePath, people);
*/


read(filePath)
.then(data => console.log(data))
.catch(e => console.error(e));