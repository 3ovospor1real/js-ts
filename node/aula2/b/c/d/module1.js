const { copyFileSync } = require("fs")

module.exports = class {
    constructor(nome) {
        this.nome = nome
    }

    sayName() {
        console.log('Olá, me chamo', this.nome)
    }
}