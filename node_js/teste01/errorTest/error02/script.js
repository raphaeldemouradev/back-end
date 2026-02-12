function TestarErro() {
    throw new Error("Clicou")
}

function bugFunc() {
    TestarErro()
}

async function testarFunc() {
    try {
        bugFunc()
    } catch (error) {
        console.log("Erro Teste Bugs")
        console.error(error.stack)
    }
}