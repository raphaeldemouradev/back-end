async function carregarDados() {
    const api = await fetch('/api/user')
    const dados = await api.json();

    console.log(dados)
    const nome = document.getElementById('nome');
    nome.innerHTML = dados[0].nome;

    const senha = document.getElementById('senha');
    senha.innerHTML = dados[0].senha;

    const data = document.getElementById('data');
    data.innerHTML = dados[0].data;
}
carregarDados();


