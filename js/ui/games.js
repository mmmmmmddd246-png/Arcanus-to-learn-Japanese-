// games.js — Premium Neon Games v4
import { HIRAGANA, KATAKANA, BASIC_KANJI, VOCABULARY, SENTENCES, shuffleArray, getRandomItems } from '../data.js';
import { state } from '../state.js';
import { showToast, showLevelUp } from './toast.js';
import { speakJapanese } from '../tts.js';

const t = (k, v) => window.miniappI18n?.t(k, v) ?? k;

let gameType = null;
let mCards=[], mFlipped=[], mMatched=0, mMoves=0, mTimer=0, mInterval=null;
let spQs=[], spIdx=0, spScore=0, spTimer=30, spInterval=null;
let scrWord=null, scrLetters=[], scrAnswer=[];
let typQs=[], typIdx=0, typScore=0, typTimer=60, typInterval=null, typInput='';
let kmCards=[], kmFlipped=[], kmMatched=0, kmMoves=0;
let sbData=null, sbWords=[], sbAnswer=[];

const GAMES = [
  { id:'matching',    icon:'🃏', name:'لعبة الذاكرة',   desc:'طابق الحروف مع نطقها',           c:'#FF8FB1', glow:'rgba(255,107,157,0.15)' },
  { id:'speed',       icon:'⚡', name:'تحدي السرعة',    desc:'أجب على أكبر عدد في 30 ثانية',    c:'#FCD34D', glow:'rgba(255,214,10,0.15)' },
  { id:'scramble',    icon:'🔤', name:'ترتيب الكلمات',  desc:'رتب الحروف لتكوين الكلمة',         c:'#22D3EE', glow:'rgba(0,212,255,0.15)' },
  { id:'typing',      icon:'⌨️', name:'تحدي الكتابة',  desc:'اكتب الروماجي للحرف الياباني',      c:'#A78BFA', glow:'rgba(176,110,255,0.15)' },
  { id:'kanji-match', icon:'漢', name:'مطابقة الكانجي', desc:'طابق الكانجي مع معناه',             c:'#A3D9A5', glow:'rgba(0,245,160,0.15)' },
  { id:'sentence',    icon:'📝', name:'بناء الجمل',     desc:'رتب الكلمات لتكوين جملة صحيحة',   c:'#818CF8', glow:'rgba(129,140,248,0.15)' },
];

const fmt = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

function initMemory() {
  const items = getRandomItems(HIRAGANA.filter(h=>h.group==='basic'), 6);
  mCards = shuffleArray(items.flatMap(i=>[
    { id:i.romaji+'-c', val:i.char,   pair:i.romaji, type:'c' },
    { id:i.romaji+'-r', val:i.romaji, pair:i.romaji, type:'r' },
  ]));
  mFlipped=[]; mMatched=0; mMoves=0; mTimer=0;
  if (mInterval) clearInterval(mInterval);
  mInterval = setInterval(()=>{ mTimer++; const el=document.getElementById('m-timer'); if(el)el.textContent=fmt(mTimer); }, 1000);
}

function initSpeed() {
  const items = getRandomItems(HIRAGANA.filter(h=>h.group==='basic'), 15);
  spQs = items.map(i=>({ q:i.char, a:i.romaji,
    opts:shuffleArray([i.romaji,...getRandomItems(HIRAGANA.filter(h=>h.romaji!==i.romaji&&h.group==='basic'),2).map(h=>h.romaji)]) }));
  spIdx=0; spScore=0; spTimer=30;
  if (spInterval) clearInterval(spInterval);
  spInterval = setInterval(()=>{
    spTimer--;
    const el=document.getElementById('sp-timer'); if(el)el.textContent=spTimer;
    if(spTimer<=0){ clearInterval(spInterval); state.addGameScore(spScore,'speed'); window.appRefresh(); }
  }, 1000);
}

function initScramble() {
  const v=getRandomItems(VOCABULARY,1)[0]; scrWord=v;
  scrLetters=shuffleArray(v.word.split('')); scrAnswer=[];
}

