require('dotenv').config();
const mongodb = require('mongodb').MongoClient
const url = process.env.MONGODB_URL

async function rodar() {
    try {
        const banco = await mongodb.connect(url)   

        console.log("Conectado ao banco com Sucesso!")

        const dbo = banco.db("cfbcursos")
        const obj = {curso:"Curso de Javascript", canal:"CFB Cursos"}

        const colecao = "curso"

        const resultado = await dbo.collection(colecao).insertOne(obj)
        console.log("1 Curso inserido")
        await banco.close()

    } catch (erro) {
        console.log("Erro detectado", erro)
    }
}
rodar()