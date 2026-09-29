import { HSK1_COMPLETE_GRAMMAR } from './hskGrammarComplete';

export interface LidiaGrammarExample {
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface LidiaMistakeRepair {
  wrong: string;
  right: string;
  reason: string;
}

export interface LidiaGrammarEntry {
  id: string;
  level: 'HSK 1' | 'HSK 2' | 'HSK 3' | 'HSK 4' | 'HSK 5' | 'HSK 6' | 'HSK 7' | 'HSK 8' | 'HSK 9' | 'Perbandingan Penting' | 'AllSet Wiki (A1-C1)';
  cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  source: string;
  title: string;
  keywords: string[];
  formula: string;
  summary: string;
  usageContexts: string[];
  boundariesAndMistakes?: LidiaMistakeRepair[];
  examples: LidiaGrammarExample[];
}

export const LIDIA_GRAMMAR_LEVELS = [
  'Semua Level',
  'Perbandingan Penting',
  'HSK 1',
  'HSK 2',
  'HSK 3',
  'HSK 4',
  'HSK 5',
  'HSK 6',
  'HSK 7',
  'HSK 8',
  'HSK 9',
  'AllSet Wiki (A1-C1)'
] as const;

const HSK1_MAPPED_KB: LidiaGrammarEntry[] = HSK1_COMPLETE_GRAMMAR.map((g, idx) => ({
  id: g.id || `hsk1-${idx + 1}`,
  level: 'HSK 1',
  cefr: 'A1',
  source: `MandarinMe HSK 1 (Bab ${g.chapterId || 1} • ${g.category || 'Tata Bahasa'})`,
  title: g.rule,
  keywords: [
    g.rule,
    g.category || '',
    g.formula || '',
    ...(g.examples || []).map((ex) => ex.hanzi)
  ],
  formula: g.formula || 'Subjek + Predikat + Objek',
  summary: g.desc,
  usageContexts: g.notes && g.notes.length > 0 ? g.notes : [g.desc],
  examples:
    g.examples && g.examples.length > 0
      ? g.examples.map((ex) => ({
          hanzi: ex.hanzi,
          pinyin: ex.pinyin,
          translation: ex.translation
        }))
      : [{ hanzi: g.example, pinyin: '', translation: '' }]
}));

export const LIDIA_GRAMMAR_KB: LidiaGrammarEntry[] = [
  // ============================================================================
  // 1. DEEP-DIVE COMPARISONS (ChineseGrammar.app & AllSet Learning Grammar Wiki)
  // ============================================================================
  {
    id: 'comp-youdianr-yidianr',
    level: 'Perbandingan Penting',
    cefr: 'A2',
    source: 'ChineseGrammar.app / MandarinMe / AllSet Wiki',
    title: '有点儿 (yǒudiǎnr) vs 一点儿 (yìdiǎnr) — "Sedikit / Agak"',
    keywords: ['有点儿', '一点儿', '有点', '一点', 'youdianr', 'yidianr', 'youdian', 'yidian', 'sedikit', 'agak'],
    formula: '有点儿 + Kata Sifat (Keluhan)  vs  Kata Sifat + 一点儿 (Perbandingan/Permintaan)  |  一点儿 + Kata Benda',
    summary: '有点儿 dan 一点儿 sama-sama diterjemahkan sebagai "sedikit / agak", tetapi posisi dan nuansanya sangat berbeda. 有点儿 diletakkan SEBELUM kata sifat dan membawa nuansa keluhan halus ("agak terlalu..."). Sedangkan 一点儿 diletakkan SETELAH kata sifat untuk membandingkan atau meminta perubahan ("lebih ... sedikit"), atau diletakkan SEBELUM kata benda untuk menyatakan jumlah sedikit.',
    usageContexts: [
      '有点儿 + Kata Sifat (Menyatakan keluhan halus / kurang nyaman): 我有点儿累 (Saya agak lelah), 这个有点儿贵 (Ini agak kemahalan).',
      'Kata Sifat + 一点儿 (Menyatakan perbandingan atau permintaan sopan): 请便宜一点儿 (Tolong lebih murah sedikit), 快一点儿 (Cepat sedikit).',
      'Kata Kerja + 一点儿 + Kata Benda (Menyatakan kuantitas sedikit): 我想喝一点儿水 (Saya ingin minum sedikit air).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '这个一点儿贵。 ❌',
        right: '这个有点儿贵。 ✅',
        reason: 'Jangan letakkan 一点儿 di depan kata sifat untuk mengeluh. Sebelum kata sifat wajib menggunakan 有点儿.'
      },
      {
        wrong: '请便宜有点儿。 ❌',
        right: '请便宜一点儿。 ✅',
        reason: '有点儿 tidak pernah boleh diletakkan setelah kata sifat. Setelah kata sifat wajib menggunakan 一点儿.'
      }
    ],
    examples: [
      { hanzi: '今天我有点儿累。', pinyin: 'Jīntiān wǒ yǒudiǎnr lèi.', translation: 'Hari ini saya agak lelah. (Keluhan halus: 有点儿 + Adj)' },
      { hanzi: '这件衣服有点儿大，有没有小一点儿的？', pinyin: 'Zhè jiàn yīfu yǒudiǎnr dà, yǒu méiyǒu xiǎo yìdiǎnr de?', translation: 'Baju ini agak kebesaran, apakah ada yang lebih kecil sedikit?' },
      { hanzi: '请你说慢一点儿。', pinyin: 'Qǐng nǐ shuō màn yìdiǎnr.', translation: 'Tolong berbicara lebih pelan sedikit. (Adj + 一点儿)' },
      { hanzi: '我想喝一点儿茶。', pinyin: 'Wǒ xiǎng hē yìdiǎnr chá.', translation: 'Saya ingin minum sedikit teh. (一点儿 + Kata Benda)' }
    ]
  },
  {
    id: 'comp-yi-jiu',
    level: 'Perbandingan Penting',
    cefr: 'A2',
    source: 'ChineseGrammar.app / AllSet Wiki',
    title: 'Struktur 一...就... (yī... jiù...) — "Begitu A, Langsung B"',
    keywords: ['一...就...', '一就', 'yi jiu', 'yi...jiu', 'begitu', 'setiap kali', 'as soon as'],
    formula: 'Subjek + 一 + Aksi A, 就 + Aksi B  |  Subjek 1 + 一 + Aksi A, Subjek 2 + 就 + Aksi B',
    summary: 'Pola 一...就... menghubungkan dua kejadian secara beruntun dengan arti "Begitu A terjadi, maka langsung B" (As soon as A, then B) atau "Setiap kali A, pasti B". Kata 一 diletakkan sebelum kata kerja pertama, dan 就 diletakkan sebelum kata kerja kedua. Kedua bagian (一 dan 就) wajib hadir bersama.',
    usageContexts: [
      'Aksi beruntun seketika: 他一下课就回家 (Begitu selesai kelas, dia langsung pulang ke rumah).',
      'Reaksi kebiasaan/otomatis: 我一喝咖啡就睡不着 (Begitu saya minum kopi, saya langsung tidak bisa tidur).',
      'Dua subjek berbeda (Aksi 1 memicu Aksi 2): 老师一说，学生就懂了 (Begitu guru menjelaskan, murid langsung paham).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我一到家睡觉。 ❌',
        right: '我一到家就睡觉。 ✅',
        reason: 'Jangan menghilangkan 就! Pola 一...就... membutuhkan kedua penanda agar hubungan "begitu... langsung..." terbentuk.'
      },
      {
        wrong: '我一个到家就给你打电话。 ❌',
        right: '我一到家就给你打电话。 ✅',
        reason: 'Kata 一 dalam pola 一...就... bukan angka "satu", sehingga TIDAK BOLEH ditambah kata bantu bilangan seperti 个.'
      }
    ],
    examples: [
      { hanzi: '我一到家就睡觉。', pinyin: 'Wǒ yí dào jiā jiù shuìjiào.', translation: 'Begitu sampai di rumah, saya langsung tidur.' },
      { hanzi: '他一下课就回家。', pinyin: 'Tā yí xià kè jiù huí jiā.', translation: 'Begitu selesai kelas, dia langsung pulang.' },
      { hanzi: '老师一说，学生就懂了。', pinyin: 'Lǎoshī yì shuō, xuésheng jiù dǒng le.', translation: 'Begitu guru berbicara, para siswa langsung mengerti.' }
    ]
  },
  {
    id: 'comp-haishi-huozhe',
    level: 'Perbandingan Penting',
    cefr: 'A2',
    source: 'ChineseGrammar.app / MandarinMe HSK 3 / AllSet Wiki',
    title: '还是 (háishì) vs 或者 (huòzhě) — Dua Cara Mengatakan "Atau"',
    keywords: ['还是', '或者', 'haishi', 'huozhe', 'atau', 'pilihan'],
    formula: 'Kalimat Tanya Pilihan: A + 还是 + B ？  vs  Kalimat Pernyataan: A + 或者 + B 。',
    summary: '还是 (háishì) dan 或者 (huòzhě) keduanya berarti "atau", namun dipisahkan secara tegas oleh jenis kalimatnya. 还是 digunakan dalam KALIMAT TANYA untuk meminta lawan bicara memilih (A atau B?), sedangkan 或者 digunakan dalam KALIMAT PERNYATAAN (berita) untuk menyebutkan alternatif yang sama-sama bisa dipilih.',
    usageContexts: [
      '还是 dalam kalimat tanya pilihan: 你喝茶还是喝咖啡？ (Kamu minum teh atau kopi?).',
      '还是 dalam klausa tidak langsung (tidak yakin): 我不知道他去还是不去 (Saya tidak tahu apakah dia pergi atau tidak).',
      '还是 sebagai adverbia berarti "lebih baik / sebaiknya": 外面下雨了，我们还是在家吧 (Di luar hujan, sebaiknya kita di rumah saja).',
      '或者 dalam kalimat berita/pernyataan: 周末我看书或者看电影 (Saat akhir pekan saya membaca buku atau menonton film).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '你喝茶或者咖啡？ ❌',
        right: '你喝茶还是咖啡？ ✅',
        reason: 'Pertanyaan yang menawarkan pilihan WAJIB menggunakan 还是, tidak boleh menggunakan 或者.'
      },
      {
        wrong: '你可以打电话还是发邮件。 ❌',
        right: '你可以打电话或者发邮件。 ✅',
        reason: 'Kalimat pernyataan biasa yang menyebutkan opsi terbuka menggunakan 或者, bukan 还是.'
      }
    ],
    examples: [
      { hanzi: '你喝茶还是咖啡？', pinyin: 'Nǐ hē chá háishì kāfēi?', translation: 'Kamu minum teh atau kopi? (Kalimat tanya ➔ 还是)' },
      { hanzi: '喝茶或者咖啡都行。', pinyin: 'Hē chá huòzhě kāfēi dōu xíng.', translation: 'Minum teh ataupun kopi dua-duanya boleh. (Pernyataan ➔ 或者)' },
      { hanzi: '我们走路还是坐车？', pinyin: 'Wǒmen zǒulù háishì zuòchē?', translation: 'Kita jalan kaki atau naik kendaraan?' }
    ]
  },
  {
    id: 'comp-hui-neng-keyi',
    level: 'Perbandingan Penting',
    cefr: 'A2',
    source: 'ChineseGrammar.app / MandarinMe HSK 2 / AllSet Wiki',
    title: '会 (huì) vs 能 (néng) vs 可以 (kěyǐ) — Tiga Kata "Bisa"',
    keywords: ['会', '能', '可以', 'hui', 'neng', 'keyi', 'bisa', 'dapat', 'boleh'],
    formula: '会 + Keahlian Dipelajari / Masa Depan  |  能 + Kemampuan Fisik / Situasi  |  可以 + Izin / Saran',
    summary: '会, 能, dan 可以 semuanya diterjemahkan sebagai "bisa / dapat", tetapi memiliki fokus makna yang berbeda: 会 (huì) digunakan untuk keterampilan yang dipelajari (belajar bahasa, menyetir, berenang) atau kemungkinan masa depan ("akan"). 能 (néng) menekankan kemampuan fisik/situasional ("mampu/memungkinkan"). 可以 (kěyǐ) menekankan pemberian izin ("boleh") atau kelayakan.',
    usageContexts: [
      '会 (huì) — Keahlian hasil belajar: 我会开车 (Saya bisa menyetir mobil), 我会说中文 (Saya bisa berbahasa Mandarin).',
      '会 (huì) — Prediksi masa depan ("akan"): 明天会下雨 (Besok akan turun hujan).',
      '能 (néng) — Kemampuan situasi / kapasitas fisik: 我今天不能来 (Hari ini saya tidak bisa datang), 我能吃三碗饭 (Saya sanggup makan 3 mangkuk).',
      '可以 (kěyǐ) — Meminta/memberi izin ("boleh"): 这儿可以停车吗？ (Apakah boleh parkir di sini?). Negasi larangan: 不可以 (Tidak boleh!).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '这儿会抽烟吗？ ❌',
        right: '这儿可以抽烟吗？ ✅',
        reason: 'Meminta izin ("bolehkah") menggunakan 可以 atau 能, tidak pernah menggunakan 会.'
      },
      {
        wrong: '我会能说英文。 ❌',
        right: '我会说英文。 ✅',
        reason: 'Jangan menumpuk 会 dan 能 sekaligus dalam satu predikat.'
      }
    ],
    examples: [
      { hanzi: '我会游泳，也会开车。', pinyin: 'Wǒ huì yóuyǒng, yě huì kāichē.', translation: 'Saya bisa berenang dan juga bisa mengemudi. (Keahlian ➔ 会)' },
      { hanzi: '我今天很忙，不能去你家。', pinyin: 'Wǒ jīntiān hěn máng, bù néng qù nǐ jiā.', translation: 'Hari ini saya sangat sibuk, tidak bisa pergi ke rumahmu. (Situasi ➔ 能)' },
      { hanzi: '我可以进来吗？', pinyin: 'Wǒ kěyǐ jìnlái ma?', translation: 'Bolehkah saya masuk? (Meminta izin ➔ 可以)' }
    ]
  },
  {
    id: 'comp-de-de-di',
    level: 'Perbandingan Penting',
    cefr: 'B1',
    source: 'ChineseGrammar.app / MandarinMe HSK 3 / AllSet Wiki',
    title: '的 vs 得 vs 地 (Tiga Partikel "de" / 白勺的、双人得、土也地)',
    keywords: ['的', '得', '地', 'tiga de', 'three de', 'de de di', 'partikel de'],
    formula: 'Penjelas + 的 + Kata Benda  |  Kata Sifat + 地 + Kata Kerja  |  Kata Kerja + 得 + Pelengkap Derajat',
    summary: 'Ketiga partikel 的, 得, dan 地 semuanya dibaca "de" (nada netral), tetapi memiliki fungsi tata bahasa yang sama sekali berbeda dalam tulisan: (1) 的 (白勺的) diletakkan SEBELUM Kata Benda untuk menyatakan kepemilikan/atribut; (2) 地 (土也地) diletakkan SEBELUM Kata Kerja untuk mengubah kata sifat menjadi keterangan cara ("dengan..."); (3) 得 (双人得) diletakkan SETELAH Kata Kerja untuk memperkenalkan pelengkap derajat/hasil.',
    usageContexts: [
      '的 + Kata Benda (Atributif / Kepemilikan): 我的书 (buku saya), 漂亮的衣服 (baju yang indah).',
      'Kata Sifat + 地 + Kata Kerja (Adverbia cara melakukan aksi): 认真地学习 (belajar dengan serius), 慢慢地走 (berjalan dengan pelan).',
      'Kata Kerja + 得 + Kata Sifat (Pelengkap derajat penilaian aksi): 说得很流利 (berbicara dengan sangat lancar), 跑得很快 (berlari dengan sangat cepat).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '他跑的很快。 ❌',
        right: '他跑得很快。 ✅',
        reason: 'Setelah kata kerja (跑 berlari) untuk menerangkan seberapa cepat aksinya (pelengkap derajat), WAJIB menggunakan 得, bukan 的.'
      },
      {
        wrong: '他认真得学习。 ❌',
        right: '他认真地学习。 ✅',
        reason: 'Sebelum kata kerja (学习 belajar) untuk menyatakan cara ("dengan serius"), WAJIB menggunakan 地.'
      }
    ],
    examples: [
      { hanzi: '这是我的汉语书。', pinyin: 'Zhè shì wǒ de Hànyǔ shū.', translation: 'Ini adalah buku Mandarin saya. (的 + Kata Benda)' },
      { hanzi: '他每天都认真地学习。', pinyin: 'Tā měitiān dōu rènzhēn de xuéxí.', translation: 'Dia setiap hari belajar dengan sungguh-sungguh. (Adj + 地 + Verb)' },
      { hanzi: '她的中文说得非常好。', pinyin: 'Tā de Zhōngwén shuō de fēicháng hǎo.', translation: 'Bahasa Mandarinnya diucapkan dengan sangat baik. (Verb + 得 + Complement)' }
    ]
  },
  {
    id: 'comp-bu-vs-mei',
    level: 'Perbandingan Penting',
    cefr: 'A1',
    source: 'ChineseGrammar.app / MandarinMe HSK 1 / AllSet Wiki',
    title: '不 (bù) vs 没 / 没有 (méi / méiyǒu) — Dua Kata Negasi Mandarin',
    keywords: ['不', '没', '没有', 'bu vs mei', 'perbedaan bu dan mei', 'negasi'],
    formula: '不 + Kebiasaan / Keinginan / Sifat / Masa Depan / 是  vs  没(有) + Aksi Lampau / Kepemilikan 有',
    summary: '不 (bù) dan 没 (méi) keduanya berarti "tidak / belum", tetapi tidak bisa dipertukarkan. 不 menyangkal kebiasaan, sifat, perasaan, keinginan subjektif, masa depan, dan kata 是. Sedangkan 没(有) menyangkal fakta terjadinya peristiwa di masa lalu ("belum/tidak terjadi") serta menyangkal kata kerja kepemilikan 有 (yǒu).',
    usageContexts: [
      'Gunakan 不 untuk kebiasaan, sifat, dan rencana masa depan: 我不喝咖啡 (Saya tidak minum kopi), 我明天不去 (Besok saya tidak pergi), 我不忙 (Saya tidak sibuk).',
      'Gunakan 没(有) untuk peristiwa yang belum/tidak terjadi: 我昨天没去 (Kemarin saya tidak pergi), 我还没吃饭 (Saya belum makan).',
      'Gunakan 没有 untuk menyangkal kepemilikan 有: 我没有钱 (Saya tidak punya uang).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我没喜欢中文。 ❌',
        right: '我不喜欢中文。 ✅',
        reason: 'Kata kerja psikologis/perasaan (喜欢 suka, 想 ingin, 知道 tahu) dan kata sifat selalu disangkal dengan 不, tidak pernah dengan 没.'
      },
      {
        wrong: '我没吃了早饭。 ❌',
        right: '我没吃早饭。 ✅',
        reason: '没 tidak pernah boleh digabung dengan 了! Karena 没 menyatakan aksi belum selesai/terjadi, partikel 了 wajib dihapus.'
      }
    ],
    examples: [
      { hanzi: '我不喝咖啡，我喝茶。', pinyin: 'Wǒ bù hē kāfēi, wǒ hē chá.', translation: 'Saya tidak minum kopi, saya minum teh. (Kebiasaan ➔ 不)' },
      { hanzi: '昨天我没看那个电影。', pinyin: 'Zuótiān wǒ méi kàn nàge diànyǐng.', translation: 'Kemarin saya tidak menonton film itu. (Fakta lampau ➔ 没)' },
      { hanzi: '我还没吃午饭呢。', pinyin: 'Wǒ hái méi chī wǔfàn ne.', translation: 'Saya masih belum makan siang. (Belum terjadi ➔ 还没)' }
    ]
  },

  // ============================================================================
  // 2. HSK 2 COMPLETE GRAMMAR (MandarinMe HSK 2 & AllSet Learning A2)
  // ============================================================================
  {
    id: 'hsk2-yao',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kata Kerja Bantu "要" (yào) & Perbedaan "要" vs "想"',
    keywords: ['要', '想', 'yao', 'xiang', 'perbedaan yao dan xiang', 'ingin', 'akan'],
    formula: 'Subjek + 要 + Kata Kerja / Benda  |  Negasi Keinginan: 不想  |  Masa Depan: 要...了',
    summary: 'Kata 要 (yào) berarti "mau / ingin (dengan tekad kuat)", "meminta/memesan barang", atau "akan segera terjadi". Dibandingkan 想 (xiǎng) yang terdengar sopan dan halus ("ingin/berharap"), 要 memiliki nada yang lebih tegas dan langsung. Bentuk negatif dari 要 ("mau") dalam percakapan sehari-hari adalah 不想 (bù xiǎng = tidak ingin), sedangkan 不要 (bú yào) berarti "Jangan!".',
    usageContexts: [
      'Menyatakan tekad/niat melakukan sesuatu: 我要学好汉语 (Saya mau/bertekad menguasai bahasa Mandarin).',
      'Memesan makanan/membeli barang: 我要一杯咖啡 (Saya mau/pesan secangkir kopi).',
      'Menyatakan sesuatu akan segera terjadi: 要下雨了 (Akan segera turun hujan).'
    ],
    examples: [
      { hanzi: '我要去北京旅游。', pinyin: 'Wǒ yào qù Běijīng lǚyóu.', translation: 'Saya akan/mau pergi berwisata ke Beijing.' },
      { hanzi: '我想喝水，不想喝牛奶。', pinyin: 'Wǒ xiǎng hē shuǐ, bù xiǎng hē niúnǎi.', translation: 'Saya ingin minum air, tidak ingin minum susu. (Negasi 要 adalah 不想)' },
      { hanzi: '服务员，我要一碗米饭。', pinyin: 'Fúwùyuán, wǒ yào yì wǎn mǐfàn.', translation: 'Pelayan, saya pesan semangkuk nasi.' }
    ]
  },
  {
    id: 'hsk2-zui',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kata Keterangan Derajat Superlatif "最" (zuì - Paling)',
    keywords: ['最', 'zui', 'paling', 'ter-'],
    formula: 'Subjek + 最 (zuì) + Kata Sifat / Kata Kerja Psikologis (喜欢, 想, 爱)',
    summary: 'Kata keterangan 最 (zuì) berarti "paling / ter-". Diletakkan tepat di depan kata sifat atau kata kerja mental/perasaan (seperti 喜欢 suka, 爱 cinta, 想 ingin) untuk menunjukkan tingkat paling tinggi di antara semuanya.',
    usageContexts: [
      '最 + Kata Sifat: 最好 (paling baik), 最贵 (paling mahal), 最漂亮 (paling cantik).',
      '最 + Kata Kerja Mental: 最喜欢 (paling suka), 最爱吃 (paling suka makan).'
    ],
    examples: [
      { hanzi: '我最喜欢吃中国菜。', pinyin: 'Wǒ zuì xǐhuan chī Zhōngguó cài.', translation: 'Saya paling suka makan masakan Tiongkok.' },
      { hanzi: '大卫的汉语最好。', pinyin: 'Dàwèi de Hànyǔ zuì hǎo.', translation: 'Bahasa Mandarin David paling bagus.' },
      { hanzi: '八月是北京最热的时候。', pinyin: 'Bāyuè shì Běijīng zuì rè de shíhou.', translation: 'Bulan Agustus adalah waktu paling panas di Beijing.' }
    ]
  },
  {
    id: 'hsk2-ji-duo-approx',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Menyatakan Perkiraan Jumlah dengan "几" (jǐ) dan "多" (duō)',
    keywords: ['几', '多', '十几', '几十', '多岁', 'beberapa', 'lebih dari'],
    formula: '十几 (11–19)  |  几十 (20–90)  |  Angka Puluhan + 多 + Satuan (Lebih dari...)',
    summary: 'Selain untuk bertanya, 几 (jǐ) dapat digunakan dalam kalimat pernyataan yang berarti "beberapa (antara 2–9)". Sementara itu, 多 (duō) digunakan setelah angka bulat untuk menyatakan "lebih dari" (contoh: 二十多岁 = 20 tahun lebih).',
    usageContexts: [
      '十几 (shí jǐ) = Belasan (11 sampai 19): 十几个人 (belasan orang).',
      '几十 (jǐ shí) = Puluhan (20 sampai 90): 几十本书 (puluhan buku).',
      'Angka Bulat (10, 20, 100) + 多 + Kata Satuan: 三十多块钱 (30 yuan lebih), 一百多个学生 (100 lebih siswa).',
      'Angka Satuan (1–9) + Kata Satuan + 多 + Kata Benda: 两个多星期 (dua minggu lebih), 三年多 (tiga tahun lebih).'
    ],
    examples: [
      { hanzi: '车上有十几个人。', pinyin: 'Chē shang yǒu shí jǐ ge rén.', translation: 'Di dalam mobil/bus ada belasan orang.' },
      { hanzi: '李老师今年三十多岁。', pinyin: 'Lǐ lǎoshī jīnnián sānshí duō suì.', translation: 'Guru Li tahun ini berusia 30 tahun lebih.' },
      { hanzi: '我学汉语学了两年多了。', pinyin: 'Wǒ xué Hànyǔ xué le liǎng nián duō le.', translation: 'Saya sudah belajar Mandarin selama dua tahun lebih.' }
    ]
  },
  {
    id: 'hsk2-v-bu-v',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A1-A2',
    title: 'Kalimat Tanya Positif-Negatif (A-not-A Questions: V不V / Adj不Adj / V没V)',
    keywords: ['positif-negatif', 'positif negatif', '是不是', '好不好', '有没有', '去不去', 'a-not-a'],
    formula: 'Subjek + V + 不 + V + Objek？  |  Subjek + Adj + 不 + Adj？  |  Subjek + 有没有 + Objek？',
    summary: 'Selain menggunakan partikel 吗 (ma), kalimat tanya "Ya/Tidak" dalam bahasa Mandarin sangat sering dibentuk dengan menggabungkan bentuk positif dan negatif dari kata kerja atau kata sifat secara berdampingan. Jika sudah menggunakan pola Positif-Negatif, JANGAN tambahkan 吗 di akhir kalimat!',
    usageContexts: [
      'Kata Kerja / Sifat + 不 + Kata Kerja / Sifat: 是不是 (apakah benar), 去不去 (pergi atau tidak), 好不好 (baik tidak), 忙不忙 (sibuk tidak).',
      'Kata Kerja 2 Suku Kata (AB ➔ A不AB): 喜欢不喜欢 atau 喜不喜欢 (suka atau tidak), 高兴不高兴 / 高不高兴.',
      'Lampau / Kepemilikan dengan 没: 有没有 (punya atau tidak / sudah atau belum), 去没去 (jadi pergi atau tidak kemarin).'
    ],
    examples: [
      { hanzi: '你明天去不去学校？', pinyin: 'Nǐ míngtiān qù bu qù xuéxiào?', translation: 'Apakah besok kamu pergi ke sekolah atau tidak?' },
      { hanzi: '你喜不喜欢看中国电影？', pinyin: 'Nǐ xǐ bu xǐhuan kàn Zhōngguó diànyǐng?', translation: 'Apakah kamu suka menonton film Tiongkok?' },
      { hanzi: '你有没有空儿？', pinyin: 'Nǐ yǒu méiyǒu kòngr?', translation: 'Apakah kamu punya waktu luang?' }
    ]
  },
  {
    id: 'hsk2-mei-dou',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kata Ganti "每" (měi - Setiap) & Pola "每...都..." / "每次...都..."',
    keywords: ['每', '每次', '每天', 'mei', 'setiap'],
    formula: '每 + Kata Satuan + Kata Benda + 都 + Kata Kerja/Sifat',
    summary: 'Kata 每 (měi) berarti "setiap". Aturan pentingnya: setelah 每 wajib diikuti Kata Satuan (kecuali kata waktu seperti 天, 年, 次), dan pada bagian predikatnya hampir selalu berpasangan dengan kata keterangan 都 (dōu = semuanya/selalu).',
    usageContexts: [
      '每天...都... (Setiap hari selalu...): 我每天都六点起床。',
      '每次...都... (Setiap kali selalu...): 他每次来都买水果。',
      '每个 + Kata Benda + 都...: 每个学生都很努力 (Setiap siswa semuanya rajin).'
    ],
    examples: [
      { hanzi: '我每天都喝一杯咖啡。', pinyin: 'Wǒ měitiān dōu hē yì bēi kāfēi.', translation: 'Saya setiap hari selalu minum secangkir kopi.' },
      { hanzi: '每个老师都很好。', pinyin: 'Měi ge lǎoshī dōu hěn hǎo.', translation: 'Setiap guru semuanya sangat baik.' },
      { hanzi: '每次我去他家，他都在看书。', pinyin: 'Měi cì wǒ qù tā jiā, tā dōu zài kàn shū.', translation: 'Setiap kali saya pergi ke rumahnya, dia selalu sedang membaca buku.' }
    ]
  },
  {
    id: 'hsk2-duo-adj',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kata Tanya Derajat "多 + Kata Sifat" (duō + Adj - Seberapa...?)',
    keywords: ['多高', '多远', '多大', '多久', '多长', 'duo', 'seberapa'],
    formula: 'Subjek + 多 (duō) + Kata Sifat Berukuran Besar (高/远/大/长/重/久)？',
    summary: 'Kata 多 (duō) yang diletakkan di depan kata sifat berdimensi (tinggi, jauh, panjang, berat, lama, besar) digunakan untuk menanyakan ukuran atau derajat ("Seberapa tinggi?", "Seberapa jauh?", "Berapa lama?").',
    usageContexts: [
      '多高 (duō gāo = berapa tingginya), 多远 (duō yuǎn = berapa jauhnya), 多长 (duō cháng = berapa panjangnya), 多久 (duō jiǔ = berapa lama), 多重 (duō zhòng = berapa beratnya).'
    ],
    examples: [
      { hanzi: '你哥哥多高？他一米八。', pinyin: 'Nǐ gēge duō gāo? Tā yì mǐ bā.', translation: 'Berapa tinggi kakak laki-lakimu? Tingginya 1,8 meter.' },
      { hanzi: '从这儿到机场有多远？', pinyin: 'Cóng zhèr dào jīchǎng yǒu duō yuǎn?', translation: 'Dari sini sampai ke bandara seberapa jauh?' },
      { hanzi: '你在北京住了多久？', pinyin: 'Nǐ zài Běijīng zhù le duō jiǔ?', translation: 'Kamu sudah tinggal berapa lama di Beijing?' }
    ]
  },
  {
    id: 'hsk2-yixia-redup',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Penggunaan "一下" (yíxià) & Reduplikasi Kata Kerja (AA / A一A / ABAB)',
    keywords: ['一下', 'yixia', 'reduplikasi', 'pengulangan kata kerja', 'sebentar', 'coba'],
    formula: 'Kata Kerja + 一下  |  V + V (看看)  |  V + 一 + V (看一看)  |  ABAB (休息休息)',
    summary: 'Menambahkan 一下 (yíxià) setelah kata kerja atau mengulang kata kerja (reduplikasi) berfungsi untuk memperhalus nada bicara serta menyatakan bahwa tindakan tersebut dilakukan sebentar, santai, atau sekadar mencoba ("coba lihat sebentar", "istirahat sebentar").',
    usageContexts: [
      'Kata Kerja + 一下: 看一下 (lihat sebentar), 等一下 (tunggu sebentar), 介绍一下 (memperkenalkan sebentar).',
      'Kata Kerja 1 Suku Kata (AA / A一A): 看看 / 看一看 (coba lihat), 听听 / 听一听 (coba dengar), 试试 (coba).',
      'Kata Kerja 2 Suku Kata (ABAB, bukan AABB!): 休息休息 (istirahat sebentar), 准备准备 (bersiap-siap), 介绍介绍 (memperkenalkan).'
    ],
    examples: [
      { hanzi: '请等一下，我马上来。', pinyin: 'Qǐng děng yíxià, wǒ mǎshàng lái.', translation: 'Tolong tunggu sebentar, saya segera datang.' },
      { hanzi: '这件衣服很漂亮，我可以试试吗？', pinyin: 'Zhè jiàn yīfu hěn piàoliang, wǒ kěyǐ shìshi ma?', translation: 'Baju ini sangat bagus, bolehkah saya mencobanya?' },
      { hanzi: '你累了，休息休息吧。', pinyin: 'Nǐ lèi le, xiūxi xiūxi ba.', translation: 'Kamu sudah lelah, istirahatlah sebentar.' }
    ]
  },
  {
    id: 'hsk2-zhen-tai',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kata Seru Derajat "真" (zhēn - Sungguh / Benar-benar)',
    keywords: ['真', 'zhen', 'sungguh', 'benar-benar'],
    formula: 'Subjek + 真 (zhēn) + Kata Sifat / Kata Kerja Psikologis！',
    summary: 'Kata keterangan 真 (zhēn) berarti "sungguh / benar-benar", digunakan untuk mengekspresikan kekaguman atau perasaan spontan pembicara. Perhatian: Frasa dengan 真 + Kata Sifat hanya bisa menjadi predikat seruan di akhir kalimat, dan TIDAK BISA langsung menerangkan kata benda di depannya (gunakan 很/非常 untuk atributif).',
    usageContexts: [
      'Kalimat seruan: 今天天气真好！ (Cuaca hari ini sungguh bagus!), 你真好！ (Kamu benar-benar baik!).',
      'Jangan katakan: 他是一个真好的人 ❌ (Gunakan: 他是一个很好的人 ✅).'
    ],
    examples: [
      { hanzi: '今天的天气真好！', pinyin: 'Jīntiān de tiānqì zhēn hǎo!', translation: 'Cuaca hari ini sungguh bagus!' },
      { hanzi: '你的房间真干净！', pinyin: 'Nǐ de fángjiān zhēn gānjìng!', translation: 'Kamarmu benar-benar bersih!' }
    ]
  },
  {
    id: 'hsk2-deshihou-yijing',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Penggunaan "...的时候" (Saat/Ketika) & "已经...了" (Sudah)',
    keywords: ['的时候', '已经', 'deshihou', 'shihou', 'yijing', 'ketika', 'saat', 'sudah'],
    formula: '[Klausa / Waktu] + 的时候，Klausa Utama  |  Subjek + 已经 + Predikat + 了',
    summary: '...的时候 (de shíhou) diletakkan di AKHIR kata kerja, kata sifat, atau kata waktu untuk menyatakan "ketika / pada saat...". Sedangkan 已经 (yǐjīng) selalu berpasangan dengan 了 di akhir kalimat (已经...了) untuk menekankan bahwa suatu tindakan atau keadaan "sudah" terjadi.',
    usageContexts: [
      'Aksi + 的时候: 我到家的时候，他在做饭 (Ketika saya sampai di rumah, dia sedang memasak).',
      'Usia/Masa + 的时候: 小的时候 (Saat masih kecil), 八岁的时候 (Saat berusia 8 tahun).',
      '已经...了: 他已经回家了 (Dia sudah pulang ke rumah), 身体已经好了 (Badannya sudah sembuh).'
    ],
    examples: [
      { hanzi: '我十八岁的时候，一个人来到北京。', pinyin: 'Wǒ shíbā suì de shíhou, yí ge rén láidào Běijīng.', translation: 'Ketika saya berusia 18 tahun, saya datang ke Beijing sendirian.' },
      { hanzi: '王老师已经回家了。', pinyin: 'Wáng lǎoshī yǐjīng huí jiā le.', translation: 'Guru Wang sudah pulang ke rumah.' },
      { hanzi: '天已经黑了，快回家吧。', pinyin: 'Tiān yǐjīng hēi le, kuài huí jiā ba.', translation: 'Langit sudah gelap, cepatlah pulang.' }
    ]
  },
  {
    id: 'hsk2-yinwei-suoyi-suiran-danshi',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Konjungsi "因为...所以..." (Karena... Maka...) & "虽然...但是..." (Meskipun... Tetapi...)',
    keywords: ['因为', '所以', '虽然', '但是', 'yinwei', 'suoyi', 'suiran', 'danshi', 'karena', 'meskipun', 'walaupun'],
    formula: '因为 + Sebab, 所以 + Akibat  |  虽然 + Klausa Konsesi, 但是/可是 + Klausa Kontras',
    summary: 'Dalam bahasa Mandarin, kata penghubung berpasangan wajib digunakan secara lengkap: 因为 (karena) berpasangan dengan 所以 (maka/oleh karena itu), dan 虽然 (meskipun/walaupun) berpasangan dengan 但是 atau 可是 (tetapi/namun). Berbeda dengan bahasa Indonesia/Inggris yang melarang kata "meskipun" dan "tetapi" dipakai bersamaan, dalam bahasa Mandarin 虽然 dan 但是 WAJIB dipakai berpasangan!',
    usageContexts: [
      '因为...所以...: Menyatakan hubungan sebab-akibat langsung.',
      '虽然...但是...: Menyatakan pertentangan/konsesi.'
    ],
    examples: [
      { hanzi: '因为下雨了，所以我们没去踢足球。', pinyin: 'Yīnwèi xià yǔ le, suǒyǐ wǒmen méi qù tī zúqiú.', translation: 'Karena turun hujan, maka kami tidak pergi bermain sepak bola.' },
      { hanzi: '虽然外面很冷，但是房间里很暖和。', pinyin: 'Suīrán wàimiàn hěn lěng, dànshì fángjiān lǐ hěn nuǎnhuo.', translation: 'Meskipun di luar sangat dingin, tetapi di dalam kamar sangat hangat.' }
    ]
  },
  {
    id: 'hsk2-prepositions-li-cong-wang-dui-gei',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Preposisi Arah, Jarak & Sasaran: 离 (lí), 从 (cóng), 往 (wǎng), 对 (duì), 给 (gěi)',
    keywords: ['离', '从', '往', '对', '给', '到', 'jarak', 'dari', 'menuju', 'terhadap', 'kepada'],
    formula: 'Tempat A + 离 + Tempat B + 远/近  |  从 + Titik Awal + 到 + Tujuan  |  往 + Arah + V  |  对 + Objek + Sifat/V',
    summary: 'Lima preposisi penting di HSK 2 selalu diletakkan SEBELUM kata kerja/sifat: (1) 离 (lí) menyatakan jarak antara dua tempat ("berjarak dari"); (2) 从 (cóng) menyatakan titik awal waktu/tempat ("dari"); (3) 往 (wǎng) menyatakan arah gerakan ("ke arah/menuju"); (4) 对 (duì) menyatakan sasaran sikap/pengaruh ("terhadap/bagi"); (5) 给 (gěi) berarti "memberi" atau "kepada/untuk".',
    usageContexts: [
      '离 (Jarak): 我家离学校很近 (Rumahku dekat dari sekolah). Jangan gunakan 从 untuk menyatakan jarak statis!',
      '从...到... (Dari... sampai...): 从早上八点到中午十二点 (Dari jam 8 pagi sampai 12 siang).',
      '往 (Ke arah): 往前走 (Jalan lurus ke depan), 往左拐 (Belok ke arah kiri).',
      '对 (Terhadap/Bagi): 跑步对身体很好 (Berlari sangat baik bagi kesehatan), 他对我很好 (Dia sangat baik terhadapku).',
      '给 (Kepada/Untuk): 我给妈妈打电话 (Saya menelepon kepada Ibu).'
    ],
    examples: [
      { hanzi: '我家离公司不太远。', pinyin: 'Wǒ jiā lí gōngsī bú tài yuǎn.', translation: 'Rumah saya tidak terlalu jauh dari kantor.' },
      { hanzi: '从这儿一直往前走就是医院。', pinyin: 'Cóng zhèr yìzhí wǎng qián zǒu jiù shì yīyuàn.', translation: 'Dari sini jalan terus ke arah depan langsung sampai rumah sakit.' },
      { hanzi: '多吃水果对身体很好。', pinyin: 'Duō chī shuǐguǒ duì shēntǐ hěn hǎo.', translation: 'Banyak makan buah sangat baik untuk kesehatan tubuh.' }
    ]
  },
  {
    id: 'hsk2-bi-comparison',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Kalimat Perbandingan dengan "比" (bǐ), "没有" (méiyǒu), dan "跟...一样" (Sama)',
    keywords: ['比', '没有', '一样', '跟...一样', '得多', '多了', '一点儿', 'perbandingan', 'lebih dari'],
    formula: 'A + 比 + B + Kata Sifat + (一点儿 / 得多 / 多了)  |  A + 没有 + B + Kata Sifat  |  A + 跟 + B + 一样 (+ Adj)',
    summary: 'Untuk membandingkan dua hal ("A lebih ... daripada B"), gunakan struktur A + 比 + B + Kata Sifat. ATURAN EMAS: Di dalam kalimat 比, DILARANG menggunakan kata keterangan derajat seperti 很, 非常, atau 真 di depan kata sifat! Jika ingin menyatakan "jauh lebih..." atau "sedikit lebih...", tambahkan 得多 / 多了 atau 一点儿 / 一些 SETELAH kata sifat.',
    usageContexts: [
      'Perbandingan Lebih (比): 今天比昨天冷 (Hari ini lebih dingin daripada kemarin).',
      'Menambahkan selisih di belakang Adj: 今天比昨天冷得多 (Hari ini jauh lebih dingin daripada kemarin), 比我高一点儿 (Lebih tinggi sedikit dariku).',
      'Perbandingan Negatif (A tidak se-... B): 今天没有昨天冷 (Hari ini tidak sedingin kemarin).',
      'Perbandingan Setara (A sama dengan B): 这件跟那件一样贵 (Yang ini sama mahalnya dengan yang itu).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '他比我很高。 ❌',
        right: '他比我高。 / 他比我高得多。 ✅',
        reason: 'Jangan pernah menggunakan 很 (hěn) atau 非常 di depan kata sifat dalam kalimat perbandingan 比!'
      }
    ],
    examples: [
      { hanzi: '坐飞机比坐火车快得多。', pinyin: 'Zuò fēijī bǐ zuò huǒchē kuài de duō.', translation: 'Naik pesawat jauh lebih cepat daripada naik kereta api.' },
      { hanzi: '西瓜比苹果大两斤。', pinyin: 'Xīguā bǐ píngguǒ dà liǎng jīn.', translation: 'Semangka lebih berat 1 kg (2 jin) daripada apel.' },
      { hanzi: '姐姐跟妈妈一样漂亮。', pinyin: 'Jiějie gēn māma yíyàng piàoliang.', translation: 'Kakak perempuan sama cantiknya dengan Ibu.' }
    ]
  },
  {
    id: 'hsk2-zhe-guo-yaole',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Partikel Aspek "着" (zhe), "过" (guo), "要...了 / 快...了", & "次 vs 遍"',
    keywords: ['着', '过', '要...了', '快要...了', '次', '遍', 'zhe', 'guo', 'pernah', 'sedang berlangsung'],
    formula: 'V + 着 (Keadaan Berlangsung)  |  V + 过 (Pengalaman "Pernah")  |  快要 / 要 + V + 了 (Segera Terjadi)',
    summary: 'Di HSK 2 terdapat tiga penanda aspek penting selain 了: (1) 着 (zhe) setelah kata kerja menunjukkan keadaan statis yang terus berlangsung ("dalam keadaan...") atau dua aksi beriringan (V1着+V2); (2) 过 (guo) setelah kata kerja menyatakan pengalaman masa lalu ("pernah..."); (3) 要...了 / 快要...了 / 就要...了 menyatakan peristiwa akan segera terjadi dalam waktu dekat.',
    usageContexts: [
      '着 (zhe - Keadaan berlangsung): 门开着呢 (Pintunya sedang dalam keadaan terbuka), 他穿着一件红衣服 (Dia sedang mengenakan baju merah).',
      '过 (guo - Pengalaman pernah): 我去过中国 (Saya pernah pergi ke Tiongkok). Negasinya: 没 + V + 过 (我没吃过北京烤鸭 = Saya belum pernah makan bebek panggang Beijing).',
      '要...了 / 就要...了 (Akan segera): 火车快要来了 (Kereta api sebentar lagi datang). Catatan: Jika ada keterangan waktu spesifik (misal 下个月), gunakan 就要...了, jangan 快要...了!',
      'Perbedaan 次 (cì) vs 遍 (biàn): 次 menghitung frekuensi kejadian biasa ("kali"), sedangkan 遍 menekankan proses utuh dari awal sampai selesai (misal membaca buku/menonton film dari awal sampai tamat).'
    ],
    examples: [
      { hanzi: '她笑着对我说：“你好！”', pinyin: 'Tā xiào zhe duì wǒ shuō: "Nǐ hǎo!"', translation: 'Dia berkata kepadaku sambil tersenyum: "Halo!" (V1着 + V2)' },
      { hanzi: '你看过这个电影吗？我没看过。', pinyin: 'Nǐ kàn guo zhège diànyǐng ma? Wǒ méi kàn guo.', translation: 'Apakah kamu pernah menonton film ini? Saya belum pernah menontonnya.' },
      { hanzi: '这本书我看过三次，但是只从头到尾读了一遍。', pinyin: 'Zhè běn shū wǒ kàn guo sān cì, dànshì zhǐ cóngtóu dào wěi dú le yí biàn.', translation: 'Buku ini pernah saya baca 3 kali (次), tetapi baru saya baca tuntas dari awal sampai akhir sebanyak 1 kali (遍).' }
    ]
  },
  {
    id: 'hsk2-complement-result-direction',
    level: 'HSK 2',
    cefr: 'A2',
    source: 'MandarinMe HSK 2 / AllSet Wiki A2',
    title: 'Pelengkap Hasil (结果补语: 完, 好, 见, 到, 懂, 错) & Larangan "别...了 / 不要...了"',
    keywords: ['结果补语', 'pelengkap hasil', '看完', '听懂', '看见', '找到', '别', '不要', '见 dan 到'],
    formula: 'Kata Kerja + Pelengkap Hasil (完/好/见/到/懂/对/错/清楚)  |  别 / 不要 + Kata Kerja + 了！',
    summary: 'Pelengkap Hasil (Resultative Complement) adalah kata kerja atau kata sifat yang ditempelkan langsung di belakang kata kerja utama untuk menunjukkan hasil akhir dari aksi tersebut. Misalnya 看 (melihat/membaca) + 完 (selesai) = 看完 (selesai membaca); 听 (mendengar) + 懂 (paham) = 听懂 (mendengar dan paham).',
    usageContexts: [
      'Perbedaan 见 (jiàn) vs 到 (dào): 看见 / 听见 menekankan tangkapan indra secara tidak sengaja/alami ("terlihat/terdengar"), sedangkan 看到 / 听到 / 找到 / 买到 menekankan tercapainya tujuan pencarian ("berhasil menemukan/membeli/melihat").',
      'Negasi Pelengkap Hasil: Gunakan 没 (bukan 不) karena hasil belum tercapai: 我没听懂 (Saya tadi tidak paham), 我没看见 (Saya tidak melihatnya).',
      'Kalimat Larangan: 不要 + V + 了 atau 别 + V + 了 ("Jangan ... lagi!"): 别说话了！ (Jangan mengobrol lagi!).'
    ],
    examples: [
      { hanzi: '今天的作业我已经做完了。', pinyin: 'Jīntiān de zuòyè wǒ yǐjīng zuò wán le.', translation: 'PR hari ini sudah selesai saya kerjakan.' },
      { hanzi: '老师说的话你听懂了吗？', pinyin: 'Lǎoshī shuō de huà nǐ tīng dǒng le ma?', translation: 'Apakah kamu memahami perkataan yang diucapkan guru?' },
      { hanzi: '明天要考试，别看电视了！', pinyin: 'Míngtiān yào kǎoshì, bié kàn diànshì le!', translation: 'Besok mau ujian, jangan menonton TV lagi!' }
    ]
  },

  // ============================================================================
  // 3. HSK 3 COMPLETE GRAMMAR (MandarinMe HSK 3 & AllSet Learning B1)
  // ============================================================================
  {
    id: 'hsk3-jiu-vs-cai',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Perbedaan "就" (jiù - Cepat/Awal) vs "才" (cái - Lambat/Baru Saja)',
    keywords: ['就', '才', 'jiu', 'cai', 'jiu dan cai', 'perbedaan jiu dan cai'],
    formula: 'Waktu/Durasi + 就 + V + 了 (Cepat/Mudah)  vs  Waktu/Durasi + 才 + V (Lambat/Terlambat — Tanpa 了!)',
    summary: '就 (jiù) dan 才 (cái) sama-sama diletakkan sebelum kata kerja untuk mengomentari waktu terjadinya suatu peristiwa: 就 menunjukkan bahwa menurut pembicara peristiwa terjadi LEBIH AWAL, CEPAT, atau MUDAH. Sebaliknya, 才 menunjukkan bahwa peristiwa terjadi TERLAMBAT, LAMA, atau SULIT ("baru ... pada jam/setelah..."). ATURAN PENTING: Kalimat dengan 才 (makna terlambat) TIDAK BOLEH diakhiri partikel 了!',
    usageContexts: [
      '就 (Cepat/Awal): 他早上六点就起床了 (Jam 6 pagi dia sudah bangun — cepat sekali).',
      '才 (Lambat/Telat, tanpa 了): 他上午十点才起床 (Jam 10 siang dia baru bangun — kesiangan!).',
      '只要...就... (Asalkan A maka B — syarat cukup) vs 只有...才... (Hanya jika A barulah B — syarat mutlak).'
    ],
    examples: [
      { hanzi: '坐飞机一个小时就到了。', pinyin: 'Zuò fēijī yí ge xiǎoshí jiù dào le.', translation: 'Naik pesawat satu jam saja sudah sampai. (Cepat ➔ 就...了)' },
      { hanzi: '坐火车八个小时才到。', pinyin: 'Zuò huǒchē bā ge xiǎoshí cái dào.', translation: 'Naik kereta api delapan jam baru sampai. (Lama ➔ 才, tanpa 了)' },
      { hanzi: '只有努力学习，才能学好汉语。', pinyin: 'Zhǐyǒu nǔlì xuéxí, cái néng xué hǎo Hànyǔ.', translation: 'Hanya dengan belajar keras, barulah bisa menguasai bahasa Mandarin.' }
    ]
  },
  {
    id: 'hsk3-you-vs-zai-gang-vs-gangcai',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Perbandingan "又 vs 再" (Lagi) & "刚 vs 刚才" (Baru Saja)',
    keywords: ['又', '再', '刚', '刚才', 'you dan zai', 'gang dan gangcai', 'lagi', 'baru saja'],
    formula: '又 + V + 了 (Berulang & Sudah Terjadi)  vs  再 + V (Berulang di Masa Depan)  |  Subjek + 刚 + V  vs  刚才 + Subjek + V',
    summary: 'Dua pasang kata keterangan waktu yang sering membingungkan di HSK 3: (1) 又 (yòu) dan 再 (zài) keduanya berarti "lagi", tetapi 又 digunakan untuk pengulangan yang SUDAH terjadi (atau pasti terjadi seperti hari esok), sedangkan 再 digunakan untuk pengulangan yang AKAN dilakukan di masa depan. (2) 刚 (gāng) adalah adverbia (wajib setelah subjek: S + 刚 + V), sedangkan 刚才 (gāngcái = beberapa menit yang lalu) adalah kata benda waktu (bisa di depan atau belakang subjek).',
    usageContexts: [
      '又 (Sudah terulang): 他昨天来了，今天又来了 (Kemarin dia datang, hari ini datang lagi).',
      '再 (Akan diulang): 请再说一遍 (Tolong ucapkan sekali lagi), 我明天再来 (Besok saya akan datang lagi).',
      '刚 (Adverbia - bisa diikuti durasi): 他刚走五分钟 (Dia baru saja pergi 5 menit).',
      '刚才 (Kata benda waktu - beberapa saat lalu): 刚才谁给你打电话了？ (Tadi baru saja siapa yang meneleponmu?).'
    ],
    examples: [
      { hanzi: '你怎么又迟到了？明天别再迟到了！', pinyin: 'Nǐ zěnme yòu chídào le? Míngtiān bié zài chídào le!', translation: 'Kenapa kamu terlambat lagi (sudah terjadi ➔ 又)? Besok jangan terlambat lagi (masa depan ➔ 再)!' },
      { hanzi: '他刚从北京回来。', pinyin: 'Tā gāng cóng Běijīng huílái.', translation: 'Dia baru saja kembali dari Beijing.' },
      { hanzi: '刚才我去洗手间了，没听见手机响。', pinyin: 'Gāngcái wǒ qù xǐshǒujiān le, méi tīngjiàn shǒujī xiǎng.', translation: 'Barusan tadi saya pergi ke toilet, tidak mendengar HP berbunyi.' }
    ]
  },
  {
    id: 'hsk3-ba-sentence',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Kalimat "把" (把字句 bǎzìjù) — Memperlakukan / Memindahkan Objek',
    keywords: ['把', '把字句', 'kalimat ba', 'penggunaan ba'],
    formula: 'Subjek + (不/没/อยาก/ต้อง) + 把 (bǎ) + Objek Spesifik + Kata Kerja + Pelengkap (了 / 在 / 到 / 给 / 成 / 结果)',
    summary: 'Kalimat 把 (bǎ) digunakan untuk menekankan apa yang dilakukan subjek terhadap suatu objek spesifik hingga objek tersebut berpindah posisi, berubah keadaan, atau selesai ditangani. Aturan ketatnya: (1) Objek setelah 把 harus spesifik/diketahui; (2) Kata kerja TIDAK BOLEH berdiri sendiri, melainkan wajib diikuti elemen pelengkap (seperti 了, 在+Tempat, 到+Tempat, 给+Orang, atau pelengkap hasil); (3) Kata negasi (不/没/别) dan kata kerja bantu (想/要/能) WAJIB diletakkan SEBELUM 把!',
    usageContexts: [
      'Pola 1 (Perubahan Keadaan / Penyelesaian): S + 把 + O + V + Hasil/了 (请把门关上 = Tolong tutup pintunya).',
      'Pola 2 (Perpindahan Lokasi): S + 把 + O + V + 在/到 + Tempat (我把书放在桌子上了 = Saya meletakkan buku di atas meja).',
      'Pola 3 (Perpindahan Kepemilikan): S + 把 + O + V + 给 + Orang (请把护照递给我 = Tolong serahkan paspor itu kepadaku).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我把那本书看。 ❌',
        right: '我把那本书看完了。 ✅',
        reason: 'Kata kerja dalam kalimat 把 tidak boleh telanjang (berdiri sendiri tanpa hasil/pelengkap).'
      },
      {
        wrong: '我把手机没带。 ❌',
        right: '我没把手机带来。 ✅',
        reason: 'Kata negasi 没 / 不 / 别 dan modal wajib diletakkan di DEPAN 把.'
      }
    ],
    examples: [
      { hanzi: '请把空调打开，房间里太热了。', pinyin: 'Qǐng bǎ kōngtiáo dǎkāi, fángjiān lǐ tài rè le.', translation: 'Tolong nyalakan AC-nya, di dalam ruangan terlalu panas.' },
      { hanzi: '我把你的衣服放在衣柜里了。', pinyin: 'Wǒ bǎ nǐ de yīfu fàng zài yīguì lǐ le.', translation: 'Saya sudah menaruh pakaianmu di dalam lemari.' },
      { hanzi: '别忘了把作业交给老师。', pinyin: 'Bié wàng le bǎ zuòyè jiāo gěi lǎoshī.', translation: 'Jangan lupa menyerahkan PR kepada guru.' }
    ]
  },
  {
    id: 'hsk3-bei-passive',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Kalimat Pasif "被" (被字句 bèizìjù) & Perbandingan 叫 / 让',
    keywords: ['被', '被字句', 'kalimat pasif', 'pasif', 'bei', '使', '叫', '让'],
    formula: 'Subjek (Penerima Aksi) + 被 (bèi) + (Pelaku) + Kata Kerja + Pelengkap Hasil / 了',
    summary: 'Kalimat 被 (bèi) adalah bentuk kalimat pasif ("di-... oleh..."), di mana objek penerima aksi diletakkan di awal kalimat sebagai subjek. Sama seperti kalimat 把, kata kerja di akhir kalimat 被 wajib diikuti pelengkap hasil atau 了, dan kata negasi (没) diletakkan sebelum 被. Dalam bahasa lisan sehari-hari, 被 juga sering digantikan oleh 让 (ràng) atau 叫 (jiào), namun dengan 让/叫 pelaku aksinya TIDAK BOLEH dihilangkan.',
    usageContexts: [
      'Dengan pelaku disebutkan: 我的蛋糕被弟弟吃了 (Kue saya dimakan oleh adik laki-laki).',
      'Tanpa menyebut pelaku (langsung 被 + V): 我的自行车被偷了 (Sepeda saya dicuri).'
    ],
    examples: [
      { hanzi: '桌子上的苹果被他吃完了。', pinyin: 'Zhuōzi shang de píngguǒ bèi tā chī wán le.', translation: 'Apel di atas meja sudah habis dimakan olehnya.' },
      { hanzi: '我的杯子被小猫打破了。', pinyin: 'Wǒ de bēizi bèi xiǎomāo dǎpò le.', translation: 'Cangkir saya dipecahkan oleh kucing kecil.' },
      { hanzi: '那本词典被人借走了。', pinyin: 'Nà běn cídiǎn bèi rén jiè zǒu le.', translation: 'Kamus itu sudah dipinjam orang.' }
    ]
  },
  {
    id: 'hsk3-yue-lai-yue-conjunctions',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Pola Bertingkat "越来越..." & "越 A 越 B", serta "一边...一边..." & "除了...以外"',
    keywords: ['越来越', '越A越B', '一边', '除了', '先...再', 'semakin', 'sambil', 'selain'],
    formula: 'Subjek + 越来越 + Adj/Mental V  |  越 + A + 越 + B  |  一边 + V1 + 一边 + V2  |  除了...以外，都/还/也...',
    summary: 'Empat pola kalimat majemuk paling populer di HSK 3: (1) 越来越 (yuèláiyuè) berarti "semakin lama semakin..." (jangan tambahkan 很 di depannya!); (2) 越 A 越 B berarti "semakin A, maka semakin B"; (3) 一边...一边... menyatakan dua aktivitas dilakukan secara bersamaan ("sambil"); (4) 除了...以外 (chúle... yǐwài) berarti "Selain/Kecuali...", jika diikuti 还/也 berarti "Selain A, juga B (inklusif)", jika diikuti 都 berarti "Kecuali A, semuanya... (eksklusif)".',
    usageContexts: [
      '越来越 + Adj: 天气越来越冷了 (Cuaca semakin lama semakin dingin).',
      '越 A 越 B: 雨越下越大 (Hujan semakin turun semakin deras).',
      '一边 V1 一边 V2: 他喜欢一边听音乐一边做作业 (Dia suka mengerjakan PR sambil mendengarkan musik).',
      '除了 A 以外，还/也 B (Termasuk A) vs 除了 A 以外，都 B (Kecuali A).'
    ],
    examples: [
      { hanzi: '你的汉语说得越来越好了！', pinyin: 'Nǐ de Hànyǔ shuō de yuèláiyuè hǎo le!', translation: 'Bahasa Mandarinmu semakin lama semakin bagus!' },
      { hanzi: '这首歌我越听越喜欢。', pinyin: 'Zhè shǒu gē wǒ yuè tīng yuè xǐhuan.', translation: 'Lagu ini semakin saya dengar, semakin saya suka.' },
      { hanzi: '除了汉语以外，他还会说法语。', pinyin: 'Chúle Hànyǔ yǐwài, tā hái huì shuō Fǎyǔ.', translation: 'Selain bahasa Mandarin, dia juga bisa berbicara bahasa Prancis.' }
    ]
  },
  {
    id: 'hsk3-directional-potential-complements',
    level: 'HSK 3',
    cefr: 'B1',
    source: 'MandarinMe HSK 3 / AllSet Wiki B1',
    title: 'Pelengkap Arah Majemuk (趋向补语) & Pelengkap Potensial (可能补语 V+得/不+C)',
    keywords: ['出来', '进去', '回来', '下去', '起来', '得起', '不起', '不下了', '来得及', '来不及', '受不了', 'pelengkap arah', 'pelengkap potensial'],
    formula: 'V + 上/下/进/出/回/过/起 + 来/去  |  (+) V + 得 + Hasil/Arah  |  (-) V + 不 + Hasil/Arah',
    summary: 'Pelengkap Arah Majemuk menggabungkan kata kerja dengan arah gerak (上 naik, 下 turun, 进 masuk, 出 keluar, 回 kembali, 过 menyeberang, 起 bangkit) ditambah 来 (mendekati pembicara) atau 去 (menjauhi pembicara). Sedangkan Pelengkap Potensial menyisipkan 得 (mampu/bisa terjadi) atau 不 (tidak mampu/tidak memungkinkan) di antara Kata Kerja dan Pelengkap Hasil/Arah.',
    usageContexts: [
      'Pelengkap Arah Majemuk: 走进来 (berjalan masuk ke arah sini), 跑出去 (berlari keluar ke sana), 拿出来 (mengeluarkan). Catatan: Jika objeknya adalah TEMPAT, tempat wajib diletakkan SEBELUM 来/去 (Contoh: 走回学校去, bukan 走回去学校!).',
      'Arti Kiasan: V+起来 (mulai melakukan aksi / terlihat: 看起来), V+下去 (melanjutkan aksi yang sudah berjalan: 说下去), 想起来 (teringat kembali).',
      'Pelengkap Potensial: 听得懂 / 听不懂 (bisa/tidak bisa paham), 买得起 / 买不起 (mampu/tidak mampu membeli secara finansial), 吃得完 / 吃不完 (sanggup/tidak sanggup menghabiskan).'
    ],
    examples: [
      { hanzi: '他从房间里走出来了。', pinyin: 'Tā cóng fángjiān lǐ zǒu chūlái le.', translation: 'Dia berjalan keluar dari dalam kamar (mendekati pembicara).' },
      { hanzi: '这么多菜，我们两个人吃不完。', pinyin: 'Zhème duō cài, wǒmen liǎng ge rén chī bu wán.', translation: 'Lauk sebanyak ini, kita berdua tidak sanggup menghabiskannya.' },
      { hanzi: '那辆车太贵了，我买不起。', pinyin: 'Nà liàng chē tài guì le, wǒ mǎi bu qǐ.', translation: 'Mobil itu terlalu mahal, saya tidak mampu membelinya.' }
    ]
  },

  // ============================================================================
  // 4. HSK 4 COMPLETE GRAMMAR (MandarinMe HSK 4 & AllSet Learning B2)
  // ============================================================================
  {
    id: 'hsk4-bujin-erqie-jishi-ye-jinguan',
    level: 'HSK 4',
    cefr: 'B2',
    source: 'MandarinMe HSK 4 / AllSet Wiki B2',
    title: 'Konjungsi HSK 4: 不仅...而且..., 即使...也..., 尽管...但是..., 不管/无论...都..., 既然...就...',
    keywords: ['不仅', '而且', '即使', '尽管', '不管', '无论', '既然', '否则', 'tidak hanya', 'andaikata', 'meskipun', 'tidak peduli', 'karena sudah'],
    formula: '不仅 A，而且 B  |  即使 A，也 B  |  尽管 A，但是/却 B  |  不管/无论 + Tanya/Pilihan，都 B  |  既然 A，就 B',
    summary: 'Rangkaian kata penghubung logis tingkat menengah HSK 4: (1) 不仅...而且... ("Tidak hanya A, tetapi juga B"); (2) 即使...也... ("Andaikata/Sekalipun A terjadi, tetap saja B" — pengandaian); (3) 尽管...但是/却... ("Meskipun faktanya A, namun B" — fakta nyata); (4) 不管 / 无论...都... ("Tidak peduli ..., semuanya/tetap..." — wajib diikuti bentuk pertanyaan/pilihan seperti 多忙, 谁, 去不去); (5) 既然...就... ("Berhubung/Karena fakta A sudah terjadi, maka sebaiknya B").',
    usageContexts: [
      'Perbedaan 即使 (pengandaian hipotesis) vs 尽管 (fakta yang sudah terjadi).',
      'Perbedaan 既然 (fakta sudah diketahui kedua pihak, fokus pada saran/kesimpulan selanjutnya dengan 就) vs 因为 (memberitahukan alasan penyebab).'
    ],
    examples: [
      { hanzi: '她不仅聪明，而且非常努力。', pinyin: 'Tā bùjǐn cōngmíng, érqiě fēicháng nǔlì.', translation: 'Dia tidak hanya pintar, tetapi juga sangat rajin.' },
      { hanzi: '即使明天不下雨，我也不去爬山。', pinyin: 'Jíshǐ míngtiān bú xià yǔ, wǒ yě bú qù páshān.', translation: 'Sekalipun besok tidak turun hujan, saya tetap tidak pergi mendaki gunung.' },
      { hanzi: '不管遇到什么困难，我们都不要放弃。', pinyin: 'Bùguǎn yùdào shénme kùnnan, wǒmen dōu búyào fàngqì.', translation: 'Tidak peduli kesulitan apa pun yang dihadapi, kita sama sekali tidak boleh menyerah.' },
      { hanzi: '既然你已经决定了，那就去做吧。', pinyin: 'Jìrán nǐ yǐjīng juédìng le, nà jiù qù zuò ba.', translation: 'Berhubung kamu sudah memutuskan, kalau begitu lakukanlah.' }
    ]
  },
  {
    id: 'hsk4-lian-dou-bing-nandao-daodi',
    level: 'HSK 4',
    cefr: 'B2',
    source: 'MandarinMe HSK 4 / AllSet Wiki B2',
    title: 'Penekanan Ekstrem & Retoris: 连...都/也..., 并+不/没, 难道, 到底, 竟然, 却',
    keywords: ['连', '连...都', '并', '难道', '到底', '竟然', '却', 'bahkan', 'sama sekali tidak', 'jangan-jangan', 'sebenarnya'],
    formula: '连 + Kasus Ekstrem + 都/也 + V  |  Subjek + 并 + 不/没 + V  |  难道 + Kalimat + (吗)？  |  Subjek + 到底 + Pertanyaan？',
    summary: 'Pola penekanan emosi dan retorika di HSK 4: (1) 连...都/也... ("Bahkan [contoh paling dasar/ekstrem] pun..."); (2) 并 + 不/没 digunakan tepat di depan kata negasi untuk membantah anggapan lawan bicara ("sama sekali tidak / sesungguhnya tidak"); (3) 难道...吗？ membentuk pertanyaan retoris ("Masa iya...? / Jangan-jangan...?"); (4) 到底 digunakan dalam kalimat tanya untuk mendesak jawaban pasti ("Sebenarnya/Pokoknya...?"); (5) 竟然 menyatakan keterkejutan karena di luar dugaan ("ternyata malah..."); (6) 却 adalah adverbia "namun/tetapi" yang wajib diletakkan SETELAH subjek (S + 却 + V).',
    usageContexts: [
      '连 + Objek/Subjek + 都/也 + V: 这个字太难了，连老师也不认识 (Huruf ini terlalu sulit, bahkan guru pun tidak tahu).',
      '并 + 不/没: 这件事并不容易 (Hal ini sesungguhnya sama sekali tidak mudah).',
      'Perbedaan 但是 (konjungsi, sebelum subjek) vs 却 (adverbia, wajib setelah subjek, bahkan bisa digabung menjadi 但是他却...).'
    ],
    examples: [
      { hanzi: '他太忙了，连吃午饭的时间都没有。', pinyin: 'Tā tài máng le, lián chī wǔfàn de shíjiān dōu méiyǒu.', translation: 'Dia terlalu sibuk, bahkan waktu untuk makan siang pun tidak punya.' },
      { hanzi: '其实我并不了解他的家庭情况。', pinyin: 'Qíshí wǒ bìng bù liǎojiě tā de jiātíng qíngkuàng.', translation: 'Sebenarnya saya sama sekali tidak memahami kondisi keluarganya.' },
      { hanzi: '你到底去不去？快告诉我！', pinyin: 'Nǐ dàodǐ qù bu qù? Kuài gàosu wǒ!', translation: 'Kamu sebenarnya jadi pergi atau tidak? Cepat beritahu saya!' },
      { hanzi: '这么简单的问题，他竟然答错了。', pinyin: 'Zhème jiǎndān de wèntí, tā jìngrán dá cuò le.', translation: 'Pertanyaan semudah ini, dia ternyata malah menjawab salah.' }
    ]
  },
  {
    id: 'hsk4-yiwei-yuanlai-benlai-chabuduo-jihu',
    level: 'HSK 4',
    cefr: 'B2',
    source: 'MandarinMe HSK 4 / AllSet Wiki B2',
    title: 'Perbandingan Kosakata HSK 4: 以为 vs 认为, 本来 vs 原来, 差不多 vs 几乎, 往往 vs 经常',
    keywords: ['以为', '本来', '原来', '差不多', '几乎', '往往', '经常', '千万', '恐怕', '对...来说'],
    formula: '以为 (Mengira tapi Salah)  |  原来 (Ternyata!)  |  本来 (Awalnya/Seharusnya)  |  千万 + 别/不要 (Jangan Sampai!)',
    summary: 'Kumpulan perbedaan kata yang sering diujikan di HSK 4: (1) 以为 (yǐwéi) berarti "mengira/menyangka (dan ternyata anggapan itu salah)", sedangkan 认为 (rènwéi) berarti "berpendapat". (2) 原来 (yuánlái) berarti "awalnya" atau "oh, ternyata!" (menyadari fakta baru), sedangkan 本来 (běnlái) berarti "tadinya/awalnya (sebelum rencana berubah)" atau "memang seharusnya". (3) 差不多 dan 几乎 keduanya berarti "hampir", namun 差不多 bisa menjadi predikat sendiri (差不多了), sedangkan 几乎 hanya bisa di depan predikat dan sering diikuti klausa negatif (几乎没人). (4) 往往 menyatakan keteraturan berdasarkan syarat/kondisi masa lalu/kebiasaan tetap, sedangkan 经常 sekadar "sering" dan bisa untuk masa depan.',
    usageContexts: [
      '以为: 我以为你是中国人，原来你是印尼人！ (Saya kira kamu orang Tiongkok, ternyata kamu orang Indonesia!).',
      '千万 (qiānwàn): Selalu diikuti larangan 别 / 不要 ("Ingat baik-baik, jangan sampai..."): 千万别迟到！ (Jangan sampai terlambat!).',
      '对...来说 (duì... láishuō): "Bagi / Menurut sudut pandang...": 对我来说，汉字很有意思 (Bagi saya, karakter Hanzi sangat menarik).'
    ],
    examples: [
      { hanzi: '我以为今天是星期五，原来才星期四。', pinyin: 'Wǒ yǐwéi jīntiān shì xīngqīwǔ, yuánlái cái xīngqīsì.', translation: 'Saya mengira hari ini hari Jumat, ternyata baru hari Kamis.' },
      { hanzi: '我本来打算今天去，但是突然有事去不了了。', pinyin: 'Wǒ běnlái dǎsuàn jīntiān qù, dànshì tūrán yǒu shì qù buliǎo le.', translation: 'Tadinya saya berencana pergi hari ini, tetapi tiba-tiba ada urusan sehingga tidak bisa pergi.' },
      { hanzi: '出门的时候千万别忘了带钥匙。', pinyin: 'Chūmén de shíhou qiānwàn bié wàng le dài yàoshi.', translation: 'Saat keluar rumah, jangan sekali-kali lupa membawa kunci.' }
    ]
  },

  // ============================================================================
  // 5. HSK 5 COMPLETE GRAMMAR (MandarinMe HSK 5 & AllSet Learning C1)
  // ============================================================================
  {
    id: 'hsk5-ningke-bujin-faner-bijing-hekuang',
    level: 'HSK 5',
    cefr: 'C1',
    source: 'MandarinMe HSK 5 / AllSet Wiki C1',
    title: 'Pola Kalimat HSK 5: 宁可...也不..., 反而, 毕竟, 何况, 简直, 幸亏 vs 多亏',
    keywords: ['宁可', '反而', '毕竟', '何况', '简直', '幸亏', '多亏', '何必', '不如', '万一', '一旦', 'lebih memilih', 'malah sebaliknya', 'bagaimanapun juga'],
    formula: '宁可 A，也不 B  |  不但不/没 A，反而 B  |  尚且/连 A，何况 B  |  一旦 + Kondisi，就 + Hasil',
    summary: 'Struktur tata bahasa tingkat lanjut HSK 5: (1) 宁可 A，也不 B ("Lebih memilih menanggung A daripada melakukan B"); (2) 反而 ("bukannya... malah sebaliknya..."); (3) 毕竟 ("bagaimanapun juga / lagi pula" — mengingatkan fakta mendasar); (4) 何况 ("apalagi / terlebih lagi" — dalam perbandingan retoris); (5) 简直 ("benar-benar nyaris seperti / sungguh luar biasa"); (6) 幸亏 & 多亏 ("untung saja / berkat" — 多亏 bisa diikuti objek orang 多亏了你, sedangkan 幸亏 tidak bisa langsung diikuti orang).',
    usageContexts: [
      '宁可...也不... (Pilihan pengorbanan): 我宁可走路去，也不坐他的车 (Saya lebih memilih jalan kaki daripada naik mobilnya).',
      '一旦 (yídàn - "Begitu sekali terjadi / Jika suatu saat"): 机会一旦错过，就不再来了 (Begitu kesempatan terlewat, tidak akan datang lagi).',
      '万一 (wànyī - "Seandainya terjadi hal buruk / Jaga-jaga kalau"): 带上雨伞吧，万一下雨呢？ (Bawalah payung, jaga-jaga kalau turun hujan).'
    ],
    examples: [
      { hanzi: '吃了药以后，他的病不但没好，反而更严重了。', pinyin: 'Chī le yào yǐhòu, tā de bìng búdàn méi hǎo, fǎn\'ér gèng yánzhòng le.', translation: 'Setelah minum obat, penyakitnya bukannya sembuh, malah sebaliknya semakin parah.' },
      { hanzi: '别怪他了，他毕竟还是个孩子。', pinyin: 'Bié guài tā le, tā bìjìng háishì ge háizi.', translation: 'Jangan salahkan dia lagi, bagaimanapun juga dia masih seorang anak kecil.' },
      { hanzi: '多亏了你的帮忙，我们才按时完成了任务。', pinyin: 'Duōkuī le nǐ de bāngmáng, wǒmen cái ànshí wánchéng le rènwu.', translation: 'Berkat bantuanmu, barulah kami dapat menyelesaikan tugas tepat waktu.' }
    ]
  },
  {
    id: 'hsk5-wei-suo-fei-buke-chen-ping',
    level: 'HSK 5',
    cefr: 'C1',
    source: 'MandarinMe HSK 5 / AllSet Wiki C1',
    title: 'Struktur Formal HSK 5: 为...所..., 非...不可, 趁, 凭, 自从...以来, 舍不得, 干脆',
    keywords: ['为...所', '非...不可', '趁', '凭', '以来', '自从', '舍不得', '干脆', '得不得了', '得要命', '极其', '可见'],
    formula: '为 + Pelaku + 所 + V (Pasif Formal)  |  非 + V/Kata Benda + 不可 (Harus/Wajib)  |  趁 + Kesempatan/Waktu + V',
    summary: 'Struktur formal & idiomatik HSK 5: (1) 为...所... adalah bentuk pasif formal dari 被 (contoh: 为人所知 = diketahui oleh orang-orang); (2) 非...不可 adalah negasi ganda yang berarti "mutlak harus / tidak bisa tidak"; (3) 趁 (chèn) berarti "mumpung / selagi"; (4) 凭 (píng) berarti "berdasarkan / mengandalkan"; (5) 舍不得 (shěbude) berarti "tidak tega / sayang untuk meninggalkan atau memakai"; (6) Adj + 得不得了 / 得要命 / 得不行 menyatakan derajat ekstrem ("... setengah mati / luar biasa").',
    usageContexts: [
      '趁 (Mumpung): 趁热喝吧 (Minumlah mumpung masih hangat).',
      '非...不可 (Harus): 这个问题我们非解决不可 (Masalah ini mutlak harus kita selesaikan).',
      '自从...以来 (Sejak ... hingga kini): 自从来到中国以来，我的汉语提高了很多。'
    ],
    examples: [
      { hanzi: '大家深深地为他的精神所感动。', pinyin: 'Dàjiā shēnshēn de wéi tā de jīngshén suǒ gǎndòng.', translation: 'Semua orang sangat tersentuh oleh semangatnya. (Pola pasif formal 为...所...)' },
      { hanzi: '趁现在还年轻，应该多学点儿东西。', pinyin: 'Chèn xiànzài hái niánqīng, yīnggāi duō xué diǎnr dōngxi.', translation: 'Mumpung sekarang masih muda, seharusnya belajar lebih banyak hal.' },
      { hanzi: '这双鞋太贵了，我买了以后一直舍不得穿。', pinyin: 'Zhè shuāng xié tài guì le, wǒ mǎi le yǐhòu yìzhí shěbude chuān.', translation: 'Sepasang sepatu ini terlalu mahal, setelah membelinya saya terus merasa sayang untuk memakainya.' }
    ]
  },

  // ============================================================================
  // 6. HSK 6 COMPLETE GRAMMAR (DigMandarin HSK 6 Guide)
  // ============================================================================
  {
    id: 'hsk6-bufang-mingming-pianpian-eryi',
    level: 'HSK 6',
    cefr: 'C1',
    source: 'DigMandarin HSK 6 Grammar',
    title: 'Adverbia & Partikel HSK 6: 不妨 (bùfáng), 明明 (míngmíng), 偏偏 (piānpiān), 而已 (éryǐ)',
    keywords: ['不妨', '明明', '偏偏', '而已', 'bufang', 'mingming', 'pianpian', 'eryi', 'hsk 6'],
    formula: '不妨 + V (Ada baiknya mencoba)  |  明明 A，却 B (Jelas-jelas A, tapi B)  |  偏偏 + Hal Tak Diinginkan  |  ...而已 (Hanya... saja)',
    summary: 'Empat struktur inti HSK 6 dari DigMandarin: (1) 不妨 (bùfáng) digunakan untuk menyarankan sesuatu secara sopan karena tidak ada ruginya dicoba ("tidak ada salahnya / boleh dicoba"); (2) 明明 (míngmíng) berarti "jelas-jelas / terang-terangan (tetapi kenyataannya bertentangan)"; (3) 偏偏 (piānpiān) menyatakan sesuatu terjadi justru berlawanan dengan harapan ("eh malah / justru..."); (4) 而已 (éryǐ) diletakkan di akhir kalimat (sering berpasangan dengan 只是/不过 di depan) untuk mengecilkan masalah ("hanyalah ... belaka/saja").',
    usageContexts: [
      '不妨 + V: 你不妨试试，可能有惊喜 (Tidak ada salahnya kamu coba, mungkin ada kejutan).',
      '明明 ... 却 ...: 这件事明明是他做的，他却不承认 (Hal ini jelas-jelas dia yang melakukan, tapi dia malah tidak mengaku).',
      '偏偏: 我正要出门，偏偏下起了大雨 (Saat saya baru mau keluar rumah, eh malah turun hujan deras).',
      '只是/不过 ... 而已: 我只是开个玩笑而已 (Saya hanyalah bercanda saja).'
    ],
    examples: [
      { hanzi: '对孩子不妨多夸奖他们。', pinyin: 'Duì háizi bùfáng duō kuājiǎng tāmen.', translation: 'Terhadap anak-anak, tidak ada salahnya lebih sering memuji mereka.' },
      { hanzi: '他明明知道这件事，却假装不知道。', pinyin: 'Tā míngmíng zhīdào zhè jiàn shì, què jiǎzhuāng bù zhīdào.', translation: 'Dia jelas-jelas tahu masalah ini, namun berpura-pura tidak tahu.' },
      { hanzi: '别生气，我只是说说而已。', pinyin: 'Bié shēngqì, wǒ zhǐshì shuōshuo éryǐ.', translation: 'Jangan marah, saya hanya sekadar bicara saja.' }
    ]
  },
  {
    id: 'hsk6-shangxia-renjia-fan-xian-liantong',
    level: 'HSK 6',
    cefr: 'C1',
    source: 'DigMandarin HSK 6 Grammar',
    title: 'Penggunaan HSK 6: 上下, 人家, Kata Satuan 番 (fān), Kalimat Pivot 嫌 (xián), & 连同',
    keywords: ['上下', '人家', '番', '嫌', '连同', 'shangxia', 'renjia', 'fan', 'xian', 'liantong', 'hsk 6'],
    formula: 'Angka + 上下 (Sekitar)  |  一/几 + 番 + 话/努力  |  Subjek + 嫌 + Objek + Sifat (Tidak suka karena...)  |  连同 + Objek + 一起',
    summary: 'Lima poin tata bahasa khusus HSK 6 (DigMandarin): (1) 上下 menyatakan ruang atas-bawah (上下三层), seluruh anggota organisasi/keluarga (全家上下), perkiraan usia/berat (五十岁上下), atau kesetaraan level (不相上下); (2) 人家 [rénjia] berarti "orang lain", "dia/mereka", atau merujuk pada "saya sendiri" dengan nada manja/akrab, sedangkan [rénjiā] berarti "rumah tangga/keluarga"; (3) 番 (fān) adalah kata satuan untuk aksi yang memakan upaya/waktu atau ucapan/pemikiran (一番话, 翻了两番 = berlipat empat); (4) 嫌 (xián) berarti "tidak suka/keberatan terhadap sesuatu karena suatu kekurangan"; (5) 连同 berarti "beserta / bersama-sama dengan".',
    usageContexts: [
      '上下 (Perkiraan): 他的父母都在五十岁上下 (Orang tuanya berusia sekitar 50 tahunan).',
      '番 (Satuan proses/ucapan): 他的一番话，让我突然醒悟 (Untaian perkataannya membuatku tiba-tiba tersadar). 翻番 = berlipat ganda (翻两番 = 2x2 = 4 kali lipat!).',
      '嫌 (Keberatan/Tidak suka): 他嫌这家饭馆太贵，不想去 (Dia keberatan/enggan karena restoran ini terlalu mahal, jadi tidak mau pergi).'
    ],
    examples: [
      { hanzi: '马上过年了，全家上下都很开心。', pinyin: 'Mǎshàng guònián le, quánjiā shàngxià dōu hěn kāixīn.', translation: 'Sebentar lagi Tahun Baru Imlek, seluruh anggota keluarga dari tua hingga muda sangat gembira.' },
      { hanzi: '劝了他几番后，他不再哭了。', pinyin: 'Quàn le tā jǐ fān hòu, tā bú zài kū le.', translation: 'Setelah membujuknya beberapa kali (dengan penuh upaya), dia tidak menangis lagi.' },
      { hanzi: '很多人嫌夏天太热，我却很喜欢。', pinyin: 'Hěn duō rén xián xiàtiān tài rè, wǒ què hěn xǐhuan.', translation: 'Banyak orang tidak menyukai musim panas karena terlalu panas, namun saya justru sangat menyukainya.' }
    ]
  },
  {
    id: 'hsk6-comparisons-and-connectors',
    level: 'HSK 6',
    cefr: 'C2',
    source: 'DigMandarin HSK 6 Grammar',
    title: 'Perbandingan & Konjungsi HSK 6: 不免 vs 未免, 特意 vs 故意, 以致 vs 以至, 固然, 鉴于, 以免, 反之',
    keywords: ['不免', '未免', '时而', '不时', '特意', '故意', '以致', '以至', '固然', '反之', '凡是', '鉴于', '以免', '到...为止'],
    formula: '鉴于 + Fakta Formal，Keputusan  |  ...固然 A，但是/也 B  |  A，以免 + Hal Buruk  |  到 + Waktu/Tahap + 为止',
    summary: 'Perbandingan sinonim & konjungsi tingkat mahir HSK 6: (1) 不免 ("mau tidak mau pasti merasa..." — objektif alami) vs 未免 ("rasanya agak terlalu..." — kritik halus dengan 太/过于); (2) 特意 ("secara khusus meluangkan waktu demi kebaikan") vs 故意 ("dengan sengaja" — sering negatif); (3) 以致 ("sehingga mengakibatkan..." — akibat buruk) vs 以至 ("sampai-sampai/hingga" — perluasan derajat); (4) ...固然...，但是/也... ("Memang benar bahwa A, namun B"); (5) 鉴于 ("Mengingat / Mempertimbangkan fakta bahwa..." — awal kalimat formal); (6) 以免 ("agar terhindar dari / supaya jangan sampai"); (7) 到...为止 ("sampai dengan ... berakhir").',
    usageContexts: [
      '不免 vs 未免: 第一次上台，不免有些紧张 (alami) vs 你这样说未免太不礼貌了 (kritik: agak keterlaluan).',
      '鉴于 (Formal): 鉴于天气恶劣，航班取消 (Mengingat cuaca buruk, penerbangan dibatalkan).',
      '以免 (Pencegahan): 请早点儿出发，以免迟到 (Silakan berangkat lebih awal agar jangan sampai terlambat).'
    ],
    examples: [
      { hanzi: '这是我特意为你买的礼物。', pinyin: 'Zhè shì wǒ tèyì wèi nǐ mǎi de lǐwù.', translation: 'Ini adalah hadiah yang secara khusus saya belikan untukmu.' },
      { hanzi: '工作固然重要，但是身体健康更重要。', pinyin: 'Gōngzuò gùrán zhòngyào, dànshì shēntǐ jiànkāng gèng zhòngyào.', translation: 'Pekerjaan memang benar penting, tetapi kesehatan tubuh jauh lebih penting.' },
      { hanzi: '到目前为止，工程进展得非常顺利。', pinyin: 'Dào mùqián wéizhǐ, gōngchéng jìnzhǎn de fēicháng shùnlì.', translation: 'Sampai saat ini, proyek tersebut berkembang dengan sangat lancar.' }
    ]
  },

  // ============================================================================
  // 7. HSK 7, 8, 9 ADVANCED GRAMMAR (HSK 3.0 Standard — ChineseGrammar.app)
  // ============================================================================
  {
    id: 'hsk7-advanced-structures',
    level: 'HSK 7',
    cefr: 'C2',
    source: 'ChineseGrammar.app HSK 7 Directory',
    title: 'Kumpulan Grammar HSK 7 (Standar HSK 3.0): 历来, 因…故…, 别提有多X了, 不由得, 反倒, 即, 极为, 继而',
    keywords: ['hsk 7', '历来', '因...故', '必定', '别提有多', '比起...来', '不由得', '除此之外', '反倒', '即', '极为', '继而', '栋', '粒', '枚', '则', '盏'],
    formula: 'Subjek + 历来 + Predikat  |  因 + Sebab，故 + Akibat  |  别提 + (有) + 多 + Adj + 了  |  Kejadian 1，继而 + Kejadian 2',
    summary: 'Pada standar HSK 3.0 terbaru, Level 7 melatih ekspresi wacana formal, penanda sikap bernuansa, dan kata satuan sastra: (1) 历来 (lìlái = sejak dulu kala selalu); (2) 因…，故… (karena ..., maka ... — gaya formal/tertulis); (3) 别提（有）多 X 了 ("jangan tanya lagi betapa X-nya!" — derajat sangat tinggi); (4) 比起…来 ("dibandingkan dengan..."); (5) 不由得 ("tak kuasa menahan diri untuk..."); (6) 反倒 ("bukannya begitu, justru malah..."); (7) 即 (jí = langsung segera / yaitu); (8) 极为 (jíwéi = sangat/amat dalam ragam formal); (9) 继而 ("kemudian berlanjut dengan..."); (10) Kata satuan tingkat lanjut: 栋 (gedung), 粒 (butir beras/obat), 枚 (medali/koin/roket), 则 (berita/fabel), 盏 (lampu).',
    usageContexts: [
      '别提有多 + Adj + 了: 听到这个好消息，大家别提有多高兴了！ (Mendengar kabar baik ini, jangan ditanya lagi betapa senangnya semua orang!).',
      '不由得 + Reaksi spontan: 看到这一幕，她不由得流下了眼泪 (Melihat adegan ini, dia tak kuasa menahan tetesan air mata).',
      '极为 + Kata Sifat (2 suku kata): 这项研究具有极为重要的意义 (Penelitian ini memiliki makna yang amat sangat penting).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我们换个角度考虑不妨。 ❌',
        right: '我们不妨换个角度考虑。 ✅',
        reason: 'Adverbia 不妨 wajib diletakkan SEBELUM kata kerja/aksi yang disarankan, bukan di akhir kalimat.'
      }
    ],
    examples: [
      { hanzi: '中国历来重视教育。', pinyin: 'Zhōngguó lìlái zhòngshì jiàoyù.', translation: 'Tiongkok sejak dahulu kala selalu mementingkan pendidikan.' },
      { hanzi: '比起大城市来，我更喜欢安静的乡村。', pinyin: 'Bǐqǐ dà chéngshì lái, wǒ gèng xǐhuan ānjìng de xiāngcūn.', translation: 'Dibandingkan dengan kota besar, saya lebih menyukai pedesaan yang tenang.' },
      { hanzi: '他先是愣了一下，继而哈哈大笑起来。', pinyin: 'Tā xiān shì lèng le yíxià, jì\'ér hāhā dà xiào qǐlái.', translation: 'Dia awalnya tertegun sejenak, kemudian berlanjut tertawa terbahak-bahak.' }
    ]
  },
  {
    id: 'hsk8-advanced-structures',
    level: 'HSK 8',
    cefr: 'C2',
    source: 'ChineseGrammar.app HSK 8 Directory',
    title: 'Kumpulan Grammar HSK 8 (Standar HSK 3.0): 巴不得, 按说, 频频, 一连, 爱A不A, 白白, 当着…的面, 怪不得, 凡',
    keywords: ['hsk 8', '巴不得', '按说', '频频', '一连', '爱A不A', '白白', '半A半B', '别提了', '别管', '当着', '东A西B', '凡', '非A非B', '怪不得'],
    formula: 'Subjek + 巴不得 + Situasi Diinginkan  |  按说 + Ekspektasi，可是 + Fakta Berlawanan  |  当着 + Orang + 的面 + V',
    summary: 'Materi HSK 8 (ChineseGrammar.app) berfokus pada penilaian retrospektif, inferensi, dan struktur idiomatik: (1) 巴不得 (bābude = sangat berharap/ingin sekali sesuatu terjadi); (2) 按说 (ànshuō = "secara logika/normalnya seharusnya..., tetapi..."); (3) 频频 (pínpín = berulang kali dalam waktu singkat, misal 频频点头); (4) 一连 (yìlián = berturut-turut tanpa putus, misal 一连三天); (5) 爱 V 不 V ("mau V atau tidak, terserah/masa bodoh": 爱信不信); (6) 白白 ("sia-sia / percuma"); (7) 当着…的面 ("di hadapan langsung seseorang"); (8) 怪不得 ("pantas saja!"); (9) 凡 ("setiap / semua yang termasuk dalam kategori...").',
    usageContexts: [
      '巴不得: 我巴不得明天就放假 (Saya sangat berharap besok langsung libur).',
      '按说: 按说现在已经立秋了，可是天气还是这么热 (Secara normalnya sekarang sudah masuk musim gugur, tetapi cuaca masih saja sepanas ini).',
      '怪不得 (Menyadari penyebab): 原来你是北方人，怪不得普通话说得这么标准！ (Ternyata kamu orang Tiongkok Utara, pantas saja bahasa Mandarinnya sangat standar!).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我不得巴明天就放假。 ❌',
        right: '我巴不得明天就放假。 ✅',
        reason: 'Frasa tetapnya adalah 巴不得 (bābude) dan diletakkan tepat setelah subjek sebelum klausa harapan.'
      }
    ],
    examples: [
      { hanzi: '他一连工作了十几个小时，累得不行。', pinyin: 'Tā yìlián gōngzuò le shí jǐ ge xiǎoshí, lèi de bùxíng.', translation: 'Dia bekerja berturut-turut selama belasan jam hingga lelah luar biasa.' },
      { hanzi: '你不应该当着大家的面批评他。', pinyin: 'Nǐ bù yīnggāi dāngzhe dàjiā de miàn pīpíng tā.', translation: 'Kamu tidak seharusnya mengkritik dia di hadapan semua orang.' },
      { hanzi: '凡年满十八周岁的公民，都有选举权。', pinyin: 'Fán nián mǎn shíbā zhōusuì de gōngmín, dōu yǒu xuǎnjǔquán.', translation: 'Setiap warga negara yang telah genap berusia 18 tahun semuanya memiliki hak pilih.' }
    ]
  },
  {
    id: 'hsk9-advanced-structures',
    level: 'HSK 9',
    cefr: 'C2',
    source: 'ChineseGrammar.app HSK 9 Directory',
    title: 'Kumpulan Grammar HSK 9 (Standar HSK 3.0): 鉴于, 莫非, …而…则…, A+Adj+于+B, 被…所…, 别说…连…, 把+施事+V+了',
    keywords: ['hsk 9', '鉴于', '莫非', '而...则', '被...所', '别说...连', '此后', '起初...才', '个不停', '个没完', '固然...也', '何苦', '话是这么说'],
    formula: '鉴于 + Kondisi Formal，Keputusan  |  莫非 + Klausa (+ 不成)？  |  Topik A + Predikat A，而 + Topik B + 则 + Predikat B  |  A + Adj + 于 + B',
    summary: 'Level tertinggi HSK 9 mencakup penghubung ragam sangat formal, sastra klasik dalam bahasa modern, dan struktur kausatif khusus: (1) 鉴于 (jiànyú = mengingat/menimbang fakta formal — tidak boleh ditambah 了!); (2) 莫非 (mòfēi = "jangan-jangan / mungkinkah...?" untuk tebakan bernada heran); (3) …而…则… (membandingkan dua topik secara kontras dan formal: "A adalah ..., sedangkan B sebaliknya adalah ..."); (4) A + Kata Sifat + 于 + B (perbandingan formal setara 比: 高于 lebih tinggi dari, 大于 lebih besar dari, 优于 lebih unggul dari); (5) 把 + Pelaku/Objek + V Intransitif + 了 (struktur 把 yang menyatakan kehilangan/kemalangan tak sengaja, misal 把父亲病死了); (6) 别说 A，连 B 也/都... ("Jangankan A, bahkan B sekalipun..."); (7) V + 个 + 不停 / 没完 (melakukan aksi terus-menerus tanpa henti).',
    usageContexts: [
      '鉴于 (Formal): 鉴于天气恶劣，活动将延期 (Mengingat cuaca ekstrem, kegiatan akan ditunda).',
      '…而…则… (Kontras formal): 南方多雨，而北方则比较干燥 (Wilayah selatan banyak hujan, sedangkan wilayah utara cenderung kering).',
      'V + 个不停: 外面的雨下个不停 (Hujan di luar turun terus tanpa henti).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '鉴于了天气恶劣，活动将延期。 ❌',
        right: '鉴于天气恶劣，活动将延期。 ✅',
        reason: '鉴于 adalah preposisi/konjungsi formal ("mengingat"), bukan kata kerja aksi, sehingga TIDAK BOLEH diikuti partikel aspek 了.'
      }
    ],
    examples: [
      { hanzi: '鉴于天气恶劣，活动将延期举行。', pinyin: 'Jiànyú tiānqì èliè, huódòng jiāng yánqī jǔxíng.', translation: 'Mengingat cuaca yang buruk, kegiatan akan ditunda pelaksanaannya.' },
      { hanzi: '他今天没来上班，莫非是生病了？', pinyin: 'Tā jīntiān méi lái shàngbān, mòfēi shì shēngbìng le?', translation: 'Dia hari ini tidak masuk kerja, jangan-jangan sedang sakit?' },
      { hanzi: '别说一百块，我身上连十块钱都没有。', pinyin: 'Biéshuō yìbǎi kuài, wǒ shēnshang lián shí kuài qián dōu méiyǒu.', translation: 'Jangankan seratus yuan, di badanku bahkan sepuluh yuan pun tidak ada.' }
    ]
  },

  // ============================================================================
  // 8. ALLSET LEARNING CHINESE GRAMMAR WIKI CORE SYSTEM (CEFR A1 - C1)
  // ============================================================================
  {
    id: 'allset-complements-overview',
    level: 'AllSet Wiki (A1-C1)',
    cefr: 'B1',
    source: 'AllSet Learning Chinese Grammar Wiki',
    title: 'Sistem Lengkap 6 Pelengkap Kata Kerja Mandarin (补语 Bǔyǔ — AllSet Grammar Wiki)',
    keywords: ['补语', 'buyu', 'pelengkap', 'complement', 'allset', '정도补语', '结果补语', '趋向补语', '可能补语', '时量补语', '动量补语'],
    formula: '1. Hasil (V+完) | 2. Arah (V+出来) | 3. Potensial (V+得/不+完) | 4. Derajat (V+得+很+Adj) | 5. Durasi (V+了+Waktu) | 6. Frekuensi (V+了+次)',
    summary: 'Menurut AllSet Learning Chinese Grammar Wiki, salah satu fondasi terpenting tata bahasa Mandarin dari A2 hingga C1 adalah Sistem Pelengkap (补语 Bǔyǔ) yang muncul SETELAH kata kerja untuk menjelaskan hasil, arah, kemungkinan, derajat kualitas, durasi waktu, atau frekuensi tindakan.',
    usageContexts: [
      '1. Result Complement (结果补语): V + 完/好/到/见/懂/清楚/错 (Contoh: 吃完 = selesai makan, 听懂 = paham mendengar).',
      '2. Direction Complement (趋向补语): V + 来/去 atau V + 上/下/进/出/回/过/起 + 来/去 (Contoh: 拿出来 = mengeluarkan).',
      '3. Potential Complement (可能补语): V + 得/不 + Result/Direction (Contoh: 看不清楚 = tidak bisa melihat dengan jelas, 吃不下 = tidak sanggup makan lagi).',
      '4. Degree/State Complement (程度/状态补语): V + 得 + 很 + Adj (Contoh: 说得很好 = berbicara dengan sangat baik). Jika ada objek, ulangi kata kerjanya: 他说汉语说得很好。',
      '5. Duration Complement (时量补语): V + 了 + Durasi Waktu (Contoh: 学了两年汉语 = sudah belajar Mandarin selama 2 tahun).',
      '6. Quantity/Incidence Complement (动量补语): V + 了 + Angka + 次/遍/趟/下 (Contoh: 去过三次北京 = pernah ke Beijing 3 kali).'
    ],
    examples: [
      { hanzi: '他说中文说得非常流利。', pinyin: 'Tā shuō Zhōngwén shuō de fēicháng liúlì.', translation: 'Dia berbicara bahasa Mandarin dengan sangat lancar. (Degree Complement dengan pengulangan kata kerja)' },
      { hanzi: '黑板上的字太小，我看不清楚。', pinyin: 'Hēibǎn shang de zì tài xiǎo, wǒ kàn bu qīngchu.', translation: 'Tulisan di papan tulis terlalu kecil, saya tidak bisa melihatnya dengan jelas. (Potential Complement)' },
      { hanzi: '我每天晚上看一个小时书。', pinyin: 'Wǒ měitiān wǎnshang kàn yí ge xiǎoshí shū.', translation: 'Saya setiap malam membaca buku selama satu jam. (Duration Complement disisipkan di antara Verb-Object)' }
    ]
  },
  {
    id: 'allset-separable-verbs-aspect',
    level: 'AllSet Wiki (A1-C1)',
    cefr: 'B1',
    source: 'AllSet Learning Chinese Grammar Wiki',
    title: 'Kata Kerja Pisah-Gabung (离合词 Líhécí: 见面, 睡觉, 洗澡, 帮忙, 结婚, 生气)',
    keywords: ['离合词', 'liheci', 'kata kerja pisah', 'separable verbs', '见面', '睡觉', '洗澡', '帮忙', '结婚', '生气', '毕业', '游泳'],
    formula: 'A + (了 / 过 / 着 / Durasi / Frekuensi / Objek) + B  —  DILARANG menaruh Objek setelah AB!',
    summary: 'Dalam AllSet Learning Grammar Wiki (A2–B2), Kata Kerja Pisah-Gabung (离合词 Líhécí) adalah kata kerja 2 suku kata yang secara struktur terdiri dari Kata Kerja (A) + Objek Bawaan (B), seperti 见面 (bertemu), 睡觉 (tidur), 帮忙 (membantu), 结婚 (menikah), 生气 (marah). Karena suku kata kedua (B) sudah merupakan objek, kata-kata ini TIDAK BOLEH langsung diikuti objek lagi di belakangnya, dan partikel (了/过), durasi, atau reduplikasi harus DISISIPKAN di tengah-tengah antara A dan B!',
    usageContexts: [
      'Menyisipkan 了 / 过 / Durasi: 睡了八个小时觉 (tidur 8 jam), 见了一次面 (bertemu sekali), 帮了一个大忙 (membantu bantuan besar).',
      'Reduplikasi AB menjadi AAB: 见见面 (bertemu sebentar), 游游泳 (berenang sebentar), 散散步 (jalan-jalan santai).',
      'Menambahkan objek orang menggunakan preposisi (跟/和/生...的气): 我跟他见面 (Bukan: 我见面他 ❌!), 别生我的气 (Bukan: 别生气我 ❌!).'
    ],
    boundariesAndMistakes: [
      {
        wrong: '我想明天见面你。 ❌',
        right: '我想明天跟你见面。 ✅',
        reason: '见面 adalah kata kerja pisah-gabung (见 = bertemu, 面 = muka), sehingga objek orang wajib diperkenalkan dengan 跟/和 di depan 见面.'
      },
      {
        wrong: '你可以帮忙我吗？ ❌',
        right: '你可以帮我一个忙吗？ / 你可以帮我吗？ ✅',
        reason: '帮忙 sudah memiliki objek 忙, sehingga tidak boleh langsung diikuti 我. Gunakan 帮我 atau 帮我的忙.'
      }
    ],
    examples: [
      { hanzi: '昨天我睡了八个小时觉。', pinyin: 'Zuótiān wǒ shuì le bā ge xiǎoshí jiào.', translation: 'Kemarin saya tidur selama delapan jam. (Durasi disisipkan di antara 睡 dan 觉)' },
      { hanzi: '我们周末去公园散散步、聊聊天吧。', pinyin: 'Wǒmen zhōumò qù gōngyuán sànsan bù, liáoliao tiān ba.', translation: 'Mari akhir pekan kita pergi ke taman untuk jalan-jalan santai dan mengobrol.' },
      { hanzi: '她上个月刚跟男朋友结婚。', pinyin: 'Tā shàng ge yuè gāng gēn nánpéngyou jiéhūn.', translation: 'Dia bulan lalu baru saja menikah dengan pacarnya.' }
    ]
  },
  ...HSK1_MAPPED_KB
];

