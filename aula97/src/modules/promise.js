
function promise () {
    return new Promise((resolve, reject) => {
        console.log('Promise');
        resolve();
    })
}

export default async function () {
    await promise();
    console.log('terminou de executar')
}