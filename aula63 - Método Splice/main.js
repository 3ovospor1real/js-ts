//             -5      -4       -3        -2         -1
//              0       1        2         3          4
const nomes = ['João', 'Nívia', 'Miguel', 'Gustavo', 'Luana']

// nomes.splice(ìndice, delete, elem1, elem2, elem3, etc...);

/*
// pop
// faz a mesma coisa que o método POP (remove o último elemento)
    const removidos = nomes.splice(-1, 1);
*/

/*
// shift
// faz a mesma coisa que o método SHIFT (remove o primeiro elemento)
    const removidos = nomes.splice(0, 1);
*/

/*
//push
// faz a mesma coisa que o método PUSH (adiciona um elemento no final do array)
nomes.splice(nomes.length, 0, 'Izadora', 'Vitor')
*/

/*
//Unshift
// faz a mesma coisa que o método UNSHIFT (adiciona um elemento no início do array)
nomes.splice(0, 0, 'Izadora', 'Vitor')
*/

/*
// removeu do índice -2 até o final
    const removidos = nomes.splice(-2, Number.MAX_VALUE);
*/

/*
// removeu do índice 3 e 4 e colocou as string no lugar dele
    const removidos = nomes.splice(3, 2, 'Izadora', 'Vitor');
*/ 


console.log(nomes);
