const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome <input type="text"/>
        <button>Enviar</button>
    </form>`
    );
});

app.post("/", (req, res) => {
    res.send("Formulário recebido");
});

app.listen(3000, () => {
    console.log("Server running on port:{3000}");
    console.log("Server adress: http://localhost:3000");
});