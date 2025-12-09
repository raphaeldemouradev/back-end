// Essa aula foi possivel pegar dados da url atraves do metodo GET
const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(req.url); //o que estiver na url vai para tela

    const p = url.parse(req.url,true).query;
    res.write('<br/>'+p.nome); //nome do User na url; exibe na tela
    res.write('<br/>'+p.curso); //cuso da url; exibe na tela

    res.end();
})

servidor.listen(porta, host, 
    () => {console.log('Servidor rodando!')}
);

// Na url: http://localhost:3000/aula004b.js/nome=Alex&curso=node