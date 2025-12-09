const http = require('http');
const fs = require('fs'); // fs faz a leitura de arquivos
const porta = process.env.PORT;

const server = http.createServer((req, res) => {
    fs.readFile('site.html', (err, arquivo) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(arquivo);
        return res.end();
    });
});

server.listen(porta || 3000, () => {console.log('Servidor rodando')});


// readFile - le o arquivo e anexa em para: (err, arquivo)
// res.write(arquivo) - absorver
// return res.end() - renderisa

// Use na URL: http://localhost:3000/aula005b.js/