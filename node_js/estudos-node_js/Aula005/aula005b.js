// Nesse arquivo da aula é possivel criar um arquivo de texto
const http = require('http');
const fs = require('fs'); // fs faz a leitura de arquivos
const porta = process.env.PORT;

const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt', 'Curso de Node', (err) => {
        if(err)throw err
        console.log('Arquivo Criado');
        res.end();
    });
});

server.listen(porta || 3000, () => {console.log('Servidor rodando')});
