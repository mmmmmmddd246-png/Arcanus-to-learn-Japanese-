// learn.js — Premium Neon Flashcards v4
import { HIRAGANA, KATAKANA, BASIC_KANJI, VOCABULARY, SENTENCES, SENTENCE_CATEGORIES, GROUP_LABELS, getGroups, GRAMMAR } from '../data.js';
import { state } from '../state.js';
import { showToast } from './toast.js';
import { speakJapanese, speakSlow, stopSpeech } from '../tts.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

let curTab = 'hiragana', curGroup = null, fcIdx = 0, showAns = false, grIdx = 0, showGrEx = false;

const TABS = [
  { id:'hiragana',   label:'ひらがな', icon:'あ', color:'var(--cyan)',   bg:'rgba(0,212,255,0.12)',   border:'rgba(0,212,255,0.25)',   arabicLabel:'هيراغانا' },
  { id:'katakana',   label:'カタカナ', icon:'ア', color:'var(--sakura2)',bg:'rgba(255,107,157,0.12)', border:'rgba(255,107,157,0.25)', arabicLabel:'كاتاكانا' },
  { id:'kanji',      label:'漢字',     icon:'漢', color:'var(--purple)', bg:'rgba(176,110,255,0.12)', border:'rgba(176,110,255,0.25)', arabicLabel:'كانجي' },
  { id:'vocabulary', label:'語彙',     icon:'語', color:'var(--matcha)', bg:'rgba(0,245,160,0.12)',   border:'rgba(0,245,160,0.25)',   arabicLabel:'مفردات' },
  { id:'sentences',  label:'文章',     icon:'📖', color:'var(--indigo)', bg:'rgba(129,140,248,0.12)', border:'rgba(129,140,248,0.25)', arabicLabel:'جمل' },
  { id:'grammar',    label:'文法',     icon:'文', color:'var(--amber)',  bg:'rgba(255,214,10,0.1)',   border:'rgba(255,214,10,0.25)',  arabicLabel:'قواعد' },
];

const DESC = {
  hiragana:   'الكتابة اليابانية الأساسية — 46 حرف أساسي + داكوتين + كومبو (107 إجمالاً)',
  katakana:   'للكلمات الأجنبية والأسماء — نفس أصوات الهيراغانا بشكل مختلف',
  kanji:      'الرموز الصينية المُستخدمة في اليابانية — N5 وN4 وN3',
  vocabulary: 'مفردات أساسية منظمة: تحيات، أرقام، ألوان، طعام، حيوانات وغيرها',
  sentences:  'جمل يومية مع القراءة والمعنى — مثالية لتعلم التركيب',
  grammar:    'أنماط قواعدية أساسية مع شرح وأمثلة تفاعلية',
};

function curTab_() { return TABS.find(tb => tb.id === curTab); }

function tabData() {
  switch(curTab) {
    case 'hiragana':   return { data:HIRAGANA,    gk:'group' };
    case 'katakana':   return { data:KATAKANA,    gk:'group' };
    case 'kanji':      return { data:BASIC_KANJI, gk:'level' };
    case 'vocabulary': return { data:VOCABULARY,  gk:'category' };
    case 'sentences':  return { data:SENTENCES,   gk:'category' };
    default:           return { data:HIRAGANA,    gk:'group' };
  }
}

