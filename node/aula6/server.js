const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form method="post">
        Nome: <input type="text" name="nome"/>
        <button>Enviar</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Formlário recebido')
})

app.get('/pag2', (req, res) => {
    res.send('Você está na página 2')
})

app.listen(3000, () => {
    console.log('Server adress: http://localhost:3000')
    console.log('Server running on port: [3000]')
});
