module.exports.pagInicial = (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome:
            <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
}

module.exports.pagInicialPost = (req, res) => {
    res.send(`Seu nome é ${req.body.nome}`)
}