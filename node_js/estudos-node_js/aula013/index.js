require('dotenv').config();
const mongodb = require('mongodb').MongoClient
const url = process.env.MONGODB_URL

// JOIN - Juntar o resultado de 2 Coleções

async function rodar() {
    try {
        const banco = await mongodb.connect(url)
        console.log("Conectado ao banco com Sucesso!")

        const dbo = banco.db("cfbcursos")
        const colecao1 = "cursos"
        const colecao2 = "detalhesCursos"

        /*
        // coloecao1
        let obj1 = [
            {id: 1, curso: "Curso de C++", canal: "CFB Cursos"},
            {id: 2, curso: "Curso de HTML", canal: "CFB Cursos"},
            {id: 3, curso: "Curso de CSS", canal: "CFB Cursos"},
            {id: 4, curso: "Curso de Javascript", canal: "CFB Cursos"},
            {id: 5, curso: "Curso de PHP", canal: "CFB Cursos"},
        ]

        const resultado1 = await dbo.collection(colecao1).insertMany(obj1)
        console.log(resultado1.insertedCount + "Cursos inseridos")

        
        // colecao2
        let obj2 = [
            {id: 1, aula: "Design"},
            {id: 2, aula: "Teoria das cores"},
            {id: 3, aula: "Hierarquia Visual"},
            {id: 4, aula: "Fluxo Visual"},
            {id: 5, aula: "Tipografia"},
        ]
        

        const resultado2 = await dbo.collection(colecao2).insertMany(obj2)
        console.log(resultado2.insertedCount + "Cursos inseridos")
        
        //retornar coleções 1 e 2
        query = {}
        const ret1 = await dbo.collection(colecao1).find(query, {projection:{_id:0}}).toArray()
        console.log(ret1) 

        const ret2 = await dbo.collection(colecao2).find(query, {projection:{_id:0}}).toArray()
        console.log(ret2) 
        */

        let query = {}
        const retornar1 = await dbo.collection(colecao1).aggregate([
            {
                $lookup: {
                    from: 'detalhesCursos',
                    localField: 'id',
                    foreignField: 'id',
                    as: 'Detalhes'
                }
            }
        ]).toArray()
        console.log(JSON.stringify(retornar1)) 
        banco.close()

    } catch (error) {
        console.log("Erro detectado", error)
    }
}
rodar()

///////////////////
// Aula 13 endiante
/*
async function rodar() {
    try {
        const banco = await mongodb.connect(url)   

        console.log("Conectado ao banco com Sucesso!")

        const dbo = banco.db("cfbcursos")
        const obj = {curso:"Curso de C++", canal:"CFB Cursos"}

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

        /* Usando QUERY
        // se usar "/.t/" retorna os registros que termina com T
        // se usar "/C./" retorna os registros que começa com C
        const query = {curso: /.t/}
        const resultado = await dbo.collection(colecao).find(query,{projection:{_id:0,}}).toArray()
        console.log(resultado) 
        await banco.close()
        */

        /* Ordenação
        const ordenacao = {curso: 1}
        const query = {}
        const resultado = await dbo.collection(colecao).find(query).sort(ordenacao).toArray()
        console.log(resultado) 
        await banco.close()
        */

        /* Deletar Coleção
        let query = {curso: /Curso./}
        await dbo.collection(colecao).deleteMany(query)
        console.log('1 Curso deletado') 

        query = {}
        const resultado = await dbo.collection(colecao).find(query,{projection:{_id:0,}}).toArray()
        console.log(resultado) 
        */

        /* Deletar Coleção com contagem
        let query = {curso: /.t/}
        const resultado = await dbo.collection(colecao).deleteMany(query)
        await console.log(resultado.deletedCount + 'Curso(s) deletado(s)') 

        query = {}
        const retun = await dbo.collection(colecao).find(query,{projection:{_id:0,}}).toArray()
        console.log(retun) 
        */

        /* Atualizar 
        let query = {curso: 'Curso de Javascript'}
        let novoObj = {$set: {curso: 'Curso de Javascript 2021'}}
        const resultado = await dbo.collection(colecao).updateOne(query, novoObj)
        await console.log(resultado.modifiedCount + 'Curso(s) atualizado(s)')  

        query = {}
        const retun = await dbo.collection(colecao).find(query).toArray()
        console.log(retun) 
        await banco.close()
        */

        /* Limite 
        let limite = 3
        let query = {curso: /.t/}
        const resultado = await dbo.collection(colecao).find(query,{projection:{_id:0,}}).limit(limite).toArray()
        console.log(resultado) 
        */

        /*
    } catch (erro) {
        console.log("Erro detectado", erro)
    }
}
rodar()
*/
