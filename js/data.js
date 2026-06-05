// Japanese Language Learning Data - Comprehensive Content
// Covers JLPT N5, N4 basics, and essential grammar

// ═══════════════════════════════════════════════════
// HIRAGANA - Complete chart with dakuten & combos
// ═══════════════════════════════════════════════════

export const HIRAGANA = [
  // === Basic (46) ===
  // Vowel row (あ行)
  { char: 'あ', romaji: 'a', group: 'basic' },
  { char: 'い', romaji: 'i', group: 'basic' },
  { char: 'う', romaji: 'u', group: 'basic' },
  { char: 'え', romaji: 'e', group: 'basic' },
  { char: 'お', romaji: 'o', group: 'basic' },
  // K row (か行)
  { char: 'か', romaji: 'ka', group: 'basic' },
  { char: 'き', romaji: 'ki', group: 'basic' },
  { char: 'く', romaji: 'ku', group: 'basic' },
  { char: 'け', romaji: 'ke', group: 'basic' },
  { char: 'こ', romaji: 'ko', group: 'basic' },
  // S row (さ行)
  { char: 'さ', romaji: 'sa', group: 'basic' },
  { char: 'し', romaji: 'shi', group: 'basic' },
  { char: 'す', romaji: 'su', group: 'basic' },
  { char: 'せ', romaji: 'se', group: 'basic' },
  { char: 'そ', romaji: 'so', group: 'basic' },
  // T row (た行)
  { char: 'た', romaji: 'ta', group: 'basic' },
  { char: 'ち', romaji: 'chi', group: 'basic' },
  { char: 'つ', romaji: 'tsu', group: 'basic' },
  { char: 'て', romaji: 'te', group: 'basic' },
  { char: 'と', romaji: 'to', group: 'basic' },
  // N row (な行)
  { char: 'な', romaji: 'na', group: 'basic' },
  { char: 'に', romaji: 'ni', group: 'basic' },
  { char: 'ぬ', romaji: 'nu', group: 'basic' },
  { char: 'ね', romaji: 'ne', group: 'basic' },
  { char: 'の', romaji: 'no', group: 'basic' },
  // H row (は行)
  { char: 'は', romaji: 'ha', group: 'basic' },
  { char: 'ひ', romaji: 'hi', group: 'basic' },
  { char: 'ふ', romaji: 'fu', group: 'basic' },
  { char: 'へ', romaji: 'he', group: 'basic' },
  { char: 'ほ', romaji: 'ho', group: 'basic' },
  // M row (ま行)
  { char: 'ま', romaji: 'ma', group: 'basic' },
  { char: 'み', romaji: 'mi', group: 'basic' },
  { char: 'む', romaji: 'mu', group: 'basic' },
  { char: 'め', romaji: 'me', group: 'basic' },
  { char: 'も', romaji: 'mo', group: 'basic' },
  // Y row (や行)
  { char: 'や', romaji: 'ya', group: 'basic' },
  { char: 'ゆ', romaji: 'yu', group: 'basic' },
  { char: 'よ', romaji: 'yo', group: 'basic' },
  // R row (ら行)
  { char: 'ら', romaji: 'ra', group: 'basic' },
  { char: 'り', romaji: 'ri', group: 'basic' },
  { char: 'る', romaji: 'ru', group: 'basic' },
  { char: 'れ', romaji: 're', group: 'basic' },
  { char: 'ろ', romaji: 'ro', group: 'basic' },
  // W row (わ行) + N
  { char: 'わ', romaji: 'wa', group: 'basic' },
  { char: 'を', romaji: 'wo', group: 'basic' },
  { char: 'ん', romaji: 'n', group: 'basic' },

  // === Dakuten 濁音 (20) ===
  { char: 'が', romaji: 'ga', group: 'dakuten' },
  { char: 'ぎ', romaji: 'gi', group: 'dakuten' },
  { char: 'ぐ', romaji: 'gu', group: 'dakuten' },
  { char: 'げ', romaji: 'ge', group: 'dakuten' },
  { char: 'ご', romaji: 'go', group: 'dakuten' },
  { char: 'ざ', romaji: 'za', group: 'dakuten' },
  { char: 'じ', romaji: 'ji', group: 'dakuten' },
  { char: 'ず', romaji: 'zu', group: 'dakuten' },
  { char: 'ぜ', romaji: 'ze', group: 'dakuten' },
  { char: 'ぞ', romaji: 'zo', group: 'dakuten' },
  { char: 'だ', romaji: 'da', group: 'dakuten' },
  { char: 'ぢ', romaji: 'di', group: 'dakuten' },
  { char: 'づ', romaji: 'du', group: 'dakuten' },
  { char: 'で', romaji: 'de', group: 'dakuten' },
  { char: 'ど', romaji: 'do', group: 'dakuten' },
  { char: 'ば', romaji: 'ba', group: 'dakuten' },
  { char: 'び', romaji: 'bi', group: 'dakuten' },
  { char: 'ぶ', romaji: 'bu', group: 'dakuten' },
  { char: 'べ', romaji: 'be', group: 'dakuten' },
  { char: 'ぼ', romaji: 'bo', group: 'dakuten' },

  // === Handakuten 半濁音 (5) ===
  { char: 'ぱ', romaji: 'pa', group: 'handakuten' },
  { char: 'ぴ', romaji: 'pi', group: 'handakuten' },
  { char: 'ぷ', romaji: 'pu', group: 'handakuten' },
  { char: 'ぺ', romaji: 'pe', group: 'handakuten' },
  { char: 'ぽ', romaji: 'po', group: 'handakuten' },

  // === Combo characters 拗音 (36) ===
  { char: 'きゃ', romaji: 'kya', group: 'combo' },
  { char: 'きゅ', romaji: 'kyu', group: 'combo' },
  { char: 'きょ', romaji: 'kyo', group: 'combo' },
  { char: 'しゃ', romaji: 'sha', group: 'combo' },
  { char: 'しゅ', romaji: 'shu', group: 'combo' },
  { char: 'しょ', romaji: 'sho', group: 'combo' },
  { char: 'ちゃ', romaji: 'cha', group: 'combo' },
  { char: 'ちゅ', romaji: 'chu', group: 'combo' },
  { char: 'ちょ', romaji: 'cho', group: 'combo' },
  { char: 'にゃ', romaji: 'nya', group: 'combo' },
  { char: 'にゅ', romaji: 'nyu', group: 'combo' },
  { char: 'にょ', romaji: 'nyo', group: 'combo' },
  { char: 'ひゃ', romaji: 'hya', group: 'combo' },
  { char: 'ひゅ', romaji: 'hyu', group: 'combo' },
  { char: 'ひょ', romaji: 'hyo', group: 'combo' },
  { char: 'みゃ', romaji: 'mya', group: 'combo' },
  { char: 'みゅ', romaji: 'myu', group: 'combo' },
  { char: 'みょ', romaji: 'myo', group: 'combo' },
  { char: 'りゃ', romaji: 'rya', group: 'combo' },
  { char: 'りゅ', romaji: 'ryu', group: 'combo' },
  { char: 'りょ', romaji: 'ryo', group: 'combo' },
  { char: 'ぎゃ', romaji: 'gya', group: 'combo' },
  { char: 'ぎゅ', romaji: 'gyu', group: 'combo' },
  { char: 'ぎょ', romaji: 'gyo', group: 'combo' },
  { char: 'じゃ', romaji: 'ja', group: 'combo' },
  { char: 'じゅ', romaji: 'ju', group: 'combo' },
  { char: 'じょ', romaji: 'jo', group: 'combo' },
  { char: 'びゃ', romaji: 'bya', group: 'combo' },
  { char: 'びゅ', romaji: 'byu', group: 'combo' },
  { char: 'びょ', romaji: 'byo', group: 'combo' },
  { char: 'ぴゃ', romaji: 'pya', group: 'combo' },
  { char: 'ぴゅ', romaji: 'pyu', group: 'combo' },
  { char: 'ぴょ', romaji: 'pyo', group: 'combo' },
];

// ═══════════════════════════════════════════════════
// KATAKANA - Complete chart with dakuten & combos
// ═══════════════════════════════════════════════════

export const KATAKANA = [
  // === Basic (46) ===
  { char: 'ア', romaji: 'a', group: 'basic' },
  { char: 'イ', romaji: 'i', group: 'basic' },
  { char: 'ウ', romaji: 'u', group: 'basic' },
  { char: 'エ', romaji: 'e', group: 'basic' },
  { char: 'オ', romaji: 'o', group: 'basic' },
  { char: 'カ', romaji: 'ka', group: 'basic' },
  { char: 'キ', romaji: 'ki', group: 'basic' },
  { char: 'ク', romaji: 'ku', group: 'basic' },
  { char: 'ケ', romaji: 'ke', group: 'basic' },
  { char: 'コ', romaji: 'ko', group: 'basic' },
  { char: 'サ', romaji: 'sa', group: 'basic' },
  { char: 'シ', romaji: 'shi', group: 'basic' },
  { char: 'ス', romaji: 'su', group: 'basic' },
  { char: 'セ', romaji: 'se', group: 'basic' },
  { char: 'ソ', romaji: 'so', group: 'basic' },
  { char: 'タ', romaji: 'ta', group: 'basic' },
  { char: 'チ', romaji: 'chi', group: 'basic' },
  { char: 'ツ', romaji: 'tsu', group: 'basic' },
  { char: 'テ', romaji: 'te', group: 'basic' },
  { char: 'ト', romaji: 'to', group: 'basic' },
  { char: 'ナ', romaji: 'na', group: 'basic' },
  { char: 'ニ', romaji: 'ni', group: 'basic' },
  { char: 'ヌ', romaji: 'nu', group: 'basic' },
  { char: 'ネ', romaji: 'ne', group: 'basic' },
  { char: 'ノ', romaji: 'no', group: 'basic' },
  { char: 'ハ', romaji: 'ha', group: 'basic' },
  { char: 'ヒ', romaji: 'hi', group: 'basic' },
  { char: 'フ', romaji: 'fu', group: 'basic' },
  { char: 'ヘ', romaji: 'he', group: 'basic' },
  { char: 'ホ', romaji: 'ho', group: 'basic' },
  { char: 'マ', romaji: 'ma', group: 'basic' },
  { char: 'ミ', romaji: 'mi', group: 'basic' },
  { char: 'ム', romaji: 'mu', group: 'basic' },
  { char: 'メ', romaji: 'me', group: 'basic' },
  { char: 'モ', romaji: 'mo', group: 'basic' },
  { char: 'ヤ', romaji: 'ya', group: 'basic' },
  { char: 'ユ', romaji: 'yu', group: 'basic' },
  { char: 'ヨ', romaji: 'yo', group: 'basic' },
  { char: 'ラ', romaji: 'ra', group: 'basic' },
  { char: 'リ', romaji: 'ri', group: 'basic' },
  { char: 'ル', romaji: 'ru', group: 'basic' },
  { char: 'レ', romaji: 're', group: 'basic' },
  { char: 'ロ', romaji: 'ro', group: 'basic' },
  { char: 'ワ', romaji: 'wa', group: 'basic' },
  { char: 'ヲ', romaji: 'wo', group: 'basic' },
  { char: 'ン', romaji: 'n', group: 'basic' },

  // === Dakuten (20) ===
  { char: 'ガ', romaji: 'ga', group: 'dakuten' },
  { char: 'ギ', romaji: 'gi', group: 'dakuten' },
  { char: 'グ', romaji: 'gu', group: 'dakuten' },
  { char: 'ゲ', romaji: 'ge', group: 'dakuten' },
  { char: 'ゴ', romaji: 'go', group: 'dakuten' },
  { char: 'ザ', romaji: 'za', group: 'dakuten' },
  { char: 'ジ', romaji: 'ji', group: 'dakuten' },
  { char: 'ズ', romaji: 'zu', group: 'dakuten' },
  { char: 'ゼ', romaji: 'ze', group: 'dakuten' },
  { char: 'ゾ', romaji: 'zo', group: 'dakuten' },
  { char: 'ダ', romaji: 'da', group: 'dakuten' },
  { char: 'ヂ', romaji: 'di', group: 'dakuten' },
  { char: 'ヅ', romaji: 'du', group: 'dakuten' },
  { char: 'デ', romaji: 'de', group: 'dakuten' },
  { char: 'ド', romaji: 'do', group: 'dakuten' },
  { char: 'バ', romaji: 'ba', group: 'dakuten' },
  { char: 'ビ', romaji: 'bi', group: 'dakuten' },
  { char: 'ブ', romaji: 'bu', group: 'dakuten' },
  { char: 'ベ', romaji: 'be', group: 'dakuten' },
  { char: 'ボ', romaji: 'bo', group: 'dakuten' },

  // === Handakuten (5) ===
  { char: 'パ', romaji: 'pa', group: 'handakuten' },
  { char: 'ピ', romaji: 'pi', group: 'handakuten' },
  { char: 'プ', romaji: 'pu', group: 'handakuten' },
  { char: 'ペ', romaji: 'pe', group: 'handakuten' },
  { char: 'ポ', romaji: 'po', group: 'handakuten' },

  // === Combo (36) ===
  { char: 'キャ', romaji: 'kya', group: 'combo' },
  { char: 'キュ', romaji: 'kyu', group: 'combo' },
  { char: 'キョ', romaji: 'kyo', group: 'combo' },
  { char: 'シャ', romaji: 'sha', group: 'combo' },
  { char: 'シュ', romaji: 'shu', group: 'combo' },
  { char: 'ショ', romaji: 'sho', group: 'combo' },
  { char: 'チャ', romaji: 'cha', group: 'combo' },
  { char: 'チュ', romaji: 'chu', group: 'combo' },
  { char: 'チョ', romaji: 'cho', group: 'combo' },
  { char: 'ニャ', romaji: 'nya', group: 'combo' },
  { char: 'ニュ', romaji: 'nyu', group: 'combo' },
  { char: 'ニョ', romaji: 'nyo', group: 'combo' },
  { char: 'ヒャ', romaji: 'hya', group: 'combo' },
  { char: 'ヒュ', romaji: 'hyu', group: 'combo' },
  { char: 'ヒョ', romaji: 'hyo', group: 'combo' },
  { char: 'ミャ', romaji: 'mya', group: 'combo' },
  { char: 'ミュ', romaji: 'myu', group: 'combo' },
  { char: 'ミョ', romaji: 'myo', group: 'combo' },
  { char: 'リャ', romaji: 'rya', group: 'combo' },
  { char: 'リュ', romaji: 'ryu', group: 'combo' },
  { char: 'リョ', romaji: 'ryo', group: 'combo' },
  { char: 'ギャ', romaji: 'gya', group: 'combo' },
  { char: 'ギュ', romaji: 'gyu', group: 'combo' },
  { char: 'ギョ', romaji: 'gyo', group: 'combo' },
  { char: 'ジャ', romaji: 'ja', group: 'combo' },
  { char: 'ジュ', romaji: 'ju', group: 'combo' },
  { char: 'ジョ', romaji: 'jo', group: 'combo' },
  { char: 'ビャ', romaji: 'bya', group: 'combo' },
  { char: 'ビュ', romaji: 'byu', group: 'combo' },
  { char: 'ビョ', romaji: 'byo', group: 'combo' },
  { char: 'ピャ', romaji: 'pya', group: 'combo' },
  { char: 'ピュ', romaji: 'pyu', group: 'combo' },
  { char: 'ピョ', romaji: 'pyo', group: 'combo' },
];

