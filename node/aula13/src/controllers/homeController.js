exports.homePage = (req, res) => {
    res.render('index'); //Renderiza o view 'index' referente a home page
    return;
};

exports.post = (req, res) => {
    res.send(req.body.client);
}

exports.homePage2 = (req, res) => {
    res.render('homePage2');
    return;
}