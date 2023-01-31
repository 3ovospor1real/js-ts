function retornaHora(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância Date');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

const hora = new Date('2007-12-27');
console.log(hora.toLocaleString('en-US'));

