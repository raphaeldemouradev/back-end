document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('authModal');
  const btnClose = document.getElementById('closeAuthBtn');
  const form = document.getElementById('authForm');
  const modalTitle = document.getElementById('modalTitle');
  const toggleAuthMode = document.getElementById('toggleAuthMode');
  const submitBtn = document.getElementById('submitBtn');

  let isLoginMode = true;

  // Ouvinte global para capturar o clique no botão gerado pelo componente
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'openAuthBtn') {
      modal.classList.add('active');
    }
  });

  if (btnClose) {
    btnClose.addEventListener('click', () => modal.classList.remove('active'));
  }

  // Alternar entre Entrar e Cadastrar
  if (toggleAuthMode) {
    toggleAuthMode.addEventListener('click', () => {
      isLoginMode = !isLoginMode;
      if (isLoginMode) {
        modalTitle.textContent = 'Entrar na Conta';
        submitBtn.textContent = 'Entrar';
        toggleAuthMode.innerHTML = 'Não tem conta? <span>Cadastre-se</span>';
      } else {
        modalTitle.textContent = 'Criar Nova Conta';
        submitBtn.textContent = 'Cadastrar';
        toggleAuthMode.innerHTML = 'Já tem conta? <span>Entre aqui</span>';
      }
    });
  }

  // Submit do formulário
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;

      console.log(`[AUTH] Dados para ${isLoginMode ? 'Login' : 'Cadastro'}:`, { email, password });
    });
  }
});