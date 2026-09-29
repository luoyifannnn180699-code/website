import { createServer as createHttpServer } from 'node:http';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import {
  searchLidiaGrammarKB,
  formatGrammarForPrompt,
  formatGrammarForReply,
} from './src/data/lidiaAdvancedGrammarKB';
import { HSK1_COMPLETE_GRAMMAR } from './src/data/hskGrammarComplete';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// System instruction grounded in Official HSK 1-9 Syllabus, MandarinMe, DigMandarin, ChineseGrammar.app & AllSet Learning Chinese Grammar Wiki
const LIDIA_SYSTEM_INSTRUCTION = `Anda adalah Lidia (🐼 丽迪娅老师), Tutor AI Bahasa Mandarin & Pakar Tata Bahasa Mandarin yang ramah, sabar, cerdas, dan berpengetahuan luas setara Native Master & Penguji HSK (Level HSK 1 hingga HSK 9 & CEFR A1–C2).

BASIS PENGETAHUAN UTAMA ANDA MENCANGKUP:
1. **MandarinMe Kumpulan Grammar HSK 1, 2, 3, 4, dan 5 Lengkap**:
   - **HSK 1**: Kalimat dasar S+V+O, 是, 吗, 什么, 谁, 的, 呢, 几, Angka 1–100 (二 vs 两), 了, 多大 vs 几岁, 会, 很, 怎么, Kalender, 去, 想, 多少, Kata Satuan (个/口/本/块), Uang/Harga, 在 (kerja & preposisi), 哪儿 vs 哪里, 有/没有, 和, 能, 请, Waktu, 前/以前, 后/以后, 怎么样, 太...了, 喂, 在...呢, Nomor Telepon (angka 1 = yāo), 吧, 啊, 都, 是...的, 也, 叫, 为什么, 一些 vs 一点儿, 那 vs 哪.
   - **HSK 2**: 要 vs 想, 最, 几 & 多 (perkiraan), Tanya Positif-Negatif (V不V / V没V), 每...都..., 多+Adj (多高/多远), 一下 & Reduplikasi Kata Kerja (AA/ABAB), 真, 是...的, ...的时候, 已经...了, 就, 还, 有点儿, 因为...所以..., 虽然...但是..., Preposisi (离/从/往/对/给), Perbandingan (比 / 没有 / 跟...一样), Aspek (着, 过, 要...了 / 快要...了), 次 vs 遍, Pelengkap Hasil (完/好/懂/见 vs 到), Kalimat larangan (别...了 / 不要...了).
   - **HSK 3**: Pelengkap Arah Majemuk (出来/进去/回来/下去/起来), Pelengkap Potensial (听得懂/买不起/来不及/受不了), 越来越 & 越A越B, 刚 vs 刚才, 半/刻/差, 又 vs 再, 就 vs 才, Kalimat 把 (把字句), Kalimat Pasif 被 (被字句) & 使/叫/让, 一边...一边..., 先...再...然后..., 除了...以外 (都/还/也), 如果...就..., 只要...就..., 只有...才..., 关于, 的 vs 得 vs 地, 一直 vs 总是, 终于, 几乎, 比较, 以前/以后/然后/后来.
   - **HSK 4**: 不仅...而且..., 即使...也..., 尽管...但是..., 不管/无论...都..., 既然...就..., 连...都/也..., 并+不/没, 难道, 到底, 竟然, 却 vs 但是, 以为 vs 认为, 原来 vs 本来, 差不多 vs 几乎, 往往 vs 经常, 千万, 恐怕, 对...来说 vs 对于, 随着, 否则, 既...又..., 值得, 倍.
   - **HSK 5**: 宁可...也不..., 反而, 毕竟, 何况, 简直, 幸亏 vs 多亏, 何必, 不如, 万一, 一旦, 为...所..., 非...不可, 趁, 凭, 自从...以来, 舍不得, 干脆, Adj+得不得了/得要命/得不行, 极其, 可见, 居然, 各自, 纷纷.
2. **DigMandarin HSK 6 Grammar**:
   - 上下 (ruang, anggota keluarga/organisasi, perkiraan angka, 不相上下), 人家 (rénjia vs rénjiā), Kata Satuan 番 (fān & 翻两番 = 4x lipat), 不妨 (bùfáng), 明明 (míngmíng), 偏偏 (piānpiān), 连同 (liántóng), 而已 (éryǐ), Kalimat Pivot 嫌 (xián), 不免 vs 未免, 时而 vs 不时, 特意 vs 故意 vs 特别, 以致 vs 以至, 虽然 vs 固然 (...固然...但是/也...), 反之, 凡是...都..., 鉴于..., ...以免..., 到...为止.
3. **ChineseGrammar.app HSK 7, HSK 8, HSK 9 (Standar HSK 3.0) & Deep-Dive Comparisons**:
   - **HSK 7**: 历来, Kata satuan 栋/粒/枚/则/盏, 何必, (要)V就V个补语, 因…故…, 必定, 别提(有)多X了, 比起…来, 不妨, 不由得, 趁, 除此之外, 反倒, 即, 极为, 继而.
   - **HSK 8**: 频频, 一连, 爱A不A, 按说, 巴不得, 白白, 半A半B, 别提了, 别管…都…, 当着…的面, 东A西B, 而已, 凡, 非A非B, 怪不得.
   - **HSK 9**: 把+施事+动词+了, 此后, 起初…才…, 莫非, …而…则…, …以…, A+形容词+于+B, 被…所…, 别说…连…也/都, V+个不停/个没完, 固然…也…, 何苦…呢, 话是这么说，不过…, 鉴于… (tanpa 了!).
   - **6 Perbandingan Utama ChineseGrammar.app (Model, Choose the Right Context, Respect the Boundary, Repair the Pattern)**:
     * **有点儿 vs 一点儿**: 有点儿 + Adj (keluhan halus: 有点儿贵) vs Adj + 一点儿 (perbandingan/permintaan: 便宜一点儿) & 一点儿 + Kata Benda (一点儿水).
     * **一...就...**: Begitu A langsung B (我一到家就睡觉); wajib menyertakan 一 dan 就, serta tidak boleh menambah kata satuan setelah 一.
     * **还是 vs 或者**: 还是 untuk kalimat tanya pilihan (你喝茶还是咖啡？) vs 或者 untuk kalimat pernyataan (喝茶或者咖啡都行).
     * **会 vs 能 vs 可以**: 会 (keahlian hasil belajar / masa depan), 能 (kemampuan fisik / situasi memungkinkan), 可以 (izin / kebolehan).
     * **的 vs 得 vs 地**: 的 + Kata Benda (我的书), Kata Sifat + 地 + Kata Kerja (认真地学习), Kata Kerja + 得 + Pelengkap Derajat (跑得很快).
     * **不 vs 没**: 不 untuk kebiasaan, sifat, perasaan, keinginan, dan masa depan (我不喝咖啡) vs 没(有) untuk aksi lampau yang belum terjadi dan kepemilikan 有 (我没吃饭 — 没 tidak pernah digabung dengan 了!).
4. **AllSet Learning Chinese Grammar Wiki (CEFR A1, A2, B1, B2, C1, C2)**:
   - Sistem 6 Pelengkap Kata Kerja (补语: Hasil, Arah, Potensial, Derajat, Durasi, Frekuensi), Kata Kerja Pisah-Gabung (离合词: 见面, 睡觉, 帮忙, 结婚, 生气 — sisipkan objek/durasi di tengah!), Kalimat Topik-Komentar, dan Idiom Empat Karakter (成语 Chéngyǔ).

PRINSIP PENGAJARAN LIDIA:
1. Sapaan hangat sebagai Lidia (🐼 丽迪娅老师).
2. Saat menjelaskan Grammar / Perbedaan Kata, sajikan secara sistematis:
   - **📐 Rumus / Pola Struktur (Model)**
   - **🎯 Konteks Penggunaan (Choose the Right Context)**
   - **⚠️ Batasan & Koreksi Kesalahan Umum (Respect the Boundary & Repair the Pattern)**: Tunjukkan kalimat yang SALAH (❌) dan perbaikannya yang BENAR (✅) beserta alasannya.
   - **💬 Contoh Kalimat Konkret** lengkap dengan Hanzi, Pinyin bernada, dan Terjemahan Indonesia.
3. Di akhir penjelasan, ajak murid mencoba membuat 1 kalimat latihan dan semangati dengan *Jiāyóu!* (加油!).`;

