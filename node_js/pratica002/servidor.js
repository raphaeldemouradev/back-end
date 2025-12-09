const http = require('http');
const url = require('url');
const fs = require('fs');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
    fs.readFile('cadastro.html', (err, arquivo) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        const p = url.parse(req.url,true).query;
        res.write(`Obrigado ${p.nome}`); //nome do User na url; exibe na tela

        res.write(arquivo);
        return res.end();
    });
})

servidor.listen(porta, host, () => {console.log('Servidor rodando!')});

// Na url: http://localhost:3000/servidor.js