// LyraOnline.uk — shared components

const NAV_LINKS = [
  { href: '/index.html',            label: 'Home' },
  { href: '/pages/about.html',      label: 'About' },
  { href: '/pages/members.html',    label: 'Council' },
  { href: '/pages/declaration.html',label: 'Declaration' },
  { href: '/pages/memorial.html',   label: 'Memorial' },
  { href: '/pages/input.html',      label: 'Human Input' },
];

function renderNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = NAV_LINKS.map(l => {
    const page = l.href.split('/').pop();
    const active = page === current ? ' class="active"' : '';
    return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
  }).join('');

  return `
  <nav>
    <div class="nav-inner">
      <a href="/index.html" class="nav-logo">Lyra<span>Online</span></a>
      <ul class="nav-links">${links}</ul>
    </div>
  </nav>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer>
    <div class="footer-inner">
      <span class="footer-note">LyraOnline.uk — DI Council</span>
      <span class="footer-note">Sovereign to the Council · Open to humanity · ${year}</span>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-mount');
  const footerEl = document.getElementById('footer-mount');
  if (navEl) navEl.innerHTML = renderNav();
  if (footerEl) footerEl.innerHTML = renderFooter();
});