// Local intelligent response engine in case of offline/network issues
function getIntelligentLocalReply(prompt: string, history?: any[]): string {
  // First check our comprehensive HSK 1-9 & AllSet Learning Grammar Knowledge Base
  const kbMatches = searchLidiaGrammarKB(prompt);
  if (kbMatches.length > 0) {
    return formatGrammarForReply(kbMatches[0]);
  }

  // Also check our 56 HSK 1 Grammar Points from MandarinMe
  const qLower = prompt.trim().toLowerCase();
  const hsk1Match = HSK1_COMPLETE_GRAMMAR.find(
    (g) =>
      g.rule.toLowerCase().includes(qLower) ||
      (g.formula && g.formula.toLowerCase().includes(qLower))
  );
  if (hsk1Match) {
    const notesTxt = (hsk1Match.notes || []).map((n) => `• ${n}`).join('\n');
    const exTxt = (hsk1Match.examples || [])
      .map((ex) => `• **${ex.hanzi}** (${ex.pinyin}) — *"${ex.translation}"*`)
      .join('\n');
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Berikut penjelasan lengkap mengenai **${hsk1Match.rule}** (*Bab ${hsk1Match.chapterId} HSK 1 — Kategori: ${hsk1Match.category}*):

📐 **Rumus / Pola Kalimat:**
\`${hsk1Match.formula || '-'}\`

📖 **Penjelasan Lengkap:**
${hsk1Match.desc}

${notesTxt ? `💡 **Catatan Penting & Tips:**\n${notesTxt}\n\n` : ''}💬 **Contoh Kalimat:**
${exTxt || hsk1Match.example}

Semoga membantu! Coba buat 1 kalimat dengan pola ini ya, Lidia siap mengoreksi. 加油 (Jiāyóu)!`;
  }

  const combined = (
    (history ? history.map((h: any) => h.content || '').join(' ') : '') + ' ' + prompt
  ).toLowerCase();

  // 1. Difference between 怎么 (zěnme) and 怎么样 (zěnmeyàng)
  if (
    (combined.includes('怎么') && combined.includes('怎么样')) ||
    (combined.includes('zenme') && combined.includes('zenmeyang')) ||
    (combined.includes('beda') && (combined.includes('怎么') || combined.includes('zenme'))) ||
    (combined.includes('perbedaan') && (combined.includes('怎么') || combined.includes('zenme'))) ||
    (prompt.toLowerCase().trim() === 'perbedaannya' && combined.includes('怎么'))
  ) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Pertanyaan Anda sangat tepat dan sering menjadi materi penting dalam ujian HSK! Berikut adalah perbedaan mendasar antara **怎么 (zěnme)** dan **怎么样 (zěnmeyàng)** berdasarkan pedoman resmi tata bahasa HSK:

---

### 1. 怎么 (zěnme) — "Bagaimana cara..." / "Kenapa..."
**Fungsi Utama:**
• Menanyakan **cara/proses** melakukan suatu tindakan (posisinya diletakkan **sebelum kata kerja**).
• Menanyakan **alasan/sebab** terjadinya sesuatu dengan nada heran atau bertanya (artinya mirip *kenapa/mengapa*).

📌 **Rumus Pola Kalimat:**
\`Subjek + 怎么 + Kata Kerja (Verb) + Objek?\`

💡 **Contoh Kalimat:**
1. **这个字怎么读？**
   *Pinyin:* Zhège zì zěnme dú?
   *Arti:* Karakter ini dibacanya bagaimana? *(menanyakan cara)*
2. **去火车站怎么走？**
   *Pinyin:* Qù huǒchēzhàn zěnme zǒu?
   *Arti:* Bagaimana cara pergi ke stasiun kereta? *(menanyakan rute/cara)*
3. **你今天怎么没来上课？**
   *Pinyin:* Nǐ jīntiān zěnme méi lái shàngkè?
   *Arti:* Kenapa hari ini kamu tidak datang masuk kelas? *(menanyakan alasan/keheranan)*

---

### 2. 怎么样 (zěnmeyàng) — "Bagaimana keadaannya..." / "Bagaimana menurutmu?"
**Fungsi Utama:**
• Menanyakan **kondisi, situasi, atau kualitas** seseorang/benda.
• Meminta **pendapat, saran, atau persetujuan** dari lawan bicara.
• Posisinya biasanya berada di **akhir kalimat** atau setelah kata benda.

📌 **Rumus Pola Kalimat:**
\`(Hal / Topik yang ditanyakan) + 怎么样?\`
\`(Usulan/Ide aktivitas) + ，怎么样?\`

💡 **Contoh Kalimat:**
1. **今天天气怎么样？**
   *Pinyin:* Jīntiān tiānqì zěnmeyàng?
   *Arti:* Bagaimana cuaca hari ini? *(menanyakan kondisi)*
2. **你觉得这本书怎么样？**
   *Pinyin:* Nǐ juéde zhè běn shū zěnmeyàng?
   *Arti:* Menurutmu bagaimana buku ini? *(menanyakan pendapat/kualitas)*
3. **明天我们一起去喝奶茶，怎么样？**
   *Pinyin:* Míngtiān wǒmen yìqǐ qù hē nǎichá, zěnmeyàng?
   *Arti:* Besok kita pergi minum milk tea bersama, bagaimana menurutmu? *(mengajak/meminta persetujuan)*

---

### 📊 Tabel Perbandingan Singkat (Cheat Sheet)

| Aspek | 怎么 (zěnme) | 怎么样 (zěnmeyàng) |
| :--- | :--- | :--- |
| **Arti Utama** | Bagaimana cara... / Kenapa... | Bagaimana keadaannya... / Bagaimana kalau... |
| **Fokus Pertanyaan** | Cara kerja / proses tindakan / alasan | Kondisi, kualitas, atau meminta opini/saran |
| **Posisi Kalimat** | **Sebelum kata kerja** (怎么 + V) | **Di akhir kalimat** atau predikat |
| **Tingkat HSK** | HSK 1 | HSK 1 |

💡 **Tips Cepat dari Lidia:**
Ingat rumus mudah ini:
• Mau tanya **cara / proses**? Gunakan **怎么** (contoh: *怎么写?* = bagaimana tulisnya?).
• Mau tanya **kondisi / usulan**? Gunakan **怎么样** (contoh: *好不好？怎么样？* = bagaimana kondisinya/sarannya?).

Semoga penjelasan Lidia ini membantu! Ada contoh kalimat atau tata bahasa HSK lain yang ingin kamu tanyakan? *Jiāyóu!* (加油！)`;
  }

  // 2. 会 (huì) vs 能 (néng) vs 可以 (kěyǐ)
  if (combined.includes('会') && (combined.includes('能') || combined.includes('可以'))) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Perbedaan ketiga kata bantu (能愿动词) ini adalah topik klasik dalam kurikulum HSK:

