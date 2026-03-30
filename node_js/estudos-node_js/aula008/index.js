(async () => {
    const db = require('./db')

    /*
    const nom = 'Lucas'
    const ida = 10
    await db.IncereClientes({nome: nom, idade: ida}) // essa adiciona um usuario
    console.log('novo cliente inserido')
    */

    /*
    const id = 1
    const nom = 'Lucas'
    const ida = 20
    await db.atualizaClientes(id, {nome: nom, idade: ida}) 
    console.log('cliente' + id + 'atualizado')
    */

    const id = 1
    await db.deletarClientes( id ) 
    console.log('cliente' + id + 'deletado')

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes() // essa func renderiza os users
    console.log(clientes)
})() 