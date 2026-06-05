// main.js — Bootstrap + routing
import { state } from './js/state.js';
import { renderDashboard } from './js/ui/dashboard.js';
import { renderLearn }     from './js/ui/learn.js';
import { renderQuiz }      from './js/ui/quiz.js';
import { renderGames }     from './js/ui/games.js';
import { renderProfile }   from './js/ui/profile.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

let currentView = 'dashboard';

const VIEWS = {
  dashboard: renderDashboard,
  learn:     renderLearn,
  quiz:      renderQuiz,
  games:     renderGames,
  profile:   renderProfile,
};

// ── Render ─────────────────────────────────────────────
function render() {
  const main = document.getElementById('main-content');
  if (!main) return;

  const stats = state.getStats();

  const rightPill = stats.streak > 0
    ? `<div class="streak-pill">
         <span class="anim-fire" style="font-size:1.1rem;">🔥</span>
         <span>${stats.streak}</span>
       </div>`
    : `<div class="streak-pill" style="background:rgba(255,214,10,0.1);border-color:rgba(255,214,10,0.25);color:var(--amber);">
         <span>⭐</span>
         <span>${stats.totalXP}</span>
       </div>`;

  main.innerHTML = `
    <header class="header">
      <div style="display:flex;align-items:center;gap:13px;">
        <div class="avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/png?seed=Ninja&backgroundColor=111827" alt="avatar" loading="lazy">
        </div>
        <div>
          <div style="font-size:.75rem;color:var(--t2);font-weight:500;letter-spacing:.02em;">${t('header.greeting')}</div>
          <div style="font-size:1.15rem;font-weight:800;background:linear-gradient(135deg,var(--t1),var(--sakura2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${t('header.level', { level: stats.level })}</div>
        </div>
      </div>
      ${rightPill}
    </header>
    <div id="view-root" style="padding:22px 18px 0;"></div>`;

  // Nav active state
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === currentView);
  });

  // Render view into view-root
  const root = document.getElementById('view-root');
  const fn = VIEWS[currentView];
  if (fn && root) fn(root);
}

// ── Navigation ─────────────────────────────────────────
window.appNavigate = (view) => {
  currentView = view;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
window.appRefresh = () => render();

// ── Confetti ───────────────────────────────────────────
window.launchConfetti = () => {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#FF6B9D','#00F5A0','#B06EFF','#FFD60A','#00D4FF','#FF8FB1','#818CF8','#FF6B2B'];
  const ps = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 200,
    w: 5 + Math.random() * 9,
    h: 3 + Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2.5 + Math.random() * 4.5,
    vx: (Math.random() - .5) * 4,
    rot: Math.random() * 360,
    vr: (Math.random() - .5) * 14,
    shape: Math.random() > .5 ? 'rect' : 'circle',
  }));
  let frame = 0;
  const max = 140;
  (function tick() {
    frame++;
    if (frame > max) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ps.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = Math.max(0, 1 - frame / max);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    });
    requestAnimationFrame(tick);
  })();
};

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await state.load();
  render();

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentView = btn.dataset.view;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
