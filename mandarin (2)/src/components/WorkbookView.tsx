import React, { useState, useMemo } from 'react';
import { 
  Headphones, 
  BookOpen, 
  Volume2, 
  CheckCircle2, 
  HelpCircle, 
  Award, 
  Sparkles, 
  PenTool,
  RefreshCw,
  Send,
  Layers,
  Filter,
  Check,
  SendHorizontal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_HSK_WORKBOOK_CHAPTERS } from '../data/hskWorkbookCombined';
import { speechEngine } from '../services/speech';
import { soundEffects } from '../services/soundEffects';
import { dbService } from '../services/db';
import { WorkbookQuestionItem } from '../types';

interface WorkbookViewProps {
  currentChapterId: number;
  onSelectChapter: (id: number) => void;
  onGoToTianzi: (char: string) => void;
  audioSpeed: number;
}

export const WorkbookView: React.FC<WorkbookViewProps> = ({
  currentChapterId,
  onSelectChapter,
  onGoToTianzi,
  audioSpeed
}) => {
  const baseExercise = ALL_HSK_WORKBOOK_CHAPTERS.find((w) => w.chapterId === currentChapterId) || ALL_HSK_WORKBOOK_CHAPTERS[0];
  const customQuestions = dbService.getCustomQuestions(currentChapterId);

  // Merge base questions and teacher uploaded custom questions
  const allQuestions = useMemo(() => {
    return [...baseExercise.questions, ...customQuestions];
  }, [baseExercise, customQuestions]);

  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'dasar' | 'menengah' | 'mahir'>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [answeredState, setAnsweredState] = useState<Record<number, boolean>>({});
  const [activeSection, setActiveSection] = useState<'all' | 'listening' | 'reading' | 'hanzi'>('all');
  const [isResultSentToTeacher, setIsResultSentToTeacher] = useState(false);

  const currentUser = dbService.getCurrentUser();
  const isCompleted = currentUser?.completedWorkbook.includes(baseExercise.chapterId);

  // Filter questions based on difficulty & section
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false;
      if (activeSection === 'listening' && q.type !== 'listening') return false;
      if (activeSection === 'reading' && q.type === 'listening') return false;
      return true;
    });
  }, [allQuestions, difficultyFilter, activeSection]);

  const handlePlayAudio = (text: string) => {
    speechEngine.speak(text, audioSpeed);
    dbService.logActivity('PLAY_AUDIO', `Mendengarkan audio soal Workbook Bab ${baseExercise.chapterId}`);
  };

  const handleSelectAnswer = (q: WorkbookQuestionItem, optIdx: number) => {
    if (answeredState[q.id]) return;

    setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
    setAnsweredState((prev) => ({ ...prev, [q.id]: true }));

    if (optIdx === q.answer) {
      soundEffects.playSuccess();
      dbService.addStars(5);
    } else {
      soundEffects.playError();
    }
  };

  const handleSendToTeacher = () => {
    const answeredCount = Object.keys(answeredState).length;
    if (answeredCount === 0) return;

    let correctCount = 0;
    const summary = allQuestions.map((q) => {
      const userChoiceIdx = selectedAnswers[q.id];
      const isCorrect = userChoiceIdx === q.answer;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        question: q.question,
        selected: userChoiceIdx !== undefined ? q.options[userChoiceIdx] : 'Tidak Dijawab',
        correct: q.options[q.answer],
        isCorrect
      };
    });

    const scorePercent = Math.round((correctCount / allQuestions.length) * 100);

    dbService.saveStudentWorkbookResult({
      studentId: currentUser?.id || 'guest',
      studentName: currentUser?.name || 'Siswa MandarIn',
      studentClass: currentUser?.kelas || 'SMP Kelas 7 GCC',
      chapterId: baseExercise.chapterId,
      totalQuestions: allQuestions.length,
      correctAnswers: correctCount,
      scorePercent,
      difficulty: difficultyFilter !== 'all' ? difficultyFilter : 'menengah',
      answersSummary: summary
    });

    setIsResultSentToTeacher(true);
    soundEffects.playStar();
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setAnsweredState({});
    setIsResultSentToTeacher(false);
  };

  const answeredTotal = Object.keys(answeredState).length;
  const correctTotal = Object.keys(answeredState).filter(
    (qId) => selectedAnswers[Number(qId)] === allQuestions.find((q) => q.id === Number(qId))?.answer
  ).length;

  return (
    <div className="space-y-6">
      {/* Chapter Title & Level Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-amber-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Buku Latihan Workbook 1 (15 Bab Lengkap)
              </span>
              <span className="bg-red-950/60 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/40">
                {allQuestions.length} Soal Latihan
              </span>
              {isCompleted && (
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Selesai
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 font-brand">
              {baseExercise.title}
            </h2>
            <p className="text-xs text-orange-100 mt-1 max-w-xl">
              {baseExercise.levelDesc}
            </p>
          </div>

          {/* Chapter Selector Dropdown */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/30">
            <span className="text-xs font-bold text-white pl-2">Pilih Bab:</span>
            <select
              value={baseExercise.chapterId}
              onChange={(e) => {
                onSelectChapter(Number(e.target.value));
                handleReset();
              }}
              className="bg-white text-slate-900 font-bold px-3 py-2 rounded-xl text-xs focus:outline-none cursor-pointer"
            >
              {ALL_HSK_WORKBOOK_CHAPTERS.map((w) => (
                <option key={w.chapterId} value={w.chapterId}>
                  Bab {w.chapterId}: {w.title.split(':')[1] || w.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Score Bar connected to Teacher */}
        <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap justify-between items-center text-xs gap-3">
          <div className="flex items-center gap-3">
            <span className="font-bold">
              Terjawab: <strong className="text-amber-200">{answeredTotal}</strong> / {allQuestions.length} Soal
            </span>
            <span>•</span>
            <span className="font-bold">
              Benar: <strong className="text-emerald-300">{correctTotal}</strong> Soal
            </span>
            {currentUser && (
              <>
                <span>•</span>
                <span className="bg-white/20 px-2.5 py-0.5 rounded-full font-bold">
                  Siswa: {currentUser.name} ({currentUser.kelas || 'GCC/RCC'})
                </span>
              </>
            )}
          </div>

          <button
            onClick={handleSendToTeacher}
            disabled={answeredTotal === 0}
            className="bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-amber-300 font-black px-4 py-2 rounded-xl shadow-md transition flex items-center gap-1.5"
          >
            <SendHorizontal className="w-4 h-4 text-amber-400" />
            <span>Kirim Hasil ke Guru</span>
          </button>
        </div>
      </div>

      {/* Filter and Section Selector */}
      <div className="flex flex-wrap justify-between items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        {/* Section Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-3 py-1.5 rounded-xl transition ${
              activeSection === 'all' ? 'bg-red-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Semua Soal ({allQuestions.length})
          </button>
          <button
            onClick={() => setActiveSection('listening')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1 ${
              activeSection === 'listening' ? 'bg-red-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Mendengar (听力)</span>
          </button>
          <button
            onClick={() => setActiveSection('reading')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1 ${
              activeSection === 'reading' ? 'bg-red-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Membaca & Tata Bahasa (阅读)</span>
          </button>
          <button
            onClick={() => setActiveSection('hanzi')}
            className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1 ${
              activeSection === 'hanzi' ? 'bg-red-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Goresan Hanzi</span>
          </button>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-600">Tingkat:</span>
          {(['all', 'dasar', 'menengah', 'mahir'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-2.5 py-1 rounded-lg font-bold capitalize transition ${
                difficultyFilter === diff
                  ? 'bg-amber-400 text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {diff === 'all' ? 'Semua' : diff}
            </button>
          ))}
        </div>
      </div>

      {isResultSentToTeacher && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-300 text-emerald-800 rounded-3xl text-xs font-bold flex items-center justify-between shadow-sm animate-pulse">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Jawaban dan skor Anda telah terhubung dan terkirim ke <strong>Portal Guru</strong>! Guru dapat melihat rincian jawaban Anda di kelas <strong>{currentUser?.kelas}</strong>.
            </span>
          </div>
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-xl text-xs font-black">
            Terkirim ✓
          </span>
        </div>
      )}

      {/* QUESTIONS LIST */}
      {activeSection !== 'hanzi' ? (
        <div className="space-y-4">
          {filteredQuestions.map((item, idx) => {
            const isAnswered = answeredState[item.id];
            const userChoice = selectedAnswers[item.id];
            const isCorrect = userChoice === item.answer;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200 space-y-3.5 hover:border-amber-300 transition"
              >
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
                      Soal #{idx + 1} • {item.type.toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      item.difficulty === 'dasar'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.difficulty === 'menengah'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>

                  {item.audioPrompt && (
                    <button
                      onClick={() => handlePlayAudio(item.audioPrompt!)}
                      className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-3.5 py-1.5 rounded-full text-xs transition shadow flex items-center gap-1.5"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Putar Audio Soal 🔊</span>
                    </button>
                  )}
                </div>

                <p className="text-sm font-bold text-slate-900 leading-relaxed">
                  {item.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {item.options.map((opt, optIdx) => {
                    let btnStyle = "bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50";
                    if (isAnswered) {
                      if (optIdx === item.answer) {
                        btnStyle = "bg-emerald-600 text-white border-emerald-700 font-bold shadow-sm";
                      } else if (optIdx === userChoice) {
                        btnStyle = "bg-red-600 text-white border-red-700 font-bold shadow-sm";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleSelectAnswer(item, optIdx)}
                        className={`p-3 rounded-2xl border text-xs text-left transition ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`p-3 rounded-2xl text-xs font-semibold space-y-1 ${
                    isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <div className="flex items-center gap-1.5 font-bold">
                      {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <HelpCircle className="w-4 h-4 text-red-600" />}
                      <span>{isCorrect ? 'Benar! (+5 ⭐)' : 'Jawaban Belum Tepat'}</span>
                    </div>
                    {item.explanation && (
                      <p className="text-[11px] text-slate-600 font-normal">
                        Kunci & Pembahasan: {item.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* HANZI PRACTICE */
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <PenTool className="w-5 h-5 text-red-600" />
              Target Goresan Hanzi Workbook Bab {baseExercise.chapterId}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Klik salah satu karakter di bawah untuk langsung berlatih menulisnya di kanvas kotak Tianzi Ge (田字格)!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {baseExercise.hanziPractice.map((char) => (
              <div
                key={char}
                onClick={() => onGoToTianzi(char)}
                className="bg-red-50 hover:bg-red-100 border-2 border-red-200 rounded-3xl p-4 text-center cursor-pointer transform hover:scale-105 transition shadow-sm group"
              >
                <div className="text-4xl font-hanzi font-black text-slate-900 group-hover:text-red-600 transition">
                  {char}
                </div>
                <div className="mt-2 text-[10px] font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full inline-block">
                  Latihan Menulis ✍️
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Sticky Action */}
      <div className="bg-white rounded-3xl p-5 border border-amber-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-500" />
          <span className="text-xs font-bold text-slate-700">
            Kumpulkan hasil latihanmu agar Guru kelas ({currentUser?.kelas || 'GCC/RCC'}) dapat melihat perkembanganmu!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Ulangi Soal
          </button>

          <button
            onClick={handleSendToTeacher}
            disabled={answeredTotal === 0}
            className="px-5 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white shadow-md flex items-center gap-1.5 transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Kirim ke Guru & Selesaikan Bab (+20 ⭐)
          </button>
        </div>
      </div>
    </div>
  );
};
