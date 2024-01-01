
const array = [52, 38, 64, 47, 16]

function miniMaxSum(arr) {
    arr.sort();

    let arrMax = arr.slice()
    arrMax.shift()

    let arrMin = arr.slice()
    arrMin.pop()

    let maxSum = 0;
    let minSum = 0;

    arrMax.forEach(e => maxSum += e);

    arrMin.forEach(e => minSum += e);

    console.log(minSum, maxSum)
}

miniMaxSum(array);