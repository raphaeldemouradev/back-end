export function renderNavbars() {
  const topNavContainer = document.getElementById('navbar-top-container');
  
  // Recupera os dados do usuário salvos no navegador
  const savedUser = JSON.parse(localStorage.getItem('user_session'));

  if (topNavContainer) {
    topNavContainer.innerHTML = `
      <style>
        .top-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
          background-color: #1e293b;
          color: #f8fafc;
          border-bottom: 1px solid #334155;
        }

        .brand-logo {
          font-weight: 700;
          font-size: 1.2rem;
          color: #38bdf8;
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* Estilização do Link do Perfil */
        .user-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background-color: #334155;
          color: #f8fafc;
          text-decoration: none;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #475569;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .user-profile-link:hover {
          background-color: #475569;
          border-color: #38bdf8;
          color: #38bdf8;
        }

        .btn-auth-trigger {
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          border: none;
          background-color: #38bdf8;
          color: #0f172a;
          transition: background-color 0.2s ease;
        }

        .btn-auth-trigger:hover {
          background-color: #0284c7;
          color: #ffffff;
        }

        .btn-auth-trigger.secondary {
          background-color: transparent;
          color: #94a3b8;
          border: 1px solid #475569;
        }

        .btn-auth-trigger.secondary:hover {
          background-color: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
        }
      </style>

      <header class="top-navbar">
        <div class="brand-logo">Prática 006</div>
        <div class="auth-buttons">
          ${savedUser ? `
            <!-- ✅ ROTA CORRIGIDA (Altere para /perfil.html se estiver na raiz) -->
            <a href="/perfil.html" class="user-profile-link">
              👤 ${savedUser.name}
            </a>
            <button class="btn-auth-trigger secondary" id="logoutBtn" type="button">Sair</button>
          ` : `
            <button class="btn-auth-trigger" id="openLoginBtn" type="button">Entrar</button>
            <button class="btn-auth-trigger secondary" id="openRegisterBtn" type="button">Cadastrar</button>
          `}
        </div>
      </header>
    `;
  }

  // Listener para a ação de Sair (Logout)
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'logoutBtn') {
      localStorage.removeItem('user_session');
      window.location.href = '/'; // Retorna ao Feed principal
    }
  });

  const bottomNavContainer = document.getElementById('navbar-bottom-container');
  if (bottomNavContainer) {
    bottomNavContainer.innerHTML = `
      <nav class="floating-navbar">
        <button class="nav-tab active" type="button">Feed</button>
        <button class="nav-tab" type="button">Notícias</button>
      </nav>
    `;
  }
}