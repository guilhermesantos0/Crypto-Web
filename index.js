const express = require('express');
const app = new express();

const fs = require('fs');
const path = require('path');

const apiManager = require('./server/api/index');

app.get("/keys/:id/index.js", (req, res) => {
    const id = req.params.id;
    res.setHeader("Content-Type", "application/javascript");
    res.sendFile(path.join(__dirname, 'pages', 'keys', '{id}', 'index.js'));
});

app.use(express.static(path.join(__dirname, 'pages/keys')));
app.use(express.static(path.join(__dirname, 'pages')));
app.set('views', path.join(__dirname, 'pages/keys/{id}'));
app.set('view engine', 'ejs');

const files = fs.readdirSync('./pages');
files.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, `pages/${file}/index.html`));
    })
})

app.get('/keys/:id', (req, res) => {
    const id = req.params.id;

    res.render('index', { id });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/home/index.html'));
})

app.post('/api/:endpoint', async (req, res) => {
    const result = await apiManager(req.params.endpoint, req.query || null);
    res.send(result);
})

app.get('/api/:endpoint', async (req, res) => {
    const result = await apiManager(req.params.endpoint, req.query || null);
    if(req.params.endpoint == 'backup') {

        return res.download(result, 'backup.json', (err) => { if(err) console.log(err) })

    } else {
        res.send(result);
    }
})



app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));