
function Calculadora (){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressEnter();
    };

    this.pressEnter = function(){
        this.display.addEventListener('keyup', event => {
            if(event.keyCode === 13) {
                this.calc()
            }
        })
    };

    this.cliqueBotoes = function() {
        //this -> calcularadora
        document.addEventListener('click', event => {
            const el = event.target;

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if(el.classList.contains('btn-del')) {
                this.delete()
            }

            if(el.classList.contains('btn-eq')) {
                this.calc()
            }

        });
    };

    this.btnParaDisplay = function(value) {
        this.display.value += value;
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.delete = function() {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.calc = function() {
        let conta = this.display.value

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };
}
const calculadora = new Calculadora();
calculadora.inicia()
