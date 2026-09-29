import { WorkbookExercise, WorkbookQuestionItem } from '../types';

function createQuestionsForChapter(
  chapterId: number,
  title: string,
  levelDesc: string,
  hanziPractice: string[],
  specificQuestions: WorkbookQuestionItem[]
): WorkbookExercise {
  return {
    chapterId,
    title,
    levelDesc,
    questions: specificQuestions,
    hanziPractice
  };
}

export const COMPREHENSIVE_WORKBOOK_PART4: WorkbookExercise[] = [
  // ================= BAB 11 =================
  createQuestionsForChapter(
    11,
    "Bab 11: 现在几点 (What's the Time Now / Waktu Jam & Jadwal)",
    "Tingkat Menengah-Tinggi (Penyebutan Jam 点 & Menit 分, Waktu Sebagai Adverbia, '什么时候', '前')",
    ["午", "电"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "现在几点？现在10点10分。(Xiànzài jǐ diǎn? Xiànzài shí diǎn shí fēn.)",
        question: "1. [听力] Jam berapakah saat ini menurut rekaman?",
        options: ["10:10 (十点十分)", "10:00", "09:50", "11:10"],
        answer: 0,
        explanation: "十点十分 = jam 10 lewat 10 menit."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "中午几点吃饭？12点吃饭。(Zhōngwǔ jǐ diǎn chī fàn? Shí'èr diǎn chī fàn.)",
        question: "2. [听力] Jam berapa makan siang dimulai?",
        options: ["Jam 12:00 tepat (十二点)", "Jam 11:30", "Jam 12:30", "Jam 01:00"],
        answer: 0,
        explanation: "十二点吃饭 = makan siang jam 12."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "爸爸什么时候回家？下午5点。(Bàba shénme shíhou huí jiā? Xiàwǔ wǔ diǎn.)",
        question: "3. [听力] Kapan ayah pulang ke rumah?",
        options: ["Sore jam 5:00 (下午五点)", "Pagi jam 8:00", "Malam jam 7:00", "Siang jam 12:00"],
        answer: 0,
        explanation: "下午五点 = jam 5 sore."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我们什么时候去看电影？6点30分。(Wǒmen shénme shíhou qù kàn diànyǐng? Liù diǎn sānshí fēn.)",
        question: "4. [听力] Jam berapa mereka akan menonton film?",
        options: ["06:30 (六点三十分)", "06:00", "07:30", "08:00"],
        answer: 0,
        explanation: "六点三十分 = 06:30."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "我星期一去北京，住三天，星期五前回家。(Wǒ xīngqīyī qù Běijīng, zhù sān tiān, xīngqīwǔ qián huí jiā.)",
        question: "5. [听力] Berapa hari pembicara akan tinggal di Beijing?",
        options: ["3 hari (三天)", "5 hari", "1 minggu", "4 hari"],
        answer: 0,
        explanation: "住三天 = tinggal selama 3 hari."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Jam '02:00 tepat' dalam bahasa Mandarin wajib dibaca...",
        options: ["两点 (liǎng diǎn)", "二点 (èr diǎn)", "倆点 (liǎ diǎn)", "双点 (shuāng diǎn)"],
        answer: 0,
        explanation: "Untuk waktu jam 2:00 digunakan 两点."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'dasar',
        question: "7. [语法] Rumus dasar menyebutkan waktu jam adalah...",
        options: [
          "Angka + 点 (diǎn) + Angka + 分 (fēn)",
          "Angka + 分 + Angka + 点",
          "点 + Angka + 分",
          "Hari + Tanggal + Jam"
        ],
        answer: 0,
        explanation: "Jam (点) mendahului Menit (分)."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Keterangan waktu (adverbial waktu) dalam kalimat diletakkan di...",
        options: [
          "Sebelum kata kerja (bisa setelah subjek atau di awal kalimat)",
          "Di ujung akhir kalimat setelah objek",
          "Di tengah kata kerja",
          "Sebelum partikel 吗"
        ],
        answer: 0,
        explanation: "Keterangan waktu diletakkan sebelum predikat."
      },
      {
        id: 9,
        type: 'reading',
        difficulty: 'menengah',
        question: "9. [阅读] Kata '什么时候' (shénme shíhou) digunakan untuk menanyakan...",
        options: ["Kapan (waktu terjadinya peristiwa)", "Di mana", "Berapa orang", "Mengapa"],
        answer: 0,
        explanation: "什么时候 = kapan."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 我们下午五点半去______电影。",
        options: ["看 (kàn)", "吃 (chī)", "买 (mǎi)", "写 (xiě)"],
        answer: 0,
        explanation: "看电影 = menonton film."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 星期五______能回家吗？—— 能。",
        options: ["前 (qián)", "上 (shàng)", "里 (lǐ)", "后 (hòu)"],
        answer: 0,
        explanation: "星期五前 = sebelum hari Jumat."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 回家 ② 爸爸 ③ 时候 ④ 什么",
        options: ["②④③① (爸爸什么时候回家？)", "④③②① (什么时候爸爸回家？)", "②①④③ (爸爸回家什么时候？)", "④②③① (什么爸爸时候回家？)"],
        answer: 0,
        explanation: "Pola: S (爸爸) + 什么时候 + V (回家)？"
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 吃午饭 ② 十二点 ③ 我们",
        options: ["③②① (我们十二点吃午饭。)", "②③① (十二点我们吃午饭。)", "③①② (我们吃午饭十二点。)", "①③② (吃午饭我们十二点。)"],
        answer: 0,
        explanation: "Urutan tepat: 我们十二点吃午饭 (atau 十二点我们吃午饭)."
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Karakter '午' (wǔ) terdapat dalam kata...",
        options: ["中午 (siang), 上午 (pagi), 下午 (sore)", "今天", "衣服", "学校"],
        answer: 0,
        explanation: "午 berkaitan dengan tengah hari/waktu siang."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Karakter '电' (diàn - listrik) terdapat dalam gabungan kata...",
        options: ["电影 (film), 电脑 (komputer), 电视 (TV), 电话 (telepon)", "茶杯", "苹果", "米饭"],
        answer: 0,
        explanation: "Semua peralatan elektronik modern menggunakan 電/电."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Pukul '08:45 pagi' dalam bahasa Mandarin dapat dinyatakan sebagai...",
        options: ["上午八点四十五分", "下午八点四十五分", "中午八点四十五分", "四十五分八点"],
        answer: 0,
        explanation: "上午 (pagi) + 八点四十五分 (08:45)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '我哥哥住在北京，他下个月回国。' Di manakah kakak laki-laki tinggal saat ini?",
        options: ["Di Beijing (北京)", "Di Amerika", "Di sekolah", "Di rumah sakit"],
        answer: 0,
        explanation: "住在北京 = tinggal di Beijing."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "大卫想在北京住几天？住四天。(Dàwèi xiǎng zài Běijīng zhù jǐ tiān? Zhù sì tiān.)",
        question: "18. [听力] Berapa hari David berencana tinggal di Beijing?",
        options: ["4 hari (四天)", "3 hari", "5 hari", "2 hari"],
        answer: 0,
        explanation: "四天 = 4 hari."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] 你在北京______了几天？—— 住了三天。",
        options: ["住 (zhù)", "做 (zuò)", "坐 (zuò)", "吃 (chī)"],
        answer: 0,
        explanation: "住 = tinggal / menginap."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [句型辨析] Manakah kalimat yang tepat?",
        options: [
          "我明天下午两点去图书馆。",
          "我下午两点明天去图书馆。",
          "我两点去图书馆明天下午。",
          "去图书馆我明天下午两点。"
        ],
        answer: 0,
        explanation: "Urutan waktu: dari hari (明天) ke bagian hari (下午) lalu jam (两点)."
      }
    ]
  ),

  // ================= BAB 12 =================
  createQuestionsForChapter(
    12,
    "Bab 12: 明天天气怎么样 (Weather / Cuaca & Kesehatan)",
    "Tingkat Menengah-Tinggi (Kata Tanya '怎么样', Derajat '太...了', Modal Kemungkinan '会', Buah & Air 水果/水)",
    ["天", "气", "雨"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "明天天气怎么样？(Míngtiān tiānqì zěnmeyàng?)",
        question: "1. [听力] Pertanyaan ini menanyakan...",
        options: ["Bagaimana cuaca besok", "Jam berapa sekarang", "Siapa yang datang besok", "Di mana beli payung"],
        answer: 0,
        explanation: "天气怎么样 menanyakan kondisi cuaca."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "昨天北京的天气太热了。(Zuótiān Běijīng de tiānqì tài rè le.)",
        question: "2. [听力] Bagaimana kondisi cuaca Beijing kemarin?",
        options: ["Terlalu panas (太热了)", "Sangat dingin", "Hujan deras", "Berangin"],
        answer: 0,
        explanation: "太热了 = terlalu panas."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "今天会下雨吗？今天不会下雨。(Jīntiān huì xià yǔ ma? Jīntiān bú huì xià yǔ.)",
        question: "3. [听力] Apakah hari ini akan turun hujan?",
        options: ["Tidak akan turun hujan (不会下雨)", "Pasti hujan", "Sedang hujan deras", "Hujan salju"],
        answer: 0,
        explanation: "不会下雨 = tidak akan hujan."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "王小姐今天会来吗？不会来，天气太冷了。(Wáng xiǎojiě jīntiān huì lái ma? Bú huì lái, tiānqì tài lěng le.)",
        question: "4. [听力] Mengapa Nona Wang tidak datang?",
        options: ["Cuaca terlalu dingin (天气太冷了)", "Sedang sakit", "Tidak punya mobil", "Sedang bekerja"],
        answer: 0,
        explanation: "天气太冷了 = cuaca terlalu dingin."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "你身体怎么样？你多吃些水果，多喝水。(Nǐ shēntǐ zěnmeyàng? Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.)",
        question: "5. [听力] Apa anjuran dokter kepada pasien?",
        options: ["Perbanyak makan buah dan banyak minum air", "Jangan makan nasi", "Tidur sepanjang hari", "Minum obat pahit"],
        answer: 0,
        explanation: "多吃水果，多喝水 = perbanyak buah dan air."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Kata '热' (rè) dan '冷' (lěng) secara berurutan berarti...",
        options: ["Panas dan Dingin", "Besar dan Kecil", "Banyak dan Sedikit", "Tinggi dan Rendah"],
        answer: 0,
        explanation: "热 = panas, 冷 = dingin."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'menengah',
        question: "7. [语法] Struktur derajat '太 + Kata Sifat + 了' berarti...",
        options: ["Terlalu / Sangat sekali (contoh: 太好了, 太热了)", "Sedang berlangsung", "Tidak boleh", "Bisa dipelajari"],
        answer: 0,
        explanation: "太...了 menyatakan intensitas/derajat tinggi."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Bentuk negatif dari '太好' adalah...",
        options: ["不太好 (tidak terlalu bagus / kurang baik)", "没太好", "不好了太", "太不好"],
        answer: 0,
        explanation: "Bentuk negatifnya tidak memakai 了: 不太好."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Pada kalimat '今天会下雨吗', fungsi kata '会' (huì) adalah...",
        options: ["Menyatakan kemungkinan masa depan ('akan')", "Menyatakan kemampuan belajar", "Menyatakan izin", "Menyatakan masa lampau"],
        answer: 0,
        explanation: "会 di sini menyatakan probabilitas/kemungkinan."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 明天天气很好，不______不热。",
        options: ["冷 (lěng)", "大 (dà)", "少 (shǎo)", "水 (shuǐ)"],
        answer: 0,
        explanation: "不冷不热 = tidak dingin dan tidak panas."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 天气太热了，你要多______水。",
        options: ["喝 (hē)", "吃 (chī)", "买 (mǎi)", "读 (dú)"],
        answer: 0,
        explanation: "喝水 = minum air."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 怎么样 ② 明天 ③ 天气",
        options: ["②③① (明天天气怎么样？)", "③①② (天气怎么样明天？)", "①②③ (怎么样明天天气？)", "②①③ (明天怎么样天气？)"],
        answer: 0,
        explanation: "Urutan alami: 明天天气怎么样？"
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 会 ② 今天 ③ 下雨 ④ 吗",
        options: ["②①③④ (今天会下雨吗？)", "①③②④ (会下雨今天吗？)", "④②①③ (吗今天会下雨？)", "②③①④ (今天下雨会吗？)"],
        answer: 0,
        explanation: "Pola: 今天 + 会 + 下雨 + 吗？"
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Karakter '雨' (yǔ) melambangkan...",
        options: ["Tetesan air hujan yang turun dari langit", "Pohon berbuah", "Batu karang", "Api menyala"],
        answer: 0,
        explanation: "雨 adalah piktograf titik-titik hujan dari langit."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Radikal '雨' (yǔzìtóu) terdapat dalam karakter yang berhubungan dengan...",
        options: ["Fenomena cuaca dan presipitasi (contoh: 雪 salju, 零 nol)", "Logam", "Makanan", "Bahasa"],
        answer: 0,
        explanation: "Radikal 雨 berkaitan dengan fenomena cuaca."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Kata '身体' (shēntǐ) bermakna...",
        options: ["Tubuh / Badan / Kesehatan", "Pakaian", "Rumah", "Makanan"],
        answer: 0,
        explanation: "身体 = kesehatan / tubuh."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '医生说：天气太热，不爱吃饭是正常的，要多吃新鲜水果。' Apa penjelasan dokter tentang kurang selera makan?",
        options: ["Hal yang wajar karena cuaca terlalu panas", "Tanda penyakit sangat parah", "Harus minum es banyak", "Harus makan obat tidur"],
        answer: 0,
        explanation: "Dokter menyatakan itu wajar (正常) saat cuaca panas."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "谢谢你，李医生。(Xièxie nǐ, Lǐ yīshēng.)",
        question: "18. [听力] Siapakah nama dokter yang disapa?",
        options: ["Dokter Li (李医生)", "Dokter Wang (王医生)", "Dokter Zhang (张医生)", "Dokter Liu"],
        answer: 0,
        explanation: "李医生 = Dokter Li."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 你想吃点儿什么？ B: 我想吃______苹果。",
        options: ["一些 (yìxiē)", "一点 (yìdiǎn)", "一个 (yíge)", "一多 (yìduō)"],
        answer: 0,
        explanation: "一些 (beberapa/sejumlah) cocok untuk apel."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [句型辨析] Manakah kalimat yang menyatakan penolakan atau ketidaksukaan yang tepat?",
        options: ["我不爱吃这个菜。", "我不喜欢会这个菜。", "这个菜我没想爱吃。", "爱不吃我这个菜。"],
        answer: 0,
        explanation: "不爱吃 = tidak gemar/suka makan."
      }
    ]
  ),

  // ================= BAB 13 =================
  createQuestionsForChapter(
    13,
    "Bab 13: 他在学做中国菜呢 (He is Learning to Cook / Sedang Berlangsung)",
    "Tingkat Lanjut (Aktivitas Sedang Berlangsung '在...呢', Negasi '没在', Membaca Angka Telepon 'yāo', Partikel '吧')",
    ["日", "目", "习"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "喂，你在做什么呢？(Wèi, nǐ zài zuò shénme ne?)",
        question: "1. [听力] Kata '喂' (wèi) di awal percakapan menandakan situasi...",
        options: ["Percakapan panggilan telepon", "Makan di restoran", "Menonton bioskop", "Membeli baju"],
        answer: 0,
        explanation: "喂 (wèi) adalah kata halo saat berbicara di telepon."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我在看书呢。(Wǒ zài kàn shū ne.)",
        question: "2. [听力] Apa yang sedang dilakukan pembicara?",
        options: ["Sedang membaca buku", "Sedang memasak", "Sedang tidur", "Sedang menonton film"],
        answer: 0,
        explanation: "看书 = membaca buku."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "他没看书，他在学做中国菜呢。(Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.)",
        question: "3. [听力] Apakah dia sedang membaca buku?",
        options: ["Tidak, dia sedang belajar memasak masakan Cina", "Ya, dia membaca buku resep", "Dia sedang makan di restoran", "Dia sedang berbelanja"],
        answer: 0,
        explanation: "他没看书，他在学做中国菜呢."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我不喜欢看电视，我喜欢看电影。(Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.)",
        question: "4. [听力] Apa hobi atau hal yang disukai pembicara?",
        options: ["Menonton film di bioskop (电影)", "Menonton televisi (电视)", "Membaca komik", "Memasak"],
        answer: 0,
        explanation: "我喜欢看电影 = saya suka menonton film."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "她的电话是82304156。(Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.)",
        question: "5. [听力] Berapakah nomor telepon yang disebutkan?",
        options: ["82304156", "82304155", "82304165", "83204156"],
        answer: 0,
        explanation: "bā èr sān líng sì yāo wǔ liù = 82304156."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Angka '1' dalam penyebutan nomor telepon dibaca...",
        options: ["yāo", "yī", "yí", "yì"],
        answer: 0,
        explanation: "Angka 1 pada nomor telepon dibaca 'yāo' agar tidak tertukar dengan 7 (qī)."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'menengah',
        question: "7. [语法] Pola untuk menyatakan kegiatan yang SEDANG BERLANGSUNG adalah...",
        options: [
          "Subjek + 在 + Kata Kerja + 呢 (contoh: 我在看书呢)",
          "Subjek + 会 + Kata Kerja",
          "Subjek + 是 + Kata Kerja",
          "Subjek + 想 + Kata Kerja"
        ],
        answer: 0,
        explanation: "在...呢 menyatakan aksi progresif."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Bentuk ingkar dari '他在看书呢' adalah...",
        options: [
          "他没看书 / 他没在看书 (tanpa partikel 呢 di akhir)",
          "他不看书呢",
          "他没看书呢",
          "他不是看书呢"
        ],
        answer: 0,
        explanation: "Negasi dari aksi progresif memakai 没(在) dan partikel 呢 harus dihilangkan."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Partikel '吧' (ba) di akhir kalimat '你下午打吧' berfungsi untuk...",
        options: ["Memberikan saran atau anjuran secara santun", "Bertanya ya/tidak", "Menyatakan kemarahan", "Menunjukkan kepemilikan"],
        answer: 0,
        explanation: "吧 melembutkan kalimat saran atau ajakan."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] A: 你在做什么呢？ B: 我在______呢，请小声一点。",
        options: ["睡觉 (shuìjiào)", "打电话 (dǎ diànhuà)", "喜欢 (xǐhuan)", "东西 (dōngxi)"],
        answer: 0,
        explanation: "Meminta untuk tidak bersuara keras: 睡觉 (tidur)."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 她在工作呢，你下午再给她______电话吧。",
        options: ["打 (dǎ)", "看 (kàn)", "吃 (chī)", "买 (mǎi)"],
        answer: 0,
        explanation: "打电话 = menelepon."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 在 ② 做什么 ③ 你 ④ 呢",
        options: ["③①②④ (你在做什么呢？)", "②①③④ (做什么你在呢？)", "④③①② (呢你在做什么？)", "③②①④ (你做什么在呢？)"],
        answer: 0,
        explanation: "Pola: S (你) + 在 + 做什么 + 呢？"
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 电视 ② 喜欢 ③ 不 ④ 我 ⑤ 看",
        options: ["④③②⑤① (我不喜欢看电视。)", "④②⑤①③ (我喜欢看电视不。)", "③④②⑤① (不我喜欢看电视。)", "⑤①④③② (看电视我不喜欢。)"],
        answer: 0,
        explanation: "Pola: S (我) + 不喜欢 + V (看) + O (电视)."
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Radikal '日' (rìzìpáng) berhubungan dengan...",
        options: ["Matahari dan waktu (contoh: 明, 时, 晴)", "Mata", "Air", "Bicara"],
        answer: 0,
        explanation: "日 melambangkan matahari/waktu."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Radikal '目' (mùzìpáng) berhubungan dengan...",
        options: ["Mata dan penglihatan (contoh: 睡, 眼, 看)", "Matahari", "Tangan", "Pohon"],
        answer: 0,
        explanation: "目 melambangkan organ mata."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Ungkapan '给 someone 打电话' berarti...",
        options: ["Menelepon seseorang", "Memberikan nomor telepon", "Membelikan ponsel", "Mendengarkan telepon"],
        answer: 0,
        explanation: "给...打电话 = menelepon seseorang."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '大卫在学校学习汉语，他喜欢中国菜，也在学做中国菜。' Manakah pernyataan yang benar?",
        options: ["David belajar bahasa Mandarin dan juga belajar masak masakan Cina", "David seorang guru memasak", "David tidak menyukai makanan Cina", "David hanya tidur di sekolah"],
        answer: 0,
        explanation: "Teks menyatakan David belajar Mandarin dan sedang belajar memasak makanan Cina."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "大卫在工作呢，你明天再打吧。(Dàwèi zài gōngzuò ne, nǐ míngtiān zài dǎ ba.)",
        question: "18. [听力] Mengapa David disarankan ditelepon besok?",
        options: ["Karena David sedang bekerja (在工作呢)", "Karena ponselnya rusak", "Karena David sedang di luar negeri", "Karena dia tidak punya pulsa"],
        answer: 0,
        explanation: "在工作呢 = sedang bekerja."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 他在看电视吗？ B: 他______看电视，他在睡觉呢。",
        options: ["没 (méi)", "不 (bù)", "别 (bié)", "无 (wú)"],
        answer: 0,
        explanation: "没看电视 = tidak sedang menonton TV."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [句型辨析] Manakah kalimat yang tepat untuk mengajak makan bersama?",
        options: ["我们一起去吃饭吧！", "我们去吃一起饭吧！", "一起去我们吃饭吗！", "吃饭去吧我们一起！"],
        answer: 0,
        explanation: "Urutan alami: 我们一起去吃饭吧！"
      }
    ]
  ),

  // ================= BAB 14 =================
  createQuestionsForChapter(
    14,
    "Bab 14: 她买了不少衣服 (She Bought Quite a Few Clothes / Selesai '了')",
    "Tingkat Lanjut (Partikel Aspek Selesai '了', Waktu '...后', Kuantitas '一点儿' vs '不少', Adverbia '都')",
    ["开", "车", "回"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我去商店买东西了。(Wǒ qù shāngdiàn mǎi dōngxi le.)",
        question: "1. [听力] Ke mana pembicara pergi dan apa yang dilakukannya?",
        options: ["Pergi ke toko membeli barang (买东西)", "Pergi ke sekolah membaca buku", "Pergi ke bioskop menonton film", "Pergi ke rumah sakit"],
        answer: 0,
        explanation: "去商店买东西 = pergi ke toko belanja barang."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我买了一点儿苹果。(Wǒ mǎi le yìdiǎnr píngguǒ.)",
        question: "2. [听力] Buah apakah yang dibeli oleh pembicara?",
        options: ["Apel (苹果)", "Jeruk", "Pisang", "Semangka"],
        answer: 0,
        explanation: "苹果 (píngguǒ) = buah apel."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "他去学开车了，40分钟后回来。(Tā qù xué kāi chē le, sìshí fēnzhōng hòu huílái.)",
        question: "3. [听力] Kapan dia akan kembali?",
        options: ["Setelah 40 menit (40分钟后)", "Setelah 10 menit", "Setelah 1 jam", "Besok sore"],
        answer: 0,
        explanation: "40分钟后回来 = kembali setelah 40 menit."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "王方的衣服太漂亮了，她买了不少衣服。(Wáng Fāng de yīfu tài piàoliang le, tā mǎi le bù shǎo yīfu.)",
        question: "4. [听力] Berapa banyak pakaian yang dibeli Wang Fang?",
        options: ["Cukup banyak pakaian (不少衣服)", "Hanya satu helai", "Tidak membeli apa-apa", "Sedikit saja"],
        answer: 0,
        explanation: "不少 (bù shǎo) = tidak sedikit / cukup banyak."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "这些都是王方的东西。(Zhèxiē dōu shì Wáng Fāng de dōngxi.)",
        question: "5. [听力] Milik siapakah barang-barang tersebut?",
        options: ["Semuanya milik Wang Fang (都是王方的)", "Milik saya", "Milik Zhang Peng", "Milik guru"],
        answer: 0,
        explanation: "都是王方的 = semuanya kepunyaan Wang Fang."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Kata '开车' (kāi chē) berarti...",
        options: ["Menyetir / mengendarai mobil", "Membeli mobil baru", "Memperbaiki mobil", "Mencuci mobil"],
        answer: 0,
        explanation: "开车 = menyetir kendaraan bermotor."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'menengah',
        question: "7. [语法] Partikel '了' (le) di belakang kata kerja (seperti: 买了苹果) menandakan...",
        options: ["Tindakan tersebut telah diselesaikan atau terjadi (aspek perfektivitas)", "Tindakan dilarang", "Tindakan sedang direncanakan", "Tindakan bersifat masa depan"],
        answer: 0,
        explanation: "Verb + 了 menyatakan tindakan telah selesai dilakukan."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Bentuk negatif dari '我买了衣服' adalah...",
        options: ["我没买衣服 (tanpa partikel 了)", "我不买衣服了", "我买不衣服", "我不买了衣服"],
        answer: 0,
        explanation: "Negasi untuk aksi selesai adalah 没 + V (partikel 了 harus dihilangkan)."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Penggunaan '...后' (hòu) setelah durasi waktu (contoh: 三天后, 10分钟后) berarti...",
        options: ["Setelah ... / ... kemudian", "Sebelum", "Saat ini", "Kemarin"],
        answer: 0,
        explanation: "Waktu + 后 = setelah waktu tersebut berlalu."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] A: 你看见张先生了吗？ B: ______了，他在外面。",
        options: ["看见 (kànjiàn)", "吃 (chī)", "喝 (hē)", "听 (tīng)"],
        answer: 0,
        explanation: "看见 = melihat."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 这些书______是汉语书，没有英语书。",
        options: ["都 (dōu)", "也 (yě)", "在 (zài)", "很 (hěn)"],
        answer: 0,
        explanation: "都 (semuanya) merangkum subjek jamak 这些书."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 买 ② 苹果 ③ 了 ④ 我 ⑤ 一点儿",
        options: ["④①③⑤② (我买了一点儿苹果。)", "④⑤②①③ (我一点儿苹果买了。)", "⑤②④①③ (一点儿苹果我买了。)", "①③④⑤② (买了我不一点儿苹果。)"],
        answer: 0,
        explanation: "Pola: S (我) + V (买) + 了 + Kuantitas (一点儿) + O (苹果)."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 40分钟后 ② 回来 ③ 能 ④ 他",
        options: ["④③①② (他40分钟后能回来。)", "①④③② (40分钟后他能回来。)", "④①②③ (他40分钟后回来能。)", "②③④① (回来能他40分钟后。)"],
        answer: 0,
        explanation: "Pola: 他40分钟后能回来 (atau 40分钟后他能回来)."
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Radikal '月' (ròuyuèpáng - daging) dalam karakter '服' dan '胖' melambangkan...",
        options: ["Bagian tubuh manusia atau daging", "Bulan di langit", "Air sungai", "Uang logam"],
        answer: 0,
        explanation: "Radikal 肉月旁 berkaitan dengan bagian tubuh dan fisik."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Radikal '扌' (tíshǒupáng - tangan) dalam '打' dan '找' berkaitan dengan...",
        options: ["Tindakan yang dilakukan dengan tangan", "Kaki melompat", "Mata melihat", "Telinga mendengar"],
        answer: 0,
        explanation: "Radikal 扌 berhubungan dengan perbuatan tangan."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Kata '先生' (xiānsheng) dapat digunakan untuk sapaan hormat...",
        options: ["Tuan / Bapak / Suami", "Nona yang belum menikah", "Anak kecil", "Hewan"],
        answer: 0,
        explanation: "先生 = Tuan / Mr. / Bapak."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '我昨天买了不少苹果，今天我们一起吃吧。' Kapan buah apel dibeli?",
        options: ["Kemarin (昨天)", "Hari ini", "Besok", "Tadi pagi"],
        answer: 0,
        explanation: "昨天 = kemarin."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "我没买衣服，这些都是王方的东西。(Wǒ méi mǎi yīfu, zhèxiē dōu shì Wáng Fāng de dōngxi.)",
        question: "18. [听力] Apakah pembicara membeli pakaian?",
        options: ["Tidak membeli pakaian (没买衣服)", "Membeli banyak pakaian", "Membeli satu gaun", "Membeli pakaian untuk ibu"],
        answer: 0,
        explanation: "我没买衣服 = saya tidak membeli pakaian."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 你去哪儿了？ B: 我去火车站______朋友了。",
        options: ["接 (jiē - menjemput)", "吃 (chī)", "喝 (hē)", "睡 (shuì)"],
        answer: 0,
        explanation: "Ke stasiun kereta menjemput teman."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [综合辨析] Manakah kalimat yang menyatakan bahwa tindakan telah selesai secara sah?",
        options: ["他去北京了。", "他去北京呢。", "他去北京吗。", "他去北京吧。"],
        answer: 0,
        explanation: "他去北京了 menyatakan tindakan kepergian telah terjadi."
      }
    ]
  ),

  // ================= BAB 15 =================
  createQuestionsForChapter(
    15,
    "Bab 15: 我是坐飞机来的 (I Came by Air / Penekanan 是...的)",
    "Tingkat Lanjut (Struktur Penekanan '是...的', Moda Transportasi 飞机/出租车, '很高兴认识您')",
    ["年", "出", "飞"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "很高兴认识您，李小姐！(Hěn gāoxìng rènshi nín, Lǐ xiǎojiě!)",
        question: "1. [听力] Dengarkan audio: Ungkapan ini diucapkan saat...",
        options: ["Sangat senang berkenalan dengan Anda (perkenalan formal)", "Berpamitan pulang", "Meminta maaf karena terlambat", "Mengucapkan selamat ulang tahun"],
        answer: 0,
        explanation: "很高兴认识您 = Senang sekali berkenalan dengan Anda."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我们是2011年9月认识的。(Wǒmen shì èr-líng-yī-yī nián jiǔ yuè rènshi de.)",
        question: "2. [听力] Kapan mereka saling mengenal?",
        options: ["Bulan September tahun 2011", "Bulan September tahun 2021", "Bulan Oktober tahun 2011", "Tahun 2015"],
        answer: 0,
        explanation: "2011年9月 = September 2011."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我们是在学校认识的，她是我大学同学。(Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.)",
        question: "3. [听力] Di mana dan apa hubungan mereka?",
        options: ["Berkenalan di sekolah, dia adalah teman kuliah saya", "Berkenalan di rumah sakit, dia dokter saya", "Berkenalan di toko, dia kasir", "Berkenalan di bandara"],
        answer: 0,
        explanation: "在学校认识的 + 大学同学."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我们是坐出租车来的。(Wǒmen shì zuò chūzūchē lái de.)",
        question: "4. [听力] Kendaraan apa yang digunakan untuk datang?",
        options: ["Naik taksi (坐出租车)", "Naik pesawat (坐飞机)", "Menyetir mobil sendiri", "Naik bus"],
        answer: 0,
        explanation: "出租车 (chūzūchē) = taksi."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "您是坐飞机来北京的？是的。(Nín shì zuò fēijī lái Běijīng de? Shì de.)",
        question: "5. [听力] Bagaimana cara tamu tersebut datang ke Beijing?",
        options: ["Naik pesawat terbang (坐飞机)", "Naik kereta cepat", "Naik mobil", "Naik kapal laut"],
        answer: 0,
        explanation: "坐飞机 (zuò fēijī) = naik pesawat terbang."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Kata '飞机' (fēijī) secara harfiah tersusun dari kata 'terbang' (飞) dan 'mesin' (机), artinya...",
        options: ["Pesawat terbang", "Kereta api", "Mobil taksi", "Helikopter"],
        answer: 0,
        explanation: "飞机 = pesawat terbang."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'menengah',
        question: "7. [语法] Struktur penekanan '是...的' (shì...de) digunakan ketika...",
        options: [
          "Suatu kejadian sudah pasti terjadi di masa lalu, dan kita ingin menekankan waktu, tempat, atau cara terjadinya",
          "Kita belum tahu apakah kejadian itu terjadi",
          "Menyatakan masa depan",
          "Meminta izin"
        ],
        answer: 0,
        explanation: "Struktur 是...的 menekankan rincian waktu, tempat, atau cara kejadian lampau."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Pada kalimat afirmatif '我是坐飞机来的', kata '是' boleh...",
        options: ["Dihilangkan dalam ragam lisan (我坐飞机来的)", "Diganti dengan 了", "Dipindah ke paling belakang", "Ditulis dua kali"],
        answer: 0,
        explanation: "Kata 是 boleh dihilangkan pada kalimat positif, namun 的 harus tetap ada."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Bentuk ingkar dari '我是坐出租车来的' adalah...",
        options: [
          "我不是坐出租车来的 (kata 不是 TIDAK boleh dihilangkan)",
          "我没是坐出租车来的",
          "我不坐出租车来的",
          "我坐出租车不来的"
        ],
        answer: 0,
        explanation: "Bentuk ingkarnya adalah '不是...的'."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 认识您，我______很高兴！",
        options: ["也 (yě)", "不 (bù)", "没 (méi)", "都 (dōu)"],
        answer: 0,
        explanation: "我也很高兴 = saya juga sangat senang."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 李先生是和朋友______开车来的。",
        options: ["一起 (yìqǐ)", "高兴 (gāoxìng)", "饭店 (fàndiàn)", "飞机 (fēijī)"],
        answer: 0,
        explanation: "一起 = bersama-sama."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 是 ② 坐飞机 ③ 我 ④ 来的",
        options: ["③①②④ (我是坐飞机来的。)", "①③②④ (是我坐飞机来的。)", "③②①④ (我坐飞机是来的。)", "②④③① (坐飞机来的我是。)"],
        answer: 0,
        explanation: "Pola: S (我) + 是 + Cara (坐飞机) + 来的."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 认识的 ② 你们 ③ 在哪儿 ④ 是",
        options: ["②④③① (你们是在哪儿认识的？)", "④②③① (是你们在哪儿认识的？)", "③②④① (在哪儿你们是认识的？)", "②③④① (你们在哪儿是认识的？)"],
        answer: 0,
        explanation: "Pola tanya penekanan tempat: 你们是在哪儿认识的？"
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Radikal '艹' (cǎozìtóu - rumput) terdapat dalam karakter...",
        options: ["茶 (teh), 菜 (sayuran)", "家 (rumah)", "学 (belajar)", "看 (melihat)"],
        answer: 0,
        explanation: "Radikal 艹 berhubungan dengan dedaunan/tumbuhan."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Radikal '宀' (bǎogàitóu - atap rumah) terdapat dalam karakter...",
        options: ["家 (keluarga/rumah), 安 (damai/tenang)", "水", "人", "口"],
        answer: 0,
        explanation: "Radikal 宀 melambangkan naungan/atap rumah."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Kata '饭店' (fàndiàn) dalam bahasa Mandarin dapat berarti...",
        options: ["Restoran atau Hotel besar", "Toko pakaian", "Bioskop", "Rumah sakit"],
        answer: 0,
        explanation: "饭店 merujuk pada restoran maupun hotel."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '我是昨天下午三点坐出租车来饭店的，张先生也是昨天来的。' Bagaimanakah cara pembicara datang ke restoran?",
        options: ["Naik taksi (坐出租车)", "Naik pesawat", "Jalan kaki", "Naik bus kota"],
        answer: 0,
        explanation: "Teks menekankan: '坐出租车来饭店的'."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "听张先生说，您是坐飞机来的？(Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái de?)",
        question: "18. [听力] Dari siapakah pembicara mendengar informasi tersebut?",
        options: ["Dari Tuan Zhang (听张先生说)", "Dari Nona Li", "Dari sopir taksi", "Dari dokter"],
        answer: 0,
        explanation: "听张先生说 = mendengar dari penuturan Tuan Zhang."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] 我们是2020年9月在大学______的。",
        options: ["认识 (rènshi)", "买 (mǎi)", "喝 (hē)", "读 (dú)"],
        answer: 0,
        explanation: "Saling mengenal di kampus: 认识."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [综合复习 HSK 1] Selamat telah menyelesaikan 15 Bab HSK 1! Berapa jumlah total kosakata standar kurikulum HSK Level 1?",
        options: ["150 Kosakata", "300 Kosakata", "600 Kosakata", "1200 Kosakata"],
        answer: 0,
        explanation: "Kurikulum HSK 1 Standar Hanban terdiri dari 150 kosakata inti."
      }
    ]
  )
];
