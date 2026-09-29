import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Play, 
  Sparkles, 
  PenTool, 
  Compass, 
  Share2, 
  Copy, 
  Check, 
  Bot, 
  Layers,
  Award,
  Search,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { TianziCanvas } from './components/TianziCanvas';
import { AudioRecorder } from './components/AudioRecorder';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { WorkbookView } from './components/WorkbookView';
import { ModelTestModal } from './components/ModelTestModal';
import { TeacherPortal } from './components/TeacherPortal';
import { AITutorView } from './components/AITutorView';
import { HSK_LESSONS } from './data/hskLessons';
import { HSK1_COMPLETE_GRAMMAR, GRAMMAR_CATEGORIES } from './data/hskGrammarComplete';
import { speechEngine } from './services/speech';
import { soundEffects } from './services/soundEffects';
import { dbService } from './services/db';
import { UserProfile } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('lessons');
  const [currentChapterIdx, setCurrentChapterIdx] = useState<number>(0);
  const [lessonSubTab, setLessonSubTab] = useState<'dialogue' | 'vocab' | 'grammar' | 'phonetics' | 'quiz'>('dialogue');
  const [audioSpeed, setAudioSpeed] = useState<number>(0.7);

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(dbService.getCurrentUser());
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [hasCopiedShare, setHasCopiedShare] = useState(false);

  // Tianzi canvas target char
  const [tianziTarget, setTianziTarget] = useState<string>('你');

  // Grammar filter & mode states
  const [grammarViewMode, setGrammarViewMode] = useState<'chapter' | 'all'>('chapter');
  const [grammarSearch, setGrammarSearch] = useState<string>('');
  const [grammarCategory, setGrammarCategory] = useState<string>('Semua Kategori');
  const [showTraditional, setShowTraditional] = useState<boolean>(true);

  // Quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizChecked, setQuizChecked] = useState<Record<number, boolean>>({});

  const currentLesson = HSK_LESSONS[currentChapterIdx] || HSK_LESSONS[0];

  useEffect(() => {
    setQuizAnswers({});
    setQuizChecked({});
  }, [currentChapterIdx]);

  const handleSelectChapter = (idx: number) => {
    setCurrentChapterIdx(idx);
    dbService.logActivity('COMPLETE_LESSON', `Membuka Bab ${idx + 1}: ${HSK_LESSONS[idx].title}`, idx + 1);
  };

  const handlePlayDialogue = (fullText: string) => {
    speechEngine.speak(fullText, audioSpeed);
    dbService.logActivity('PLAY_AUDIO', `Memutar dialog Bab ${currentLesson.id}`);
  };

  const handleQuizAnswer = (qIdx: number, optIdx: number, correctIdx: number) => {
    if (quizChecked[qIdx]) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    setQuizChecked((prev) => ({ ...prev, [qIdx]: true }));

    if (optIdx === correctIdx) {
      soundEffects.playSuccess();
      dbService.addStars(10);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch {
        // ignore
      }
    } else {
      soundEffects.playError();
    }
  };

  const handleGoToTianzi = (char: string) => {
    setTianziTarget(char);
    setActiveTab('canvas');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setHasCopiedShare(true);
    setTimeout(() => setHasCopiedShare(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 selection:bg-amber-300">
      {/* Top Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onLogout={() => {
          dbService.logout();
          setCurrentUser(null);
        }}
        audioSpeed={audioSpeed}
        setAudioSpeed={setAudioSpeed}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-grow w-full">
        {/* TAB 1: BUKU AJAR STANDARD COURSE (15 BAB) */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            {/* Chapter Hero Banner */}
            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-red-600 rounded-3xl p-5 md:p-6 shadow-lg text-slate-900 relative overflow-hidden border-2 border-amber-500">
              <div className="absolute -right-4 -bottom-6 text-8xl opacity-20 select-none pointer-events-none">
                🏮
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="bg-red-700 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    HSK 1 Standard Course (Buku Ajar Resmi Hanban)
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black mt-1 font-brand flex items-center gap-2">
                    Bab {currentLesson.id}: {currentLesson.title} ({currentLesson.pinyinTitle})
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-0.5">
                    "{currentLesson.translation}" • Kuasai percakapan, kosakata, tata bahasa, dan fonetik nada.
                  </p>
                </div>

                {/* Chapter Picker Dropdown */}
                <div className="w-full md:w-auto flex items-center gap-2">
                  <select
                    value={currentChapterIdx}
                    onChange={(e) => handleSelectChapter(Number(e.target.value))}
                    className="w-full md:w-80 bg-white text-slate-900 font-bold px-4 py-2.5 rounded-2xl shadow-md border-2 border-amber-600 focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer text-xs sm:text-sm"
                  >
                    {HSK_LESSONS.map((l, i) => (
                      <option key={l.id} value={i}>
                        Bab {l.id}: {l.title} - {l.translation}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => setIsShareOpen(true)}
                    className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/40 text-slate-900 transition shadow"
                    title="Bagikan Tautan Pelajaran"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Subtabs Navigation (Dialogue / Vocab / Grammar / Phonetics / Quiz) */}
            <div className="flex border-b-2 border-amber-300 gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-xs font-bold">
              {[
                { id: 'dialogue', label: 'Dialog (课文)', icon: BookOpen },
                { id: 'vocab', label: 'Kosakata (生词)', icon: Layers },
                { id: 'grammar', label: 'Tata Bahasa (语法)', icon: Compass },
                { id: 'phonetics', label: 'Pelafalan & Nada (拼音)', icon: Volume2 },
                { id: 'quiz', label: 'Kuis Bab (测试)', icon: HelpCircle }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setLessonSubTab(tab.id as typeof lessonSubTab)}
                    className={`px-4 py-2 rounded-t-2xl transition flex items-center gap-1.5 whitespace-nowrap ${
                      lessonSubTab === tab.id
                        ? 'bg-red-600 text-white shadow'
                        : 'bg-white text-slate-700 hover:bg-amber-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* SUBTAB 1: DIALOGUE (课文) */}
            {lessonSubTab === 'dialogue' && (
              <div className="space-y-6">
                {currentLesson.dialogues.map((dlg, dIdx) => {
                  const fullDialogueText = dlg.map((l) => l.hanzi).join(' ');
                  return (
                    <div
                      key={dIdx}
                      className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-amber-200 space-y-4"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2 border-b pb-3">
                        <span className="text-xs font-black text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
                          Dialog #{dIdx + 1}
                        </span>
                        <button
                          onClick={() => handlePlayDialogue(fullDialogueText)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-4 py-1.5 rounded-full text-xs transition shadow flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Putar Dialog Penuh 🔊</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {dlg.map((line, lIdx) => (
                          <div
                            key={lIdx}
                            className="flex items-start gap-3 bg-red-50/60 p-3.5 rounded-2xl border border-red-100 hover:bg-red-50 transition"
                          >
                            <div className="w-8 h-8 rounded-2xl bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow">
                              {line.speaker}
                            </div>
                            <div className="flex-grow space-y-0.5">
                              <div className="text-2xl font-hanzi font-black text-slate-900">
                                {line.hanzi}
                              </div>
                              <div className="text-red-600 font-bold text-xs">{line.pinyin}</div>
                              <div className="text-slate-600 text-xs italic">{line.translation}</div>
                            </div>
                            <button
                              onClick={() => speechEngine.speak(line.hanzi, audioSpeed)}
                              className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 flex items-center justify-center text-xs shadow shrink-0"
                              title="Dengarkan Baris Ini"
                            >
                              🔊
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* SUBTAB 2: VOCABULARY (生词) */}
            {lessonSubTab === 'vocab' && (
              <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <h3 className="text-lg font-bold text-red-700 flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    Daftar Kosakata Baru Bab {currentLesson.id} (生词)
                  </h3>
                  <span className="text-xs text-slate-500 font-bold">
                    {currentLesson.vocab.length} Kosakata
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                  {currentLesson.vocab.map((v, i) => (
                    <div
                      key={i}
                      className="bg-amber-50/80 rounded-2xl p-3.5 border border-amber-300 text-center hover:bg-amber-100 transition shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-3xl font-hanzi font-black text-slate-900 my-1">
                          {v.hanzi}
                        </div>
                        <div className="text-red-600 font-bold text-xs">{v.pinyin}</div>
                        <div className="text-slate-500 text-[10px] uppercase font-semibold">{v.pos}</div>
                        <div className="text-slate-700 text-xs mt-1 font-medium">{v.translation}</div>
                      </div>

                      <div className="mt-3 flex gap-1 justify-center">
                        <button
                          onClick={() => speechEngine.speak(v.hanzi, audioSpeed)}
                          className="bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-xs transition"
                        >
                          🔊 Dengar
                        </button>
                        <button
                          onClick={() => handleGoToTianzi(v.hanzi[0])}
                          className="bg-red-600 hover:bg-red-700 text-white rounded-full px-2.5 py-1 text-[11px] font-bold shadow-xs transition"
                          title="Tulis Karakter Ini di Kotak Tianzi Ge"
                        >
                          ✍️ Tulis
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBTAB 3: GRAMMAR (语法) */}
            {lessonSubTab === 'grammar' && (() => {
              const displayedGrammar = (grammarViewMode === 'chapter' ? currentLesson.grammar : HSK1_COMPLETE_GRAMMAR).filter((g) => {
                const matchCategory = grammarViewMode === 'chapter' || grammarCategory === 'Semua Kategori' || g.category === grammarCategory;
                const q = grammarSearch.trim().toLowerCase();
                if (!q) return matchCategory;
                const inRule = g.rule.toLowerCase().includes(q);
                const inDesc = g.desc.toLowerCase().includes(q);
                const inFormula = (g.formula || '').toLowerCase().includes(q);
                const inNotes = (g.notes || []).some((n) => n.toLowerCase().includes(q));
                const inExamples = (g.examples || []).some(
                  (ex) =>
                    ex.hanzi.toLowerCase().includes(q) ||
                    ex.pinyin.toLowerCase().includes(q) ||
                    ex.translation.toLowerCase().includes(q)
                );
                return matchCategory && (inRule || inDesc || inFormula || inNotes || inExamples);
              });

              return (
                <div className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-amber-200 space-y-5">
                  {/* Top Header & Mode Switcher */}
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-amber-200 pb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-red-700 flex items-center gap-2">
                        <Compass className="w-5 h-5" />
                        {grammarViewMode === 'chapter'
                          ? `Tata Bahasa Lengkap Bab ${currentLesson.id}: ${currentLesson.title} (语法)`
                          : `Kumpulan Lengkap Semua Grammar HSK 1 (${HSK1_COMPLETE_GRAMMAR.length} Materi)`}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        Dilengkapi penjelasan mendalam, rumus pola kalimat, catatan perbandingan, aksara Sederhana & Tradisional, Pinyin, serta audio native.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                      <button
                        onClick={() => setGrammarViewMode('chapter')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                          grammarViewMode === 'chapter'
                            ? 'bg-red-600 text-white shadow'
                            : 'bg-amber-50 text-slate-700 border border-amber-300 hover:bg-amber-100'
                        }`}
                      >
                        <span>📖 Grammar Bab {currentLesson.id} ({currentLesson.grammar.length})</span>
                      </button>
                      <button
                        onClick={() => setGrammarViewMode('all')}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                          grammarViewMode === 'all'
                            ? 'bg-red-600 text-white shadow'
                            : 'bg-amber-50 text-slate-700 border border-amber-300 hover:bg-amber-100'
                        }`}
                      >
                        <span>📚 Semua Kumpulan Grammar HSK 1 ({HSK1_COMPLETE_GRAMMAR.length})</span>
                      </button>
                      <button
                        onClick={() => setShowTraditional((prev) => !prev)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition border ${
                          showTraditional
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                        }`}
                        title="Tampilkan atau sembunyikan karakter Hanzi Tradisional"
                      >
                        {showTraditional ? '✓ Hanzi Tradisional: Aktif' : 'Hanzi Tradisional: Nonaktif'}
                      </button>
                    </div>
                  </div>

                  {/* Search & Category Filter Bar */}
                  <div className="flex flex-col md:flex-row gap-3 bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200">
                    <div className="relative flex-grow">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={grammarSearch}
                        onChange={(e) => setGrammarSearch(e.target.value)}
                        placeholder="Cari grammar (contoh: 是...的, 不 vs 没, 一点儿, 怎么, 呢, 几, 的, jam, harga)..."
                        className="w-full bg-white border border-amber-300 rounded-xl pl-9 pr-4 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    {grammarViewMode === 'all' && (
                      <div className="flex items-center gap-2 shrink-0">
                        <Filter className="w-4 h-4 text-red-600 shrink-0" />
                        <select
                          value={grammarCategory}
                          onChange={(e) => setGrammarCategory(e.target.value)}
                          className="bg-white border border-amber-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                        >
                          {GRAMMAR_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Grammar Cards List */}
                  {displayedGrammar.length === 0 ? (
                    <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <p className="text-sm font-bold text-slate-700">Tidak ditemukan materi grammar yang cocok dengan pencarian "{grammarSearch}".</p>
                      <button
                        onClick={() => {
                          setGrammarSearch('');
                          setGrammarCategory('Semua Kategori');
                        }}
                        className="text-xs font-bold text-red-600 underline hover:text-red-700"
                      >
                        Reset Pencarian & Filter
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {displayedGrammar.map((g, i) => (
                        <div
                          key={g.id || i}
                          className="bg-gradient-to-br from-amber-50/90 via-white to-orange-50/80 p-5 md:p-6 rounded-3xl border-2 border-amber-300 shadow-xs space-y-4"
                        >
                          {/* Top Badges & Rule Title */}
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              {g.chapterId && (
                                <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                  Bab {g.chapterId}
                                </span>
                              )}
                              {g.category && (
                                <span className="bg-amber-200/80 text-amber-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                                  {g.category}
                                </span>
                              )}
                            </div>

                            <h4 className="font-black text-red-800 text-base md:text-lg flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{g.rule}</span>
                            </h4>
                          </div>

                          {/* Formula Box */}
                          {g.formula && (
                            <div className="bg-red-950 text-amber-300 px-4 py-3 rounded-2xl border border-amber-400/50 shadow-inner">
                              <span className="text-[10px] font-black uppercase tracking-wider text-amber-200/80 block mb-0.5">
                                📐 Rumus / Pola Kalimat:
                              </span>
                              <div className="font-mono font-bold text-xs sm:text-sm text-white">
                                {g.formula}
                              </div>
                            </div>
                          )}

                          {/* Detailed Explanation */}
                          <div className="space-y-1.5">
                            <span className="text-[11px] font-black uppercase tracking-wider text-red-700 block">
                              📖 Penjelasan Lengkap:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                              {g.desc}
                            </p>
                          </div>

                          {/* Important Notes / Exceptions / Comparisons */}
                          {g.notes && g.notes.length > 0 && (
                            <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-3.5 space-y-1.5">
                              <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                Catatan Penting & Tips Penggunaan:
                              </span>
                              <ul className="space-y-1 text-xs text-slate-800 font-medium list-disc list-inside">
                                {g.notes.map((note, nIdx) => (
                                  <li key={nIdx} className="leading-relaxed">
                                    {note}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Detailed Examples List */}
                          {g.examples && g.examples.length > 0 ? (
                            <div className="space-y-2.5 pt-1">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                                💬 Contoh Kalimat & Pelafalan ({g.examples.length} Contoh):
                              </span>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {g.examples.map((ex, exIdx) => (
                                  <div
                                    key={exIdx}
                                    className="bg-white p-3.5 rounded-2xl border border-amber-200 hover:border-amber-400 transition flex items-start justify-between gap-3 shadow-2xs"
                                  >
                                    <div className="space-y-1">
                                      <div className="flex flex-wrap items-baseline gap-2">
                                        <span className="text-[10px] font-bold bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-200">
                                          Sederhana
                                        </span>
                                        <span className="font-hanzi font-black text-lg text-slate-900">
                                          {ex.hanzi}
                                        </span>
                                      </div>

                                      {showTraditional && ex.traditional && (
                                        <div className="flex flex-wrap items-baseline gap-2">
                                          <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                                            Tradisional
                                          </span>
                                          <span className="font-hanzi font-bold text-sm text-slate-700">
                                            {ex.traditional}
                                          </span>
                                        </div>
                                      )}

                                      <div className="text-xs font-bold text-red-600 pt-0.5">
                                        {ex.pinyin}
                                      </div>
                                      <div className="text-xs text-slate-700 font-semibold italic">
                                        "{ex.translation}"
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => speechEngine.speak(ex.hanzi, audioSpeed)}
                                      className="bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl px-2.5 py-1.5 text-xs font-black shadow-xs transition shrink-0 flex items-center gap-1"
                                      title="Dengarkan Contoh Kalimat Ini"
                                    >
                                      <span>🔊</span>
                                      <span className="hidden sm:inline">Dengar</span>
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="bg-white p-3 rounded-xl border border-amber-200 text-xs">
                              <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">
                                Contoh Kalimat:
                              </span>
                              <span className="font-hanzi font-bold text-base text-slate-900">{g.example}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* SUBTAB 4: PHONETICS & TONES (语音) */}
            {lessonSubTab === 'phonetics' && (
              <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 space-y-4">
                <h3 className="text-lg font-bold text-red-700 flex items-center gap-2 border-b pb-3">
                  <Volume2 className="w-5 h-5" />
                  Panduan Pelafalan & Pinyin Bab {currentLesson.id} (拼音与声调)
                </h3>

                <div className="space-y-3">
                  {currentLesson.phoneticsInfo.map((p, i) => (
                    <div key={i} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* Tone Soundboard */}
                <div className="pt-4 border-t">
                  <h4 className="font-bold text-slate-800 text-xs mb-2">Simulasi 4 Nada Pinyin (声调):</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { tone: 1, name: 'Nada 1 (ˉ) Tinggi Datar', ex: 'mā (妈)' },
                      { tone: 2, name: 'Nada 2 (ˊ) Naik Bertanya', ex: 'má (麻)' },
                      { tone: 3, name: 'Nada 3 (ˇ) Turun Lalu Naik', ex: 'mǎ (马)' },
                      { tone: 4, name: 'Nada 4 (ˋ) Hentak Turun', ex: 'mà (骂)' }
                    ].map((t) => (
                      <button
                        key={t.tone}
                        onClick={() => soundEffects.playTonePitch(t.tone)}
                        className="p-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-2xl text-left transition"
                      >
                        <div className="font-black text-red-600 text-xs">{t.name}</div>
                        <div className="text-[11px] text-slate-700 mt-1 font-bold">{t.ex}</div>
                        <div className="text-[10px] text-amber-700 mt-1">🔊 Bunyikan Nada</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUBTAB 5: QUIZ (测试) */}
            {lessonSubTab === 'quiz' && (
              <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 max-w-2xl mx-auto space-y-5">
                <div className="flex justify-between items-center border-b pb-3">
                  <h3 className="text-xl font-bold text-red-700 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Kuis Interaktif Bab {currentLesson.id}
                  </h3>
                  <span className="text-xs font-black bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    +10 Bintang per Jawaban Benar ⭐
                  </span>
                </div>

                <div className="space-y-4">
                  {currentLesson.quiz.map((q, qIdx) => {
                    const isChecked = quizChecked[qIdx];
                    const selected = quizAnswers[qIdx];
                    const isCorrect = selected === q.answer;

                    return (
                      <div key={qIdx} className="bg-amber-50/80 p-4 rounded-2xl border border-amber-300 space-y-3">
                        <p className="font-bold text-slate-800 text-xs sm:text-sm">
                          {qIdx + 1}. {q.q}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle = "bg-white hover:bg-amber-100 text-slate-800 border-amber-200";
                            if (isChecked) {
                              if (optIdx === q.answer) {
                                btnStyle = "bg-emerald-600 text-white border-emerald-700 font-bold shadow";
                              } else if (optIdx === selected) {
                                btnStyle = "bg-red-600 text-white border-red-700 font-bold shadow";
                              }
                            }
                            return (
                              <button
                                key={optIdx}
                                disabled={isChecked}
                                onClick={() => handleQuizAnswer(qIdx, optIdx, q.answer)}
                                className={`p-2.5 rounded-xl border text-xs text-left transition font-semibold shadow-xs ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {isChecked && (
                          <div className={`p-2 rounded-xl text-xs font-semibold ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {isCorrect ? 'Benar! Kerja bagus! 🌟' : 'Jawaban belum tepat.'}{' '}
                            {q.explanation && <span className="block mt-0.5 text-[11px]">{q.explanation}</span>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: BUKU LATIHAN WORKBOOK 1 */}
        {activeTab === 'workbook' && (
          <WorkbookView
            currentChapterId={currentLesson.id}
            onSelectChapter={(id) => setCurrentChapterIdx(id - 1)}
            onGoToTianzi={handleGoToTianzi}
            audioSpeed={audioSpeed}
          />
        )}

        {/* TAB 3: SIMULASI UJIAN HSK 1 */}
        {activeTab === 'exam' && <ModelTestModal audioSpeed={audioSpeed} />}

        {/* TAB 4: TIANZI GE CANVAS */}
        {activeTab === 'canvas' && (
          <TianziCanvas
            currentChapterId={currentLesson.id}
            availableCharacters={[
              tianziTarget,
              ...currentLesson.vocab.map((v) => v.hanzi[0]),
              ...currentLesson.charactersInfo.characters
            ]}
            audioSpeed={audioSpeed}
          />
        )}

        {/* TAB 5: AUDIO RECORDER */}
        {activeTab === 'recorder' && (
          <AudioRecorder
            currentChapterId={currentLesson.id}
            targetSentence={{
              hanzi: currentLesson.dialogues[0]?.[0]?.hanzi || '你好！',
              pinyin: currentLesson.dialogues[0]?.[0]?.pinyin || 'Nǐ hǎo!',
              translation: currentLesson.dialogues[0]?.[0]?.translation || 'Halo!'
            }}
            audioSpeed={audioSpeed}
          />
        )}

        {/* TAB 6: TUTOR AI */}
        {activeTab === 'ai-tutor' && <AITutorView audioSpeed={audioSpeed} />}

        {/* TAB 7: DASBOR ANALISIS DATA */}
        {activeTab === 'analytics' && <AnalyticsDashboard />}

        {/* TAB 8: PORTAL GURU */}
        {activeTab === 'teacher' && <TeacherPortal />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t-4 border-amber-400 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs space-y-1.5">
          <p className="font-bold text-slate-200 text-sm">
            Mandarin HSK 1 Standard Course & Workbook Platform
          </p>
          <p className="text-slate-400">
            Dilengkapi 15 Bab Materi Resmi, Latihan Workbook, Audio Native, Tulisan Tianzi Ge, Enkripsi PBKDF2/AES-256, dan Dasbor Analisis Data.
          </p>
          <p className="text-slate-500 pt-1">
            © 2026 Mandarin HSK 1 Interactive Learning System. All rights reserved.
          </p>
        </div>
      </footer>

      {/* MODALS */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
          soundEffects.playSuccess();
        }}
      />

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={currentUser}
        onUpdate={() => setCurrentUser(dbService.getCurrentUser())}
      />

      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-amber-400 text-center space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏮</span>
                <h3 className="font-extrabold text-base text-slate-900 font-brand">Bagikan ke Anak & Murid</h3>
              </div>
              <button
                onClick={() => setIsShareOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Anak-anak dapat membuka tautan ini langsung di HP, Tablet, atau Laptop tanpa perlu install aplikasi rumit.
            </p>

            {/* QR Code for quick phone/tablet scanning */}
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 inline-block mx-auto">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                  window.location.origin
                )}`}
                alt="QR Code Belajar Mandarin"
                className="w-36 h-36 mx-auto rounded-xl shadow-xs"
              />
              <span className="text-[10px] font-bold text-slate-600 block mt-1.5">
                📷 Arahkan Kamera HP / Tablet ke QR Code
              </span>
            </div>

            {/* Link Copy Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={window.location.origin}
                className="w-full bg-slate-100 border border-slate-300 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 font-bold"
              />
              <button
                onClick={handleCopyLink}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition shadow shrink-0 flex items-center gap-1"
              >
                {hasCopiedShare ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{hasCopiedShare ? 'Disalin!' : 'Salin'}</span>
              </button>
            </div>

            {/* Action Buttons: WhatsApp & Direct Web */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `Halo! Mari belajar Bahasa Mandarin HSK 1 seru dengan audio native, latihan menulis karakter Hanzi, dan kuis berhadiah bintang di sini: ${window.location.origin}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
              >
                <span>💬 Kirim ke WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Belajar Mandarin HSK 1',
                      text: 'Aplikasi interaktif belajar Mandarin HSK 1 dan Workbook untuk anak-anak!',
                      url: window.location.origin
                    }).catch(() => {});
                  } else {
                    handleCopyLink();
                  }
                }}
                className="py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan ke Sosmed</span>
              </button>
            </div>

            {/* Practical Guide for Kids & Parents */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 block text-xs">💡 Tips untuk Anak & Orang Tua:</span>
              <p>• <strong>Jadikan Ikon di HP:</strong> Buka di Chrome/Safari lalu pilih menu <em>"Tambahkan ke Layar Utama" (Add to Home Screen)</em>.</p>
              <p>• <strong>Akun Demo Cepat:</strong> Masuk memakai akun siswa <code>budi@siswa.edu</code> (1-klik di tombol masuk).</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
