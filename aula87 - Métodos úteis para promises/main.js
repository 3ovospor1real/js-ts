function random (min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait (msg, time) {
    return new Promise ((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject("ERROR!");
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase())
        }, time)   
    });
}

const promises = [
    // 'Primeiro valor',
    wait('promise 1', 4000),
    wait('promise 2', 5000),
    wait('promise 3', 3000),
    // wait(100, 4000)
    // 'Outro valor'
]
/*
Promise.all(promises)
.then(value => console.log(value))
.catch(error => console.log(error))
*/

/*
Promise.race(promises)
.then(v => console.log(v))
.catch(e => console.log(e))
*/


function carregaPagina() {
    let paginaCarregada = true;
    if(paginaCarregada) {
        return Promise.resolve('Página caregada');
    } else {
        return Promise.reject('Carregando página');
    }
}