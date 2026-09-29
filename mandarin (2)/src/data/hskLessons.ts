import { HSKLesson } from '../types';
import { getGrammarByChapter } from './hskGrammarComplete';

const RAW_HSK_LESSONS: HSKLesson[] = [
  {
    id: 1,
    title: "你好",
    pinyinTitle: "Nǐ hǎo",
    translation: "Halo / Salam Dasar",
    dialogues: [
      [
        { speaker: "A", hanzi: "你好！", pinyin: "Nǐ hǎo!", translation: "Halo!" },
        { speaker: "B", hanzi: "你好！", pinyin: "Nǐ hǎo!", translation: "Halo!" }
      ],
      [
        { speaker: "A", hanzi: "您好！", pinyin: "Nín hǎo!", translation: "Halo (Sopan)!" },
        { speaker: "B", hanzi: "你们好！", pinyin: "Nǐmen hǎo!", translation: "Halo semuanya / kalian!" }
      ],
      [
        { speaker: "A", hanzi: "对不起！", pinyin: "Duìbuqǐ!", translation: "Maaf!" },
        { speaker: "B", hanzi: "没关系！", pinyin: "Méi guānxi!", translation: "Tidak apa-apa / Tidak masalah!" }
      ]
    ],
    vocab: [
      { hanzi: "你", pinyin: "nǐ", translation: "kamu (tunggal)", pos: "pron.", example: "你好！" },
      { hanzi: "好", pinyin: "hǎo", translation: "baik, bagus", pos: "adj.", example: "你好！" },
      { hanzi: "您", pinyin: "nín", translation: "Anda (sopan)", pos: "pron.", example: "您好！" },
      { hanzi: "你们", pinyin: "nǐmen", translation: "kalian", pos: "pron.", example: "你们好！" },
      { hanzi: "对不起", pinyin: "duìbuqǐ", translation: "maaf", pos: "v.", example: "对不起！" },
      { hanzi: "没关系", pinyin: "méi guānxi", translation: "tidak apa-apa", pos: "phrase", example: "没关系！" }
    ],
    grammar: [
      {
        rule: "Salam '你好' dan '您好'",
        desc: "你好 digunakan untuk menyapa teman sebaya atau yang lebih muda. Anda (您) digunakan untuk menunjukkan rasa hormat kepada guru, orang tua, atau atasan.",
        example: "您好，老师！(Halo, Guru!)"
      },
      {
        rule: "Meminta Maaf & Membalasnya",
        desc: "对不起 (Maaf) dijawab secara lazim dan santun dengan 没关系 (Tidak apa-apa / Bukan masalah besar).",
        example: "A: 对不起！ B: 没关系！"
      }
    ],
    phoneticsInfo: [
      "Inisial (声母 1): b, p, m, f, d, t, n, l, g, k, h, j, q, x",
      "Final (韵母 1): i, u, ü, er, a, ia, ua, o, uo, e, ie, üe, ai, uai, ei, uei (ui), ao, iao",
      "Tone Sandhi 3+3: Dua nada ke-3 berurutan dibaca menjadi nada ke-2 + nada ke-3 (contoh: nǐ + hǎo dibaca ní hǎo)"
    ],
    charactersInfo: {
      strokes: ["一 (héng - horizontal)", "丨 (shù - vertical)", "丿 (piě - left-falling)", "丶 (diǎn - dot)", "㇏ (nà - right-falling)"],
      characters: ["一", "二", "三", "十", "八", "六"]
    },
    quiz: [
      {
        q: "Bagaimana cara membalas ucapan '对不起' (duìbuqǐ)?",
        options: ["谢谢你", "没关系", "再见", "你好"],
        answer: 1,
        explanation: "没关系 (méi guānxi) berarti 'tidak apa-apa' dan merupakan jawaban tepat untuk 对不起."
      },
      {
        q: "Kapan kata '您' (nín) sebaiknya digunakan?",
        options: ["Kepada teman sebaya", "Kepada adik kecil", "Kepada guru atau orang yang dihormati", "Saat memesan makanan"],
        answer: 2,
        explanation: "您 adalah sapaan 'Anda' yang sangat sopan dalam budaya Mandarin."
      }
    ]
  },
  {
    id: 2,
    title: "谢谢你",
    pinyinTitle: "Xièxie nǐ",
    translation: "Terima Kasih",
    dialogues: [
      [
        { speaker: "A", hanzi: "谢谢！", pinyin: "Xièxie!", translation: "Terima kasih!" },
        { speaker: "B", hanzi: "不谢！", pinyin: "Bú xiè!", translation: "Sama-sama / Jangan sungkan!" }
      ],
      [
        { speaker: "A", hanzi: "谢谢你！", pinyin: "Xièxie nǐ!", translation: "Terima kasih kepadamu!" },
        { speaker: "B", hanzi: "不客气！", pinyin: "Bú kèqi!", translation: "Sama-sama!" }
      ],
      [
        { speaker: "A", hanzi: "再见！", pinyin: "Zàijiàn!", translation: "Sampai jumpa!" },
        { speaker: "B", hanzi: "再见！", pinyin: "Zàijiàn!", translation: "Sampai jumpa!" }
      ]
    ],
    vocab: [
      { hanzi: "谢谢", pinyin: "xièxie", translation: "terima kasih", pos: "v.", example: "谢谢老师！" },
      { hanzi: "不", pinyin: "bù", translation: "tidak, bukan", pos: "adv.", example: "不谢。" },
      { hanzi: "不客气", pinyin: "bú kèqi", translation: "sama-sama", pos: "phrase", example: "不客气！" },
      { hanzi: "再见", pinyin: "zàijiàn", translation: "sampai jumpa", pos: "v.", example: "明天再见！" }
    ],
    grammar: [
      {
        rule: "Membalas Ucapan Terima Kasih",
        desc: "Ucapan 谢谢 (Terima kasih) lazimnya dibalas dengan 不谢 atau 不客气 (Sama-sama).",
        example: "A: 谢谢你！ B: 不客气！"
      },
      {
        rule: "Perubahan Nada '不' (Tone Sandhi)",
        desc: "Kata '不' secara alami bernada ke-4 (bù). Namun bila diikuti suku kata bernada ke-4, '不' berubah menjadi nada ke-2 (bú). Contoh: bú kèqi, bú shì, bú kàn.",
        example: "不 (bù) + 客气 (kèqi) -> 不客气 (bú kèqi)"
      }
    ],
    phoneticsInfo: [
      "Inisial (声母 2): zh, ch, sh, r, z, c, s",
      "Final (韵母 2): ou, iou (iu), an, ian, uan, üan, en, in, uen (un), ün, ang, iang, uang, eng, ing, ueng, ong, iong",
      "Nada Netral (轻声): Suku kata kedua dibaca ringan dan pendek (contoh: māma, bàba, xièxie, zhuōzi)"
    ],
    charactersInfo: {
      strokes: ["㇇ (héngzhé)", "𠄌 (shùzhé)", "亅 (shùgōu)"],
      characters: ["口", "见", "山", "小", "不"]
    },
    quiz: [
      {
        q: "Bagaimana cara membaca '不' pada kata '不客气'?",
        options: ["bù (nada 4)", "bú (nada 2)", "bǔ (nada 3)", "bu (netral)"],
        answer: 1,
        explanation: "Karena kèqi berawalan nada 4, maka bù berubah nada menjadi bú (nada 2)."
      },
      {
        q: "Arti dari ungkapan '再见' (zàijiàn) adalah...",
        options: ["Terima kasih", "Sampai jumpa", "Silakan", "Maafkan saya"],
        answer: 1,
        explanation: "再见 secara harfiah berarti 'bertemu lagi' atau 'sampai jumpa'."
      }
    ]
  },
  {
    id: 3,
    title: "你叫什么名字",
    pinyinTitle: "Nǐ jiào shénme míngzi",
    translation: "Siapa Namamu?",
    dialogues: [
      [
        { speaker: "A", hanzi: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", translation: "Siapa namamu?" },
        { speaker: "B", hanzi: "我叫李月。", pinyin: "Wǒ jiào Lǐ Yuè.", translation: "Nama saya Li Yue." }
      ],
      [
        { speaker: "A", hanzi: "你是老师吗？", pinyin: "Nǐ shì lǎoshī ma?", translation: "Apakah kamu seorang guru?" },
        { speaker: "B", hanzi: "我不是老师，我是学生。", pinyin: "Wǒ bú shì lǎoshī, wǒ shì xuésheng.", translation: "Saya bukan guru, saya murid/siswa." }
      ],
      [
        { speaker: "A", hanzi: "你是中国人吗？", pinyin: "Nǐ shì Zhōngguó rén ma?", translation: "Apakah kamu orang Cina?" },
        { speaker: "B", hanzi: "我不是中国人，我是美国人。", pinyin: "Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.", translation: "Saya bukan orang Cina, saya orang Amerika." }
      ]
    ],
    vocab: [
      { hanzi: "叫", pinyin: "jiào", translation: "dipanggil, bernama", pos: "v.", example: "我叫大卫。" },
      { hanzi: "什么", pinyin: "shénme", translation: "apa", pos: "pron.", example: "这是什么？" },
      { hanzi: "名字", pinyin: "míngzi", translation: "nama", pos: "n.", example: "你的名字很好听。" },
      { hanzi: "我", pinyin: "wǒ", translation: "saya, aku", pos: "pron.", example: "我是学生。" },
      { hanzi: "是", pinyin: "shì", translation: "adalah / iya", pos: "v.", example: "他是老师。" },
      { hanzi: "老师", pinyin: "lǎoshī", translation: "guru", pos: "n.", example: "李老师好！" },
      { hanzi: "吗", pinyin: "ma", translation: "apakah (partikel tanya)", pos: "part.", example: "你好吗？" },
      { hanzi: "学生", pinyin: "xuésheng", translation: "siswa, murid", pos: "n.", example: "我们是学生。" },
      { hanzi: "人", pinyin: "rén", translation: "orang", pos: "n.", example: "中国人。" },
      { hanzi: "中国", pinyin: "Zhōngguó", translation: "Tiongkok / Cina", pos: "prop. n.", example: "中国很大。" },
      { hanzi: "美国", pinyin: "Měiguó", translation: "Amerika Serikat", pos: "prop. n.", example: "美国人。" }
    ],
    grammar: [
      {
        rule: "Kata Tanya '什么' (shénme)",
        desc: "Diletakkan tepat di posisi informasi yang ingin ditanyakan. Pola: Subjek + 叫 + 什么 + 名字？",
        example: "你叫什么名字？(Siapa namamu?)"
      },
      {
        rule: "Kalimat Penegasan dengan '是' (shì)",
        desc: "Pola: Subjek + 是 + Objek. Bentuk ingkarnya menggunakan '不是' (bú shì).",
        example: "我不是老师，我是学生。(Saya bukan guru, saya murid.)"
      },
      {
        rule: "Pertanyaan Ya/Tidak dengan '吗' (ma)",
        desc: "Tambahkan partikel 吗 di akhir kalimat pernyataan untuk mengubahnya menjadi kalimat tanya.",
        example: "你是中国人吗？(Apakah kamu orang Cina?)"
      }
    ],
    phoneticsInfo: [
      "Perbedaan Konsonan: j, q, x vs z, c, s",
      "Vokal u dan ü (bulatkan bibir tanpa menggerakkan lidah)",
      "Aturan Pinyin: j, q, x + ü ditulis ju, qu, xu (tanpa titik dua di atas u)"
    ],
    charactersInfo: {
      strokes: ["横折钩 (héngzhégōu)", "卧钩 (wògōu)"],
      characters: ["月", "心", "中", "人"]
    },
    quiz: [
      {
        q: "Bagaimana menyusun 'Apakah kamu seorang murid?' dalam bahasa Mandarin?",
        options: ["你是学生吗？", "你叫学生吗？", "他是学生吗？", "你有学生吗？"],
        answer: 0,
        explanation: "Pola kalimat penegasan + 吗: Subjek (你) + 是 + Objek (学生) + 吗？"
      },
      {
        q: "Kata '什么' (shénme) berfungsi untuk menanyakan...",
        options: ["Waktu", "Apa / Nama benda", "Di mana", "Berapa banyak"],
        answer: 1,
        explanation: "什么 berarti 'apa' dan digunakan pada '什么名字' (nama apa / siapa nama)."
      }
    ]
  },
  {
    id: 4,
    title: "她是我的汉语老师",
    pinyinTitle: "Tā shì wǒ de Hànyǔ lǎoshī",
    translation: "Dia Adalah Guru Mandarin Saya",
    dialogues: [
      [
        { speaker: "A", hanzi: "她是哪国人？", pinyin: "Tā shì nǎ guó rén?", translation: "Dia orang negara mana?" },
        { speaker: "B", hanzi: "她是美国人。你呢？", pinyin: "Tā shì Měiguó rén. Nǐ ne?", translation: "Dia orang Amerika. Kalau kamu?" },
        { speaker: "A", hanzi: "我是中国人。", pinyin: "Wǒ shì Zhōngguó rén.", translation: "Saya orang Cina." }
      ],
      [
        { speaker: "A", hanzi: "他是谁？", pinyin: "Tā shì shéi?", translation: "Siapakah dia?" },
        { speaker: "B", hanzi: "他是我同学。", pinyin: "Tā shì wǒ tóngxué.", translation: "Dia adalah teman sekelasku." },
        { speaker: "A", hanzi: "她呢？她是你的同学吗？", pinyin: "Tā ne? Tā shì nǐ de tóngxué ma?", translation: "Kalau dia (wanita)? Apakah dia teman sekelasmu?" },
        { speaker: "B", hanzi: "她不是我同学，她是我朋友。", pinyin: "Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.", translation: "Dia bukan teman sekelasku, dia temanku." }
      ]
    ],
    vocab: [
      { hanzi: "她", pinyin: "tā", translation: "dia (perempuan)", pos: "pron.", example: "她是我的老师。" },
      { hanzi: "谁", pinyin: "shéi / shuí", translation: "siapa", pos: "pron.", example: "他是谁？" },
      { hanzi: "的", pinyin: "de", translation: "milik (partikel kepemilikan)", pos: "part.", example: "我的书。" },
      { hanzi: "汉语", pinyin: "Hànyǔ", translation: "Bahasa Mandarin", pos: "n.", example: "我学汉语。" },
      { hanzi: "哪", pinyin: "nǎ", translation: "mana, yang mana", pos: "pron.", example: "哪国人？" },
      { hanzi: "国", pinyin: "guó", translation: "negara", pos: "n.", example: "中国，美国。" },
      { hanzi: "呢", pinyin: "ne", translation: "bagaimana dengan... / kalau...", pos: "part.", example: "你呢？" },
      { hanzi: "他", pinyin: "tā", translation: "dia (laki-laki)", pos: "pron.", example: "他是我的同学。" },
      { hanzi: "同学", pinyin: "tóngxué", translation: "teman sekelas", pos: "n.", example: "李月是我同学。" },
      { hanzi: "朋友", pinyin: "péngyou", translation: "teman, sahabat", pos: "n.", example: "我们是好朋友。" }
    ],
    grammar: [
      {
        rule: "Partikel Kepemilikan '的' (de)",
        desc: "Pola: Pemilik + 的 + Benda/Orang yang dimiliki. Pada hubungan keluarga atau kerabat dekat, '的' dapat dihilangkan (contoh: 我妈妈, 我朋友).",
        example: "她是我的汉语老师。(Dia adalah guru Mandarin saya.)"
      },
      {
        rule: "Partikel Singkat '...呢？' (ne)",
        desc: "Digunakan untuk menanyakan hal yang sama dengan kalimat sebelumnya tanpa mengulang seluruh pertanyaan (arti: 'Kalau kamu? / Bagaimana dengan...?').",
        example: "我是中国人，你呢？(Saya orang Cina, kalau kamu?)"
      }
    ],
    phoneticsInfo: [
      "Perbedaan Konsonan Retrofleks: zh, ch, sh, r (ujung lidah dinaikkan ke langit-langit keras)",
      "Nasal Alveolar 'n' vs Velar 'ng' (an - ang, en - eng, in - ing)",
      "Tone Sandhi '一' (yī): Bila diikuti nada 1, 2, 3 dibaca yí; bila diikuti nada 4 dibaca yì."
    ],
    charactersInfo: {
      strokes: ["竖弯钩 (shùwāngōu)", "横折弯钩 (héngzhéwāngōu)"],
      characters: ["七", "儿", "几", "九"]
    },
    quiz: [
      {
        q: "Apa fungsi partikel '的' (de) dalam frasa '我的老师'?",
        options: ["Pertanyaan", "Kepemilikan (Guru milik saya)", "Perintah", "Waktu lampau"],
        answer: 1,
        explanation: "Partikel 的 menghubungkan subjek pemilik (我) dengan objek kepemilikan (老师)."
      }
    ]
  },
  {
    id: 5,
    title: "她女儿今年二十岁",
    pinyinTitle: "Tā nǚ'ér jǐnnián èrshí suì",
    translation: "Putrinya Berusia 20 Tahun Tahun Ini",
    dialogues: [
      [
        { speaker: "A", hanzi: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", translation: "Berapa anggota keluargamu di rumah?" },
        { speaker: "B", hanzi: "我家有三口人。", pinyin: "Wǒ jiā yǒu sān kǒu rén.", translation: "Keluargaku ada 3 orang." }
      ],
      [
        { speaker: "A", hanzi: "你女儿几岁了？", pinyin: "Nǐ nǚ'ér jǐ suì le?", translation: "Berapa usia putrimu?" },
        { speaker: "B", hanzi: "她今年四岁了。", pinyin: "Tā jīnnián sì suì le.", translation: "Dia berusia 4 tahun tahun ini." }
      ],
      [
        { speaker: "A", hanzi: "李老师多大了？", pinyin: "Lǐ lǎoshī duō dà le?", translation: "Berapa usia Guru Li?" },
        { speaker: "B", hanzi: "她今年五十岁了。她女儿今年二十岁。", pinyin: "Tā jīnnián wǔshí suì le. Tā nǚ'ér jīnnián èrshí suì.", translation: "Dia berusia 50 tahun tahun ini. Putrinya 20 tahun." }
      ]
    ],
    vocab: [
      { hanzi: "家", pinyin: "jiā", translation: "rumah, keluarga", pos: "n.", example: "我家在北京。" },
      { hanzi: "有", pinyin: "yǒu", translation: "ada, mempunyai", pos: "v.", example: "我有三本书。" },
      { hanzi: "口", pinyin: "kǒu", translation: "satuan anggota keluarga", pos: "m.", example: "四口人。" },
      { hanzi: "女儿", pinyin: "nǚ'ér", translation: "anak perempuan / putri", pos: "n.", example: "我女儿四岁。" },
      { hanzi: "几", pinyin: "jǐ", translation: "berapa (jumlah < 10)", pos: "pron.", example: "你几岁？" },
      { hanzi: "岁", pinyin: "suì", translation: "tahun (usia)", pos: "m.", example: "二十岁。" },
      { hanzi: "了", pinyin: "le", translation: "sudah (penanda perubahan kondisi)", pos: "part.", example: "四岁了。" },
      { hanzi: "今年", pinyin: "jīnnián", translation: "tahun ini", pos: "n.", example: "今年是2026年。" },
      { hanzi: "多大", pinyin: "duō dà", translation: "berapa umur (usia dewasa)", pos: "phrase", example: "你多大了？" }
    ],
    grammar: [
      {
        rule: "Menanyakan Jumlah dengan '几' (jǐ)",
        desc: "几 digunakan untuk menanyakan kuantitas kecil (biasanya di bawah 10). Harus diikuti kata bantu bilangan (measure word).",
        example: "你家有几口人？(Berapa anggota keluargamu?)"
      },
      {
        rule: "Cara Bertanya Usia (几岁 vs 多大)",
        desc: "Untuk anak di bawah 10 tahun: '你几岁了？'. Untuk remaja/dewasa: '你多大了？'. Untuk orang lanjut usia dengan sopan: '您多大年纪了？'.",
        example: "你女儿几岁了？(Untuk anak kecil) vs 李老师多大了？(Untuk orang dewasa)"
      }
    ],
    phoneticsInfo: [
      "Bunyi Retrofleks Final: 儿化 (érhuà: xiǎoháir, xiǎoniǎor, fànguǎnr)",
      "Bunyi berhembus (aspirated) vs tak berhembus (unaspirated): b-p, d-t, g-k, j-q, z-c, zh-ch",
      "Tanda pemisah suku kata (隔音符号 '): Digunakan di depan a, o, e (contoh: pí'ǎo, Xī'ān)"
    ],
    charactersInfo: {
      strokes: ["撇折 (piězhé)", "斜钩 (xiégōu)", "提 (tí)"],
      characters: ["水", "女", "了", "大"]
    },
    quiz: [
      {
        q: "Kata bantu bilangan (measure word) yang digunakan untuk menghitung anggota keluarga adalah...",
        options: ["个 (gè)", "口 (kǒu)", "本 (běn)", "块 (kuài)"],
        answer: 1,
        explanation: "Dalam bahasa Mandarin standar, keluarga dihitung dengan '口' (contoh: 三口人)."
      }
    ]
  },
  {
    id: 6,
    title: "我会说汉语",
    pinyinTitle: "Wǒ huì shuō Hànyǔ",
    translation: "Saya Bisa Bicara Bahasa Mandarin",
    dialogues: [
      [
        { speaker: "A", hanzi: "你会说汉语吗？", pinyin: "Nǐ huì shuō Hànyǔ ma?", translation: "Apakah kamu bisa berbicara bahasa Mandarin?" },
        { speaker: "B", hanzi: "我会说汉语。", pinyin: "Wǒ huì shuō Hànyǔ.", translation: "Saya bisa bicara bahasa Mandarin." },
        { speaker: "A", hanzi: "你妈妈会说汉语吗？", pinyin: "Nǐ māma huì shuō Hànyǔ ma?", translation: "Apakah ibumu bisa bicara bahasa Mandarin?" },
        { speaker: "B", hanzi: "她不会说。", pinyin: "Tā bú huì shuō.", translation: "Dia tidak bisa bicara (Mandarin)." }
      ],
      [
        { speaker: "A", hanzi: "中国菜好吃吗？", pinyin: "Zhōngguó cài hǎochī ma?", translation: "Apakah makanan Cina enak?" },
        { speaker: "B", hanzi: "中国菜很好吃。", pinyin: "Zhōngguó cài hěn hǎochī.", translation: "Makanan Cina sangat lezat." },
        { speaker: "A", hanzi: "你会做中国菜吗？", pinyin: "Nǐ huì zuò Zhōngguó cài ma?", translation: "Apakah kamu bisa memasak makanan Cina?" },
        { speaker: "B", hanzi: "我不会做。", pinyin: "Wǒ bú huì zuò.", translation: "Saya tidak bisa memasaknya." }
      ],
      [
        { speaker: "A", hanzi: "你会写汉字吗？", pinyin: "Nǐ huì xiě Hànzì ma?", translation: "Apakah kamu bisa menulis karakter Hanzi?" },
        { speaker: "B", hanzi: "我会写。", pinyin: "Wǒ huì xiě.", translation: "Saya bisa menulisnya." },
        { speaker: "A", hanzi: "这个字怎么写？", pinyin: "Zhège zì zěnme xiě?", translation: "Bagaimana cara menulis karakter ini?" },
        { speaker: "B", hanzi: "对不起，这个字我会读，不会写。", pinyin: "Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.", translation: "Maaf, karakter ini saya bisa baca tapi belum bisa tulis." }
      ]
    ],
    vocab: [
      { hanzi: "会", pinyin: "huì", translation: "bisa, mampu (karena belajar)", pos: "mod.", example: "我会说汉语。" },
      { hanzi: "说", pinyin: "shuō", translation: "berbicara, berkata", pos: "v.", example: "请说慢一点。" },
      { hanzi: "妈妈", pinyin: "māma", translation: "ibu", pos: "n.", example: "我妈妈做菜很好吃。" },
      { hanzi: "菜", pinyin: "cài", translation: "hidangan / sayuran", pos: "n.", example: "中国菜。" },
      { hanzi: "很", pinyin: "hěn", translation: "sangat", pos: "adv.", example: "很好！" },
      { hanzi: "好吃", pinyin: "hǎochī", translation: "enak, lezat", pos: "adj.", example: "米饭很好吃。" },
      { hanzi: "做", pinyin: "zuò", translation: "membuat, memasak, melakukan", pos: "v.", example: "做菜。" },
      { hanzi: "写", pinyin: "xiě", translation: "menulis", pos: "v.", example: "写汉字。" },
      { hanzi: "汉字", pinyin: "Hànzì", translation: "karakter Cina / Hanzi", pos: "n.", example: "汉字很美。" },
      { hanzi: "怎么", pinyin: "zěnme", translation: "bagaimana cara...", pos: "pron.", example: "这个字怎么读？" },
      { hanzi: "读", pinyin: "dú", translation: "membaca", pos: "v.", example: "读课文。" }
    ],
    grammar: [
      {
        rule: "Kata Kerja Bantu '会' (huì)",
        desc: "Menunjukkan kemampuan yang didapat melalui proses belajar atau latihan. Bentuk negasinya adalah '不会' (bú huì).",
        example: "我会说汉语，不会做中国菜。(Saya bisa bicara Mandarin, tidak bisa masak makanan Cina.)"
      },
      {
        rule: "Kata Tanya '怎么' (zěnme) + Kata Kerja",
        desc: "Digunakan di depan kata kerja untuk menanyakan cara melakukan sesuatu.",
        example: "这个汉字怎么写？(Bagaimana cara menulis karakter Hanzi ini?)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi Nada: Nada 1 + Nada Lainnya (jīntiān, jǐnnián, jīngcǎi, chēpiào)",
      "Struktur Hanzi: Karakter Tunggal (独体字: 人, 我, 中) dan Karakter Majemuk (合体字: 你, 做)"
    ],
    charactersInfo: {
      strokes: ["撇折 (piězhé)", "斜钩 (xiégōu)", "提 (tí)"],
      characters: ["东", "我", "西"]
    },
    quiz: [
      {
        q: "Perbedaan '会' (huì) dengan kata kemampuan lainnya adalah...",
        options: ["Didapat dari lahir", "Didapat melalui proses belajar/latihan", "Hanya untuk olahraga", "Bentuk pasif"],
        answer: 1,
        explanation: "会 secara khusus digunakan untuk kemampuan yang diperoleh setelah dipelajari."
      }
    ]
  },
  {
    id: 7,
    title: "今天几号",
    pinyinTitle: "Jīntiān jǐ hào",
    translation: "Hari Ini Tanggal Berapa?",
    dialogues: [
      [
        { speaker: "A", hanzi: "请问，今天几号？", pinyin: "Qǐngwèn, jīntiān jǐ hào?", translation: "Permisi, hari ini tanggal berapa?" },
        { speaker: "B", hanzi: "今天9月1号。", pinyin: "Jīntiān jiǔ yuè yī hào.", translation: "Hari ini tanggal 1 September." },
        { speaker: "A", hanzi: "今天星期几？", pinyin: "Jīntiān xīngqī jǐ?", translation: "Hari ini hari apa?" },
        { speaker: "B", hanzi: "星期三。", pinyin: "Xīngqīsān.", translation: "Hari Rabu." }
      ],
      [
        { speaker: "A", hanzi: "昨天是几月几号？", pinyin: "Zuótiān shì jǐ yuè jǐ hào?", translation: "Kemarin tanggal dan bulan berapa?" },
        { speaker: "B", hanzi: "昨天是8月31号，星期二。", pinyin: "Zuótiān shì bā yuè sānshíyī hào, xīngqī'èr.", translation: "Kemarin 31 Agustus, hari Selasa." },
        { speaker: "A", hanzi: "明天呢？", pinyin: "Míngtiān ne?", translation: "Kalau besok?" },
        { speaker: "B", hanzi: "明天是9月2号，星期四。", pinyin: "Míngtiān shì jiǔ yuè èr hào, xīngqīsì.", translation: "Besok tanggal 2 September, hari Kamis." }
      ],
      [
        { speaker: "A", hanzi: "明天星期六，你去学校吗？", pinyin: "Míngtiān xīngqīliù, nǐ qù xuéxiào ma?", translation: "Besok Sabtu, apakah kamu pergi ke sekolah?" },
        { speaker: "B", hanzi: "我去学校。", pinyin: "Wǒ qù xuéxiào.", translation: "Saya pergi ke sekolah." },
        { speaker: "A", hanzi: "你去学校做什么？", pinyin: "Nǐ qù xuéxiào zuò shénme?", translation: "Kamu ke sekolah untuk apa?" },
        { speaker: "B", hanzi: "我去学校看书。", pinyin: "Wǒ qù xuéxiào kàn shū.", translation: "Saya ke sekolah untuk membaca buku." }
      ]
    ],
    vocab: [
      { hanzi: "请", pinyin: "qǐng", translation: "silakan / tolong", pos: "v.", example: "请坐。" },
      { hanzi: "问", pinyin: "wèn", translation: "bertanya", pos: "v.", example: "请问。" },
      { hanzi: "今天", pinyin: "jīntiān", translation: "hari ini", pos: "n.", example: "今天天气好。" },
      { hanzi: "号", pinyin: "hào", translation: "tanggal / nomor", pos: "n.", example: "九月一号。" },
      { hanzi: "月", pinyin: "yuè", translation: "bulan", pos: "n.", example: "一月，二月。" },
      { hanzi: "星期", pinyin: "xīngqī", translation: "minggu / pekan", pos: "n.", example: "星期一到星期日。" },
      { hanzi: "昨天", pinyin: "zuótiān", translation: "kemarin", pos: "n.", example: "昨天星期二。" },
      { hanzi: "明天", pinyin: "míngtiān", translation: "besok", pos: "n.", example: "明天见！" },
      { hanzi: "去", pinyin: "qù", translation: "pergi", pos: "v.", example: "去学校。" },
      { hanzi: "学校", pinyin: "xuéxiào", translation: "sekolah", pos: "n.", example: "这是我的学校。" },
      { hanzi: "看", pinyin: "kàn", translation: "melihat, membaca, menonton", pos: "v.", example: "看书，看电视。" },
      { hanzi: "书", pinyin: "shū", translation: "buku", pos: "n.", example: "中文书。" }
    ],
    grammar: [
      {
        rule: "Urutan Penyebutan Kalender Mandarin",
        desc: "Selalu berprinsip dari unit terbesar ke unit terkecil: Tahun (年) + Bulan (月) + Tanggal (号/日) + Hari (星期...).",
        example: "2026年9月28号 星期一 (Senin, 28 September 2026)"
      },
      {
        rule: "Kalimat Bersambung (Serial Verb Construction)",
        desc: "Pola: Subjek + 去 (pergi) + Tempat + Melakukan Apa. Kata kerja kedua menerangkan tujuan dari tindakan pertama.",
        example: "我去学校看书。(Saya pergi ke sekolah untuk membaca buku.)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi Nada: Nada 2 + Nada Lainnya (guójiā, lóufáng, píngguǒ, huánjìng)",
      "Radikal: 三点水 (氵 - air: 汉, 没) dan 言字旁 (讠 - bahasa/ucapan: 语, 谁)"
    ],
    charactersInfo: {
      strokes: ["横折提 (héngzhétí)"],
      characters: ["四", "五", "书"],
      radicals: { radical: "氵 dan 讠", meaning: "Terkait air dan bahasa/ucapan", examples: ["汉", "没", "语", "谁"] }
    },
    quiz: [
      {
        q: "Bagaimana urutan tanggal '15 Oktober' dalam bahasa Mandarin?",
        options: ["15号10月", "10月15号", "号15月10", "星期10月15"],
        answer: 1,
        explanation: "Mandarin selalu menyebut unit terbesar terlebih dahulu: Bulan lalu Tanggal (10月15号)."
      }
    ]
  },
  {
    id: 8,
    title: "我想喝茶",
    pinyinTitle: "Wǒ xiǎng hē chá",
    translation: "Saya Ingin Minum Teh",
    dialogues: [
      [
        { speaker: "A", hanzi: "你想喝什么？", pinyin: "Nǐ xiǎng hē shénme?", translation: "Kamu ingin minum apa?" },
        { speaker: "B", hanzi: "我想喝茶。", pinyin: "Wǒ xiǎng hē chá.", translation: "Saya ingin minum teh." },
        { speaker: "A", hanzi: "你想吃什么？", pinyin: "Nǐ xiǎng chī shénme?", translation: "Kamu ingin makan apa?" },
        { speaker: "B", hanzi: "我想吃米饭。", pinyin: "Wǒ xiǎng chī mǐfàn.", translation: "Saya ingin makan nasi." }
      ],
      [
        { speaker: "A", hanzi: "下午你想做什么？", pinyin: "Xiàwǔ nǐ xiǎng zuò shénme?", translation: "Sore nanti kamu ingin melakukan apa?" },
        { speaker: "B", hanzi: "下午我想去商店。", pinyin: "Xiàwǔ wǒ xiǎng qù shāngdiàn.", translation: "Sore nanti saya ingin pergi ke toko." },
        { speaker: "A", hanzi: "你想买什么？", pinyin: "Nǐ xiǎng mǎi shénme?", translation: "Kamu ingin beli apa?" },
        { speaker: "B", hanzi: "我想买一个杯子。", pinyin: "Wǒ xiǎng mǎi yí ge bēizi.", translation: "Saya ingin membeli sebuah cangkir/gelas." }
      ],
      [
        { speaker: "A", hanzi: "你好！这个杯子多少钱？", pinyin: "Nǐ hǎo! Zhège bēizi duōshao qián?", translation: "Halo! Cangkir ini harganya berapa?" },
        { speaker: "B", hanzi: "28块。", pinyin: "Èrshíbā kuài.", translation: "28 yuan." },
        { speaker: "A", hanzi: "那个杯子多少钱？", pinyin: "Nàge bēizi duōshao qián?", translation: "Cangkir yang itu berapa harganya?" },
        { speaker: "B", hanzi: "那个杯子18块钱。", pinyin: "Nàge bēizi shíbā kuài qián.", translation: "Cangkir itu 18 yuan." }
      ]
    ],
    vocab: [
      { hanzi: "想", pinyin: "xiǎng", translation: "ingin, hendak, berpikir", pos: "mod.", example: "我想喝水。" },
      { hanzi: "喝", pinyin: "hē", translation: "minum", pos: "v.", example: "喝茶，喝咖啡。" },
      { hanzi: "茶", pinyin: "chá", translation: "teh", pos: "n.", example: "中国茶。" },
      { hanzi: "吃", pinyin: "chī", translation: "makan", pos: "v.", example: "吃米饭。" },
      { hanzi: "米饭", pinyin: "mǐfàn", translation: "nasi putih", pos: "n.", example: "一碗米饭。" },
      { hanzi: "下午", pinyin: "xiàwǔ", translation: "sore hari / siang setelah jam 12", pos: "n.", example: "下午三点。" },
      { hanzi: "商店", pinyin: "shāngdiàn", translation: "toko", pos: "n.", example: "去商店买东西。" },
      { hanzi: "买", pinyin: "mǎi", translation: "membeli", pos: "v.", example: "买书，买菜。" },
      { hanzi: "个", pinyin: "gè / ge", translation: "satuan umum benda/orang", pos: "m.", example: "一个人，一个杯子。" },
      { hanzi: "杯子", pinyin: "bēizi", translation: "cangkir, gelas", pos: "n.", example: "茶杯。" },
      { hanzi: "这", pinyin: "zhè", translation: "ini", pos: "pron.", example: "这是我的杯子。" },
      { hanzi: "多少", pinyin: "duōshao", translation: "berapa banyak / harga", pos: "pron.", example: "多少钱？" },
      { hanzi: "钱", pinyin: "qián", translation: "uang", pos: "n.", example: "我有钱。" },
      { hanzi: "块", pinyin: "kuài", translation: "yuan (satuan mata uang lisan)", pos: "m.", example: "五块钱。" },
      { hanzi: "那", pinyin: "nà", translation: "itu", pos: "pron.", example: "那是商店。" }
    ],
    grammar: [
      {
        rule: "Kata Kerja Bantu '想' (xiǎng)",
        desc: "Menyatakan niat, keinginan, atau rencana masa depan. Diikuti kata kerja tindakan.",
        example: "我想买一个杯子。(Saya ingin membeli sebuah cangkir.)"
      },
      {
        rule: "Menanyakan Harga dengan '多少钱？'",
        desc: "Pola: Benda + 多少钱？ Jawaban menggunakan satuan '块' (kuài / yuan).",
        example: "这个杯子多少钱？—— 28块。(Cangkir ini berapa harganya? — 28 yuan.)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi Nada: Nada 3 + Nada Lainnya (lǎoshī, lǎorén, yǔsǎn, yǒuyòng)",
      "Radikal: 金字旁 (钅 - logam/uang: 钟, 钱) dan 口字旁 (口 - mulut: 吃, 喝)"
    ],
    charactersInfo: {
      strokes: ["上下结构 (Top-bottom: 是, 爸)", "上中下结构 (Top-middle-bottom: 茶, 高)"],
      characters: ["少", "个"]
    },
    quiz: [
      {
        q: "Bagaimana cara menanyakan harga barang 'Berapa harganya'?",
        options: ["多少人？", "多少钱？", "几岁了？", "怎么样？"],
        answer: 1,
        explanation: "多少钱 (duōshao qián) adalah frasa standar untuk menanyakan harga uang."
      }
    ]
  },
  {
    id: 9,
    title: "你儿子在哪儿工作",
    pinyinTitle: "Nǐ érzi zài nǎr gōngzuò",
    translation: "Di Mana Anak Laki-lakimu Bekerja?",
    dialogues: [
      [
        { speaker: "A", hanzi: "小猫在哪儿？", pinyin: "Xiǎomāo zài nǎr?", translation: "Di mana kucing kecil?" },
        { speaker: "B", hanzi: "小猫在那儿。", pinyin: "Xiǎomāo zài nàr.", translation: "Kucing kecil ada di sana." },
        { speaker: "A", hanzi: "小狗在哪儿？", pinyin: "Xiǎogǒu zài nǎr?", translation: "Di mana anjing kecil?" },
        { speaker: "B", hanzi: "小狗在椅子下面。", pinyin: "Xiǎogǒu zài yǐzi xiàmiàn.", translation: "Anjing kecil ada di bawah kursi." }
      ],
      [
        { speaker: "A", hanzi: "你在哪儿工作？", pinyin: "Nǐ zài nǎr gōngzuò?", translation: "Di mana kamu bekerja?" },
        { speaker: "B", hanzi: "我在学校工作。", pinyin: "Wǒ zài xuéxiào gōngzuò.", translation: "Saya bekerja di sekolah." },
        { speaker: "A", hanzi: "你儿子在哪儿工作？", pinyin: "Nǐ érzi zài nǎr gōngzuò?", translation: "Di mana putramu bekerja?" },
        { speaker: "B", hanzi: "我儿子在医院工作，他是医生。", pinyin: "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.", translation: "Putraku bekerja di rumah sakit, dia dokter." }
      ],
      [
        { speaker: "A", hanzi: "你爸爸在家吗？", pinyin: "Nǐ bàba zài jiā ma?", translation: "Apakah ayahmu ada di rumah?" },
        { speaker: "B", hanzi: "不在家。", pinyin: "Bú zài jiā.", translation: "Tidak ada di rumah." },
        { speaker: "A", hanzi: "他在哪儿呢？", pinyin: "Tā zài nǎr ne?", translation: "Di mana dia berada?" },
        { speaker: "B", hanzi: "他在医院。", pinyin: "Tā zài yīyuàn.", translation: "Dia ada di rumah sakit." }
      ]
    ],
    vocab: [
      { hanzi: "小", pinyin: "xiǎo", translation: "kecil", pos: "adj.", example: "小猫，小狗。" },
      { hanzi: "猫", pinyin: "māo", translation: "kucing", pos: "n.", example: "小猫真可爱。" },
      { hanzi: "在", pinyin: "zài", translation: "di / berada di", pos: "v./prep.", example: "在家，在学校。" },
      { hanzi: "那儿", pinyin: "nàr", translation: "di sana", pos: "pron.", example: "他在那儿。" },
      { hanzi: "狗", pinyin: "gǒu", translation: "anjing", pos: "n.", example: "小狗在睡觉。" },
      { hanzi: "椅子", pinyin: "yǐzi", translation: "kursi", pos: "n.", example: "坐在椅子上。" },
      { hanzi: "下面", pinyin: "xiàmiàn", translation: "di bawah", pos: "n.", example: "椅子下面。" },
      { hanzi: "哪儿", pinyin: "nǎr", translation: "di mana", pos: "pron.", example: "你在哪儿？" },
      { hanzi: "工作", pinyin: "gōngzuò", translation: "bekerja / pekerjaan", pos: "v./n.", example: "我在医院工作。" },
      { hanzi: "儿子", pinyin: "érzi", translation: "anak laki-laki / putra", pos: "n.", example: "我儿子是医生。" },
      { hanzi: "医院", pinyin: "yīyuàn", translation: "rumah sakit", pos: "n.", example: "他在医院。" },
      { hanzi: "医生", pinyin: "yīshēng", translation: "dokter", pos: "n.", example: "李医生。" },
      { hanzi: "爸爸", pinyin: "bàba", translation: "ayah, papa", pos: "n.", example: "我爸爸在家。" }
    ],
    grammar: [
      {
        rule: "Kata Kerja & Preposisi '在' (zài)",
        desc: "1. Sebagai predikat: Subjek + 在 + Tempat (我在学校 - Saya ada di sekolah). 2. Sebagai preposisi: Subjek + 在 + Tempat + Kata Kerja (我在学校工作 - Saya bekerja di sekolah).",
        example: "我儿子在医院工作。(Putra saya bekerja di rumah sakit.)"
      },
      {
        rule: "Kata Tanya '在哪儿' (zài nǎr)",
        desc: "Digunakan untuk menanyakan tempat atau lokasi keberadaan subjek.",
        example: "小猫在哪儿？—— 小猫在椅子下面。"
      }
    ],
    phoneticsInfo: [
      "Kombinasi Nada: Nada 4 + Nada Lainnya (xiàtiān, qùnián, tiàowǔ, shuìjiào)",
      "Radikal: 走之旁 (辶 - bergerak/jalan: 这, 送) dan 门字框 (门 - pintu/ruangan: 问, 间)"
    ],
    charactersInfo: {
      strokes: ["半包围结构 (Half-enclosure: 店, 习, 这, 同)"],
      characters: ["在", "子", "工"]
    },
    quiz: [
      {
        q: "Lengkapilah: '我儿子在医院____，他是医生。'",
        options: ["喝茶", "工作", "看见", "买东西"],
        answer: 1,
        explanation: "Di rumah sakit profesinya adalah dokter, sehingga kata kerjanya adalah 工作 (bekerja)."
      }
    ]
  },
  {
    id: 10,
    title: "我能坐这儿吗",
    pinyinTitle: "Wǒ néng zuò zhèr ma",
    translation: "Bolehkah Saya Duduk di Sini?",
    dialogues: [
      [
        { speaker: "A", hanzi: "桌子上有什么？", pinyin: "Zhuōzi shang yǒu shénme?", translation: "Ada apa di atas meja?" },
        { speaker: "B", hanzi: "桌子上有一个电脑和一本书。", pinyin: "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.", translation: "Di atas meja ada sebuah komputer dan sebuah buku." },
        { speaker: "A", hanzi: "杯子在哪儿？", pinyin: "Bēizi zài nǎr?", translation: "Di mana cangkirnya?" },
        { speaker: "B", hanzi: "杯子在桌子里。", pinyin: "Bēizi zài zhuōzi lǐ.", translation: "Cangkir ada di dalam meja (laci)." }
      ],
      [
        { speaker: "A", hanzi: "前面那个人叫什么名字？", pinyin: "Qiánmiàn nàge rén jiào shénme míngzi?", translation: "Siapa nama orang di depan itu?" },
        { speaker: "B", hanzi: "她叫王方，在医院工作。", pinyin: "Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.", translation: "Dia bernama Wang Fang, bekerja di rumah sakit." },
        { speaker: "A", hanzi: "后面那个人呢？他叫什么名字？", pinyin: "Hòumiàn nàge rén ne? Tā jiào shénme míngzi?", translation: "Kalau orang di belakang itu? Siapa namanya?" },
        { speaker: "B", hanzi: "他叫谢朋，在商店工作。", pinyin: "Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.", translation: "Dia bernama Xie Peng, bekerja di toko." }
      ],
      [
        { speaker: "A", hanzi: "这儿有人吗？", pinyin: "Zhèr yǒu rén ma?", translation: "Apakah di sini ada orang?" },
        { speaker: "B", hanzi: "没有。", pinyin: "Méiyǒu.", translation: "Tidak ada." },
        { speaker: "A", hanzi: "我能坐这儿吗？", pinyin: "Wǒ néng zuò zhèr ma?", translation: "Bolehkah saya duduk di sini?" },
        { speaker: "B", hanzi: "请坐。", pinyin: "Qǐng zuò.", translation: "Silakan duduk." }
      ]
    ],
    vocab: [
      { hanzi: "桌子", pinyin: "zhuōzi", translation: "meja", pos: "n.", example: "桌子上。" },
      { hanzi: "上", pinyin: "shang / shàng", translation: "atas, di atas", pos: "n.", example: "椅子上。" },
      { hanzi: "电脑", pinyin: "diànnǎo", translation: "komputer", pos: "n.", example: "新电脑。" },
      { hanzi: "和", pinyin: "hé", translation: "dan, bersama", pos: "conj.", example: "我和你。" },
      { hanzi: "本", pinyin: "běn", translation: "satuan untuk buku", pos: "m.", example: "一本书。" },
      { hanzi: "里", pinyin: "lǐ", translation: "dalam, di dalam", pos: "n.", example: "学校里。" },
      { hanzi: "前面", pinyin: "qiánmiàn", translation: "depan, di depan", pos: "n.", example: "前面那个人。" },
      { hanzi: "后面", pinyin: "hòumiàn", translation: "belakang, di belakang", pos: "n.", example: "后面有商店。" },
      { hanzi: "这儿", pinyin: "zhèr", translation: "di sini", pos: "pron.", example: "请坐这儿。" },
      { hanzi: "没有", pinyin: "méiyǒu", translation: "tidak ada / belum", pos: "v.", example: "这儿没有人。" },
      { hanzi: "能", pinyin: "néng", translation: "boleh, bisa (izin/kemungkinan)", pos: "mod.", example: "我能去吗？" },
      { hanzi: "坐", pinyin: "zuò", translation: "duduk / naik (kendaraan)", pos: "v.", example: "请坐。" }
    ],
    grammar: [
      {
        rule: "Kalimat Eksistensi dengan '有' (yǒu)",
        desc: "Pola: Tempat/Posisi + 有 + Benda/Orang (menyatakan keberadaan suatu objek di suatu tempat). Bentuk ingkarnya: 没有 (méiyǒu).",
        example: "桌子上有一个电脑。(Di atas meja ada sebuah komputer.)"
      },
      {
        rule: "Kata Bantu Modal Izin '能' (néng)",
        desc: "Digunakan untuk menanyakan izin atau kemampuan situasional. Pola: Subjek + 能 + Kata Kerja + 吗？",
        example: "我能坐这儿吗？—— 请坐。(Bolehkah saya duduk di sini? — Silakan duduk.)"
      }
    ],
    phoneticsInfo: [
      "Pelafalan Nada Netral: zhuōzi, pánzi, yǐzi, kùzi",
      "Sufiks '们', '子', '头' yang dibaca netral: nǐmen, wǒmen, tāmen, zhuōzi, shítou"
    ],
    charactersInfo: {
      strokes: ["全包围结构 (Enclosure: 四, 国, 困)"],
      characters: ["上", "下", "本", "末"]
    },
    quiz: [
      {
        q: "Jawaban paling santun saat seseorang bertanya '我能坐这儿吗？' adalah...",
        options: ["不客气", "请坐", "对不起", "再见"],
        answer: 1,
        explanation: "请坐 (qǐng zuò) berarti 'silakan duduk'."
      }
    ]
  },
  {
    id: 11,
    title: "现在几点",
    pinyinTitle: "Xiànzài jǐ diǎn",
    translation: "Sekarang Jam Berapa?",
    dialogues: [
      [
        { speaker: "A", hanzi: "现在几点？", pinyin: "Xiànzài jǐ diǎn?", translation: "Sekarang jam berapa?" },
        { speaker: "B", hanzi: "现在10点10分。", pinyin: "Xiànzài shí diǎn shí fēn.", translation: "Sekarang jam 10 lewat 10 menit." },
        { speaker: "A", hanzi: "中午几点吃饭？", pinyin: "Zhōngwǔ jǐ diǎn chī fàn?", translation: "Siang jam berapa makan siang?" },
        { speaker: "B", hanzi: "12点吃饭。", pinyin: "Shí'èr diǎn chī fàn.", translation: "Jam 12 makan siang." }
      ],
      [
        { speaker: "A", hanzi: "爸爸什么时候回家？", pinyin: "Bàba shénme shíhou huí jiā?", translation: "Kapan ayah pulang ke rumah?" },
        { speaker: "B", hanzi: "下午5点。", pinyin: "Xiàwǔ wǔ diǎn.", translation: "Sore jam 5." },
        { speaker: "A", hanzi: "我们什么时候去看电影？", pinyin: "Wǒmen shénme shíhou qù kàn diànyǐng?", translation: "Kapan kita pergi menonton film?" },
        { speaker: "B", hanzi: "6点30分。", pinyin: "Liù diǎn sānshí fēn.", translation: "Jam 6 lewat 30 menit (setengah tujuh)." }
      ],
      [
        { speaker: "A", hanzi: "我星期一去北京。", pinyin: "Wǒ xīngqīyī qù Běijīng.", translation: "Saya pergi ke Beijing hari Senin." },
        { speaker: "B", hanzi: "你想在北京住几天？", pinyin: "Nǐ xiǎng zài Běijīng zhù jǐ tiān?", translation: "Kamu ingin tinggal di Beijing berapa hari?" },
        { speaker: "A", hanzi: "住三天。", pinyin: "Zhù sān tiān.", translation: "Tinggal selama 3 hari." },
        { speaker: "B", hanzi: "星期五前能回家吗？", pinyin: "Xīngqīwǔ qián néng huí jiā ma?", translation: "Bisakah pulang sebelum hari Jumat?" },
        { speaker: "A", hanzi: "能。", pinyin: "Néng.", translation: "Bisa." }
      ]
    ],
    vocab: [
      { hanzi: "现在", pinyin: "xiànzài", translation: "sekarang", pos: "n.", example: "现在几点？" },
      { hanzi: "点", pinyin: "diǎn", translation: "jam (tepat)", pos: "m.", example: "十点。" },
      { hanzi: "分", pinyin: "fēn", translation: "menit", pos: "m.", example: "十分钟。" },
      { hanzi: "中午", pinyin: "zhōngwǔ", translation: "siang hari (sekitar jam 12)", pos: "n.", example: "中午见。" },
      { hanzi: "吃饭", pinyin: "chī fàn", translation: "makan (nasi / makanan)", pos: "v.", example: "去吃饭。" },
      { hanzi: "时候", pinyin: "shíhou", translation: "waktu / saat", pos: "n.", example: "什么时候？" },
      { hanzi: "回", pinyin: "huí", translation: "kembali, pulang", pos: "v.", example: "回家，回国。" },
      { hanzi: "我们", pinyin: "wǒmen", translation: "kami, kita", pos: "pron.", example: "我们是同学。" },
      { hanzi: "电影", pinyin: "diànyǐng", translation: "film, bioskop", pos: "n.", example: "看电影。" },
      { hanzi: "住", pinyin: "zhù", translation: "tinggal, menginap", pos: "v.", example: "住在北京。" },
      { hanzi: "前", pinyin: "qián", translation: "sebelum / depan", pos: "n.", example: "五天前，三天前。" },
      { hanzi: "北京", pinyin: "Běijīng", translation: "Beijing (Ibukota Tiongkok)", pos: "prop. n.", example: "我去北京。" }
    ],
    grammar: [
      {
        rule: "Menyatakan Waktu Jam dalam Bahasa Mandarin",
        desc: "Pola: Angka + 点 (Jam) + Angka + 分 (Menit). Catatan: Jam 2 dinyatakan sebagai '两点' (liǎng diǎn), bukan '二点'.",
        example: "2:00 -> 两点 (liǎng diǎn), 5:30 -> 五点三十分 (wǔ diǎn sānshí fēn)"
      },
      {
        rule: "Kata Keterangan Waktu Sebagai Adverbial",
        desc: "Keterangan waktu diletakkan SEBELUM kata kerja atau di depan subjek.",
        example: "妈妈六点做饭。(Ibu jam 6 memasak) atau 六点妈妈做饭。"
      }
    ],
    phoneticsInfo: [
      "Peran Nada Netral dalam Membedakan Makna Kata: lǎozǐ (ayah) vs Lǎozǐ (filsuf Lao Tzu); mǎimai (bisnis) vs mǎi mài (beli & jual)"
    ],
    charactersInfo: {
      strokes: ["耳刀旁 (阝 - bukit/lokasi: 院, 阳)", "单人旁 (亻 - manusia: 你, 他)"],
      characters: ["午", "电"]
    },
    quiz: [
      {
        q: "Bagaimana cara membaca waktu 'Jam 2:00 tepat' dalam bahasa Mandarin?",
        options: ["二点 (èr diǎn)", "两点 (liǎng diǎn)", "俩点 (liǎ diǎn)", "十点 (shí diǎn)"],
        answer: 1,
        explanation: "Untuk kuantitas dan jam 2:00, selalu gunakan 两 (liǎng), bukan 二 (èr)."
      }
    ]
  },
  {
    id: 12,
    title: "明天天气怎么样",
    pinyinTitle: "Míngtiān tiānqì zěnmeyàng",
    translation: "Bagaimana Cuaca Besok?",
    dialogues: [
      [
        { speaker: "A", hanzi: "昨天北京的天气怎么样？", pinyin: "Zuótiān Běijīng de tiānqì zěnmeyàng?", translation: "Bagaimana cuaca di Beijing kemarin?" },
        { speaker: "B", hanzi: "太热了。", pinyin: "Tài rè le.", translation: "Terlalu panas!" },
        { speaker: "A", hanzi: "明天呢？明天天气怎么样？", pinyin: "Míngtiān ne? Míngtiān tiānqì zěnmeyàng?", translation: "Kalau besok? Bagaimana cuacanya besok?" },
        { speaker: "B", hanzi: "明天天气很好，不冷不热。", pinyin: "Míngtiān tiānqì hěn hǎo, bù lěng bú rè.", translation: "Cuaca besok sangat bagus, tidak dingin dan tidak panas." }
      ],
      [
        { speaker: "A", hanzi: "今天会下雨吗？", pinyin: "Jīntiān huì xià yǔ ma?", translation: "Apakah hari ini akan turun hujan?" },
        { speaker: "B", hanzi: "今天不会下雨。", pinyin: "Jīntiān bú huì xià yǔ.", translation: "Hari ini tidak akan turun hujan." },
        { speaker: "A", hanzi: "王小姐今天会来吗？", pinyin: "Wáng xiǎojiě jīntiān huì lái ma?", translation: "Apakah Nona Wang akan datang hari ini?" },
        { speaker: "B", hanzi: "不会来，天气太冷了。", pinyin: "Bú huì lái, tiānqì tài lěng le.", translation: "Tidak akan datang, cuaca terlalu dingin." }
      ],
      [
        { speaker: "A", hanzi: "你身体怎么样？", pinyin: "Nǐ shēntǐ zěnmeyàng?", translation: "Bagaimana kondisi badan/kesehatanmu?" },
        { speaker: "B", hanzi: "我身体不太好。天气太热了，不爱吃饭。", pinyin: "Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.", translation: "Kesehatanku kurang baik. Cuaca terlalu panas, jadi tidak berselera makan." },
        { speaker: "A", hanzi: "你多吃些水果，多喝水。", pinyin: "Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.", translation: "Makanlah lebih banyak buah, dan minumlah banyak air." },
        { speaker: "B", hanzi: "谢谢你，医生。", pinyin: "Xièxie nǐ, yīshēng.", translation: "Terima kasih, Dokter." }
      ]
    ],
    vocab: [
      { hanzi: "天气", pinyin: "tiānqì", translation: "cuaca", pos: "n.", example: "今天天气好。" },
      { hanzi: "怎么样", pinyin: "zěnmeyàng", translation: "bagaimana (kondisi)", pos: "pron.", example: "身体怎么样？" },
      { hanzi: "太...了", pinyin: "tài...le", translation: "terlalu / sangat sekali", pos: "pattern", example: "太好了！" },
      { hanzi: "热", pinyin: "rè", translation: "panas", pos: "adj.", example: "天气很热。" },
      { hanzi: "冷", pinyin: "lěng", translation: "dingin", pos: "adj.", example: "今天太冷了。" },
      { hanzi: "下雨", pinyin: "xià yǔ", translation: "turun hujan", pos: "v. phrase", example: "明天会下雨。" },
      { hanzi: "小姐", pinyin: "xiǎojiě", translation: "nona", pos: "n.", example: "王小姐。" },
      { hanzi: "来", pinyin: "lái", translation: "datang", pos: "v.", example: "请来这里。" },
      { hanzi: "身体", pinyin: "shēntǐ", translation: "tubuh, badan, kesehatan", pos: "n.", example: "身体健康。" },
      { hanzi: "爱", pinyin: "ài", translation: "suka, mencintai, gemar", pos: "v.", example: "我不爱吃肉。" },
      { hanzi: "些", pinyin: "xiē", translation: "beberapa, sedikit", pos: "m.", example: "这些，一些水果。" },
      { hanzi: "水果", pinyin: "shuǐguǒ", translation: "buah-buahan", pos: "n.", example: "多吃水果。" },
      { hanzi: "水", pinyin: "shuǐ", translation: "air", pos: "n.", example: "多喝水。" }
    ],
    grammar: [
      {
        rule: "Kata Tanya '怎么样' (zěnmeyàng)",
        desc: "Diletakkan di akhir kalimat untuk menanyakan kondisi, keadaan, atau saran.",
        example: "明天天气怎么样？(Bagaimana cuaca besok?)"
      },
      {
        rule: "Struktur Derajat '太...了' (tài...le)",
        desc: "Menyatakan derajat tinggi (terlalu / sangat). Bentuk negasinya adalah '不太...' tanpa partikel 了.",
        example: "太热了！(Terlalu panas!) vs 不太好 (Kurang begitu baik)."
      },
      {
        rule: "Modal Kemungkinan '会' (huì 2)",
        desc: "Di bab ini, 会 juga bermakna kemungkinan suatu hal akan terjadi di masa depan.",
        example: "今天会下雨吗？—— 不会下雨。(Apakah hari ini akan hujan? — Tidak akan hujan.)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi 3 suku kata: Nada 1 di depan (xīngqīyī, bīngjīlíng, xīngqīwǔ)",
      "Radikal: 女字旁 (女 - wanita: 姐, 妈) dan 食字旁 (饣 - makanan: 饭, 饮)"
    ],
    charactersInfo: {
      strokes: ["独体字 (Single components)"],
      characters: ["天", "气", "雨"]
    },
    quiz: [
      {
        q: "Lawan kata dari '冷' (lěng - dingin) adalah...",
        options: ["大 (dà)", "热 (rè)", "好 (hǎo)", "小 (xiǎo)"],
        answer: 1,
        explanation: "热 (rè) berarti panas, merupakan lawan kata dari 冷 (lěng - dingin)."
      }
    ]
  },
  {
    id: 13,
    title: "他在学做中国菜呢",
    pinyinTitle: "Tā zài xué zuò Zhōngguó cài ne",
    translation: "Dia Sedang Belajar Masak Makanan Cina",
    dialogues: [
      [
        { speaker: "A", hanzi: "喂，你在做什么呢？", pinyin: "Wèi, nǐ zài zuò shénme ne?", translation: "Halo, apa yang sedang kamu lakukan?" },
        { speaker: "B", hanzi: "我在看书呢。", pinyin: "Wǒ zài kàn shū ne.", translation: "Saya sedang membaca buku." },
        { speaker: "A", hanzi: "大卫也在看书吗？", pinyin: "Dàwèi yě zài kàn shū ma?", translation: "Apakah David juga sedang membaca buku?" },
        { speaker: "B", hanzi: "他没看书，他在学做中国菜呢。", pinyin: "Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.", translation: "Dia tidak membaca buku, dia sedang belajar masak makanan Cina." }
      ],
      [
        { speaker: "A", hanzi: "昨天上午你在做什么呢？", pinyin: "Zuótiān shàngwǔ nǐ zài zuò shénme ne?", translation: "Kemarin pagi kamu sedang melakukan apa?" },
        { speaker: "B", hanzi: "我在睡觉呢。你呢？", pinyin: "Wǒ zài shuìjiào ne. Nǐ ne?", translation: "Saya sedang tidur. Kalau kamu?" },
        { speaker: "A", hanzi: "我在家看电视呢。你喜欢看电视吗？", pinyin: "Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?", translation: "Saya sedang nonton TV di rumah. Apakah kamu suka nonton TV?" },
        { speaker: "B", hanzi: "我不喜欢看电视，我喜欢看电影。", pinyin: "Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.", translation: "Saya tidak suka nonton TV, saya suka menonton film." }
      ],
      [
        { speaker: "A", hanzi: "82304155，这是李老师的电话吗？", pinyin: "Bā-èr-sān-líng-sì-yāo-wǔ-wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?", translation: "82304155, apakah ini nomor telepon Guru Li?" },
        { speaker: "B", hanzi: "不是。她的电话是82304156。", pinyin: "Bú shì. Tā de diànhuà shì bā-èr-sān-líng-sì-yāo-wǔ-liù.", translation: "Bukan. Nomor teleponnya adalah 82304156." },
        { speaker: "A", hanzi: "好，我现在给她打电话。", pinyin: "Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.", translation: "Baik, sekarang saya akan meneleponnya." },
        { speaker: "B", hanzi: "她在工作呢，你下午打吧。", pinyin: "Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.", translation: "Dia sedang bekerja, teleponlah nanti sore." }
      ]
    ],
    vocab: [
      { hanzi: "喂", pinyin: "wèi", translation: "halo (di telepon)", pos: "int.", example: "喂，你好！" },
      { hanzi: "也", pinyin: "yě", translation: "juga", pos: "adv.", example: "我也喜欢中文。" },
      { hanzi: "学习", pinyin: "xuéxí", translation: "belajar", pos: "v.", example: "努力学习。" },
      { hanzi: "上午", pinyin: "shàngwǔ", translation: "pagi menjelang siang", pos: "n.", example: "上午十点。" },
      { hanzi: "睡觉", pinyin: "shuìjiào", translation: "tidur", pos: "v.", example: "早点睡觉。" },
      { hanzi: "电视", pinyin: "diànshì", translation: "televisi", pos: "n.", example: "看电视。" },
      { hanzi: "喜欢", pinyin: "xǐhuan", translation: "menyukai, gemar", pos: "v.", example: "我喜欢你。" },
      { hanzi: "给", pinyin: "gěi", translation: "memberi / kepada", pos: "prep./v.", example: "给他打电话。" },
      { hanzi: "打电话", pinyin: "dǎ diànhuà", translation: "menelepon", pos: "v. phrase", example: "正在打电话。" },
      { hanzi: "吧", pinyin: "ba", translation: "lah / kan (partikel saran/ajakan)", pos: "part.", example: "走吧！" }
    ],
    grammar: [
      {
        rule: "Aksi Sedang Berlangsung '在...呢'",
        desc: "Pola: Subjek + 在 + Kata Kerja + 呢 (menyatakan aktivitas yang sedang berlangsung). Bentuk negasinya menggunakan 没(在) tanpa partikel 呢.",
        example: "我在看书呢。(Saya sedang membaca buku.) vs 他没看书。(Dia tidak sedang membaca buku.)"
      },
      {
        rule: "Penyebutan Angka 1 pada Nomor Telepon",
        desc: "Pada nomor telepon, angka 1 dibaca sebagai 'yāo' (bukan yī) agar tidak rancu dengan angka 7 (qī).",
        example: "82304156 dibaca: bā-èr-sān-líng-sì-yāo-wǔ-liù"
      }
    ],
    phoneticsInfo: [
      "Kombinasi 3 suku kata: Nada 2 di depan (yánjiūshēng, tán gāngqín, túshūguǎn)",
      "Radikal: 日字旁 (日 - matahari/waktu: 明, 时) dan 目字旁 (目 - mata/melihat: 眼, 睡)"
    ],
    charactersInfo: {
      strokes: ["日 (rì)", "目 (mù)", "习 (xí)"],
      characters: ["日", "目", "习"]
    },
    quiz: [
      {
        q: "Bagaimana cara membaca angka '1' dalam penyebutan nomor telepon?",
        options: ["yī", "yāo", "yí", "yì"],
        answer: 1,
        explanation: "Nomor telepon membaca angka 1 sebagai 'yāo' untuk membedakannya dengan angka 7 (qī)."
      }
    ]
  },
  {
    id: 14,
    title: "她买了不少衣服",
    pinyinTitle: "Tā mǎi le bù shǎo yīfu",
    translation: "Dia Membeli Cukup Banyak Pakaian",
    dialogues: [
      [
        { speaker: "A", hanzi: "昨天上午你去哪儿了？", pinyin: "Zuótiān shàngwǔ nǐ qù nǎr le?", translation: "Kemarin pagi kamu pergi ke mana?" },
        { speaker: "B", hanzi: "我去商店买东西了。", pinyin: "Wǒ qù shāngdiàn mǎi dōngxi le.", translation: "Saya pergi ke toko membeli barang." },
        { speaker: "A", hanzi: "你买什么了？", pinyin: "Nǐ mǎi shénme le?", translation: "Apa yang sudah kamu beli?" },
        { speaker: "B", hanzi: "我买了一点儿苹果。", pinyin: "Wǒ mǎi le yìdiǎnr píngguǒ.", translation: "Saya membeli sedikit buah apel." }
      ],
      [
        { speaker: "A", hanzi: "你看见张先生了吗？", pinyin: "Nǐ kànjiàn Zhāng xiānsheng le ma?", translation: "Apakah kamu sudah melihat Tuan Zhang?" },
        { speaker: "B", hanzi: "看见了，他去学开车了。", pinyin: "Kànjiàn le, tā qù xué kāi chē le.", translation: "Sudah lihat, dia pergi belajar menyetir mobil." },
        { speaker: "A", hanzi: "他什么时候能回来？", pinyin: "Tā shénme shíhou néng huílái?", translation: "Kapan dia bisa kembali?" },
        { speaker: "B", hanzi: "40分钟后回来。", pinyin: "Sìshí fēnzhōng hòu huílái.", translation: "40 menit lagi akan kembali." }
      ],
      [
        { speaker: "A", hanzi: "王方的衣服太漂亮了！", pinyin: "Wáng Fāng de yīfu tài piàoliang le!", translation: "Pakaian Wang Fang cantik sekali!" },
        { speaker: "B", hanzi: "是啊，她买了不少衣服。", pinyin: "Shì a, tā mǎi le bù shǎo yīfu.", translation: "Benar sekali, dia membeli cukup banyak pakaian." },
        { speaker: "A", hanzi: "你买什么了？", pinyin: "Nǐ mǎi shénme le?", translation: "Apa yang kamu beli?" },
        { speaker: "B", hanzi: "我没买，这些都是王方的东西。", pinyin: "Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.", translation: "Saya tidak beli apa-apa, semua ini barang milik Wang Fang." }
      ]
    ],
    vocab: [
      { hanzi: "东西", pinyin: "dōngxi", translation: "barang, benda", pos: "n.", example: "买东西。" },
      { hanzi: "一点儿", pinyin: "yìdiǎnr", translation: "sedikit", pos: "m.", example: "喝一点儿水。" },
      { hanzi: "苹果", pinyin: "píngguǒ", translation: "apel", pos: "n.", example: "红苹果。" },
      { hanzi: "看见", pinyin: "kànjiàn", translation: "melihat / tampak", pos: "v.", example: "我看见他了。" },
      { hanzi: "先生", pinyin: "xiānsheng", translation: "tuan / bapak / suami", pos: "n.", example: "张先生。" },
      { hanzi: "开", pinyin: "kāi", translation: "membuka / menyetir", pos: "v.", example: "开门，开车。" },
      { hanzi: "车", pinyin: "chē", translation: "mobil / kendaraan", pos: "n.", example: "出租车。" },
      { hanzi: "回来", pinyin: "huílái", translation: "kembali, pulang ke sini", pos: "v.", example: "他回来了。" },
      { hanzi: "分钟", pinyin: "fēnzhōng", translation: "menit (durasi)", pos: "n.", example: "十分钟后。" },
      { hanzi: "后", pinyin: "hòu", translation: "setelah / kemudian", pos: "n.", example: "三天后。" },
      { hanzi: "衣服", pinyin: "yīfu", translation: "pakaian, baju", pos: "n.", example: "漂亮的衣服。" },
      { hanzi: "漂亮", pinyin: "piàoliang", translation: "cantik, indah", pos: "adj.", example: "很漂亮。" },
      { hanzi: "啊", pinyin: "a", translation: "partikel penegas / seru", pos: "part.", example: "是啊！" },
      { hanzi: "少", pinyin: "shǎo", translation: "sedikit", pos: "adj.", example: "人很少。" },
      { hanzi: "不少", pinyin: "bù shǎo", translation: "tidak sedikit / banyak", pos: "adj.", example: "不少人。" },
      { hanzi: "这些", pinyin: "zhèxiē", translation: "ini semua / ini", pos: "pron.", example: "这些东西。" },
      { hanzi: "都", pinyin: "dōu", translation: "semua, seluruhnya", pos: "adv.", example: "我们都是学生。" }
    ],
    grammar: [
      {
        rule: "Partikel Selesai '了' (le)",
        desc: "Diletakkan tepat di belakang kata kerja untuk menandakan bahwa suatu tindakan telah terjadi atau diselesaikan.",
        example: "我买了一点儿苹果。(Saya telah membeli sedikit buah apel.)"
      },
      {
        rule: "Kata Keterangan Waktu '...后' (hòu)",
        desc: "Diletakkan setelah durasi waktu untuk menyatakan 'setelah' atau '...kemudian'.",
        example: "40分钟后回来。(Akan kembali setelah 40 menit.)"
      },
      {
        rule: "Kata Keterangan '都' (dōu - semua)",
        desc: "Diletakkan sebelum kata kerja utama untuk merangkum semua subjek di depannya.",
        example: "这些都是王方的东西。(Semua ini adalah barang milik Wang Fang.)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi 3 suku kata: Nada 3 di depan (xǐyījī, pǔtōngrén, zǒngjīnglǐ)",
      "Radikal: 肉月旁 (月 - daging/tubuh: 服, 胖) dan 提手旁 (扌 - tangan: 打, 找)"
    ],
    charactersInfo: {
      strokes: ["独体字 (Single components)"],
      characters: ["开", "车", "回"]
    },
    quiz: [
      {
        q: "Lengkapilah: '我们____是学习汉语的学生。'",
        options: ["都 (dōu)", "也 (yě)", "在 (zài)", "了 (le)"],
        answer: 0,
        explanation: "都 (dōu) merangkum keseluruhan anggota subjek majemuk '我们'."
      }
    ]
  },
  {
    id: 15,
    title: "我是坐飞机来的",
    pinyinTitle: "Wǒ shì zuò fēijī lái de",
    translation: "Saya Datang Naik Pesawat Terbang",
    dialogues: [
      [
        { speaker: "A", hanzi: "你和李小姐是什么时候认识的？", pinyin: "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?", translation: "Kapan kamu dan Nona Li saling mengenal?" },
        { speaker: "B", hanzi: "我们是2011年9月认识的。", pinyin: "Wǒmen shì èr-líng-yī-yī nián jiǔ yuè rènshi de.", translation: "Kami saling kenal pada bulan September 2011." },
        { speaker: "A", hanzi: "你们在哪儿认识的？", pinyin: "Nǐmen zài nǎr rènshi de?", translation: "Di mana kalian saling mengenal?" },
        { speaker: "B", hanzi: "我们是在学校认识的，她是我大学同学。", pinyin: "Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.", translation: "Kami saling kenal di sekolah, dia teman kuliahku." }
      ],
      [
        { speaker: "A", hanzi: "你们是怎么来饭店的？", pinyin: "Nǐmen shì zěnme lái fàndiàn de?", translation: "Bagaimana cara kalian datang ke restoran/hotel ini?" },
        { speaker: "B", hanzi: "我们是坐出租车来的。", pinyin: "Wǒmen shì zuò chūzūchē lái de.", translation: "Kami datang dengan naik taksi." },
        { speaker: "A", hanzi: "李先生呢？", pinyin: "Lǐ xiānsheng ne?", translation: "Kalau Tuan Li?" },
        { speaker: "B", hanzi: "他是和朋友一起开车来的。", pinyin: "Tā shì hé péngyou yìqǐ kāi chē lái de.", translation: "Dia datang menyetir mobil bersama temannya." }
      ],
      [
        { speaker: "A", hanzi: "很高兴认识您，李小姐。", pinyin: "Hěn gāoxìng rènshi nín, Lǐ xiǎojiě.", translation: "Sangat senang berkenalan dengan Anda, Nona Li." },
        { speaker: "B", hanzi: "认识你我也很高兴！", pinyin: "Rènshi nǐ wǒ yě hěn gāoxìng!", translation: "Senang berkenalan denganmu juga!" },
        { speaker: "A", hanzi: "听张先生说，您是坐飞机来北京的？", pinyin: "Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?", translation: "Mendengar Tuan Zhang berkata, Anda datang ke Beijing naik pesawat?" },
        { speaker: "B", hanzi: "是的。", pinyin: "Shì de.", translation: "Iya, benar." }
      ]
    ],
    vocab: [
      { hanzi: "认识", pinyin: "rènshi", translation: "mengenal, mengetahui", pos: "v.", example: "很高兴认识你。" },
      { hanzi: "年", pinyin: "nián", translation: "tahun", pos: "n.", example: "2026年。" },
      { hanzi: "大学", pinyin: "dàxué", translation: "universitas / perguruan tinggi", pos: "n.", example: "大学同学。" },
      { hanzi: "饭店", pinyin: "fàndiàn", translation: "restoran / hotel", pos: "n.", example: "去饭店吃饭。" },
      { hanzi: "出租车", pinyin: "chūzūchē", translation: "taksi", pos: "n.", example: "坐出租车。" },
      { hanzi: "一起", pinyin: "yìqǐ", translation: "bersama-sama", pos: "adv.", example: "我们一起学习。" },
      { hanzi: "高兴", pinyin: "gāoxìng", translation: "senang, gembira", pos: "adj.", example: "今天很高兴。" },
      { hanzi: "听", pinyin: "tīng", translation: "mendengar, menyimak", pos: "v.", example: "听录音。" },
      { hanzi: "飞机", pinyin: "fēijī", translation: "pesawat terbang", pos: "n.", example: "坐飞机去中国。" }
    ],
    grammar: [
      {
        rule: "Struktur Penekanan '是...的' (shì...de)",
        desc: "Ketika suatu kejadian telah diketahui terjadi di masa lalu, pola '是...的' digunakan untuk menekankan waktu, tempat, atau cara/moda terjadinya peristiwa tersebut.",
        example: "我是坐飞机来的。(Saya datangnya NAIK PESAWAT.) | 我们是2011年认识的。(Kami kenalnya TAHUN 2011.)"
      },
      {
        rule: "Bentuk Negasi '不是...的'",
        desc: "Bila menyangkal detail cara/tempat/waktu tersebut, gunakan '不是...的'.",
        example: "我不是坐飞机来的，我是坐出租车来的。(Saya bukan datang naik pesawat, saya naik taksi.)"
      }
    ],
    phoneticsInfo: [
      "Kombinasi 3 suku kata: Nada 4 di depan (diànbīngxiāng, màidāngláo, jiànshēnguǎn)",
      "Radikal: 草字头 (艹 - rumput/tumbuhan: 茶, 菜) dan 宝盖头 (宀 - atap rumah: 安, 家)"
    ],
    charactersInfo: {
      strokes: ["独体字 (Single components)"],
      characters: ["年", "出", "飞"],
      radicals: { radical: "艹 dan 宀", meaning: "Terkait tumbuhan dan rumah/naungan", examples: ["茶", "菜", "家", "安"] }
    },
    quiz: [
      {
        q: "Fungsi struktur '是...的' dalam kalimat '我是坐飞机来的' adalah...",
        options: ["Menyatakan rencana masa depan", "Menekankan cara/moda transportasi kedatangan masa lalu", "Meminta izin", "Menunjukkan kepemilikan"],
        answer: 1,
        explanation: "Pola 是...的 menekankan rincian peristiwa masa lalu (di sini menekankan moda '坐飞机')."
      }
    ]
  }
];

export const HSK_LESSONS: HSKLesson[] = RAW_HSK_LESSONS.map((lesson) => ({
  ...lesson,
  grammar: getGrammarByChapter(lesson.id)
}));
