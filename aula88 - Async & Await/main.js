function random(min, max) {
    max *= 1000;
    min *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('ERROR!');
                return;
            }

            resolve(msg.toUpperCase());
            return;
        }, time);
    })
}

/*
wait('Fase 1', random(0, 5))
.then(fase => {
    console.log(fase);
    return wait('Fase 2', random(0, 5));
})
.then(fase => {
    console.log(fase);
    return wait('Fase 3', random(0, 5));
})
.then(fase => {
    console.log(fase);
    return fase;
})
.then(fase => console.log("Terminamos na fase: ", fase))
*/

async function execute() {
    try{
        const fase1 = await wait('Fase 1', random(0, 5));
        console.log(fase1);
        const fase2 = await wait('Fase 2', random(0, 5));
        console.log(fase2);
        const fase3 = await wait('Fase 3', random(0, 5));
        console.log(fase3);
    
        console.log("Terminamos na fase: ", fase3)
    } catch(e) {
        console.log(e);
    }
}
execute()