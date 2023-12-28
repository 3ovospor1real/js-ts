const speak = {
    speak() {
        console.log(`${this.nome}, está falando`);
    }
}

const drink = {
    drink() {
        console.log(`${this.nome}, está bebendo`)
    }
}


const pesssoaPrototype = {...speak, ...drink} // ou Object.assign({}, speak, drink)


function criaPessoa(nome, sobrenome) {
    return Object.create(pesssoaPrototype, {
        nome: {
            value: nome,
        },
        sobrenome: {
            value: sobrenome,
        },
    });
}

const p1 = criaPessoa('João', 'Ribeiro');
console.log(p1);

p1.speak()