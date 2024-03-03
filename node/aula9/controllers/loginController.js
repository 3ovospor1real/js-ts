exports.loginPage = (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            Username: <input type="text" name="username"/> 
            Password: <input type="password" name="password"/> 
            <button>Registrar</button>
        </form>
    `);
};

exports.registred = (req, res) => {
    res.send(`
        Usuário: ${req.body.username}
        Senha: ${req.body.password}
    `);
};