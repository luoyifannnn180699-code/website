import { GrammarItem } from '../types';

export const HSK1_COMPLETE_GRAMMAR: GrammarItem[] = [
  // ==========================================
  // BAB 1: 你好 (Nǐ hǎo)
  // ==========================================
  {
    id: 'g-1-1',
    chapterId: 1,
    category: 'Struktur Kalimat Dasar',
    rule: 'Membuat Kalimat Sederhana Bahasa Mandarin (Pola S + V + O)',
    formula: 'Subjek (S) + Kata Kerja (V) + Objek (O)',
    desc: 'Struktur kalimat dasar dalam bahasa Mandarin sama seperti bahasa Indonesia, yaitu mengikuti pola Subjek + Predikat (Kata Kerja) + Objek (S + V + O). Bahasa Mandarin tidak mengenal perubahan bentuk kata kerja berdasarkan waktu (tenses) maupun jumlah subjek (tunggal/jamak), sehingga kata kerjanya selalu tetap.',
    notes: [
      'Subjek dapat berupa kata ganti orang: 我 (wǒ - saya), 你 (nǐ - kamu), 他 (tā - dia laki-laki), 她 (tā - dia perempuan).',
      'Jika predikatnya berupa kata sifat (adjektiva), tidak boleh menggunakan 是 (shì), melainkan dihubungkan dengan kata keterangan derajat seperti 很 (hěn).',
      'Keterangan waktu dan tempat selalu diletakkan SEBELUM kata kerja, bukan di akhir kalimat seperti bahasa Indonesia.'
    ],
    example: '我学汉语。(Wǒ xué Hànyǔ. — Saya belajar bahasa Mandarin.)',
    examples: [
      {
        hanzi: '我学汉语。',
        traditional: '我學漢語。',
        pinyin: 'Wǒ xué Hànyǔ.',
        translation: 'Saya belajar bahasa Mandarin.'
      },
      {
        hanzi: '我喜欢苹果。',
        traditional: '我喜歡蘋果。',
        pinyin: 'Wǒ xǐhuan píngguǒ.',
        translation: 'Saya suka buah apel.'
      },
      {
        hanzi: '他吃米饭。',
        traditional: '他吃米飯。',
        pinyin: 'Tā chī mǐfàn.',
        translation: 'Dia makan nasi.'
      }
    ]
  },
  {
    id: 'g-1-2',
    chapterId: 1,
    category: 'Kata Ganti & Sapaan',
    rule: 'Salam Dasar "你好", Sapaan Sopan "您好", dan Jamak "们"',
    formula: 'Subjek / Sapaan + 好 (hǎo)',
    desc: '你好 (Nǐ hǎo) adalah sapaan paling umum yang berarti "Halo" atau "Apa kabar", digunakan kepada teman sebaya, kenalan baru, atau orang yang lebih muda. Untuk menyapa orang yang lebih tua, guru, atasan, atau orang yang dihormati, ganti 你 (nǐ) menjadi 您 (nín) sehingga menjadi 您好 (Nín hǎo). Untuk menyapa banyak orang sekaligus, tambahkan sufiks jamak 们 (men) menjadi 你们好 (Nǐmen hǎo).',
    notes: [
      'Aturan Tone Sandhi (Perubahan Nada): Ketika dua kata bernada ke-3 bertemu (nǐ + hǎo), suku kata pertama dibaca menjadi nada ke-2 (ní hǎo).',
      'Kata 您 (nín) tidak bisa ditambahkan 们 (tidak ada bentuk 您们好, gunakan 大家 / 你们好).',
      'Jawaban untuk sapaan 你好！ cukup dengan membalas 你好！'
    ],
    example: '您好，老师！(Nín hǎo, lǎoshī! — Halo, Guru!)',
    examples: [
      {
        hanzi: '你好！',
        traditional: '你好！',
        pinyin: 'Nǐ hǎo!',
        translation: 'Halo! (Kepada teman / umum)'
      },
      {
        hanzi: '老师，您好！',
        traditional: '老師，您好！',
        pinyin: 'Lǎoshī, nín hǎo!',
        translation: 'Guru, halo! (Sopan / hormat)'
      },
      {
        hanzi: '你们好！',
        traditional: '你們好！',
        pinyin: 'Nǐmen hǎo!',
        translation: 'Halo kalian semua!'
      }
    ]
  },
  {
    id: 'g-1-3',
    chapterId: 1,
    category: 'Ungkapan Sehari-hari',
    rule: 'Meminta Maaf "对不起" & Membalas dengan "没关系"',
    formula: 'A: 对不起 (Duìbuqǐ)  ➔  B: 没关系 (Méi guānxi)',
    desc: '对不起 (duìbuqǐ) digunakan untuk meminta maaf ketika melakukan kesalahan atau mengganggu orang lain. Balasan yang paling sopan dan lazim dalam bahasa Mandarin adalah 没关系 (méi guānxi) yang berarti "Tidak apa-apa" atau "Bukan masalah".',
    notes: [
      'Suku kata tengah 不 (bu) pada 对不起 dan 系 (xi) pada 没关系 dibaca dengan nada netral (ringan dan pendek).',
      '对不起 secara harfiah berarti "tidak sanggup menghadap dengan layak", menunjukkan rasa penyesalan yang tulus.'
    ],
    example: 'A: 对不起！ B: 没关系！(A: Maaf! B: Tidak apa-apa!)',
    examples: [
      {
        hanzi: '对不起，我来晚了。',
        traditional: '對不起，我來晚了。',
        pinyin: 'Duìbuqǐ, wǒ lái wǎn le.',
        translation: 'Maaf, saya datang terlambat.'
      },
      {
        hanzi: '没关系，请坐吧。',
        traditional: '沒關係，請坐吧。',
        pinyin: 'Méi guānxi, qǐng zuò ba.',
        translation: 'Tidak apa-apa, silakan duduk.'
      }
    ]
  },

  // ==========================================
  // BAB 2: 谢谢你 (Xièxie nǐ)
  // ==========================================
  {
    id: 'g-2-1',
    chapterId: 2,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Kata Negasi "不" (bù) & Aturan Perubahan Nada (Tone Sandhi)',
    formula: 'Subjek + 不 (bù / bú) + Kata Kerja / Kata Sifat',
    desc: 'Kata 不 (bù) berarti "tidak" atau "bukan". Digunakan untuk menyangkal tindakan di masa sekarang, masa depan, kebiasaan sehari-hari, atau menyangkal kata sifat. Secara asli 不 bernada ke-4 (bù), tetapi jika diikuti oleh kata yang juga bernada ke-4, maka cara bacanya WAJIB berubah menjadi nada ke-2 (bú).',
    notes: [
      'Не berubah nada (tetap bù) jika diikuti nada 1, 2, atau 3: 不吃 (bù chī - nada 1), 不来 (bù lái - nada 2), 不好 (bù hǎo - nada 3).',
      'Berubah menjadi nada ke-2 (bú) jika diikuti nada 4: 不是 (bú shì), 不客气 (bú kèqi), 不去 (bú qù), 不看 (bú kàn).'
    ],
    example: '不 (bù) + 客气 (kèqi) ➔ 不客气 (bú kèqi — Sama-sama)',
    examples: [
      {
        hanzi: '我不是老师。',
        traditional: '我不是老師。',
        pinyin: 'Wǒ bú shì lǎoshī.',
        translation: 'Saya bukan seorang guru. (bù + shì ➔ bú shì)'
      },
      {
        hanzi: '今天我不去学校。',
        traditional: '今天我不去學校。',
        pinyin: 'Jīntiān wǒ bú qù xuéxiào.',
        translation: 'Hari ini saya tidak pergi ke sekolah. (bù + qù ➔ bú qù)'
      },
      {
        hanzi: '我不喝茶。',
        traditional: '我不喝茶。',
        pinyin: 'Wǒ bù hē chá.',
        translation: 'Saya tidak minum teh. (Tetap bù karena diikuti nada 1)'
      }
    ]
  },
  {
    id: 'g-2-2',
    chapterId: 2,
    category: 'Ungkapan Sehari-hari',
    rule: 'Mengucapkan Terima Kasih "谢谢" & Balasan "不客气 / 不谢"',
    formula: '谢谢 + (Objek Orang)  ➔  不客气 / 不谢 / 不用谢',
    desc: '谢谢 (xièxie) berarti "terima kasih". Anda dapat menambahkan objek orang setelahnya, seperti 谢谢你 (terima kasih kepadamu) atau 谢谢老师 (terima kasih Guru). Untuk membalasnya dengan arti "sama-sama / jangan sungkan", gunakan 不客气 (bú kèqi), 不谢 (bú xiè), atau 不用谢 (bú yòng xiè).',
    notes: [
      '客气 (kèqi) berarti "sungkan/sopan berlebihan", sehingga 不客气 secara harfiah berarti "jangan sungkan".',
      'Kedua kata 谢谢 memiliki karakter yang sama; suku kata pertama bernada ke-4 (xiè) dan suku kata kedua bernada netral (xie).'
    ],
    example: 'A: 谢谢你！ B: 不客气！(A: Terima kasih! B: Sama-sama!)',
    examples: [
      {
        hanzi: '谢谢你的帮助！',
        traditional: '謝謝你的幫助！',
        pinyin: 'Xièxie nǐ de bāngzhù!',
        translation: 'Terima kasih atas bantuanmu!'
      },
      {
        hanzi: '不客气，我们是好朋友。',
        traditional: '不客氣，我們是好朋友。',
        pinyin: 'Bú kèqi, wǒmen shì hǎo péngyou.',
        translation: 'Sama-sama, kita adalah teman baik.'
      }
    ]
  },
  {
    id: 'g-2-3',
    chapterId: 2,
    category: 'Ungkapan Sehari-hari',
    rule: 'Salam Perpisahan dengan "再见" (Zàijiàn)',
    formula: '[Waktu] + 见 (jiàn)  |  再见 (Zàijiàn)',
    desc: '再见 (zàijiàn) berarti "sampai jumpa" (secara harfiah: 再 zài = lagi, 见 jiàn = bertemu). Selain 再见, Anda juga dapat mengganti kata 再 dengan keterangan waktu seperti 明天见 (Míngtiān jiàn = Sampai jumpa besok).',
    notes: [
      'Jangan gunakan 再见 untuk menyapa saat baru bertemu; gunakan hanya saat berpamitan.'
    ],
    example: '老师，再见！明天见！(Lǎoshī, zàijiàn! Míngtiān jiàn! — Guru, sampai jumpa! Sampai jumpa besok!)',
    examples: [
      {
        hanzi: '再见！明天见！',
        traditional: '再見！明天見！',
        pinyin: 'Zàijiàn! Míngtiān jiàn!',
        translation: 'Sampai jumpa! Sampai bertemu besok!'
      },
      {
        hanzi: '下星期见！',
        traditional: '下星期見！',
        pinyin: 'Xià xīngqī jiàn!',
        translation: 'Sampai jumpa minggu depan!'
      }
    ]
  },

  // ==========================================
  // BAB 3: 你叫什么名字 (Nǐ jiào shénme míngzi)
  // ==========================================
  {
    id: 'g-3-1',
    chapterId: 3,
    category: 'Kata Kerja & Modal',
    rule: 'Penggunaan Kata Kerja "叫" (jiào - Dipanggil / Bernama)',
    formula: 'Subjek + 叫 (jiào) + Nama Lengkap / Nama Panggilan',
    desc: 'Kata kerja 叫 (jiào) berarti "dipanggil" atau "bernama". Digunakan untuk memperkenalkan nama sendiri maupun menanyakan nama orang lain. Setelah kata 叫, kita dapat langsung menyebutkan nama lengkap ataupun nama panggilan.',
    notes: [
      'Untuk menanyakan nama secara lengkap digunakan kalimat: 你叫什么名字？ (Nǐ jiào shénme míngzi?).',
      'Berbeda dengan 是 (shì) yang berarti "adalah", 叫 khusus menekankan "panggilan/nama".'
    ],
    example: '我叫李月。(Wǒ jiào Lǐ Yuè. — Nama saya adalah Li Yue.)',
    examples: [
      {
        hanzi: '我叫李月。',
        traditional: '我叫李月。',
        pinyin: 'Wǒ jiào Lǐ Yuè.',
        translation: 'Nama saya Li Yue / Saya dipanggil Li Yue.'
      },
      {
        hanzi: '你的朋友叫什么名字？',
        traditional: '你的朋友叫什麼名字？',
        pinyin: 'Nǐ de péngyou jiào shénme míngzi?',
        translation: 'Siapa nama temanmu?'
      },
      {
        hanzi: '他叫大卫。',
        traditional: '他叫大衛。',
        pinyin: 'Tā jiào Dàwèi.',
        translation: 'Dia bernama David.'
      }
    ]
  },
  {
    id: 'g-3-2',
    chapterId: 3,
    category: 'Kata Ganti Interogatif',
    rule: 'Kata Ganti Interogatif "什么" (shénme - Apa)',
    formula: 'Subjek + Kata Kerja + 什么 + (Kata Benda)?',
    desc: 'Kata ganti tanya 什么 (shénme) berarti "apa". Dalam bahasa Mandarin, posisi kata tanya 什么 tidak diletakkan di awal kalimat seperti bahasa Indonesia, melainkan diletakkan tepat di posisi objek atau informasi yang ingin ditanyakan. Kata 什么 dapat berdiri sendiri sebagai objek setelah kata kerja, atau diikuti kata benda di belakangnya.',
    notes: [
      'Jangan menambahkan partikel 吗 (ma) lagi di akhir kalimat yang sudah memiliki kata tanya 什么!',
      'Jika diikuti kata benda, 什么 berfungsi menanyakan spesifikasi benda tersebut: 什么名字 (nama apa/siapa), 什么书 (buku apa), 什么菜 (masakan apa).'
    ],
    example: '这是什么？(Zhè shì shénme? — Apa ini?) | 你买什么？(Nǐ mǎi shénme? — Kamu beli apa?)',
    examples: [
      {
        hanzi: '这是什么？',
        traditional: '這是什麼？',
        pinyin: 'Zhè shì shénme?',
        translation: 'Apa ini?'
      },
      {
        hanzi: '你买什么？',
        traditional: '你買什麼？',
        pinyin: 'Nǐ mǎi shénme?',
        translation: 'Kamu membeli apa?'
      },
      {
        hanzi: '你在做什么？',
        traditional: '你在做什麼？',
        pinyin: 'Nǐ zài zuò shénme?',
        translation: 'Apa yang sedang kamu lakukan?'
      },
      {
        hanzi: '他看什么书？',
        traditional: '他看什麼書？',
        pinyin: 'Tā kàn shénme shū?',
        translation: 'Buku apa yang dia baca?'
      }
    ]
  },
  {
    id: 'g-3-3',
    chapterId: 3,
    category: 'Kata Kerja & Modal',
    rule: 'Penggunaan Kata "是" (shì - Adalah) & Negasinya "不是"',
    formula: '(+) Subjek + 是 + Kata Benda  |  (-) Subjek + 不是 + Kata Benda',
    desc: 'Kata 是 (shì) berfungsi sebagai kopula ("adalah" / "to be") yang menghubungkan Subjek dengan Objek Kata Benda (identitas, profesi, kewarganegaraan, atau benda). Bentuk negatifnya dibentuk dengan menambahkan 不 (bù) di depan 是 menjadi 不是 (bú shì = bukan).',
    notes: [
      'PENTING: Kata 是 (shì) HANYA digunakan untuk menghubungkan kata benda, dan TIDAK BOLEH digunakan di depan kata sifat! (Contoh salah: 我是高 ❌, yang benar: 我很高 ✅).',
      'Saat diucapkan, 不是 dibaca "bú shì" (nada 2 + nada 4) karena aturan perubahan nada 不.'
    ],
    example: '李月是老师。(Lǐ Yuè shì lǎoshī. — Li Yue adalah guru.) | 我不是老师。(Wǒ bú shì lǎoshī. — Saya bukan guru.)',
    examples: [
      {
        hanzi: '我是学生。',
        traditional: '我是學生。',
        pinyin: 'Wǒ shì xuésheng.',
        translation: 'Saya adalah seorang siswa.'
      },
      {
        hanzi: '我不是中国人，我是印尼人。',
        traditional: '我不是中國人，我是印尼人。',
        pinyin: 'Wǒ bú shì Zhōngguó rén, wǒ shì Yìnní rén.',
        translation: 'Saya bukan orang Tiongkok, saya adalah orang Indonesia.'
      },
      {
        hanzi: '她是我的汉语老师。',
        traditional: '她是我的漢語老師。',
        pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.',
        translation: 'Dia adalah guru bahasa Mandarin saya.'
      }
    ]
  },
  {
    id: 'g-3-4',
    chapterId: 3,
    category: 'Partikel',
    rule: 'Membentuk Kalimat Interogatif dengan Partikel "吗" (ma)',
    formula: 'Kalimat Pernyataan (S + V + O) + 吗 (ma)?',
    desc: 'Partikel 吗 (ma) diletakkan di paling akhir kalimat pernyataan (deklaratif) untuk mengubahnya menjadi kalimat tanya "Ya / Tidak" (Apakah...?). Susunan kata dalam kalimat sama sekali tidak berubah, cukup tambahkan 吗 dan tanda tanya di akhir kalimat.',
    notes: [
      'Jangan gunakan 吗 jika di dalam kalimat sudah ada kata tanya seperti 什么 (apa), 谁 (siapa), 哪儿 (di mana), 几 (berapa), atau 怎么 (bagaimana).',
      'Untuk menjawab "Ya", ulangi kata kerja utamanya (misal: 是 shì / 会 huì / 有 yǒu). Untuk menjawab "Tidak", gunakan negasi + kata kerja (不是 bú shì / 不会 bú huì / 没有 méiyǒu).'
    ],
    example: '你是中国人吗？(Nǐ shì Zhōngguó rén ma? — Apakah kamu orang Cina?)',
    examples: [
      {
        hanzi: '你是老师吗？',
        traditional: '你是老師嗎？',
        pinyin: 'Nǐ shì lǎoshī ma?',
        translation: 'Apakah kamu seorang guru?'
      },
      {
        hanzi: '你很累吗？',
        traditional: '你很累嗎？',
        pinyin: 'Nǐ hěn lèi ma?',
        translation: 'Apakah kamu lelah?'
      },
      {
        hanzi: '明天你去学校吗？',
        traditional: '明天你去學校嗎？',
        pinyin: 'Míngtiān nǐ qù xuéxiào ma?',
        translation: 'Apakah besok kamu pergi ke sekolah?'
      }
    ]
  },

  // ==========================================
  // BAB 4: 她是我的汉语老师 (Tā shì wǒ de Hànyǔ lǎoshī)
  // ==========================================
  {
    id: 'g-4-1',
    chapterId: 4,
    category: 'Kata Ganti Interogatif',
    rule: 'Kata Ganti Interogatif "谁" (shéi / shuí - Siapa)',
    formula: 'Subjek + 是 + 谁？  |  谁 + Kata Kerja + Objek？',
    desc: 'Kata ganti tanya 谁 (dibaca shéi atau shuí) berarti "siapa". Kata ini dapat diletakkan di posisi subjek (di awal kalimat sebelum kata kerja) maupun di posisi objek (setelah kata kerja seperti 是). Jika ditambahkan partikel 的 menjadi 谁的 (shéi de), artinya berubah menjadi "milik siapa".',
    notes: [
      'Pelafalan "shéi" lebih sering dipakai dalam percakapan sehari-hari dibanding "shuí", namun keduanya benar.',
      'Urutan kalimat tetap normal seperti kalimat berita: 他是谁？ (Dia adalah siapa? = Siapakah dia?).'
    ],
    example: '他是谁？(Tā shì shéi? — Siapakah dia?) | 谁是你的老师？(Shéi shì nǐ de lǎoshī? — Siapa gurumu?)',
    examples: [
      {
        hanzi: '他是谁？',
        traditional: '他是誰？',
        pinyin: 'Tā shì shéi?',
        translation: 'Siapakah dia?'
      },
      {
        hanzi: '谁是你的汉语老师？',
        traditional: '誰是你的漢語老師？',
        pinyin: 'Shéi shì nǐ de Hànyǔ lǎoshī?',
        translation: 'Siapa guru bahasa Mandarinmu?'
      },
      {
        hanzi: '这是谁的书？',
        traditional: '這是誰的書？',
        pinyin: 'Zhè shì shéi de shū?',
        translation: 'Buku milik siapa ini?'
      }
    ]
  },
  {
    id: 'g-4-2',
    chapterId: 4,
    category: 'Partikel',
    rule: 'Penggunaan Partikel Kepemilikan "的" (de)',
    formula: 'Pemilik / Keterangan (Kata Benda/Ganti) + 的 (de) + Kata Benda Utama',
    desc: 'Partikel 的 (de) digunakan untuk menyatakan kepemilikan atau menerangkan kata benda. Cara mengartikannya KEBALIKAN dari bahasa Indonesia (diartikan dari belakang ke depan): objek utamanya diletakkan setelah 的, sedangkan pemilik atau penjelasnya diletakkan sebelum 的.',
    notes: [
      'Pengecualian Hubungan Dekat: Jika menyatakan hubungan keluarga dekat, kerabat, atau institusi sendiri (seperti 妈妈, 爸爸, 朋友, 同学, 学校, 家), partikel 的 sering dihilangkan. Contoh: 我妈妈 (ibuku), 我朋友 (temanku).',
      'Jika dalam satu frasa terdapat dua hubungan kepemilikan, 的 yang pertama biasanya dihilangkan agar kalimat tidak kaku: 我朋友的书 (bukunya teman saya).'
    ],
    example: '我的书 (Wǒ de shū — Buku saya) | 印尼的首都 (Yìnní de shǒudū — Ibukota Indonesia)',
    examples: [
      {
        hanzi: '我的妈妈',
        traditional: '我的媽媽',
        pinyin: 'Wǒ de māma',
        translation: 'Ibu saya'
      },
      {
        hanzi: '他的电脑',
        traditional: '他的電腦',
        pinyin: 'Tā de diànnǎo',
        translation: 'Komputer miliknya'
      },
      {
        hanzi: '印尼的首都',
        traditional: '印尼的首都',
        pinyin: 'Yìnní de shǒudū',
        translation: 'Ibukota Indonesia'
      },
      {
        hanzi: '中国的留学生',
        traditional: '中國的留學生',
        pinyin: 'Zhōngguó de liúxuéshēng',
        translation: 'Mahasiswa asing di Tiongkok'
      }
    ]
  },
  {
    id: 'g-4-3',
    chapterId: 4,
    category: 'Partikel',
    rule: 'Partikel Interogatif "呢" (ne - Kalau...? / Bagaimana dengan...?)',
    formula: 'Kalimat Konteks, + Topik/Subjek Baru + 呢 (ne)?',
    desc: 'Partikel 呢 (ne) digunakan di akhir kata benda atau kata ganti untuk mengajukan pertanyaan balik ("Kalau kamu?", "Bagaimana dengan dia?") berdasarkan konteks kalimat yang sudah disebutkan sebelumnya, tanpa perlu mengulang seluruh kalimat pertanyaan.',
    notes: [
      'Fungsi 1 (Pertanyaan Timbal Balik): 我是学生，你呢？ (Saya siswa, kalau kamu?).',
      'Fungsi 2 (Menanyakan keberadaan ketika tidak ada konteks sebelumnya): 我的书呢？ (Di mana bukuku?).'
    ],
    example: '我是中国人，你呢？(Wǒ shì Zhōngguó rén, nǐ ne? — Saya orang Cina, kalau kamu?)',
    examples: [
      {
        hanzi: '我很好，你呢？',
        traditional: '我很好，你呢？',
        pinyin: 'Wǒ hěn hǎo, nǐ ne?',
        translation: 'Saya sangat baik, bagaimana denganmu?'
      },
      {
        hanzi: '他是我的同学。她呢？',
        traditional: '他是我的同學。她呢？',
        pinyin: 'Tā shì wǒ de tóngxué. Tā ne?',
        translation: 'Dia (pria) teman sekelasku. Kalau dia (wanita)?'
      },
      {
        hanzi: '我的手机呢？',
        traditional: '我的手機呢？',
        pinyin: 'Wǒ de shǒujī ne?',
        translation: 'Di mana handphone saya?'
      }
    ]
  },
  {
    id: 'g-4-4',
    chapterId: 4,
    category: 'Perbandingan Penting',
    rule: 'Kata Tanya "哪" (nǎ) & Perbedaan "那" (nà - Itu) vs "哪" (nǎ - Mana)',
    formula: '哪 (nǎ) + Kata Satuan / 国 + Kata Benda?  vs  那 (nà) + Kata Satuan + Kata Benda',
    desc: 'Kata 哪 (nǎ, nada 3) dan 那 (nà, nada 4) memiliki pelafalan dan bentuk karakter Hanzi yang sangat mirip, tetapi artinya jauh berbeda. 哪 (memiliki radikal mulut 口 di sebelah kiri) adalah kata tanya yang berarti "mana / yang mana". Sedangkan 那 (tanpa radikal 口) adalah kata tunjuk yang berarti "itu".',
    notes: [
      'Cara mudah mengingat Hanzi: 哪 memiliki radikal 口 (mulut) di kiri karena "bertanya yang mana" menggunakan mulut!',
      '哪 (nǎ - nada 3): 哪国人？ (Orang negara mana?), 哪个杯子？ (Cangkir yang mana?).',
      '那 (nà - nada 4): 那个人 (Orang itu), 那个杯子 (Cangkir itu), 那是我的书 (Itu adalah buku saya).'
    ],
    example: '她是哪国人？(Tā shì nǎ guó rén? — Dia orang negara mana?) vs 那个人是谁？(Nàge rén shì shéi? — Siapa orang itu?)',
    examples: [
      {
        hanzi: '你是哪国人？',
        traditional: '你是哪國人？',
        pinyin: 'Nǐ shì nǎ guó rén?',
        translation: 'Kamu orang negara mana? (哪 = mana, nada 3)'
      },
      {
        hanzi: '你喜欢哪个杯子？',
        traditional: '你喜歡哪個杯子？',
        pinyin: 'Nǐ xǐhuan nǎge bēizi?',
        translation: 'Kamu suka cangkir yang mana? (哪 = yang mana)'
      },
      {
        hanzi: '那是我的老师。',
        traditional: '那是我的老師。',
        pinyin: 'Nà shì wǒ de lǎoshī.',
        translation: 'Itu adalah guru saya. (那 = itu, nada 4)'
      },
      {
        hanzi: '那个人是我同学。',
        traditional: '那個人是我同學。',
        pinyin: 'Nàge rén shì wǒ tóngxué.',
        translation: 'Orang itu adalah teman sekelas saya.'
      }
    ]
  },

  // ==========================================
  // BAB 5: 她女儿今年二十岁 (Tā nǚ'ér jīnnián èrshí suì)
  // ==========================================
  {
    id: 'g-5-1',
    chapterId: 5,
    category: 'Kata Ganti Interogatif',
    rule: 'Kata Ganti Interogatif "几" (jǐ - Berapa)',
    formula: '几 (jǐ) + Kata Bantu Bilangan (Satuan) + Kata Benda',
    desc: 'Kata tanya 几 (jǐ) berarti "berapa", digunakan khusus untuk menanyakan jumlah angka yang diperkirakan kecil (biasanya di bawah 10), atau digunakan dalam penyebutan waktu (jam, tanggal, bulan, umur anak). Aturan wajibnya: di antara 几 dan Kata Benda HARUS disisipkan Kata Bantu Bilangan (Measure Word).',
    notes: [
      'Contoh dengan kata satuan: 几口人 (berapa orang anggota keluarga), 几本书 (berapa jilid buku), 几个朋友 (berapa orang teman).',
      'Digunakan juga untuk menanyakan tanggal/bulan/jam: 几月 (bulan berapa), 几号 (tanggal berapa), 几点 (jam berapa), 星期几 (hari apa).'
    ],
    example: '你家有几口人？(Nǐ jiā yǒu jǐ kǒu rén? — Keluargamu ada berapa orang?)',
    examples: [
      {
        hanzi: '李老师家有几口人？',
        traditional: '李老師家有幾口人？',
        pinyin: 'Lǐ lǎoshī jiā yǒu jǐ kǒu rén?',
        translation: 'Keluarga Guru Li ada berapa orang?'
      },
      {
        hanzi: '你有几个中国朋友？',
        traditional: '你有幾個中國朋友？',
        pinyin: 'Nǐ yǒu jǐ ge Zhōngguó péngyou?',
        translation: 'Kamu punya berapa orang teman Tiongkok?'
      },
      {
        hanzi: '你想买几本书？',
        traditional: '你想買幾本書？',
        pinyin: 'Nǐ xiǎng mǎi jǐ běn shū?',
        translation: 'Kamu ingin membeli berapa buku?'
      }
    ]
  },
  {
    id: 'g-5-2',
    chapterId: 5,
    category: 'Waktu, Angka & Uang',
    rule: 'Angka 1–100 dalam Bahasa Mandarin',
    formula: 'Belasan: 十 + Satuan (11 = 十一)  |  Puluhan: Angka + 十 + Satuan (25 = 二十五)',
    desc: 'Sistem angka bahasa Mandarin sangat logis dan beraturan. Angka dasar 1–10 adalah: 一 (yī), 二 (èr), 三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ), 十 (shí). Untuk angka 11–19, cukup letakkan angka satuan setelah 十 (contoh: 15 = 十五 shíwǔ). Untuk puluhan (20, 30, dst.), letakkan angka di depan 十 (contoh: 20 = 二十 èrshí, 99 = 九十九 jiǔshíjiǔ).',
    notes: [
      'Angka 0 dalam bahasa Mandarin adalah 零 (líng).',
      'Angka 100 adalah 一百 (yìbǎi).',
      'PENTING Perbedaan 二 (èr) vs 两 (liǎng): Gunakan 二 saat berhitung, nomor urut, nomor telepon, dan angka puluhan (十二, 二十). Gunakan 两 ketika menyatakan jumlah benda di depan Kata Satuan (两个人 = 2 orang, 两本书 = 2 buku, 两点 = jam 2).'
    ],
    example: '她今年二十岁。(Tā jīnnián èrshí suì. — Dia tahun ini berusia 20 tahun.)',
    examples: [
      {
        hanzi: '一、二、三、四、五、六、七、八、九、十',
        traditional: '一、二、三、四、五、六、七、八、九、十',
        pinyin: 'yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí',
        translation: 'Angka dasar 1 sampai 10.'
      },
      {
        hanzi: '她女儿今年二十岁。',
        traditional: '她女兒今年二十歲。',
        pinyin: 'Tā nǚ\'ér jīnnián èrshí suì.',
        translation: 'Putrinya tahun ini berusia 20 tahun.'
      },
      {
        hanzi: '我有两本书。',
        traditional: '我有兩本書。',
        pinyin: 'Wǒ yǒu liǎng běn shū.',
        translation: 'Saya punya dua buku. (Menggunakan 两 di depan kata satuan 本)'
      }
    ]
  },
  {
    id: 'g-5-3',
    chapterId: 5,
    category: 'Partikel',
    rule: 'Penggunaan Partikel "了" (le) Penanda Perubahan Kondisi',
    formula: 'Subjek + Predikat (Usia / Kondisi Baru) + 了 (le)',
    desc: 'Partikel modal 了 (le) yang diletakkan di akhir kalimat berfungsi menandakan telah terjadinya perubahan situasi atau kondisi baru ("sudah... sekarang"). Misalnya saat menyebutkan umur seseorang tahun ini yang sudah bertambah dibanding tahun sebelumnya.',
    notes: [
      'Pada kalimat usia seperti 她今年四岁了 (Dia tahun ini sudah berusia 4 tahun), 了 menunjukkan perubahan umur yang baru dicapai.',
      'Contoh perubahan kondisi lain: 下雨了 (Sudah turun hujan — tadinya belum hujan).'
    ],
    example: '我女儿今年四岁了。(Wǒ nǚ\'ér jīnnián sì suì le. — Putriku tahun ini sudah berusia 4 tahun.)',
    examples: [
      {
        hanzi: '你女儿几岁了？',
        traditional: '你女兒幾歲了？',
        pinyin: 'Nǐ nǚ\'ér jǐ suì le?',
        translation: 'Putrimu sekarang sudah berusia berapa tahun?'
      },
      {
        hanzi: '李老师今年五十岁了。',
        traditional: '李老師今年五十歲了。',
        pinyin: 'Lǐ lǎoshī jīnnián wǔshí suì le.',
        translation: 'Guru Li tahun ini sudah berusia 50 tahun.'
      },
      {
        hanzi: '天冷了。',
        traditional: '天冷了。',
        pinyin: 'Tiān lěng le.',
        translation: 'Cuaca sudah menjadi dingin.'
      }
    ]
  },
  {
    id: 'g-5-4',
    chapterId: 5,
    category: 'Waktu, Angka & Uang',
    rule: 'Frasa Interogatif "多大" (duō dà) & Cara Menyatakan Umur',
    formula: 'Subjek + 多大 + (了)?  |  Subjek + (今年) + Angka + 岁 (suì)',
    desc: 'Kata 多 (duō) di depan kata sifat digunakan untuk menanyakan derajat/ukuran ("seberapa..."). Frasa 多大 (duō dà = seberapa besar) digunakan untuk menanyakan umur remaja atau orang dewasa. Saat menjawab umur, kita tidak perlu menggunakan kata kerja 是 (shì), melainkan langsung menyebutkan angka + satuan umur 岁 (suì).',
    notes: [
      'Untuk anak kecil (≤ 10 tahun): Gunakan 你几岁了？ (Nǐ jǐ suì le?).',
      'Untuk teman sebaya, remaja, atau dewasa: Gunakan 你多大了？ (Nǐ duō dà le?).',
      'Untuk orang tua/lansia (sangat sopan): Gunakan 您多大年纪了？ (Nín duō dà niánjì le?).',
      'Dalam kalimat berita umur, kata 岁 (suì) wajib disertakan setelah angka: 我二十岁 (Saya 20 tahun).'
    ],
    example: '李老师多大了？(Lǐ lǎoshī duō dà le? — Berapa usia Guru Li?)',
    examples: [
      {
        hanzi: '你今年多大了？',
        traditional: '你今年多大了？',
        pinyin: 'Nǐ jīnnián duō dà le?',
        translation: 'Berapa umurmu tahun ini? (Untuk remaja/dewasa)'
      },
      {
        hanzi: '我今年十八岁。',
        traditional: '我今年十八歲。',
        pinyin: 'Wǒ jīnnián shíbā suì.',
        translation: 'Saya tahun ini berusia 18 tahun.'
      },
      {
        hanzi: '那个小朋友几岁了？',
        traditional: '那個小朋友幾歲了？',
        pinyin: 'Nàge xiǎopéngyou jǐ suì le?',
        translation: 'Anak kecil itu usianya berapa tahun? (Untuk anak ≤ 10 tahun)'
      }
    ]
  },

  // ==========================================
  // BAB 6: 我会说汉语 (Wǒ huì shuō Hànyǔ)
  // ==========================================
  {
    id: 'g-6-1',
    chapterId: 6,
    category: 'Kata Kerja & Modal',
    rule: 'Kata Kerja Bantu (Modal) "会" (huì - Bisa karena Belajar)',
    formula: '(+) S + 会 + V + O  |  (-) S + 不会 + V + O  |  (?) S + 会 + V + O + 吗？',
    desc: 'Kata kerja bantu (auxiliary verb) 会 (huì) diletakkan sebelum kata kerja utama untuk menyatakan kemampuan atau keahlian yang dikuasai melalui proses belajar atau latihan (seperti berbicara bahasa asing, menyetir, memasak, berenang, menulis Hanzi). Bentuk negatifnya adalah 不会 (bú huì = tidak bisa).',
    notes: [
      'Perhatikan perubahan nada: 不会 dibaca "bú huì" karena 会 bernada ke-4.',
      'Untuk menjawab pertanyaan 你会...吗？ cukup jawab singkat: 会 (Bisa) atau 不会 (Tidak bisa).'
    ],
    example: '我会说汉语，我不会做中国菜。(Wǒ huì shuō Hànyǔ, wǒ bú huì zuò Zhōngguó cài.)',
    examples: [
      {
        hanzi: '我会说汉语。',
        traditional: '我會說漢語。',
        pinyin: 'Wǒ huì shuō Hànyǔ.',
        translation: 'Saya bisa berbicara bahasa Mandarin.'
      },
      {
        hanzi: '我不会写汉字。',
        traditional: '我不會寫漢字。',
        pinyin: 'Wǒ bú huì xiě Hànzì.',
        translation: 'Saya tidak bisa menulis karakter Mandarin.'
      },
      {
        hanzi: '你会开车吗？',
        traditional: '你會開車嗎？',
        pinyin: 'Nǐ huì kāi chē ma?',
        translation: 'Apakah kamu bisa mengemudi mobil?'
      }
    ]
  },
  {
    id: 'g-6-2',
    chapterId: 6,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Penggunaan "很" (hěn) pada Kalimat Predikat Kata Sifat',
    formula: 'Subjek (Kata Benda) + 很 (hěn) + Kata Sifat (Adjektiva)',
    desc: 'Dalam bahasa Mandarin, kata sifat (seperti 好 baik, 好吃 enak, 漂亮 cantik, 累 lelah) dapat langsung menjadi predikat kalimat TANPA kata 是 (shì). Namun, dalam kalimat positif biasa, kata benda dan kata sifat wajib dihubungkan dengan kata keterangan derajat 很 (hěn). Meskipun 很 secara harfiah berarti "sangat", dalam pola ini 很 sering kali hanya berfungsi sebagai penghubung alami dan tidak perlu diterjemahkan berlebihan.',
    notes: [
      'Mengapa harus pakai 很? Jika mengatakan 我累 (wǒ lèi) tanpa 很, kalimat tersebut terdengar menggantung atau mengandung makna perbandingan ("Saya lelah, sedangkan dia tidak"). Karena itu orang Mandarin selalu mengatakan 我很累 (Wǒ hěn lèi = Saya lelah).',
      'Saat diubah menjadi kalimat negatif dengan 不 (bù), kata 很 dihilangkan: 中国菜不好吃 (Makanan Cina tidak enak).'
    ],
    example: '中国菜很好吃。(Zhōngguó cài hěn hǎochī. — Masakan Tiongkok sangat lezat.)',
    examples: [
      {
        hanzi: '我很高兴。',
        traditional: '我很高興。',
        pinyin: 'Wǒ hěn gāoxìng.',
        translation: 'Saya (sangat) senang.'
      },
      {
        hanzi: '中国菜很好吃。',
        traditional: '中國菜很好吃。',
        pinyin: 'Zhōngguó cài hěn hǎochī.',
        translation: 'Masakan Tiongkok sangat enak.'
      },
      {
        hanzi: '你的妹妹很漂亮。',
        traditional: '你的妹妹很漂亮。',
        pinyin: 'Nǐ de mèimei hěn piàoliang.',
        translation: 'Adik perempuanmu cantik.'
      }
    ]
  },
  {
    id: 'g-6-3',
    chapterId: 6,
    category: 'Kata Ganti Interogatif',
    rule: 'Kata Ganti Interogatif "怎么" (zěnme - Bagaimana Cara)',
    formula: '(Subjek) + 怎么 (zěnme) + Kata Kerja + (Objek)?',
    desc: 'Kata ganti tanya 怎么 (zěnme) berarti "bagaimana (cara)". Cara paling mudah membuat kalimat dengan 怎么 adalah meletakkannya tepat di DEPAN kata kerja untuk menanyakan cara atau metode melakukan suatu tindakan.',
    notes: [
      'Posisi 怎么 selalu berada SEBELUM kata kerja: 怎么写 (bagaimana cara menulis), 怎么读 (bagaimana cara membaca), 怎么走 (bagaimana cara pergi/jalannya), 怎么做 (bagaimana cara membuat).',
      'Selain menanyakan cara, 怎么 +不/没 juga bisa menanyakan alasan ("kok/mengapa"): 你怎么不吃饭？ (Kenapa kamu kok tidak makan?).'
    ],
    example: '这个汉字怎么读？(Zhège Hànzì zěnme dú? — Bagaimana cara membaca karakter Hanzi ini?)',
    examples: [
      {
        hanzi: '这个字怎么写？',
        traditional: '這個字怎麼寫？',
        pinyin: 'Zhège zì zěnme xiě?',
        translation: 'Bagaimana cara menulis karakter ini?'
      },
      {
        hanzi: '去机场怎么走？',
        traditional: '去機場怎麼走？',
        pinyin: 'Qù jīchǎng zěnme zǒu?',
        translation: 'Bagaimana cara jalan menuju ke bandara?'
      },
      {
        hanzi: '这个名字怎么读？',
        traditional: '這個名字怎麼讀？',
        pinyin: 'Zhège míngzi zěnme dú?',
        translation: 'Bagaimana cara membaca nama ini?'
      }
    ]
  },

  // ==========================================
  // BAB 7: 今天几号 (Jīntiān jǐ hào)
  // ==========================================
  {
    id: 'g-7-1',
    chapterId: 7,
    category: 'Waktu, Angka & Uang',
    rule: 'Pengucapan Hari, Tanggal, Bulan, dan Tahun (Kalender Mandarin)',
    formula: 'Tahun (年 nián) + Bulan (月 yuè) + Tanggal (号 hào / 日 rì) + Hari (星期 xīngqī)',
    desc: 'Penyebutan waktu dan tanggal dalam bahasa Mandarin selalu berurutan dari UNIT TERBESAR ke UNIT TERKECIL (kebalikan dari bahasa Indonesia): Tahun ➔ Bulan ➔ Tanggal ➔ Hari ➔ Jam. Dalam kalimat penyataan tanggal atau hari, kata 是 (shì) boleh dihilangkan (kalimat berpredikat nomina).',
    notes: [
      'Tahun (年 nián): Angka tahun dibaca satu per satu digitnya. Contoh: 2026年 dibaca èr líng èr liù nián.',
      'Bulan (月 yuè): Angka 1–12 + 月. Contoh: Januari = 一月 (yīyuè), Desember = 十二月 (shí\'èryuè).',
      'Tanggal: Menggunakan 号 (hào - bahasa lisan sehari-hari) atau 日 (rì - bahasa tulis/formal).',
      'Hari (星期 xīngqī): Senin s/d Sabtu menggunakan angka 1–6 (星期一 s/d 星期六). Khusus hari Minggu menggunakan 星期天 (xīngqītiān) atau 星期日 (xīngqīrì), BUKAN 星期七!'
    ],
    example: '今天9月1号，星期三。(Jīntiān jiǔ yuè yī hào, xīngqīsān. — Hari ini 1 September, hari Rabu.)',
    examples: [
      {
        hanzi: '今天几月几号？今天星期几？',
        traditional: '今天幾月幾號？今天星期幾？',
        pinyin: 'Jīntiān jǐ yuè jǐ hào? Jīntiān xīngqī jǐ?',
        translation: 'Hari ini bulan berapa tanggal berapa? Hari ini hari apa?'
      },
      {
        hanzi: '昨天是8月31号，星期二。',
        traditional: '昨天是8月31號，星期二。',
        pinyin: 'Zuótiān shì bā yuè sānshíyī hào, xīngqī\'èr.',
        translation: 'Kemarin adalah tanggal 31 Agustus, hari Selasa.'
      },
      {
        hanzi: '2026年10月15日，星期四。',
        traditional: '2026年10月15日，星期四。',
        pinyin: 'Èr líng èr liù nián shí yuè shíwǔ rì, xīngqīsì.',
        translation: 'Kamis, 15 Oktober 2026.'
      }
    ]
  },
  {
    id: 'g-7-2',
    chapterId: 7,
    category: 'Kata Kerja & Modal',
    rule: 'Penggunaan "去" (qù - Pergi) & Kalimat Kata Kerja Berantai',
    formula: 'Subjek + 去 (qù) + (Tempat Tujuan) + Kata Kerja Tujuan + Objek',
    desc: 'Kata kerja 去 (qù) berarti "pergi". Berbeda dengan keterangan lokasi biasa yang memakai 在, kata 去 langsung diikuti tempat tujuan (去 + Tempat) dan dapat langsung disambung dengan kata kerja kedua yang menyatakan tujuan kepergian tersebut (disebut Kalimat Kata Kerja Berantai / Serial Verb Sentence).',
    notes: [
      'Pola 1 (Ke Tempat): Subjek + 去 + Tempat (我去学校 = Saya pergi ke sekolah).',
      'Pola 2 (Pergi Melakukan Sesuatu): Subjek + 去 + Tempat + V2 + O2 (我去学校看书 = Saya pergi ke sekolah untuk membaca buku).',
      'Bentuk negatifnya cukup menambahkan 不 (untuk sekarang/besok) atau 没 (untuk lampau) di depan 去.'
    ],
    example: '我去学校看书。(Wǒ qù xuéxiào kàn shū. — Saya pergi ke sekolah untuk membaca buku.)',
    examples: [
      {
        hanzi: '明天我去学校看书。',
        traditional: '明天我去學校看書。',
        pinyin: 'Míngtiān wǒ qù xuéxiào kàn shū.',
        translation: 'Besok saya pergi ke sekolah untuk membaca buku.'
      },
      {
        hanzi: '你去商店买什么？',
        traditional: '你去商店買什麼？',
        pinyin: 'Nǐ qù shāngdiàn mǎi shénme?',
        translation: 'Kamu pergi ke toko untuk membeli apa?'
      },
      {
        hanzi: '他去中国学汉语。',
        traditional: '他去中國學漢語。',
        pinyin: 'Tā qù Zhōngguó xué Hànyǔ.',
        translation: 'Dia pergi ke Tiongkok untuk belajar bahasa Mandarin.'
      }
    ]
  },
  {
    id: 'g-7-3',
    chapterId: 7,
    category: 'Kata Kerja & Modal',
    rule: 'Kalimat Sopan Menggunakan "请" (qǐng - Silakan / Tolong)',
    formula: '请 (qǐng) + Kata Kerja  |  Subjek + 请 + Objek Orang + Kata Kerja',
    desc: 'Kata kerja 请 (qǐng) digunakan di awal kalimat di depan kata kerja lain untuk menyatakan permintaan sopan ("silakan..." atau "mohon/tolong..."). Selain itu, 请 juga dapat berarti "mentraktir / mengundang" jika diikuti oleh objek orang.',
    notes: [
      '请问 (Qǐngwèn) = "Permisi numpang tanya...", sangat sopan diucapkan sebelum bertanya kepada orang lain.',
      '请坐 (Qǐng zuò) = "Silakan duduk", 请进 (Qǐng jìn) = "Silakan masuk", 请喝茶 (Qǐng hē chá) = "Silakan minum teh".'
    ],
    example: '请问，今天几号？(Qǐngwèn, jīntiān jǐ hào? — Permisi, hari ini tanggal berapa?)',
    examples: [
      {
        hanzi: '请问，学校在哪儿？',
        traditional: '請問，學校在哪兒？',
        pinyin: 'Qǐngwèn, xuéxiào zài nǎr?',
        translation: 'Permisi numpang tanya, di mana letak sekolah?'
      },
      {
        hanzi: '请坐，请喝茶！',
        traditional: '請坐，請喝茶！',
        pinyin: 'Qǐng zuò, qǐng hē chá!',
        translation: 'Silakan duduk, silakan minum teh!'
      },
      {
        hanzi: '今天我请你吃饭。',
        traditional: '今天我請你吃飯。',
        pinyin: 'Jīntiān wǒ qǐng nǐ chī fàn.',
        translation: 'Hari ini saya mentraktirmu makan.'
      }
    ]
  },

  // ==========================================
  // BAB 8: 我想喝茶 (Wǒ xiǎng hē chá)
  // ==========================================
  {
    id: 'g-8-1',
    chapterId: 8,
    category: 'Kata Kerja & Modal',
    rule: 'Kata Kerja Bantu "想" (xiǎng - Ingin / Rindu / Berpikir)',
    formula: 'Subjek + 想 (xiǎng) + Kata Kerja + Objek  |  Subjek + 想 + Objek Orang',
    desc: 'Kata 想 (xiǎng) memiliki tiga fungsi utama dalam bahasa Mandarin: (1) Sebagai kata kerja bantu berarti "ingin / hendak" ketika diikuti kata kerja, (2) Berarti "merindukan" ketika langsung diikuti objek orang/tempat, dan (3) Berarti "berpikir". Penggunaan 想 untuk menyatakan keinginan terdengar jauh lebih sopan dan halus dibandingkan 要 (yào).',
    notes: [
      'Perbedaan 想 (xiǎng) vs 要 (yào): 想 menyatakan keinginan atau harapan yang sopan ("would like to"), sedangkan 要 bernada lebih tegas/mendesak ("want to / must").',
      'Bentuk negatifnya adalah 不想 (bù xiǎng = tidak ingin).'
    ],
    example: '我想喝茶。(Wǒ xiǎng hē chá. — Saya ingin minum teh.) | 我很想你。(Wǒ hěn xiǎng nǐ. — Saya sangat merindukanmu.)',
    examples: [
      {
        hanzi: '我想买一个杯子。',
        traditional: '我想買一個杯子。',
        pinyin: 'Wǒ xiǎng mǎi yí ge bēizi.',
        translation: 'Saya ingin membeli sebuah cangkir. (Arti: ingin)'
      },
      {
        hanzi: '下午你想做什么？',
        traditional: '下午你想做什麼？',
        pinyin: 'Xiàwǔ nǐ xiǎng zuò shénme?',
        translation: 'Sore nanti kamu ingin melakukan apa?'
      },
      {
        hanzi: '我很想妈妈。',
        traditional: '我很想媽媽。',
        pinyin: 'Wǒ hěn xiǎng māma.',
        translation: 'Saya sangat merindukan Ibu. (Arti: rindu)'
      }
    ]
  },
  {
    id: 'g-8-2',
    chapterId: 8,
    category: 'Perbandingan Penting',
    rule: 'Kata Tanya "多少" (duōshao) & Perbedaan "几" vs "多少"',
    formula: '多少 + (Kata Satuan) + Kata Benda?  vs  几 + Kata Satuan + Kata Benda?',
    desc: 'Kata tanya 多少 (duōshao) berarti "berapa banyak". Baik 几 (jǐ) maupun 多少 (duōshao) sama-sama menanyakan jumlah, tetapi terdapat 3 perbedaan utama dalam tata bahasa Mandarin yang wajib diperhatikan.',
    notes: [
      '1. Perkiraan Jumlah: 几 digunakan untuk menanyakan jumlah kecil (< 10), sedangkan 多少 digunakan untuk jumlah besar (> 10) atau jumlah yang sama sekali belum diketahui.',
      '2. Kata Bantu Bilangan (Satuan): Setelah 几 WAJIB ada kata satuan (几个学生), sedangkan setelah 多少 kata satuannya BOLEH ada dan BOLEH dihilangkan (多少个学生 atau 多少学生).',
      '3. Menanyakan Harga: Untuk menanyakan harga uang selalu gunakan 多少钱？ (duōshao qián?), bukan 几钱.'
    ],
    example: '你们学校有多少学生？(Nǐmen xuéxiào yǒu duōshao xuésheng? — Berapa banyak siswa di sekolah kalian?)',
    examples: [
      {
        hanzi: '你的班有多少个学生？',
        traditional: '你的班有多少個學生？',
        pinyin: 'Nǐ de bān yǒu duōshao ge xuésheng?',
        translation: 'Di kelasmu ada berapa banyak siswa?'
      },
      {
        hanzi: '这个杯子多少钱？',
        traditional: '這個杯子多少錢？',
        pinyin: 'Zhège bēizi duōshao qián?',
        translation: 'Cangkir ini berapa harganya?'
      },
      {
        hanzi: '你有几本书？',
        traditional: '你有幾本書？',
        pinyin: 'Nǐ yǒu jǐ běn shū?',
        translation: 'Kamu punya berapa buku? (Menggunakan 几 karena jumlahnya sedikit & wajib pakai 本)'
      }
    ]
  },
  {
    id: 'g-8-3',
    chapterId: 8,
    category: 'Waktu, Angka & Uang',
    rule: 'Kata Bantu Bilangan / Kata Satuan (Measure Words: 个, 口, 本, 块)',
    formula: 'Angka / 这 / 那 / 哪 / 几 + Kata Satuan + Kata Benda',
    desc: 'Dalam bahasa Mandarin, kita TIDAK BISA langsung menggabungkan angka atau kata tunjuk (这 ini, 那 itu, 哪 yang mana, 几 berapa) dengan kata benda. Di tengahnya WAJIB disisipkan Kata Bantu Bilangan (量词 liàngcí / Measure Word) yang sesuai dengan jenis bendanya.',
    notes: [
      '个 (gè / ge): Kata satuan paling umum untuk orang, buah, cangkir, dan benda umum (一个人, 一个杯子, 这个苹果).',
      '口 (kǒu): Khusus untuk menghitung jumlah anggota keluarga (三口人 = 3 anggota keluarga).',
      '本 (běn): Khusus untuk buku, majalah, atau kamus (一本书 = sebuah buku).',
      '块 (kuài): Satuan mata uang Yuan lisan atau potongan benda (十块钱 = 10 yuan, 一块蛋糕 = sepotong kue).',
      'Aturan Tone Sandhi 一 (yī): Di depan kata satuan nada 4 (seperti 个 gè), 一 berubah menjadi nada 2: 一个 (yí gè). Di depan nada 1, 2, 3 (seperti 本 běn), 一 berubah menjadi nada 4: 一本 (yì běn).'
    ],
    example: '一个杯子 (yí ge bēizi) | 一本书 (yì běn shū) | 三口人 (sān kǒu rén)',
    examples: [
      {
        hanzi: '我想买一个杯子。',
        traditional: '我想買一個杯子。',
        pinyin: 'Wǒ xiǎng mǎi yí ge bēizi.',
        translation: 'Saya ingin membeli sebuah cangkir.'
      },
      {
        hanzi: '桌子上有一本书。',
        traditional: '桌子上有一本書。',
        pinyin: 'Zhuōzi shang yǒu yì běn shū.',
        translation: 'Di atas meja ada sebuah buku.'
      },
      {
        hanzi: '这个苹果很好吃。',
        traditional: '這個蘋果很好吃。',
        pinyin: 'Zhège píngguǒ hěn hǎochī.',
        translation: 'Apel ini sangat enak. (Kata tunjuk 这 + satuan 个 + benda)'
      }
    ]
  },
  {
    id: 'g-8-4',
    chapterId: 8,
    category: 'Waktu, Angka & Uang',
    rule: 'Cara Menyatakan Jumlah Uang dan Harga (块 / 元)',
    formula: 'Subjek (Barang) + Angka + 块 (kuài) + (钱 qián)',
    desc: 'Untuk menanyakan harga suatu barang, gunakan pola: [Nama Barang] + 多少钱？ (duōshao qián?). Untuk menyatakan nominal mata uang Tiongkok (Renminbi / RMB), dalam bahasa percakapan sehari-hari digunakan satuan 块 (kuài), sedangkan dalam tulisan resmi/label harga digunakan 元 (yuán). Kata 钱 (qián) di akhir boleh disertakan atau dihilangkan.',
    notes: [
      'Untuk jumlah uang 2 Yuan, gunakan 两块 (liǎng kuài), bukan 二块.',
      'Satuan pecahan di bawah 1 Yuan/Kuai: 毛 (máo) / 角 (jiǎo) = 1/10 Yuan, dan 分 (fēn) = 1/100 Yuan.'
    ],
    example: '这个杯子二十八块钱。(Zhège bēizi èrshíbā kuài qián. — Cangkir ini 28 yuan.)',
    examples: [
      {
        hanzi: '那本书多少钱？',
        traditional: '那本書多少錢？',
        pinyin: 'Nà běn shū duōshao qián?',
        translation: 'Buku itu berapa harganya?'
      },
      {
        hanzi: '这个杯子二十八块（钱）。',
        traditional: '這個杯子二十八塊（錢）。',
        pinyin: 'Zhège bēizi èrshíbā kuài (qián).',
        translation: 'Cangkir ini harganya 28 yuan.'
      },
      {
        hanzi: '一共五十块钱。',
        traditional: '一共五十塊錢。',
        pinyin: 'Yígòng wǔshí kuài qián.',
        translation: 'Total semuanya 50 yuan.'
      }
    ]
  },

  // ==========================================
  // BAB 9: 你儿子在哪儿工作 (Nǐ érzi zài nǎr gōngzuò)
  // ==========================================
  {
    id: 'g-9-1',
    chapterId: 9,
    category: 'Kata Kerja & Modal',
    rule: 'Penggunaan Kata Kerja "在" (zài - Berada di)',
    formula: '(+) Subjek + 在 + Tempat  |  (-) Subjek + 不在 + Tempat',
    desc: 'Ketika di dalam kalimat tidak ada kata kerja lain, kata 在 (zài) berperan sebagai kata kerja utama (predikat) yang berarti "ada di" atau "berada di". Diikuti langsung oleh kata benda tempat atau posisi.',
    notes: [
      'Bentuk negatifnya adalah 不在 (bú zài = tidak berada di).',
      'Contoh: 爸爸在家 (Ayah ada di rumah) ➔ 爸爸不在家 (Ayah tidak ada di rumah).'
    ],
    example: '小猫在椅子下面。(Xiǎomāo zài yǐzi xiàmiàn. — Kucing kecil berada di bawah kursi.)',
    examples: [
      {
        hanzi: '爸爸在办公室。',
        traditional: '爸爸在辦公室。',
        pinyin: 'Bàba zài bàngōngshì.',
        translation: 'Ayah berada di kantor.'
      },
      {
        hanzi: '小狗在椅子下面。',
        traditional: '小狗在椅子下面。',
        pinyin: 'Xiǎogǒu zài yǐzi xiàmiàn.',
        translation: 'Anjing kecil ada di bawah kursi.'
      },
      {
        hanzi: '我妈妈不在家，她在医院。',
        traditional: '我媽媽不在家，她在醫院。',
        pinyin: 'Wǒ māma bú zài jiā, tā zài yīyuàn.',
        translation: 'Ibuku tidak ada di rumah, dia ada di rumah sakit.'
      }
    ]
  },
  {
    id: 'g-9-2',
    chapterId: 9,
    category: 'Struktur Kalimat Dasar',
    rule: 'Penggunaan Kata Depan (Preposisi) "在" (zài - Di [Tempat] Melakukan Aksi)',
    formula: 'Subjek + 在 (zài) + Tempat + Kata Kerja + (Objek)',
    desc: 'Jika di dalam kalimat terdapat tindakan/aktivitas yang dilakukan di suatu lokasi, maka frasa lokasi (在 + Tempat) WAJIB diletakkan SEBELUM kata kerja! Ini berbeda total dengan bahasa Indonesia yang meletakkan keterangan tempat di akhir kalimat.',
    notes: [
      'Ingat rumusnya: "Di mana dulu, baru ngapain!" (Subjek + 在 Tempat + Kata Kerja).',
      'Contoh bahasa Indonesia: "Saya bekerja di rumah sakit" ➔ Urutan Mandarin: "Saya [di rumah sakit] bekerja" (我在医院工作).'
    ],
    example: '我儿子在医院工作。(Wǒ érzi zài yīyuàn gōngzuò. — Putra saya bekerja di rumah sakit.)',
    examples: [
      {
        hanzi: '我在学校学习汉语。',
        traditional: '我在學校學習漢語。',
        pinyin: 'Wǒ zài xuéxiào xuéxí Hànyǔ.',
        translation: 'Saya belajar bahasa Mandarin di sekolah.'
      },
      {
        hanzi: '他在图书馆看书。',
        traditional: '他在圖書館看書。',
        pinyin: 'Tā zài túshūguǎn kàn shū.',
        translation: 'Dia membaca buku di perpustakaan.'
      },
      {
        hanzi: '妹妹在公园玩儿。',
        traditional: '妹妹在公園玩兒。',
        pinyin: 'Mèimei zài gōngyuán wánr.',
        translation: 'Adik perempuan bermain di taman.'
      }
    ]
  },
  {
    id: 'g-9-3',
    chapterId: 9,
    category: 'Perbandingan Penting',
    rule: 'Kata Tanya Lokasi "哪儿" (nǎr) & Perbedaan "哪儿" vs "哪里" (nǎlǐ)',
    formula: 'Subjek + 在 + 哪儿 / 哪里 + (Kata Kerja)?',
    desc: 'Kata tanya 哪儿 (nǎr) dan 哪里 (nǎlǐ) keduanya memiliki arti yang sama persis, yaitu "mana / di mana", dan dapat saling menggantikan di dalam kalimat. Perbedaannya hanya terletak pada dialek wilayah dan gaya bahasa.',
    notes: [
      '哪儿 (nǎr): Menggunakan bunyi retrofleks 儿化音 (érhuàyīn), sangat populer digunakan di Tiongkok bagian utara (seperti Beijing) dan di dalam buku standar HSK.',
      '哪里 (nǎlǐ): Lebih sering digunakan oleh penutur di Tiongkok bagian selatan, Taiwan, Asia Tenggara, atau dalam situasi yang sedikit lebih formal.',
      'Perhatikan pasangan kata tunjuk tempatnya: 这儿 / 这里 (zhèr / zhèlǐ = di sini) dan 那儿 / 那里 (nàr / nàlǐ = di sana).'
    ],
    example: '你在哪儿工作？ = 你在哪里工作？ (Di mana kamu bekerja?)',
    examples: [
      {
        hanzi: '小猫在哪儿？',
        traditional: '小貓在哪兒？',
        pinyin: 'Xiǎomāo zài nǎr?',
        translation: 'Di mana kucing kecil berada? (Gaya Utara / HSK)'
      },
      {
        hanzi: '你的学校在哪里？',
        traditional: '你的學校在哪裡？',
        pinyin: 'Nǐ de xuéxiào zài nǎlǐ?',
        translation: 'Di mana letak sekolahmu? (Menggunakan 哪里)'
      },
      {
        hanzi: '小猫在那儿。',
        traditional: '小貓在那兒。',
        pinyin: 'Xiǎomāo zài nàr.',
        translation: 'Kucing kecil ada di sana.'
      }
    ]
  },
  {
    id: 'g-9-4',
    chapterId: 9,
    category: 'Partikel',
    rule: 'Kata Bantu Tanya "呢" (ne) pada Kalimat Tanya Lokasi / Keberadaan',
    formula: 'Subjek + 在哪儿 + 呢 (ne)?',
    desc: 'Selain untuk bertanya balik ("Kalau kamu?"), partikel 呢 (ne) juga sering diletakkan di akhir kalimat yang sudah memiliki kata tanya (seperti 在哪儿 / 什么) untuk memperhalus nada bicara sekaligus menunjukkan rasa ingin tahu yang ramah tentang keberadaan seseorang/benda saat itu.',
    notes: [
      'Contoh: 他不在家，他在哪儿呢？ (Dia tidak ada di rumah, kira-kira di mana ya dia berada?).'
    ],
    example: '爸爸不在家，他在哪儿呢？(Bàba bú zài jiā, tā zài nǎr ne?)',
    examples: [
      {
        hanzi: '他在哪儿呢？',
        traditional: '他在哪兒呢？',
        pinyin: 'Tā zài nǎr ne?',
        translation: 'Di manakah dia berada sekarang?'
      },
      {
        hanzi: '你的杯子在哪儿呢？',
        traditional: '你的杯子在哪兒呢？',
        pinyin: 'Nǐ de bēizi zài nǎr ne?',
        translation: 'Di mana cangkirmu berada?'
      }
    ]
  },

  // ==========================================
  // BAB 10: 我能坐这儿吗 (Wǒ néng zuò zhèr ma)
  // ==========================================
  {
    id: 'g-10-1',
    chapterId: 10,
    category: 'Kata Kerja & Modal',
    rule: 'Penggunaan Kata Kerja "有" (yǒu - Punya / Ada) & Negasi "没有"',
    formula: '(1) S + 有 + O (Kepemilikan)  |  (2) Tempat + 有 + Benda/Orang (Eksistensi)',
    desc: 'Kata kerja 有 (yǒu) memiliki dua fungsi penting: (1) Menyatakan kepemilikan ("mempunyai") jika subjeknya berupa orang, dan (2) Menyatakan keberadaan/eksistensi ("terdapat / ada") jika subjek di awal kalimat berupa kata tempat/posisi. Bentuk negatif dari 有 adalah satu-satunya yang TIDAK BOLEH menggunakan 不, melainkan WAJIB menggunakan 没 menjadi 没有 (méiyǒu).',
    notes: [
      'JANGAN PERNAH menulis 不有 (bù yǒu) ❌! Selalu gunakan 没有 (méiyǒu) ✅ untuk arti "tidak punya" atau "tidak ada".',
      'Dalam kalimat negatif 没有, angka dan kata satuan di depan objek biasanya dihilangkan: 桌子上没有电脑 (Di atas meja tidak ada komputer).'
    ],
    example: '桌子上有一个电脑。(Di atas meja ada sebuah komputer.) | 我没有钱。(Saya tidak punya uang.)',
    examples: [
      {
        hanzi: '我有三本书。',
        traditional: '我有三本書。',
        pinyin: 'Wǒ yǒu sān běn shū.',
        translation: 'Saya mempunyai tiga buah buku. (Kepemilikan)'
      },
      {
        hanzi: '桌子上有一个电脑和一本书。',
        traditional: '桌子上有一台電腦和一本書。',
        pinyin: 'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',
        translation: 'Di atas meja ada sebuah komputer dan sebuah buku. (Eksistensi)'
      },
      {
        hanzi: '这儿没有人。',
        traditional: '這兒沒有人。',
        pinyin: 'Zhèr méiyǒu rén.',
        translation: 'Di sini tidak ada orang. (Negasi 没有)'
      }
    ]
  },
  {
    id: 'g-10-2',
    chapterId: 10,
    category: 'Struktur Kalimat Dasar',
    rule: 'Penggunaan Kata Penghubung "和" (hé - Dan / Bersama)',
    formula: 'Kata Benda A + 和 (hé) + Kata Benda B',
    desc: 'Kata penghubung 和 (hé) berarti "dan". Dalam bahasa Mandarin, 和 HANYA digunakan untuk menghubungkan kata benda dengan kata benda (atau kata ganti dengan kata ganti), dan TIDAK BISA digunakan untuk menghubungkan dua kalimat atau dua kata kerja yang berbeda.',
    notes: [
      'Benar (Kata Benda + Kata Benda): 我和你 (saya dan kamu), 电脑和书 (komputer dan buku), 爸爸和妈妈 (ayah dan ibu).',
      'Salah (Menghubungkan 2 Kalimat): 我是学生，和他是老师 ❌ (Dalam Mandarin tidak boleh pakai 和 untuk menyambung klausa).',
      'Selain "dan", dalam pola [A + 和 + B + 一起 + V], kata 和 berarti "bersama dengan".'
    ],
    example: '桌子上有一个电脑和一本书。(Di atas meja ada sebuah komputer dan sebuah buku.)',
    examples: [
      {
        hanzi: '我和你是好朋友。',
        traditional: '我和你是好朋友。',
        pinyin: 'Wǒ hé nǐ shì hǎo péngyou.',
        translation: 'Saya dan kamu adalah teman baik.'
      },
      {
        hanzi: '我喜欢吃苹果和米饭。',
        traditional: '我喜歡吃蘋果和米飯。',
        pinyin: 'Wǒ xǐhuan chī píngguǒ hé mǐfàn.',
        translation: 'Saya suka makan apel dan nasi.'
      },
      {
        hanzi: '他生病了，不能去学校。',
        traditional: '他生病了，不能去學校。',
        pinyin: 'Tā shēngbìng le, bù néng qù xuéxiào.',
        translation: 'Dia sakit, tidak bisa pergi ke sekolah. (Klausa disambung koma, bukan 和)'
      }
    ]
  },
  {
    id: 'g-10-3',
    chapterId: 10,
    category: 'Perbandingan Penting',
    rule: 'Kata Bantu Modal "能" (néng - Bisa/Boleh) & Perbedaan "能" vs "会"',
    formula: '(+) S + 能 + V  |  (-) S + 不能 + V  |  (?) 我能 + V + 吗？ (Meminta Izin)',
    desc: 'Kata kerja bantu 能 (néng) berarti "bisa / mampu / boleh". Digunakan untuk: (1) Menanyakan atau meminta izin sopan dalam pola 我能...吗？ (Bolehkah saya...?), dan (2) Menyatakan kemampuan fisik atau kondisi situasional yang memungkinkan seseorang melakukan sesuatu. Bentuk negatifnya adalah 不能 (bù néng = tidak bisa / tidak boleh).',
    notes: [
      'Perbedaan 能 (néng) vs 会 (huì):',
      '• 会 (huì) menekankan KEAHLIAN yang harus dipelajari dulu (我会开车 = Saya tahu cara menyetir mobil).',
      '• 能 (néng) menekankan IZIN atau KONDISI yang memungkinkan (我今天不能开车 = Hari ini saya tidak bisa menyetir karena kondisinya tidak memungkinkan, meski saya tahu cara menyetir).'
    ],
    example: '我能坐这儿吗？—— 请坐！(Wǒ néng zuò zhèr ma? — Qǐng zuò! — Bolehkah saya duduk di sini? — Silakan duduk!)',
    examples: [
      {
        hanzi: '我能坐这儿吗？',
        traditional: '我能坐這兒嗎？',
        pinyin: 'Wǒ néng zuò zhèr ma?',
        translation: 'Bolehkah saya duduk di sini? (Meminta izin)'
      },
      {
        hanzi: '明天你能来学校吗？',
        traditional: '明天你能來學校嗎？',
        pinyin: 'Míngtiān nǐ néng lái xuéxiào ma?',
        translation: 'Apakah besok kamu bisa datang ke sekolah? (Kemungkinan kondisi)'
      },
      {
        hanzi: '这儿不能打电话。',
        traditional: '這兒不能打電話。',
        pinyin: 'Zhèr bù néng dǎ diànhuà.',
        translation: 'Di sini tidak boleh menelepon. (Larangan)'
      }
    ]
  },
  {
    id: 'g-10-4',
    chapterId: 10,
    category: 'Struktur Kalimat Dasar',
    rule: 'Kata Benda Posisi / Arah (方位词: 上, 下, 里, 前面, 后面)',
    formula: 'Kata Benda Acuan + Posisi (上 / 下 / 里 / 前面 / 后面)',
    desc: 'Dalam bahasa Mandarin, kata penunjuk posisi seperti 上 (shàng = atas), 下 / 下面 (xià / xiàmiàn = bawah), 里 (lǐ = dalam), 前面 (qiánmiàn = depan), dan 后面 (hòumiàn = belakang) diletakkan SETELAH kata benda acuannya, kebalikan dari bahasa Indonesia!',
    notes: [
      'Contoh: "Di atas meja" ➔ ditulis "Meja + Atas" = 桌子上 (zhuōzi shang).',
      'Contoh: "Di dalam sekolah" ➔ ditulis "Sekolah + Dalam" = 学校里 (xuéxiào lǐ).',
      'Contoh: "Di bawah kursi" ➔ ditulis "Kursi + Bawah" = 椅子下面 (yǐzi xiàmiàn).'
    ],
    example: '杯子在桌子里。(Bēizi zài zhuōzi lǐ. — Cangkir ada di dalam laci meja.)',
    examples: [
      {
        hanzi: '杯子在桌子里。',
        traditional: '杯子在桌子裡。',
        pinyin: 'Bēizi zài zhuōzi lǐ.',
        translation: 'Cangkir berada di dalam meja.'
      },
      {
        hanzi: '前面那个人叫王方。',
        traditional: '前面那個人叫王方。',
        pinyin: 'Qiánmiàn nàge rén jiào Wáng Fāng.',
        translation: 'Orang yang di depan itu bernama Wang Fang.'
      },
      {
        hanzi: '学校后面有一个商店。',
        traditional: '學校後面有一個商店。',
        pinyin: 'Xuéxiào hòumiàn yǒu yí ge shāngdiàn.',
        translation: 'Di belakang sekolah ada sebuah toko.'
      }
    ]
  },

  // ==========================================
  // BAB 11: 现在几点 (Xiànzài jǐ diǎn)
  // ==========================================
  {
    id: 'g-11-1',
    chapterId: 11,
    category: 'Waktu, Angka & Uang',
    rule: 'Cara Menyatakan Waktu Jam & Menit ("点" & "分") serta "什么时候"',
    formula: '(Keterangan Pagi/Siang/Sore) + Angka + 点 (diǎn - Jam) + Angka + 分 (fēn - Menit)',
    desc: 'Untuk menyatakan waktu jam digunakan kata 点 (diǎn) dan untuk menit digunakan 分 (fēn). Jika ingin menambahkan keterangan bagian hari seperti 上午 (shàngwǔ = pagi), 中午 (zhōngwǔ = tengah hari), atau 下午 (xiàwǔ = sore), letakkan di DEPAN angka jam. Untuk menanyakan jam spesifik gunakan 几点 (jǐ diǎn = jam berapa), sedangkan untuk menanyakan waktu secara umum ("kapan") gunakan 什么时候 (shénme shíhou).',
    notes: [
      'PENTING: Untuk "Jam 2:00", wajib menggunakan 两点 (liǎng diǎn), BUKAN 二点 (èr diǎn)!',
      'Untuk menit di bawah 10 (misal lewat 05 menit), sering disisipkan 零 (líng): 八点零五分 (08:05). Untuk lewat 30 menit selain 三十分 juga bisa menggunakan 半 (bàn = setengah).',
      'Posisi Keterangan Waktu dalam Kalimat: Bisa diletakkan setelah Subjek (Subjek + Waktu + Kata Kerja) atau di awal kalimat (Waktu + Subjek + Kata Kerja), TIDAK BOLEH di akhir kalimat.'
    ],
    example: '现在上午十点十分。(Xiànzài shàngwǔ shí diǎn shí fēn. — Sekarang jam 10:10 pagi.)',
    examples: [
      {
        hanzi: '现在几点？—— 现在两点三十分。',
        traditional: '現在幾點？—— 現在兩點三十分。',
        pinyin: 'Xiànzài jǐ diǎn? — Xiànzài liǎng diǎn sānshí fēn.',
        translation: 'Sekarang jam berapa? — Sekarang jam 2 lewat 30 menit.'
      },
      {
        hanzi: '爸爸什么时候回家？—— 下午五点。',
        traditional: '爸爸什麼時候回家？—— 下午五點。',
        pinyin: 'Bàba shénme shíhou huí jiā? — Xiàwǔ wǔ diǎn.',
        translation: 'Kapan Ayah pulang ke rumah? — Sore jam 5.'
      },
      {
        hanzi: '我们中午十二点吃饭。',
        traditional: '我們中午十二點吃飯。',
        pinyin: 'Wǒmen zhōngwǔ shí\'èr diǎn chī fàn.',
        translation: 'Kami makan siang pada jam 12 siang.'
      }
    ]
  },
  {
    id: 'g-11-2',
    chapterId: 11,
    category: 'Waktu, Angka & Uang',
    rule: 'Penggunaan Kata Waktu "前 / 以前" (qián / yǐqián - Sebelum / Lalu)',
    formula: 'Waktu / Durasi / Kata Kerja + 前 (qián) / 以前 (yǐqián)',
    desc: 'Kata benda waktu 前 (qián) atau 以前 (yǐqián) berarti "sebelum..." atau "...yang lalu". Berbeda dengan bahasa Indonesia yang meletakkan kata "sebelum" di depan, dalam bahasa Mandarin 前 / 以前 WAJIB diletakkan SETELAH kata waktu, durasi waktu, atau tindakan acuannya.',
    notes: [
      'Contoh titik waktu: 星期五前 (sebelum hari Jumat), 五点以前 (sebelum jam 5).',
      'Contoh durasi waktu: 三天前 (3 hari yang lalu), 两年以前 (2 tahun yang lalu).',
      'Contoh tindakan: 睡觉以前 (sebelum tidur), 来中国以前 (sebelum datang ke Tiongkok).'
    ],
    example: '星期五前能回家吗？(Xīngqīwǔ qián néng huí jiā ma? — Bisakah pulang sebelum hari Jumat?)',
    examples: [
      {
        hanzi: '星期五前能回家吗？',
        traditional: '星期五前能回家嗎？',
        pinyin: 'Xīngqīwǔ qián néng huí jiā ma?',
        translation: 'Bisakah pulang ke rumah sebelum hari Jumat?'
      },
      {
        hanzi: '三天前我去北京了。',
        traditional: '三天前我去北京了。',
        pinyin: 'Sān tiān qián wǒ qù Běijīng le.',
        translation: 'Tiga hari yang lalu saya pergi ke Beijing.'
      },
      {
        hanzi: '睡觉以前我不喝茶。',
        traditional: '睡覺以前我不喝茶。',
        pinyin: 'Shuìjiào yǐqián wǒ bù hē chá.',
        translation: 'Sebelum tidur saya tidak minum teh.'
      }
    ]
  },
  {
    id: 'g-11-3',
    chapterId: 11,
    category: 'Perbandingan Penting',
    rule: 'Perbedaan Kata Kerja Arah "来" (lái - Datang) dan "去" (qù - Pergi)',
    formula: '来 (Mendekati Pembicara)  vs  去 (Menjauhi Pembicara)',
    desc: 'Kata 来 (lái = datang) dan 去 (qù = pergi) sama-sama menunjukkan perpindahan arah, tetapi ditentukan dari SUDUT PANDANG POSISI PEMBICARA. Gunakan 来 jika gerakan menuju ke tempat pembicara berada. Gunakan 去 jika gerakan meninggalkan tempat pembicara menuju tempat lain.',
    notes: [
      'Dapat digabung dengan 回 (huí = kembali): 回来 (huílái = kembali ke sini, tempat pembicara berada) vs 回去 (huíqù = kembali ke sana, menjauhi pembicara).',
      'Contoh dari MandarinMe: Ibu di kampung halaman bertanya pada anaknya di perantauan: 你什么时候回来？ (Kapan kamu pulang ke sini?). Anaknya menjawab: 我明天回去 (Besok saya pulang ke sana).'
    ],
    example: '他什么时候能回来？(Tā shénme shíhou néng huílái? — Kapan dia bisa kembali ke sini?)',
    examples: [
      {
        hanzi: '王小姐今天会来吗？',
        traditional: '王小姐今天會來嗎？',
        pinyin: 'Wáng xiǎojiě jīntiān huì lái ma?',
        translation: 'Apakah Nona Wang akan datang (ke sini) hari ini?'
      },
      {
        hanzi: '你什么时候回来？',
        traditional: '你什麼時候回來？',
        pinyin: 'Nǐ shénme shíhou huílái?',
        translation: 'Kapan kamu pulang (ke tempatku berada)?'
      },
      {
        hanzi: '我星期一去北京。',
        traditional: '我星期一去北京。',
        pinyin: 'Wǒ xīngqīyī qù Běijīng.',
        translation: 'Saya hari Senin pergi ke Beijing (menuju tempat lain).'
      }
    ]
  },

  // ==========================================
  // BAB 12: 明天天气怎么样 (Míngtiān tiānqì zěnmeyàng)
  // ==========================================
  {
    id: 'g-12-1',
    chapterId: 12,
    category: 'Perbandingan Penting',
    rule: 'Kata Tanya "怎么样" (zěnmeyàng) & Perbedaan "怎么" vs "怎么样"',
    formula: 'Subjek / Topik + 怎么样？  vs  Subjek + 怎么 + Kata Kerja？',
    desc: 'Kata tanya 怎么样 (zěnmeyàng) berarti "bagaimana (kondisi / keadaan / pendapat)". Berbeda dengan 怎么 (zěnme) yang diletakkan di depan kata kerja untuk menanyakan cara, 怎么样 diletakkan di AKHIR kalimat sebagai predikat untuk menanyakan kondisi suatu hal (cuaca, kesehatan, rasa makanan) atau meminta persetujuan/pendapat ("Bagaimana kalau...?").',
    notes: [
      'Perbedaan 怎么 vs 怎么样:',
      '• 怎么 (zěnme) + Kata Kerja = Menanyakan CARA melakukan aksi: 这个字怎么写？ (Bagaimana cara menulis huruf ini?).',
      '• Subjek + 怎么样 (zěnmeyàng) = Menanyakan KONDISI/KUALITAS di akhir kalimat: 今天天气怎么样？ (Bagaimana kondisi cuaca hari ini?).'
    ],
    example: '明天天气怎么样？(Míngtiān tiānqì zěnmeyàng? — Bagaimana cuaca besok?)',
    examples: [
      {
        hanzi: '昨天北京的天气怎么样？',
        traditional: '昨天北京的天氣怎麼樣？',
        pinyin: 'Zuótiān Běijīng de tiānqì zěnmeyàng?',
        translation: 'Bagaimana cuaca di Beijing kemarin?'
      },
      {
        hanzi: '你身体怎么样？',
        traditional: '你身體怎麼樣？',
        pinyin: 'Nǐ shēntǐ zěnmeyàng?',
        translation: 'Bagaimana kondisi kesehatan/tubuhmu?'
      },
      {
        hanzi: '我们今天去看电影，怎么样？',
        traditional: '我們今天去看電影，怎麼樣？',
        pinyin: 'Wǒmen jīntiān qù kàn diànyǐng, zěnmeyàng?',
        translation: 'Kita hari ini pergi menonton film, bagaimana menurutmu?'
      }
    ]
  },
  {
    id: 'g-12-2',
    chapterId: 12,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Pola Derajat "太...了" (tài...le - Terlalu / Sangat) & Negasi "不太"',
    formula: '(+) Subjek + 太 + Kata Sifat + 了  |  (-) Subjek + 不太 + Kata Sifat (Tanpa 了!)',
    desc: 'Kata keterangan 太 (tài) yang dipasangkan dengan partikel 了 (le) di akhir kata sifat (太 + Adj + 了) digunakan untuk mengekspresikan seruan derajat yang sangat tinggi ("terlalu..." atau "...sekali!"). Bisa bermakna keluhan (太热了 = Terlalu panas!) maupun pujian antusias (太好了 = Bagus sekali!).',
    notes: [
      'ATURAN PENTING NEGASI: Dalam bentuk negatif "不太 + Kata Sifat" (bú tài = kurang begitu / tidak terlalu), partikel 了 (le) di akhir kalimat WAJIB DIHILANGKAN!',
      'Contoh: 太好了 (Sangat bagus) ➔ 不太好 (Kurang begitu baik, BUKAN 不太好了 ❌).'
    ],
    example: '今天太热了！(Hari ini terlalu panas!) vs 我身体不太好。(Kesehatanku kurang begitu baik.)',
    examples: [
      {
        hanzi: '今天天气太热了！',
        traditional: '今天天氣太熱了！',
        pinyin: 'Jīntiān tiānqì tài rè le!',
        translation: 'Cuaca hari ini terlalu panas!'
      },
      {
        hanzi: '王方的衣服太漂亮了！',
        traditional: '王方的衣服太漂亮了！',
        pinyin: 'Wáng Fāng de yīfu tài piàoliang le!',
        translation: 'Pakaian Wang Fang cantik sekali!'
      },
      {
        hanzi: '我今天身体不太好。',
        traditional: '我今天身體不太好。',
        pinyin: 'Wǒ jīntiān shēntǐ bú tài hǎo.',
        translation: 'Kesehatan saya hari ini kurang begitu baik. (Tanpa 了)'
      }
    ]
  },
  {
    id: 'g-12-3',
    chapterId: 12,
    category: 'Kata Kerja & Modal',
    rule: 'Kata Bantu Modal "会" (huì) Menyatakan Kemungkinan ("Akan")',
    formula: '(+) S + 会 + V + (吗)?  |  (-) S + 不会 + V',
    desc: 'Selain berarti "bisa (karena belajar)" seperti di Bab 6, kata kerja bantu 会 (huì) juga memiliki fungsi kedua, yaitu menyatakan prediksi atau kemungkinan bahwa suatu peristiwa AKAN terjadi di masa depan ("akan..."). Bentuk negatifnya adalah 不会 (bú huì = tidak akan).',
    notes: [
      'Sering diikuti partikel 的 di akhir kalimat tegas: 明天会下雨的 (Besok pasti akan turun hujan).'
    ],
    example: '今天会下雨吗？—— 今天不会下雨。(Apakah hari ini akan hujan? — Hari ini tidak akan hujan.)',
    examples: [
      {
        hanzi: '今天会下雨吗？',
        traditional: '今天會下雨嗎？',
        pinyin: 'Jīntiān huì xià yǔ ma?',
        translation: 'Apakah hari ini akan turun hujan?'
      },
      {
        hanzi: '王小姐今天不会来，天气太冷了。',
        traditional: '王小姐今天不會來，天氣太冷了。',
        pinyin: 'Wáng xiǎojiě jīntiān bú huì lái, tiānqì tài lěng le.',
        translation: 'Nona Wang hari ini tidak akan datang, cuacanya terlalu dingin.'
      }
    ]
  },
  {
    id: 'g-12-4',
    chapterId: 12,
    category: 'Perbandingan Penting',
    rule: 'Perbedaan "一些" (yīxiē - Beberapa) dan "一点儿" (yīdiǎnr - Sedikit)',
    formula: '一些 / 些 + Kata Benda  vs  一点儿 + Kata Benda  |  Kata Sifat + 一点儿',
    desc: 'Kata 一些 (yīxiē, atau disingkat 些 xiē setelah kata kerja/这/那) dan 一点儿 (yīdiǎnr) sering membingungkan karena keduanya menerangkan jumlah yang tidak spesifik. Namun nuansa jumlah dan posisi tata bahasanya berbeda.',
    notes: [
      '1. Nuansa Jumlah: 一些 berarti "beberapa / sejumlah" (jumlahnya lebih banyak daripada 一点儿). Sedangkan 一点儿 berarti "sedikit sekali / secuil".',
      '2. Kombinasi dengan 这 / 那: 些 dapat langsung digabung dengan 这 dan 那 menjadi 这些 (zhèxiē = ini semua) dan 那些 (nàxiē = itu semua). Sedangkan 一点儿 harus menjadi 这一点儿.',
      '3. Di Belakang Kata Sifat: HANYA 一点儿 yang bisa diletakkan SETELAH kata sifat untuk menyatakan perbandingan ("lebih... sedikit"), misal: 大一点儿 (lebih besar sedikit), 快一点儿 (lebih cepat sedikit). 一些 TIDAK BISA diletakkan setelah kata sifat!'
    ],
    example: '你多吃些水果。(Makanlah lebih banyak beberapa buah.) vs 我买了一点儿苹果。(Saya membeli sedikit apel.)',
    examples: [
      {
        hanzi: '你多吃一些水果，多喝水。',
        traditional: '你多吃一些水果，多喝水。',
        pinyin: 'Nǐ duō chī yīxiē shuǐguǒ, duō hē shuǐ.',
        translation: 'Kamu makanlah lebih banyak beberapa buah-buahan dan minum banyak air.'
      },
      {
        hanzi: '我想喝一点儿茶。',
        traditional: '我想喝一點兒茶。',
        pinyin: 'Wǒ xiǎng hē yìdiǎnr chá.',
        translation: 'Saya ingin minum sedikit teh.'
      },
      {
        hanzi: '请说慢一点儿。',
        traditional: '請說慢一點兒。',
        pinyin: 'Qǐng shuō màn yìdiǎnr.',
        translation: 'Tolong bicara lebih pelan sedikit. (Adj + 一点儿)'
      }
    ]
  },

  // ==========================================
  // BAB 13: 他在学做中国菜呢 (Tā zài xué zuò Zhōngguó cài ne)
  // ==========================================
  {
    id: 'g-13-1',
    chapterId: 13,
    category: 'Ungkapan Sehari-hari',
    rule: 'Penggunaan Kata Sapaan Telepon "喂" (wèi / wéi - Halo)',
    formula: '喂 (wèi / wéi)，+ Kalimat Sapaan / Pertanyaan Telepon',
    desc: 'Kata seru 喂 (wèi / wéi) khusus digunakan saat mengangkat telepon atau memulai pembicaraan telepon ("Halo..."). Tidak digunakan saat bertemu tatap muka langsung (tatap muka menggunakan 你好).',
    notes: [
      'Saat bertanya dengan nada ramah ketika baru mengangkat telepon ("Halo? Siapa ini?"), sering diucapkan dengan nada ke-2 (wéi). Saat memanggil perhatian orang, diucapkan nada ke-4 (wèi).'
    ],
    example: '喂，你在做什么呢？(Wèi, nǐ zài zuò shénme ne? — Halo, kamu sedang melakukan apa?)',
    examples: [
      {
        hanzi: '喂，你好！请问大卫在家吗？',
        traditional: '喂，你好！請問大衛在家嗎？',
        pinyin: 'Wèi, nǐ hǎo! Qǐngwèn Dàwèi zài jiā ma?',
        translation: 'Halo! Permisi, apakah David ada di rumah?'
      },
      {
        hanzi: '喂，李老师，我是王方。',
        traditional: '喂，李老師，我是王方。',
        pinyin: 'Wèi, Lǐ lǎoshī, wǒ shì Wáng Fāng.',
        translation: 'Halo, Guru Li, saya Wang Fang.'
      }
    ]
  },
  {
    id: 'g-13-2',
    chapterId: 13,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Pola Aksi Sedang Berlangsung "在...呢" (zài...ne - Sedang...)',
    formula: '(+) Subjek + 在 + Kata Kerja + Objek + (呢)  |  (-) Subjek + 没(在) + Kata Kerja + Objek',
    desc: 'Untuk menyatakan suatu tindakan yang SEDANG berlangsung pada saat dibicarakan (Present/Past Continuous), letakkan kata keterangan 在 (zài) atau 正在 (zhèngzài) sebelum kata kerja, dan tambahkan partikel 呢 (ne) di akhir kalimat. Bentuk negatifnya ("tidak sedang...") menggunakan 没 (méi) atau 没在 (méi zài) di depan kata kerja TANPA partikel 呢!',
    notes: [
      'Bentuk Positif: bisa memakai 在 saja, 呢 saja, atau gabungan 在...呢 (我在看书呢 = Saya sedang membaca buku).',
      'Bentuk Negatif: Gunakan 没 (méi), BUKAN 不 (bù), dan hilangkan 呢! Contoh: 他没看书 (Dia tidak sedang membaca buku).'
    ],
    example: '我在看书呢，他没看书。(Wǒ zài kàn shū ne, tā méi kàn shū.)',
    examples: [
      {
        hanzi: '他在学做中国菜呢。',
        traditional: '他在學做中國菜呢。',
        pinyin: 'Tā zài xué zuò Zhōngguó cài ne.',
        translation: 'Dia sedang belajar memasak masakan Tiongkok.'
      },
      {
        hanzi: '昨天上午你在做什么呢？—— 我在睡觉呢。',
        traditional: '昨天上午你在做什麼呢？—— 我在睡覺呢。',
        pinyin: 'Zuótiān shàngwǔ nǐ zài zuò shénme ne? — Wǒ zài shuìjiào ne.',
        translation: 'Kemarin pagi kamu sedang melakukan apa? — Saya sedang tidur.'
      },
      {
        hanzi: '大卫没看电视，他在工作呢。',
        traditional: '大衛沒看電視，他在工作呢。',
        pinyin: 'Dàwèi méi kàn diànshì, tā zài gōngzuò ne.',
        translation: 'David tidak sedang menonton TV, dia sedang bekerja.'
      }
    ]
  },
  {
    id: 'g-13-3',
    chapterId: 13,
    category: 'Waktu, Angka & Uang',
    rule: 'Cara Menyebutkan Nomor Telepon & Penggunaan "给...打电话"',
    formula: 'Angka 1 dibaca "yāo" (幺)  |  Subjek + 给 (gěi) + Penerima + 打电话 (dǎ diànhuà)',
    desc: 'Saat menyebutkan nomor telepon, nomor kamar hotel, atau nomor bus dalam bahasa Mandarin, setiap digit angka dibaca satu per satu. Khusus untuk angka 1 (一), dalam nomor telepon dibaca sebagai "yāo" (bukan yī) agar di telepon suaranya tidak terdengar mirip dengan angka 7 (七 qī). Untuk menyatakan "menelepon seseorang", gunakan preposisi 给 (gěi = kepada) sebelum kata kerja 打电话.',
    notes: [
      'Angka 0 dibaca 零 (líng), angka 1 dibaca 幺 (yāo), dan angka 2 tetap dibaca 二 (èr, bukan liǎng).',
      'Urutan menelepon seseorang: Saya + 给 (kepada) + Dia + 打电话 (menelepon) ➔ 我给他打电话 (JANGAN menulis 我打电话他 ❌).'
    ],
    example: '她的电话是 82304156 (bā-èr-sān-líng-sì-yāo-wǔ-liù)。我现在给她打电话。',
    examples: [
      {
        hanzi: '这是李老师的电话吗？82304155。',
        traditional: '這是李老師的電話嗎？82304155。',
        pinyin: 'Zhè shì Lǐ lǎoshī de diànhuà ma? Bā-èr-sān-líng-sì-yāo-wǔ-wǔ.',
        translation: 'Apakah ini nomor telepon Guru Li? 82304155.'
      },
      {
        hanzi: '我现在给妈妈打电话。',
        traditional: '我現在給媽媽打電話。',
        pinyin: 'Wǒ xiànzài gěi māma dǎ diànhuà.',
        translation: 'Sekarang saya menelepon Ibu.'
      }
    ]
  },
  {
    id: 'g-13-4',
    chapterId: 13,
    category: 'Partikel',
    rule: 'Penggunaan Partikel Akhir "吧" (ba - Ajakan, Saran & Asumsi)',
    formula: 'Kalimat Ajakan / Saran / Perintah Halus / Tebakan + 吧 (ba)',
    desc: 'Partikel modal 吧 (ba) diletakkan di akhir kalimat dan memiliki tiga fungsi utama: (1) Menyatakan ajakan ("Mari kita... / ...yuk!"), (2) Memberikan saran atau memperhalus kalimat perintah ("...saja / ...lah"), dan (3) Menanyakan konfirmasi atas sesuatu yang sudah kita duga/asumsikan kebenarannya ("...kan?").',
    notes: [
      'Fungsi Ajakan: 我们走吧！ (Ayo kita berangkat!).',
      'Fungsi Saran Halus: 她在工作呢，你下午打吧。(Dia sedang bekerja, kamu telepon nanti sore saja ya).',
      'Fungsi Tebakan/Konfirmasi: 你是中国人吧？ (Kamu orang Tiongkok, kan?).'
    ],
    example: '她在工作呢，你下午打吧。(Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.)',
    examples: [
      {
        hanzi: '她在工作呢，你下午打吧。',
        traditional: '她在工作呢，你下午打吧。',
        pinyin: 'Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.',
        translation: 'Dia sedang bekerja, kamu telepon nanti sore saja.'
      },
      {
        hanzi: '我们一起去吃饭吧！',
        traditional: '我們一起去吃飯吧！',
        pinyin: 'Wǒmen yìqǐ qù chī fàn ba!',
        translation: 'Ayo kita pergi makan bersama-sama!'
      },
      {
        hanzi: '你是李老师的学生吧？',
        traditional: '你是李老師的學生吧？',
        pinyin: 'Nǐ shì Lǐ lǎoshī de xuésheng ba?',
        translation: 'Kamu muridnya Guru Li, bukan (kan)?'
      }
    ]
  },
  {
    id: 'g-13-5',
    chapterId: 13,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Penggunaan Kata Keterangan "也" (yě - Juga)',
    formula: 'Subjek + 也 (yě) + (不/没/Modal) + Kata Kerja / Kata Sifat',
    desc: 'Kata keterangan 也 (yě) berarti "juga". Dalam bahasa Mandarin, 也 WAJIB diletakkan SETELAH subjek dan SEBELUM kata kerja, kata sifat, atau kata negasi (不/没). Kata 也 tidak pernah boleh diletakkan di paling awal kalimat (sebelum subjek) atau di paling akhir kalimat.',
    notes: [
      'Jika digabung dengan negasi atau kata bantu modal, 也 selalu berada di DEPANnya: 也很好 (juga sangat baik), 也不喜欢 (juga tidak suka), 也会说 (juga bisa bicara).'
    ],
    example: '我是学生，他也是学生。(Wǒ shì xuésheng, tā yě shì xuésheng. — Saya siswa, dia juga siswa.)',
    examples: [
      {
        hanzi: '我喜欢这件衣服，也喜欢那件。',
        traditional: '我喜歡這件衣服，也喜歡那件。',
        pinyin: 'Wǒ xǐhuan zhè jiàn yīfu, yě xǐhuan nà jiàn.',
        translation: 'Saya suka baju yang ini, dan juga suka yang itu.'
      },
      {
        hanzi: '大卫也在看书吗？',
        traditional: '大衛也在看書嗎？',
        pinyin: 'Dàwèi yě zài kàn shū ma?',
        translation: 'Apakah David juga sedang membaca buku?'
      },
      {
        hanzi: '认识你我也很高兴！',
        traditional: '認識你我也很高興！',
        pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng!',
        translation: 'Berkenalan denganmu saya juga sangat senang!'
      }
    ]
  },

  // ==========================================
  // BAB 14: 她买了不少衣服 (Tā mǎi le bù shǎo yīfu)
  // ==========================================
  {
    id: 'g-14-1',
    chapterId: 14,
    category: 'Partikel',
    rule: 'Penggunaan Partikel "了" (le) Setelah Kata Kerja (Penyelesaian Aksi)',
    formula: '(+) S + V + 了 + (Jumlah/Spesifikasi) + O  |  (-) S + 没(有) + V + O (Tanpa 了!)',
    desc: 'Selain diletakkan di akhir kalimat, partikel 了 (le) juga dapat diletakkan tepat SETELAH kata kerja (V + 了) untuk menandakan bahwa suatu tindakan telah selesai dilakukan. Jika setelah kata kerja terdapat objek yang memiliki ukuran jumlah atau keterangan (seperti 不少衣服, 一点儿苹果, 三本书), maka 了 diletakkan di antara kata kerja dan objek tersebut.',
    notes: [
      'ATURAN PENTING NEGASI: Untuk menyangkal tindakan yang belum/tidak terjadi di masa lalu, gunakan 没 (méi) atau 没有 (méiyǒu) di depan kata kerja, dan partikel 了 WAJIB DIHILANGKAN!',
      'Contoh: 我买了衣服 (Saya sudah membeli baju) ➔ 我没买衣服 (Saya tidak membeli baju, BUKAN 我没买了衣服 ❌).'
    ],
    example: '她买了不少衣服，我没买。(Tā mǎi le bù shǎo yīfu, wǒ méi mǎi.)',
    examples: [
      {
        hanzi: '我买了一点儿苹果。',
        traditional: '我買了一點兒蘋果。',
        pinyin: 'Wǒ mǎi le yìdiǎnr píngguǒ.',
        translation: 'Saya telah membeli sedikit buah apel.'
      },
      {
        hanzi: '她买了不少衣服。',
        traditional: '她買了不少衣服。',
        pinyin: 'Tā mǎi le bù shǎo yīfu.',
        translation: 'Dia telah membeli cukup banyak pakaian. (不少 = tidak sedikit / banyak)'
      },
      {
        hanzi: '昨天我去商店买东西了。',
        traditional: '昨天我去商店買東西了。',
        pinyin: 'Zuótiān wǒ qù shāngdiàn mǎi dōngxi le.',
        translation: 'Kemarin saya telah pergi ke toko membeli barang.'
      }
    ]
  },
  {
    id: 'g-14-2',
    chapterId: 14,
    category: 'Waktu, Angka & Uang',
    rule: 'Penggunaan Kata Waktu "后 / 以后" (hòu / yǐhòu - Setelah / Kemudian)',
    formula: 'Waktu / Durasi / Kata Kerja + 后 (hòu) / 以后 (yǐhòu)',
    desc: 'Kata benda waktu 后 (hòu) atau 以后 (yǐhòu) berarti "setelah...", "kemudian", atau "...lagi". Sama seperti 前 (sebelum), kata 后 / 以后 selalu diletakkan SETELAH waktu, durasi waktu, atau tindakan acuannya.',
    notes: [
      'Contoh durasi waktu: 四十分钟后 (40 menit kemudian / 40 menit lagi), 三天后 (3 hari lagi).',
      'Contoh titik waktu / aksi: 五点以后 (setelah jam 5), 下课以后 (setelah selesai kelas).',
      'Perbedaan 以后 vs 然后 (ránhòu): 以后 diletakkan setelah frasa waktu/aksi, sedangkan 然后 adalah kata hubung di awal klausa kedua ("lalu / kemudian...").'
    ],
    example: '他四十分钟后回来。(Tā sìshí fēnzhōng hòu huílái. — Dia akan kembali 40 menit lagi.)',
    examples: [
      {
        hanzi: '他四十分钟后回来。',
        traditional: '他四十分鐘後回來。',
        pinyin: 'Tā sìshí fēnzhōng hòu huílái.',
        translation: 'Dia akan kembali setelah 40 menit (40 menit lagi).'
      },
      {
        hanzi: '下午五点以后我在家。',
        traditional: '下午五點以後我在家。',
        pinyin: 'Xiàwǔ wǔ diǎn yǐhòu wǒ zài jiā.',
        translation: 'Setelah jam 5 sore saya ada di rumah.'
      },
      {
        hanzi: '吃饭以后我们去看电影吧。',
        traditional: '吃飯以後我們去看電影吧。',
        pinyin: 'Chī fàn yǐhòu wǒmen qù kàn diànyǐng ba.',
        translation: 'Setelah makan mari kita pergi menonton film.'
      }
    ]
  },
  {
    id: 'g-14-3',
    chapterId: 14,
    category: 'Partikel',
    rule: 'Penggunaan Partikel Seru "啊" (a - Penegas / Antusias)',
    formula: 'Pernyataan / Persetujuan / Seruan + 啊 (a)!',
    desc: 'Partikel 啊 (a) diletakkan di akhir kalimat untuk memberikan nuansa antusiasme, penegasan, persetujuan yang ramah, atau seruan kekaguman. Arti pastinya mengikuti konteks kalimatnya.',
    notes: [
      '是啊！(Shì a!) = "Iya, benar sekali!" (Menyatakan persetujuan dengan hangat).',
      '好啊！(Hǎo a!) = "Oke, bagus sekali!" (Menyetujui ajakan dengan antusias).'
    ],
    example: 'A: 王方的衣服太漂亮了！ B: 是啊！(A: Pakaian Wang Fang cantik sekali! B: Benar sekali!)',
    examples: [
      {
        hanzi: '是啊，她买了不少衣服！',
        traditional: '是啊，她買了不少衣服！',
        pinyin: 'Shì a, tā mǎi le bù shǎo yīfu!',
        translation: 'Iya benar sekali, dia membeli cukup banyak pakaian!'
      },
      {
        hanzi: '好啊，我们一起去吧！',
        traditional: '好啊，我們一起去吧！',
        pinyin: 'Hǎo a, wǒmen yìqǐ qù ba!',
        translation: 'Oke bagus sekali, ayo kita pergi bersama!'
      }
    ]
  },
  {
    id: 'g-14-4',
    chapterId: 14,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Penggunaan Kata Keterangan "都" (dōu - Semua / Seluruhnya)',
    formula: 'Subjek Jamak + 都 (dōu) + Kata Kerja / Kata Sifat',
    desc: 'Kata keterangan 都 (dōu) berarti "semua" atau "keduanya". Dalam tata bahasa Mandarin, 都 WAJIB diletakkan SETELAH subjek/benda jamak yang dirangkumnya dan SEBELUM kata kerja atau kata sifat. Kata 都 tidak pernah boleh diletakkan di paling depan kalimat sebelum subjek!',
    notes: [
      'Ingat: Bahasa Indonesia mengatakan "Semua kami adalah siswa", tetapi bahasa Mandarin WAJIB mengatakan "Kami semua adalah siswa" (我们都是学生 ✅, BUKAN 都我们是学生 ❌).',
      'Jika digabung dengan 也, urutannya adalah 也都 (yě dōu).',
      'Perhatikan perbedaan posisi 不: 都不 (dōu bù = semuanya tidak) vs 不都 (bù dōu = tidak semuanya).'
    ],
    example: '这些都是王方的东西。(Zhèxiē dōu shì Wáng Fāng de dōngxi. — Semua ini adalah barang milik Wang Fang.)',
    examples: [
      {
        hanzi: '这些都是王方的东西。',
        traditional: '這些都是王方的東西。',
        pinyin: 'Zhèxiē dōu shì Wáng Fāng de dōngxi.',
        translation: 'Semua ini adalah barang milik Wang Fang.'
      },
      {
        hanzi: '我们都是中国人。',
        traditional: '我們都是中國人。',
        pinyin: 'Wǒmen dōu shì Zhōngguó rén.',
        translation: 'Kami semua adalah orang Tiongkok.'
      },
      {
        hanzi: '爸爸和妈妈都喜欢喝茶。',
        traditional: '爸爸和媽媽都喜歡喝茶。',
        pinyin: 'Bàba hé māma dōu xǐhuan hē chá.',
        translation: 'Ayah dan Ibu keduanya/semuanya suka minum teh.'
      }
    ]
  },
  {
    id: 'g-14-5',
    chapterId: 14,
    category: 'Perbandingan Penting',
    rule: 'Perbedaan Kata Negasi "不" (bù) dan "没 / 没有" (méi / méiyǒu)',
    formula: '不 (Sekarang/Masa Depan/Kebiasaan/Sifat)  vs  没 (Masa Lalu/Belum Terjadi/Kepemilikan 有)',
    desc: 'Kata 不 (bù) dan 没 (méi) sama-sama membentuk kalimat negatif, namun penggunaannya TIDAK DAPAT DIPERTUKARKAN. Memahami perbedaan keduanya adalah kunci utama menguasai tata bahasa HSK 1.',
    notes: [
      '1. Konteks Waktu & Kebiasaan: 不 digunakan untuk menyangkal keinginan/rencana sekarang & masa depan atau kebiasaan sehari-hari (我不喝茶 = Saya tidak minum teh). Sedangkan 没 digunakan untuk menyatakan tindakan yang TIDAK/BELUM dilakukan di masa lalu atau sekarang (昨天我没喝茶 = Kemarin saya tidak minum teh).',
      '2. Kata Kerja 是 vs 有: Kata 是 (shì) HANYA bisa dinegasikan dengan 不 (不是 bú shì). Sebaliknya, kata 有 (yǒu) HANYA bisa dinegasikan dengan 没 (没有 méiyǒu).',
      '3. Kata Sifat (Adjektiva): Untuk menyangkal sifat/keadaan umum gunakan 不 (不冷 = tidak dingin, 不好 = tidak baik), bukan 没.'
    ],
    example: '我不喜欢看电视 (Kebiasaan: pakai 不) vs 昨天我没看电视 (Kejadian lampau: pakai 没).',
    examples: [
      {
        hanzi: '今天我不上课。',
        traditional: '今天我不上課。',
        pinyin: 'Jīntiān wǒ bú shàng kè.',
        translation: 'Hari ini saya tidak masuk kelas. (Rencana hari ini ➔ pakai 不)'
      },
      {
        hanzi: '昨天我没去商店。',
        traditional: '昨天我沒去商店。',
        pinyin: 'Zuótiān wǒ méi qù shāngdiàn.',
        translation: 'Kemarin saya tidak pergi ke toko. (Peristiwa masa lalu ➔ pakai 没)'
      },
      {
        hanzi: '我不是老师，我没有钱。',
        traditional: '我不是老師，我沒有錢。',
        pinyin: 'Wǒ bú shì lǎoshī, wǒ méiyǒu qián.',
        translation: 'Saya bukan guru (不是), saya tidak punya uang (没有).'
      }
    ]
  },

  // ==========================================
  // BAB 15: 我是坐飞机来的 (Wǒ shì zuò fēijī lái de)
  // ==========================================
  {
    id: 'g-15-1',
    chapterId: 15,
    category: 'Struktur Kalimat Dasar',
    rule: 'Struktur Kalimat Penekanan "是...的" (shì...de)',
    formula: '(+) S + (是) + [Waktu / Tempat / Cara / Pelaku] + V + 的  |  (-) S + 不是 + [...] + V + 的',
    desc: 'Pola kalimat 是...的 (shì...de) digunakan ketika suatu kejadian SUDAH diketahui terjadi di masa lalu, dan pembicara ingin MENEKANKAN detail spesifik mengenai KAPAN (waktu), DI MANA (tempat), BAGAIMANA CARA/MODA TRANSPORTASI (cara), atau SIAPA (pelaku) dari kejadian tersebut. Bagian yang ditekankan diletakkan tepat setelah kata 是.',
    notes: [
      'Pada kalimat positif, kata 是 (shì) di depan boleh dihilangkan (contoh: 我坐飞机来的), tetapi partikel 的 di akhir kalimat TIDAK BOLEH dihilangkan!',
      'Pada kalimat negatif, kata 不是 (bú shì) WAJIB disertakan (tidak boleh dihilangkan): 我不是坐飞机来的 (Saya datangnya BUKAN naik pesawat).',
      'Jika objek kata kerjanya berupa kata benda tempat (seperti 来北京 / 来饭店), objek tempat dapat diletakkan sebelum maupun sesudah 的 (我是坐飞机来北京的).'
    ],
    example: '我是坐飞机来的。(Wǒ shì zuò fēijī lái de. — Saya datangnya dengan NAIK PESAWAT.)',
    examples: [
      {
        hanzi: '我们是2011年9月认识的。',
        traditional: '我們是2011年9月認識的。',
        pinyin: 'Wǒmen shì èr-líng-yī-yī nián jiǔ yuè rènshi de.',
        translation: 'Kami saling kenalnya pada BULAN SEPTEMBER 2011. (Menekankan Waktu)'
      },
      {
        hanzi: '我们是在学校认识的。',
        traditional: '我們是在學校認識的。',
        pinyin: 'Wǒmen shì zài xuéxiào rènshi de.',
        translation: 'Kami saling kenalnya DI SEKOLAH. (Menekankan Tempat)'
      },
      {
        hanzi: '我们是坐出租车来的，不是坐飞机来的。',
        traditional: '我們是坐出租車來的，不是坐飛機來的。',
        pinyin: 'Wǒmen shì zuò chūzūchē lái de, bú shì zuò fēijī lái de.',
        translation: 'Kami datangnya NAIK TAKSI, bukan naik pesawat. (Menekankan Cara)'
      },
      {
        hanzi: '这个蛋糕是昨天买的。',
        traditional: '這個蛋糕是昨天買的。',
        pinyin: 'Zhège dàngāo shì zuótiān mǎi de.',
        translation: 'Kue ini dibelinya KEMARIN.'
      }
    ]
  },
  {
    id: 'g-15-2',
    chapterId: 15,
    category: 'Kata Ganti Interogatif',
    rule: 'Kata Tanya "为什么" (wèishénme - Mengapa) & Jawaban "因为" (yīnwèi)',
    formula: 'Tanya: Subjek + 为什么 (wèishénme) + Predikat？  ➔  Jawab: 因为 (yīnwèi) + Alasan',
    desc: 'Kata tanya 为什么 (wèishénme) berarti "mengapa / kenapa", digunakan untuk menanyakan alasan suatu tindakan atau keadaan. Di dalam kalimat, 为什么 biasanya diletakkan setelah subjek (sebelum kata kerja/predikat). Untuk menjawabnya, gunakan kata penghubung 因为 (yīnwèi) yang berarti "karena".',
    notes: [
      'Dalam percakapan singkat, 为什么 juga bisa berdiri sendiri ("Kenapa?").',
      'Jika kalimatnya negatif ("Kenapa kamu tidak makan?"), urutan katanya adalah: Subjek + 为什么 + 不/没 + Kata Kerja (你为什么不吃饭？).'
    ],
    example: 'A: 你为什么不吃饭？ B: 因为我不饿。(A: Mengapa kamu tidak makan? B: Karena saya tidak lapar.)',
    examples: [
      {
        hanzi: '你为什么不吃饭？',
        traditional: '你為什麼不吃飯？',
        pinyin: 'Nǐ wèishénme bù chī fàn?',
        translation: 'Mengapa kamu tidak makan?'
      },
      {
        hanzi: '你为什么学习汉语？—— 因为我很喜欢中国文化。',
        traditional: '你為什麼學習漢語？—— 因為我很喜歡中國文化。',
        pinyin: 'Nǐ wèishénme xuéxí Hànyǔ? — Yīnwèi wǒ hěn xǐhuan Zhōngguó wénhuà.',
        translation: 'Mengapa kamu belajar bahasa Mandarin? — Karena saya sangat menyukai budaya Tiongkok.'
      }
    ]
  },
  {
    id: 'g-15-3',
    chapterId: 15,
    category: 'Kata Keterangan (Adverbia)',
    rule: 'Penggunaan Kata Keterangan "一起" (yìqǐ - Bersama-sama)',
    formula: 'Subjek A + 和 (hé) + Subjek B + 一起 (yìqǐ) + Kata Kerja + Objek',
    desc: 'Kata keterangan 一起 (yìqǐ) berarti "bersama-sama". Selalu diletakkan SEBELUM kata kerja utama. Sering dipadukan dengan kata penghubung 和 (hé = bersama dengan) dalam pola: A 和 B 一起 + Kata Kerja ("A melakukan sesuatu bersama-sama dengan B").',
    notes: [
      'Dalam bahasa Mandarin lisan daerah utara, 一起 juga sering disebut 一块儿 (yíkuàir).',
      'Ingat posisinya selalu di depan kata kerja: 一起去 (pergi bersama), 一起开车 (menyetir bersama), 一起学习 (belajar bersama).'
    ],
    example: '他是和朋友一起开车来的。(Tā shì hé péngyou yìqǐ kāi chē lái de. — Dia datang menyetir mobil bersama temannya.)',
    examples: [
      {
        hanzi: '他是和朋友一起开车来的。',
        traditional: '他是和朋友一起開車來的。',
        pinyin: 'Tā shì hé péngyou yìqǐ kāi chē lái de.',
        translation: 'Dia datang menyetir mobil bersama-sama dengan temannya.'
      },
      {
        hanzi: '我们一起去学校看书吧！',
        traditional: '我們一起去學校看書吧！',
        pinyin: 'Wǒmen yìqǐ qù xuéxiào kàn shū ba!',
        translation: 'Ayo kita pergi ke sekolah untuk membaca buku bersama-sama!'
      }
    ]
  }
];

export const GRAMMAR_CATEGORIES = [
  'Semua Kategori',
  'Struktur Kalimat Dasar',
  'Kata Ganti Interogatif',
  'Kata Kerja & Modal',
  'Kata Keterangan (Adverbia)',
  'Partikel',
  'Waktu, Angka & Uang',
  'Perbandingan Penting',
  'Kata Ganti & Sapaan',
  'Ungkapan Sehari-hari'
] as const;

export function getGrammarByChapter(chapterId: number): GrammarItem[] {
  return HSK1_COMPLETE_GRAMMAR.filter((item) => item.chapterId === chapterId);
}
