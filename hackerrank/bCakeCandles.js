
const candles = [4,4,1,3]

function birthdayCakeCandles(candles) {
    
    const arr = candles;
    const max = Math.max(...arr);

    let total = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max){
            total += 1;
        }
    }
    console.log("resultado: ", total);
    return total;

}

birthdayCakeCandles(candles);