// Sistema de verificação de autenticação
// Adicione isto nos <head> das páginas protegidas: <script src="js/auth-check.js"></script>

(function() {
  'use strict';

  // Lista de páginas públicas (não precisam autenticação)
  const PUBLIC_PAGES = ['index.html', 'auth.html', 'como-funciona.html'];

  // Get current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Verificar autenticação
  const isAuthenticated = localStorage.getItem('showlink_authenticated') === 'true';
  const user = JSON.parse(localStorage.getItem('showlink_user') || '{}');

  // Se página é protegida e não está autenticado, redirecionar para login
  if (!PUBLIC_PAGES.includes(currentPage) && !isAuthenticated) {
    window.location.href = 'auth.html?redirectFrom=' + encodeURIComponent(currentPage);
    return;
  }

  // Adicionar dados do usuário ao document para uso em scripts
  window.showlink = {
    user: user,
    isAuthenticated: isAuthenticated,
    logout: function() {
      localStorage.removeItem('showlink_authenticated');
      localStorage.removeItem('showlink_user');
      window.location.href = 'index.html';
    },
    getPersonaColor: function(persona) {
      const colors = {
        fan: '#FF3D7F',
        artist: '#10B981',
        producer: '#8B5CF6',
        sponsor: '#35A7FF',
        venue: '#FF8A34',
        operator: '#C7F73E'
      };
      return colors[persona] || '#8B5CF6';
    }
  };

  // Adicionar logout button ao header (se houver)
  window.addEventListener('DOMContentLoaded', function() {
    if (isAuthenticated) {
      const header = document.querySelector('header .hwrap');
      if (header && !document.querySelector('.logout-btn')) {
        const nav = header.querySelector('nav');
        if (nav) {
          const logoutBtn = document.createElement('button');
          logoutBtn.className = 'logout-btn';
          logoutBtn.textContent = '👤 ' + (user.name || 'Usuário');
          logoutBtn.style.cssText = `
            background: var(--navy);
            border: 1px solid var(--line);
            color: var(--paper);
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            font-family: var(--body);
            transition: all 0.2s;
            margin-left: auto;
          `;
          logoutBtn.onmouseover = () => { logoutBtn.style.borderColor = 'var(--lime)'; };
          logoutBtn.onmouseout = () => { logoutBtn.style.borderColor = 'var(--line)'; };
          logoutBtn.onclick = () => {
            if (confirm('Desconectar da conta?')) {
              window.showlink.logout();
            }
          };
          nav.parentElement.insertBefore(logoutBtn, nav);
        }
      }
    }
  });
})();
