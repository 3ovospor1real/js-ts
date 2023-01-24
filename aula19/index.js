let a = [1,2,3,4]
let b = a       //copia a referencia ne memória do array
let c = [...a]  //copia o array

c.pop()
b.shift()

console.log(`A- [${a}], B- [${b}], C- [${c}]`)