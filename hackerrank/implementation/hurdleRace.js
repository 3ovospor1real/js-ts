const k = 4;
const height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
    const max = Math.max(...height);
    
    if(k >= max) return 0
    return max - k

}

console.log(hurdleRace(k, height));