function initTyping() {
  typQs = getRandomItems(HIRAGANA.filter(h=>h.group==='basic'), 20).map(i=>({c:i.char,r:i.romaji}));
  typIdx=0; typScore=0; typTimer=60; typInput='';
  if (typInterval) clearInterval(typInterval);
  typInterval = setInterval(()=>{
    typTimer--;
    const el=document.getElementById('typ-timer'); if(el)el.textContent=typTimer;
    if(typTimer<=0){ clearInterval(typInterval); state.addGameScore(typScore,'typing'); window.appRefresh(); }
  }, 1000);
}

function initKanjiMatch() {
  const items = getRandomItems(BASIC_KANJI, 6);
  kmCards = shuffleArray(items.flatMap(i=>[
    { id:i.char+'-k', val:i.char,    pair:i.char, type:'k' },
    { id:i.char+'-m', val:i.meaning, pair:i.char, type:'m' },
  ]));
  kmFlipped=[]; kmMatched=0; kmMoves=0;
}

function initSentence() {
  const s=getRandomItems(SENTENCES.filter(x=>x.level<=2),1)[0];
  sbData=s; sbWords=shuffleArray(s.sentence.split(/\s+/)); sbAnswer=[];
}

function memClick(i) {
  if(mFlipped.length>=2||mFlipped.includes(i)||mCards[i].matched) return;
  mFlipped.push(i);
  if(mFlipped.length===2){
    mMoves++;
    const [a,b]=mFlipped;
    if(mCards[a].pair===mCards[b].pair){
      mCards[a].matched=mCards[b].matched=true; mMatched++;
      showToast(t('games.matchFound')+' ✨','success');
      if(mMatched===mCards.length/2){
        clearInterval(mInterval);
        const sc=Math.max(10,50-mMoves*2+Math.max(0,30-mTimer)*2);
        state.addGameScore(sc,'matching');
        showToast(t('games.completed'),'success');
        if(window.launchConfetti) window.launchConfetti();
      }
    }
    setTimeout(()=>{ mFlipped=[]; window.appRefresh(); }, 800);
  }
  window.appRefresh();
}

function kmClick(i) {
  if(kmFlipped.length>=2||kmFlipped.includes(i)||kmCards[i].matched) return;
  kmFlipped.push(i);
  if(kmFlipped.length===2){
    kmMoves++;
    const [a,b]=kmFlipped;
    if(kmCards[a].pair===kmCards[b].pair&&kmCards[a].type!==kmCards[b].type){
      kmCards[a].matched=kmCards[b].matched=true; kmMatched++;
      showToast('تطابق! ✨','success');
      if(kmMatched===kmCards.length/2){
        const sc=Math.max(10,60-kmMoves*3);
        state.addGameScore(sc,'kanji-match');
        showToast(t('games.completed'),'success');
        if(window.launchConfetti) window.launchConfetti();
      }
    }
    setTimeout(()=>{ kmFlipped=[]; window.appRefresh(); }, 800);
  }
  window.appRefresh();
}

// ── Back button ─────────────────────────────────────────
function backBtn() {
  return `<button onclick="window.gameBack()" class="sq btn-ghost"
    style="width:100%;padding:13px;border-radius:50px;font-weight:700;">← ${t('games.back')}</button>`;
}

