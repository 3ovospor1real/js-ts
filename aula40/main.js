// CONTINUE - continua para a próxima iteração do laço sem executar o resto do bloco
// BREAK - para a execução do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {
    if(numero == 2 || numero == 5) {
        console.log(`Numero ${numero} pulado`)
        continue
    }
    console.log(numero)

    if(numero == 7) {
        console.log('Número 7 encontrado. Saindo...')
        break
    }
}