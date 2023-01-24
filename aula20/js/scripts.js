// constructor function para criar um objeto no padrão pessoa
const pessoa = function (name, surname, height, age) {
    return {
        name,
        surname,
        height,
        age
    }
}

//função para escrever na tela
const escrever = function (obj) {
    let resultado = document.createElement('p');
    resultado.innerHTML = `Nome: <strong>${obj.name}</strong> <br> Sobrenome: <strong>${obj.surname}</strong> <br> Altura: <strong>${obj.height}</strong> <br> Idade: <strong>${obj.age}</strong>`;
    document.body.appendChild(resultado);
}

// array onde ficarão armazenadas as pessoas
let dataBase = []

//função que envia os dados coletados para o array
function submit () {
    const nome = document.querySelector('input#nome');
    const altura = document.querySelector('input#altura');
    const sobrenome = document.querySelector('input#sobrenome');
    const idade = document.querySelector('input#idade');

    let people = pessoa(nome.value, sobrenome.value, altura.value, idade.value);
    dataBase.push(people);
    
    escrever(people)
}