// ═══════════════════════════════════════════════════
// KANJI - N5 + N4 (150+ characters)
// ═══════════════════════════════════════════════════

export const BASIC_KANJI = [
  // === N5 - المستوى 1 (الأرقام والأساسيات) ===
  { char: '一', meaning: 'واحد', onyomi: 'ichi', kunyomi: 'hitotsu', level: 1 },
  { char: '二', meaning: 'اثنان', onyomi: 'ni', kunyomi: 'futatsu', level: 1 },
  { char: '三', meaning: 'ثلاثة', onyomi: 'san', kunyomi: 'mittsu', level: 1 },
  { char: '四', meaning: 'أربعة', onyomi: 'shi', kunyomi: 'yottsu', level: 1 },
  { char: '五', meaning: 'خمسة', onyomi: 'go', kunyomi: 'itsutsu', level: 1 },
  { char: '六', meaning: 'ستة', onyomi: 'roku', kunyomi: 'muttsu', level: 1 },
  { char: '七', meaning: 'سبعة', onyomi: 'shichi', kunyomi: 'nanatsu', level: 1 },
  { char: '八', meaning: 'ثمانية', onyomi: 'hachi', kunyomi: 'yattsu', level: 1 },
  { char: '九', meaning: 'تسعة', onyomi: 'ku', kunyomi: 'kokonotsu', level: 1 },
  { char: '十', meaning: 'عشرة', onyomi: 'juu', kunyomi: 'too', level: 1 },
  { char: '百', meaning: 'مائة', onyomi: 'hyaku', kunyomi: 'momo', level: 1 },
  { char: '千', meaning: 'ألف', onyomi: 'sen', kunyomi: 'chi', level: 1 },
  { char: '万', meaning: 'عشرة آلاف', onyomi: 'man', kunyomi: '-', level: 1 },
  { char: '円', meaning: 'ين/دائرة', onyomi: 'en', kunyomi: 'maru', level: 1 },

  // === N5 - المستوى 2 (الزمان والطبيعة) ===
  { char: '日', meaning: 'يوم/شمس', onyomi: 'nichi', kunyomi: 'hi', level: 2 },
  { char: '月', meaning: 'شهر/قمر', onyomi: 'getsu', kunyomi: 'tsuki', level: 2 },
  { char: '火', meaning: 'نار', onyomi: 'ka', kunyomi: 'hi', level: 2 },
  { char: '水', meaning: 'ماء', onyomi: 'sui', kunyomi: 'mizu', level: 2 },
  { char: '木', meaning: 'شجرة/خشب', onyomi: 'moku', kunyomi: 'ki', level: 2 },
  { char: '金', meaning: 'ذهب/مال', onyomi: 'kin', kunyomi: 'kane', level: 2 },
  { char: '土', meaning: 'أرض/تراب', onyomi: 'do', kunyomi: 'tsuchi', level: 2 },
  { char: '山', meaning: 'جبل', onyomi: 'san', kunyomi: 'yama', level: 2 },
  { char: '川', meaning: 'نهر', onyomi: 'sen', kunyomi: 'kawa', level: 2 },
  { char: '田', meaning: 'حقل أرز', onyomi: 'den', kunyomi: 'ta', level: 2 },
  { char: '雨', meaning: 'مطر', onyomi: 'u', kunyomi: 'ame', level: 2 },
  { char: '花', meaning: 'زهرة', onyomi: 'ka', kunyomi: 'hana', level: 2 },
  { char: '天', meaning: 'سماء/طقس', onyomi: 'ten', kunyomi: 'ame', level: 2 },
  { char: '気', meaning: 'هواء/شعور', onyomi: 'ki', kunyomi: 'ke', level: 2 },

  // === N5 - المستوى 3 (الناس والعائلة) ===
  { char: '人', meaning: 'شخص', onyomi: 'jin', kunyomi: 'hito', level: 3 },
  { char: '大', meaning: 'كبير', onyomi: 'dai', kunyomi: 'ookii', level: 3 },
  { char: '小', meaning: 'صغير', onyomi: 'shou', kunyomi: 'chiisai', level: 3 },
  { char: '中', meaning: 'وسط', onyomi: 'chuu', kunyomi: 'naka', level: 3 },
  { char: '女', meaning: 'امرأة', onyomi: 'jo', kunyomi: 'onna', level: 3 },
  { char: '男', meaning: 'رجل', onyomi: 'dan', kunyomi: 'otoko', level: 3 },
  { char: '子', meaning: 'طفل', onyomi: 'shi', kunyomi: 'ko', level: 3 },
  { char: '母', meaning: 'أم', onyomi: 'bo', kunyomi: 'haha', level: 3 },
  { char: '父', meaning: 'أب', onyomi: 'fu', kunyomi: 'chichi', level: 3 },
  { char: '友', meaning: 'صديق', onyomi: 'yuu', kunyomi: 'tomo', level: 3 },

  // === N5 - المستوى 4 (البيت والمدرسة) ===
  { char: '学', meaning: 'دراسة/تعلم', onyomi: 'gaku', kunyomi: 'manabu', level: 4 },
  { char: '生', meaning: 'حياة/ولادة', onyomi: 'sei', kunyomi: 'ikiru', level: 4 },
  { char: '先', meaning: 'سابق/معلم', onyomi: 'sen', kunyomi: 'saki', level: 4 },
  { char: '年', meaning: 'سنة', onyomi: 'nen', kunyomi: 'toshi', level: 4 },
  { char: '本', meaning: 'كتاب/أصل', onyomi: 'hon', kunyomi: 'moto', level: 4 },
  { char: '今', meaning: 'الآن', onyomi: 'kon', kunyomi: 'ima', level: 4 },
  { char: '名', meaning: 'اسم', onyomi: 'mei', kunyomi: 'na', level: 4 },
  { char: '校', meaning: 'مدرسة', onyomi: 'kou', kunyomi: '-', level: 4 },
  { char: '語', meaning: 'لغة', onyomi: 'go', kunyomi: 'kataru', level: 4 },
  { char: '文', meaning: 'جملة/ văn hóa', onyomi: 'bun', kunyomi: 'fumi', level: 4 },

  // === N5 - المستوى 5 (الاتجاهات والجسم) ===
  { char: '左', meaning: 'يسار', onyomi: 'sa', kunyomi: 'hidari', level: 5 },
  { char: '右', meaning: 'يمين', onyomi: 'yuu', kunyomi: 'migi', level: 5 },
  { char: '上', meaning: 'أعلى/فوق', onyomi: 'jou', kunyomi: 'ue', level: 5 },
  { char: '下', meaning: 'أسفل/تحت', onyomi: 'ka', kunyomi: 'shita', level: 5 },
  { char: '目', meaning: 'عين', onyomi: 'moku', kunyomi: 'me', level: 5 },
  { char: '耳', meaning: 'أذن', onyomi: 'ji', kunyomi: 'mimi', level: 5 },
  { char: '口', meaning: 'فم', onyomi: 'kou', kunyomi: 'kuchi', level: 5 },
  { char: '手', meaning: 'يد', onyomi: 'shu', kunyomi: 'te', level: 5 },
  { char: '足', meaning: 'قدم/ساق', onyomi: 'soku', kunyomi: 'ashi', level: 5 },
  { char: '車', meaning: 'سيارة', onyomi: 'sha', kunyomi: 'kuruma', level: 5 },

  // === N5 - المستوى 6 (الأفعال والصفات) ===
  { char: '食', meaning: 'طعام/يأكل', onyomi: 'shoku', kunyomi: 'taberu', level: 6 },
  { char: '飲', meaning: 'يشرب', onyomi: 'in', kunyomi: 'nomu', level: 6 },
  { char: '見', meaning: 'يرى/يشاهد', onyomi: 'ken', kunyomi: 'miru', level: 6 },
  { char: '聞', meaning: 'يسمع/يسأل', onyomi: 'bun', kunyomi: 'kiku', level: 6 },
  { char: '書', meaning: 'يكتب', onyomi: 'sho', kunyomi: 'kaku', level: 6 },
  { char: '読', meaning: 'يقرأ', onyomi: 'doku', kunyomi: 'yomu', level: 6 },
  { char: '話', meaning: 'يتكلم/قصة', onyomi: 'wa', kunyomi: 'hanasu', level: 6 },
  { char: '行', meaning: 'يذهب', onyomi: 'kou', kunyomi: 'iku', level: 6 },
  { char: '来', meaning: 'يأتي', onyomi: 'rai', kunyomi: 'kuru', level: 6 },
  { char: '帰', meaning: 'يعود', onyomi: 'ki', kunyomi: 'kaeru', level: 6 },
  { char: '買', meaning: 'يشتري', onyomi: 'bai', kunyomi: 'kau', level: 6 },
  { char: '売', meaning: 'يبيع', onyomi: 'bai', kunyomi: 'uru', level: 6 },

  // === N5 - المستوى 7 (الصفات الأساسية) ===
  { char: '新', meaning: 'جديد', onyomi: 'shin', kunyomi: 'atarashii', level: 7 },
  { char: '古', meaning: 'قديم', onyomi: 'ko', kunyomi: 'furui', level: 7 },
  { char: '高', meaning: 'مرتفع/غالي', onyomi: 'kou', kunyomi: 'takai', level: 7 },
  { char: '安', meaning: 'رخيص/آمن', onyomi: 'an', kunyomi: 'yasui', level: 7 },
  { char: '長', meaning: 'طويل', onyomi: 'chou', kunyomi: 'nagai', level: 7 },
  { char: '早', meaning: 'مبكر/سريع', onyomi: 'sou', kunyomi: 'hayai', level: 7 },
  { char: '明', meaning: 'مشرق/واضح', onyomi: 'mei', kunyomi: 'akarui', level: 7 },
  { char: '暗', meaning: 'مظلم', onyomi: 'an', kunyomi: 'kurai', level: 7 },
  { char: '強', meaning: 'قوي', onyomi: 'kyou', kunyomi: 'tsuyoi', level: 7 },
  { char: '弱', meaning: 'ضعيف', onyomi: 'jaku', kunyomi: 'yowai', level: 7 },
  { char: '多', meaning: 'كثير', onyomi: 'ta', kunyomi: 'ooi', level: 7 },
  { char: '少', meaning: 'قليل', onyomi: 'shou', kunyomi: 'sukunai', level: 7 },

  // === N5 - المستوى 8 (الاتجاهات والمواقع) ===
  { char: '東', meaning: 'شرق', onyomi: 'tou', kunyomi: 'higashi', level: 8 },
  { char: '西', meaning: 'غرب', onyomi: 'sei', kunyomi: 'nishi', level: 8 },
  { char: '南', meaning: 'جنوب', onyomi: 'nan', kunyomi: 'minami', level: 8 },
  { char: '北', meaning: 'شمال', onyomi: 'hoku', kunyomi: 'kita', level: 8 },
  { char: '前', meaning: 'أمام', onyomi: 'zen', kunyomi: 'mae', level: 8 },
  { char: '後', meaning: 'خلف/بعد', onyomi: 'go', kunyomi: 'ato', level: 8 },
  { char: '間', meaning: 'بين/فترة', onyomi: 'kan', kunyomi: 'aida', level: 8 },
  { char: '時間', meaning: 'وقت/ساعة', onyomi: 'jikan', kunyomi: '-', level: 8 },

  // === N5 - المستوى 9 (الحيوانات والطبيعة) ===
  { char: '馬', meaning: 'حصان', onyomi: 'ba', kunyomi: 'uma', level: 9 },
  { char: '犬', meaning: 'كلب', onyomi: 'ken', kunyomi: 'inu', level: 9 },
  { char: '猫', meaning: 'قطة', onyomi: 'byou', kunyomi: 'neko', level: 9 },
  { char: '魚', meaning: 'سمكة', onyomi: 'gyo', kunyomi: 'sakana', level: 9 },
  { char: '鳥', meaning: 'طائر', onyomi: 'chou', kunyomi: 'tori', level: 9 },
  { char: '虫', meaning: 'حشرة', onyomi: 'chuu', kunyomi: 'mushi', level: 9 },

  // === N5 - المستوى 10 (أفعال إضافية) ===
  { char: '知', meaning: 'يعرف', onyomi: 'chi', kunyomi: 'shiru', level: 10 },
  { char: '思', meaning: 'يفكر', onyomi: 'shi', kunyomi: 'omou', level: 10 },
  { char: '立', meaning: 'يقف', onyomi: 'ritsu', kunyomi: 'tatsu', level: 10 },
  { char: '住', meaning: 'يسكن', onyomi: 'juu', kunyomi: 'sumu', level: 10 },
  { char: '使', meaning: 'يستخدم', onyomi: 'shi', kunyomi: 'tsukau', level: 10 },
  { char: '作', meaning: 'يصنع', onyomi: 'saku', kunyomi: 'tsukuru', level: 10 },
  { char: '切', meaning: 'يقطع', onyomi: 'setsu', kunyomi: 'kiru', level: 10 },
  { char: '死', meaning: 'يموت', onyomi: 'shi', kunyomi: 'shinu', level: 10 },

  // === N4 - المستوى 11 (المباني والأماكن) ===
  { char: '社', meaning: 'شركة/ضريح', onyomi: 'sha', kunyomi: 'yashiro', level: 11 },
  { char: '店', meaning: 'متجر', onyomi: 'ten', kunyomi: 'mise', level: 11 },
  { char: '家', meaning: 'بيت/عائلة', onyomi: 'ka', kunyomi: 'ie', level: 11 },
  { char: '門', meaning: 'بوابة', onyomi: 'mon', kunyomi: 'kado', level: 11 },
  { char: '駅', meaning: 'محطة', onyomi: 'eki', kunyomi: '-', level: 11 },
  { char: '道', meaning: 'طريق', onyomi: 'dou', kunyomi: 'michi', level: 11 },
  { char: '空', meaning: 'سماء/فراغ', onyomi: 'kuu', kunyomi: 'sora', level: 11 },
  { char: '海', meaning: 'بحر', onyomi: 'kai', kunyomi: 'umi', level: 11 },
  { char: '池', meaning: 'بركة', onyomi: 'chi', kunyomi: 'ike', level: 11 },
  { char: '林', meaning: 'غابة صغيرة', onyomi: 'rin', kunyomi: 'hayashi', level: 11 },

  // === N4 - المستوى 12 (الزمان والأيام) ===
  { char: '春', meaning: 'ربيع', onyomi: 'shun', kunyomi: 'haru', level: 12 },
  { char: '夏', meaning: 'صيف', onyomi: 'ka', kunyomi: 'natsu', level: 12 },
  { char: '秋', meaning: 'خريف', onyomi: 'shuu', kunyomi: 'aki', level: 12 },
  { char: '冬', meaning: 'شتاء', onyomi: 'tou', kunyomi: 'fuyu', level: 12 },
  { char: '朝', meaning: 'صباح', onyomi: 'chou', kunyomi: 'asa', level: 12 },
  { char: '昼', meaning: 'ظهر', onyomi: 'chuu', kunyomi: 'hiru', level: 12 },
  { char: '夕', meaning: 'مساء', onyomi: 'seki', kunyomi: 'yuu', level: 12 },
  { char: '夜', meaning: 'ليل', onyomi: 'ya', kunyomi: 'yoru', level: 12 },
  { char: '曜', meaning: 'يوم الأسبوع', onyomi: 'you', kunyomi: '-', level: 12 },

  // === N4 - المستوى 13 (العائلة والأقارب) ===
  { char: '兄', meaning: 'أخ كبير', onyomi: 'kei', kunyomi: 'ani', level: 13 },
  { char: '弟', meaning: 'أخ صغير', onyomi: 'tei', kunyomi: 'otouto', level: 13 },
  { char: '姉', meaning: 'أخت كبيرة', onyomi: 'shi', kunyomi: 'ane', level: 13 },
  { char: '妹', meaning: 'أخت صغيرة', onyomi: 'mai', kunyomi: 'imouto', level: 13 },
  { char: '家族', meaning: 'عائلة', onyomi: 'kazoku', kunyomi: '-', level: 13 },

  // === N4 - المستوى 14 (الاتصال والتقنية) ===
  { char: '電', meaning: 'كهرباء', onyomi: 'den', kunyomi: '-', level: 14 },
  { char: '話', meaning: 'هاتف/قصة', onyomi: 'wa', kunyomi: 'hanasu', level: 14 },
  { char: '車', meaning: 'سيارة/عربة', onyomi: 'sha', kunyomi: 'kuruma', level: 14 },
  { char: '自', meaning: 'نفس', onyomi: 'ji', kunyomi: 'mizukara', level: 14 },
  { char: '公', meaning: 'عام', onyomi: 'kou', kunyomi: 'ooyake', level: 14 },

  // === N4 - المستوى 15 (الصفات والظروف) ===
  { char: '好', meaning: 'يحب/جيّد', onyomi: 'kou', kunyomi: 'suki', level: 15 },
  { char: '嫌', meaning: 'يكره', onyomi: 'ken', kunyomi: 'kirai', level: 15 },
  { char: '静', meaning: 'هادئ', onyomi: 'sei', kunyomi: 'shizuka', level: 15 },
  { char: '元', meaning: 'أصل/طاقة', onyomi: 'gen', kunyomi: 'moto', level: 15 },
  { char: '每', meaning: 'كل', onyomi: 'mai', kunyomi: 'goto', level: 15 },
  { char: '今', meaning: 'الآن/هذا', onyomi: 'kon', kunyomi: 'ima', level: 15 },
  { char: '午', meaning: 'ظهر', onyomi: 'go', kunyomi: '-', level: 15 },
  { char: '週', meaning: 'أسبوع', onyomi: 'shuu', kunyomi: '-', level: 15 },

  // === N3 - المستوى 16 (مشاعر وحالة) ===
  { char: '愛', meaning: 'حب', onyomi: 'ai', kunyomi: 'ai', level: 16 },
  { char: '楽', meaning: 'متعة/سهولة', onyomi: 'raku', kunyomi: 'tanoshii', level: 16 },
  { char: '苦', meaning: 'معاناة/مرارة', onyomi: 'ku', kunyomi: 'nigai', level: 16 },
  { char: '悲', meaning: 'حزن', onyomi: 'hi', kunyomi: 'kanashii', level: 16 },
  { char: '喜', meaning: 'فرح', onyomi: 'ki', kunyomi: 'yorokobu', level: 16 },
  { char: '怒', meaning: 'غضب', onyomi: 'do', kunyomi: 'ikari', level: 16 },
  { char: '笑', meaning: 'ضحك/ابتسامة', onyomi: 'shou', kunyomi: 'warau', level: 16 },
  { char: '泣', meaning: 'بكاء', onyomi: 'kyuu', kunyomi: 'naku', level: 16 },
  { char: '心', meaning: 'قلب/عقل', onyomi: 'shin', kunyomi: 'kokoro', level: 16 },
  { char: '感', meaning: 'شعور/إحساس', onyomi: 'kan', kunyomi: 'kanjiru', level: 16 },

  // === N3 - المستوى 17 (طبيعة وبيئة) ===
  { char: '風', meaning: 'رياح', onyomi: 'fuu', kunyomi: 'kaze', level: 17 },
  { char: '雪', meaning: 'ثلج', onyomi: 'setsu', kunyomi: 'yuki', level: 17 },
  { char: '光', meaning: 'ضوء', onyomi: 'kou', kunyomi: 'hikari', level: 17 },
  { char: '影', meaning: 'ظل', onyomi: 'ei', kunyomi: 'kage', level: 17 },
  { char: '星', meaning: 'نجمة', onyomi: 'sei', kunyomi: 'hoshi', level: 17 },
  { char: '雲', meaning: 'غيمة', onyomi: 'un', kunyomi: 'kumo', level: 17 },
  { char: '波', meaning: 'موجة', onyomi: 'ha', kunyomi: 'nami', level: 17 },
  { char: '石', meaning: 'حجر', onyomi: 'seki', kunyomi: 'ishi', level: 17 },
  { char: '草', meaning: 'عشب', onyomi: 'sou', kunyomi: 'kusa', level: 17 },
  { char: '森', meaning: 'غابة كثيفة', onyomi: 'shin', kunyomi: 'mori', level: 17 },

  // === N3 - المستوى 18 (حركة وأفعال) ===
  { char: '走', meaning: 'يركض', onyomi: 'sou', kunyomi: 'hashiru', level: 18 },
  { char: '歩', meaning: 'يمشي', onyomi: 'ho', kunyomi: 'aruku', level: 18 },
  { char: '泳', meaning: 'يسبح', onyomi: 'ei', kunyomi: 'oyogu', level: 18 },
  { char: '飛', meaning: 'يطير', onyomi: 'hi', kunyomi: 'tobu', level: 18 },
  { char: '止', meaning: 'يتوقف', onyomi: 'shi', kunyomi: 'tomaru', level: 18 },
  { char: '動', meaning: 'يتحرك', onyomi: 'dou', kunyomi: 'ugoku', level: 18 },
  { char: '引', meaning: 'يسحب', onyomi: 'in', kunyomi: 'hiku', level: 18 },
  { char: '持', meaning: 'يحمل/يمتلك', onyomi: 'ji', kunyomi: 'motsu', level: 18 },
  { char: '取', meaning: 'يأخذ', onyomi: 'shu', kunyomi: 'toru', level: 18 },
  { char: '打', meaning: 'يضرب', onyomi: 'da', kunyomi: 'utsu', level: 18 },

  // === N3 - المستوى 19 (חושים وإدراك) ===
  { char: '声', meaning: 'صوت', onyomi: 'sei', kunyomi: 'koe', level: 19 },
  { char: '音', meaning: 'صوت/نغمة', onyomi: 'on', kunyomi: 'oto', level: 19 },
  { char: '色', meaning: 'لون', onyomi: 'shoku', kunyomi: 'iro', level: 19 },
  { char: '形', meaning: 'شكل', onyomi: 'kei', kunyomi: 'katachi', level: 19 },
  { char: '数', meaning: 'رقم/عدد', onyomi: 'suu', kunyomi: 'kazu', level: 19 },
  { char: '計', meaning: 'قياس/حساب', onyomi: 'kei', kunyomi: 'hakaru', level: 19 },
  { char: '記', meaning: 'تسجيل', onyomi: 'ki', kunyomi: 'shirusu', level: 19 },
  { char: '考', meaning: 'تفكير', onyomi: 'kou', kunyomi: 'kangaeru', level: 19 },
  { char: '意', meaning: 'معنى/نية', onyomi: 'i', kunyomi: '-', level: 19 },
  { char: '決', meaning: 'قرار', onyomi: 'ketsu', kunyomi: 'kimeru', level: 19 },

  // === N3 - المستوى 20 (علاقات اجتماعية) ===
  { char: '信', meaning: 'ثقة/رسالة', onyomi: 'shin', kunyomi: 'shinjiru', level: 20 },
  { char: '頼', meaning: 'يعتمد/يطلب', onyomi: 'rai', kunyomi: 'tanomu', level: 20 },
  { char: '助', meaning: 'مساعدة', onyomi: 'jo', kunyomi: 'tasukeru', level: 20 },
  { char: '守', meaning: 'حماية', onyomi: 'shu', kunyomi: 'mamoru', level: 20 },
  { char: '争', meaning: 'نزاع', onyomi: 'sou', kunyomi: 'arasou', level: 20 },
  { char: '仲', meaning: 'علاقة/وسط', onyomi: 'chuu', kunyomi: 'naka', level: 20 },
  { char: '困', meaning: 'حيرة/مشكلة', onyomi: 'kon', kunyomi: 'komaru', level: 20 },
  { char: '配', meaning: 'توزيع/قلق', onyomi: 'hai', kunyomi: 'kubaru', level: 20 },
  { char: '届', meaning: 'يصل/تقرير', onyomi: 'tei', kunyomi: 'todokeru', level: 20 },
  { char: '届', meaning: 'إشعار', onyomi: 'tei', kunyomi: 'todoke', level: 20 },

  // === N3 - المستوى 21 (عمل وتجارة) ===
  { char: '仕', meaning: 'عمل', onyomi: 'shi', kunyomi: 'tsukau', level: 21 },
  { char: '事', meaning: 'أمر/شيء', onyomi: 'ji', kunyomi: 'koto', level: 21 },
  { char: '業', meaning: 'عمل/صناعة', onyomi: 'gyou', kunyomi: 'waza', level: 21 },
  { char: '商', meaning: 'تجارة', onyomi: 'shou', kunyomi: 'akinau', level: 21 },
  { char: '産', meaning: 'إنتاج/ولادة', onyomi: 'san', kunyomi: 'umu', level: 21 },
  { char: '値', meaning: 'قيمة/سعر', onyomi: 'chi', kunyomi: 'ne', level: 21 },
  { char: '貸', meaning: 'إقراض', onyomi: 'tai', kunyomi: 'kasu', level: 21 },
  { char: '借', meaning: 'اقتراض', onyomi: 'shaku', kunyomi: 'kariru', level: 21 },
  { char: '代', meaning: 'جيل/بدل', onyomi: 'dai', kunyomi: 'kawaru', level: 21 },
  { char: '係', meaning: 'مسؤول/صلة', onyomi: 'kei', kunyomi: 'kakari', level: 21 },

  // === N3 - المستوى 22 (صحة وطب) ===
  { char: '病', meaning: 'مرض', onyomi: 'byou', kunyomi: 'yamai', level: 22 },
  { char: '医', meaning: 'طب/علاج', onyomi: 'i', kunyomi: 'iyasu', level: 22 },
  { char: '薬', meaning: 'دواء', onyomi: 'yaku', kunyomi: 'kusuri', level: 22 },
  { char: '治', meaning: 'علاج/شفاء', onyomi: 'ji', kunyomi: 'naosu', level: 22 },
  { char: '痛', meaning: 'ألم', onyomi: 'tsuu', kunyomi: 'itai', level: 22 },
  { char: '体', meaning: 'جسم', onyomi: 'tai', kunyomi: 'karada', level: 22 },
  { char: '頭', meaning: 'رأس', onyomi: 'tou', kunyomi: 'atama', level: 22 },
  { char: '顔', meaning: 'وجه', onyomi: 'gan', kunyomi: 'kao', level: 22 },
  { char: '背', meaning: 'ظهر/طول', onyomi: 'hai', kunyomi: 'se', level: 22 },
  { char: '指', meaning: 'إصبع/يد', onyomi: 'shi', kunyomi: 'yubi', level: 22 },

  // === N3 - المستوى 23 (ملابس ومظهر) ===
  { char: '服', meaning: 'ملابس', onyomi: 'fuku', kunyomi: '-', level: 23 },
  { char: '着', meaning: 'يرتدي', onyomi: 'chaku', kunyomi: 'kiru', level: 23 },
  { char: '脱', meaning: 'يخلع', onyomi: 'datsu', kunyomi: 'nugu', level: 23 },
  { char: '帯', meaning: 'حزام/نطاق', onyomi: 'tai', kunyomi: 'obi', level: 23 },
  { char: '帽', meaning: 'قبعة', onyomi: 'bou', kunyomi: '-', level: 23 },
  { char: '靴', meaning: 'حذاء', onyomi: 'ka', kunyomi: 'kutsu', level: 23 },

  // === N3 - المستوى 24 (تكنولوجيا) ===
  { char: '機', meaning: 'آلة', onyomi: 'ki', kunyomi: 'hata', level: 24 },
  { char: '械', meaning: 'جهاز', onyomi: 'kai', kunyomi: '-', level: 24 },
  { char: '発', meaning: 'انطلاق/إرسال', onyomi: 'hatsu', kunyomi: '-', level: 24 },
  { char: '送', meaning: 'إرسال', onyomi: 'sou', kunyomi: 'okuru', level: 24 },
  { char: '受', meaning: 'استقبال', onyomi: 'ju', kunyomi: 'ukeru', level: 24 },
  { char: '連', meaning: 'اتصال/سلسلة', onyomi: 'ren', kunyomi: 'tsuranaru', level: 24 },
  { char: '届', meaning: 'توصيل', onyomi: 'tei', kunyomi: 'todoku', level: 24 },
  { char: '届', meaning: 'إشعار', onyomi: 'tei', kunyomi: 'todoke', level: 24 },
  { char: '届', meaning: 'توصيل', onyomi: 'tei', kunyomi: 'todokeru', level: 24 },
  { char: '届', meaning: 'إشعار', onyomi: 'tei', kunyomi: 'todoke', level: 24 },

  // === N3 - المستوى 25 (ثقافة وتقاليد) ===
  { char: '祭', meaning: 'مهرجان', onyomi: 'sai', kunyomi: 'matsuri', level: 25 },
  { char: '神', meaning: 'إله', onyomi: 'shin', kunyomi: 'kami', level: 25 },
  { char: '仏', meaning: 'بوذا', onyomi: 'butsu', kunyomi: 'hotoke', level: 25 },
  { char: '寺', meaning: 'معبد', onyomi: 'ji', kunyomi: 'tera', level: 25 },
  { char: '都', meaning: 'عاصمة', onyomi: 'to', kunyomi: 'miyako', level: 25 },
  { char: '国', meaning: 'بلد', onyomi: 'koku', kunyomi: 'kuni', level: 25 },
  { char: '港', meaning: 'ميناء', onyomi: 'kou', kunyomi: 'minato', level: 25 },
  { char: '橋', meaning: 'جسر', onyomi: 'kyou', kunyomi: 'hashi', level: 25 },
  { char: '園', meaning: 'حديقة', onyomi: 'en', kunyomi: 'sono', level: 25 },
  { char: '庭', meaning: 'فناء', onyomi: 'tei', kunyomi: 'niwa', level: 25 },
];

