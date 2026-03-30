const conectar = async () => {
    if (global.conexao && global.conexao.state) {
        return global.conexao
    } //teste de conexao

    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:SENHA@localhost:3000/cfbcursos") //usuario no SQL - (root:numeros... é a senha)
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
    const valores = [cliente.nome, cliente.idade] // valores de entrada
    
    await con.query(sql, valores) // pedido
    return await linhas
}

// Atualiza
const atualizaClientes = async (id, cliente) => { // precisa receber id do usuario para atualizar os dados.
    const con = await conectar()
    const sql = 'UPDATE cliente_node SET nome = ? , idade = ? WHERE id = ?'
    const valores = [cliente.nome, cliente.idade, id] // valores de ventrada
    
    await con.query(sql, valores) // pedido
    return await linhas
}

// Delete
const deletarClientes = async ( id ) => { // precisa do id do usuario para deletar o cliente.
    const con = await conectar()
    const sql = 'DELETE FROM cliente_node WHERE id = ?'
    const valores = [ id ] // valores de ventrada
    
    await con.query(sql, valores) // pedido
    return await linhas
}

module.exports = {todosClientes, IncereClientes, atualizaClientes, deletarClientes}