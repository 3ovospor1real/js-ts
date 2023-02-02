function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
}


let timer = setInterval(() => console.log(mostraHora()), 1000);

setTimeout(() => clearInterval(timer), 5000)