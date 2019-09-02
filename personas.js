const express = require('express');
const app = express();
const port = 3000;

var directorio = {"personas": [{"nombre": "Erick"}, {"nombre": "Octavio"}, {"nombre": "Julio"}]};

app.get('/personas', (req, res) => res.json(directorio));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))