// State management and storage for Japanese learning app

const STORAGE_KEY = 'nihongo-progress';

class AppState {
  constructor() {
    this.data = {
      learnedChars: new Set(),
      learnedKanji: new Set(),
      learnedVocab: new Set(),
      quizScores: [],
      gameScores: [],
      streak: 0,
      lastPractice: null,
      totalXP: 0,
      level: 1,
    };
    this.listeners = [];
  }

  async load() {
    try {
      const raw = await window.miniappsAI.storage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        this.data.learnedChars = new Set(saved.learnedChars || []);
        this.data.learnedKanji = new Set(saved.learnedKanji || []);
        this.data.learnedVocab = new Set(saved.learnedVocab || []);
        this.data.quizScores = saved.quizScores || [];
        this.data.gameScores = saved.gameScores || [];
        this.data.streak = saved.streak || 0;
        this.data.lastPractice = saved.lastPractice || null;
        this.data.totalXP = saved.totalXP || 0;
        this.data.level = saved.level || 1;
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
    this.checkStreak();
  }

  async save() {
    try {
      const toSave = {
        learnedChars: [...this.data.learnedChars],
        learnedKanji: [...this.data.learnedKanji],
        learnedVocab: [...this.data.learnedVocab],
        quizScores: this.data.quizScores.slice(-50),
        gameScores: this.data.gameScores.slice(-50),
        streak: this.data.streak,
        lastPractice: this.data.lastPractice,
        totalXP: this.data.totalXP,
        level: this.data.level,
      };
      await window.miniappsAI.storage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  checkStreak() {
    if (!this.data.lastPractice) return;
    const last = new Date(this.data.lastPractice);
    const now = new Date();
    const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {
      this.data.streak = 0;
    }
  }

  updateStreak() {
    const now = new Date();
    if (this.data.lastPractice) {
      const last = new Date(this.data.lastPractice);
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return;
      if (diffDays === 1) {
        this.data.streak++;
      } else {
        this.data.streak = 1;
      }
    } else {
      this.data.streak = 1;
    }
    this.data.lastPractice = now.toISOString();
  }

  addXP(amount) {
    this.data.totalXP += amount;
    const newLevel = Math.floor(this.data.totalXP / 100) + 1;
    const leveledUp = newLevel > this.data.level;
    this.data.level = newLevel;
    this.notify();
    return leveledUp;
  }

  markCharLearned(romaji) {
    this.data.learnedChars.add(romaji);
    this.updateStreak();
    this.addXP(5);
    this.save();
    this.notify();
  }

  markKanjiLearned(char) {
    this.data.learnedKanji.add(char);
    this.updateStreak();
    this.addXP(10);
    this.save();
    this.notify();
  }

  markVocabLearned(word) {
    this.data.learnedVocab.add(word);
    this.updateStreak();
    this.addXP(5);
    this.save();
    this.notify();
  }

  addQuizScore(score, total, type) {
    this.data.quizScores.push({
      score,
      total,
      type,
      date: new Date().toISOString(),
    });
    this.updateStreak();
    const xp = Math.round((score / total) * 20);
    this.addXP(xp);
    this.save();
    this.notify();
  }

  addGameScore(score, type) {
    this.data.gameScores.push({
      score,
      type,
      date: new Date().toISOString(),
    });
    this.updateStreak();
    this.addXP(score);
    this.save();
    this.notify();
  }

  getStats() {
    return {
      charsLearned: this.data.learnedChars.size,
      kanjiLearned: this.data.learnedKanji.size,
      vocabLearned: this.data.learnedVocab.size,
      totalQuizzes: this.data.quizScores.length,
      avgQuizScore: this.data.quizScores.length > 0
        ? Math.round(this.data.quizScores.reduce((s, q) => s + (q.score / q.total), 0) / this.data.quizScores.length * 100)
        : 0,
      streak: this.data.streak,
      totalXP: this.data.totalXP,
      level: this.data.level,
      xpToNext: 100 - (this.data.totalXP % 100),
    };
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.data));
  }

  async reset() {
    this.data = {
      learnedChars: new Set(),
      learnedKanji: new Set(),
      learnedVocab: new Set(),
      quizScores: [],
      gameScores: [],
      streak: 0,
      lastPractice: null,
      totalXP: 0,
      level: 1,
    };
    await this.save();
    this.notify();
  }
}

export const state = new AppState();
