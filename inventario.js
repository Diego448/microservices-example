const express = require('express');
const app = express();
const port = 3001;

var inventario = {"dispositivos": [{"descripcion": "Laptop HP", "propietario": "Octavio"}, 
    {"descripcion": "Celular Xiaomi", "propietario": "Erik"}]}

app.get('/inventario', (req, res) => res.json(inventario));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))