function viralAdvertising(n) { // n = número de dias
    let cumulative = 2;
    let liked = 2;
    let shared = 5;
    
    for(let i = 1; i < n; i++) {
        shared = Math.floor(liked * 3);
        liked = Math.floor(shared / 2);
        cumulative += liked
    }
    console.log(cumulative);
    return cumulative;
};

viralAdvertising(5);