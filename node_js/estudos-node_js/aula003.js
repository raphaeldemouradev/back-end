const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    if (req.url == '/') { //interceptar rotas
        res.write('<h1>Seja bem vindo</h1>');

    } else if (req.url == '/cadastro') {
        res.write('<h1>Cadastro</h1>');

    } else if (req.url == '/home') {
        res.write('<h1>Home</h1>');

    } else if (req.url == '/home/perfil') {
        res.write('<h1>Perfil</h1>');
    }

    res.end();
})

servidor.listen(porta, host, 
    () => {console.log('Servidor rodando!')}
);