const soma = (a, b) => a + b;

if (soma(2, 2) === 4) {
  console.log("✅ Teste passou!");
  process.exit(0); // Sucesso
} else {
  console.error("❌ Teste falhou!");
  process.exit(1); // Erro
}

/*"test": "node index.js"*/