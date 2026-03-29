(async () => {
    const db = require('./db')

    const nom = 'Lucas'
    const ida = 10
    await db.IncereClientes({nome: nom, idade: ida}) // essa adiciona um usuario
    console.log('Inserir novo cliente')

    console.log('Obter todos os clientes')
    const clientes = await db.todosClientes() // essa func renderiza os users
    console.log(clientes)
})() 