// ═══════════════════════════════════════════════════
// VOCABULARY - 250+ words by JLPT level & category
// ═══════════════════════════════════════════════════

export const VOCABULARY = [
  // === Greetings تحيات (15) ===
  { word: 'こんにちは', reading: 'konnichiwa', meaning: 'مرحباً', category: 'greetings', level: 1 },
  { word: 'おはようございます', reading: 'ohayou gozaimasu', meaning: 'صباح الخير (مهذب)', category: 'greetings', level: 1 },
  { word: 'おはよう', reading: 'ohayou', meaning: 'صباح الخير (غير رسمي)', category: 'greetings', level: 1 },
  { word: 'こんばんは', reading: 'konbanwa', meaning: 'مساء الخير', category: 'greetings', level: 1 },
  { word: 'さようなら', reading: 'sayounara', meaning: 'مع السلامة', category: 'greetings', level: 1 },
  { word: 'じゃあね', reading: 'jaa ne', meaning: 'إلى اللقاء (غير رسمي)', category: 'greetings', level: 1 },
  { word: 'ありがとう', reading: 'arigatou', meaning: 'شكراً', category: 'greetings', level: 1 },
  { word: 'ありがとうございます', reading: 'arigatou gozaimasu', meaning: 'شكراً جزيلاً (مهذب)', category: 'greetings', level: 1 },
  { word: 'すみません', reading: 'sumimasen', meaning: 'عفواً/آسف', category: 'greetings', level: 1 },
  { word: 'ごめんなさい', reading: 'gomen nasai', meaning: 'أنا آسف', category: 'greetings', level: 1 },
  { word: 'はい', reading: 'hai', meaning: 'نعم', category: 'greetings', level: 1 },
  { word: 'いいえ', reading: 'iie', meaning: 'لا', category: 'greetings', level: 1 },
  { word: 'はじめまして', reading: 'hajimemashite', meaning: 'تشرفت بمعرفتك', category: 'greetings', level: 1 },
  { word: 'よろしくお願いします', reading: 'yoroshiku onegaishimasu', meaning: 'أتمنى لك الخير (عند التعارف)', category: 'greetings', level: 1 },
  { word: 'おやすみなさい', reading: 'oyasumi nasai', meaning: 'تصبح على خير', category: 'greetings', level: 1 },

  // === Numbers أرقام (20) ===
  { word: 'いち', reading: 'ichi', meaning: 'واحد', category: 'numbers', level: 1 },
  { word: 'に', reading: 'ni', meaning: 'اثنان', category: 'numbers', level: 1 },
  { word: 'さん', reading: 'san', meaning: 'ثلاثة', category: 'numbers', level: 1 },
  { word: 'よん/し', reading: 'yon/shi', meaning: 'أربعة', category: 'numbers', level: 1 },
  { word: 'ご', reading: 'go', meaning: 'خمسة', category: 'numbers', level: 1 },
  { word: 'ろく', reading: 'roku', meaning: 'ستة', category: 'numbers', level: 1 },
  { word: 'なな/しち', reading: 'nana/shichi', meaning: 'سبعة', category: 'numbers', level: 1 },
  { word: 'はち', reading: 'hachi', meaning: 'ثمانية', category: 'numbers', level: 1 },
  { word: 'きゅう/く', reading: 'kyuu/ku', meaning: 'تسعة', category: 'numbers', level: 1 },
  { word: 'じゅう', reading: 'juu', meaning: 'عشرة', category: 'numbers', level: 1 },
  { word: 'ひゃく', reading: 'hyaku', meaning: 'مائة', category: 'numbers', level: 1 },
  { word: 'せん', reading: 'sen', meaning: 'ألف', category: 'numbers', level: 1 },
  { word: 'まん', reading: 'man', meaning: 'عشرة آلاف', category: 'numbers', level: 1 },
  { word: 'ぜろ/れい', reading: 'zero/rei', meaning: 'صفر', category: 'numbers', level: 1 },
  { word: 'にじゅう', reading: 'nijuu', meaning: 'عشرون', category: 'numbers', level: 1 },
  { word: 'さんじゅう', reading: 'sanjuu', meaning: 'ثلاثون', category: 'numbers', level: 1 },
  { word: 'ひゃくまん', reading: 'hyakuman', meaning: 'مليون', category: 'numbers', level: 1 },
  { word: 'ひとつ', reading: 'hitotsu', meaning: 'شيء واحد (عد)', category: 'numbers', level: 1 },
  { word: 'ふたつ', reading: 'futatsu', meaning: 'شيئان (عد)', category: 'numbers', level: 1 },
  { word: 'みっつ', reading: 'mittsu', meaning: 'ثلاثة أشياء (عد)', category: 'numbers', level: 1 },

  // === Colors ألوان (12) ===
  { word: 'あか', reading: 'aka', meaning: 'أحمر', category: 'colors', level: 1 },
  { word: 'あお', reading: 'ao', meaning: 'أزرق', category: 'colors', level: 1 },
  { word: 'きいろ', reading: 'kiiro', meaning: 'أصفر', category: 'colors', level: 1 },
  { word: 'しろ', reading: 'shiro', meaning: 'أبيض', category: 'colors', level: 1 },
  { word: 'くろ', reading: 'kuro', meaning: 'أسود', category: 'colors', level: 1 },
  { word: 'みどり', reading: 'midori', meaning: 'أخضر', category: 'colors', level: 1 },
  { word: 'オレンジ', reading: 'orenji', meaning: 'برتقالي', category: 'colors', level: 1 },
  { word: 'むらさき', reading: 'murasaki', meaning: 'بنفسجي', category: 'colors', level: 1 },
  { word: 'ピンク', reading: 'pinku', meaning: 'وردي', category: 'colors', level: 1 },
  { word: 'ちゃいろ', reading: 'chairo', meaning: 'بني', category: 'colors', level: 1 },
  { word: 'はいいろ', reading: 'haiiro', meaning: 'رمادي', category: 'colors', level: 1 },
  { word: 'きんいろ', reading: 'kin\'iro', meaning: 'ذهبي', category: 'colors', level: 1 },

  // === Family عائلة (15) ===
  { word: 'おかあさん', reading: 'okaasan', meaning: 'أم (مهذب)', category: 'family', level: 1 },
  { word: 'おとうさん', reading: 'otousan', meaning: 'أب (مهذب)', category: 'family', level: 1 },
  { word: 'おねえさん', reading: 'oneesan', meaning: 'أخت كبيرة (مهذب)', category: 'family', level: 1 },
  { word: 'おにいさん', reading: 'oniisan', meaning: 'أخ كبير (مهذب)', category: 'family', level: 1 },
  { word: 'いもうと', reading: 'imouto', meaning: 'أخت صغيرة', category: 'family', level: 1 },
  { word: 'おとうと', reading: 'otouto', meaning: 'أخ صغير', category: 'family', level: 1 },
  { word: 'おじいさん', reading: 'ojiisan', meaning: 'جد/رجل مسن', category: 'family', level: 1 },
  { word: 'おばあさん', reading: 'obaasan', meaning: 'جدة/امرأة مسنة', category: 'family', level: 1 },
  { word: 'おじ', reading: 'oji', meaning: 'عم/خال', category: 'family', level: 2 },
  { word: 'おば', reading: 'oba', meaning: 'عمة/خالة', category: 'family', level: 2 },
  { word: 'いとこ', reading: 'itoko', meaning: 'ابن العم/الخال', category: 'family', level: 2 },
  { word: 'かぞく', reading: 'kazoku', meaning: 'عائلة', category: 'family', level: 1 },
  { word: 'おっと/しゅじん', reading: 'otto/shujin', meaning: 'زوج', category: 'family', level: 2 },
  { word: 'つま/かない', reading: 'tsuma/kanai', meaning: 'زوجة', category: 'family', level: 2 },
  { word: 'こども', reading: 'kodomo', meaning: 'طفل/أطفال', category: 'family', level: 1 },

  // === Food & Drink طعام وشراب (25) ===
  { word: 'みず', reading: 'mizu', meaning: 'ماء', category: 'food', level: 1 },
  { word: 'おちゃ', reading: 'ocha', meaning: 'شاي', category: 'food', level: 1 },
  { word: 'コーヒー', reading: 'koohii', meaning: 'قهوة', category: 'food', level: 1 },
  { word: 'ごはん', reading: 'gohan', meaning: 'أرز/وجبة', category: 'food', level: 1 },
  { word: 'パン', reading: 'pan', meaning: 'خبز', category: 'food', level: 1 },
  { word: 'たまご', reading: 'tamago', meaning: 'بيض', category: 'food', level: 1 },
  { word: 'にく', reading: 'niku', meaning: 'لحم', category: 'food', level: 1 },
  { word: 'さかな', reading: 'sakana', meaning: 'سمك', category: 'food', level: 1 },
  { word: 'やさい', reading: 'yasai', meaning: 'خضروات', category: 'food', level: 1 },
  { word: 'くだもの', reading: 'kudamono', meaning: 'فاكهة', category: 'food', level: 1 },
  { word: 'りんご', reading: 'ringo', meaning: 'تفاح', category: 'food', level: 1 },
  { word: 'みかん', reading: 'mikan', meaning: 'برتقال ياباني', category: 'food', level: 1 },
  { word: 'ばなな', reading: 'banana', meaning: 'موز', category: 'food', level: 1 },
  { word: 'すし', reading: 'sushi', meaning: 'سوشي', category: 'food', level: 1 },
  { word: 'ラーメン', reading: 'raamen', meaning: 'رامن', category: 'food', level: 1 },
  { word: 'カレー', reading: 'karee', meaning: 'كاري', category: 'food', level: 1 },
  { word: 'サラダ', reading: 'sarada', meaning: 'سلطة', category: 'food', level: 1 },
  { word: 'ビール', reading: 'biiru', meaning: 'بيرة', category: 'food', level: 2 },
  { word: 'ジュース', reading: 'juusu', meaning: 'عصير', category: 'food', level: 1 },
  { word: 'ちず', reading: 'chizu', meaning: 'جبنة', category: 'food', level: 2 },
  { word: 'さとう', reading: 'satou', meaning: 'سكر', category: 'food', level: 2 },
  { word: 'しお', reading: 'shio', meaning: 'ملح', category: 'food', level: 2 },
  { word: 'あぶら', reading: 'abura', meaning: 'زيت', category: 'food', level: 2 },
  { word: 'アイスクリーム', reading: 'aisu kuriimu', meaning: 'آيس كريم', category: 'food', level: 1 },
  { word: 'おかし', reading: 'okashi', meaning: 'حلوى', category: 'food', level: 1 },

  // === Animals حيوانات (15) ===
  { word: 'いぬ', reading: 'inu', meaning: 'كلب', category: 'animals', level: 1 },
  { word: 'ねこ', reading: 'neko', meaning: 'قطة', category: 'animals', level: 1 },
  { word: 'うま', reading: 'uma', meaning: 'حصان', category: 'animals', level: 1 },
  { word: 'とり', reading: 'tori', meaning: 'طائر', category: 'animals', level: 1 },
  { word: 'さかな', reading: 'sakana', meaning: 'سمكة', category: 'animals', level: 1 },
  { word: 'うし', reading: 'ushi', meaning: 'بقرة', category: 'animals', level: 1 },
  { word: 'ぶた', reading: 'buta', meaning: 'خنزير', category: 'animals', level: 1 },
  { word: 'ひつじ', reading: 'hitsuji', meaning: 'خروف', category: 'animals', level: 1 },
  { word: 'うさぎ', reading: 'usagi', meaning: 'أرنب', category: 'animals', level: 1 },
  { word: 'へび', reading: 'hebi', meaning: 'ثعبان', category: 'animals', level: 2 },
  { word: 'かめ', reading: 'kame', meaning: 'سلحفاة', category: 'animals', level: 2 },
  { word: 'くま', reading: 'kuma', meaning: 'دب', category: 'animals', level: 2 },
  { word: 'さる', reading: 'saru', meaning: 'قرد', category: 'animals', level: 2 },
  { word: 'ぞう', reading: 'zou', meaning: 'فيل', category: 'animals', level: 2 },
  { word: 'ライオン', reading: 'raion', meaning: 'أسد', category: 'animals', level: 2 },

  // === Body Parts أجزاء الجسم (15) ===
  { word: 'あたま', reading: 'atama', meaning: 'رأس', category: 'body', level: 1 },
  { word: 'かお', reading: 'kao', meaning: 'وجه', category: 'body', level: 1 },
  { word: 'め', reading: 'me', meaning: 'عين', category: 'body', level: 1 },
  { word: 'みみ', reading: 'mimi', meaning: 'أذن', category: 'body', level: 1 },
  { word: 'くち', reading: 'kuchi', meaning: 'فم', category: 'body', level: 1 },
  { word: 'はな', reading: 'hana', meaning: 'أنف', category: 'body', level: 1 },
  { word: 'て', reading: 'te', meaning: 'يد', category: 'body', level: 1 },
  { word: 'ゆび', reading: 'yubi', meaning: 'إصبع', category: 'body', level: 1 },
  { word: 'あし', reading: 'ashi', meaning: 'قدم/ساق', category: 'body', level: 1 },
  { word: 'からだ', reading: 'karada', meaning: 'جسم', category: 'body', level: 1 },
  { word: 'は', reading: 'ha', meaning: 'سن/أسنان', category: 'body', level: 1 },
  { word: 'かみ', reading: 'kami', meaning: 'شعر', category: 'body', level: 1 },
  { word: 'くび', reading: 'kubi', meaning: 'رقبة', category: 'body', level: 2 },
  { word: 'せなか', reading: 'senaka', meaning: 'ظهر', category: 'body', level: 2 },
  { word: 'おなか', reading: 'onaka', meaning: 'بطن', category: 'body', level: 1 },

  // === Weather & Nature طقس وطبيعة (12) ===
  { word: 'てんき', reading: 'tenki', meaning: 'طقس', category: 'weather', level: 1 },
  { word: 'あめ', reading: 'ame', meaning: 'مطر', category: 'weather', level: 1 },
  { word: 'ゆき', reading: 'yuki', meaning: 'ثلج', category: 'weather', level: 1 },
  { word: 'くもり', reading: 'kumori', meaning: 'غائم', category: 'weather', level: 1 },
  { word: 'はれ', reading: 'hare', meaning: 'صحو/مشمس', category: 'weather', level: 1 },
  { word: 'かぜ', reading: 'kaze', meaning: 'رياح', category: 'weather', level: 1 },
  { word: 'たいふう', reading: 'taifuu', meaning: 'إعصار', category: 'weather', level: 2 },
  { word: 'にじ', reading: 'niji', meaning: 'قوس قزح', category: 'weather', level: 2 },
  { word: 'うみ', reading: 'umi', meaning: 'بحر', category: 'weather', level: 1 },
  { word: 'かわ', reading: 'kawa', meaning: 'نهر', category: 'weather', level: 1 },
  { word: 'やま', reading: 'yama', meaning: 'جبل', category: 'weather', level: 1 },
  { word: 'もり', reading: 'mori', meaning: 'غابة', category: 'weather', level: 2 },

  // === Time & Calendar وقت وتقويم (20) ===
  { word: 'きょう', reading: 'kyou', meaning: 'اليوم', category: 'time', level: 1 },
  { word: 'きのう', reading: 'kinou', meaning: 'أمس', category: 'time', level: 1 },
  { word: 'あした', reading: 'ashita', meaning: 'غداً', category: 'time', level: 1 },
  { word: 'あさ', reading: 'asa', meaning: 'صباح', category: 'time', level: 1 },
  { word: 'ひる', reading: 'hiru', meaning: 'ظهر', category: 'time', level: 1 },
  { word: 'ばん/よる', reading: 'ban/yoru', meaning: 'مساء/ليل', category: 'time', level: 1 },
  { word: 'いま', reading: 'ima', meaning: 'الآن', category: 'time', level: 1 },
  { word: 'じかん', reading: 'jikan', meaning: 'وقت/ساعة', category: 'time', level: 1 },
  { word: 'せんしゅう', reading: 'senshuu', meaning: 'الأسبوع الماضي', category: 'time', level: 2 },
  { word: 'こんしゅう', reading: 'konshuu', meaning: 'هذا الأسبوع', category: 'time', level: 2 },
  { word: 'らいしゅう', reading: 'raishuu', meaning: 'الأسبوع القادم', category: 'time', level: 2 },
  { word: 'せんげつ', reading: 'sengetsu', meaning: 'الشهر الماضي', category: 'time', level: 2 },
  { word: 'こんげつ', reading: 'kongetsu', meaning: 'هذا الشهر', category: 'time', level: 2 },
  { word: 'らいげつ', reading: 'raigetsu', meaning: 'الشهر القادم', category: 'time', level: 2 },
  { word: 'ことし', reading: 'kotoshi', meaning: 'هذا العام', category: 'time', level: 2 },
  { word: '去年', reading: 'kyonen', meaning: 'العام الماضي', category: 'time', level: 2 },
  { word: 'らいねん', reading: 'rainen', meaning: 'العام القادم', category: 'time', level: 2 },
  { word: 'にちようび', reading: 'nichiyoubi', meaning: 'الأحد', category: 'time', level: 1 },
  { word: 'げつようび', reading: 'getsuyoubi', meaning: 'الإثنين', category: 'time', level: 1 },
  { word: 'きんようび', reading: 'kinyoubi', meaning: 'الجمعة', category: 'time', level: 1 },

  // === Places أماكن (15) ===
  { word: 'いえ', reading: 'ie', meaning: 'بيت', category: 'places', level: 1 },
  { word: 'がっこう', reading: 'gakkou', meaning: 'مدرسة', category: 'places', level: 1 },
  { word: 'びょういん', reading: 'byouin', meaning: 'مستشفى', category: 'places', level: 1 },
  { word: 'ぎんこう', reading: 'ginkou', meaning: 'بنك', category: 'places', level: 1 },
  { word: 'でばや', reading: 'depaato', meaning: 'متجر كبير', category: 'places', level: 1 },
  { word: 'スーパー', reading: 'suupaa', meaning: 'سوبرماركت', category: 'places', level: 1 },
  { word: 'としょかん', reading: 'toshokan', meaning: 'مكتبة', category: 'places', level: 1 },
  { word: 'えき', reading: 'eki', meaning: 'محطة', category: 'places', level: 1 },
  { word: 'くうこう', reading: 'kuukou', meaning: 'مطار', category: 'places', level: 2 },
  { word: 'みせ', reading: 'mise', meaning: 'متجر', category: 'places', level: 1 },
  { word: 'レストラン', reading: 'resutoran', meaning: 'مطعم', category: 'places', level: 1 },
  { word: 'ホテル', reading: 'hoteru', meaning: 'فندق', category: 'places', level: 1 },
  { word: 'こうえん', reading: 'kouen', meaning: 'حديقة', category: 'places', level: 1 },
  { word: 'トイレ', reading: 'toire', meaning: 'مرحاض', category: 'places', level: 1 },
  { word: 'ぎんこう', reading: 'ginkou', meaning: 'مصرف', category: 'places', level: 1 },

  // === People & Occupations أشخاص ومهن (12) ===
  { word: 'せんせい', reading: 'sensei', meaning: 'معلم/دكتور', category: 'people', level: 1 },
  { word: 'がくせい', reading: 'gakusei', meaning: 'طالب', category: 'people', level: 1 },
  { word: 'ともだち', reading: 'tomodachi', meaning: 'صديق', category: 'people', level: 1 },
  { word: 'ひと', reading: 'hito', meaning: 'شخص/ناس', category: 'people', level: 1 },
  { word: 'おとこ', reading: 'otoko', meaning: 'رجل', category: 'people', level: 1 },
  { word: 'おんな', reading: 'onna', meaning: 'امرأة', category: 'people', level: 1 },
  { word: 'いしゃ', reading: 'isha', meaning: 'طبيب', category: 'people', level: 1 },
  { word: 'かんごし', reading: 'kangoshi', meaning: 'ممرضة', category: 'people', level: 2 },
  { word: 'けいさつ', reading: 'keisatsu', meaning: 'شرطي', category: 'people', level: 2 },
  { word: 'うんてんしゅ', reading: 'untenshu', meaning: 'سائق', category: 'people', level: 2 },
  { word: 'りょうしん', reading: 'ryoushin', meaning: 'والدان', category: 'people', level: 2 },
  { word: 'こども', reading: 'kodomo', meaning: 'طفل', category: 'people', level: 1 },

  // === Objects أشياء (15) ===
  { word: 'でんわ', reading: 'denwa', meaning: 'هاتف', category: 'objects', level: 1 },
  { word: 'ほん', reading: 'hon', meaning: 'كتاب', category: 'objects', level: 1 },
  { word: 'えんぴつ', reading: 'enpitsu', meaning: 'قلم رصاص', category: 'objects', level: 1 },
  { word: 'つくえ', reading: 'tsukue', meaning: 'مكتب', category: 'objects', level: 1 },
  { word: 'いす', reading: 'isu', meaning: 'كرسي', category: 'objects', level: 1 },
  { word: 'とけい', reading: 'tokei', meaning: 'ساعة', category: 'objects', level: 1 },
  { word: 'かばん', reading: 'kaban', meaning: 'حقيبة', category: 'objects', level: 1 },
  { word: 'かぎ', reading: 'kagi', meaning: 'مفتاح', category: 'objects', level: 1 },
  { word: 'くるま', reading: 'kuruma', meaning: 'سيارة', category: 'objects', level: 1 },
  { word: 'でんしゃ', reading: 'densha', meaning: 'قطار', category: 'objects', level: 1 },
  { word: 'テレビ', reading: 'terebi', meaning: 'تلفزيون', category: 'objects', level: 1 },
  { word: 'パソコン', reading: 'pasokon', meaning: 'حاسوب', category: 'objects', level: 1 },
  { word: 'スマホ', reading: 'sumaho', meaning: 'هاتف ذكي', category: 'objects', level: 1 },
  { word: 'くつ', reading: 'kutsu', meaning: 'حذاء', category: 'objects', level: 1 },
  { word: 'ふく', reading: 'fuku', meaning: 'ملابس', category: 'objects', level: 1 },

  // === Verbs أفعال (30) ===
  { word: 'たべる', reading: 'taberu', meaning: 'يأكل', category: 'verbs', level: 1 },
  { word: 'のむ', reading: 'nomu', meaning: 'يشرب', category: 'verbs', level: 1 },
  { word: 'みる', reading: 'miru', meaning: 'يرى/يشاهد', category: 'verbs', level: 1 },
  { word: 'きく', reading: 'kiku', meaning: 'يسمع/يسأل', category: 'verbs', level: 1 },
  { word: 'よむ', reading: 'yomu', meaning: 'يقرأ', category: 'verbs', level: 1 },
  { word: 'かく', reading: 'kaku', meaning: 'يكتب', category: 'verbs', level: 1 },
  { word: 'はなす', reading: 'hanasu', meaning: 'يتكلم', category: 'verbs', level: 1 },
  { word: 'いく', reading: 'iku', meaning: 'يذهب', category: 'verbs', level: 1 },
  { word: 'くる', reading: 'kuru', meaning: 'يأتي', category: 'verbs', level: 1 },
  { word: 'する', reading: 'suru', meaning: 'يفعل', category: 'verbs', level: 1 },
  { word: 'かえる', reading: 'kaeru', meaning: 'يعود', category: 'verbs', level: 1 },
  { word: 'かう', reading: 'kau', meaning: 'يشتري', category: 'verbs', level: 1 },
  { word: 'あるく', reading: 'aruku', meaning: 'يمشي', category: 'verbs', level: 1 },
  { word: 'はしる', reading: 'hashiru', meaning: 'يركض', category: 'verbs', level: 1 },
  { word: 'おきる', reading: 'okiru', meaning: 'يستيقظ', category: 'verbs', level: 1 },
  { word: 'ねる', reading: 'neru', meaning: 'ينام', category: 'verbs', level: 1 },
  { word: 'べんきょうする', reading: 'benkyou suru', meaning: 'يدرس', category: 'verbs', level: 1 },
  { word: 'あう', reading: 'au', meaning: 'يلتقي', category: 'verbs', level: 1 },
  { word: 'だす', reading: 'dasu', meaning: 'يخرج/يرسل', category: 'verbs', level: 2 },
  { word: 'いれる', reading: 'ireru', meaning: 'يضع/يدخل', category: 'verbs', level: 2 },
  { word: 'だす', reading: 'dasu', meaning: 'يقدم', category: 'verbs', level: 2 },
  { word: 'まつ', reading: 'matsu', meaning: 'ينتظر', category: 'verbs', level: 2 },
  { word: 'つかう', reading: 'tsukau', meaning: 'يستخدم', category: 'verbs', level: 1 },
  { word: 'おしえる', reading: 'oshieru', meaning: 'يعلم', category: 'verbs', level: 2 },
  { word: 'ならう', reading: 'narau', meaning: 'يتعلم', category: 'verbs', level: 2 },
  { word: 'あける', reading: 'akeru', meaning: 'يفتح', category: 'verbs', level: 2 },
  { word: 'しめる', reading: 'shimeru', meaning: 'يغلق', category: 'verbs', level: 2 },
  { word: 'もらう', reading: 'morau', meaning: 'يتلقى', category: 'verbs', level: 2 },
  { word: 'あげる', reading: 'ageru', meaning: 'يعطي', category: 'verbs', level: 2 },
  { word: 'わかる', reading: 'wakaru', meaning: 'يفهم', category: 'verbs', level: 1 },

  // === Adjectives صفات (20) ===
  { word: 'おおきい', reading: 'ookii', meaning: 'كبير', category: 'adjectives', level: 1 },
  { word: 'ちいさい', reading: 'chiisai', meaning: 'صغير', category: 'adjectives', level: 1 },
  { word: 'あたらしい', reading: 'atarashii', meaning: 'جديد', category: 'adjectives', level: 1 },
  { word: 'ふるい', reading: 'furui', meaning: 'قديم', category: 'adjectives', level: 1 },
  { word: 'たかい', reading: 'takai', meaning: 'مرتفع/غالي', category: 'adjectives', level: 1 },
  { word: 'やすい', reading: 'yasui', meaning: 'رخيص', category: 'adjectives', level: 1 },
  { word: 'いい/よい', reading: 'ii/yoi', meaning: 'جيد', category: 'adjectives', level: 1 },
  { word: 'わるい', reading: 'warui', meaning: 'سيئ', category: 'adjectives', level: 1 },
  { word: 'あつい', reading: 'atsui', meaning: 'ساخن', category: 'adjectives', level: 1 },
  { word: 'さむい', reading: 'samui', meaning: 'بارد (طقس)', category: 'adjectives', level: 1 },
  { word: 'つめたい', reading: 'tsumetai', meaning: 'بارد (لمس)', category: 'adjectives', level: 1 },
  { word: 'あたたかい', reading: 'atatakai', meaning: 'دافئ', category: 'adjectives', level: 1 },
  { word: 'やさしい', reading: 'yasashii', meaning: 'لطيف/سهل', category: 'adjectives', level: 1 },
  { word: 'むずかしい', reading: 'muzukashii', meaning: 'صعب', category: 'adjectives', level: 1 },
  { word: 'おもしろい', reading: 'omoshiroi', meaning: 'ممتع/مثير', category: 'adjectives', level: 1 },
  { word: 'つまらない', reading: 'tsumaranai', meaning: 'ممل', category: 'adjectives', level: 1 },
  { word: 'うれしい', reading: 'ureshii', meaning: 'سعيد', category: 'adjectives', level: 1 },
  { word: 'かなしい', reading: 'kanashii', meaning: 'حزين', category: 'adjectives', level: 1 },
  { word: 'すごい', reading: 'sugoi', meaning: 'رائع/مذهل', category: 'adjectives', level: 1 },
  { word: 'きれい', reading: 'kirei', meaning: 'جميل/نظيف', category: 'adjectives', level: 1 },

  // === Common Expressions تعبيرات شائعة (10) ===
  { word: 'いただきます', reading: 'itadakimasu', meaning: 'بدء الأكل (بسم الله)', category: 'expressions', level: 1 },
  { word: 'ごちそうさま', reading: 'gochisousama', meaning: 'بعد الأكل (الحمد لله)', category: 'expressions', level: 1 },
  { word: 'いってきます', reading: 'ittekimasu', meaning: 'أذهب وسأعود', category: 'expressions', level: 1 },
  { word: 'いってらっしゃい', reading: 'itterasshai', meaning: 'اذهب وارجع بسلام', category: 'expressions', level: 1 },
  { word: 'ただいま', reading: 'tadaima', meaning: 'عدت للمنزل', category: 'expressions', level: 1 },
  { word: 'おかえりなさい', reading: 'okaerinasai', meaning: 'أهلاً بعودتك', category: 'expressions', level: 1 },
  { word: 'がんばって', reading: 'ganbatte', meaning: 'بالتوفيق/حاف', category: 'expressions', level: 1 },
  { word: 'だいじょうぶ', reading: 'daijoubu', meaning: 'لا بأس/حسناً', category: 'expressions', level: 1 },
  { word: 'しょうがない', reading: 'shou ga nai', meaning: 'لا يمكن فعل شيء', category: 'expressions', level: 2 },
  { word: 'なるほど', reading: 'naruhodo', meaning: 'أفهم/بالفعل', category: 'expressions', level: 2 },
];

