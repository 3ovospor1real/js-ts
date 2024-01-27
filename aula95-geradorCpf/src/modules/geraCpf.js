import ValidaCPF from "./validaCpf.js";

export default class GeraCpf {
    randomCpf(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formate(cpf) {
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        )
    }

    createNewCpf() {
        const cpfNoDigit = this.randomCpf();
        const digit1 = ValidaCPF.createDigit(cpfNoDigit);
        const digit2 = ValidaCPF.createDigit(cpfNoDigit + digit1);

        const newCpf = cpfNoDigit + digit1 + digit2;

        return this.formate(newCpf);
    }

}