// Gera um número aleatório
function random (min = 1000, max =3000) {
    let n = Math.random() * (max - min) + min
    return Math.floor(n);
}

function f1 (callback) {
    setTimeout(() => {
        console.log('f1');
        // Se existir o argumento callback, a função passada nele será executada após a execução da função 'f1'
        if(callback) callback();
    }, random());
}
function f2 (callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, random());
}
function f3 (callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, random());
}

/*
f1(function () {
    f2(function() {
        f3(function() {
            console.log('Olá, Mundo')
        });
    })
})
*/

f1(f1Callback);

function f1Callback () {
    f2(f2Callback);
}

function f2Callback () {
    f3(f3Callback)
}

function f3Callback () {
    console.log('Hello, World!')
}