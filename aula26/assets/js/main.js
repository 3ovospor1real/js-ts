// Capturar evento de submit do form
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // e.target = de onde está vindo o evento, nesse caso FORM
    const inputPeso = e.target.querySelector('input#peso');
    const inputAltura = e.target.querySelector('input#altura')
    
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    if(!peso) return setResultado('Peso Inválido', false);
    if(!altura) return setResultado('Altura Inválida', false);

    const imc = getImc(peso, altura);
    const nivel = getNivel(imc)
    setResultado(`Seu IMC é ${imc} - ${nivel}`, true);
    
})


//Funções

//Função para definir o resultado
function setResultado (msg, isValid) {
    let resultado = document.querySelector('div#res');
    resultado.innerHTML = '';

    const p = criaP();
    
    if(isValid) {
        p.classList.add('p-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};

//Função para criar parágrafo
function criaP () {
    let p = document.createElement('p');
    return p;
};

//Função pra calcular o IMC
function getImc (peso, altura) {
    let imc = peso / altura ** 2;
    return imc.toFixed(2);
};

//Função pra ver o nível de obesidade baseado no imc
function getNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
}