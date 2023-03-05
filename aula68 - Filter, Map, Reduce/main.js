const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Separa somente os números pares
const numerosPares = numeros.filter(valor => valor % 2 == 0).map(valor => valor * 2).reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0)

console.log(numerosPares);
