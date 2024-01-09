//i < j, ar[i] + ar[j] divisivel por k

const ar = [1, 3, 2, 6, 1, 2];
const k = 3;

function divisibleSumPairs(n, k ,arr) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        for(let j = i+1; i < n; j++) {
            let sum = i + j
            if(sum % k == 0) {
                result++
            }
        }
    }
    console.log(result);
    return result;
}

divisibleSumPairs(6, k, ar);