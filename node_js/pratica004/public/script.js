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
                <div class="remover">
                    <button>🗑️</button>
                </div>
            </div>
        `).join('');
}
carregarDados();
