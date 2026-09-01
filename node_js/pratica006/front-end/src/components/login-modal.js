export function renderLoginModal() {
  const container = document.getElementById('login-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-overlay" id="loginModal">
      <div class="auth-card">
        <div class="auth-header">
          <h3>Entrar na Conta</h3>
          <button class="close-modal" id="closeLoginBtn" type="button">&times;</button>
        </div>
        <form class="auth-form" id="loginForm">
          <div class="form-group">
            <label for="loginEmail">E-mail</label>
            <input type="email" id="loginEmail" placeholder="seu@email.com" required>
          </div>
          <div class="form-group">
            <label for="loginPassword">Senha</label>
            <input type="password" id="loginPassword" placeholder="••••••••" required>
          </div>
          <button class="btn-submit" type="submit">Entrar</button>
        </form>
        <div class="auth-toggle-text">
          Ainda não tem conta? <span id="switchToRegister">Cadastre-se</span>
        </div>
      </div>
    </div>
  `;

  // Eventos internos do modal de Login
  const modal = document.getElementById('loginModal');
  const closeBtn = document.getElementById('closeLoginBtn');
  const form = document.getElementById('loginForm');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      console.log('[LOGIN] Tentando autenticar:', { email, password });
    });
  }
}