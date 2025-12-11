const express = require('express')
const rotas = express.Router() // Rotas em vez de app

let cursosInfo = [
    {'curso':'node','info':'Curso de Node'}, 
    {'curso':'react','info':'Curso de React'},
    {'curso':'java','info':'Curso de Java'},
    {'curso':'arduino','info':'Curso de Arduino'},
]

rotas.get('/', (req, res) => { //essa é uma rota base
    res.json({ola:'Seja bem vindo'})
})

// rotas com parametros:
rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid // pega o cursoid
    const cursoIf = cursosInfo.find(i => i.curso == curso)
    if (!cursoIf) {
        res.status(404).json(
            {erro:'Curso não encontrado', cursoPesquisado:curso}
        )
    } else {
        res.status(200).json(cursoIf)
    }
})
// "find" é para procurar
// "i" indice
module.exports = rotas //exportar as rotas


// 'curso' é uma chave, 'node ou java' é o nome, 'info' é chave