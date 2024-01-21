// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xmr = new XMLHttpRequest();
//         xmr.open(obj.method, obj.url, true);
//         xmr.send();

//         xmr.addEventListener('load', () => {
//             if(xmr.status >= 200 && xmr.status < 300) {
//                 resolve(xmr.responseText);
//             } else {
//                 reject({
//                     code: xmr.status,
//                     text: xmr.statusText,
//                 })
//             }
//         })
//     })
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }

})

async function loadPage(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href);

        if(response.status !== 200) {
            throw new Error(response.status, 'ERROR')
        }

        const html = await response.text();
        document.querySelector('.result').innerHTML = html;

    } catch (e) {
        console.error(e);
    }
}


// fetch('pages/pag4.html')
// .then(response => {
//     if(response.status !== 200) throw new Error('Erro 404 forçado');
//     return response.text();
// })
// .then(text => {
//     console.log(text);
// })
// .catch(e => {
//     console.error(e)
// })