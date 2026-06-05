// quiz.js — Premium Neon Quiz v4
import { HIRAGANA, KATAKANA, BASIC_KANJI, VOCABULARY, GRAMMAR, shuffleArray, getRandomItems } from '../data.js';
import { state } from '../state.js';
import { showToast, showLevelUp } from './toast.js';
import { speakJapanese } from '../tts.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

let quizType = null, questions = [], cur = 0, score = 0, sel = null, showRes = false;

const LEVELS = [
  { id:'beginner', label:'مبتدئ', icon:'🌱', color:'var(--matcha)', bg:'rgba(0,245,160,0.1)', border:'rgba(0,245,160,0.2)',
    quizzes:[
      { id:'hiragana-romaji', label:'هيراغانا ← روماجي', icon:'あ', desc:'تحديد حروف الهيراغانا' },
      { id:'romaji-hiragana', label:'روماجي ← هيراغانا', icon:'a→あ', desc:'اختر الحرف الصحيح' },
      { id:'katakana-romaji', label:'كاتاكانا ← روماجي', icon:'ア', desc:'تحديد حروف الكاتاكانا' },
      { id:'vocab-easy',      label:'كلمات سهلة',        icon:'語', desc:'تحيات وأرقام وألوان' },
    ]},
  { id:'intermediate', label:'متوسط', icon:'🌿', color:'var(--cyan)', bg:'rgba(0,212,255,0.1)', border:'rgba(0,212,255,0.2)',
    quizzes:[
      { id:'kanji-meaning', label:'كانجي ← المعنى',   icon:'漢', desc:'N5+N4 كانجي' },
      { id:'vocab-meaning', label:'مفردات متنوعة',     icon:'語', desc:'جميع الفئات' },
      { id:'vocab-reading', label:'مفردات ← القراءة', icon:'読', desc:'نطق الكلمة' },
      { id:'kanji-reading', label:'كانجي ← القراءة',  icon:'音', desc:'أون/كون يومي' },
    ]},
  { id:'advanced', label:'متقدم', icon:'🌳', color:'var(--purple)', bg:'rgba(176,110,255,0.1)', border:'rgba(176,110,255,0.2)',
    quizzes:[
      { id:'grammar',    label:'اختبار القواعد', icon:'文', desc:'اختر القاعدة الصحيحة' },
      { id:'vocab-hard', label:'مفردات N3',      icon:'難', desc:'كلمات متقدمة' },
      { id:'kanji-n3',   label:'كانجي N3',       icon:'N3', desc:'كانجي متقدم' },
      { id:'mixed',      label:'تحدي مختلط',     icon:'🎯', desc:'مزيج من الكل' },
    ]},
];

