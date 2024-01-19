//Função "wait" retorna uma PROMISE
function wait (msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') {
            // caso não atenda as especificações a promise retorna oque foi passado em "reject"
            reject(new Error("typeof 'msg' must be a string"))
        }
        
        setTimeout(() => {
            // caso bem sucedida a promise retorna oque foi passado em "resolve"
            resolve(msg);
        }, time);
    })
};

// chama a função "wait" que vai retornar uma promise
wait(1, 3000)

.then(answer => { // answer = o valor que foi passado em "resolve" na promise
    console.log(answer);
    return wait('Frase 2', 5000); //callback que será executada no then
})
.then(answer => {
    console.log(answer);
    return wait('Frase 3' , 2000);
})
.then(answer => {
    console.log(answer);
}).catch(e => {
    console.log(e)
});
