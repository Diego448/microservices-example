const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
const compiledFunction = pug.compileFile('template.pug');

var directorio = {"personas": [{"nombre": "Erick"}, {"nombre": "Octavio"}, {"nombre": "Julio"}]};

app.get('/', (req, res) => res.send(pug.renderFile('template.pug', {directorio: directorio})));
app.get('/personas', (req, res) => res.json(directorio));
app.post('/personas/:nombre', function (req, res) {
    directorio.personas.push({"nombre": req.params.nombre});
    res.send(req.params.nombre + " successfully added to database");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
