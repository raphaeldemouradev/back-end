import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

import express from 'express';
const app = express();
const door = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
let BancoDados = []

app.get('/servidor.js', (req, res) => {
    const {nome, senha} = req.query;
    
    const newUser = {id: BancoDados.length + 1, nome, senha, data: new Date()};
    BancoDados.push(newUser)

    console.log("Dadossalvos na API interna:", BancoDados)
    res.redirect('/perfil.html')
})

app.get('/api/user', (req, res) => {
    res.json(BancoDados)
})

app.listen(door, () => console.log("Servidor Rodando"))