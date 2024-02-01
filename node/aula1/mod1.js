class Person {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log('Olá, me chamo', this.name)
    }
}

exports.Person = Person;