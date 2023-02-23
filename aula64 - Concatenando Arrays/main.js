const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'João');
const a3 = [...a1, 'João', ...a2, ...[7, 8, 9]]
// console.log(a3);


const o1 = { nome: 'João', sobrenome: 'Ribeiro'};
const o2 = { nome: 'Miguel', sobrenome: 'Ferreira'};
const o3 = [{...o1}, {...o2}];

console.log(o3);
