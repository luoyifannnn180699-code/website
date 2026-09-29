import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  Volume2,
  Lightbulb,
  Brain,
  RefreshCw,
  Award,
  BookOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Layers
} from 'lucide-react';
import { speechEngine } from '../services/speech';
import {
  LIDIA_GRAMMAR_KB,
  LIDIA_GRAMMAR_LEVELS,
  searchLidiaGrammarKB,
  formatGrammarForReply,
  LidiaGrammarEntry
} from '../data/lidiaAdvancedGrammarKB';
import { HSK1_COMPLETE_GRAMMAR } from '../data/hskGrammarComplete';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AITutorView: React.FC<{ audioSpeed: number }> = ({ audioSpeed }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Nǐ hǎo! 🐼 Saya **Lidia (丽迪娅老师)**, Tutor AI Bahasa Mandarin Anda yang kini telah ditingkatkan dengan basis pengetahuan **HSK 1 hingga HSK 9 (Standar HSK 3.0)** & **AllSet Learning Chinese Grammar Wiki (CEFR A1–C2)**!

Sumber referensi tata bahasa yang saya kuasai secara mendalam:
• **Perbandingan Populer (ChineseGrammar.app)**: **有点儿 vs 一点儿**, **一...就...**, **还是 vs 或者**, **会 vs 能 vs 可以**, **的 vs 得 vs 地**, **不 vs 没**, **就 vs 才**, **又 vs 再**.
• **MandarinMe HSK 1 – HSK 5 Lengkap**: Seluruh pola kalimat, preposisi (*离/从/往/对*), kalimat **把** & pasif **被**, hingga konjungsi tingkat menengah-lanjut (*不仅...而且*, *既然...就*, *宁可...也不*, *非...不可*).
• **DigMandarin HSK 6**: Penggunaan **不妨**, **明明**, **偏偏**, **而已**, **上下**, **人家**, **番**, **嫌**, **鉴于**, **以免**, **固然**.
• **HSK 7, 8, 9 (Standar HSK 3.0 Terbaru)**: Struktur mahir seperti **历来**, **不由得**, **反倒**, **极为**, **继而**, **巴不得**, **按说**, **怪不得**, **莫非**, **…而…则…**.
• **AllSet Learning Grammar Wiki (A1–C1)**: Sistem 6 Pelengkap Kata Kerja (**补语 Bǔyǔ**) & Kata Kerja Pisah-Gabung (**离合词 Líhécí**).

Silakan ketik pertanyaan di kolom chat, klik tombol topik cepat, atau buka tab **📚 Ensiklopedia Grammar HSK 1–9** di atas!`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sub-view mode inside AI Lidia: 'chat' or 'encyclopedia'
  const [lidiaMode, setLidiaMode] = useState<'chat' | 'encyclopedia'>('chat');
  const [selectedLevel, setSelectedLevel] = useState<string>('Semua Level');
  const [kbSearch, setKbSearch] = useState<string>('');

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    // Ensure chat view is visible when sending a question
    setLidiaMode('chat');

    const newMsgs: Message[] = [...messages, { role: 'user', content: query }];
    setMessages(newMsgs);
    setInputVal('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          history: messages.slice(-6)
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      console.warn('Chat request failed, using Lidia local HSK 1-9 knowledge engine:', err);
      const kbMatches = searchLidiaGrammarKB(query);
      let reply = '';

      if (kbMatches.length > 0) {
        reply = formatGrammarForReply(kbMatches[0]);
      } else {
        const q = query.toLowerCase();
        const hsk1Match = HSK1_COMPLETE_GRAMMAR.find(
          (g) =>
            g.rule.toLowerCase().includes(q) ||
            (g.formula && g.formula.toLowerCase().includes(q))
        );

        if (hsk1Match) {
          const notesTxt = (hsk1Match.notes || []).map((n) => `• ${n}`).join('\n');
          const exTxt = (hsk1Match.examples || [])
            .map((ex) => `• **${ex.hanzi}** (${ex.pinyin}) — *"${ex.translation}"*`)
            .join('\n');
          reply = `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.\n\nBerikut penjelasan lengkap mengenai **${hsk1Match.rule}** (*Bab ${hsk1Match.chapterId} HSK 1*):\n\n📐 **Rumus:** \`${hsk1Match.formula || '-'}\`\n\n📖 **Penjelasan:**\n${hsk1Match.desc}\n\n${notesTxt ? `💡 **Catatan Penting:**\n${notesTxt}\n\n` : ''}💬 **Contoh Kalimat:**\n${exTxt || hsk1Match.example}`;
        } else {
          reply = `Halo! Saya **Lidia**, Tutor AI Bahasa Mandarin Anda 🐼.\n\nMengenai pertanyaan Anda: **"${query}"**\nSilakan tanyakan topik spesifik (misalnya: *有点儿 vs 一点儿*, *一...就...*, *还是 vs 或者*, *会 vs 能 vs 可以*, *的 vs 得 vs 地*, *不 vs 没*, *把字句*, atau *HSK 2–9*) dan Lidia siap memberikan rumus, koreksi kesalahan umum, serta contoh kalimatnya! 加油 (Jiāyóu)!`;
        }
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeakText = (txt: string) => {
    const cleanText = txt.replace(/[*_#`]/g, '');
    speechEngine.speak(cleanText, audioSpeed);
  };

  // Filtered entries for the Encyclopedia tab
  const filteredKB: LidiaGrammarEntry[] = LIDIA_GRAMMAR_KB.filter((entry) => {
    const matchLevel = selectedLevel === 'Semua Level' || entry.level === selectedLevel;
    const q = kbSearch.trim().toLowerCase();
    if (!q) return matchLevel;
    const inTitle = entry.title.toLowerCase().includes(q);
    const inFormula = entry.formula.toLowerCase().includes(q);
    const inSummary = entry.summary.toLowerCase().includes(q);
    const inKeywords = entry.keywords.some((k) => k.toLowerCase().includes(q));
    const inExamples = entry.examples.some(
      (ex) =>
        ex.hanzi.toLowerCase().includes(q) ||
        ex.pinyin.toLowerCase().includes(q) ||
        ex.translation.toLowerCase().includes(q)
    );
    return matchLevel && (inTitle || inFormula || inSummary || inKeywords || inExamples);
  });

  return (
    <div className="space-y-5">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-400">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Lidia AI Super Grammar Engine
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                HSK 1–6 + HSK 7–9 (3.0)
              </span>
              <span className="bg-sky-500/20 text-sky-300 border border-sky-400/40 text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                MandarinMe • DigMandarin • ChineseGrammar • AllSet Wiki (A1–C2)
              </span>
            </div>
            <h2 className="text-2xl font-black font-brand flex items-center gap-2">
              <span className="text-2xl">🐼</span>
              <span>Lidia (丽迪娅老师) — Pakar AI Bahasa Mandarin HSK 1–9</span>
            </h2>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Menguasai seluruh tata bahasa dari tingkat dasar HSK 1 hingga tingkat mahir HSK 9 & AllSet Learning Grammar Wiki: dilengkapi rumus struktur, pemilihan konteks (*Choose the Right Context*), batasan kesalahan umum (*Respect the Boundary & Repair the Pattern*), serta contoh kalimat berlafal native.
            </p>
          </div>

          {/* Mode Switcher: Chat vs Encyclopedia */}
          <div className="flex items-center gap-2 bg-slate-800/90 p-1.5 rounded-2xl border border-amber-400/40 shrink-0">
            <button
              onClick={() => setLidiaMode('chat')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                lidiaMode === 'chat'
                  ? 'bg-amber-400 text-slate-900 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat Tanya Lidia</span>
            </button>
            <button
              onClick={() => setLidiaMode('encyclopedia')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                lidiaMode === 'encyclopedia'
                  ? 'bg-amber-400 text-slate-900 shadow'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Pustaka Grammar HSK 1–9 ({LIDIA_GRAMMAR_KB.length} Materi)</span>
            </button>
          </div>
        </div>

        {/* Quick Topic Prompt Chips */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          <button
            onClick={() => handleSend('Jelaskan perbedaan 有点儿 (yǒudiǎnr) dan 一点儿 (yìdiǎnr) beserta rumus dan contoh kesalahannya!')}
            className="bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400 transition flex items-center gap-1 font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 有点儿 vs 一点儿
          </button>
          <button
            onClick={() => handleSend('Bagaimana cara menggunakan struktur 一...就... (yī... jiù...) yang benar beserta batasan kesalahannya?')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Lightbulb className="w-3.5 h-3.5" /> Pola 一...就...
          </button>
          <button
            onClick={() => handleSend('Apa perbedaan 还是 (háishì) dan 或者 (huòzhě) untuk mengatakan "atau" dalam Bahasa Mandarin?')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Lightbulb className="w-3.5 h-3.5" /> 还是 vs 或者
          </button>
          <button
            onClick={() => handleSend('Jelaskan perbedaan 会 (huì), 能 (néng), dan 可以 (kěyǐ) beserta contoh kalimat dan batasannya!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Lightbulb className="w-3.5 h-3.5" /> 会 vs 能 vs 可以
          </button>
          <button
            onClick={() => handleSend('Jelaskan perbedaan tiga partikel de: 的 vs 得 vs 地 beserta rumus dan perbaikan kesalahannya!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Layers className="w-3.5 h-3.5" /> 的 vs 得 vs 地
          </button>
          <button
            onClick={() => handleSend('Jelaskan perbedaan kata negasi 不 (bù) vs 没 (méi) beserta aturan mengapa 没 tidak boleh digabung dengan 了!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Brain className="w-3.5 h-3.5" /> 不 vs 没
          </button>
          <button
            onClick={() => handleSend('Jelaskan penggunaan kalimat 把 (把字句) dan kalimat pasif 被 (被字句) di HSK 3!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <BookOpen className="w-3.5 h-3.5" /> Kalimat 把 & 被 (HSK 3)
          </button>
          <button
            onClick={() => handleSend('Jelaskan grammar HSK 6: 不妨, 明明, 偏偏, dan 而已 beserta contoh kalimatnya!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Award className="w-3.5 h-3.5" /> Grammar HSK 6
          </button>
          <button
            onClick={() => handleSend('Jelaskan materi grammar tingkat mahir HSK 7, HSK 8, dan HSK 9 (seperti 巴不得, 怪不得, 鉴于, 莫非)!')}
            className="bg-white/10 hover:bg-white/20 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-amber-400/40 transition flex items-center gap-1 font-semibold"
          >
            <Award className="w-3.5 h-3.5" /> Grammar HSK 7–9
          </button>
        </div>
      </div>

      {/* MODE 1: INTERACTIVE CHAT WITH LIDIA */}
      {lidiaMode === 'chat' && (
        <div className="bg-white rounded-3xl p-5 shadow-md border border-amber-200 flex flex-col h-[560px]">
          {/* Messages Feed */}
          <div className="flex-grow overflow-y-auto space-y-4 p-2 custom-scrollbar">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-lg shadow shrink-0">
                    🐼
                  </div>
                )}

                <div
                  className={`p-4 rounded-3xl max-w-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm relative group ${
                    m.role === 'user'
                      ? 'bg-red-600 text-white rounded-tr-none'
                      : 'bg-amber-50/80 border border-amber-200 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {m.content}

                  {m.role === 'assistant' && (
                    <button
                      onClick={() => handleSpeakText(m.content)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 opacity-60 hover:opacity-100 transition shadow-xs"
                      title="Bacakan dengan Audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {m.role === 'user' && (
                  <div className="w-9 h-9 rounded-2xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    👤
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-lg shadow shrink-0 animate-bounce">
                  🐼
                </div>
                <div className="bg-amber-50 border border-amber-200 text-slate-600 p-3 rounded-2xl text-xs italic flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-600" />
                  Lidia sedang menyusun analisis grammar HSK 1–9 & AllSet Wiki untuk Anda...
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="mt-3 pt-3 border-t flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Tanyakan grammar HSK 1–9 ke Lidia (misal: 有点儿 vs 一点儿 / 一...就 / 还是 vs 或者 / 把 / 被 / 巴不得 / 鉴于)..."
              className="flex-grow border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600 shadow-inner"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isLoading}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-black px-5 py-3 rounded-2xl text-xs sm:text-sm transition shadow flex items-center gap-1.5 shrink-0"
            >
              <span>Kirim</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* MODE 2: ENCYCLOPEDIA GRAMMAR HSK 1-9 & ALLSET WIKI */}
      {lidiaMode === 'encyclopedia' && (
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-amber-200 space-y-5">
          {/* Search & Level Filter */}
          <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={kbSearch}
                onChange={(e) => setKbSearch(e.target.value)}
                placeholder="Cari grammar HSK 1–9 / AllSet Wiki (contoh: 有点儿, 一...就, 还是, 的得地, 把, 被, 宁可, 不妨, 巴不得, 鉴于, 补语)..."
                className="w-full bg-white border border-amber-300 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {LIDIA_GRAMMAR_LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedLevel === lvl
                      ? 'bg-red-600 text-white shadow'
                      : 'bg-white text-slate-700 border border-amber-300 hover:bg-amber-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Entries List */}
          <div className="space-y-4">
            {filteredKB.map((entry) => (
              <div
                key={entry.id}
                className="bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 p-5 rounded-3xl border-2 border-amber-300 space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                        {entry.level}
                      </span>
                      <span className="bg-slate-800 text-amber-300 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                        CEFR {entry.cefr}
                      </span>
                      <span className="bg-amber-200/80 text-amber-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        Sumber: {entry.source}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-black text-red-800 flex items-center gap-2 pt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{entry.title}</span>
                    </h3>
                  </div>

                  <button
                    onClick={() =>
                      handleSend(`Tolong jelaskan lebih detail dan berikan latihan soal tentang: ${entry.title}`)
                    }
                    className="bg-slate-900 hover:bg-red-700 text-amber-300 hover:text-white text-xs font-black px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 self-start shrink-0 shadow"
                  >
                    <span>🐼 Latihan Bersama Lidia</span>
                  </button>
                </div>

                {/* Formula */}
                <div className="bg-red-950 text-amber-300 px-4 py-3 rounded-2xl border border-amber-400/40">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-200/80 block mb-0.5">
                    📐 Rumus / Struktur Pola (Model):
                  </span>
                  <div className="font-mono font-bold text-xs sm:text-sm text-white">
                    {entry.formula}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {entry.summary}
                </p>

                {/* Contexts */}
                <div className="bg-white/90 border border-amber-200 rounded-2xl p-3.5 space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-red-700 block">
                    🎯 Konteks Penggunaan (Choose the Right Context):
                  </span>
                  <ul className="space-y-1 text-xs text-slate-800 font-medium list-disc list-inside">
                    {entry.usageContexts.map((ctx, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ctx}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Boundaries & Common Mistakes (if any) */}
                {entry.boundariesAndMistakes && entry.boundariesAndMistakes.length > 0 && (
                  <div className="bg-red-50/90 border border-red-200 rounded-2xl p-3.5 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      Batasan & Koreksi Kesalahan Umum (Respect the Boundary & Repair):
                    </span>
                    <div className="space-y-2">
                      {entry.boundariesAndMistakes.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white p-2.5 rounded-xl border border-red-100 text-xs space-y-0.5">
                          <div className="flex flex-wrap items-center gap-2 font-bold">
                            <span className="text-red-600 line-through">{m.wrong}</span>
                            <span className="text-slate-400">➔</span>
                            <span className="text-emerald-700">{m.right}</span>
                          </div>
                          <p className="text-[11px] text-slate-600">{m.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Examples */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {entry.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="bg-white p-3 rounded-2xl border border-amber-200 flex items-start justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="font-hanzi font-black text-base text-slate-900">
                          {ex.hanzi}
                        </div>
                        <div className="text-xs font-bold text-red-600">{ex.pinyin}</div>
                        <div className="text-xs text-slate-600 italic">"{ex.translation}"</div>
                      </div>
                      <button
                        onClick={() => speechEngine.speak(ex.hanzi, audioSpeed)}
                        className="bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl px-2 py-1 text-xs font-black shrink-0"
                        title="Dengarkan Kalimat"
                      >
                        🔊
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
