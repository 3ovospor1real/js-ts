// IIFE - Immediately Invoked Function Expressions
(function (idade, nome, altura) {
    
    function mostrarDados () {
        console.log(`${nome}, ${idade} anos, ${altura} m`)
    }

    mostrarDados()
})(15, 'João', 1.67);