// ── Renders ─────────────────────────────────────────────
function renderSelect() {
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:center;gap:13px;margin-bottom:8px;">
      <div style="width:48px;height:48px;border-radius:16px;
        background:linear-gradient(135deg,rgba(255,107,157,0.2),rgba(176,110,255,0.1));
        border:1px solid rgba(255,107,157,0.25);
        display:flex;align-items:center;justify-content:center;font-size:1.5rem;
        box-shadow:0 0 20px rgba(255,107,157,0.15);">🎮</div>
      <span class="sec-title">${t('games.chooseGame')}</span>
    </div>
    ${GAMES.map(g => `
      <button onclick="window.gameStart('${g.id}')" class="game-card sq" data-c="${g.c}"
        style="padding:18px 20px;display:flex;align-items:center;gap:16px;text-align:right;width:100%;
               box-shadow:0 0 20px ${g.glow},0 4px 20px rgba(0,0,0,0.6);">
        <div style="flex:1;">
          <div style="font-weight:800;font-size:.95rem;">${g.name}</div>
          <div style="font-size:.73rem;color:var(--t2);margin-top:3px;">${g.desc}</div>
        </div>
        <div class="anim-float" style="width:52px;height:52px;border-radius:16px;
          display:flex;align-items:center;justify-content:center;
          font-size:1.6rem;background:${g.c}18;flex-shrink:0;border:1px solid ${g.c}30;
          box-shadow:0 0 16px ${g.glow};">
          <span class="jp">${g.icon}</span>
        </div>
      </button>`).join('')}
  </div>`;
}

function renderMemory() {
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:14px;">
    <div style="background:rgba(255,107,157,0.08);border:1px solid rgba(255,107,157,0.2);
      border-radius:18px;padding:13px 18px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:.82rem;color:var(--t2);">${t('games.moves')}: <b style="color:var(--t1);">${mMoves}</b></span>
      <span id="m-timer" style="font-size:.95rem;font-family:monospace;color:var(--amber);font-weight:800;
        text-shadow:0 0 12px rgba(255,214,10,0.6);">${fmt(mTimer)}</span>
      <span style="font-size:.82rem;color:var(--t2);">${t('games.pairs')}: <b style="color:var(--matcha);">${mMatched}/${mCards.length/2}</b></span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${mCards.map((c,i) => {
        const flip=mFlipped.includes(i)||c.matched;
        const col = c.matched ? 'var(--matcha)' : flip ? 'var(--purple)' : 'var(--t3)';
        const bg  = c.matched ? 'rgba(0,245,160,0.1)' : flip ? 'rgba(176,110,255,0.1)' : 'rgba(255,255,255,0.03)';
        const bdr = c.matched ? 'rgba(0,245,160,0.35)' : flip ? 'rgba(176,110,255,0.35)' : 'rgba(255,255,255,0.06)';
        const glw = c.matched ? '0 0 16px rgba(0,245,160,0.3)' : flip ? '0 0 16px rgba(176,110,255,0.3)' : 'none';
        return `<button onclick="window.memClick(${i})" class="sq"
          style="aspect-ratio:1;border-radius:18px;display:flex;align-items:center;justify-content:center;
            border:1px solid ${bdr};background:${bg};box-shadow:${glw},0 4px 12px rgba(0,0,0,0.5);
            transition:all .25s cubic-bezier(.34,1.56,.64,1);">
          ${flip ? `<span class="jp" style="font-size:1.15rem;font-weight:700;color:${col};
            text-shadow:0 0 12px ${col};">${c.val}</span>`
            : '<span style="font-size:1.3rem;opacity:.25;">?</span>'}
        </button>`;
      }).join('')}
    </div>
    ${backBtn()}
  </div>`;
}

