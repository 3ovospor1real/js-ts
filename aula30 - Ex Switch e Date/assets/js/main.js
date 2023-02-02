function myScope() {
    const titulo = document.querySelector('.container > h1');
    const data = new Date();

    function setDate (){
        const d = {
            diaSemana: getDiaSemana(data.getDay()),
            diaMes: data.getDate(),
            mes: getMes(data.getMonth()),
            ano: data.getFullYear(),
            hora: data.getHours(),
            minuto: data.getMinutes()
        }
        
        titulo.innerHTML = `${d.diaSemana}, ${d.diaMes} de  ${d.mes} de ${d.ano}, ${d.hora}:${d.minuto} `
    }
    setDate();

    //Função pra definir dia da semana
    function getDiaSemana(diaSemana) {
        switch (diaSemana) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Segunda-feira'
            case 2:
                return 'Terça-feira'
            case 3:
                return 'Quarta-feira'
            case 4:
                return 'Quinta-feira'
            case 5:
                return 'Sexta-feira'
            case 6:
                return 'Sábado'
        }
    }
    //Função pra definir mês
    function getMes (mes) {
        switch (mes) {
            case 0:
                return 'Janeiro'
            case 1:
                return 'Fevereiro'
            case 2:
                return 'Março'
            case 3:
                return 'Abril'
            case 4:
                return 'Maio'
            case 5:
                return 'Junho'
            case 6:
                return 'Julho'
            case 7:
                return 'Agosto'
            case 8:
                return 'Setembro'
            case 9:
                return 'Outubro'
            case 10:
                return 'Novembro'
            case 11:
                return 'Dezembro'
        }
    }
}
myScope()