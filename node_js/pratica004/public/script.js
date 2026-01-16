async function carregarDados() {
    const api = await fetch('/api/user')
    const dados = await api.json();
    console.log(dados)

    const container = document.querySelector('#container')
    container.innerHTML = dados.map(id => `
            <div class='container'>
                <h3>Usuario Cadastrado</h3>
                <p>Nome: ${id.nome}</p>
                <p>Senha: ${id.senha}</p>
                <p>Data: ${id.data}</p>
            </div>
        `).join('');

    /*
    const nome = document.querySelector('#nome');
    nome.innerHTML = dados[0].nome;

    const senha = document.querySelector('#senha');
    senha.innerHTML = dados[0].senha;

    const data = document.querySelector('#data');
    data.innerHTML = dados[0].data;
    */
}
carregarDados();


