const express = require('express')
const app = express()

const porta = process.env.PORT

app.get('/', (req, res) => {
    res.send('Seja Bem Vido')
})

app.get('/home', (req, res) => {
    res.json({home:'home'})
})

app.listen(porta || 3000, () => {console.log('Servidor rodando!')})

//obs: falta instalar o express