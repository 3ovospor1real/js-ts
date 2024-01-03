const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] <=0) return
        this[_velocidade]--
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(value) {
        if(typeof value !== 'number') return
        if(value > 100 || value < 0) return 
        
        this[_velocidade] = value;
    }
};

const c1 = new Carro('Fusca');
c1.acelerar()
c1.velocidade = 100
console.log(c1.velocidade);