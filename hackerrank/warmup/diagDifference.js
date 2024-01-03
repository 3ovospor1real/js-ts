const matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [9, 8, 9]
];

function diagonalDifference(arr, arrLength) {
    let somad1 = 0;
    let somad2 = 0;

    for(let i = 0; i < arrLength; i++) {
        somad1 += arr[i][i];

        somad2 += arr[i][arrLength - 1 -i] ;
    }

    let difference = Math.abs(somad1 - somad2);

    console.log('A diferença entre a soma das diagonais é: ', difference);

}

diagonalDifference(matrix, 3)

