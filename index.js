const express = require('express');
const app = new express();

const fs = require('fs');
const path = require('path');

const apiManager = require('./server/api/index');

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

app.post('/api/:endpoint', async (req, res) => {
    console.log(req.params.endpoint)
    const result = await apiManager(req.params.endpoint, req.query?.text || null)
    res.send(result)
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));