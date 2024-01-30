import generatePassword from "./generator";

const result = document.querySelector('.result');
const caracterQtd = document.querySelector('#caracteres');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const button = document.querySelector('.generate-password')


export default () => {
    button.addEventListener('click', e => {
        result.innerHTML = password()
    })
};

function password () {
    const senha = generatePassword(
        caracterQtd.value,
        chkUpper.checked,
        chkLower.checked,
        chkNumber.checked,
        chkSymbol.checked,
    )

    return senha || '<span style="color: red">Selecione os valores e tente novamente</span>'

}