const nome = document.querySelector('input#nome')
const convidado = document.querySelector('input#convidado')

const listaConvidado = ['joão', 'miguel', 'nívia']

function verify() {
    if(nome.value == '') {
        alert('[ERROR!] Insira os dados')
    } else{
        if (listaConvidado.indexOf(nome.value) > -1 || listaConvidado.indexOf(convidado.value) > -1) {
        window.location = "allowed.html"
        } else {
        window.location = "denied.html"
        }
    }

    
}