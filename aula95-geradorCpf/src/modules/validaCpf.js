export default class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        }) ; 
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    static createDigit(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
    
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo --;

            return ac;
        }, 0)

        let digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.createDigit(cpfParcial)
        const digito2 = ValidaCPF.createDigit(cpfParcial + digito1)
    
        const novoCpf = cpfParcial + digito1 + digito2
        if(this.cpfLimpo != novoCpf) return false

        return true
    }
}
