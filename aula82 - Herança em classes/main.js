class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true;
        console.log(`${this.nome} está ligando`)
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false;
        console.log(`${this.nome} está desligando`)
    }

}

const d1 = new Dispositivo('Celular');
console.log(d1);

class Smartphone extends Dispositivo {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }

    takePicture() {
        console.log('Foto tirada!');
    }
    
}

const ip = new Smartphone('A13', 'Grafite');

ip.ligar();
ip.takePicture()

console.log(ip);