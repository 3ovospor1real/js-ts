const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form method="POST">
        <input type="text" name="name"/>
        <button>Enviar</button>
    </form>`
    )
})

app.post('/', (req, res) => {
    res.send('Formulário recebido');
})

app.get('/pag2', (req, res) => {
    res.send('pagina2')
})

app.listen(8080, () => {
    console.log('Server runnig on port [8080]');
    console.log('http://localhost:8080');
})