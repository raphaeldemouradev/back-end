const http = require('http')
const eventos = require('events') // evento
const EventoEmissor = new eventos.EventEmitter() // cria evento

const final = () => {console.log('Fim do processo')} // fun para fazer novo evento

EventoEmissor.on('msg', () => {console.log('Curso de node')}) // fazer novo evento (emissor)
EventoEmissor.on('fim', final) // fazer novo evento (emissor)

const porta = process.env.PORT || 3000
const retorno = () => {console.log('Servidor Rodando')} 

const servidor = http.createServer((req, res) => {
    EventoEmissor.emit('msg') //emitir evento
    res.writeHead(200, {'Content-type':'text/plain'}) // retorno para usuario que consome api
    res.write('CDB Cursos')
    EventoEmissor.emit('fim') //emitir evento
    res.end()
})
servidor.listen(porta, retorno)