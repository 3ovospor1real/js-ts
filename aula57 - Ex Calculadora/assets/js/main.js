function criaCalculadora () {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        
        
        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13) {
                    this.calc()
                }
            })
        },

        cliqueBotoes() {
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
        },

        btnParaDisplay(value) {
            this.display.value += value;
        },

        clearDisplay () {
            this.display.value = '';
        },

        delete() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calc() {
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
        }, 
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()