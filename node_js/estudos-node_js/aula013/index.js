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

        /* INSERT
        const resultado = await dbo.collection(colecao).insertOne(obj)
        console.log("1 Curso inserido")
        await banco.close()
        */

        /* Buscar Registros
        // "findOne" mostra apenas 1 resgistro na busca. A " {} " manda procurar todos os registroas.
        // "find" e "toArray" garante a busca de todos.
        // Se colocar dentro das "{}" um valor do mongodb, ele retorna aquilo que esta igual lá, Exemplo: "canal: 'CFB Cursos'", se existir outo igual vai retornar tambem
        // "projection" escode um registro do find. O 0 seguinifica coluna
        const resultado = await dbo.collection(colecao).find({curso: 'Curso de Node'},{projection:{_id:0,}}).toArray()
        console.log(resultado) // se colocar "[0]" traz o item da posição 0 e se colocar ".curso" traz somente o nome do curso
        await banco.close()
        */

        // usando query
        // se usar "/.t/" retorna os registros que termina com T
        // se usar "/C./" retorna os registros que começa com C
        const query = {curso: /.t/}
        const resultado = await dbo.collection(colecao).find(query,{projection:{_id:0,}}).toArray()
        console.log(resultado) 
        await banco.close()

    } catch (erro) {
        console.log("Erro detectado", erro)
    }
}
rodar()