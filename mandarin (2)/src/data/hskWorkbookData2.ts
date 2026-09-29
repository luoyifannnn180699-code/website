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

export const COMPREHENSIVE_WORKBOOK_PART2: WorkbookExercise[] = [
  // ================= BAB 6 =================
  createQuestionsForChapter(
    6,
    "Bab 6: 我会说汉语 (I Can Speak Chinese / Kemampuan & Makanan)",
    "Tingkat Menengah (Modal '会', Adjektiva Predikatif '很', '怎么', Menulis Hanzi 写汉字)",
    ["东", "我", "西"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你会说汉语吗？(Nǐ huì shuō Hànyǔ ma?)",
        question: "1. [听力] Dengarkan audio: Kemampuan apa yang ditanyakan?",
        options: ["Bisa berbicara bahasa Mandarin", "Bisa menulis karakter", "Bisa memasak", "Bisa berenang"],
        answer: 0,
        explanation: "说汉语 = berbicara bahasa Mandarin."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我会说汉语。(Wǒ huì shuō Hànyǔ.)",
        question: "2. [听力] Apakah pembicara bisa berbicara bahasa Mandarin?",
        options: ["Bisa (我会说)", "Tidak bisa", "Belum tahu", "Sedikit saja"],
        answer: 0,
        explanation: "我会说 = saya bisa bicara."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "中国菜好吃吗？(Zhōngguó cài hǎochī ma?)",
        question: "3. [听力] Hal apa yang ditanyakan mengenai masakan Cina?",
        options: ["Apakah enak rasanya (好吃吗)", "Berapa harganya", "Siapa yang memasak", "Di mana belinya"],
        answer: 0,
        explanation: "好吃 (hǎochī) = lezat / enak dimakan."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "中国菜很好吃。(Zhōngguó cài hěn hǎochī.)",
        question: "4. [听力] Bagaimana rasa masakan Cina menurut pembicara?",
        options: ["Sangat lezat (很好吃)", "Kurang enak", "Terlalu asin", "Biasa saja"],
        answer: 0,
        explanation: "很好吃 = sangat enak."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "你会做中国菜吗？我不会做。(Nǐ huì zuò Zhōngguó cài ma? Wǒ bú huì zuò.)",
        question: "5. [听力] Apakah pembicara bisa memasak masakan Cina?",
        options: ["Tidak bisa memasak (不会做)", "Bisa memasak", "Sangat ahli", "Sering memasak"],
        answer: 0,
        explanation: "我不会做 = saya tidak bisa membuat/memasak."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "这个字怎么写？(Zhège zì zěnme xiě?)",
        question: "6. [听力] Apa yang ditanyakan pembicara?",
        options: ["Bagaimana cara menulis karakter ini", "Bagaimana cara membaca", "Berapa goresan karakter ini", "Siapa yang membuat"],
        answer: 0,
        explanation: "怎么写 = bagaimana cara menulisnya."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Kata kerja bantu '会' (huì) menandakan kemampuan yang...",
        options: ["Diperoleh dari belajar atau berlatih", "Dimiliki sejak lahir tanpa belajar", "Kemampuan fisik semata", "Kemampuan magis"],
        answer: 0,
        explanation: "会 menunjukkan kemampuan yang dipelajari."
      },
      {
        id: 8,
        type: 'reading',
        difficulty: 'dasar',
        question: "8. [阅读] Bentuk negatif dari '我会写汉字' adalah...",
        options: ["我不会写汉字", "我没会写汉字", "我不写会汉字", "我无写汉字"],
        answer: 0,
        explanation: "Negasi dari 会 adalah 不会 (bú huì)."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Pada kalimat adjektival '中国菜很好吃', fungsi '很' (hěn) adalah...",
        options: ["Sebagai penyeimbang predikat kata sifat", "Sebagai kata benda", "Sebagai kata tanya", "Sebagai penunjuk waktu"],
        answer: 0,
        explanation: "Predikat kata sifat dalam bahasa Mandarin lazimnya didampingi 很."
      },
      {
        id: 10,
        type: 'grammar',
        difficulty: 'menengah',
        question: "10. [语法] Pola '怎么 + Kata Kerja' digunakan untuk menanyakan...",
        options: ["Cara atau metode melakukan tindakan", "Waktu terjadinya aksi", "Lokasi tempat", "Harga benda"],
        answer: 0,
        explanation: "怎么 + V = bagaimana cara melakukan V."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 对不起，这个字我会读，不______写。",
        options: ["会 (huì)", "在 (zài)", "有 (yǒu)", "去 (qù)"],
        answer: 0,
        explanation: "不会写 = tidak bisa menulis."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [选词填空] 我妈妈做菜______好吃，我们都喜欢吃。",
        options: ["很 (hěn)", "吗 (ma)", "谁 (shéi)", "呢 (ne)"],
        answer: 0,
        explanation: "很好吃 = sangat enak."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 写 ② 怎么 ③ 字 ④ 这个",
        options: ["④③②① (这个字怎么写？)", "②①④③ (怎么写这个字？)", "③④②① (字这个怎么写？)", "④②①③ (这个怎么写字？)"],
        answer: 0,
        explanation: "Urutan alami: 这个字怎么写？"
      },
      {
        id: 14,
        type: 'order',
        difficulty: 'menengah',
        question: "14. [连词成句] Susunlah: ① 汉字 ② 会 ③ 我 ④ 写",
        options: ["③②④① (我会写汉字。)", "①③②④ (汉字我会写。)", "③④②① (我写会汉字。)", "②③④① (会我写汉字。)"],
        answer: 0,
        explanation: "Pola: S (我) + 会 + V (写) + O (汉字)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "15. [汉字] Karakter '东' (dōng) melambangkan arah mata angin...",
        options: ["Timur", "Barat", "Selatan", "Utara"],
        answer: 0,
        explanation: "东 (dōng) berarti timur."
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "16. [汉字] Karakter '西' (xī) berarti arah...",
        options: ["Barat", "Timur", "Atas", "Bawah"],
        answer: 0,
        explanation: "西 (xī) berarti barat."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读] Kata '东西' (dōngxi) bila suku kata keduanya dibaca nada netral memiliki arti...",
        options: ["Barang / Benda", "Arah timur dan barat", "Makanan lezat", "Alat tulis"],
        answer: 0,
        explanation: "东 (timur) + 西 (barat) dibaca dōngxi bermakna 'barang/benda'."
      },
      {
        id: 18,
        type: 'reading',
        difficulty: 'mahir',
        question: "18. [选词填空] A: 你妈妈会说英语吗？ B: ______，她只会说汉语。",
        options: ["不会 (Bú huì)", "会 (Huì)", "是 (Shì)", "不客气 (Bú kèqi)"],
        answer: 0,
        explanation: "Karena hanya bisa bicara Mandarin, maka tidak bisa bahasa Inggris: 不会."
      },
      {
        id: 19,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "这个汉字怎么读？(Zhège Hànzì zěnme dú?)",
        question: "19. [听力] Kata kerja apakah yang ditanyakan cara melakukannya?",
        options: ["Membaca (读)", "Menulis (写)", "Mendengar (听)", "Berbicara (说)"],
        answer: 0,
        explanation: "读 (dú) = membaca."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [综合辨析] Di antara kalimat berikut, manakah yang menyatakan kemampuan karena telah belajar?",
        options: ["我会做中国菜。", "我想吃中国菜。", "中国菜很好吃。", "这是中国菜。"],
        answer: 0,
        explanation: "Kalimat '我会做中国菜' menyatakan kemampuan belajar."
      }
    ]
  ),

  // ================= BAB 7 =================
  createQuestionsForChapter(
    7,
    "Bab 7: 今天几号 (What's the Date Today / Tanggal & Kalender)",
    "Tingkat Menengah (Urutan Kalender Tahun-Bulan-Tanggal-Hari, Serial Verb 去+Tempat+V, Radikal 氵 & 讠)",
    ["四", "五", "书"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "今天几号？(Jīntiān jǐ hào?)",
        question: "1. [听力] Pertanyaan ini menanyakan...",
        options: ["Hari ini tanggal berapa", "Hari ini hari apa", "Berapa harga buku", "Jam berapa sekarang"],
        answer: 0,
        explanation: "今天几号 menanyakan tanggal hari ini."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "今天9月1号，星期三。(Jīntiān jiǔ yuè yī hào, xīngqīsān.)",
        question: "2. [听力] Tanggal dan hari berapakah hari ini?",
        options: ["1 September, hari Rabu", "2 September, hari Kamis", "31 Agustus, hari Selasa", "1 Oktober, hari Jumat"],
        answer: 0,
        explanation: "9月1号 星期三 = 1 September, hari Rabu."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "昨天是8月31号。(Zuótiān shì bā yuè sānshíyī hào.)",
        question: "3. [听力] Kapan tanggal 31 Agustus terjadi menurut rekaman?",
        options: ["Kemarin (昨天)", "Hari ini (今天)", "Besok (明天)", "Bulan depan"],
        answer: 0,
        explanation: "昨天 (zuótiān) berarti kemarin."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "明天星期六，你去学校吗？(Míngtiān xīngqīliù, nǐ qù xuéxiào ma?)",
        question: "4. [听力] Hari apakah besok menurut pertanyaan?",
        options: ["Hari Sabtu (星期六)", "Hari Minggu (星期日)", "Hari Jumat (星期五)", "Hari Senin (星期一)"],
        answer: 0,
        explanation: "星期六 = hari Sabtu."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我去学校看书。(Wǒ qù xuéxiào kàn shū.)",
        question: "5. [听力] Untuk tujuan apakah pembicara pergi ke sekolah?",
        options: ["Membaca buku (看书)", "Bermain sepak bola", "Membeli makanan", "Bertemu dokter"],
        answer: 0,
        explanation: "去学校看书 = pergi ke sekolah membaca buku."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Urutan nama hari Senin sampai Sabtu dalam Mandarin memakai pola '星期 + Angka 1-6'. Hari Senin adalah...",
        options: ["星期一 (xīngqīyī)", "星期二 (xīngqī'èr)", "星期日 (xīngqīrì)", "星期六 (xīngqīliù)"],
        answer: 0,
        explanation: "Senin = 星期一."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Hari Minggu secara resmi disebut...",
        options: ["星期日 (xīngqīrì) atau 星期天 (xīngqītiān)", "星期七 (xīngqīqī)", "星期八 (xīngqībā)", "星期九 (xīngqījiǔ)"],
        answer: 0,
        explanation: "Hari Minggu TIDAK memakai angka 7, melainkan 星期日 atau 星期天."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Prinsip urutan tanggal dalam bahasa Mandarin adalah...",
        options: [
          "Dari unit terbesar ke terkecil: Tahun (年) + Bulan (月) + Tanggal (号) + Hari (星期)",
          "Dari unit terkecil: Tanggal dulu baru bulan dan tahun",
          "Acak tanpa urutan baku",
          "Hari dulu baru bulan dan tanggal"
        ],
        answer: 0,
        explanation: "Mandarin selalu berprinsip besar ke kecil: 年 -> 月 -> 日/号 -> 星期."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Struktur kalimat bersambung (Serial Verb) '去学校看书' tersusun dari...",
        options: [
          "去 (pergi) + Tempat (学校) + Tindakan/Tujuan (看书)",
          "Kata sifat + kata benda",
          "Kalimat tanya + partikel",
          "Dua subjek berbeda"
        ],
        answer: 0,
        explanation: "去 + Tempat + V2 = pergi ke suatu tempat untuk melakukan sesuatu."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 明天是9月2号，星期______。 (Setelah hari Rabu 星期三)",
        options: ["四 (sì)", "五 (wǔ)", "六 (liù)", "一 (yī)"],
        answer: 0,
        explanation: "Setelah hari Rabu (星期三) adalah hari Kamis (星期四)."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] A: 你去哪儿？ B: 我去______看书。",
        options: ["学校 (xuéxiào)", "苹果 (píngguǒ)", "昨天 (zuótiān)", "多少 (duōshao)"],
        answer: 0,
        explanation: "Tempat membaca buku: 学校 (sekolah)."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 号 ② 今天 ③ 9月 ④ 1",
        options: ["②③④① (今天9月1号。)", "③④①② (9月1号今天。)", "④①③② (1号9月今天。)", "②①④③ (今天号1 9月。)"],
        answer: 0,
        explanation: "Urutan tepat: 今天9月1号。"
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 去 ② 做什么 ③ 你 ④ 学校",
        options: ["③①④② (你去学校做什么？)", "①④③② (去学校你做什么？)", "③②①④ (你做什么去学校？)", "④①③② (学校去你做什么？)"],
        answer: 0,
        explanation: "Urutan alami: 你去学校做什么？(Kamu ke sekolah mau melakukan apa?)."
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Radikal '氵' (sāndiǎnshuǐ - tiga titik air) berhubungan dengan...",
        options: ["Air dan cairan", "Api dan panas", "Tangan dan memukul", "Bahasa dan bicara"],
        answer: 0,
        explanation: "Radikal 氵 melambangkan air (contoh: 汉, 没, 海, 河)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Radikal '讠' (yánzìpáng) berhubungan dengan...",
        options: ["Bahasa, ucapan, atau perkataan", "Hewan berkaki empat", "Makanan", "Pakaian"],
        answer: 0,
        explanation: "Radikal 讠 berhubungan dengan ucapan/bahasa (contoh: 语, 说, 话, 谁)."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Karakter '书' (shū) berarti...",
        options: ["Buku", "Meja", "Pena", "Tas"],
        answer: 0,
        explanation: "书 (shū) = buku."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '今天是星期五，明天是星期六，后天是星期天。' Hari apakah lusa (后天)?",
        options: ["Minggu (星期天)", "Sabtu (星期六)", "Senin (星期一)", "Kamis (星期四)"],
        answer: 0,
        explanation: "后天 (lusa) adalah hari Minggu."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "请问，今天几号？(Qǐngwèn, jīntiān jǐ hào?)",
        question: "18. [听力] Kata '请问' (qǐngwèn) di awal kalimat berfungsi sebagai ungkapan santun yang berarti...",
        options: ["Permisi, numpang tanya...", "Tolong jawab sekarang", "Jangan bicara", "Terima kasih banyak"],
        answer: 0,
        explanation: "请问 adalah ungkapan santun untuk bertanya."
      },
      {
        id: 19,
        type: 'reading',
        difficulty: 'mahir',
        question: "19. [选词填空] 明天是我的生日，明天是______月八号。",
        options: ["十 (shí)", "人 (rén)", "书 (shū)", "去 (qù)"],
        answer: 0,
        explanation: "Bulan harus diisi angka: 十月 (Oktober)."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [语法] Manakah susunan kalimat waktu yang paling tepat?",
        options: [
          "我明天去学校看书。",
          "我去学校明天看书。",
          "我看书去学校明天。",
          "去学校我看书明天。"
        ],
        answer: 0,
        explanation: "Keterangan waktu (明天) harus diletakkan sebelum kata kerja utama."
      }
    ]
  ),

  // ================= BAB 8 =================
  createQuestionsForChapter(
    8,
    "Bab 8: 我想喝茶 (I'd Like Some Tea / Makanan & Berbelanja)",
    "Tingkat Menengah-Tinggi (Keinginan '想', Kata Ukur '个', Harga '多少钱', Satuan '块', Radikal 钅 & 口)",
    ["少", "个"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你想喝什么？(Nǐ xiǎng hē shénme?)",
        question: "1. [听力] Dengarkan audio: Hal apa yang ditanyakan?",
        options: ["Kamu ingin minum apa", "Kamu ingin makan apa", "Kamu mau pergi ke mana", "Berapa uangmu"],
        answer: 0,
        explanation: "喝 (hē) = minum."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我想喝茶。(Wǒ xiǎng hē chá.)",
        question: "2. [听力] Minuman apa yang diinginkan oleh pembicara?",
        options: ["Teh (茶)", "Kopi (咖啡)", "Air (水)", "Susu (牛奶)"],
        answer: 0,
        explanation: "茶 (chá) = teh."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我想吃米饭。(Wǒ xiǎng chī mǐfàn.)",
        question: "3. [听力] Makanan apa yang ingin dimakan pembicara?",
        options: ["Nasi putih (米饭)", "Mie", "Roti", "Bebek panggang"],
        answer: 0,
        explanation: "米饭 (mǐfàn) = nasi putih."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "下午我想去商店。(Xiàwǔ wǒ xiǎng qù shāngdiàn.)",
        question: "4. [听力] Kapan dan ke mana pembicara ingin pergi?",
        options: ["Sore hari ke toko (商店)", "Pagi hari ke sekolah", "Malam hari ke bioskop", "Siang hari ke rumah sakit"],
        answer: 0,
        explanation: "下午 (sore) + 去商店 (pergi ke toko)."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我想买一个杯子。(Wǒ xiǎng mǎi yí ge bēizi.)",
        question: "5. [听力] Benda apakah yang ingin dibeli?",
        options: ["Cangkir / Gelas (杯子)", "Buku", "Meja", "Pakaian"],
        answer: 0,
        explanation: "杯子 (bēizi) = cangkir / gelas."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "这个杯子多少钱？—— 28块。(Zhège bēizi duōshao qián? Èrshíbā kuài.)",
        question: "6. [听力] Berapa harga cangkir tersebut?",
        options: ["28 yuan", "18 yuan", "38 yuan", "8 yuan"],
        answer: 0,
        explanation: "28块 = 28 yuan."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Kata '想' (xiǎng) di depan kata kerja memiliki arti...",
        options: ["Ingin / Berniat / Berharap", "Pasti sudah", "Dilarang", "Selesai"],
        answer: 0,
        explanation: "想 menyatakan niat atau keinginan."
      },
      {
        id: 8,
        type: 'reading',
        difficulty: 'dasar',
        question: "8. [阅读] Kata tanya untuk menanyakan harga barang adalah...",
        options: ["多少钱？(Duōshao qián?)", "什么名字？", "几岁了？", "在哪儿？"],
        answer: 0,
        explanation: "多少钱 = berapa harganya."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Satuan mata uang lisan yang paling umum di Tiongkok adalah...",
        options: ["块 (kuài) / 元 (yuán)", "分 (fēn)", "点 (diǎn)", "口 (kǒu)"],
        answer: 0,
        explanation: "Dalam ragam lisan, uang yuan disebut 块 (kuài)."
      },
      {
        id: 10,
        type: 'grammar',
        difficulty: 'menengah',
        question: "10. [语法] Kata ukur umum '个' (ge) diletakkan di antara...",
        options: ["Angka bilangan dan Kata Benda (contoh: 一个杯子)", "Subjek dan kata kerja", "Di akhir kalimat", "Di depan kata tanya"],
        answer: 0,
        explanation: "Pola: Bilangan + Kata Ukur (个) + Benda."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 你好！那个杯子______钱？—— 18块。",
        options: ["多少 (duōshao)", "什么 (shénme)", "谁 (shéi)", "几 (jǐ)"],
        answer: 0,
        explanation: "多少钱 = berapa harga uangnya."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [选词填空] 我想______一个新电脑。",
        options: ["买 (mǎi)", "喝 (hē)", "吃 (chī)", "叫 (jiào)"],
        answer: 0,
        explanation: "买 = membeli."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 喝 ② 我 ③ 茶 ④ 想",
        options: ["②④①③ (我想喝茶。)", "④②①③ (想我喝茶。)", "②①④③ (我喝想茶。)", "①③②④ (喝茶我想。)"],
        answer: 0,
        explanation: "Pola: S (我) + 想 + V (喝) + O (茶)."
      },
      {
        id: 14,
        type: 'order',
        difficulty: 'menengah',
        question: "14. [连词成句] Susunlah: ① 钱 ② 这个 ③ 多少 ④ 杯子",
        options: ["②④③① (这个杯子多少钱？)", "③①②④ (多少钱这个杯子？)", "②③①④ (这个多少钱杯子？)", "④②③① (杯子这个多少钱？)"],
        answer: 0,
        explanation: "Urutan alami: 这个杯子多少钱？"
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "15. [汉字] Radikal '钅' (jīnzìpáng - logam/emas) berhubungan dengan...",
        options: ["Uang, logam, dan perkakas besi (contoh: 钱, 钟)", "Tumbuhan", "Air", "Bicara"],
        answer: 0,
        explanation: "Radikal 钅 berhubungan dengan logam/uang."
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "16. [汉字] Karakter '少' (shǎo) berarti...",
        options: ["Sedikit / Kurang", "Banyak", "Tinggi", "Kecil"],
        answer: 0,
        explanation: "少 (shǎo) berarti sedikit, kebalikan dari 多 (duō - banyak)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读] Perbedaan kata '这' (zhè) dan '那' (nà) adalah...",
        options: ["这 = 'ini' (dekat), 那 = 'itu' (jauh)", "这 = 'itu', 那 = 'ini'", "Keduanya sama persis", "这 untuk orang, 那 untuk benda"],
        answer: 0,
        explanation: "这 = ini (proksimal), 那 = itu (distal)."
      },
      {
        id: 18,
        type: 'reading',
        difficulty: 'mahir',
        question: "18. [选词填空] 昨天下午我去______买了三本书。",
        options: ["书店 (shūdiàn)", "医院 (yīyuàn)", "医生 (yīshēng)", "杯子 (bēizi)"],
        answer: 0,
        explanation: "Beli buku di toko buku (书店) atau toko (商店)."
      },
      {
        id: 19,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "你想吃什么？我想吃中国菜。(Nǐ xiǎng chī shénme? Wǒ xiǎng chī Zhōngguó cài.)",
        question: "19. [听力] Apa yang diinginkan pembicara?",
        options: ["Ingin makan masakan Cina", "Ingin makan buah apel", "Ingin pergi tidur", "Ingin minum teh"],
        answer: 0,
        explanation: "我想吃中国菜 = Saya ingin makan masakan Cina."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [辨析] Manakah kalimat yang bermakna 'Saya tidak ingin pergi ke toko'?",
        options: ["我不想去商店。", "我不去想商店。", "我没想去商店吗。", "商店我不去想。"],
        answer: 0,
        explanation: "Negasi untuk 想 adalah 不想 (bù xiǎng)."
      }
    ]
  )
];