function renderSpeed() {
  if (spIdx >= spQs.length || spTimer <= 0) {
    return `<div class="anim-fade" style="text-align:center;display:flex;flex-direction:column;gap:22px;padding:20px 0;">
      <div style="font-size:4.5rem;" class="anim-float">${spScore>=10?'🏆':spScore>=5?'🎉':'💪'}</div>
      <div style="font-size:1.7rem;font-weight:900;">${t('games.timesUp')}</div>
      <div style="background:linear-gradient(160deg,rgba(255,214,10,0.12),rgba(255,107,43,0.06));
        border:1px solid rgba(255,214,10,0.25);border-radius:22px;padding:22px 32px;margin:0 auto;
        box-shadow:0 0 30px rgba(255,214,10,0.2),0 8px 32px rgba(0,0,0,0.6);
        display:inline-flex;gap:14px;align-items:center;">
        <span style="font-size:3rem;font-weight:900;color:var(--amber);text-shadow:0 0 20px rgba(255,214,10,0.7);">${spScore}</span>
        <span style="font-size:.95rem;color:var(--t2);">${t('games.correctAnswers')}</span>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button onclick="window.gameStart('speed')" class="sq btn-amber" style="padding:13px 24px;">${t('games.playAgain')}</button>
        <button onclick="window.gameBack()" class="sq btn-ghost" style="padding:13px 24px;">${t('games.back')}</button>
      </div>
    </div>`;
  }
  const q = spQs[spIdx];
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:16px;">
    <div style="background:rgba(255,214,10,0.08);border:1px solid rgba(255,214,10,0.2);
      border-radius:18px;padding:13px 18px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:.82rem;color:var(--t2);">${t('quiz.score',{score:spScore})}</span>
      <span id="sp-timer" style="font-size:2.4rem;font-weight:900;font-family:monospace;
        color:${spTimer<=10?'var(--danger)':'var(--amber)'};
        text-shadow:0 0 20px ${spTimer<=10?'rgba(255,71,87,0.7)':'rgba(255,214,10,0.7)'};">${spTimer}</span>
      <span style="font-size:.82rem;color:var(--t2);">${spIdx+1}/${spQs.length}</span>
    </div>
    <div style="background:linear-gradient(160deg,rgba(255,214,10,0.1),rgba(255,107,43,0.05));
      border:1px solid rgba(255,214,10,0.2);border-radius:24px;padding:32px 20px;text-align:center;
      box-shadow:0 0 30px rgba(255,214,10,0.1),0 8px 32px rgba(0,0,0,0.6);">
      <div class="jp" style="font-size:4.5rem;font-weight:900;color:var(--amber);
        text-shadow:0 0 30px rgba(255,214,10,0.7);">${q.q}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:9px;">
      ${q.opts.map(o=>`<button onclick="window.spAnswer('${o}')" class="opt-btn sq">${o}</button>`).join('')}
    </div>
    ${backBtn()}
  </div>`;
}

function renderScramble() {
  if (!scrWord) return '';
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:18px;">
    <div style="background:linear-gradient(160deg,rgba(0,212,255,0.1),rgba(0,153,204,0.05));
      border:1px solid rgba(0,212,255,0.2);border-radius:22px;padding:20px;text-align:center;
      box-shadow:0 0 24px rgba(0,212,255,0.1),0 8px 32px rgba(0,0,0,0.6);">
      <div style="font-size:.75rem;color:var(--cyan);margin-bottom:8px;font-weight:700;">🔤 رتب الحروف</div>
      <div style="font-size:1.2rem;font-weight:800;">${scrWord.meaning}</div>
      <div style="font-size:.82rem;color:var(--cyan);margin-top:5px;opacity:.8;">${scrWord.reading}</div>
    </div>
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);
      border-radius:18px;padding:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;min-height:60px;align-items:center;">
      ${scrAnswer.length
        ? scrAnswer.map((u,i)=>`<button onclick="window.scrUndo(${i})" class="sq jp"
            style="width:50px;height:50px;border-radius:14px;font-size:1.3rem;font-weight:700;
              background:rgba(176,110,255,0.15);border:1px solid rgba(176,110,255,0.35);
              color:var(--purple);box-shadow:0 0 12px rgba(176,110,255,0.2);">${u.l}</button>`).join('')
        : '<span style="color:var(--t3);font-size:.8rem;">اضغط على الحروف بالترتيب</span>'}
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
      ${scrLetters.map((l,i)=>l
        ? `<button onclick="window.scrClick(${i})" class="sq jp"
            style="width:54px;height:54px;border-radius:16px;font-size:1.4rem;font-weight:700;
              background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.25);
              color:var(--cyan);box-shadow:0 0 12px rgba(0,212,255,0.15);transition:all .2s;">${l}</button>`
        : `<div style="width:54px;height:54px;"></div>`).join('')}
    </div>
    <div style="display:flex;gap:10px;justify-content:center;">
      <button onclick="window.scrReset()" class="sq btn-ghost" style="padding:10px 18px;">🔄 إعادة</button>
      <button onclick="window.scrSkip()"  class="sq btn-ghost" style="padding:10px 18px;">⏭️ تخطي</button>
      <button onclick="window.gameBack()" class="sq btn-ghost" style="padding:10px 18px;">${t('games.back')}</button>
    </div>
  </div>`;
}

function renderTyping() {
  if (typIdx >= typQs.length) {
    return `<div class="anim-fade" style="text-align:center;display:flex;flex-direction:column;gap:22px;padding:20px 0;">
      <div style="font-size:4.5rem;" class="anim-float">${typScore>=15?'🏆':typScore>=8?'🎉':'💪'}</div>
      <div style="font-size:1.7rem;font-weight:900;">انتهى التحدي!</div>
      <div style="background:linear-gradient(160deg,rgba(176,110,255,0.12),rgba(108,99,255,0.06));
        border:1px solid rgba(176,110,255,0.25);border-radius:22px;padding:22px 32px;margin:0 auto;
        box-shadow:0 0 30px rgba(176,110,255,0.2),0 8px 32px rgba(0,0,0,0.6);
        display:inline-flex;gap:14px;align-items:center;">
        <span style="font-size:3rem;font-weight:900;color:var(--purple);text-shadow:0 0 20px rgba(176,110,255,0.7);">${typScore}</span>
        <span style="font-size:.95rem;color:var(--t2);">صحيح</span>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button onclick="window.gameStart('typing')" class="sq btn-purple" style="padding:13px 24px;">${t('games.playAgain')}</button>
        <button onclick="window.gameBack()" class="sq btn-ghost" style="padding:13px 24px;">${t('games.back')}</button>
      </div>
    </div>`;
  }
  const q = typQs[typIdx];
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:16px;">
    <div style="background:rgba(176,110,255,0.08);border:1px solid rgba(176,110,255,0.2);
      border-radius:18px;padding:13px 18px;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:.82rem;color:var(--t2);">الدرجة: <b style="color:var(--purple);">${typScore}</b></span>
      <span id="typ-timer" style="font-size:2.4rem;font-weight:900;font-family:monospace;
        color:${typTimer<=15?'var(--danger)':'var(--purple)'};
        text-shadow:0 0 20px ${typTimer<=15?'rgba(255,71,87,0.7)':'rgba(176,110,255,0.7)'};">${typTimer}</span>
      <span style="font-size:.82rem;color:var(--t2);">${typIdx+1}/${typQs.length}</span>
    </div>
    <div style="background:linear-gradient(160deg,rgba(176,110,255,0.12),rgba(108,99,255,0.06));
      border:1px solid rgba(176,110,255,0.25);border-radius:24px;padding:32px 20px;text-align:center;
      box-shadow:0 0 30px rgba(176,110,255,0.15),0 8px 32px rgba(0,0,0,0.6);">
      <div class="jp" style="font-size:4.5rem;font-weight:900;color:var(--purple);
        text-shadow:0 0 30px rgba(176,110,255,0.8);">${q.c}</div>
      <div style="font-size:.78rem;color:var(--t2);margin-top:12px;">اكتب الروماجي</div>
    </div>
    <div style="display:flex;gap:8px;">
      <input type="text" id="typ-in" value="${typInput}"
        onkeydown="if(event.key==='Enter')window.typCheck()"
        oninput="window.typUpdate(this.value)"
        style="flex:1;padding:14px 20px;border-radius:50px;color:var(--t1);text-align:center;
          font-size:1.2rem;font-family:monospace;letter-spacing:.1em;
          background:rgba(176,110,255,0.08);border:1px solid rgba(176,110,255,0.25);
          outline:none;box-shadow:0 0 16px rgba(176,110,255,0.1);"
        placeholder="romaji..." autocomplete="off">
      <button onclick="window.typCheck()" class="sq btn-purple" style="padding:14px 22px;">✓</button>
    </div>
    ${backBtn()}
  </div>`;
}

