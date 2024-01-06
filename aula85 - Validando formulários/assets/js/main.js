class ValidaForm {
    constructor () {
        this.form = document.querySelector('.formulario');
        this.events();        
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const camposValidos = this.checaCampos();
        const senhasValidas = this.validPasswords();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.form.submit()
        }
    }

    checaCampos() {
        let valid = true;

        for(let erroText of this.form.querySelectorAll('.error')) {
            erroText.remove()
        }
        
        for(let campo of this.form.querySelectorAll('.validate')) {
            let label = campo.previousElementSibling.innerText

            if(!campo.value) {
                ValidaForm.createError(campo, `Campo <strong>"${label}</strong>" pode estar vazio`);

                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('user')) {
                if(!this.validaUser(campo)) valid = false
            }

        }
        return valid
    }

    validPasswords() {
        const password = this.form.querySelector('.password');
        const repeatPassword = document.querySelector('.repeat-password');

        console.log(password, repeatPassword)

        let valid = true
        if (password.value.length < 6) {
            ValidaForm.createError(password, 'A senha deve conter no mínimo 6 caracteres');
            valid = false;
        } else if (password.value.length > 12 ) {
            ValidaForm.createError(password, 'A senha deve conter no máximo 12 caracteres');
            valid = false;
        }
        if(password.value != repeatPassword.value) {
            ValidaForm.createError(repeatPassword, 'As senhas não correspondem');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            ValidaForm.createError(campo, 'CPF inválido');
            return false;
        }

        return true
    }

    validaUser(campo) {
        const user = campo.value;
        let valid = true
        if (user.length < 3) {
            ValidaForm.createError(campo, 'O usuário deve conter no mínimo 3 caracteres');
            valid = false;
        } else if (user.length > 12 ) {
            ValidaForm.createError(campo, 'O usuário deve conter no máximo 12 caracteres');
            valid = false;
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            ValidaForm.createError(campo, 'O usuário deve conter apenas letras e/ou números');
            valid = false;
        }

        return valid
    }

    static createError(campo, msg) {
        const div = document.createElement('p');
        div.innerHTML = msg;
        div.classList.add('error');

        campo.insertAdjacentElement('afterend', div);
    }
    
}

const validaForm = new ValidaForm()
