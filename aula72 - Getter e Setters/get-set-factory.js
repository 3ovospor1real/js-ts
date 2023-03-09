function criaPessoa (nome) {
    return {
        get nome () {
            return nome
        },
        set nome (value) {
            value = value.replace('coisa', '')
            nome = value;
        }
    }
}

let p1 = criaPessoa('João');
p1.nome = 'Qualquer coisa'
console.log(p1, p1.nome);