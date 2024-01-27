const nome = 'João';
const sobrenome = 'Ribeio';
const idade = 16;

function sum (n1, n2) {
    return n1 + n2;
}

export class Pessoa {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    }
}


export { nome, sobrenome as sobrenome2, idade, sum,  }