const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes'); //Rotas

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')))//Define os arquivos estáticos que irão ser usados

app.set('views', path.resolve(__dirname, 'src', 'views')); //Define o local onde estão os views
app.set('view engine', 'ejs'); //define a engine usada para renderizar os views (ejs)


app.use(routes);

app.listen(3000, () => {
    console.log('Server adress: http://localhost:3000')
    console.log('Server running on port: [3000]')
});
