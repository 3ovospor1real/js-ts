// Array

const amigos = ['João', 'Miguel', 'Nívia', 'Luana', 'Izadora'];
const idade = 15;

//amigos.push('Jovana');        // Adiciona
//amigos.unshift('Jovana')      // Adiciona ao primeiro
//let removed = amigos.pop()   // Remove o ultimo 
//amigos.shift()               // Remove o primeiro

console.log(amigos.length)

for (let key in amigos) {
    console.log(`${Number(key) + 1} - ${amigos[key]}`)
}