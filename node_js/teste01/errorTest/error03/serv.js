function UserDados() {
    const name = document.getElementById("iname").value;
    const senha = document.getElementById("isenha").value;

    console.log("clicou")

    return { name, senha }
}

async function Verificador() {
    try {
        const dados = UserDados();
        const db = BancoFake();

        if (dados.senha === db) {
            console.log("Acertou!")
        } else {
            throw new Error("Senha incorreta...")
        }

    } catch (error) {
        console.error("Erro capturado:", error.stack)
    }
}

// -- -- //
function BancoFake() {
    const senhaCorreta = "676767";

    return senhaCorreta;
}