const conectar = async () => {
    if (global.conexao && global.conexao.state) {
        return global.conexao
    } //teste de conexao

    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:123456789@localhost:3306/cfbcursos") //usuario no SQL - (root:numeros... é a senha)
    console.log('Conectou ao banco')
    global.conexao = con
    return con
}

// select
const todosClientes = async () => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')
    return await linhas
}

// Incert
const IncereClientes = async (cliente) => { // client é objet
    const con = await conectar()
    const sql = 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)' // linhas (1) e coluna (2)
    const valores = [cliente.nome, cliente.idade] // valores de ventrada
    
    await con.query(sql, valores) // pedido
    return await linhas
}

module.exports = {todosClientes, IncereClientes}