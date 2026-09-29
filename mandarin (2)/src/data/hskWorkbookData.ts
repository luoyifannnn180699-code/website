import { WorkbookExercise, WorkbookQuestionItem } from '../types';

// Helper to build standardized chapter workbook packages with 20-30 questions per chapter
function createQuestionsForChapter(
  chapterId: number,
  title: string,
  levelDesc: string,
  hanziPractice: string[],
  specificQuestions: WorkbookQuestionItem[]
): WorkbookExercise {
  // Ensure we reach 20-30 questions by combining chapter-specific exercises
  return {
    chapterId,
    title,
    levelDesc,
    questions: specificQuestions,
    hanziPractice
  };
}

export const COMPREHENSIVE_WORKBOOK: WorkbookExercise[] = [
  // ================= BAB 1 =================
  createQuestionsForChapter(
    1,
    "Bab 1: 你好 (Hello / Salam Dasar)",
    "Tingkat Dasar (Pengenalan Salam, Inisial b/p/m/f, 4 Nada, Karakter Dasar 1-10)",
    ["一", "二", "三", "十", "八", "六"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你好！(Nǐ hǎo!)",
        question: "1. [听力 Part I] Dengarkan audio: '你好！'. Manakah arti yang tepat?",
        options: ["Halo / Apa kabar", "Terima kasih", "Sampai jumpa", "Selamat makan"],
        answer: 0,
        explanation: "你好 (Nǐ hǎo) adalah salam dasar yang berarti Halo / Apa kabar."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "您好！(Nín hǎo!)",
        question: "2. [听力 Part I] Dengarkan audio: '您好！'. Kepada siapakah sapaan ini paling tepat diucapkan?",
        options: ["Adik kecil", "Guru atau orang yang dihormati", "Teman sebaya", "Hewan peliharaan"],
        answer: 1,
        explanation: "您 (nín) adalah bentuk sapaan hormat (Anda) untuk guru atau orang tua."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "对不起！(Duìbuqǐ!)",
        question: "3. [听力 Part II] Dengarkan audio: '对不起！'. Ungkapan ini diucapkan saat...",
        options: ["Meminta maaf", "Menyapa pagi hari", "Berterima kasih", "Berpamitan"],
        answer: 0,
        explanation: "对不起 (duìbuqǐ) berarti 'Maaf / Mohon maaf'."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "没关系！(Méi guānxi!)",
        question: "4. [听力 Part II] Dengarkan audio: '没关系！'. Kalimat ini digunakan untuk membalas...",
        options: ["谢谢你", "对不起", "再见", "你是谁"],
        answer: 1,
        explanation: "没关系 (méi guānxi - tidak apa-apa) adalah jawaban standar untuk membalas 对不起."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "咖啡 (kāfēi)",
        question: "5. [听力 Part III] Dengarkan audio: 'kāfēi'. Minuman apakah ini?",
        options: ["Kopi", "Teh", "Susu", "Air putih"],
        answer: 0,
        explanation: "咖啡 (kāfēi) adalah kata serapan yang berarti Kopi."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "烤鸭 (kǎoyā)",
        question: "6. [听力 Part III] Dengarkan audio: 'kǎoyā'. Makanan khas Beijing apakah ini?",
        options: ["Bebek panggang", "Ayam goreng", "Sup jamur", "Nasi goreng"],
        answer: 0,
        explanation: "烤鸭 (kǎoyā) berarti bebek panggang (Beijing Roast Duck)."
      },
      {
        id: 7,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "火锅 (huǒguō)",
        question: "7. [听力 Part III] Dengarkan audio: 'huǒguō'. Makanan apakah ini?",
        options: ["Hotpot / Kuah panas", "Es krim", "Roti tawar", "Mie dingin"],
        answer: 0,
        explanation: "火锅 (huǒguō) secara harfiah adalah kuali api / hotpot."
      },
      {
        id: 8,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "地图 (dìtú)",
        question: "8. [听力 Part IV] Dengarkan audio: 'dìtú'. Benda apakah ini?",
        options: ["Peta", "Buku", "Sepatu", "Jam tangan"],
        answer: 0,
        explanation: "地图 (dìtú) berarti peta."
      },
      {
        id: 9,
        type: 'reading',
        difficulty: 'dasar',
        question: "9. [阅读 Part I] Karakter '好' (hǎo) dalam '你好' memiliki arti...",
        options: ["Baik / Bagus", "Besar", "Kecil", "Banyak"],
        answer: 0,
        explanation: "好 (hǎo) berarti baik atau bagus."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'dasar',
        question: "10. [阅读 Part I] Pasangan jamak dari kata ganti '你' (kamu) adalah...",
        options: ["你们 (nǐmen)", "他们 (tāmen)", "我们 (wǒmen)", "好人 (hǎorén)"],
        answer: 0,
        explanation: "Sufiks 们 (men) mengubah kata ganti tunggal menjadi jamak (你 -> 你们)."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [阅读 Part II] Pasangkan: A: '对不起！' -> B: '______！'",
        options: ["没关系", "你好", "再见", "不客气"],
        answer: 0,
        explanation: "Jawaban sopan untuk 對不起 (Maaf) adalah 没关系 (Tidak apa-apa)."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [阅读 Part II] Karakter angka Mandarin '八' memiliki nilai...",
        options: ["6", "7", "8", "9"],
        answer: 2,
        explanation: "八 (bā) berarti 8."
      },
      {
        id: 13,
        type: 'grammar',
        difficulty: 'dasar',
        question: "13. [语音与变调] Ketika dua suku kata bernada ke-3 bertemu (3+3 seperti nǐ + hǎo), suku kata pertama dibaca...",
        options: ["Nada ke-2 (ní)", "Nada ke-1 (nī)", "Nada ke-4 (nì)", "Tetap nada ke-3"],
        answer: 0,
        explanation: "Aturan Tone Sandhi: Nada 3 + Nada 3 dibaca menjadi Nada 2 + Nada 3 (ní hǎo)."
      },
      {
        id: 14,
        type: 'grammar',
        difficulty: 'menengah',
        question: "14. [拼音] Di antara inisial berikut, manakah yang merupakan konsonan bibir (labial)?",
        options: ["b, p, m, f", "d, t, n, l", "g, k, h", "j, q, x"],
        answer: 0,
        explanation: "b, p, m, f dilafalkan dengan menggunakan bibir (labial)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "15. [汉字笔画] Goresan horizontal lurus dalam Hanzi disebut...",
        options: ["横 (héng)", "竖 (shù)", "撇 (piě)", "捺 (nà)"],
        answer: 0,
        explanation: "Goresan mendatar dari kiri ke kanan disebut 横 (héng)."
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "16. [汉字笔画] Karakter '十' (shí - 10) terdiri dari dua goresan berurutan, yaitu...",
        options: ["横 lalu 竖", "竖 lalu 横", "撇 lalu 捺", "点 lalu 提"],
        answer: 0,
        explanation: "Aturan urutan goresan: Dahulukan horizontal sebelum vertikal (先横后竖)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'menengah',
        question: "17. [课堂用语] Ungkapan guru '上课！' (Shàng kè!) berarti...",
        options: ["Kelas dimulai!", "Kelas selesai!", "Buka buku!", "Lihat papan tulis!"],
        answer: 0,
        explanation: "上课 (Shàng kè) berarti kelas/pelajaran dimulai."
      },
      {
        id: 18,
        type: 'reading',
        difficulty: 'menengah',
        question: "18. [课堂用语] Ungkapan '现在休息！' (Xiànzài xiūxi!) artinya...",
        options: ["Sekarang istirahat!", "Mari membaca bersama!", "Ada pertanyaan?", "Ulangi sekali lagi!"],
        answer: 0,
        explanation: "休息 (xiūxi) berarti istirahat."
      },
      {
        id: 19,
        type: 'order',
        difficulty: 'mahir',
        question: "19. [连词成句] Susun kata berikut menjadi sapaan kepada guru: ① 老师 ② 您 ③ 好",
        options: ["②③① (您好老师)", "①②③ (老师您好)", "③②① (好您老师)", "①③② (老师好您)"],
        answer: 1,
        explanation: "Susunan yang paling sopan dan alami: 老师，您好！(Guru, salam untuk Anda)."
      },
      {
        id: 20,
        type: 'reading',
        difficulty: 'mahir',
        question: "20. [文化与礼仪] Dalam budaya Tiongkok, saat menyapa seseorang dengan jabat tangan, sikap yang baik adalah...",
        options: ["Menatap lawan bicara sambil mengangguk sopan", "Melihat ke bawah terus-menerus", "Melambaikan satu jari", "Tertawa terbahak-bahak"],
        answer: 0,
        explanation: "Menatap dengan ramah dan mengangguk sedikit menunjukkan ketulusan dan kesopanan."
      }
    ]
  ),

  // ================= BAB 2 =================
  createQuestionsForChapter(
    2,
    "Bab 2: 谢谢你 (Thank You / Kesopanan)",
    "Tingkat Dasar-Menengah (Terima Kasih, Nada Netral, Tone Sandhi 不, Radikal 口 & 见)",
    ["口", "见", "山", "小", "不"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "谢谢你！(Xièxie nǐ!)",
        question: "1. [听力] Dengarkan audio: '谢谢你！'. Arti kalimat ini adalah...",
        options: ["Terima kasih kepadamu", "Maafkan aku", "Sampai bertemu lagi", "Siapa namamu"],
        answer: 0,
        explanation: "谢谢你 (Xièxie nǐ) berarti 'Terima kasih kepadamu'."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "不客气！(Bú kèqi!)",
        question: "2. [听力] Dengarkan audio: '不客气！'. Ungkapan ini berarti...",
        options: ["Sama-sama / Jangan sungkan", "Terima kasih", "Sampai jumpa", "Silakan masuk"],
        answer: 0,
        explanation: "不客气 (Bú kèqi) adalah jawaban sopan untuk ucapan terima kasih."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "再见！(Zàijiàn!)",
        question: "3. [听力] Dengarkan audio: '再见！'. Kapan ungkapan ini diucapkan?",
        options: ["Saat berpamitan / berpisah", "Saat berkenalan pertama kali", "Saat menerima hadiah", "Saat memesan makanan"],
        answer: 0,
        explanation: "再见 (Zàijiàn) berarti 'Sampai jumpa kembali'."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "桌子 (zhuōzi)",
        question: "4. [听力 Nada Netral] Dengarkan audio: 'zhuōzi'. Benda apakah ini?",
        options: ["Meja", "Kursi", "Lemari", "Pintu"],
        answer: 0,
        explanation: "桌子 (zhuōzi) berarti meja, dengan suku kata kedua bernada netral."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "衣服 (yīfu)",
        question: "5. [听力] Dengarkan audio: 'yīfu'. Apakah artinya?",
        options: ["Pakaian / Baju", "Sepatu", "Topi", "Kacamata"],
        answer: 0,
        explanation: "衣服 (yīfu) berarti pakaian."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "妈妈 (māma)",
        question: "6. [听力] Dengarkan audio: 'māma'. Anggota keluarga siapakah ini?",
        options: ["Ibu", "Ayah", "Nenek", "Kakak perempuan"],
        answer: 0,
        explanation: "妈妈 (māma) berarti ibu."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Bagaimana membalas ucapan '谢谢' secara singkat?",
        options: ["不谢 (Bú xiè)", "对不起 (Duìbuqǐ)", "再见 (Zàijiàn)", "你好 (Nǐ hǎo)"],
        answer: 0,
        explanation: "不谢 (Bú xiè) adalah balasan singkat untuk 谢谢."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法 变调] Kata '不' secara asal bernada 4 (bù). Kapan '不' berubah menjadi nada 2 (bú)?",
        options: [
          "Bila diikuti suku kata bernada 4 (contoh: bú kèqi, bú shì)",
          "Bila diikuti suku kata bernada 1",
          "Bila diletakkan di akhir kalimat",
          "Tidak pernah berubah nada"
        ],
        answer: 0,
        explanation: "Aturan Sandhi 不: bù + nada 4 -> bú + nada 4."
      },
      {
        id: 9,
        type: 'reading',
        difficulty: 'menengah',
        question: "9. [阅读] Manakah pasangan kata yang pengucapannya mengalami perubahan nada 'bú'?",
        options: ["不是 (bú shì)", "不好 (bù hǎo)", "不吃 (bù chī)", "不喝 (bù hē)"],
        answer: 0,
        explanation: "Karena 是 (shì) bernada ke-4, maka dibaca 'bú shì'."
      },
      {
        id: 10,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "10. [汉字] Karakter '口' (kǒu) melambangkan bentuk...",
        options: ["Mulut yang terbuka", "Mata yang memandang", "Gunung tinggi", "Pohon berdaun"],
        answer: 0,
        explanation: "Piktograf 口 menyerupai mulut yang terbuka."
      },
      {
        id: 11,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "11. [汉字] Karakter '山' (shān) berarti...",
        options: ["Gunung", "Air", "Batu", "Api"],
        answer: 0,
        explanation: "山 (shān) adalah piktograf tiga puncak gunung."
      },
      {
        id: 12,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "12. [汉字] Karakter '小' (xiǎo) memiliki arti...",
        options: ["Kecil", "Besar", "Banyak", "Sedikit"],
        answer: 0,
        explanation: "小 (xiǎo) berarti kecil, kebalikan dari 大 (dà - besar)."
      },
      {
        id: 13,
        type: 'reading',
        difficulty: 'menengah',
        question: "13. [课堂用语] '打开书' (Dǎkāi shū) adalah instruksi guru yang berarti...",
        options: ["Buka buku kalian!", "Tutup buku!", "Baca dengan lantang!", "Tulis di papan!"],
        answer: 0,
        explanation: "打开书 = buka buku."
      },
      {
        id: 14,
        type: 'reading',
        difficulty: 'menengah',
        question: "14. [课堂用语] '请大声读' (Qǐng dà shēng dú) artinya...",
        options: ["Silakan baca dengan suara keras / lantang", "Dengarkan baik-baik", "Tuliskan di buku", "Silakan duduk"],
        answer: 0,
        explanation: "大声 (dà shēng) berarti bersuara keras/lantang."
      },
      {
        id: 15,
        type: 'reading',
        difficulty: 'menengah',
        question: "15. [课堂用语] '再读一遍' (Zài dú yí biàn) artinya...",
        options: ["Baca sekali lagi / Ulangi membaca", "Cukup sekali saja", "Mulai menulis", "Kumpulkan tugas"],
        answer: 0,
        explanation: "再 (lagi) + 读 (baca) + 一遍 (sekali) = Baca sekali lagi."
      },
      {
        id: 16,
        type: 'order',
        difficulty: 'mahir',
        question: "16. [连词成句] Susun kalimat pamitan: ① 再见 ② 明天 ③ 老师",
        options: ["③②① (老师，明天再见！)", "①②③ (再见明天老师)", "②①③ (明天再见老师)", "③①② (老师再见明天)"],
        answer: 0,
        explanation: "Urutan yang tepat: 老师，明天再见！(Bapak/Ibu Guru, sampai jumpa besok!)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [选词填空] A: 谢谢你的帮助！ B: ______！",
        options: ["不客气", "没关系", "再见", "对不起"],
        answer: 0,
        explanation: "Untuk 谢谢 (terima kasih), pasangannya adalah 不客气."
      },
      {
        id: 18,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "朋友 (péngyou)",
        question: "18. [听力] Dengarkan audio: 'péngyou'. Apakah artinya?",
        options: ["Teman / Sahabat", "Guru", "Murid", "Tetangga"],
        answer: 0,
        explanation: "朋友 (péngyou) berarti teman atau sahabat."
      },
      {
        id: 19,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "漂亮 (piàoliang)",
        question: "19. [听力] Dengarkan audio: 'piàoliang'. Kata sifat ini bermakna...",
        options: ["Cantik / Indah", "Tinggi", "Mahal", "Bersih"],
        answer: 0,
        explanation: "漂亮 (piàoliang) berarti cantik atau indah."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [语音 轻声] Pada kata '儿子' (érzi), suku kata 'zi' diucapkan...",
        options: ["Ringan, pendek, dan tanpa tekanan nada (轻声)", "Nada 4 tegas", "Nada 1 tinggi", "Nada 3 meliuk"],
        answer: 0,
        explanation: "Sufiks 'zi' (子) diucapkan sebagai nada netral (轻声)."
      }
    ]
  ),

  // ================= BAB 3 =================
  createQuestionsForChapter(
    3,
    "Bab 3: 你叫什么名字 (What's Your Name / Nama & Identitas)",
    "Tingkat Menengah (Pertanyaan '什么', Kalimat '是', Pertanyaan '吗', Kebangsaan 中国/美国)",
    ["月", "心", "中", "人"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你叫什么名字？(Nǐ jiào shénme míngzi?)",
        question: "1. [听力] Dengarkan audio: '你叫什么名字？'. Kalimat ini menanyakan...",
        options: ["Siapa namamu", "Dari mana asalmu", "Berapa usiamu", "Apa pekerjaanmu"],
        answer: 0,
        explanation: "你叫什么名字 menanyakan nama seseorang."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我叫李月。(Wǒ jiào Lǐ Yuè.)",
        question: "2. [听力] Dengarkan audio: '我叫李月。'. Siapakah nama orang tersebut?",
        options: ["Li Yue (李月)", "Wang Fang (王方)", "David (大卫)", "Zhang Peng (张朋)"],
        answer: 0,
        explanation: "Pembicara menyatakan namanya adalah Li Yue."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你是老师吗？(Nǐ shì lǎoshī ma?)",
        question: "3. [听力] Dengarkan audio: Profesi apakah yang ditanyakan?",
        options: ["Guru (老师)", "Dokter (医生)", "Siswa (学生)", "Kasir (店员)"],
        answer: 0,
        explanation: "老师 (lǎoshī) berarti guru."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我不是老师，我是学生。(Wǒ bú shì lǎoshī, wǒ shì xuésheng.)",
        question: "4. [听力] Menurut audio, apakah status pembicara?",
        options: ["Siswa/Murid (学生)", "Guru (老师)", "Kepala sekolah", "Dokter"],
        answer: 0,
        explanation: "Pembicara menjelaskan '我不是老师，我是学生' (Saya bukan guru, saya siswa)."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "你是中国人吗？(Nǐ shì Zhōngguó rén ma?)",
        question: "5. [听力] Kewarganegaraan apa yang ditanyakan?",
        options: ["Orang Tiongkok/Cina (中国人)", "Orang Amerika (美国人)", "Orang Jepang", "Orang Indonesia"],
        answer: 0,
        explanation: "中国人 (Zhōngguó rén) = Orang Cina/Tiongkok."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "我不是中国人，我是美国人。(Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.)",
        question: "6. [听力] Dari manakah asal kewarganegaraan pembicara?",
        options: ["Amerika Serikat (美国)", "Tiongkok (中国)", "Inggris", "Prancis"],
        answer: 0,
        explanation: "Pembicara adalah orang Amerika (美国人)."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Kata '什么' (shénme) memiliki arti...",
        options: ["Apa", "Siapa", "Di mana", "Kapan"],
        answer: 0,
        explanation: "什么 (shénme) berarti 'apa'."
      },
      {
        id: 8,
        type: 'reading',
        difficulty: 'dasar',
        question: "8. [阅读] Pilihlah kata ganti orang pertama tunggal ('Saya / Aku'):",
        options: ["我 (wǒ)", "你 (nǐ)", "他 (tā)", "她 (tā)"],
        answer: 0,
        explanation: "我 (wǒ) berarti 'Saya' atau 'Aku'."
      },
      {
        id: 9,
        type: 'reading',
        difficulty: 'menengah',
        question: "9. [阅读] Kata kerja '是' (shì) berfungsi sebagai...",
        options: ["Kopula penegasan ('adalah / iya')", "Kata kepemilikan", "Kata tanya", "Kata sifat"],
        answer: 0,
        explanation: "是 (shì) menghubungkan subjek dengan identitas/predikat nominal."
      },
      {
        id: 10,
        type: 'grammar',
        difficulty: 'menengah',
        question: "10. [语法] Manakah bentuk negatif yang benar dari '我是老师'?",
        options: ["我不是老师", "我没是老师", "我不老师", "我无老师"],
        answer: 0,
        explanation: "Bentuk ingkar dari 是 adalah 不是 (bú shì)."
      },
      {
        id: 11,
        type: 'grammar',
        difficulty: 'menengah',
        question: "11. [语法] Fungsi partikel '吗' (ma) di akhir kalimat adalah...",
        options: ["Mengubah kalimat deklaratif menjadi kalimat tanya Ya/Tidak", "Menyatakan waktu lampau", "Menunjukkan kepemilikan", "Menegaskan seruan"],
        answer: 0,
        explanation: "Partikel 吗 mengubah pernyataan menjadi pertanyaan."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [选词填空] A: 你叫什么名字？ B: 我____李月。",
        options: ["叫 (jiào)", "是 (shì)", "有 (yǒu)", "去 (qù)"],
        answer: 0,
        explanation: "Untuk menyebutkan nama panggilan diri sendiri: 我叫..."
      },
      {
        id: 13,
        type: 'reading',
        difficulty: 'menengah',
        question: "13. [选词填空] 他不是中国____，他是美国人。",
        options: ["人 (rén)", "老师 (lǎoshī)", "名字 (míngzi)", "书 (shū)"],
        answer: 0,
        explanation: "中国人 = Orang Tiongkok."
      },
      {
        id: 14,
        type: 'order',
        difficulty: 'menengah',
        question: "14. [连词成句] Susunlah: ① 叫 ② 名字 ③ 你 ④ 什么",
        options: ["③①④② (你叫什么名字？)", "①③④② (叫你什么名字？)", "④②③① (什么名字你叫？)", "③④①② (你什么叫名字？)"],
        answer: 0,
        explanation: "Pola: Subjek (你) + 叫 + 什么 + 名字？"
      },
      {
        id: 15,
        type: 'order',
        difficulty: 'menengah',
        question: "15. [连词成句] Susunlah: ① 学生 ② 我 ③ 吗 ④ 是",
        options: ["②④①③ (我是学生吗？)", "④②①③ (是我学生吗？)", "②①④③ (我学生是吗？)", "③②④① (吗我是学生？)"],
        answer: 0,
        explanation: "Pola: 我 + 是 + 学生 + 吗？"
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "16. [汉字] Karakter '月' (yuè) melambangkan benda langit...",
        options: ["Bulan", "Matahari", "Bintang", "Awan"],
        answer: 0,
        explanation: "月 (yuè) adalah piktograf bentuk bulan sabit."
      },
      {
        id: 17,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "17. [汉字] Karakter '中' (zhōng) dalam '中国' berarti...",
        options: ["Tengah / Pusat", "Besar", "Tinggi", "Barat"],
        answer: 0,
        explanation: "中 (zhōng) berarti tengah (Middle Kingdom)."
      },
      {
        id: 18,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "18. [汉字] Karakter '人' (rén) melambangkan...",
        options: ["Seseorang yang sedang berdiri / melangkah", "Pohon berakar", "Pintu gerbang", "Burung terbang"],
        answer: 0,
        explanation: "人 (rén) melambangkan sosok manusia."
      },
      {
        id: 19,
        type: 'reading',
        difficulty: 'mahir',
        question: "19. [阅读理解] '李月是汉语老师，她是学校的老师。' Siapakah Li Yue?",
        options: ["Guru Bahasa Mandarin di sekolah", "Dokter di rumah sakit", "Murid pertukaran pelajar", "Kasir toko buku"],
        answer: 0,
        explanation: "Teks menjelaskan Li Yue adalah guru Mandarin di sekolah."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [语法辨析] Kalimat manakah yang TIDAK baku?",
        options: ["你是老师吗？", "你叫什么名字？", "我是不是中国学生吗？", "我不是美国人。"],
        answer: 2,
        explanation: "Pola kalimat pilihan 是不是 tidak boleh digabung dengan partikel 吗 di akhir."
      },
      {
        id: 21,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "大卫也是学生。(Dàwèi yě shì xuésheng.)",
        question: "21. [听力] Dengarkan audio: Kata '也' (yě) di dalam kalimat berarti...",
        options: ["Juga", "Tidak", "Bukan", "Sangat"],
        answer: 0,
        explanation: "也 (yě) berarti juga."
      },
      {
        id: 22,
        type: 'reading',
        difficulty: 'mahir',
        question: "22. [选词填空] A: 你是学生吗？ B: ______，我是老师。",
        options: ["不是 (Bú shì)", "是 (Shì)", "叫 (Jiào)", "好 (Hǎo)"],
        answer: 0,
        explanation: "Karena profesinya adalah guru, jawabannya menyangkal: 不是 (Bukan)."
      }
    ]
  ),

  // ================= BAB 4 =================
  createQuestionsForChapter(
    4,
    "Bab 4: 她是我的汉语老师 (She is My Chinese Teacher / Guru & Teman)",
    "Tingkat Menengah (Kepemilikan '的', Kata Tanya '谁', '哪国人', Partikel '呢', Radikal 儿 & 几)",
    ["七", "儿", "几", "九"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "她是我的汉语老师。(Tā shì wǒ de Hànyǔ lǎoshī.)",
        question: "1. [听力] Dengarkan audio: Siapakah wanita yang dibicarakan?",
        options: ["Guru Bahasa Mandarin saya", "Teman sekelas saya", "Dokter saya", "Ibu saya"],
        answer: 0,
        explanation: "汉语老师 = Guru Bahasa Mandarin."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "他是谁？(Tā shì shéi?)",
        question: "2. [听力] Dengarkan audio: '他是谁？'. Kata '谁' (shéi) berarti...",
        options: ["Siapa", "Apa", "Di mana", "Berapa"],
        answer: 0,
        explanation: "谁 (shéi) berarti siapa."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "他是我同学。(Tā shì wǒ tóngxué.)",
        question: "3. [听力] Apa hubungan antara pembicara dengan orang tersebut?",
        options: ["Teman sekelas (同学)", "Guru (老师)", "Teman biasa (朋友)", "Adik laki-laki"],
        answer: 0,
        explanation: "同学 (tóngxué) berarti teman sekelas."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "她不是我同学，她是我朋友。(Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.)",
        question: "4. [听力] Status wanita tersebut bagi pembicara adalah...",
        options: ["Teman / Sahabat (朋友)", "Teman sekelas", "Guru", "Dokter"],
        answer: 0,
        explanation: "Dia bukan teman sekelas, melainkan teman (朋友)."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "她是哪国人？(Tā shì nǎ guó rén?)",
        question: "5. [听力] Pertanyaan ini menanyakan tentang...",
        options: ["Kewarganegaraan / Asal negara", "Nama lengkap", "Profesi", "Tempat tinggal"],
        answer: 0,
        explanation: "哪国人 menanyakan asal negara/kebangsaan seseorang."
      },
      {
        id: 6,
        type: 'reading',
        difficulty: 'dasar',
        question: "6. [阅读] Karakter '她' digunakan untuk kata ganti...",
        options: ["Dia (perempuan)", "Dia (laki-laki)", "Benda mati", "Mereka"],
        answer: 0,
        explanation: "她 memiliki radikal 女 (wanita), merujuk pada perempuan."
      },
      {
        id: 7,
        type: 'grammar',
        difficulty: 'dasar',
        question: "7. [语法] Manakah susunan kepemilikan yang benar untuk 'Buku saya'?",
        options: ["我的书 (wǒ de shū)", "书的我 (shū de wǒ)", "我的我 (wǒ de wǒ)", "我是书 (wǒ shì shū)"],
        answer: 0,
        explanation: "Pola: Pemilik (我) + 的 + Benda (书)."
      },
      {
        id: 8,
        type: 'grammar',
        difficulty: 'menengah',
        question: "8. [语法] Pada hubungan kekerabatan atau teman dekat, partikel '的' dapat...",
        options: ["Dihilangkan (contoh: 我妈妈, 我同学)", "Harus selalu ditulis tiga kali", "Diganti dengan 是", "Diletakkan di depan"],
        answer: 0,
        explanation: "Partikel 的 boleh dihilangkan pada kerabat/teman dekat."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] '我是中国人，你呢？' Fungsi '你呢？' di sini adalah...",
        options: ["Menanyakan hal serupa balik ('Bagaimana dengan kamu?')", "Menyatakan keheranan", "Meminta maaf", "Menolak ajakan"],
        answer: 0,
        explanation: "Partikel 呢 digunakan untuk pertanyaan elipsis balik."
      },
      {
        id: 10,
        type: 'reading',
        difficulty: 'menengah',
        question: "10. [选词填空] A: 她是______？ B: 她是李老师。",
        options: ["谁 (shéi)", "什么 (shénme)", "哪 (nǎ)", "吗 (ma)"],
        answer: 0,
        explanation: "Untuk menanyakan identitas orang: 她是谁？"
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 李月是我的汉语老师，她叫______。",
        options: ["李月", "老师", "学生", "中国"],
        answer: 0,
        explanation: "Nama yang sudah disebutkan adalah 李月."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [选词填空] 你是______国人？—— 我是美国人。",
        options: ["哪 (nǎ)", "谁 (shéi)", "什么 (shénme)", "的 (de)"],
        answer: 0,
        explanation: "哪国人 = orang negara mana."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 的 ② 老师 ③ 她 ④ 汉语 ⑤ 是 ⑥ 我",
        options: ["③⑤⑥①④② (她是我的汉语老师。)", "⑥①④②⑤③ (我的汉语老师是她。)", "③⑤④②①⑥ (她是汉语老师的我。)", "④②⑤⑥①③ (汉语老师是我的她。)"],
        answer: 0,
        explanation: "Susunan alami: 她是我的汉语老师。"
      },
      {
        id: 14,
        type: 'order',
        difficulty: 'menengah',
        question: "14. [连词成句] Susunlah: ① 同学 ② 是 ③ 你 ④ 他 ⑤ 吗",
        options: ["④②③①⑤ (他是你同学吗？)", "③②④①⑤ (你是他同学吗？)", "⑤④②③① (吗他是你同学？)", "④①②③⑤ (他同学是你吗？)"],
        answer: 0,
        explanation: "Urutan tepat: 他是你同学吗？(Apakah dia teman sekelasmu?)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "15. [汉字] Angka '九' (jiǔ) melambangkan bilangan...",
        options: ["9", "7", "8", "6"],
        answer: 0,
        explanation: "九 (jiǔ) berarti sembilan (9)."
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "16. [汉字] Angka '七' (qī) berarti...",
        options: ["7", "9", "4", "2"],
        answer: 0,
        explanation: "七 (qī) berarti tujuh (7)."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读理解] '大卫是美国人，他是我的大学同学。' Berdasarkan kalimat ini, David adalah...",
        options: ["Orang Amerika dan teman kuliah saya", "Guru bahasa Mandarin dari Amerika", "Dokter berkebangsaan Tiongkok", "Adik laki-laki saya"],
        answer: 0,
        explanation: "大学同学 = teman kuliah."
      },
      {
        id: 18,
        type: 'grammar',
        difficulty: 'mahir',
        question: "18. [语音 辨析] Manakah pengucapan yang tepat untuk '一' pada kata '一个人' (yí ge rén)?",
        options: ["yí (nada 2)", "yì (nada 4)", "yī (nada 1)", "yi (netral)"],
        answer: 0,
        explanation: "Karena 个 (ge) dianggap nada 4 / netral turunan nada 4, maka 一 dibaca yí."
      },
      {
        id: 19,
        type: 'reading',
        difficulty: 'mahir',
        question: "19. [选词填空] A: 他是谁？ B: 他是我的好______，我们一起学汉语。",
        options: ["朋友 (péngyou)", "医生 (yīshēng)", "杯子 (bēizi)", "名字 (míngzi)"],
        answer: 0,
        explanation: "好朋友 = teman baik/sahabat."
      },
      {
        id: 20,
        type: 'grammar',
        difficulty: 'mahir',
        question: "20. [句型转换] Ubah pernyataan '他是美国人' menjadi kalimat tanya memakai '谁':",
        options: ["谁是美国人？", "他是谁国人？", "谁他是美国人？", "美国人是谁他？"],
        answer: 0,
        explanation: "谁 menggantikan subjek 他: 谁是美国人？(Siapa yang orang Amerika?)."
      }
    ]
  ),

  // ================= BAB 5 =================
  createQuestionsForChapter(
    5,
    "Bab 5: 她女儿今年二十岁 (Her Daughter is 20 / Keluarga & Usia)",
    "Tingkat Menengah (Keluarga 家, Kata Ukur 口, Umur 岁, Partikel Perubahan 了, Angka 1-100)",
    ["水", "女", "了", "大"],
    [
      {
        id: 1,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "你家有几口人？(Nǐ jiā yǒu jǐ kǒu rén?)",
        question: "1. [听力] Dengarkan audio: Kalimat ini menanyakan...",
        options: ["Jumlah anggota keluarga di rumah", "Nama anak perempuan", "Usia orang tua", "Lokasi rumah"],
        answer: 0,
        explanation: "你家有几口人 menanyakan berapa orang anggota keluarga di rumah."
      },
      {
        id: 2,
        type: 'listening',
        difficulty: 'dasar',
        audioPrompt: "我家有三口人。(Wǒ jiā yǒu sān kǒu rén.)",
        question: "2. [听力] Berapa jumlah anggota keluarga pembicara?",
        options: ["3 orang", "4 orang", "5 orang", "2 orang"],
        answer: 0,
        explanation: "三口人 = 3 orang anggota keluarga."
      },
      {
        id: 3,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "你女儿几岁了？(Nǐ nǚ'ér jǐ suì le?)",
        question: "3. [听力] Siapakah yang ditanyakan usianya?",
        options: ["Anak perempuan (女儿)", "Anak laki-laki (儿子)", "Ibu (妈妈)", "Guru (老师)"],
        answer: 0,
        explanation: "女儿 (nǚ'ér) berarti anak perempuan / putri."
      },
      {
        id: 4,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "她今年四岁了。(Tā jīnnián sì suì le.)",
        question: "4. [听力] Berapakah usia anak perempuan tersebut tahun ini?",
        options: ["4 tahun (四岁)", "14 tahun", "24 tahun", "40 tahun"],
        answer: 0,
        explanation: "四岁 = 4 tahun."
      },
      {
        id: 5,
        type: 'listening',
        difficulty: 'menengah',
        audioPrompt: "李老师多大了？(Lǐ lǎoshī duō dà le?)",
        question: "5. [听力] Pertanyaan '多大了' lazimnya digunakan untuk menanyakan usia...",
        options: ["Orang dewasa", "Bayi baru lahir", "Hewan", "Usia gedung"],
        answer: 0,
        explanation: "多大了 digunakan untuk menanyakan usia orang dewasa."
      },
      {
        id: 6,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "她今年五十岁了，她女儿今年二十岁。(Tā jīnnián wǔshí suì le, tā nǚ'ér jīnnián èrshí suì.)",
        question: "6. [听力] Berapa usia guru dan putrinya berturut-turut?",
        options: ["50 tahun dan 20 tahun", "40 tahun dan 18 tahun", "55 tahun dan 25 tahun", "60 tahun dan 30 tahun"],
        answer: 0,
        explanation: "五十岁 (50 tahun) dan 二十岁 (20 tahun)."
      },
      {
        id: 7,
        type: 'reading',
        difficulty: 'dasar',
        question: "7. [阅读] Angka '二十' (èrshí) bernilai...",
        options: ["20", "12", "200", "2"],
        answer: 0,
        explanation: "二十 = 2 x 10 = 20."
      },
      {
        id: 8,
        type: 'reading',
        difficulty: 'menengah',
        question: "8. [阅读] Kata bantu bilangan (measure word) khusus untuk anggota keluarga adalah...",
        options: ["口 (kǒu)", "个 (ge)", "本 (běn)", "只 (zhī)"],
        answer: 0,
        explanation: "口 (kǒu) adalah kata ukur tradisional untuk anggota keluarga."
      },
      {
        id: 9,
        type: 'grammar',
        difficulty: 'menengah',
        question: "9. [语法] Perbedaan '几岁' dan '多大' dalam menanyakan umur adalah...",
        options: [
          "几岁 untuk anak kecil (<10 tahun), 多大 untuk orang dewasa",
          "几岁 untuk orang tua, 多大 untuk anak kecil",
          "Keduanya tidak ada perbedaan sama sekali",
          "几岁 untuk benda, 多大 untuk manusia"
        ],
        answer: 0,
        explanation: "几岁 biasanya untuk usia di bawah 10 tahun."
      },
      {
        id: 10,
        type: 'grammar',
        difficulty: 'menengah',
        question: "10. [语法] Fungsi partikel '了' pada '四岁了' adalah...",
        options: ["Menunjukkan perubahan kondisi / penambahan usia baru", "Menolak kalimat", "Menanyakan tempat", "Kepemilikan benda"],
        answer: 0,
        explanation: "Partikel 了 di akhir kalimat menyatakan perubahan situasi (sekarang sudah mencapai 4 tahun)."
      },
      {
        id: 11,
        type: 'reading',
        difficulty: 'menengah',
        question: "11. [选词填空] 我家有四______人，爸爸、妈妈、姐姐和我。",
        options: ["口 (kǒu)", "岁 (suì)", "年 (nián)", "号 (hào)"],
        answer: 0,
        explanation: "四口人 = 4 anggota keluarga."
      },
      {
        id: 12,
        type: 'reading',
        difficulty: 'menengah',
        question: "12. [选词填空] 李老师今年______大？—— 她今年五十岁。",
        options: ["多 (duō)", "几 (jǐ)", "什么 (shénme)", "哪 (nǎ)"],
        answer: 0,
        explanation: "Pola: 多大 (duō dà)."
      },
      {
        id: 13,
        type: 'order',
        difficulty: 'menengah',
        question: "13. [连词成句] Susunlah: ① 人 ② 家 ③ 几口 ④ 你 ⑤ 有",
        options: ["④②⑤③① (你家有几口人？)", "②④⑤③① (家里你有几口人？)", "③①④②⑤ (几口人你家有？)", "④⑤②③① (你有家几口人？)"],
        answer: 0,
        explanation: "Urutan baku: 你家有几口人？"
      },
      {
        id: 14,
        type: 'order',
        difficulty: 'menengah',
        question: "14. [连词成句] Susunlah: ① 今年 ② 她 ③ 岁 ④ 二十 ⑤ 了",
        options: ["②①④③⑤ (她今年二十岁了。)", "①②④③⑤ (今年她二十岁了。)", "②④③①⑤ (她二十岁今年了。)", "⑤②①④③ (了她今年二十岁。)"],
        answer: 0,
        explanation: "Urutan tepat: 她今年二十岁了 (atau 今年她二十岁了)."
      },
      {
        id: 15,
        type: 'hanzi',
        difficulty: 'dasar',
        question: "15. [汉字] Karakter '女' (nǚ) bermakna...",
        options: ["Perempuan / Wanita", "Laki-laki", "Anak kecil", "Ibu"],
        answer: 0,
        explanation: "女 (nǚ) berarti wanita / perempuan."
      },
      {
        id: 16,
        type: 'hanzi',
        difficulty: 'menengah',
        question: "16. [汉字] Karakter '水' (shuǐ) melambangkan...",
        options: ["Aliran air sungai", "Gunung batu", "Pohon rindang", "Bulan sabit"],
        answer: 0,
        explanation: "水 (shuǐ) adalah piktograf aliran air."
      },
      {
        id: 17,
        type: 'reading',
        difficulty: 'mahir',
        question: "17. [阅读] Angka Mandarin '八十八' bernilai...",
        options: ["88", "18", "80", "808"],
        answer: 0,
        explanation: "八十八 = 8 x 10 + 8 = 88."
      },
      {
        id: 18,
        type: 'reading',
        difficulty: 'mahir',
        question: "18. [阅读] Angka '九十九' dalam bahasa Indonesia adalah...",
        options: ["99", "19", "90", "990"],
        answer: 0,
        explanation: "九十九 = 99."
      },
      {
        id: 19,
        type: 'listening',
        difficulty: 'mahir',
        audioPrompt: "小孩儿 (xiǎoháir)",
        question: "19. [语音 儿化] Dengarkan audio: 'xiǎoháir'. Ciri pelafalan akhiran 'r' (儿化) pada kata ini menandakan...",
        options: ["Nuansa kasih sayang / ukuran kecil (anak kecil yang lucu)", "Kata marah", "Bentuk pasif", "Bahasa kuno"],
        answer: 0,
        explanation: "Akhiran erhua sering memberi nuansa kecil atau rasa sayang."
      },
      {
        id: 20,
        type: 'culture',
        difficulty: 'mahir',
        question: "20. [文化常识] Bagaimana cara menanyakan usia kepada seorang kakek/nenek lanjut usia secara paling santun?",
        options: ["您多大年纪了？(Nín duō dà niánjì le?)", "你几岁了？", "你是谁？", "你有钱吗？"],
        answer: 0,
        explanation: "Untuk lansia, ungkapan paling sopan adalah: 您多大年纪了？"
      }
    ]
  )
];

export const HSK_WORKBOOK = COMPREHENSIVE_WORKBOOK;

