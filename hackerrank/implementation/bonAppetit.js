const bill = [3, 10, 2, 9]
const k = 1
const n = 4
const b = 7


function bonAppetit(bill, k, b) {
    let anaBill = 0;

    for(index in bill) {
        if(index != k) anaBill += bill[index]
    }
    anaBill = anaBill / 2

    if(anaBill == b) {
        console.log('Bon Appetit');
        return "Bon Appetit"
    }

    console.log(b - anaBill)
    return b - anaBill

}

bonAppetit(bill, k, b)