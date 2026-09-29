import { WorkbookExercise } from '../types';
import { ALL_HSK_WORKBOOK_CHAPTERS } from './hskWorkbookCombined';

// Export full 15 chapters workbook exercises
export const HSK_WORKBOOK: WorkbookExercise[] = ALL_HSK_WORKBOOK_CHAPTERS;

export interface ExamQuestion {
  id: number;
  section: 'listening' | 'reading';
  audioPrompt?: string;
  question: string;
  imageAlt?: string;
  options: string[];
  answer: number;
  explanation: string;
}

// Official HSK 1 Model Test (40 Questions from Workbook Appendix)
export const HSK_MODEL_TEST: ExamQuestion[] = [
  // Listening Section (1-20)
  {
    id: 1,
    section: 'listening',
    audioPrompt: "很高兴 (hěn gāoxìng - very happy)",
    question: "1. Dengarkan audio: '很高兴'. Apakah orang pada gambar tersenyum gembira?",
    options: ["Benar (对)", "Salah (错)"],
    answer: 0,
    explanation: "Suara menyebutkan '很高兴' (sangat senang/gembira), sesuai dengan gambar orang tersenyum."
  },
  {
    id: 2,
    section: 'listening',
    audioPrompt: "看电影 (kàn diànyǐng - to see a movie)",
    question: "2. Dengarkan audio: '看电影'. Apakah sesuai dengan aktivitas menonton film di bioskop?",
    options: ["Benar (对)", "Salah (错)"],
    answer: 0,
    explanation: "看电影 berarti menonton film."
  },
  {
    id: 3,
    section: 'listening',
    audioPrompt: "吃米饭 (chī mǐfàn - eating rice)",
    question: "3. Dengarkan audio: '吃米饭'. Apakah gambar menunjukkan orang sedang makan nasi?",
    options: ["Benar (对)", "Salah (错)"],
    answer: 0,
    explanation: "吃米饭 berarti makan nasi."
  },
  {
    id: 4,
    section: 'listening',
    audioPrompt: "坐飞机 (zuò fēijī - taking an airplane)",
    question: "4. Dengarkan audio: '坐飞机'. Apakah gambar menunjukkan pesawat terbang?",
    options: ["Benar (对)", "Salah (错)"],
    answer: 0,
    explanation: "坐飞机 berarti naik pesawat terbang."
  },
  {
    id: 5,
    section: 'listening',
    audioPrompt: "喝茶 (hē chá - drinking tea)",
    question: "5. Dengarkan audio: '喝茶'. Apakah gambar menunjukkan orang sedang minum teh?",
    options: ["Benar (对)", "Salah (错)"],
    answer: 0,
    explanation: "喝茶 berarti minum teh."
  },
  {
    id: 6,
    section: 'listening',
    audioPrompt: "A: 你好！ B: 很高兴认识你！",
    question: "6. Dengarkan dialog: Sapaan perkenalan formal antar rekan baru.",
    options: ["Gambar Berjabat Tangan", "Gambar Tidur", "Gambar Belanja", "Gambar Menonton TV"],
    answer: 0,
    explanation: "很高兴认识你 diucapkan saat berkenalan dan berjabat tangan."
  },
  {
    id: 7,
    section: 'listening',
    audioPrompt: "下午我去商店，我想买一些水果。",
    question: "7. Pertanyaan: Dia pergi ke toko untuk membeli apa?",
    options: ["Buku (书)", "Buah-buahan (水果)", "Cangkir (杯子)", "Pakaian (衣服)"],
    answer: 1,
    explanation: "Suara menyatakan: '我想买一些水果' (Saya ingin membeli buah-buahan)."
  },
  {
    id: 8,
    section: 'listening',
    audioPrompt: "现在十点十分，我们在图书馆看书。",
    question: "8. Pertanyaan: Di manakah mereka membaca buku?",
    options: ["Di rumah sakit (医院)", "Di toko (商店)", "Di perpustakaan (图书馆)", "Di rumah (家)"],
    answer: 2,
    explanation: "Audio menyebutkan '在图书馆看书' (di perpustakaan membaca buku)."
  },
  {
    id: 9,
    section: 'listening',
    audioPrompt: "我儿子今年五岁了，他喜欢看书。",
    question: "9. Berapa usia anak laki-laki tersebut?",
    options: ["3 tahun", "5 tahun (五岁)", "10 tahun", "15 tahun"],
    answer: 1,
    explanation: "五岁 = 5 tahun."
  },
  {
    id: 10,
    section: 'listening',
    audioPrompt: "昨天北京的天气很好，不冷不热。",
    question: "10. Bagaimana cuaca Beijing kemarin?",
    options: ["Sangat dingin (太冷了)", "Sangat panas (太热了)", "Sangat bagus, tidak dingin dan tidak panas (不冷不热)", "Hujan lebat (下大雨)"],
    answer: 2,
    explanation: "Sesuai audio: '明天天气很好，不冷不热'."
  },
  // Reading Section (11-20)
  {
    id: 11,
    section: 'reading',
    question: "11. Pilihlah padanan kata untuk karakter '医生' (yīshēng):",
    options: ["Guru", "Dokter", "Siswa", "Kasir"],
    answer: 1,
    explanation: "医生 berarti dokter."
  },
  {
    id: 12,
    section: 'reading',
    question: "12. Karakter '水' (shuǐ) berarti:",
    options: ["Api", "Air", "Batu", "Pohon"],
    answer: 1,
    explanation: "水 berarti air."
  },
  {
    id: 13,
    section: 'reading',
    question: "13. Lengkapilah: '我能坐____吗？—— 请坐。'",
    options: ["这儿 (zhèr)", "什么 (shénme)", "谁 (shéi)", "岁 (suì)"],
    answer: 0,
    explanation: "这儿 (di sini): '我能坐这儿吗？' (Bolehkah saya duduk di sini?)."
  },
  {
    id: 14,
    section: 'reading',
    question: "14. Kalimat '桌子上有一个电脑' memiliki arti:",
    options: [
      "Di atas meja ada sebuah komputer.",
      "Di dalam tas ada sebuah buku.",
      "Di bawah kursi ada seekor kucing.",
      "Komputer ada di rumah sakit."
    ],
    answer: 0,
    explanation: "桌子 (meja) + 上 (atas) + 有一个电脑 (ada sebuah komputer)."
  },
  {
    id: 15,
    section: 'reading',
    question: "15. Pilihlah kalimat yang bermakna 'Saya bisa berbicara bahasa Mandarin':",
    options: [
      "我会说汉语。",
      "我想去学校。",
      "她是我的同学。",
      "请喝茶。"
    ],
    answer: 0,
    explanation: "我会说汉语 = Saya bisa bicara Mandarin."
  },
  {
    id: 16,
    section: 'reading',
    question: "16. Ungkapan '不客气' (bú kèqi) digunakan untuk:",
    options: ["Menyapa teman", "Membalas ucapan terima kasih (Sama-sama)", "Meminta maaf", "Berpamitan"],
    answer: 1,
    explanation: "不客气 berarti sama-sama / jangan sungkan."
  },
  {
    id: 17,
    section: 'reading',
    question: "17. Nomor telepon '82304156' dibaca dalam pinyin:",
    options: [
      "bā èr sān líng sì yāo wǔ liù",
      "bā èr sān líng sì yī wǔ liù",
      "bā èr sān líng sì qī wǔ liù",
      "bā èr sān líng sì jiǔ wǔ liù"
    ],
    answer: 0,
    explanation: "Angka 1 pada nomor telepon dibaca 'yāo'."
  },
  {
    id: 18,
    section: 'reading',
    question: "18. Struktur '太热了' (tài rè le) berarti:",
    options: ["Sangat dingin", "Terlalu panas", "Sedang hujan", "Tidak lapar"],
    answer: 1,
    explanation: "太...了 = terlalu; 热 = panas."
  },
  {
    id: 19,
    section: 'reading',
    question: "19. Partikel '吗' (ma) diletakkan di:",
    options: ["Awal kalimat", "Tengah kalimat", "Akhir kalimat untuk membentuk pertanyaan", "Sebelum subjek"],
    answer: 2,
    explanation: "Partikel 吗 diletakkan di akhir kalimat deklaratif untuk menjadikannya kalimat tanya."
  },
  {
    id: 20,
    section: 'reading',
    question: "20. Hubungan kalimat '我是坐出租车来的' menekankan pada:",
    options: ["Waktu kedatangan", "Moda transportasi kedatangan (naik taksi)", "Tempat tujuan", "Orang yang diajak"],
    answer: 1,
    explanation: "Pola 是...的 di sini menekankan moda 坐出租车 (naik taksi)."
  }
];
