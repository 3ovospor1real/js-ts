
const array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    
    let plus = 0;
    let zero = 0;
    let minus = 0;
    
    arr.forEach(e => {
        if(e > 0) plus++
        else if(e < 0) minus++
        else zero++
    });
    
    console.log(`positivos: ${plus} \nnegativos: ${minus} \nzero: ${zero}`)

    let rPlus = (plus / arr.length).toFixed(6)
    let rZero = (zero / arr.length).toFixed(6)
    let rMinus = (minus / arr.length).toFixed(6)

    console.log(`rPlus: ${rPlus}\nrZero: ${rZero}\nrMinus: ${rMinus}`)
    
}

plusMinus(array);