// ── Voice Buttons ───────────────────────────────────────
const spkBtn = (text) => {
  const e = text.replace(/'/g,"\\'");
  return `<button onclick="event.stopPropagation();window.lnSpeak('${e}')" class="voice-btn sq" aria-label="نطق"
    style="background:rgba(0,212,255,0.08);border-color:rgba(0,212,255,0.2);">
    <svg style="width:17px;height:17px;color:var(--cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
    </svg></button>`;
};
const slowBtn = (text) => {
  const e = text.replace(/'/g,"\\'");
  return `<button onclick="event.stopPropagation();window.lnSlow('${e}')" class="voice-btn sq" aria-label="نطق بطيء"
    style="background:rgba(255,214,10,0.08);border-color:rgba(255,214,10,0.2);">
    <svg style="width:15px;height:15px;color:var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg></button>`;
};

// ── Tabs Bar ────────────────────────────────────────────
function renderTabs() {
  return `<div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:4px;" class="no-scroll">
    ${TABS.map(tab => {
      const act = curTab === tab.id;
      return `<button onclick="window.lnTab('${tab.id}')" class="chip sq"
        style="background:${act ? tab.bg : 'rgba(255,255,255,0.04)'};
               color:${act ? tab.color : 'var(--t3)'};
               border-color:${act ? tab.border : 'transparent'};
               box-shadow:${act ? `0 0 14px ${tab.bg}` : 'none'};
               font-size:.8rem;padding:7px 14px;">
        <span class="jp" style="font-size:.9rem;">${tab.icon}</span>
        <span>${tab.arabicLabel}</span>
      </button>`;
    }).join('')}
  </div>`;
}

// ── Flashcard Content ───────────────────────────────────
function renderCard(item) {
  const tb = curTab_();

  if (curTab === 'hiragana' || curTab === 'katakana') {
    const gl = GROUP_LABELS[item.group] || item.group;
    const frontBg = curTab === 'hiragana'
      ? 'linear-gradient(160deg,rgba(0,212,255,0.12),rgba(0,153,204,0.06))'
      : 'linear-gradient(160deg,rgba(255,107,157,0.12),rgba(176,110,255,0.06))';
    const backBg = 'linear-gradient(160deg,rgba(0,245,160,0.1),rgba(0,180,216,0.06))';
    return `<div class="fc-inner ${showAns ? 'flipped' : ''}">
      <div class="fc-face" style="background:${frontBg};border:1px solid ${tb.border};border-radius:28px;">
        <div style="font-size:.7rem;color:${tb.color};margin-bottom:10px;font-weight:700;
          background:${tb.bg};padding:4px 12px;border-radius:50px;border:1px solid ${tb.border};">${tb.arabicLabel} · ${gl}</div>
        <div class="jp" style="font-size:5.5rem;font-weight:900;margin-bottom:20px;line-height:1;
          color:${tb.color};text-shadow:0 0 40px ${tb.color}80;">${item.char}</div>
        <div style="display:flex;gap:8px;">${spkBtn(item.char)}${slowBtn(item.char)}
          <button onclick="event.stopPropagation();window.lnFlip()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--t2);">${t('learn.tapReveal')}</button>
        </div>
      </div>
      <div class="fc-face fc-back" style="background:${backBg};border:1px solid rgba(0,245,160,0.25);border-radius:28px;">
        <div style="font-size:.7rem;color:var(--matcha);margin-bottom:10px;font-weight:700;
          background:rgba(0,245,160,0.1);padding:4px 12px;border-radius:50px;">${tb.arabicLabel} · ${gl}</div>
        <div class="jp" style="font-size:4rem;font-weight:900;margin-bottom:10px;line-height:1;
          color:var(--matcha);text-shadow:0 0 30px rgba(0,245,160,0.7);">${item.char}</div>
        <div style="font-size:2rem;font-weight:900;color:var(--matcha);margin-bottom:6px;">${item.romaji}</div>
        <div style="display:flex;gap:8px;margin-top:14px;">${spkBtn(item.char)}${slowBtn(item.char)}
          <button onclick="event.stopPropagation();window.lnNext()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--matcha);background:rgba(0,245,160,0.1);">${t('learn.next')}</button>
        </div>
      </div>
    </div>`;
  }

  if (curTab === 'kanji') {
    const lvl = item.level <= 10 ? 'N5' : item.level <= 15 ? 'N4' : 'N3';
    return `<div class="fc-inner ${showAns ? 'flipped' : ''}">
      <div class="fc-face" style="background:linear-gradient(160deg,rgba(176,110,255,0.12),rgba(108,99,255,0.06));
        border:1px solid rgba(176,110,255,0.25);border-radius:28px;">
        <div style="font-size:.7rem;color:var(--purple);margin-bottom:10px;font-weight:700;
          background:rgba(176,110,255,0.1);padding:4px 12px;border-radius:50px;">${lvl} · مستوى ${item.level}</div>
        <div class="jp" style="font-size:5.5rem;font-weight:900;margin-bottom:20px;line-height:1;
          color:var(--purple);text-shadow:0 0 40px rgba(176,110,255,0.8);">${item.char}</div>
        <div style="display:flex;gap:8px;">${spkBtn(item.char)}${slowBtn(item.char)}
          <button onclick="event.stopPropagation();window.lnFlip()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--t2);">${t('learn.tapReveal')}</button>
        </div>
      </div>
      <div class="fc-face fc-back" style="background:linear-gradient(160deg,rgba(255,214,10,0.1),rgba(255,107,43,0.06));
        border:1px solid rgba(255,214,10,0.25);border-radius:28px;">
        <div style="font-size:.7rem;color:var(--amber);margin-bottom:10px;font-weight:700;
          background:rgba(255,214,10,0.1);padding:4px 12px;border-radius:50px;">${lvl}</div>
        <div class="jp" style="font-size:4rem;font-weight:900;margin-bottom:8px;line-height:1;
          color:var(--amber);text-shadow:0 0 30px rgba(255,214,10,0.7);">${item.char}</div>
        <div style="font-size:1.3rem;font-weight:800;color:var(--amber);margin-bottom:10px;">${item.meaning}</div>
        <div style="font-size:.78rem;color:var(--t2);display:flex;flex-direction:column;gap:3px;">
          <span>音読み: <b style="color:var(--t1);">${item.onyomi}</b></span>
          <span>訓読み: <b style="color:var(--t1);">${item.kunyomi}</b></span>
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;">${spkBtn(item.char)}${slowBtn(item.char)}
          <button onclick="event.stopPropagation();window.lnNext()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--amber);background:rgba(255,214,10,0.1);">${t('learn.next')}</button>
        </div>
      </div>
    </div>`;
  }

  if (curTab === 'sentences') {
    const cat = SENTENCE_CATEGORIES[item.category] || item.category;
    return `<div class="fc-inner ${showAns ? 'flipped' : ''}">
      <div class="fc-face" style="background:linear-gradient(160deg,rgba(129,140,248,0.12),rgba(99,102,241,0.06));
        border:1px solid rgba(129,140,248,0.25);border-radius:28px;">
        <div style="font-size:.7rem;color:var(--indigo);margin-bottom:10px;font-weight:700;
          background:rgba(129,140,248,0.1);padding:4px 12px;border-radius:50px;">${cat} · مستوى ${item.level}</div>
        <div class="jp" style="font-size:1.45rem;font-weight:700;margin-bottom:10px;line-height:1.9;text-align:center;color:var(--t1);">${item.sentence}</div>
        <div style="font-size:.8rem;color:var(--t2);margin-bottom:16px;">${item.reading}</div>
        <div style="display:flex;gap:8px;">${spkBtn(item.sentence)}${slowBtn(item.sentence)}
          <button onclick="event.stopPropagation();window.lnFlip()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--t2);">${t('learn.tapReveal')}</button>
        </div>
      </div>
      <div class="fc-face fc-back" style="background:linear-gradient(160deg,rgba(176,110,255,0.12),rgba(99,102,241,0.06));
        border:1px solid rgba(176,110,255,0.25);border-radius:28px;">
        <div style="font-size:.7rem;color:var(--purple);margin-bottom:8px;font-weight:700;
          background:rgba(176,110,255,0.1);padding:4px 12px;border-radius:50px;">${cat}</div>
        <div class="jp" style="font-size:1.2rem;font-weight:700;margin-bottom:8px;text-align:center;color:var(--purple);">${item.sentence}</div>
        <div style="font-size:.88rem;color:var(--indigo);margin-bottom:8px;">${item.reading}</div>
        <div style="font-size:1.05rem;font-weight:600;text-align:center;">${item.meaning}</div>
        <div style="display:flex;gap:8px;margin-top:14px;">${spkBtn(item.sentence)}${slowBtn(item.sentence)}
          <button onclick="event.stopPropagation();window.lnNext()" class="voice-btn sq"
            style="padding:8px 14px;font-size:.78rem;color:var(--purple);background:rgba(176,110,255,0.1);">${t('learn.next')}</button>
        </div>
      </div>
    </div>`;
  }

  // Vocabulary
  const cat = GROUP_LABELS[item.category] || item.category;
  return `<div class="fc-inner ${showAns ? 'flipped' : ''}">
    <div class="fc-face" style="background:linear-gradient(160deg,rgba(255,107,157,0.12),rgba(176,110,255,0.06));
      border:1px solid rgba(255,107,157,0.25);border-radius:28px;">
      <div style="font-size:.7rem;color:var(--sakura2);margin-bottom:10px;font-weight:700;
        background:rgba(255,107,157,0.1);padding:4px 12px;border-radius:50px;">${cat} · مستوى ${item.level}</div>
      <div class="jp" style="font-size:3.5rem;font-weight:900;margin-bottom:20px;line-height:1;
        color:var(--sakura2);text-shadow:0 0 30px rgba(255,107,157,0.7);">${item.word}</div>
      <div style="display:flex;gap:8px;">${spkBtn(item.word)}${slowBtn(item.word)}
        <button onclick="event.stopPropagation();window.lnFlip()" class="voice-btn sq"
          style="padding:8px 14px;font-size:.78rem;color:var(--t2);">${t('learn.tapReveal')}</button>
      </div>
    </div>
    <div class="fc-face fc-back" style="background:linear-gradient(160deg,rgba(255,214,10,0.1),rgba(255,107,43,0.06));
      border:1px solid rgba(255,214,10,0.25);border-radius:28px;">
      <div style="font-size:.7rem;color:var(--amber);margin-bottom:8px;font-weight:700;
        background:rgba(255,214,10,0.1);padding:4px 12px;border-radius:50px;">${cat}</div>
      <div class="jp" style="font-size:2.8rem;font-weight:900;margin-bottom:8px;line-height:1;
        color:var(--amber);text-shadow:0 0 24px rgba(255,214,10,0.7);">${item.word}</div>
      <div style="font-size:.95rem;color:var(--amber);margin-bottom:6px;">${item.reading}</div>
      <div style="font-size:1.15rem;font-weight:700;">${item.meaning}</div>
      <div style="display:flex;gap:8px;margin-top:14px;">${spkBtn(item.word)}${slowBtn(item.word)}
        <button onclick="event.stopPropagation();window.lnNext()" class="voice-btn sq"
          style="padding:8px 14px;font-size:.78rem;color:var(--amber);background:rgba(255,214,10,0.1);">${t('learn.next')}</button>
      </div>
    </div>
  </div>`;
}

// ── Grammar Panel ───────────────────────────────────────
function renderGrammar(g) {
  return `<div style="display:flex;flex-direction:column;gap:13px;">
    <div style="background:linear-gradient(135deg,rgba(255,214,10,0.1),rgba(255,107,43,0.06));
      border:1px solid rgba(255,214,10,0.2);border-radius:22px;padding:20px;text-align:center;">
      <div class="jp" style="font-size:1.8rem;font-weight:900;color:var(--amber);margin-bottom:8px;
        text-shadow:0 0 20px rgba(255,214,10,0.6);">${g.pattern}</div>
      <div style="font-size:1rem;font-weight:800;">${g.title}</div>
      <div style="font-size:.8rem;color:var(--amber);margin-top:4px;opacity:.8;">${g.meaning}</div>
    </div>
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);
      border-radius:18px;padding:15px;">
      <div style="font-size:.72rem;font-weight:700;color:var(--t3);margin-bottom:8px;letter-spacing:.06em;">الشرح</div>
      <p style="font-size:.82rem;color:var(--t2);line-height:1.75;">${g.explanation}</p>
    </div>
    <button onclick="window.lnToggleEx()" class="sq"
      style="width:100%;padding:12px;border-radius:16px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;
        background:rgba(0,212,255,0.08);color:var(--cyan);border:1px solid rgba(0,212,255,0.2);">
      <span>${showGrEx ? 'إخفاء الأمثلة' : 'عرض الأمثلة'}</span>
      <svg style="width:14px;height:14px;transition:transform .2s;${showGrEx ? 'transform:rotate(180deg);' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    ${showGrEx ? `<div class="anim-slide" style="display:flex;flex-direction:column;gap:9px;">
      ${g.examples.map(ex => `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:14px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <div class="jp" style="font-size:.95rem;font-weight:700;">${ex.jp}</div>
          <div style="display:flex;gap:4px;">${spkBtn(ex.jp)}${slowBtn(ex.jp)}</div>
        </div>
        <div style="font-size:.75rem;color:var(--cyan);margin-bottom:3px;">${ex.reading}</div>
        <div style="font-size:.75rem;color:var(--t2);">${ex.meaning}</div>
      </div>`).join('')}
    </div>` : ''}
  </div>`;
}

// ── Main Render ─────────────────────────────────────────
export function renderLearn(container) {
  const tb = curTab_();

  if (curTab === 'grammar') {
    const filtered = curGroup ? GRAMMAR.filter(g => g.category === curGroup) : GRAMMAR;
    const g = filtered[grIdx % filtered.length];
    const cats = [...new Set(GRAMMAR.map(g => g.category))];

    container.innerHTML = `<div class="anim-fade" style="display:flex;flex-direction:column;gap:14px;padding-bottom:8px;">
      ${renderTabs()}
      <div style="background:rgba(255,214,10,0.06);border:1px solid rgba(255,214,10,0.12);
        border-radius:16px;padding:12px 16px;display:flex;align-items:flex-start;gap:10px;">
        <span class="jp" style="font-size:1.3rem;color:var(--amber);flex-shrink:0;">文</span>
        <p style="font-size:.72rem;color:var(--t2);line-height:1.7;">${DESC.grammar}</p>
      </div>
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;" class="no-scroll">
        <button onclick="window.lnGroup(null)" class="chip sq"
          style="background:${!curGroup ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.04)'};
                 color:${!curGroup ? 'white' : 'var(--t3)'};">الكل</button>
        ${cats.map(c => `<button onclick="window.lnGroup('${c}')" class="chip sq"
          style="background:${curGroup === c ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.04)'};
                 color:${curGroup === c ? 'white' : 'var(--t3)'};">
          ${GROUP_LABELS[c] || c}</button>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:.78rem;color:var(--t2);">
        <span>${grIdx + 1} / ${filtered.length}</span>
        <span style="color:var(--amber);font-weight:700;">قواعد اللغة</span>
      </div>
      ${renderGrammar(g)}
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button onclick="window.lnGrPrev()" class="sq btn-ghost" style="padding:11px 20px;">${t('learn.prev')}</button>
        <button onclick="window.lnSpeakCur()" class="sq"
          style="padding:11px 18px;border-radius:50px;font-size:.85rem;display:flex;align-items:center;gap:6px;
            background:rgba(0,212,255,0.1);color:var(--cyan);border:1px solid rgba(0,212,255,0.2);">
          <svg style="width:14px;height:14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
          </svg>نطق
        </button>
        <button onclick="window.lnGrNext()" class="sq btn-ghost" style="padding:11px 20px;">${t('learn.next')}</button>
      </div>
    </div>`;
    return;
  }

  const { data, gk } = tabData();
  const groups = getGroups(data, gk);
  const gKeys  = [...groups.keys()];
  const items  = curGroup ? groups.get(curGroup) || data : data;
  const item   = items[fcIdx % items.length];
  const lSet   = curTab === 'hiragana' || curTab === 'katakana'
    ? state.data.learnedChars
    : curTab === 'kanji' ? state.data.learnedKanji : state.data.learnedVocab;

  const glabel = (k) => curTab === 'sentences'
    ? SENTENCE_CATEGORIES[k] || k
    : curTab === 'kanji'
      ? GROUP_LABELS[k] || `مستوى ${k}`
      : GROUP_LABELS[k] || k;

  container.innerHTML = `<div class="anim-fade" style="display:flex;flex-direction:column;gap:14px;padding-bottom:8px;">
    ${renderTabs()}

    <!-- وصف التبويب -->
    <div style="background:${tb.bg};border:1px solid ${tb.border};border-radius:16px;
      padding:12px 16px;display:flex;align-items:flex-start;gap:10px;">
      <span class="jp" style="font-size:1.3rem;flex-shrink:0;color:${tb.color};">${tb.icon}</span>
      <p style="font-size:.72rem;color:var(--t2);line-height:1.7;">${DESC[curTab]}</p>
    </div>

    <!-- فلتر المجموعات -->
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:4px;" class="no-scroll">
      <button onclick="window.lnGroup(null)" class="chip sq"
        style="background:${!curGroup ? tb.bg : 'rgba(255,255,255,.04)'};
               color:${!curGroup ? tb.color : 'var(--t3)'};
               border-color:${!curGroup ? tb.border : 'transparent'};
               box-shadow:${!curGroup ? `0 0 10px ${tb.bg}` : 'none'};">
        ${t('learn.all')} (${data.length})</button>
      ${gKeys.map(k => `<button onclick="window.lnGroup('${k}')" class="chip sq"
        style="background:${curGroup === k ? tb.bg : 'rgba(255,255,255,.04)'};
               color:${curGroup === k ? tb.color : 'var(--t3)'};
               border-color:${curGroup === k ? tb.border : 'transparent'};">
        ${glabel(k)} (${(groups.get(k) || []).length})</button>`).join('')}
    </div>

    <!-- العداد -->
    <div style="display:flex;justify-content:space-between;align-items:center;font-size:.78rem;">
      <span style="color:var(--t2);">${fcIdx + 1} / ${items.length}</span>
      <span style="color:${tb.color};font-weight:700;background:${tb.bg};
        padding:3px 10px;border-radius:50px;border:1px solid ${tb.border};">
        ${lSet.size} ${t('learn.learned')}</span>
    </div>

    <!-- البطاقة -->
    <div class="fc-wrap" style="height:310px;max-width:380px;margin:0 auto;width:100%;">
      ${renderCard(item)}
    </div>

    <!-- أزرار التحكم -->
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
      <button onclick="window.lnPrev()" class="sq btn-ghost" style="padding:11px 18px;">${t('learn.prev')}</button>
      <button onclick="window.lnSpeakCur()" class="sq"
        style="padding:11px 15px;border-radius:50px;font-size:.85rem;display:flex;align-items:center;gap:5px;
          background:rgba(0,212,255,0.1);color:var(--cyan);border:1px solid rgba(0,212,255,0.2);">
        <svg style="width:13px;height:13px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
        </svg>نطق
      </button>
      <button onclick="window.lnSlowCur()" class="sq"
        style="padding:11px 15px;border-radius:50px;font-size:.85rem;display:flex;align-items:center;gap:5px;
          background:rgba(255,214,10,0.08);color:var(--amber);border:1px solid rgba(255,214,10,0.2);">
        <svg style="width:13px;height:13px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>بطيء
      </button>
      ${curTab !== 'sentences' ? `<button onclick="window.lnMark()" class="sq"
        style="padding:11px 16px;border-radius:50px;font-size:.85rem;font-weight:700;
          background:rgba(0,245,160,0.1);color:var(--matcha);border:1px solid rgba(0,245,160,0.2);">
        ✓ تعلمت</button>` : ''}
      <button onclick="window.lnNext()" class="sq btn-ghost" style="padding:11px 18px;">${t('learn.next')}</button>
    </div>
  </div>`;
}

// ── Handlers ────────────────────────────────────────────
window.lnTab   = (tab) => { curTab = tab; curGroup = null; fcIdx = 0; grIdx = 0; showAns = false; showGrEx = false; stopSpeech(); window.appRefresh(); };
window.lnGroup = (g)   => { curGroup = g; fcIdx = 0; grIdx = 0; showAns = false; showGrEx = false; window.appRefresh(); };
window.lnFlip  = ()    => { showAns = !showAns; window.appRefresh(); };

window.lnNext = () => {
  if (curTab === 'grammar') { window.lnGrNext(); return; }
  const { data, gk } = tabData(); const gs = getGroups(data, gk); const items = curGroup ? gs.get(curGroup) || data : data;
  fcIdx = (fcIdx + 1) % items.length; showAns = false; window.appRefresh();
};
window.lnPrev = () => {
  if (curTab === 'grammar') { window.lnGrPrev(); return; }
  const { data, gk } = tabData(); const gs = getGroups(data, gk); const items = curGroup ? gs.get(curGroup) || data : data;
  fcIdx = (fcIdx - 1 + items.length) % items.length; showAns = false; window.appRefresh();
};
window.lnGrNext   = () => { const f = curGroup ? GRAMMAR.filter(g => g.category === curGroup) : GRAMMAR; grIdx = (grIdx + 1) % f.length; showGrEx = false; window.appRefresh(); };
window.lnGrPrev   = () => { const f = curGroup ? GRAMMAR.filter(g => g.category === curGroup) : GRAMMAR; grIdx = (grIdx - 1 + f.length) % f.length; showGrEx = false; window.appRefresh(); };
window.lnToggleEx = () => { showGrEx = !showGrEx; window.appRefresh(); };

window.lnMark = () => {
  const { data, gk } = tabData(); const gs = getGroups(data, gk); const items = curGroup ? gs.get(curGroup) || data : data;
  const item = items[fcIdx % items.length];
  if (curTab === 'hiragana' || curTab === 'katakana') { state.markCharLearned(item.romaji); showToast(t('toast.charLearned'), 'success'); }
  else if (curTab === 'kanji') { state.markKanjiLearned(item.char); showToast(t('toast.kanjiLearned'), 'success'); }
  else if (curTab === 'vocabulary') { state.markVocabLearned(item.word); showToast(t('toast.vocabLearned'), 'success'); }
  if (window.launchConfetti) window.launchConfetti();
};

window.lnSpeak    = (txt) => speakJapanese(txt).catch(() => {});
window.lnSlow     = (txt) => speakSlow(txt).catch(() => {});
window.lnSpeakCur = () => {
  if (curTab === 'grammar') {
    const f = curGroup ? GRAMMAR.filter(g => g.category === curGroup) : GRAMMAR;
    const g = f[grIdx % f.length];
    if (g.examples[0]) speakJapanese(g.examples[0].jp).catch(() => {});
    return;
  }
  const { data, gk } = tabData(); const gs = getGroups(data, gk); const items = curGroup ? gs.get(curGroup) || data : data;
  const item = items[fcIdx % items.length];
  const txt = curTab === 'sentences' ? item.sentence : curTab === 'vocabulary' ? item.word : item.char;
  if (txt) speakJapanese(txt).catch(() => {});
};
window.lnSlowCur = () => {
  const { data, gk } = tabData(); const gs = getGroups(data, gk); const items = curGroup ? gs.get(curGroup) || data : data;
  const item = items[fcIdx % items.length];
  const txt = curTab === 'sentences' ? item.sentence : curTab === 'vocabulary' ? item.word : item.char;
  if (txt) speakSlow(txt).catch(() => {});
};

window.learnSetTab = window.lnTab;
