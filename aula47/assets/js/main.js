
const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

//função para formatar o os segundos
function getTimeFromSeconds (segundos) {
    const data = new Date (segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}


document.addEventListener('click', (e) => {
    // Captura o destino do evento detectado
    let el = e.target;

    // Se a origem do evento for o botão zerar executa o seguinte bloco
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        clock.innerHTML = getTimeFromSeconds(segundos);
        clock.classList.remove('pausado');
    };
    
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        clock.classList.add('pausado');
    }
    
    // Se a origem do evento for o botão iniciar executa o seguinte bloco
    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            clock.innerHTML = getTimeFromSeconds(segundos);;
        }, 1000);
        clock.classList.remove('pausado');
    }
})
