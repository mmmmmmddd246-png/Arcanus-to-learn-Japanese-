// profile.js — Premium Neon Profile v4
import { state } from '../state.js';
import { showToast } from './toast.js';
import { HIRAGANA, KATAKANA, BASIC_KANJI, VOCABULARY, GRAMMAR, SENTENCES } from '../data.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

export function renderProfile(container) {
  const stats = state.getStats();
  const total = HIRAGANA.length + KATAKANA.length;
  const xpPct = 100 - stats.xpToNext;
  const cpct  = Math.min(100, Math.round((stats.charsLearned / total) * 100));
  const kpct  = Math.min(100, Math.round((stats.kanjiLearned / BASIC_KANJI.length) * 100));
  const vpct  = Math.min(100, Math.round((stats.vocabLearned / VOCABULARY.length) * 100));

  container.innerHTML = `
  <div class="anim-fade" style="display:flex;flex-direction:column;gap:22px;padding-bottom:8px;">

    <!-- Hero Profile Card -->
    <div style="background:linear-gradient(160deg,rgba(176,110,255,0.14),rgba(0,212,255,0.07),rgba(255,107,157,0.08));
      border:1px solid rgba(255,255,255,0.1);border-radius:28px;padding:30px 20px;text-align:center;
      box-shadow:0 0 60px rgba(176,110,255,0.1),0 8px 40px rgba(0,0,0,0.7);
      position:relative;overflow:hidden;">
      <!-- Decorative orbs -->
      <div style="position:absolute;top:-40px;right:-30px;width:130px;height:130px;
        background:radial-gradient(circle,rgba(176,110,255,0.15),transparent 70%);pointer-events:none;"></div>
      <div style="position:absolute;bottom:-30px;left:-20px;width:100px;height:100px;
        background:radial-gradient(circle,rgba(0,212,255,0.12),transparent 70%);pointer-events:none;"></div>

      <!-- Level ring -->
      <div style="width:84px;height:84px;border-radius:50%;margin:0 auto 18px;position:relative;z-index:1;
        background:conic-gradient(var(--sakura) ${xpPct * 3.6}deg,rgba(255,255,255,0.05) 0deg);
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 0 30px rgba(255,107,157,0.3),0 0 60px rgba(176,110,255,0.15);">
        <div style="width:70px;height:70px;border-radius:50%;background:var(--surface);
          display:flex;align-items:center;justify-content:center;
          font-size:1.8rem;font-weight:900;">${stats.level}</div>
      </div>

      <div style="font-size:1.5rem;font-weight:900;position:relative;z-index:1;
        background:linear-gradient(135deg,var(--t1),var(--sakura2));
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
        ${t('profile.levelLearner', { level: stats.level })}
      </div>
      <div style="font-size:.88rem;margin-top:6px;color:var(--sakura2);font-weight:700;
        text-shadow:0 0 14px rgba(255,143,177,0.5);position:relative;z-index:1;">
        ${stats.totalXP} XP
      </div>

      <!-- XP bar -->
      <div style="max-width:220px;margin:18px auto 0;position:relative;z-index:1;">
        <div style="display:flex;justify-content:space-between;font-size:.68rem;color:var(--t3);margin-bottom:7px;">
          <span>Lv.${stats.level}</span>
          <span>${stats.xpToNext} XP للتالي</span>
          <span>Lv.${stats.level+1}</span>
        </div>
        <div class="pbar-track pbar-sm">
          <div class="pbar-fill" style="width:${xpPct}%;"></div>
        </div>
      </div>
    </div>

    <!-- إحصائيات 2×2 -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      ${statCard('🔥', stats.streak, t('profile.dayStreak'), 'var(--orange)', 'rgba(255,107,43,0.12)', 'rgba(255,107,43,0.25)', true)}
      ${statCard('📝', stats.totalQuizzes, t('profile.quizzesTaken'), 'var(--cyan)', 'rgba(0,212,255,0.1)', 'rgba(0,212,255,0.2)')}
      ${statCard('🎯', stats.avgQuizScore+'%', t('profile.avgScore'), 'var(--matcha)', 'rgba(0,245,160,0.1)', 'rgba(0,245,160,0.2)')}
      ${statCard('⭐', stats.totalXP, 'مجموع XP', 'var(--amber)', 'rgba(255,214,10,0.1)', 'rgba(255,214,10,0.2)')}
    </div>

    <!-- أشرطة التقدم -->
    <div>
      <p class="sec-sub">${t('profile.learningProgress')}</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${bar(t('profile.characters'), stats.charsLearned, total, cpct, 'pbar-cyan', `${HIRAGANA.length}+${KATAKANA.length} حرف`, 'var(--cyan)')}
        ${bar(t('profile.kanji'), stats.kanjiLearned, BASIC_KANJI.length, kpct, 'pbar-purple', 'N5+N4+N3', 'var(--purple)')}
        ${bar(t('profile.vocabulary'), stats.vocabLearned, VOCABULARY.length, vpct, 'pbar-matcha', 'N5+N4 مفردات', 'var(--matcha)')}
        ${bar('قواعد اللغة', GRAMMAR.length, GRAMMAR.length, 100, 'pbar-amber', `${GRAMMAR.length} نمط`, 'var(--amber)')}
        ${bar('جمل القراءة', SENTENCES.length, SENTENCES.length, 100, 'pbar-indigo', `${SENTENCES.length} جملة`, 'var(--indigo)')}
      </div>
    </div>

    <!-- الإنجازات -->
    <div>
      <p class="sec-sub">${t('profile.achievements')}</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
        ${achievements(stats).map(a => `
          <div style="background:${a.on ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)'};
            border:1px solid ${a.on ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)'};
            border-radius:18px;padding:14px;text-align:center;
            box-shadow:${a.on ? '0 0 20px rgba(255,255,255,0.03),0 4px 16px rgba(0,0,0,0.5)' : 'none'};
            ${a.on ? '' : 'opacity:.3;'}
            transition:all .2s ease;">
            <div style="font-size:1.6rem;margin-bottom:6px;" ${a.on ? 'class="anim-float"' : ''}>${a.icon}</div>
            <div style="font-size:.62rem;color:${a.on ? 'var(--t2)' : 'var(--t3)'};line-height:1.4;font-weight:600;">${a.name}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- إعادة تعيين -->
    <div style="padding-top:8px;border-top:1px solid rgba(255,255,255,0.04);">
      <button onclick="window.profileReset()" class="sq"
        style="width:100%;padding:14px;border-radius:50px;font-size:.88rem;font-weight:700;
          background:rgba(255,71,87,0.08);border:1px solid rgba(255,71,87,0.2);color:var(--danger);
          box-shadow:0 0 20px rgba(255,71,87,0.05);transition:all .2s ease;">
        🗑️ ${t('profile.resetProgress')}
      </button>
    </div>

  </div>`;
}

function statCard(icon, val, label, color, bg, border, fire = false) {
  return `<div style="background:${bg};border:1px solid ${border};border-radius:20px;
    padding:20px 14px;text-align:center;
    box-shadow:0 0 20px ${bg},0 4px 20px rgba(0,0,0,0.5);">
    <div style="font-size:1.6rem;margin-bottom:6px;" ${fire ? 'class="anim-fire"' : ''}>${icon}</div>
    <div style="font-size:2rem;font-weight:900;color:${color};text-shadow:0 0 14px ${color}60;">${val}</div>
    <div style="font-size:.68rem;color:var(--t2);margin-top:4px;font-weight:600;">${label}</div>
  </div>`;
}

function bar(label, val, max, pct, cls, note, color) {
  return `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);
    border-radius:18px;padding:15px;">
    <div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:9px;">
      <span style="color:var(--t2);font-weight:600;">${label}</span>
      <span style="font-weight:800;color:${color};text-shadow:0 0 10px ${color}60;">${val}/${max}</span>
    </div>
    <div class="pbar-track pbar-sm ${cls}">
      <div class="pbar-fill" style="width:${pct}%;"></div>
    </div>
    <div style="font-size:.62rem;color:var(--t3);margin-top:7px;font-weight:600;">${note}</div>
  </div>`;
}

function achievements(s) {
  return [
    { icon:'🌱', name:t('achievements.firstSteps'), on: s.charsLearned >= 5 },
    { icon:'📚', name:t('achievements.scholar'),    on: s.charsLearned >= 46 },
    { icon:'🧠', name:t('achievements.quizMaster'), on: s.totalQuizzes >= 10 },
    { icon:'🔥', name:t('achievements.onFire'),     on: s.streak >= 7 },
    { icon:'⭐', name:t('achievements.xpHunter'),   on: s.totalXP >= 500 },
    { icon:'🏆', name:t('achievements.champion'),   on: s.avgQuizScore >= 90 },
    { icon:'📖', name:t('achievements.vocabulary'), on: s.vocabLearned >= 20 },
    { icon:'🎯', name:t('achievements.perfectionist'), on: s.kanjiLearned >= 30 },
    { icon:'💎', name:t('achievements.dedicated'),  on: s.totalXP >= 1000 },
    { icon:'📝', name:t('achievements.grammarPro'), on: s.totalQuizzes >= 20 },
    { icon:'🗣️', name:t('achievements.sentenceMaster'), on: s.charsLearned >= 71 },
    { icon:'🌏', name:t('achievements.polyglot'),   on: s.vocabLearned >= 50 },
  ];
}

window.profileReset = async () => {
  if (confirm(t('profile.resetConfirm'))) {
    await state.reset();
    showToast(t('toast.progressReset'), 'info');
    window.appRefresh();
  }
};
