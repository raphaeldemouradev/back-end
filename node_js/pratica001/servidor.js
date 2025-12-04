const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    if (req.url === '/' && req.method === 'get') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });

    } else if (req.url === 'processar' && req.method == 'post') { //processar errado
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        })

        req.on('end', () => {
            const params = new URLSearchParams(body);
            const nomeUser = params.get('nome');
        })

        fs.readFile('cadastro.html', 'utf8', (err, data) => {
            let htmlNome = data.replace('<p id="user"> </p>', '<p>')
        })
    }


    res.write(user);
    res.end();
}).listen(3000);