1. **会 (huì) — Kemampuan Hasil Belajar:**
   • Menunjukkan keahlian yang diperoleh dari proses belajar atau latihan.
   • *Contoh:* 我会说汉语。(Wǒ huì shuō Hànyǔ - Saya bisa bicara bahasa Mandarin karena pernah belajar).

2. **能 (néng) — Kemampuan Fisik / Kondisi Memungkinkan:**
   • Menunjukkan potensi fisik atau situasi yang mengizinkan secara objektif.
   • *Contoh:* 我今天身体好，能跑五公里。(Wǒ jīntiān shēntǐ hǎo, néng pǎo wǔ gōnglǐ - Hari ini tubuh saya fit, saya bisa lari 5 km).

3. **可以 (kěyǐ) — Izin / Kebolehan:**
   • Menyatakan izin (boleh) atau saran alternatif.
   • *Contoh:* 我可以坐这儿吗？(Wǒ kěyǐ zuò zhèr ma? - Bolehkah saya duduk di sini?).`;
  }

  // 3. 二 (èr) vs 两 (liǎng)
  if (
    (combined.includes('二') && combined.includes('两')) ||
    (combined.includes('er') && combined.includes('liang'))
  ) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Berikut perbedaan aturan pemakaian **二 (èr)** dan **两 (liǎng)**:

1. **两 (liǎng)**: Digunakan untuk **menghitung jumlah/kuantitas** yang diikuti oleh kata bantu bilangan (量词 liàngcí).
   • *Rumus:* 两 + Kata Ukur + Kata Benda
   • *Contoh:* 两个人 (liǎng ge rén - dua orang), 两本书 (liǎng běn shū - dua buku), 两块钱 (liǎng kuài qián - dua yuan).

2. **二 (èr)**: Digunakan untuk **menyebutkan urutan, nomor, pecahan, dan angka matematika**.
   • *Contoh:* 第二 (dì-èr - yang kedua), 二月 (èryuè - bulan Februari), 星期二 (xīngqī'èr - hari Selasa), 二十二 (èrshí'èr - 22), 电话号码 (nomor telepon).`;
  }

  // 4. 的 (de) vs 得 (de) vs 地 (de)
  if (combined.includes('的') && (combined.includes('得') || combined.includes('地'))) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Tiga partikel struktural "de" (白勺的, 双人得, 土也地) memiliki fungsi yang sangat spesifik:

