const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome:
            <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

//req.body
app.post('/', (req, res) => {
    res.send(`Seu nome é: ${req.body.nome}`)
})

//req.params
app.get('/params/:parametros?', (req, res) => {
    res.send(`Paramns: ${req.params.parametros}`);
});

//req.query
//query?nome=
app.get('/query', (req, res) => {
    res.send(`Query: ${req.query.nome}`)
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});