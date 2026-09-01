export function renderNavbars() {
  const topNavContainer = document.getElementById('navbar-top-container');
  if (topNavContainer) {
    topNavContainer.innerHTML = `
      <header class="top-navbar">
        <div class="brand-logo">Prática 006</div>
        <div class="auth-buttons">
          <button class="btn-auth-trigger" id="openLoginBtn" type="button">Entrar</button>
          <button class="btn-auth-trigger secondary" id="openRegisterBtn" type="button">Cadastrar</button>
        </div>
      </header>
    `;
  }

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