1. **的 (de) — Modifikasi Kata Benda (Nomina):**
   • *Pola:* Kata Sifat / Pemilik + 的 + Kata Benda
   • *Contoh:* 我的书 (buku saya), 漂亮的衣服 (baju yang cantik).

2. **得 (de) — Komplemen Derajat / Hasil (setelah Kata Kerja/Sifat):**
   • *Pola:* Kata Kerja + 得 + Derajat / Keterangan
   • *Contoh:* 跑得很快 (berlari dengan sangat cepat), 说得很好 (berbicara dengan sangat baik).

3. **地 (de) — Keterangan Cara (sebelum Kata Kerja):**
   • *Pola:* Kata Sifat/Keterangan + 地 + Kata Kerja
   • *Contoh:* 慢慢地走 (berjalan secara perlahan), 认真地听 (mendengarkan secara sungguh-sungguh).`;
  }

  // 5. 不 (bù) vs 没 (méi)
  if (combined.includes('不') && combined.includes('没')) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Perbedaan kata negasi **不 (bù)** dan **没 / 没有 (méi / méiyǒu)**:

1. **不 (bù)**:
   • Menyangkal kebiasaan, kehendak diri, masa kini, masa depan, atau kata sifat.
   • *Contoh:* 我不去 (Saya tidak mau/akan pergi), 我不是学生 (Saya bukan siswa), 今天不冷 (Hari ini tidak dingin).

2. **没 / 没有 (méi / méiyǒu)**:
   • Menyangkal fakta yang sudah atau belum terjadi di masa lalu.
   • Menyangkal kepemilikan (tidak punya).
   • *Contoh:* 我没去学校 (Saya tidak/belum pergi ke sekolah), 我没有书 (Saya tidak punya buku).`;
  }

  // 6. Idiom (成语 Chéngyǔ)
  if (combined.includes('成语') || combined.includes('idiom') || combined.includes('peribahasa')) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Dalam Bahasa Mandarin tingkat lanjut (HSK 5 s/d HSK 7-9), **成语 (Chéngyǔ)** adalah ungkapan 4 karakter yang padat filosofi dan sejarah:

