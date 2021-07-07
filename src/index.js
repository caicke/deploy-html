const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
const port = process.env.PORT || 3131
app.listen(port,'0.0.0.0',()=>{
    console.log('Carregando na porta', port)
})