const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

//Coloca os estilos do BODY definidos em CSS dentro de uma váriavel
const estilosBody = getComputedStyle(document.body);

const corDeFundo = estilosBody.backgroundColor;

for(let paragrafo of p) {
    paragrafo.style.backgroundColor = corDeFundo;
    paragrafo.style.color = 'white'
}