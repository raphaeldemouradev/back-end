export function renderNavbars() {
  // Renderiza Navbar do Topo
  const topNavContainer = document.getElementById('navbar-top-container');
  if (topNavContainer) {
    topNavContainer.innerHTML = `
      <header class="top-navbar">
        <div class="brand-logo">Prática 006</div>
        <button class="btn-auth-trigger" id="openAuthBtn" type="button">Entrar / Cadastrar</button>
      </header>
    `;
  }

  // Renderiza Navbar Flutuante Inferior (Com a aba Feed)
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