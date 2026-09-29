import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Volume2, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  RefreshCw,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HSK_MODEL_TEST, ExamQuestion } from '../data/hskWorkbook';
import { speechEngine } from '../services/speech';
import { soundEffects } from '../services/soundEffects';
import { dbService } from '../services/db';

interface ModelTestModalProps {
  audioSpeed: number;
}

export const ModelTestModal: React.FC<ModelTestModalProps> = ({ audioSpeed }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(35 * 60); // 35 minutes
  const [examStarted, setExamStarted] = useState(false);

  useEffect(() => {
    if (!examStarted || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, isSubmitted]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setIsSubmitted(false);
    setAnswers({});
    setTimeLeft(35 * 60);
    setCurrentIdx(0);
    dbService.logActivity('TAKE_EXAM', 'Memulai Simulasi Ujian HSK Level 1 Resmi');
  };

  const currentQ: ExamQuestion = HSK_MODEL_TEST[currentIdx];

  const handleSelect = (optIdx: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }));
  };

  const handlePlayAudio = () => {
    if (currentQ.audioPrompt) {
      speechEngine.speak(currentQ.audioPrompt, audioSpeed);
    }
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    HSK_MODEL_TEST.forEach((q) => {
      if (answers[q.id] === q.answer) correctCount++;
    });

    const score = Math.round((correctCount / HSK_MODEL_TEST.length) * 200);
    const passed = score >= 120;

    if (passed) {
      soundEffects.playSuccess();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // ignore
      }
      dbService.addStars(50);
    } else {
      soundEffects.playError();
      dbService.addStars(15);
    }

    const user = dbService.getCurrentUser();
    if (user && (!user.highestExamScore || score > user.highestExamScore)) {
      dbService.updateUserProfile({ highestExamScore: score });
    }

    dbService.logActivity(
      'TAKE_EXAM',
      `Menyelesaikan Ujian HSK 1 dengan skor ${score}/200 (${passed ? 'LULUS' : 'REMEDIAL'})`,
      undefined,
      score
    );
  };

  const calculateScore = () => {
    let correct = 0;
    HSK_MODEL_TEST.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    return {
      correct,
      total: HSK_MODEL_TEST.length,
      score: Math.round((correct / HSK_MODEL_TEST.length) * 200)
    };
  };

  if (!examStarted) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-400 text-center max-w-2xl mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl mx-auto shadow-inner">
          📜
        </div>

        <div>
          <span className="text-xs font-black bg-red-100 text-red-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Lampiran Resmi Workbook 1
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 font-brand">
            Simulasi Ujian Resmi HSK Level 1 (模拟试卷)
          </h2>
          <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
            Uji kemampuan Bahasa Mandarin HSK 1 Anda dengan format standar Hanban: Bagian 听力 (Mendengarkan) dan 阅读 (Membaca).
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-left max-w-md mx-auto">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Jumlah Soal</span>
            <span className="text-base font-extrabold text-slate-800">{HSK_MODEL_TEST.length} Butir</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Durasi Ujian</span>
            <span className="text-base font-extrabold text-slate-800">35 Menit</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Batas Kelulusan</span>
            <span className="text-base font-extrabold text-emerald-600">120 / 200</span>
          </div>
        </div>

        <button
          onClick={handleStartExam}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black px-8 py-3.5 rounded-2xl text-sm shadow-xl transition transform active:scale-95 inline-flex items-center gap-2"
        >
          <Award className="w-5 h-5 text-amber-300" />
          <span>Mulai Ujian Simulasi Sekarang</span>
        </button>
      </div>
    );
  }

  const { correct, total, score } = calculateScore();

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-400 space-y-6 max-w-3xl mx-auto">
      {/* Top Header with Timer */}
      <div className="flex flex-wrap justify-between items-center gap-3 border-b pb-4">
        <div>
          <span className="text-[10px] bg-red-100 text-red-700 font-black px-2.5 py-0.5 rounded-full uppercase">
            HSK 一级 模拟试卷
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            Soal No. {currentIdx + 1} dari {total}
          </h3>
        </div>

        {!isSubmitted && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-2xl text-red-700 font-mono font-bold text-sm">
            <Clock className="w-4 h-4 text-red-600 animate-spin" />
            <span>Sisa Waktu: {formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* Question Card */}
      {!isSubmitted ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-black px-3 py-1 rounded-full uppercase ${
              currentQ.section === 'listening' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {currentQ.section === 'listening' ? '🎧 Bagian 听力 (Listening)' : '📖 Bagian 阅读 (Reading)'}
            </span>

            {currentQ.section === 'listening' && (
              <button
                onClick={handlePlayAudio}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-3 py-1 rounded-xl text-xs transition shadow flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4" />
                <span>Putar Audio Soal 🔊</span>
              </button>
            )}
          </div>

          <p className="text-base font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentQ.id] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelect(optIdx)}
                  className={`p-3.5 rounded-2xl border text-xs text-left transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-red-600 text-white border-red-700 font-bold shadow-md ring-2 ring-red-400'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50'
                  }`}
                >
                  <span>{opt}</span>
                  {isSelected && <Check className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {/* Navigation Prev / Next */}
          <div className="flex justify-between items-center pt-4 border-t">
            <button
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            {currentIdx < total - 1 ? (
              <button
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                className="px-5 py-2 rounded-xl text-xs font-black bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1.5 transition"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="px-6 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center gap-1.5 transition"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Kumpulkan Lembar Jawaban</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="space-y-6 text-center py-4">
          <div className="w-20 h-20 rounded-3xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl mx-auto shadow-inner">
            {score >= 120 ? '🎉' : '📚'}
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 font-brand">
              {score >= 120 ? 'Selamat! Anda Lulus Ujian HSK 1' : 'Hasil Ujian Belum Memenuhi Batas Kelulusan'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Batas kelulusan resmi HSK 1 adalah 120 poin dari total 200 poin.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 max-w-sm mx-auto space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500 font-bold">Skor Akhir:</span>
              <span className="text-2xl font-black text-red-600">{score} / 200</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-semibold">Jawaban Benar:</span>
              <span className="font-bold text-slate-800">{correct} dari {total} Soal</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-semibold">Status:</span>
              <span className={`font-black uppercase px-2 py-0.5 rounded-full text-[10px] ${
                score >= 120 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
              }`}>
                {score >= 120 ? 'LULUS (合格)' : 'REMEDIAL'}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={handleStartExam}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-5 py-2.5 rounded-xl text-xs transition shadow flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Ulangi Ujian</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
