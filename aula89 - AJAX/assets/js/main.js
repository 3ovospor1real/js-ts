const request = obj => {
    return new Promise((resolve, reject) => {
        const xmr = new XMLHttpRequest();
        xmr.open(obj.method, obj.url, true);
        xmr.send();

        xmr.addEventListener('load', () => {
            if(xmr.status >= 200 && xmr.status < 300) {
                resolve(xmr.responseText);
            } else {
                reject({
                    code: xmr.status,
                    text: xmr.statusText,
                })
            }
        })
    })
}
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }

})

function loadPage(el) {
    const href = el.getAttribute('href')

    request({
        method: 'GET',
        url: href,
    }).then(response => {
        document.querySelector('.result').innerHTML = response
    }).catch((e) => {
        alert(`ERROR: ${e.code} \n${e.text}`)
    })
}
    