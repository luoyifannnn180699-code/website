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

export const COMPREHENSIVE_WORKBOOK_PART3: WorkbookExercise[] = [
  // ================= BAB 9 =================
  createQuestionsForChapter(
    9,
    "Bab 9: 你儿子在哪儿工作 (Where Does Your Son Work / Lokasi & Profesi)",
    "Tingkat Menengah-Lanjut (Kata Kerja & Preposisi '在', Posisi 下面, Kata Tanya '在哪儿', Profesi 医生/工作)",
    ["在", "子", "工"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "小猫在哪儿？(Xiǎomāo zài nǎr?)",
        question: "1. [听力] Dengarkan audio: Hewan apakah yang ditanyakan keberadaannya?",
        options: ["Kucing kecil (小猫)", "Anjing kecil (小狗)", "Burung", "Panda"],
        answer: 0,
        explanation: "小猫 (xiǎomāo) = kucing kecil."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "小狗在椅子下面。(Xiǎogǒu zài yǐzi xiàmiàn.)",
        question: "2. [听力] Di manakah posisi anjing kecil berada?",
        options: ["Di bawah kursi (椅子下面)", "Di atas meja", "Di dalam rumah", "Di sekolah"],
        answer: 0,
        explanation: "椅子下面 = di bawah kursi."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "你在哪儿工作？(Nǐ zài nǎr gōngzuò?)",
        question: "3. [听力] Pertanyaan ini menanyakan...",
        options: ["Di mana kamu bekerja", "Kapan kamu berangkat", "Berapa gajimu", "Siapa bosmu"],
        answer: 0,
        explanation: "工作 (gōngzuò) = bekerja."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我儿子在医院工作，他是医生。(Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.)",
        question: "4. [听力] Siapakah dan di manakah putra pembicara bekerja?",
        options: ["Sebagai dokter di rumah sakit", "Sebagai guru di sekolah", "Sebagai kasir di toko", "Sebagai sopir taksi"],
        answer: 0,
        explanation: "医院 (rumah sakit) + 医生 (dokter)."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "你爸爸在家吗？不在家。(Nǐ bàba zài jiā ma? Bú zài jiā.)",
        question: "5. [听力] Apakah ayah pembicara ada di rumah?",
        options: ["Tidak ada di rumah (不在家)", "Ada di rumah", "Sedang tidur", "Baru saja sampai"],
        answer: 0,
        explanation: "不在家 = tidak berada di rumah."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Kata '在' (zài) memiliki fungsi sebagai...",
        options: ["Kata kerja keberadaan ('berada di') dan kata depan ('di')", "Kata sifat", "Kata seru", "Kata bilangan"],
        answer: 0,
        explanation: "在 berfungsi menyatakan tempat keberadaan."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Pasangan kata '儿子' (érzi - anak laki-laki) adalah...",
        options: ["女儿 (nǚ'ér - anak perempuan)", "爸爸 (ayah)", "妈妈 (ibu)", "老师 (guru)"],
        answer: 0,
        explanation: "儿子 (putra) vs 女儿 (putri)."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Pola preposisi lokasi dalam tindakan adalah...",
        options: [
          "Subjek + 在 + Tempat + Kata Kerja (contoh: 我在学校工作)",
          "Subjek + Kata Kerja + Tempat + 在",
          "Tempat + Subjek + Kata Kerja + 在",
          "在 + Subjek + Kata Kerja + Tempat"
        ],
        answer: 0,
        explanation: "Pola baku: S + 在 + Tempat + V + O."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Kata tanya '哪儿' (nǎr) digunakan untuk menanyakan...",
        options: ["Lokasi / Tempat", "Waktu", "Orang", "Kuantitas"],
        answer: 0,
        explanation: "哪儿 = di mana / ke mana."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 我爸爸是______，他在医院工作。",
        options: ["医生 (yīshēng)", "小猫 (xiǎomāo)", "椅子 (yǐzi)", "水 (shuǐ)"],
        answer: 0,
        explanation: "Bekerja di rumah sakit: 医生 (dokter)."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 小狗在椅子______，它正在睡觉。",
        options: ["下面 (xiàmiàn)", "哪儿 (nǎr)", "多少 (duōshao)", "什么 (shénme)"],
        answer: 0,
        explanation: "椅子下面 = di bawah kursi."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 工作 ② 在 ③ 我 ④ 学校",
        options: ["③②④① (我在学校工作。)", "②④③① (在学校我工作。)", "③①②④ (我工作在学校。)", "④②③① (学校在我工作。)"],
        answer: 0,
        explanation: "Pola: S (我) + 在 + Tempat (学校) + V (工作)."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 小猫 ② 哪儿 ③ 在",
        options: ["①③② (小猫在哪儿？)", "②③① (哪儿在小猫？)", "③②① (在哪儿小猫？)", "①②③ (小猫哪儿在？)"],
        answer: 0,
        explanation: "Urutan alami: 小猫在哪儿？"
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Radikal '辶' (zǒuzhīpáng - jalan) berhubungan dengan...",
        options: ["Berjalan, pergerakan kaki, dan jarak (contoh: 这, 边, 送)", "Mulut", "Mata", "Tangan"],
        answer: 0,
        explanation: "Radikal 辶 berhubungan dengan perpindahan/jalan."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Karakter '工' (gōng) melambangkan perkakas kerja pengrajin dan memiliki arti...",
        options: ["Pekerjaan / Tenaga kerja (contoh: 工作, 工人)", "Rumah sakit", "Buku", "Waktu"],
        answer: 0,
        explanation: "工 berkaitan dengan kerja/teknik."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Antonim (lawan kata) dari '前面' (depan) adalah...",
        options: ["后面 (hòumiàn - belakang)", "上面 (atas)", "下面 (bawah)", "里面 (dalam)"],
        answer: 0,
        explanation: "前面 (depan) vs 后面 (belakang)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '王方的爸爸是医生，他在大医院工作。王方是学生。' Siapa yang bekerja di rumah sakit besar?",
        options: ["Ayah Wang Fang (王方的爸爸)", "Wang Fang sendiri", "Teman Wang Fang", "Ibu Wang Fang"],
        answer: 0,
        explanation: "Ayahnya adalah dokter yang bekerja di rumah sakit."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "小猫在桌子上，小狗在桌子下面。(Xiǎomāo zài zhuōzi shang, xiǎogǒu zài zhuōzi xiàmiàn.)",
        question: "18. [听力] Di mana posisi kucing dan anjing berturut-turut?",
        options: ["Kucing di atas meja, anjing di bawah meja", "Keduanya di atas meja", "Keduanya di bawah meja", "Kucing di bawah kursi"],
        answer: 0,
        explanation: "桌子上 (atas meja) dan 桌子下面 (bawah meja)."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 你哥哥在家吗？ B: 他______在家，他在学校。",
        options: ["不 (bù)", "没 (méi)", "无 (wú)", "别 (bié)"],
        answer: 0,
        explanation: "Negasi untuk 在 adalah 不在 (bú zài)."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [句型辨析] Manakah kalimat yang benar secara gramatikal?",
        options: ["我朋友在医院工作。", "我在医院朋友工作。", "医院在工作我朋友。", "工作在医院我朋友。"],
        answer: 0,
        explanation: "Subjek (我朋友) + 在医院 + 工作."
      }
    ]
  ),

  // ================= BAB 10 =================
  createQuestionsForChapter(
    10,
    "Bab 10: 我能坐这儿吗 (Can I Sit Here / Izin & Eksistensi 有)",
    "Tingkat Menengah-Tinggi (Kalimat Eksistensi '有' vs '没有', Kata Bantu '能', '请坐', Radikal 宀 & 口)",
    ["上", "下", "本", "末"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "桌子上有什么？(Zhuōzi shang yǒu shénme?)",
        question: "1. [听力] Dengarkan audio: Hal apa yang ditanyakan?",
        options: ["Ada apa di atas meja", "Berapa harga meja", "Siapa pemilik meja", "Di mana meja diletakkan"],
        answer: 0,
        explanation: "桌子上有什么 menanyakan benda di atas meja."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "桌子上有一个电脑和一本书。(Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.)",
        question: "2. [听力] Benda apa sajakah yang ada di atas meja?",
        options: ["Sebuah komputer dan sebuah buku", "Sebuah cangkir dan teh", "Sebuah tas dan pena", "Dua buah apel"],
        answer: 0,
        explanation: "电脑 (komputer) dan 书 (buku)."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "这儿有人吗？没有。(Zhèr yǒu rén ma? Méiyǒu.)",
        question: "3. [听力] Apakah ada orang di tempat duduk tersebut?",
        options: ["Tidak ada (没有)", "Ada orang", "Tempat sudah dipesan", "Banyak orang"],
        answer: 0,
        explanation: "没有 = tidak ada."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我能坐这儿吗？请坐。(Wǒ néng zuò zhèr ma? Qǐng zuò.)",
        question: "4. [听力] Apakah pembicara diizinkan untuk duduk?",
        options: ["Diizinkan dengan sopan ('Silakan duduk')", "Dilarang duduk", "Diminta berdiri", "Harus bayar dulu"],
        answer: 0,
        explanation: "请坐 (qǐng zuò) = silakan duduk."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "前面那个人叫王方，在医院工作；后面那个人叫谢朋，在商店工作。",
        question: "5. [听力] Di manakah Xie Peng (谢朋) bekerja?",
        options: ["Di toko (商店)", "Di rumah sakit (医院)", "Di sekolah (学校)", "Di hotel (饭店)"],
        answer: 0,
        explanation: "Xie Peng bekerja di toko (商店)."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Kata '电脑' (diànnǎo) secara harfiah tersusun dari kata 'listrik' (电) dan 'otak' (脑), artinya...",
        options: ["Komputer / Laptop", "Televisi", "Telepon", "Kulkas"],
        answer: 0,
        explanation: "电脑 = otak elektronik / komputer."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'dasar',
        question: "7. [语法] Kata bantu bilangan (measure word) untuk buku (书) adalah...",
        options: ["本 (běn)", "个 (ge)", "口 (kǒu)", "块 (kuài)"],
        answer: 0,
        explanation: "Buku memakai kata ukur 本 (běn: 一本书)."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Bentuk ingkar dari kalimat keberadaan '有' adalah...",
        options: ["没有 (méiyǒu)", "不有 (bù yǒu)", "未有 (wèi yǒu)", "非有 (fēi yǒu)"],
        answer: 0,
        explanation: "Ingkar dari 有 selalu 没有 (tidak boleh 不有)."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Kata kerja bantu '能' (néng) digunakan untuk...",
        options: ["Meminta izin atau kemungkinan situasional ('boleh / bisa')", "Menyatakan masa lampau", "Menghitung uang", "Menyapa orang"],
        answer: 0,
        explanation: "能 menyatakan izin atau kapasitas situasional."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] 桌子上有一个电脑______一本书。",
        options: ["和 (hé)", "在 (zài)", "去 (qù)", "是 (shì)"],
        answer: 0,
        explanation: "和 (hé) menghubungkan dua kata benda: komputer DAN buku."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] A: 我能坐这儿吗？ B: ______坐。",
        options: ["请 (qǐng)", "很 (hěn)", "想 (xiǎng)", "会 (huì)"],
        answer: 0,
        explanation: "请坐 = silakan duduk."
      },
      {
        id: 12,
        type: 'order',
        difficulty: 'menengah',
        question: "12. [连词成句] Susunlah: ① 这儿 ② 能 ③ 坐 ④ 我 ⑤ 吗",
        options: ["④②③①⑤ (我能坐这儿吗？)", "①④②③⑤ (这儿我能坐吗？)", "⑤④②③① (吗我能坐这儿？)", "④③①②⑤ (我坐这儿能吗？)"],
        answer: 0,
        explanation: "Pola: S (我) + 能 + V (坐) + Tempat (这儿) + 吗？"
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 有 ② 桌子上 ③ 一个电脑",
        options: ["②①③ (桌子上有一个电脑。)", "③①② (一个电脑有桌子上。)", "①②③ (有桌子上一个电脑。)", "②③① (桌子上一个电脑有。)"],
        answer: 0,
        explanation: "Pola kalimat eksistensi: Tempat (桌子上) + 有 + Benda."
      },
      {
        id: 14,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "14. [汉字] Pasangan antonim arah vertikal adalah...",
        options: ["上 (atas) vs 下 (bawah)", "左 (kiri) vs 右 (kanan)", "大 vs 小", "多 vs 少"],
        answer: 0,
        explanation: "上 (shàng - atas) kebalikan dari 下 (xià - bawah)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "15. [汉字] Karakter '本' (běn) pada awalnya melambangkan...",
        options: ["Akar/pangkal sebuah pohon (bagian bawah 木 diberi garis penanda)", "Daun yang jatuh", "Burung di atas ranting", "Batu karang"],
        answer: 0,
        explanation: "本 melambangkan pangkal/akar pohon (fondasi/buku)."
      },
      {
        id: 16,
        type: 'reading',
        difficulty: 'mahir',
        question: "16. [阅读] Kata '前面' (qiánmiàn) berarti...",
        options: ["Bagian depan", "Bagian belakang", "Bagian samping", "Bagian tengah"],
        answer: 0,
        explanation: "前面 = depan."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '图书馆里有很多书，这儿没有电脑。' Apakah ada komputer di perpustakaan tersebut?",
        options: ["Tidak ada komputer (没有电脑)", "Ada banyak komputer", "Ada satu komputer", "Komputer sedang diperbaiki"],
        answer: 0,
        explanation: "Teks menyatakan: '这儿没有电脑'."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "杯子在桌子里。(Bēizi zài zhuōzi lǐ.)",
        question: "18. [听力] Di manakah cangkir berada?",
        options: ["Di dalam meja / laci meja (桌子里)", "Di atas kursi", "Di lantai", "Di tas"],
        answer: 0,
        explanation: "桌子里 = di dalam meja/laci."
      },
      {
        id: 19,
        type: 'grammar',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 房间里有人吗？ B: ______人，大家都在外面。",
        options: ["没有 (méiyǒu)", "不 (bù)", "没在 (méi zài)", "不能 (bù néng)"],
        answer: 0,
        explanation: "没有人 = tidak ada orang."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [综合辨析] Manakah kalimat yang menyatakan permohonan izin dengan santun?",
        options: ["我能看你的书吗？", "你看我的书吧。", "我的书在哪里？", "我不想看书。"],
        answer: 0,
        explanation: "我能...吗 menyatakan permohonan izin santun."
      }
    ]
  )
];
