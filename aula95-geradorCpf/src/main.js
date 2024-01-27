import './assets/css/style.css'
import GeraCpf from './modules/geraCpf.js';

(function () {
    const result = document.querySelector('.result');
    const buttom = document.querySelector('button');
    const geraCpf = new GeraCpf();
    
    result.innerHTML = geraCpf.createNewCpf();
    
    buttom.addEventListener('click', e => {
        result.innerHTML = geraCpf.createNewCpf();
    })
})();
