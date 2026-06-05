// toast.js — Premium Neon Notifications
const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

let wrap = null;

function getWrap() {
  if (wrap) return wrap;
  wrap = document.createElement('div');
  wrap.className = 'toast-wrap';
  document.body.appendChild(wrap);
  return wrap;
}

export function showToast(msg, type = 'info', ms = 3000) {
  const cfg = {
    info:    { bg:'rgba(0,212,255,0.12)',    border:'rgba(0,212,255,0.3)',    glow:'rgba(0,212,255,0.2)',    icon:'💡', color:'var(--cyan)' },
    success: { bg:'rgba(0,245,160,0.12)',    border:'rgba(0,245,160,0.3)',    glow:'rgba(0,245,160,0.2)',    icon:'✨', color:'var(--matcha)' },
    warning: { bg:'rgba(255,214,10,0.12)',   border:'rgba(255,214,10,0.3)',   glow:'rgba(255,214,10,0.2)',   icon:'⚠️', color:'var(--amber)' },
    error:   { bg:'rgba(255,71,87,0.12)',    border:'rgba(255,71,87,0.3)',    glow:'rgba(255,71,87,0.2)',    icon:'❌', color:'var(--danger)' },
  };
  const c = cfg[type] || cfg.info;
  const el = document.createElement('div');
  el.style.cssText = `
    pointer-events:auto;
    display:flex;align-items:center;gap:10px;
    padding:12px 18px;border-radius:50px;
    background:${c.bg};
    border:1px solid ${c.border};
    backdrop-filter:blur(20px);
    box-shadow:0 0 20px ${c.glow},0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.08);
    animation:t-in .3s cubic-bezier(.34,1.56,.64,1);
    font-size:.875rem;font-weight:700;color:white;`;
  el.innerHTML = `<span style="font-size:1.1rem;">${c.icon}</span>
    <span style="color:${c.color};text-shadow:0 0 10px ${c.color}80;">${msg}</span>`;
  getWrap().appendChild(el);
  setTimeout(() => {
    el.style.animation = 't-out .3s ease-in forwards';
    setTimeout(() => el.remove(), 300);
  }, ms);
}

export function showLevelUp(level) {
  const el = document.createElement('div');
  el.style.cssText = `
    pointer-events:auto;
    display:flex;flex-direction:column;align-items:center;gap:10px;
    padding:22px 32px;border-radius:28px;
    background:linear-gradient(135deg,rgba(255,107,157,0.18),rgba(176,110,255,0.15));
    border:1px solid rgba(255,107,157,0.3);
    backdrop-filter:blur(20px);
    box-shadow:0 0 40px rgba(255,107,157,0.25),0 12px 48px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.1);
    animation:t-in .4s cubic-bezier(.34,1.56,.64,1);color:white;`;
  el.innerHTML = `
    <div class="anim-glow" style="font-size:2.2rem;">🎉</div>
    <div style="font-size:1.1rem;font-weight:900;color:var(--sakura2);text-shadow:0 0 16px rgba(255,143,177,0.6);">${t('toast.levelUp')}</div>
    <div style="font-size:.85rem;color:var(--t2);">${t('toast.reachedLevel', { level })}</div>`;
  getWrap().appendChild(el);
  if (window.launchConfetti) window.launchConfetti();
  setTimeout(() => {
    el.style.animation = 't-out .3s ease-in forwards';
    setTimeout(() => el.remove(), 300);
  }, 4000);
}
