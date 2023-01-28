const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

p[0].style.backgroundColor = estilosBody.backgroundColor;