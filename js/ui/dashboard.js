// dashboard.js — Premium Neon 3D Dashboard
import { state } from '../state.js';
import { HIRAGANA, KATAKANA, BASIC_KANJI, VOCABULARY } from '../data.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

window.dashGoKanji  = () => { window.appNavigate('learn'); setTimeout(() => window.learnSetTab?.('kanji'), 60); };
window.dashGoMemory = () => { window.appNavigate('games'); setTimeout(() => window.gameStart?.('matching'), 60); };
window.dashGoSpeed  = () => { window.appNavigate('games'); setTimeout(() => window.gameStart?.('speed'), 60); };
window.dashGoQuiz   = () => window.appNavigate('quiz');
window.dashGoLearn  = () => window.appNavigate('learn');
window.dashGoGames  = () => window.appNavigate('games');

export function renderDashboard(container) {
  const stats = state.getStats();
  const quest = getQuest(stats);
  const xpPct = 100 - stats.xpToNext;

  container.innerHTML = `
  <div style="display:flex;flex-direction:column;gap:26px;padding-bottom:8px;">

    <!-- ① XP Level Bar -->
    <div class="anim-fade" style="
      background:linear-gradient(135deg,rgba(176,110,255,0.12),rgba(0,212,255,0.06));
      border:1px solid rgba(176,110,255,0.2);
      border-radius:20px;padding:16px 18px;
      box-shadow:0 0 30px rgba(176,110,255,0.08),0 4px 20px rgba(0,0,0,0.5);
      position:relative;overflow:hidden;">
      <div style="position:absolute;top:-30px;left:-20px;width:120px;height:120px;
        background:radial-gradient(circle,rgba(176,110,255,0.15),transparent 70%);pointer-events:none;"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;position:relative;z-index:1;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:.75rem;color:var(--t2);font-weight:600;">المستوى ${stats.level}</span>
          <span style="width:4px;height:4px;border-radius:50%;background:var(--t3);display:inline-block;"></span>
          <span style="font-size:.75rem;color:var(--purple);font-weight:700;">${stats.totalXP} XP</span>
        </div>
        <span style="font-size:.7rem;color:var(--t3);">${stats.xpToNext} للمستوى التالي</span>
      </div>
      <div class="pbar-track pbar-sm pbar-purple" style="position:relative;z-index:1;">
        <div class="pbar-fill" style="width:${xpPct}%;"></div>
      </div>
    </div>

    <!-- ② المهمة الحالية -->
    <section class="anim-fade" style="animation-delay:.08s;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <span class="sec-title">${t('dashboard.currentQuestTitle')}</span>
        <span style="font-size:.72rem;padding:4px 12px;border-radius:50px;
          background:rgba(255,107,157,0.12);color:var(--sakura2);font-weight:700;
          border:1px solid rgba(255,107,157,0.2);">نشط</span>
      </div>
      <div class="card card-pink" style="padding:22px;cursor:pointer;" onclick="window.dashGoLearn()">
        <div style="position:absolute;top:-40px;right:-20px;width:140px;height:140px;
          background:radial-gradient(circle,rgba(255,107,157,0.12),transparent 70%);pointer-events:none;"></div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;position:relative;z-index:1;">
          <div>
            <div style="font-size:1.05rem;font-weight:800;">${quest.name}</div>
            <div style="font-size:.75rem;color:var(--t2);margin-top:4px;">${quest.sub}</div>
          </div>
          <div style="text-align:center;flex-shrink:0;margin-right:12px;">
            <div style="font-size:1.6rem;font-weight:900;color:var(--sakura2);line-height:1;">${quest.pct}%</div>
            <div style="font-size:.6rem;color:var(--t3);">مكتمل</div>
          </div>
        </div>
        <div class="pbar-track" style="position:relative;z-index:1;">
          <div class="pbar-fill" style="width:${quest.pct}%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:.68rem;color:var(--t3);margin-top:8px;position:relative;z-index:1;">
          <span>${quest.done} مكتمل</span>
          <span>من ${quest.total}</span>
        </div>
      </div>
    </section>

    <!-- ③ Bento Grid -->
    <section class="anim-fade" style="animation-delay:.14s;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <span class="sec-title">${t('dashboard.lessonsAndGamesTitle')}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px;">

        <!-- كانجي — بطاقة كبيرة تمتد للصفين -->
        <button onclick="window.dashGoKanji()" class="card-press sq"
          style="grid-row:span 2;padding:24px 16px;display:flex;flex-direction:column;
                 align-items:center;justify-content:center;gap:10px;min-height:180px;
                 background:linear-gradient(160deg,rgba(0,245,160,0.1),rgba(0,180,216,0.06));
                 border:1px solid rgba(0,245,160,0.2);
                 box-shadow:0 0 30px rgba(0,245,160,0.08),0 8px 32px rgba(0,0,0,0.6);">
          <div style="position:absolute;bottom:-20px;left:-20px;width:100px;height:100px;
            background:radial-gradient(circle,rgba(0,245,160,0.12),transparent 70%);pointer-events:none;"></div>
          <span class="jp anim-float" style="font-size:3.8rem;font-weight:900;
            color:var(--matcha);text-shadow:0 0 30px rgba(0,245,160,0.6);line-height:1;position:relative;z-index:1;">漢字</span>
          <span style="font-size:.95rem;font-weight:800;position:relative;z-index:1;">${t('dashboard.kanjiCardTitle')}</span>
          <span style="font-size:.68rem;color:var(--matcha);font-weight:600;
            background:rgba(0,245,160,0.1);padding:3px 10px;border-radius:50px;
            border:1px solid rgba(0,245,160,0.2);position:relative;z-index:1;">${stats.kanjiLearned}/${BASIC_KANJI.length}</span>
        </button>

        <!-- ألعاب الذاكرة -->
        <button onclick="window.dashGoMemory()" class="card-press sq"
          style="padding:16px;display:flex;align-items:center;gap:11px;
                 background:linear-gradient(135deg,rgba(255,107,157,0.1),rgba(176,110,255,0.06));
                 border:1px solid rgba(255,107,157,0.18);
                 box-shadow:0 0 20px rgba(255,107,157,0.06),0 4px 20px rgba(0,0,0,0.5);">
          <span style="font-size:1.8rem;filter:drop-shadow(0 0 8px rgba(255,107,157,0.5));">🎮</span>
          <div style="text-align:right;">
            <div style="font-weight:800;font-size:.88rem;">${t('dashboard.memoryGames')}</div>
            <div style="font-size:.65rem;color:var(--t2);margin-top:2px;">لعبة الذاكرة</div>
          </div>
        </button>

        <!-- تحدي السرعة -->
        <button onclick="window.dashGoSpeed()" class="card-press sq"
          style="padding:16px;display:flex;align-items:center;gap:11px;
                 background:linear-gradient(135deg,rgba(255,214,10,0.1),rgba(255,107,43,0.06));
                 border:1px solid rgba(255,214,10,0.18);
                 box-shadow:0 0 20px rgba(255,214,10,0.06),0 4px 20px rgba(0,0,0,0.5);">
          <span style="font-size:1.8rem;filter:drop-shadow(0 0 8px rgba(255,214,10,0.5));">⚡</span>
          <div style="text-align:right;">
            <div style="font-weight:800;font-size:.88rem;">${t('dashboard.speedChallenge')}</div>
            <div style="font-size:.65rem;color:var(--t2);margin-top:2px;">30 ثانية</div>
          </div>
        </button>
      </div>

      <!-- الصف الثاني: اختبارات + ألعاب -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:13px;">
        <button onclick="window.dashGoQuiz()" class="card-press sq"
          style="padding:16px;display:flex;align-items:center;gap:11px;
                 background:linear-gradient(135deg,rgba(176,110,255,0.1),rgba(99,102,241,0.06));
                 border:1px solid rgba(176,110,255,0.18);
                 box-shadow:0 0 20px rgba(176,110,255,0.06),0 4px 20px rgba(0,0,0,0.5);">
          <span style="font-size:1.8rem;filter:drop-shadow(0 0 8px rgba(176,110,255,0.5));">🧠</span>
          <div style="text-align:right;">
            <div style="font-weight:800;font-size:.88rem;">${t('dashboard.quizzes')}</div>
            <div style="font-size:.65rem;color:var(--t2);margin-top:2px;">12 اختبار</div>
          </div>
        </button>
        <button onclick="window.dashGoGames()" class="card-press sq"
          style="padding:16px;display:flex;align-items:center;gap:11px;
                 background:linear-gradient(135deg,rgba(0,212,255,0.1),rgba(0,153,204,0.06));
                 border:1px solid rgba(0,212,255,0.18);
                 box-shadow:0 0 20px rgba(0,212,255,0.06),0 4px 20px rgba(0,0,0,0.5);">
          <span style="font-size:1.8rem;filter:drop-shadow(0 0 8px rgba(0,212,255,0.5));">🕹️</span>
          <div style="text-align:right;">
            <div style="font-weight:800;font-size:.88rem;">الألعاب</div>
            <div style="font-size:.65rem;color:var(--t2);margin-top:2px;">6 ألعاب</div>
          </div>
        </button>
      </div>
    </section>

    <!-- ④ إحصائيات نيون -->
    <section class="anim-fade" style="animation-delay:.2s;">
      <p class="sec-sub">${t('dashboard.performance')}</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
        ${statTile('📝', stats.charsLearned, t('dashboard.characters'), 'var(--sakura2)', 'rgba(255,107,157,0.1)', 'rgba(255,107,157,0.2)')}
        ${statTile('漢', stats.kanjiLearned, t('dashboard.kanji'), 'var(--purple)', 'rgba(176,110,255,0.1)', 'rgba(176,110,255,0.2)', true)}
        ${statTile('🎯', stats.avgQuizScore + '%', t('dashboard.avgScore'), 'var(--matcha)', 'rgba(0,245,160,0.1)', 'rgba(0,245,160,0.2)')}
      </div>
    </section>

    <!-- ⑤ بداية سريعة -->
    <section class="anim-fade" style="animation-delay:.26s;padding-bottom:4px;">
      <p class="sec-sub">${t('dashboard.quickStart')}</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${quickBtn('あ', 'rgba(0,212,255,0.12)', 'rgba(0,212,255,0.2)', "window.appNavigate('learn')", t('dashboard.learnChars'), t('dashboard.learnCharsDesc'), 'var(--cyan)')}
        ${quickBtn('🧠', 'rgba(176,110,255,0.12)', 'rgba(176,110,255,0.2)', "window.dashGoQuiz()", t('dashboard.takeQuiz'), t('dashboard.takeQuizDesc'), 'var(--purple)')}
        ${quickBtn('🎮', 'rgba(255,214,10,0.1)', 'rgba(255,214,10,0.2)', "window.dashGoGames()", t('dashboard.playGames'), t('dashboard.playGamesDesc'), 'var(--amber)')}
      </div>
    </section>

  </div>`;
}

