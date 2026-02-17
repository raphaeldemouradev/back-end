// Promisse - Resenha
function SucessoFunc() {
    const res = document.getElementById("res")
    res.innerHTML = "🎉Sucesso!🎉"

    const img = document.getElementById("img-onca");
    img.innerHTML = ''

    console.log("Sucesso!")
    return "Sucesso!"
}

function CanceladaFunc() {
    const res = document.getElementById("res")
    res.innerHTML = "Cancelada!"

    console.log("Cancelada!")
    return "Cancelada"
}


function Promisse() {
    return new Promise((resolve, reject) => {
        const res = document.getElementById("res")
        const img = document.getElementById("img-onca");
        res.innerHTML = "Averiguando possivel resenha..."
        img.innerHTML = '<img src="assets/averiguando-possivel-resenha.png" >'

        setTimeout(() => {
            const deuCerto = true;

            if (deuCerto) {
                resolve("Aprovado");
            } else {
                reject("Reprovado");
            }
        }, 3000)
    })
}

let tentativas = 0;
async function averiguar() {
    try {
        tentativas++;
        console.log("Aguarde 67 segundos...");

        const resenha = await Promisse()
        console.log(resenha)

        SucessoFunc();
        
    } catch (error) {
        console.error("Não foi possivel Averiguar Resenha!", error.stack)
        CanceladaFunc();
    }
}