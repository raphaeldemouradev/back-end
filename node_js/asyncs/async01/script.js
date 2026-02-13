function PrimariFun() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Aguarde tempo!")
            resolve()
        }, 1000)
    })
}

async function SegundaFunc() {
    console.log("iniciou")

    await PrimariFun()

    console.log("Terminou")
}

SegundaFunc()