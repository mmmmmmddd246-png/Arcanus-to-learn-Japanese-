// TTS Module - Browser Speech Synthesis for Japanese
// Uses Web Speech API for reliable Japanese pronunciation

let isSpeaking = false;
let japaneseVoice = null;
let voicesLoaded = false;

// Initialize and find Japanese voice
function initVoices() {
  return new Promise((resolve) => {
    try {
      if (!window.speechSynthesis) {
        resolve(null);
        return;
      }

      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        japaneseVoice = voices.find(v => v.lang.startsWith('ja')) ||
                        voices.find(v => v.lang.includes('JP')) ||
                        null;
        voicesLoaded = true;
        resolve(japaneseVoice);
        return;
      }

      // Set timeout for voice loading
      const timeout = setTimeout(() => {
        resolve(null);
      }, 3000);

      speechSynthesis.onvoiceschanged = () => {
        clearTimeout(timeout);
        const voices = speechSynthesis.getVoices();
        japaneseVoice = voices.find(v => v.lang.startsWith('ja')) ||
                        voices.find(v => v.lang.includes('JP')) ||
                        null;
        voicesLoaded = true;
        resolve(japaneseVoice);
      };
    } catch (e) {
      console.warn('TTS init error:', e);
      resolve(null);
    }
  });
}

// Initialize voices on load
initVoices().catch(() => {});

/**
 * Speak Japanese text using browser Speech Synthesis
 * @param {string} text - Japanese text to speak
 * @param {number} rate - Speech rate (0.5 - 2.0), default 0.85
 * @returns {Promise<void>}
 */
export async function speakJapanese(text, rate = 0.85) {
  if (!text) return Promise.resolve();
  
  // Check if speech synthesis is available
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not available');
    return Promise.resolve();
  }
  
  // Cancel any ongoing speech
  try {
    speechSynthesis.cancel();
  } catch (e) {
    // Ignore cancel errors
  }
  
  return new Promise((resolve) => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Set Japanese voice if available
      if (japaneseVoice) {
        utterance.voice = japaneseVoice;
      }
      
      let resolved = false;
      const safeResolve = () => {
        if (!resolved) {
          resolved = true;
          isSpeaking = false;
          resolve();
        }
      };
      
      utterance.onstart = () => { isSpeaking = true; };
      utterance.onend = safeResolve;
      utterance.onerror = (e) => {
        // 'canceled' is expected when we call cancel()
        if (e.error && e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech error:', e.error);
        }
        safeResolve();
      };
      
      // Chrome bug workaround: speech can stop after ~15 seconds
      const maxDuration = Math.max(10000, text.length * 200);
      const timeout = setTimeout(() => {
        try { speechSynthesis.cancel(); } catch (e) {}
        safeResolve();
      }, maxDuration);
      
      utterance.onend = () => { clearTimeout(timeout); safeResolve(); };
      utterance.onerror = (e) => { 
        clearTimeout(timeout);
        if (e.error && e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech error:', e.error);
        }
        safeResolve();
      };
      
      speechSynthesis.speak(utterance);
      
      // Chrome workaround: resume if paused
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      }
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      isSpeaking = false;
      resolve();
    }
  });
}

/**
 * Stop any ongoing speech
 */
export function stopSpeech() {
  try {
    speechSynthesis.cancel();
  } catch (e) {}
  isSpeaking = false;
}

/**
 * Check if currently speaking
 */
export function getIsSpeaking() {
  return isSpeaking;
}

/**
 * Speak with slow rate for learning
 */
export async function speakSlow(text) {
  return speakJapanese(text, 0.6);
}

/**
 * Speak word then its reading (with delay)
 */
export async function speakWordAndReading(word, reading) {
  await speakJapanese(word, 0.85);
  await new Promise(r => setTimeout(r, 500));
  await speakJapanese(word, 0.6);
}
