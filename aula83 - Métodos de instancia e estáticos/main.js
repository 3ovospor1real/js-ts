class ControleRemoto{
    constructor(tv, bateria) {
        this.tev = tv;
        this.volume = 0;
        this.bateria = bateria;
    }

    //Métodos de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuitVolume() {
        this.volume -= 2;
    }

    //Metódo estático
    static trocaPilha () {
        console.log('Pilha de todos os controles trocadas');
    }
}

const c1 = new ControleRemoto('LG', 50);
const c2 = new ControleRemoto('Samsung', 22);
const c3 = new ControleRemoto('Philco', 76);

ControleRemoto.trocaPilha()
