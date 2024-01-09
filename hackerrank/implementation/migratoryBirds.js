arr = [1, 1, 2, 2, 3];

function migratoryBirds (arr) {
    const count = {}

    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1
    });

    let contagemMax = 0;
    let elementoMaisRepetido;

    for(let element in count) {
        if(count[element] > contagemMax) {
            contagemMax = count[element]
            elementoMaisRepetido = element;
        }
    }

    console.log(elementoMaisRepetido)

    return;
}

migratoryBirds(arr);

