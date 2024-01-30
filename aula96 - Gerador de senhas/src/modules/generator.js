class Generator {
    static random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static generateNumber() {
        return String.fromCharCode(Generator.random(48, 58))
    }

    static generateUpper() {
        return String.fromCharCode(Generator.random(65, 91))
    }

    static generateLower() {
        return String.fromCharCode(Generator.random(97, 123))
    }
    static generateSymbol() {
        const symbols = '!@#$%&*?.,/+-'
        return symbols[Generator.random(0,13)]
    }
}

export default function generatePassword(qtd, lower, upper, number, symbol) {
    const passwordArr = new Array();
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        upper && passwordArr.push(Generator.generateUpper())
        lower && passwordArr.push(Generator.generateLower())
        number && passwordArr.push(Generator.generateNumber())
        symbol && passwordArr.push(Generator.generateSymbol())

    }

    return passwordArr.join('').slice(0, qtd);
}

generatePassword(10, true, true);
