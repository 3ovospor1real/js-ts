function criaMultiplicador(multiplier) {
    return function(number){
        return number * multiplier
    }
}

let duplicar = criaMultiplicador(2)
let triplicar = criaMultiplicador(3)

console.log(duplicar(2))
console.log(triplicar(2))