// ═══════════════════════════════════════════════════
// GRAMMAR PATTERNS - 20 essential patterns
// ═══════════════════════════════════════════════════

export const GRAMMAR = [
  {
    id: 'wa_desu',
    pattern: '〜は〜です',
    title: 'الجملة الاسمية الأساسية',
    meaning: 'A هو/هي B',
    explanation: 'النمط الأساسي للجملة في اليابانية. は يُنطق "وا" ويُحدد الموضوع، و です تعني "يكون" بشكل مهذب.',
    examples: [
      { jp: '私は学生です', reading: 'watashi wa gakusei desu', meaning: 'أنا طالب' },
      { jp: 'これは本です', reading: 'kore wa hon desu', meaning: 'هذا كتاب' },
      { jp: 'あそこは駅です', reading: 'asoko wa eki desu', meaning: 'هناك محطة' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'wa_ja_arimasen',
    pattern: '〜は〜ではありません',
    title: 'النفي في الجمل الاسمية',
    meaning: 'A ليس B',
    explanation: 'للنفي نستبدل です بـ ではありません (شكل رسمي) أو じゃありません (شكل أقل رسمية).',
    examples: [
      { jp: '私は先生ではありません', reading: 'watashi wa sensei dewa arimasen', meaning: 'أنا لست معلماً' },
      { jp: 'これは水じゃありません', reading: 'kore wa mizu ja arimasen', meaning: 'هذا ليس ماءً' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'wa_desu_ka',
    pattern: '〜は〜ですか',
    title: 'السؤال بنعم/لا',
    meaning: 'هل A هو B؟',
    explanation: 'للسؤال نضيف か في نهاية الجملة. لا حاجة لكلمة "هل" في اليابانية.',
    examples: [
      { jp: '学生ですか', reading: 'gakusei desu ka', meaning: 'هل أنت طالب؟' },
      { jp: 'これですか', reading: 'kore desu ka', meaning: 'هل هذا؟' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'no_noun',
    pattern: '〜の〜',
    title: 'حرف الملكية の',
    meaning: 'ـِ (ملكية/وصف)',
    explanation: 'يُربط بين اسمين. يُشير إلى الملكية أو الوصف، مثل "سيارة أبي" أو "مطعم ياباني".',
    examples: [
      { jp: '私の本', reading: 'watashi no hon', meaning: 'كتابي' },
      { jp: '日本の車', reading: 'nihon no kuruma', meaning: 'سيارة يابانية' },
      { jp: '友達の家', reading: 'tomodachi no ie', meaning: 'بيت صديقي' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'wo_verb',
    pattern: '〜を〜ます',
    title: 'حرف المفعول به を',
    meaning: 'يفعل شيءً',
    explanation: 'を يُنطق "أو" ويُحدد المفعول به - الشيء الذي يتم فعله عليه.',
    examples: [
      { jp: 'ごはんを食べます', reading: 'gohan wo tabemasu', meaning: 'آكل الأرز' },
      { jp: '本を読みます', reading: 'hon wo yomimasu', meaning: 'أقرأ كتاباً' },
      { jp: '水を飲みます', reading: 'mizu wo nomimasu', meaning: 'أشرب ماءً' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'ni_iku',
    pattern: '〜に行きます',
    title: 'الذهاب إلى مكان',
    meaning: 'أذهب إلى...',
    explanation: 'ni يُحدد وجهة الذهاب. نستخدمها مع いきます (أذهب) أو きます (آتي).',
    examples: [
      { jp: '学校に行きます', reading: 'gakkou ni ikimasu', meaning: 'أذهب إلى المدرسة' },
      { jp: '日本に行きます', reading: 'nihon ni ikimasu', meaning: 'أذهب إلى اليابان' },
      { jp: '家に帰ります', reading: 'ie ni kaerimasu', meaning: 'أعود إلى البيت' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'de_verb',
    pattern: '〜で〜ます',
    title: 'حرف المكان والوسيلة で',
    meaning: 'يفعل في/باستخدام',
    explanation: 'تُحدد مكان الحدث أو الأداة المستخدمة.',
    examples: [
      { jp: 'レストランで食べます', reading: 'resutoran de tabemasu', meaning: 'آكل في المطعم' },
      { jp: 'バスで行きます', reading: 'basu de ikimasu', meaning: 'أذهب بالحافلة' },
      { jp: '日本語で話します', reading: 'nihongo de hanashimasu', meaning: 'أتكلم باليابانية' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'masu_form',
    pattern: '〜ます / 〜ません',
    title: 'تصريف الفعل المهذب',
    meaning: 'يفعل / لا يفعل',
    explanation: 'تصريف مهذب لل☩verbs في المضارع. ます للإثبات و ません للنفي.',
    examples: [
      { jp: '食べます / 食べません', reading: 'tabemasu / tabemasen', meaning: 'آكل / لا آكل' },
      { jp: '行きます / 行きません', reading: 'ikimasu / ikimasen', meaning: 'أذهب / لا أذهب' },
      { jp: '見ます / 見ません', reading: 'mimasu / mimasen', meaning: 'أشاهد / لا أشاهد' },
    ],
    level: 1,
    category: 'verbs'
  },
  {
    id: 'mashita',
    pattern: '〜ました / 〜ませんでした',
    title: 'الماضي المهذب',
    meaning: 'فعل / لم يفعل (ماضي)',
    explanation: 'لتحويل الفعل للماضي نستبدل ます بـ ました و ません بـ ませんでした.',
    examples: [
      { jp: '食べました', reading: 'tabemashita', meaning: 'أكلت' },
      { jp: '行きませんでした', reading: 'ikimasen deshita', meaning: 'لم أذهب' },
      { jp: '買いました', reading: 'kaimashita', meaning: 'اشتريت' },
    ],
    level: 1,
    category: 'verbs'
  },
  {
    id: 'te_form',
    pattern: '〜て / 〜てください',
    title: 'صيغة て (الطلب)',
    meaning: 'افعل من فضلك / افعل ثم...',
    explanation: 'صيغة て لها استخدامات كثيرة: الطلب (مع ください)، ربط الأفعال، والوصف.',
    examples: [
      { jp: '食べてください', reading: 'tabete kudasai', meaning: 'كل من فضلك' },
      { jp: '見てください', reading: 'mite kudasai', meaning: 'انظر من فضلك' },
      { jp: '食べて寝ます', reading: 'tabete nemasu', meaning: 'آكل ثم أنام' },
    ],
    level: 2,
    category: 'verbs'
  },
  {
    id: 'suki_desu',
    pattern: '〜が好きです',
    title: 'التعبير عن الإعجاب',
    meaning: 'أحب / يعجبني',
    explanation: 'نستخدم が مع صفات المشاعر مثل 好き (أحب)، 嫌い (أكره)، 上手 (بارع)، 下ضع (ضعيف).',
    examples: [
      { jp: '日本語が好きです', reading: 'nihongo ga suki desu', meaning: 'أحب اليابانية' },
      { jp: '寿司が好きです', reading: 'sushi ga suki desu', meaning: 'أحب السوشي' },
      { jp: '猫が嫌いです', reading: 'neko ga kirai desu', meaning: 'أكره القطط' },
    ],
    level: 1,
    category: 'adjectives'
  },
  {
    id: 'i_adjective',
    pattern: '〜いです',
    title: 'الصفات من نوع い',
    meaning: 'صفة (نوع い)',
    explanation: 'الصفات المنتهية بـ い قبل です. للنفي نحذف い ونضيف くない. للماضي نحذف い ون添加 かったです.',
    examples: [
      { jp: '大きいです / 大きくないです', reading: 'ookii desu / ookiku nai desu', meaning: 'كبير / ليس كبيراً' },
      { jp: '高かったです', reading: 'takakatta desu', meaning: 'كان مرتفعاً' },
      { jp: '安いです', reading: 'yasui desu', meaning: 'رخيص' },
    ],
    level: 1,
    category: 'adjectives'
  },
  {
    id: 'na_adjective',
    pattern: '〜な / 〜です',
    title: 'الصفات من نوع な',
    meaning: 'صفة (نوع な)',
    explanation: 'الصفات التي تنتهي بـ な قبل الأسماء. للنفي: じゃありません. للماضي: でした.',
    examples: [
      { jp: 'きれいな部屋', reading: 'kirei na heya', meaning: 'غرفة جميلة' },
      { jp: '静かです / 静かじゃありません', reading: 'shizuka desu / shizuka ja arimasen', meaning: 'هادئ / ليس هادئاً' },
      { jp: '元気でした', reading: 'genki deshita', meaning: 'كان بخير' },
    ],
    level: 1,
    category: 'adjectives'
  },
  {
    id: 'kore_sore_are',
    pattern: 'これ / それ / あれ',
    title: 'أسماء الإشارة',
    meaning: 'هذا / ذاك / ذلك البعيد',
    explanation: 'これ (قريب مني)، ذلك (قريب منك)، あれ (بعيد عن كلينا). مع の نضيف اسم: この/その/あの.',
    examples: [
      { jp: 'これは何ですか', reading: 'kore wa nan desu ka', meaning: 'ما هذا؟' },
      { jp: 'その本', reading: 'sono hon', meaning: 'ذلك الكتاب' },
      { jp: 'あそこ', reading: 'asoko', meaning: 'هناك (مكان بعيد)' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'imasu_arimasu',
    pattern: '〜がいます / あります',
    title: 'الوجود والملكية',
    meaning: 'يوجد / يملك',
    explanation: 'います للكائنات الحية (ناس، حيوانات). あります لغير الأحياء (أشياء، أماكن).',
    examples: [
      { jp: '猫がいます', reading: 'neko ga imasu', meaning: 'هناك قطة' },
      { jp: '本があります', reading: 'hon ga arimasu', meaning: 'هناك كتاب / عندي كتاب' },
      { jp: '駅があります', reading: 'eki ga arimasu', meaning: 'هناك محطة' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'ga_ii_desu',
    pattern: '〜がいいです',
    title: 'التفضيل والاختيار',
    meaning: 'أريد / أفضل',
    explanation: 'للتعبير عن رغبة مع الأسماء نستخدم がいいです. للأفعال نستخدم たいです.',
    examples: [
      { jp: 'これがいいです', reading: 'kore ga ii desu', meaning: 'أفضل هذا' },
      { jp: '食べたいです', reading: 'tabetai desu', meaning: 'أريد أن آكل' },
      { jp: '行きたいです', reading: 'ikitai desu', meaning: 'أريد أن أذهب' },
    ],
    level: 1,
    category: 'basics'
  },
  {
    id: 'together_with',
    pattern: '〜と〜',
    title: 'حرف العطف と',
    meaning: 'مع / و',
    explanation: 'تربط بين اسمين بمعنى "و" (للقائمة الكاملة) أو "مع".',
    examples: [
      { jp: '友達と行きます', reading: 'tomodachi to ikimasu', meaning: 'أذهب مع صديقي' },
      { jp: 'りんごとみかん', reading: 'ringo to mikan', meaning: 'تفاح وبرتقال' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'kara_made',
    pattern: '〜から〜まで',
    title: 'من... إلى...',
    meaning: 'من... إلى... (زمان/مكان)',
    explanation: 'تُحدد نقطة البداية (から) ونهاية (まで) في الزمان أو المكان.',
    examples: [
      { jp: '九時から五時まで', reading: 'kuuji kara goji made', meaning: 'من التاسعة إلى الخامسة' },
      { jp: '東京から大阪まで', reading: 'toukyou kara oosaka made', meaning: 'من طوكيو إلى أوساكا' },
    ],
    level: 2,
    category: 'particles'
  },
  {
    id: 'mo_particle',
    pattern: '〜も',
    title: 'حرف الإضافة も',
    meaning: 'أيضاً',
    explanation: 'تستبدل は أو が وتعني "أيضاً". تُستخدم كثيراً في المحادثات اليومية.',
    examples: [
      { jp: '私も学生です', reading: 'watashi mo gakusei desu', meaning: 'أنا أيضاً طالب' },
      { jp: 'これも好きです', reading: 'kore mo suki desu', meaning: 'أحب هذا أيضاً' },
    ],
    level: 1,
    category: 'particles'
  },
  {
    id: 'nara_ii',
    pattern: '〜ましょう',
    title: 'الدعوة والاقتراح',
    meaning: 'لنبذ... / دعنا...',
    explanation: 'صيغة مهذبة للدعوة أو الاقتراح. أكثر رسمية من 〜よう.',
    examples: [
      { jp: '行きましょう', reading: 'ikimashou', meaning: 'لنبذ!' },
      { jp: '食べましょう', reading: 'tabemashou', meaning: 'لناكل!' },
      { jp: '一緒に勉強しましょう', reading: 'issho ni benkyou shimashou', meaning: 'لندرس معاً!' },
    ],
    level: 1,
    category: 'verbs'
  },
];

// ═══════════════════════════════════════════════════
// SENTENCES - 50+ example sentences
// ═══════════════════════════════════════════════════

export const SENTENCES = [
  // Greetings تحايا
  { sentence: 'こんにちは', reading: 'konnichiwa', meaning: 'مرحباً', category: 'greetings', level: 1 },
  { sentence: 'おはようございます', reading: 'ohayou gozaimasu', meaning: 'صباح الخير', category: 'greetings', level: 1 },
  { sentence: 'こんばんは', reading: 'konbanwa', meaning: 'مساء الخير', category: 'greetings', level: 1 },
  { sentence: 'ありがとうございます', reading: 'arigatou gozaimasu', meaning: 'شكراً جزيلاً', category: 'greetings', level: 1 },
  { sentence: 'すみません', reading: 'sumimasen', meaning: 'عفواً / آسف', category: 'greetings', level: 1 },
  { sentence: 'おやすみなさい', reading: 'oyasumi nasai', meaning: 'تصبح على خير', category: 'greetings', level: 1 },

  // Self introduction تعريف
  { sentence: '私の名前はアリです', reading: 'watashi no namae wa Ari desu', meaning: 'اسمي علي', category: 'introduction', level: 1 },
  { sentence: '私は学生です', reading: 'watashi wa gakusei desu', meaning: 'أنا طالب', category: 'introduction', level: 1 },
  { sentence: 'アメリカから来ました', reading: 'amerika kara kimashita', meaning: 'جئت من أمريكا', category: 'introduction', level: 2 },
  { sentence: '日本語を勉強しています', reading: 'nihongo wo benkyou shiteimasu', meaning: 'أدرس اللغة اليابانية', category: 'introduction', level: 2 },

  // Feelings مشاعر
  { sentence: '元気ですか', reading: 'genki desu ka', meaning: 'كيف حالك؟', category: 'feelings', level: 1 },
  { sentence: 'はい、元気です', reading: 'hai, genki desu', meaning: 'نعم، أنا بخير', category: 'feelings', level: 1 },
  { sentence: 'お腹がすきました', reading: 'onaka ga sukimashita', meaning: 'أنا جائع', category: 'feelings', level: 2 },
  { sentence: '疲れました', reading: 'tsukaremashita', meaning: 'أنا متعب', category: 'feelings', level: 2 },
  { sentence: '好きです', reading: 'suki desu', meaning: 'أحب / يعجبني', category: 'feelings', level: 1 },
  { sentence: '嬉しいです', reading: 'ureshii desu', meaning: 'أنا سعيد', category: 'feelings', level: 1 },
  { sentence: '悲しいです', reading: 'kanashii desu', meaning: 'أنا حزين', category: 'feelings', level: 2 },

  // Daily life حياة يومية
  { sentence: 'ごはんを食べます', reading: 'gohan wo tabemasu', meaning: 'آكل الأرز', category: 'daily', level: 1 },
  { sentence: 'お茶を飲みます', reading: 'ocha wo nomimasu', meaning: 'أشرب الشاي', category: 'daily', level: 1 },
  { sentence: '学校に行きます', reading: 'gakkou ni ikimasu', meaning: 'أذهب إلى المدرسة', category: 'daily', level: 1 },
  { sentence: '友達に会います', reading: 'tomodachi ni aimasu', meaning: 'ألتقي بصديقي', category: 'daily', level: 1 },
  { sentence: '買い物に行きます', reading: 'kaimono ni ikimasu', meaning: 'أذهب للتسوق', category: 'daily', level: 2 },
  { sentence: 'テレビを見ます', reading: 'terebi wo mimasu', meaning: 'أشاهد التلفاز', category: 'daily', level: 1 },
  { sentence: 'シャワーを浴びます', reading: 'shawaa wo abimasu', meaning: 'أستحم', category: 'daily', level: 2 },
  { sentence: '寝ます', reading: 'nemasu', meaning: 'أنام', category: 'daily', level: 1 },
  { sentence: '起きます', reading: 'okimasu', meaning: 'أستيقظ', category: 'daily', level: 1 },

  // Hobby هوايات
  { sentence: '本を読みます', reading: 'hon wo yomimasu', meaning: 'أقرأ كتاباً', category: 'hobby', level: 1 },
  { sentence: '映画を見ます', reading: 'eiga wo mimasu', meaning: 'أشاهد فيلماً', category: 'hobby', level: 1 },
  { sentence: '音楽を聴きます', reading: 'ongaku wo kikimasu', meaning: 'أستمع إلى الموسيقى', category: 'hobby', level: 1 },
  { sentence: '写真を撮ります', reading: 'shashin wo torimasu', meaning: 'ألتقط صوراً', category: 'hobby', level: 2 },
  { sentence: 'スポーツをします', reading: 'supootsu wo shimasu', meaning: 'ألعب رياضة', category: 'hobby', level: 2 },

  // Weather طقس
  { sentence: '今日はいい天気ですね', reading: 'kyou wa ii tenki desu ne', meaning: 'الطقس جميل اليوم، أليس كذلك؟', category: 'weather', level: 2 },
  { sentence: '雨が降っています', reading: 'ame ga futteimasu', meaning: 'المطر ينزل', category: 'weather', level: 2 },
  { sentence: '暑いですね', reading: 'atsui desu ne', meaning: 'الجو حار، أليس كذلك؟', category: 'weather', level: 1 },
  { sentence: '寒いです', reading: 'samui desu', meaning: 'الجو بارد', category: 'weather', level: 1 },

  // Shopping تسوق
  { sentence: 'これはいくらですか', reading: 'kore wa ikura desu ka', meaning: 'بكم هذا؟', category: 'shopping', level: 1 },
  { sentence: 'これをください', reading: 'kore wo kudasai', meaning: 'أعطيني هذا من فضلك', category: 'shopping', level: 1 },
  { sentence: 'ちょっと高いです', reading: 'chotto takai desu', meaning: 'غالي قليلاً', category: 'shopping', level: 2 },
  { sentence: 'カードで払います', reading: 'kaado de haraimasu', meaning: 'أدفع بالبطاقة', category: 'shopping', level: 2 },

  // Restaurant مطعم
  { sentence: '予約したいです', reading: 'yoyaku shitai desu', meaning: 'أريد الحجز', category: 'restaurant', level: 2 },
  { sentence: 'メニューをください', reading: 'menyuu wo kudasai', meaning: 'أعطيني القائمة من فضلك', category: 'restaurant', level: 1 },
  { sentence: 'おいしいです', reading: 'oishii desu', meaning: 'لذيذ', category: 'restaurant', level: 1 },
  { sentence: 'お会計お願いします', reading: 'okaikei onegaishimasu', meaning: 'الحساب من فضلك', category: 'restaurant', level: 2 },

  // Directions اتجاهات
  { sentence: 'すみません、駅はどこですか', reading: 'sumimasen, eki wa doko desu ka', meaning: 'عفواً، أين المحطة؟', category: 'directions', level: 1 },
  { sentence: 'まっすぐ行ってください', reading: 'massugu itte kudasai', meaning: 'سر مستقيماً من فضلك', category: 'directions', level: 2 },
  { sentence: '右に曲がってください', reading: 'migi ni magatte kudasai', meaning: 'انعطف يميناً من فضلك', category: 'directions', level: 2 },

  // Questions أسئلة
  { sentence: 'これは何ですか', reading: 'kore wa nan desu ka', meaning: 'ما هذا؟', category: 'questions', level: 1 },
  { sentence: 'どこですか', reading: 'doko desu ka', meaning: 'أين؟', category: 'questions', level: 1 },
  { sentence: 'いつですか', reading: 'itsu desu ka', meaning: 'متى؟', category: 'questions', level: 1 },
  { sentence: 'なぜですか', reading: 'naze desu ka', meaning: 'لماذا؟', category: 'questions', level: 1 },
  { sentence: 'どうしてですか', reading: 'doushite desu ka', meaning: 'لماذا؟ (سبب)', category: 'questions', level: 1 },

  // Useful expressions تعبيرات مفيدة
  { sentence: '日本語がわかりません', reading: 'nihongo ga wakarimasen', meaning: 'لا أفهم اليابانية', category: 'useful', level: 1 },
  { sentence: 'もう一度言ってください', reading: 'mou ichido itte kudasai', meaning: 'أعد من فضلك', category: 'useful', level: 2 },
  { sentence: 'ゆっくり話してください', reading: 'yukkuri hanashite kudasai', meaning: 'تكلم ببطء من فضلك', category: 'useful', level: 2 },
  { sentence: '日本は美しい国です', reading: 'nihon wa utsukushii kuni desu', meaning: 'اليابان بلد جميل', category: 'useful', level: 2 },
];

// ═══════════════════════════════════════════════════
// SENTENCE CATEGORIES
// ═══════════════════════════════════════════════════

export const SENTENCE_CATEGORIES = {
  greetings: 'تحايا',
  introduction: 'تعريف بالنفس',
  feelings: 'مشاعر',
  daily: 'حياة يومية',
  hobby: 'هوايات',
  weather: 'طقس',
  shopping: 'تسوق',
  restaurant: 'مطعم',
  directions: 'اتجاهات',
  questions: 'أسئلة',
  useful: 'تعبيرات مفيدة',
  food: 'طعام',
  study: 'دراسة',
};

// ═══════════════════════════════════════════════════
// GROUP LABELS
// ═══════════════════════════════════════════════════

export const GROUP_LABELS = {
  // Hiragana/Katakana groups
  basic: 'الأساسية',
  dakuten: 'داكوتين 濁音',
  handakuten: 'هانداكوتين 半濁音',
  combo: 'كومبو 拗音',
  // Vocabulary categories
  greetings: 'تحيات',
  numbers: 'أرقام',
  colors: 'ألوان',
  family: 'عائلة',
  food: 'طعام وشراب',
  animals: 'حيوانات',
  body: 'جسم',
  weather: 'طقس وطبيعة',
  time: 'وقت وتقويم',
  places: 'أماكن',
  people: 'أشخاص ومهن',
  objects: 'أشياء',
  verbs: 'أفعال',
  adjectives: 'صفات',
  expressions: 'تعبيرات',
  // Kanji levels
  1: 'المستوى 1 - الأرقام',
  2: 'المستوى 2 - الزمان والطبيعة',
  3: 'المستوى 3 - الناس',
  4: 'المستوى 4 - المدرسة',
  5: 'المستوى 5 - الجسم',
  6: 'المستوى 6 - الأفعال',
  7: 'المستوى 7 - الصفات',
  8: 'المستوى 8 - الاتجاهات',
  9: 'المستوى 9 - الحيوانات',
  10: 'المستوى 10 - أفعال إضافية',
  11: 'المستوى 11 - المباني (N4)',
  12: 'المستوى 12 - الزمان (N4)',
  13: 'المستوى 13 - العائلة (N4)',
  14: 'المستوى 14 - التقنية (N4)',
  15: 'المستوى 15 - صفات (N4)',
  16: 'المستوى 16 - مشاعر (N3)',
  17: 'المستوى 17 - طبيعة (N3)',
  18: 'المستوى 18 - حركة (N3)',
  19: 'المستوى 19 - חושان (N3)',
  20: 'المستوى 20 - اجتماعية (N3)',
  21: 'المستوى 21 - عمل (N3)',
  22: 'المستوى 22 - صحة (N3)',
  23: 'المستوى 23 - ملابس (N3)',
  24: 'المستوى 24 - تكنولوجيا (N3)',
  25: 'المستوى 25 - ثقافة (N3)',
  // Grammar categories
  basics: 'أساسيات',
  particles: 'حروف',
  verbs: 'أفعال',
  adjectives: 'صفات',
};

// ═══════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════

export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomItems(array, count) {
  return shuffleArray(array).slice(0, Math.min(count, array.length));
}

export function getGroups(data, key) {
  const groupKey = key || 'group';
  const groups = new Map();
  data.forEach(item => {
    const k = item[groupKey] || item.group || item.category;
    if (!groups.has(k)) {
      groups.set(k, []);
    }
    groups.get(k).push(item);
  });
  return groups;
}