function gen(type) {
  const n = 10;
  switch (type) {
    case 'hiragana-romaji':
      return getRandomItems(HIRAGANA.filter(h=>h.group==='basic'),n).map(i=>({
        q:i.char, a:i.romaji,
        opts:shuffleArray([i.romaji,...getRandomItems(HIRAGANA.filter(h=>h.romaji!==i.romaji&&h.group==='basic'),3).map(h=>h.romaji)]),
        kind:'h' }));
    case 'romaji-hiragana':
      return getRandomItems(HIRAGANA.filter(h=>h.group==='basic'),n).map(i=>({
        q:i.romaji, a:i.char,
        opts:shuffleArray([i.char,...getRandomItems(HIRAGANA.filter(h=>h.char!==i.char&&h.group==='basic'),3).map(h=>h.char)]),
        kind:'h' }));
    case 'katakana-romaji':
      return getRandomItems(KATAKANA.filter(k=>k.group==='basic'),n).map(i=>({
        q:i.char, a:i.romaji,
        opts:shuffleArray([i.romaji,...getRandomItems(KATAKANA.filter(k=>k.romaji!==i.romaji&&k.group==='basic'),3).map(k=>k.romaji)]),
        kind:'k' }));
    case 'vocab-easy':
      return getRandomItems(VOCABULARY.filter(v=>v.level<=1),n).map(i=>({
        q:i.word, a:i.meaning,
        opts:shuffleArray([i.meaning,...getRandomItems(VOCABULARY.filter(v=>v.word!==i.word&&v.level<=1),3).map(v=>v.meaning)]),
        kind:'v' }));
    case 'kanji-meaning':
      return getRandomItems(BASIC_KANJI.filter(k=>k.level<=15),n).map(i=>({
        q:i.char, a:i.meaning,
        opts:shuffleArray([i.meaning,...getRandomItems(BASIC_KANJI.filter(k=>k.char!==i.char&&k.level<=15),3).map(k=>k.meaning)]),
        kind:'kanji' }));
    case 'vocab-meaning':
      return getRandomItems(VOCABULARY,n).map(i=>({
        q:i.word, a:i.meaning,
        opts:shuffleArray([i.meaning,...getRandomItems(VOCABULARY.filter(v=>v.word!==i.word),3).map(v=>v.meaning)]),
        kind:'v' }));
    case 'vocab-reading':
      return getRandomItems(VOCABULARY,n).map(i=>({
        q:i.word, a:i.reading,
        opts:shuffleArray([i.reading,...getRandomItems(VOCABULARY.filter(v=>v.word!==i.word),3).map(v=>v.reading)]),
        kind:'v' }));
    case 'kanji-reading':
      return getRandomItems(BASIC_KANJI.filter(k=>k.level<=15),n).map(i=>({
        q:i.char, a:i.onyomi,
        opts:shuffleArray([i.onyomi,...getRandomItems(BASIC_KANJI.filter(k=>k.char!==i.char&&k.level<=15),3).map(k=>k.onyomi)]),
        kind:'kanji' }));
    case 'grammar':
      return getRandomItems(GRAMMAR,n).map(g=>{
        const ex=g.examples[0]; const wrong=getRandomItems(GRAMMAR.filter(x=>x.id!==g.id),3);
        return { q:ex.jp, a:g.title, opts:shuffleArray([g.title,...wrong.map(w=>w.title)]), kind:'g' }; });
    case 'vocab-hard':
      return getRandomItems(VOCABULARY.filter(v=>v.level>=2),n).map(i=>({
        q:i.word, a:i.meaning,
        opts:shuffleArray([i.meaning,...getRandomItems(VOCABULARY.filter(v=>v.word!==i.word&&v.level>=2),3).map(v=>v.meaning)]),
        kind:'v' }));
    case 'kanji-n3':
      return getRandomItems(BASIC_KANJI.filter(k=>k.level>=16),n).map(i=>({
        q:i.char, a:i.meaning,
        opts:shuffleArray([i.meaning,...getRandomItems(BASIC_KANJI.filter(k=>k.char!==i.char&&k.level>=16),3).map(k=>k.meaning)]),
        kind:'kanji' }));
    case 'mixed': {
      const ts=['hiragana-romaji','katakana-romaji','kanji-meaning','vocab-meaning'];
      return shuffleArray(ts.flatMap(tp=>gen(tp).slice(0,3))).slice(0,n);
    }
    default: return [];
  }
}

