const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/plain'});

    res.write('Hello World');
    res.end();
}).listen(3000);