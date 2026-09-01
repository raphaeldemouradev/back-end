import { renderNavbars } from '../src/components/navbar.js';
import { renderLoginModal } from '../src/components/login-modal.js';
import { renderRegisterModal } from '../src/components/register-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderiza os componentes na tela
  renderNavbars();
  renderLoginModal();
  renderRegisterModal();

  // 2. Elementos dos modais injetados
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');

  // 3. Delegation de cliques para abrir/alternar modais
  document.addEventListener('click', (e) => {
    // Abrir Login
    if (e.target && e.target.id === 'openLoginBtn') {
      registerModal?.classList.remove('active');
      loginModal?.classList.add('active');
    }

    // Abrir Cadastro
    if (e.target && e.target.id === 'openRegisterBtn') {
      loginModal?.classList.remove('active');
      registerModal?.classList.add('active');
    }

    // Alternar de Login para Cadastro dentro do Modal
    if (e.target && e.target.id === 'switchToRegister') {
      loginModal?.classList.remove('active');
      registerModal?.classList.add('active');
    }

    // Alternar de Cadastro para Login dentro do Modal
    if (e.target && e.target.id === 'switchToLogin') {
      registerModal?.classList.remove('active');
      loginModal?.classList.add('active');
    }
  });
});