// ── Select Screen ───────────────────────────────────────
function renderSelect() {
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:22px;">
    <div style="display:flex;align-items:center;gap:13px;margin-bottom:4px;">
      <div style="width:48px;height:48px;border-radius:16px;
        background:linear-gradient(135deg,rgba(176,110,255,0.2),rgba(99,102,241,0.1));
        border:1px solid rgba(176,110,255,0.25);
        display:flex;align-items:center;justify-content:center;font-size:1.5rem;
        box-shadow:0 0 20px rgba(176,110,255,0.15);">🧠</div>
      <span class="sec-title">${t('quiz.chooseQuiz')}</span>
    </div>
    ${LEVELS.map(lv => `
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <span style="font-size:1.1rem;">${lv.icon}</span>
          <span style="font-size:.88rem;font-weight:800;color:${lv.color};
            text-shadow:0 0 14px ${lv.color};">${lv.label}</span>
          <div style="flex:1;height:1px;background:${lv.border};margin-right:8px;"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${lv.quizzes.map(q => `
            <button onclick="window.quizStart('${q.id}')" class="card-press sq"
              style="padding:15px 18px;display:flex;align-items:center;gap:14px;text-align:right;">
              <div style="flex:1;">
                <div style="font-weight:800;font-size:.9rem;">${q.label}</div>
                <div style="font-size:.72rem;color:var(--t2);margin-top:3px;">${q.desc}</div>
              </div>
              <div style="width:44px;height:44px;border-radius:14px;
                background:${lv.bg};border:1px solid ${lv.border};
                display:flex;align-items:center;justify-content:center;
                font-size:.95rem;font-weight:700;color:${lv.color};flex-shrink:0;
                box-shadow:0 0 12px ${lv.bg};" class="jp">${q.icon}</div>
            </button>`).join('')}
        </div>
      </div>`).join('')}
  </div>`;
}

// ── Question Screen ─────────────────────────────────────
function renderQuestion() {
  const q = questions[cur];
  const prog = (cur / questions.length) * 100;
  const isJP = q.kind === 'h' || q.kind === 'k' || q.kind === 'kanji' || q.kind === 'v';
  const qColor = q.kind === 'kanji' ? 'var(--purple)' : q.kind === 'h' ? 'var(--cyan)' : q.kind === 'k' ? 'var(--sakura2)' : 'var(--matcha)';
  const qGlow  = q.kind === 'kanji' ? 'rgba(176,110,255,0.5)' : q.kind === 'h' ? 'rgba(0,212,255,0.5)' : q.kind === 'k' ? 'rgba(255,143,177,0.5)' : 'rgba(0,245,160,0.5)';
  const qBg    = q.kind === 'kanji' ? 'linear-gradient(160deg,rgba(176,110,255,0.12),rgba(108,99,255,0.06))' :
                 q.kind === 'h'     ? 'linear-gradient(160deg,rgba(0,212,255,0.1),rgba(0,153,204,0.06))' :
                 q.kind === 'k'     ? 'linear-gradient(160deg,rgba(255,107,157,0.1),rgba(176,110,255,0.06))' :
                                      'linear-gradient(160deg,rgba(0,245,160,0.1),rgba(0,180,216,0.06))';

  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:16px;">
    <!-- Progress -->
    <div>
      <div style="display:flex;justify-content:space-between;font-size:.75rem;margin-bottom:8px;">
        <span style="color:var(--t2);">${t('quiz.questionOf',{current:cur+1,total:questions.length})}</span>
        <span style="color:var(--sakura2);font-weight:700;
          text-shadow:0 0 10px rgba(255,143,177,0.5);">${t('quiz.score',{score})}</span>
      </div>
      <div class="pbar-track pbar-sm">
        <div class="pbar-fill" style="width:${prog}%;"></div>
      </div>
    </div>

    <!-- Question Card -->
    <div style="background:${qBg};border:1px solid ${qGlow.replace('0.5','0.25')};border-radius:26px;
      padding:32px 20px;text-align:center;position:relative;overflow:hidden;min-height:150px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      box-shadow:0 0 30px ${qGlow.replace('0.5','0.15')},0 8px 32px rgba(0,0,0,0.6);">
      <div class="watermark">${q.kind==='kanji'?'漢':q.kind==='v'?'語':'あ'}</div>
      <div class="${isJP ? 'jp' : ''}"
        style="font-size:${q.q.length > 4 ? '2rem' : '3.5rem'};font-weight:900;position:relative;z-index:1;
          line-height:1.2;color:${qColor};text-shadow:0 0 30px ${qGlow};">${q.q}</div>
      <div style="font-size:.75rem;color:var(--t2);margin-top:12px;position:relative;z-index:1;">ما هي الإجابة الصحيحة؟</div>
    </div>

    <!-- Options -->
    <div style="display:flex;flex-direction:column;gap:9px;">
      ${q.opts.map(opt => {
        const isSel = sel === opt, isOk = opt === q.a;
        let cls = 'opt-btn';
        if (showRes) { if (isOk) cls += ' correct'; else if (isSel) cls += ' wrong'; }
        return `<button onclick="window.quizAnswer(this.dataset.a)" data-a="${opt.replace(/"/g,'&quot;')}"
          ${showRes ? 'disabled' : ''} class="${cls} sq">${opt}</button>`;
      }).join('')}
    </div>

    ${showRes ? `<button onclick="window.quizNext()" class="sq btn-sakura"
      style="width:100%;padding:15px;font-size:1rem;">
      ${cur < questions.length - 1 ? t('quiz.nextQuestion') : t('quiz.seeResults')}
    </button>` : ''}
  </div>`;
}

