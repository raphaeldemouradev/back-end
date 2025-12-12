const express = require('express')
const rotas = express.Router()

let tipoRoupa = [
    {'roupa':'camisa'},
    {'roupa':'calca'}
]

rotas.get('/:roupaid', (req, res) => {
    const roupa = req.params.roupaid
    const roupainfo = tipoRoupa.find(i => i.roupa == roupa)
    if (!roupainfo) {
        res.status(404).json(
            {erro:'Roupa não encontrado', 'Roupa Pesquisada':roupa}
        )
    } else {
        res.status(200).json(roupainfo)
    }
})

module.exports = rotas