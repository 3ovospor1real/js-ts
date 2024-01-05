

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let applesIn = 0;
    let orangesIn = 0;

    apples.forEach((e, i) => {
        let postition =  a + e
        console.log(`position[${i}] : ${postition}`)
        if(postition >= s &  postition <= t) applesIn++
    });
    
    oranges.forEach((e, i) => {
        let postition =  b + e
        console.log(`position[${i}] : ${postition}`)
        if(postition >= s & postition <= t) orangesIn++
    });

    return [applesIn , orangesIn]

}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