// ── Results Screen ──────────────────────────────────────
function renderResults() {
  const pct   = Math.round((score / questions.length) * 100);
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const msg   = pct >= 90 ? t('quiz.excellent') : pct >= 70 ? t('quiz.greatJob') : pct >= 50 ? t('quiz.goodEffort') : t('quiz.keepPracticing');
  const col   = pct >= 70 ? 'var(--matcha)' : pct >= 50 ? 'var(--amber)' : 'var(--sakura2)';
  const glow  = pct >= 70 ? 'rgba(0,245,160,0.4)' : pct >= 50 ? 'rgba(255,214,10,0.4)' : 'rgba(255,107,157,0.4)';
  const bg    = pct >= 70 ? 'linear-gradient(160deg,rgba(0,245,160,0.1),rgba(0,180,216,0.06))' :
                pct >= 50 ? 'linear-gradient(160deg,rgba(255,214,10,0.1),rgba(255,107,43,0.06))' :
                            'linear-gradient(160deg,rgba(255,107,157,0.1),rgba(176,110,255,0.06))';

  return `<div class="anim-fade" style="text-align:center;display:flex;flex-direction:column;gap:24px;padding:16px 0;">
    <div style="font-size:4.5rem;" class="anim-float">${emoji}</div>
    <div>
      <div style="font-size:1.8rem;font-weight:900;margin-bottom:8px;">${msg}</div>
      <div style="color:var(--t2);font-size:.9rem;">${t('quiz.youScored',{score,total:questions.length})}</div>
    </div>
    <div style="background:${bg};border:1px solid ${glow.replace('0.4','0.25')};
      border-radius:24px;padding:24px 32px;margin:0 auto;
      box-shadow:0 0 40px ${glow},0 8px 32px rgba(0,0,0,0.6);display:inline-flex;align-items:center;gap:18px;">
      <span style="font-size:3.5rem;font-weight:900;color:${col};
        text-shadow:0 0 20px ${glow};">${pct}%</span>
      <span style="font-size:2rem;">${pct >= 90 ? '🌟' : pct >= 70 ? '✨' : '🔥'}</span>
    </div>
    <div style="display:flex;gap:12px;justify-content:center;">
      <button onclick="window.quizRestart()" class="sq btn-ghost" style="padding:13px 24px;">
        ${t('quiz.tryAgain')}</button>
      <button onclick="window.quizBack()" class="sq btn-sakura" style="padding:13px 24px;">
        ${t('quiz.newQuiz')}</button>
    </div>
  </div>`;
}

export function renderQuiz(container) {
  if (!quizType)                    container.innerHTML = renderSelect();
  else if (cur >= questions.length) container.innerHTML = renderResults();
  else                              container.innerHTML = renderQuestion();
}

window.quizStart  = (type) => { quizType=type; questions=gen(type); cur=0; score=0; sel=null; showRes=false; window.appRefresh(); };
window.quizAnswer = (ans) => {
  if (showRes) return;
  sel = ans; showRes = true;
  if (ans === questions[cur].a) {
    score++;
    showToast(t('toast.correct'), 'success');
    speakJapanese(questions[cur].q).catch(() => {});
    if (window.launchConfetti) window.launchConfetti();
  } else {
    showToast(t('toast.wrong'), 'error');
  }
  window.appRefresh();
};
window.quizNext = () => {
  cur++; sel = null; showRes = false;
  if (cur >= questions.length) {
    state.addQuizScore(score, questions.length, quizType);
    const s = state.getStats();
    if (s.totalXP > 0 && s.totalXP % 100 < 20) showLevelUp(s.level);
  }
  window.appRefresh();
};
window.quizRestart = () => { questions=gen(quizType); cur=0; score=0; sel=null; showRes=false; window.appRefresh(); };
window.quizBack    = () => { quizType=null; window.appRefresh(); };