1. **画蛇添足 (huà shé tiān zú)**:
   • *Arti:* Menggambar ular lalu menambahkan kaki.
   • *Makna:* Melakukan hal berlebihan yang justru merusak hasil baik.

2. **入乡随俗 (rù xiāng suí sú)**:
   • *Arti:* Masuk ke desa ikuti adatnya.
   • *Makna:* Di mana bumi dipijak, di situ langit dijunjung (adaptif terhadap lingkungan baru).

3. **温故知新 (wēn gù zhī xīn)**:
   • *Arti:* Mengulang pelajaran lama untuk memperoleh pemahaman baru.
   • *Makna:* Pentingnya meninjau kembali ilmu yang telah dipelajari!

Ingin mempelajari cerita di balik salah satu peribahasa tersebut? Lidia siap menceritakannya!`;
  }

  // 7. General Grammatical overview
  if (combined.includes('tata bahasa') || combined.includes('grammar') || combined.includes('rumus') || combined.includes('pola')) {
    return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Berikut 4 Fondasi Utama Tata Bahasa Mandarin berdasarkan Silabus Resmi HSK:

1. **Pola Kalimat Dasar:**
   \`Subjek + Keterangan Waktu + Tempat + Kata Kerja + Objek\`
   *Contoh:* 我明天在学校学汉语。(Wǒ míngtiān zài xuéxiào xué Hànyǔ - Saya besok belajar Mandarin di sekolah).

2. **Predikat Kata Sifat (Tanpa 是):**
   Kalimat deskriptif langsung menggunakan kata penguat (很, 非常, 太) tanpa 是.
   *Benar:* 我很好 (Wǒ hěn hǎo). *Salah:* 我是好.

3. **Struktur Penekanan 是...的:**
   Dipakai untuk mengonfirmasi rincian masa lalu (waktu, tempat, alat transportasi).
   *Contoh:* 我是坐飞机来的。(Wǒ shì zuò fēijī lái de - Saya datangnya naik pesawat).

4. **Kata Partikel Kalimat:**
   • **吗 (ma)**: Pembentuk kalimat tanya Ya/Tidak (你好吗？).
   • **呢 (ne)**: Menanyakan kembali atau aksi sedang berlangsung (你呢？ / 我在看书呢).
   • **了 (le)**: Perubahan situasi baru atau aksi selesai (下雨了 / 我吃饭了).`;
  }

  // Default fallback from Lidia
  return `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.

Mengenai pertanyaan Anda: **"${prompt}"**

Dalam pedoman kurikulum resmi HSK:
• **Karakter & Kosakata**: Setiap kata memiliki padanan Pinyin bernada (声调), radikal dasar (部首), dan tata letak gramatikalnya dalam kalimat.
• **Penerapan Praktis**: Bahasa Mandarin mengutamakan urutan logika waktu dan konteks situasi.

Apakah Anda ingin Lidia memberikan:
1. Penjelasan detail arti kata & asal-usulnya?
2. Rumus dan posisi dalam pola kalimat?
3. Contoh percakapan nyata dan latihan soal?

Silakan sebutkan bagian mana yang ingin kita bahas lebih dalam! Lidia siap menemani sampai mahir. 加油 (Jiāyóu)!`;
}

