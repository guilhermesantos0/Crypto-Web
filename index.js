const express = require('express');
const app = new express();

const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'pages')));

const files = fs.readdirSync('./pages');
files.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, `pages/${file}/index.html`));
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/home/index.html'));
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));