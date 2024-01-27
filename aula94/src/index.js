import { nome as nome2, sobrenome2, idade, sum, Pessoa } from './module1';
import * as MyModule from './module2';

const nome = 'Nívia';
const pessoa = new Pessoa('Nívio', sobrenome2)

console.log(nome, nome2);
console.log(sobrenome2);
console.log(pessoa);
console.log(MyModule.random(0, 2))  