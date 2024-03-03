exports.homePage = (req, res) => {
    res.send(`
    <form method="post" action="/">
        Nome: <input type="text" name="nome"/> <br/>
        Outra coisa: <input type="text" name="outraCoisa"/>
        <button>Enviar</button>
    </form>
    `)
};