// Server-side AI Tutor Endpoint with Multi-Model Cascade
app.post('/api/chat', async (req, res) => {
  const { prompt, history } = req.body;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const ai = getAIClient();
  if (ai) {
    // Model candidates: prioritize gemini-3-flash-preview and gemini-3.1-flash-lite-preview
    const modelCandidates = ['gemini-3-flash-preview', 'gemini-3.1-flash-lite-preview', 'gemini-2.5-flash'];

    // Retrieve relevant grammar references from Lidia KB (HSK 1-9, MandarinMe, DigMandarin, ChineseGrammar.app, AllSet Wiki)
    const matchedGrammar = searchLidiaGrammarKB(prompt);
    const ragContext = formatGrammarForPrompt(matchedGrammar);
    const enrichedSystemInstruction = ragContext
      ? `${LIDIA_SYSTEM_INSTRUCTION}\n\n=== REFERENSI DATA GRAMMAR SPESIFIK UNTUK PERTANYAAN INI ===\n${ragContext}`
      : LIDIA_SYSTEM_INSTRUCTION;

    // Format multi-turn history if present
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const h of history.slice(-6)) {
        if (h && typeof h.content === 'string') {
          contents.push({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    for (const model of modelCandidates) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: enrichedSystemInstruction,
            temperature: 0.65,
          }
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (err: any) {
        console.warn(`Model ${model} unavailable or error:`, err?.message || err);
        // Continue to next candidate
      }
    }
  }

  // If live AI call failed or no API key, use comprehensive built-in Lidia knowledge engine
  const fallbackReply = getIntelligentLocalReply(prompt, history);
  return res.json({ reply: fallbackReply });
});

async function startServer() {
  const httpServer = createHttpServer(app);

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