function statTile(icon, val, label, color, bg, border, isJp = false) {
  return `<div style="background:${bg};border:1px solid ${border};border-radius:18px;
    padding:16px 10px;text-align:center;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);">
    <div class="${isJp ? 'jp' : ''}" style="font-size:1.3rem;margin-bottom:5px;color:${color};
      text-shadow:0 0 16px ${color};">${icon}</div>
    <div style="font-size:1.5rem;font-weight:900;color:${color};text-shadow:0 0 12px ${color}60;">${val}</div>
    <div style="font-size:.62rem;color:var(--t2);margin-top:3px;font-weight:600;">${label}</div>
  </div>`;
}

function quickBtn(icon, bg, border, onclick, title, desc, accentColor) {
  return `<button onclick="${onclick}" class="sq"
    style="padding:15px 18px;display:flex;align-items:center;gap:14px;
      background:${bg};border:1px solid ${border};border-radius:20px;
      text-align:right;width:100%;transition:all .2s ease;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);">
    <div style="width:42px;height:42px;border-radius:14px;
      background:${bg};border:1px solid ${border};
      display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;
      box-shadow:0 0 16px ${accentColor}30;">${icon}</div>
    <div style="flex:1;">
      <div style="font-weight:800;font-size:.9rem;">${title}</div>
      <div style="font-size:.7rem;color:var(--t2);margin-top:3px;">${desc}</div>
    </div>
    <svg style="width:14px;height:14px;color:var(--t3);flex-shrink:0;transform:rotate(180deg);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
    </svg>
  </button>`;
}

function getQuest(stats) {
  const total = HIRAGANA.length + KATAKANA.length;
  const cp = stats.charsLearned;
  const kp = stats.kanjiLearned;
  const vp = stats.vocabLearned;

  if (cp < total) {
    const pct = Math.round((cp / total) * 100);
    return { name: 'إتقان الحروف اليابانية', sub: 'هيراغانا + كاتاكانا', pct, done: cp, total };
  }
  if (kp < BASIC_KANJI.length) {
    const pct = Math.round((kp / BASIC_KANJI.length) * 100);
    return { name: 'تعلم الكانجي', sub: 'N5 + N4 + N3', pct, done: kp, total: BASIC_KANJI.length };
  }
  if (vp < VOCABULARY.length) {
    const pct = Math.round((vp / VOCABULARY.length) * 100);
    return { name: 'توسيع المفردات', sub: 'مفردات JLPT', pct, done: vp, total: VOCABULARY.length };
  }
  return { name: 'أتممت الرحلة! 🎉', sub: 'أنت محترف الآن', pct: 100, done: stats.totalXP, total: stats.totalXP };
}
