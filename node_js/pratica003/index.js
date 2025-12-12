const express = require('express')
const porta = process.env.PORT || 3000
const rotas = require('./rotas')

const app = express()
app.use('/', rotas)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(porta, () => {console.log('Rodando')})