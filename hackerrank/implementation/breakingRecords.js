
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
    
    for(let score of scores) {
        if (score > max) {
            max = score;
            maxCount++
        }

        if (score < min) {
            min = score;
            minCount++
        }
    }

    console.log(maxCount, minCount);

}

breakingRecords(scores);