const http = require('http')
const porta = process.env.PORT || 3000
const formidavel = require('formidable')
const fs = require('fs')

const servidor = http.createServer((req, res) => {
    if (req.url == '/envioDeArquivo') {
        const form = new formidavel.IncomingForm() // criar form, novo formidavel, IncomingForm retorna o forluario que foi enviado
        form.parse(req, (erro, campo, arquivos) => {
            const urlantiga = arquivos.filetoupload[0].filepath // url antiga (exname: path)
            const urlnova = './local-nuvem/' + arquivos.filetoupload[0].originalFilename // novo local a ser movido, "name" nome original do arquivo (exname: name)
            fs.rename(urlantiga, urlnova, (erro) => {
                if (erro) throw erro
                res.write('Arquivos movidos')
                res.end()
            })
        })
    } else {

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit" value="Enviar"><br>')
        res.write('</form>')
        return res.end()
    }
})

servidor.listen(porta)