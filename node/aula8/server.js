const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
});

app.post('/', (req, res) => {
    res.send(`NOME: ${req.body.nome}`)
});

app.get('/tests/:idUsuario?', (req, res) => {
    console.log(req.params.idUsuario);
    res.send(req.query);
});

app.listen(8080, () => console.log('http://localhost:8080'));
