const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const section = document.querySelector('section.container');
const container = document.createElement('div');

for (let i in elementos) {
    let {tag, texto} = elementos[i]
    let elemento = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
     
    elemento.append(textoCriado); //adiciona o texto criado dentro da tag criada
    container.appendChild(elemento); //adiciona a tag criada dentro da div 
}
section.appendChild(container)
