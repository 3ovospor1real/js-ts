
const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getTimeFromSeconds (segundos) {
    const data = new Date (segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function initClock() {
    clearInterval(timer);
    timer = setInterval(() => {
        segundos++;
        clock.innerHTML = getTimeFromSeconds(segundos);;
    }, 1000);
    clock.classList.remove('pausado');
}

function pauseClock() {
    clearInterval(timer);
    clock.classList.add('pausado');
}

function cleanClock() {
    clearInterval(timer);
    segundos = 0;
    clock.innerHTML = getTimeFromSeconds(segundos);

}

// document.addEventListener('click', (e) => {
//     let el = e.target;
//     if (el.classList.contains('zerar')) {

//     };
//     if (el.classList.contains('pausar')) (e) => pauseClock();
//     if (el.classList.contains('iniciar')) (e) => cleanClock();
// })

iniciar.addEventListener('click', (e) => initClock());
pausar.addEventListener('click',(e) => pauseClock());
zerar.addEventListener('click',(e) => cleanClock());