export function searchLidiaGrammarKB(query: string): LidiaGrammarEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return LIDIA_GRAMMAR_KB;

  const scored = LIDIA_GRAMMAR_KB.map((entry) => {
    let score = 0;
    if (entry.title.toLowerCase().includes(q)) score += 10;
    if (entry.level.toLowerCase().includes(q)) score += 8;
    if (entry.formula.toLowerCase().includes(q)) score += 6;
    if (entry.summary.toLowerCase().includes(q)) score += 4;

    for (const kw of entry.keywords) {
      const kwLower = kw.toLowerCase();
      if (q.includes(kwLower) || kwLower.includes(q)) {
        score += 12;
      }
    }

    for (const ex of entry.examples) {
      if (
        ex.hanzi.toLowerCase().includes(q) ||
        ex.pinyin.toLowerCase().includes(q) ||
        ex.translation.toLowerCase().includes(q)
      ) {
        score += 3;
      }
    }

    return { entry, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.entry);
}

export function formatGrammarForPrompt(entries: LidiaGrammarEntry[]): string {
  if (entries.length === 0) return '';
  return entries
    .slice(0, 4)
    .map((e) => {
      const mistakes = (e.boundariesAndMistakes || [])
        .map((m) => `  - SALAH: ${m.wrong} -> BENAR: ${m.right} (${m.reason})`)
        .join('\n');
      const exs = e.examples
        .map((ex) => `  - ${ex.hanzi} (${ex.pinyin}) = "${ex.translation}"`)
        .join('\n');
      return `[REFERENSI GRAMMAR RESMI - ${e.level} (${e.cefr}) | Sumber: ${e.source}]
Judul: ${e.title}
Rumus: ${e.formula}
Penjelasan: ${e.summary}
Konteks Penggunaan:
${e.usageContexts.map((u) => `  * ${u}`).join('\n')}
${mistakes ? `Batasan & Koreksi Kesalahan:\n${mistakes}\n` : ''}Contoh Kalimat:
${exs}`;
    })
    .join('\n\n---\n\n');
}

export function formatGrammarForReply(entry: LidiaGrammarEntry): string {
  const contexts = entry.usageContexts.map((c) => `• ${c}`).join('\n');
  const mistakes =
    entry.boundariesAndMistakes && entry.boundariesAndMistakes.length > 0
      ? `\n\n⚠️ **Batasan & Koreksi Kesalahan Umum (Respect the Boundary):**\n` +
        entry.boundariesAndMistakes
          .map((m) => `• ${m.wrong} ➔ **${m.right}**\n  *(Alasan: ${m.reason})*`)
          .join('\n')
      : '';
  const examples = entry.examples
    .map((ex) => `• **${ex.hanzi}** (${ex.pinyin})\n  *Artinya: "${ex.translation}"*`)
    .join('\n');

  return `你好！(Nǐ hǎo!) Berikut penjelasan lengkap dari **Lidia Laoshi (丽迪娅老师)** mengenai **${entry.title}** (*${entry.level} • CEFR ${entry.cefr} — Sumber: ${entry.source}*):

📐 **Rumus / Pola Struktur:**
\`${entry.formula}\`

📖 **Penjelasan Inti:**
${entry.summary}

🎯 **Konteks Penggunaan (Choose the Right Context):**
${contexts}${mistakes}

💬 **Contoh Kalimat Lengkap:**
${examples}

加油！(Jiāyóu! — Semangat!) Coba buat 1 kalimat menggunakan pola di atas, nanti Lidia Laoshi bantu periksa ya!`;
}
