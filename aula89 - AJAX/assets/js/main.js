const request = obj => {
    const xmr = new XMLHttpRequest();
    xmr.open(obj.method, obj.url, true);
    xmr.send();

    xmr.addEventListener('load', () => {
        if(xmr.status >= 200 && xmr.status < 300) {
            obj.success(xmr.responseText);
        } else {
            obj.error({
                code: xmr.status,
                text: xmr.statusText,
            })
        }
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
        success(reponse) {
            document.querySelector('.result').innerHTML = reponse
        },
        error(e) {
            alert('[ERRO] Recarregue a página')
        }
    })
}
    