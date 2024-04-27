const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(routes)

app.listen(8080, () => console.log('Server running on http://localhost:8080'));