function renderKanjiMatch() {
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:14px;">
    <div style="background:rgba(0,245,160,0.08);border:1px solid rgba(0,245,160,0.2);
      border-radius:18px;padding:13px 18px;display:flex;justify-content:space-between;">
      <span style="font-size:.82rem;color:var(--t2);">حركات: <b style="color:var(--t1);">${kmMoves}</b></span>
      <span style="font-size:.82rem;color:var(--t2);">أزواج: <b style="color:var(--matcha);">${kmMatched}/${kmCards.length/2}</b></span>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${kmCards.map((c,i) => {
        const flip=kmFlipped.includes(i)||c.matched; const isK=c.type==='k';
        const col = c.matched ? 'var(--matcha)' : isK ? 'var(--purple)' : 'var(--amber)';
        const bg  = c.matched ? 'rgba(0,245,160,0.1)' : flip ? (isK?'rgba(176,110,255,0.1)':'rgba(255,214,10,0.1)') : 'rgba(255,255,255,0.03)';
        const bdr = c.matched ? 'rgba(0,245,160,0.35)' : flip ? (isK?'rgba(176,110,255,0.35)':'rgba(255,214,10,0.35)') : 'rgba(255,255,255,0.06)';
        const glw = c.matched ? '0 0 16px rgba(0,245,160,0.3)' : flip ? (isK?'0 0 16px rgba(176,110,255,0.3)':'0 0 16px rgba(255,214,10,0.3)') : 'none';
        return `<button onclick="window.kmClick(${i})" class="sq"
          style="aspect-ratio:1;border-radius:18px;display:flex;align-items:center;justify-content:center;padding:6px;
            border:1px solid ${bdr};background:${bg};box-shadow:${glw},0 4px 12px rgba(0,0,0,0.5);
            transition:all .25s cubic-bezier(.34,1.56,.64,1);">
          ${flip
            ? `<span class="${isK?'jp':''}" style="font-size:${isK?'1.7rem':'.7rem'};font-weight:700;
                color:${col};text-align:center;text-shadow:0 0 10px ${col};">${c.val}</span>`
            : '<span style="font-size:1.3rem;opacity:.2;">?</span>'}
        </button>`;
      }).join('')}
    </div>
    ${backBtn()}
  </div>`;
}

function renderSentence() {
  if (!sbData) return '';
  return `<div class="anim-fade" style="display:flex;flex-direction:column;gap:18px;">
    <div style="background:linear-gradient(160deg,rgba(129,140,248,0.1),rgba(99,102,241,0.05));
      border:1px solid rgba(129,140,248,0.2);border-radius:22px;padding:20px;text-align:center;
      box-shadow:0 0 24px rgba(129,140,248,0.1),0 8px 32px rgba(0,0,0,0.6);">
      <div style="font-size:.75rem;color:var(--indigo);margin-bottom:8px;font-weight:700;">📝 رتب الكلمات</div>
      <div style="font-size:1.2rem;font-weight:800;">${sbData.meaning}</div>
      <div style="font-size:.82rem;color:var(--indigo);margin-top:5px;opacity:.8;">${sbData.reading}</div>
    </div>
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);
      border-radius:18px;padding:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;min-height:60px;align-items:center;">
      ${sbAnswer.length
        ? sbAnswer.map((u,i)=>`<button onclick="window.sbUndo(${i})" class="sq jp"
            style="padding:9px 14px;border-radius:14px;font-size:1rem;font-weight:700;
              background:rgba(129,140,248,0.15);border:1px solid rgba(129,140,248,0.35);
              color:var(--indigo);box-shadow:0 0 10px rgba(129,140,248,0.2);">${u.w}</button>`).join('')
        : '<span style="color:var(--t3);font-size:.8rem;">اضغط على الكلمات بالترتيب</span>'}
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
      ${sbWords.map((w,i)=>w
        ? `<button onclick="window.sbClick(${i})" class="sq jp"
            style="padding:10px 16px;border-radius:14px;font-size:1rem;font-weight:700;
              background:rgba(129,140,248,0.1);border:1px solid rgba(129,140,248,0.25);
              color:var(--indigo);transition:all .2s;">${w}</button>`
        : '').join('')}
    </div>
    <div style="display:flex;gap:10px;justify-content:center;">
      <button onclick="window.sbReset()" class="sq btn-ghost" style="padding:10px 18px;">🔄 إعادة</button>
      <button onclick="window.sbSkip()"  class="sq btn-ghost" style="padding:10px 18px;">⏭️ تخطي</button>
      <button onclick="window.gameBack()" class="sq btn-ghost" style="padding:10px 18px;">${t('games.back')}</button>
    </div>
  </div>`;
}

export function renderGames(container) {
  const map = {
    matching: renderMemory, speed: renderSpeed, scramble: renderScramble,
    typing: renderTyping, 'kanji-match': renderKanjiMatch, sentence: renderSentence,
  };
  container.innerHTML = gameType ? (map[gameType]?.() || renderSelect()) : renderSelect();
}

window.gameStart = (type) => {
  gameType = type;
  const inits = { matching:initMemory, speed:initSpeed, scramble:initScramble, typing:initTyping, 'kanji-match':initKanjiMatch, sentence:initSentence };
  inits[type]?.();
  window.appRefresh();
};
window.gameBack = () => {
  if(mInterval) clearInterval(mInterval);
  if(spInterval) clearInterval(spInterval);
  if(typInterval) clearInterval(typInterval);
  gameType = null; window.appRefresh();
};

window.memClick = memClick;
window.kmClick  = kmClick;

window.spAnswer = (a) => {
  const q=spQs[spIdx];
  if(a===q.a){ spScore++; showToast('صحيح! ⚡','success'); speakJapanese(q.q).catch(()=>{}); }
  else showToast('خطأ!','error');
  spIdx++;
  if(spIdx>=spQs.length){ clearInterval(spInterval); state.addGameScore(spScore,'speed'); }
  window.appRefresh();
};

window.scrClick = (i) => {
  const l=scrLetters[i]; if(!l) return;
  scrAnswer.push({l,i}); scrLetters[i]=null;
  if(scrAnswer.length===scrWord.word.length){
    const ans=scrAnswer.map(u=>u.l).join('');
    if(ans===scrWord.word){
      showToast('صحيح! 🎉','success'); state.addGameScore(10,'scramble');
      speakJapanese(scrWord.word).catch(()=>{});
      if(window.launchConfetti) window.launchConfetti();
      setTimeout(()=>{ initScramble(); window.appRefresh(); }, 1500);
    } else {
      showToast('خطأ! حاول مجدداً 😅','error');
      setTimeout(()=>{ scrLetters=scrWord.word.split(''); scrAnswer=[]; window.appRefresh(); }, 1000);
    }
  }
  window.appRefresh();
};
window.scrUndo  = (i) => { const u=scrAnswer[i]; if(!u)return; scrLetters[u.i]=u.l; scrAnswer.splice(i,1); window.appRefresh(); };
window.scrReset = ()  => { scrLetters=scrWord.word.split(''); scrAnswer=[]; window.appRefresh(); };
window.scrSkip  = ()  => { initScramble(); window.appRefresh(); };

window.typUpdate = (v) => { typInput=v; };
window.typCheck  = ()  => {
  const q=typQs[typIdx];
  if(typInput.toLowerCase().trim()===q.r){
    typScore++; showToast('صحيح! ⌨️','success'); speakJapanese(q.c).catch(()=>{});
  } else {
    showToast('خطأ! الجواب: '+q.r,'error');
  }
  typIdx++; typInput='';
  if(typIdx>=typQs.length){ clearInterval(typInterval); state.addGameScore(typScore,'typing'); }
  window.appRefresh();
};

window.sbClick = (i) => {
  const w=sbWords[i]; if(!w)return;
  sbAnswer.push({w,i}); sbWords[i]=null;
  if(sbAnswer.length>=sbData.sentence.split(/\s+/).length){
    const ans=sbAnswer.map(a=>a.w).join(' ');
    if(ans===sbData.sentence){
      showToast('صحيح! 📝','success'); state.addGameScore(15,'sentence');
      speakJapanese(sbData.sentence).catch(()=>{});
      if(window.launchConfetti) window.launchConfetti();
      setTimeout(()=>{ initSentence(); window.appRefresh(); }, 2000);
    } else {
      showToast('خطأ! حاول مجدداً','error');
      setTimeout(()=>{ sbWords=sbData.sentence.split(/\s+/); sbAnswer=[]; window.appRefresh(); }, 1000);
    }
  }
  window.appRefresh();
};
window.sbUndo  = (i) => { const u=sbAnswer[i]; if(!u)return; sbWords[u.i]=u.w; sbAnswer.splice(i,1); window.appRefresh(); };
window.sbReset = ()  => { sbWords=sbData.sentence.split(/\s+/); sbAnswer=[]; window.appRefresh(); };
window.sbSkip  = ()  => { initSentence(); window.appRefresh(); };
