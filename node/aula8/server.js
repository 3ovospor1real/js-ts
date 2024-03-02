const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {extended: true}
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form method="post" action="/">
        Nome: <input type="text" name="nome"/>
        <button>Enviar</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Resultado do formulário: ${req.body.nome}`);
})

app.get('/tests/:idUsuario?', (req, res) => {
    console.log('Params:', req.params);
    console.log('Query Strings: ', req.query);
    res.send(`Params: ${req.params.idUsuario} <br> Query Strings: ${req.query.nome}`);
});

app.listen(3000, () => {
    console.log('Server adress: http://localhost:3000')
    console.log('Server running on port: [3000]')
});
