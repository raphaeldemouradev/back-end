let timeId = null; //escopo global var
let acont = 0;

const aumentar = document.getElementById("aumentar");
aumentar.addEventListener('click', function() {
    console.log("Aumentando");

    if (timeId) clearInterval(timeId)

    timeId = setInterval(() => {
        const num = document.getElementById("num");
        num.innerHTML = acont++
    }, 1000)

})

const freio = document.getElementById("freio");
freio.addEventListener('click', function() {
    clearInterval(timeId)

    const num = document.getElementById("num");
    num.innerHTML = 0;
    timeId = null;
    acont = 0;

    console.log("Parou a execução")

})
