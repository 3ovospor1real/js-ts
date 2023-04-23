// Superclasse / Classe-mãe
function ContaBancaria(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaBancaria.prototype.depositar = function(quantia) {
    this.saldo += quantia;
    console.log(`Saldo atual ${this.saldo.toFixed(2)}`);
}

ContaBancaria.prototype.sacar = function(quantia) {
    if(this.saldo < quantia) {
        console.log(`Saldo insuficiente!, Saldo atual ${this.saldo.toFixed(2)}`);
        return
    }

    this.saldo -= quantia;
    console.log(`Saldo atual ${this.saldo.toFixed(2)}`)
}

ContaBancaria.prototype.verSaldo = function ()  {
    console.log(`Saldo atual: ${this.saldo.toFixed(2)}`)
}


function ContaCorrente (agencia, conta, saldo, limite) {
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(quantia) {
    if(quantia > (this.limite + this.saldo)) {
        console.log(`Saldo insuficiente!, Saldo atual ${this.saldo.toFixed(2)}`);
        return
    }

    this.saldo -= quantia
    this.verSaldo()
}

function ContaPoupança(agencia, conta, saldo) {
    ContaBancaria.call(this, agencia, conta, saldo);
}
ContaPoupança.prototype = Object.create(ContaBancaria.prototype);
ContaPoupança.prototype.constructor = ContaPoupança

let cc = new ContaCorrente('Z1 Pagamentos', 2233, 0, 100);

cc.sacar(110)

let cp = new ContaPoupança('Z1 Pagamentos', 2233, 0);