import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { db } from './db.js'

const app = express(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')))


// Config Cadastro
app.post('/cadastro', (req, res) => {
    // Gets
    const nameEnv = req.body.name;
    console.log(nameEnv)

    // DB insert
    db.push({id: Date.now(), name: nameEnv}) 
    console.log("Banco de dados atualizado:", db);

    // Route
    res.redirect(`/home`)
})

// API call
app.get('/api/users', (req, res) => {
    res.json(db)
})

///// ROTAS ////
// Cadastro
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

// Config Home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'))
})

// Config Perfil
app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '/perfil.html'))
})

app.listen(3000, () => {console.log("Servidor On")})