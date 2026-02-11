//Deve ser usado com "throw new Error"
async function erroError() {
  try {
    throw new Error("Mensagem manual!");
  } catch (error) {
    console.error("Erro de busca,", error.message);
  }
}

//

async function erroMsg() {
  try {
    await getDados();
  } catch (error) {
    console.error("Erro de busca", error.message);
  }
}

//

async function erroName() {
  try {
    await getDados();
  } catch (error) {
    console.error("Erro de busca", error.name);
  }
}

//Melhor Opção
async function erroStack() {
  try {
    await getDados();
  } catch (error) {
    console.error("Erro de busca", error.stack);
  }
}
