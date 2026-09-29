import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  CheckSquare, 
  Download, 
  Star, 
  UserPlus, 
  X, 
  CheckCircle2,
  FileText,
  Upload,
  PlusCircle,
  HelpCircle,
  School,
  Filter,
  Volume2
} from 'lucide-react';
import { dbService } from '../services/db';
import { StudentSubmission, StudentWorkbookResult, WorkbookQuestionItem } from '../types';

export const TeacherPortal: React.FC = () => {
  const users = dbService.getAllUsers();
  const students = users.filter((u) => u.role === 'siswa');
  const submissions = dbService.getAllSubmissions();
  const workbookResults = dbService.getAllWorkbookResults();

  const [activeTab, setActiveTab] = useState<'submissions' | 'results' | 'roster'>('results');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');

  // Modal 1: Grade submission
  const [activeModalSub, setActiveModalSub] = useState<StudentSubmission | null>(null);
  const [gradeScore, setGradeScore] = useState<number>(90);
  const [gradeFeedback, setGradeFeedback] = useState<string>('Goresan dan pelafalan sangat rapi!');

  // Modal 2: Add single student
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentKelas, setNewStudentKelas] = useState('Kelas 7 (GCC)');

  // Modal 3: Bulk upload students
  const [isBulkStudentOpen, setIsBulkStudentOpen] = useState(false);
  const [bulkInputText, setBulkInputText] = useState(
    `Budi Santoso, budi7gcc@siswa.edu, Kelas 7 (GCC)\nSiti Aminah, siti10@siswa.edu, Kelas 10\nMichael Tan, michael8@siswa.edu, Kelas 8`
  );
  const [bulkMessage, setBulkMessage] = useState<string | null>(null);

  // Modal 4: Teacher upload question
  const [isUploadQuestionOpen, setIsUploadQuestionOpen] = useState(false);
  const [targetChapterId, setTargetChapterId] = useState<number>(3);
  const [qType, setQType] = useState<'listening' | 'reading' | 'grammar'>('reading');
  const [qDifficulty, setQDifficulty] = useState<'dasar' | 'menengah' | 'mahir'>('menengah');
  const [qText, setQText] = useState('');
  const [qAudioPrompt, setQAudioPrompt] = useState('');
  const [qOptions, setQOptions] = useState<string[]>(['', '', '', '']);
  const [qCorrectAnswer, setQCorrectAnswer] = useState<number>(0);
  const [qExplanation, setQExplanation] = useState('');

  // Class filtering
  const filteredStudents = students.filter((s) => {
    if (selectedClassFilter === 'all') return true;
    return s.kelas?.includes(selectedClassFilter);
  });

  const filteredResults = workbookResults.filter((r) => {
    if (selectedClassFilter === 'all') return true;
    return r.studentClass?.includes(selectedClassFilter);
  });

  const handleOpenGrade = (sub: StudentSubmission) => {
    setActiveModalSub(sub);
    setGradeScore(sub.score || 90);
    setGradeFeedback(sub.feedback || 'Bagus sekali, pertahankan!');
  };

  const handleSaveGrade = () => {
    if (!activeModalSub) return;
    dbService.gradeSubmission(activeModalSub.id, Number(gradeScore), gradeFeedback);
    setActiveModalSub(null);
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim() || !newStudentEmail.trim()) return;

    await dbService.registerUser(
      newStudentName.trim(),
      newStudentEmail.trim(),
      'SiswaHSK123!',
      'siswa',
      newStudentKelas
    );

    setIsAddStudentOpen(false);
    setNewStudentName('');
    setNewStudentEmail('');
  };

  const handleBulkUploadStudents = async () => {
    const lines = bulkInputText.trim().split('\n');
    const parsed: { name: string; email: string; kelas: string }[] = [];

    for (const line of lines) {
      const parts = line.split(',').map((p) => p.trim());
      if (parts.length >= 2) {
        parsed.push({
          name: parts[0],
          email: parts[1],
          kelas: parts[2] || 'SMP Kelas 7 GCC'
        });
      }
    }

    if (parsed.length > 0) {
      const addedCount = await dbService.batchRegisterStudents(parsed);
      setBulkMessage(`Berhasil mendaftarkan ${addedCount} siswa baru ke dalam basis data!`);
      setTimeout(() => {
        setIsBulkStudentOpen(false);
        setBulkMessage(null);
      }, 1500);
    }
  };

  const handleSaveCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qText.trim()) return;

    const newQuestion: WorkbookQuestionItem = {
      id: Date.now(),
      type: qType,
      difficulty: qDifficulty,
      audioPrompt: qAudioPrompt.trim() || undefined,
      question: qText.trim(),
      options: qOptions.filter((o) => o.trim().length > 0),
      answer: qCorrectAnswer,
      explanation: qExplanation.trim() || 'Soal tambahan oleh Guru.'
    };

    dbService.addCustomQuestion(targetChapterId, newQuestion);
    setIsUploadQuestionOpen(false);
    setQText('');
    setQAudioPrompt('');
    setQOptions(['', '', '', '']);
    setQExplanation('');
  };

  const handleExportReport = () => {
    let report = "========================================================\n";
    report += "   REKAPITULASI LAPORAN NILAI & HASIL LATIHAN HSK 1    \n";
    report += `   Tanggal Ekspor: ${new Date().toLocaleString('id-ID')}\n`;
    report += "========================================================\n\n";

    report += "HASIL LATIHAN SISWA (WORKBOOK & KUIS TERHUBUNG):\n";
    workbookResults.forEach((r, idx) => {
      report += `${idx + 1}. [Bab ${r.chapterId}] Siswa: ${r.studentName} (${r.studentClass})\n`;
      report += `   Skor: ${r.scorePercent}% (${r.correctAnswers}/${r.totalQuestions} Benar)\n`;
      report += `   Waktu Selesai: ${new Date(r.submittedAt).toLocaleString('id-ID')}\n`;
      if (r.teacherComment) report += `   Komentar Guru: "${r.teacherComment}"\n`;
      report += "\n";
    });

    report += "--------------------------------------------------------\n";
    report += "DAFTAR SISWA MENURUT KELAS (GCC / RCC):\n";
    students.forEach((s, idx) => {
      report += `${idx + 1}. ${s.name} - Kelas: ${s.kelas || 'Umum'} (${s.email}) | Bintang: ${s.totalStars} ⭐\n`;
    });

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Rekap_Nilai_Kelas_GCC_RCC_${new Date().toISOString().slice(0, 10)}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="space-y-6">
      {/* Teacher Portal Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-400">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Portal Guru & Pengajar
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] px-2 py-0.5 rounded-full font-bold">
                Koneksi Hasil Siswa Aktif
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mt-2 font-brand flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-amber-400" />
              Portal Guru: Hasil Latihan, Upload Soal & Siswa
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Pantau jawaban siswa secara langsung, kelompokkan berdasarkan kelas SMP/SMA GCC & RCC, serta unggah soal dan daftar siswa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsUploadQuestionOpen(true)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-3.5 py-2.5 rounded-2xl text-xs transition shadow flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Upload / Tambah Soal</span>
            </button>

            <button
              onClick={() => setIsBulkStudentOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-2.5 rounded-2xl text-xs transition shadow flex items-center gap-1.5"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Daftar Siswa</span>
            </button>

            <button
              onClick={handleExportReport}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-2.5 rounded-2xl text-xs transition shadow flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Ekspor Rekap (.TXT)</span>
            </button>
          </div>
        </div>

        {/* Sub-Navigation for Teacher Portal */}
        <div className="flex flex-wrap justify-between items-center gap-3 mt-5 pt-3 border-t border-white/20 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('results')}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                activeTab === 'results' ? 'bg-amber-400 text-slate-900' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              Hasil Jawaban Latihan Siswa ({workbookResults.length})
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                activeTab === 'submissions' ? 'bg-amber-400 text-slate-900' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              Tugas Hanzi & Suara ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                activeTab === 'roster' ? 'bg-amber-400 text-slate-900' : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              Daftar Siswa ({students.length})
            </button>
          </div>

          {/* Class Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-semibold text-slate-300">Filter Kelas:</span>
            <select
              value={selectedClassFilter}
              onChange={(e) => setSelectedClassFilter(e.target.value)}
              className="bg-white/20 text-white font-bold px-2.5 py-1 rounded-xl text-xs focus:outline-none cursor-pointer"
            >
              <option value="all" className="text-slate-900">Semua Kelas</option>
              <optgroup label="Tingkat SMP" className="text-slate-900 font-bold">
                <option value="Kelas 7 (RCC)">Kelas 7 (RCC)</option>
                <option value="Kelas 7 (GCC)">Kelas 7 (GCC)</option>
                <option value="Kelas 8">Kelas 8</option>
                <option value="Kelas 9">Kelas 9</option>
              </optgroup>
              <optgroup label="Tingkat SMA" className="text-slate-900 font-bold">
                <option value="Kelas 10">Kelas 10</option>
                <option value="Kelas 11">Kelas 11</option>
                <option value="Kelas 12">Kelas 12</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* TAB 1: HASIL JAWABAN SISWA (WORKBOOK & KUIS TERHUBUNG) */}
      {activeTab === 'results' && (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base">
                <CheckSquare className="w-5 h-5 text-emerald-600" />
                Hasil Pengerjaan Latihan Siswa yang Terkoneksi ke Guru ({filteredResults.length})
              </h3>
              <p className="text-xs text-slate-500">
                Nilai dan jawaban siswa saat mengerjakan soal di tab Buku Latihan otomatis muncul di sini.
              </p>
            </div>
          </div>

          {filteredResults.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              Belum ada hasil latihan siswa yang dikirimkan untuk filter kelas ini.
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredResults.map((res) => (
                <div
                  key={res.id}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-amber-300 transition space-y-2.5"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-sm text-slate-900">
                          {res.studentName}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <School className="w-3 h-3" />
                          {res.studentClass}
                        </span>
                        <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Bab {res.chapterId}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Waktu Kirim: {new Date(res.submittedAt).toLocaleString('id-ID')}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xl font-black text-red-600 block">
                        {res.scorePercent}%
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold">
                        {res.correctAnswers} dari {res.totalQuestions} Soal Benar
                      </span>
                    </div>
                  </div>

                  {/* Summary of Questions */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                      Sampel Jawaban Siswa:
                    </span>
                    {res.answersSummary.slice(0, 5).map((ans, aIdx) => (
                      <div key={aIdx} className="flex justify-between items-center text-[11px]">
                        <span className="truncate max-w-sm text-slate-700">
                          {ans.question}
                        </span>
                        <span className={ans.isCorrect ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                          {ans.isCorrect ? '✓ Benar' : '✗ Salah'} ({ans.selected})
                        </span>
                      </div>
                    ))}
                    {res.answersSummary.length > 5 && (
                      <div className="text-[10px] text-slate-400 italic">
                        + {res.answersSummary.length - 5} soal lainnya
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: TUGAS MASUK (HANZI & REKAMAN SUARA) */}
      {activeTab === 'submissions' && (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-900 text-base border-b pb-3">
            Antrean Tugas Tulisan Kotak Tianzi Ge & Rekaman Suara Siswa ({submissions.length})
          </h3>

          <div className="space-y-3.5 max-h-[500px] overflow-y-auto custom-scrollbar">
            {submissions.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-8">Belum ada tugas masuk.</p>
            ) : (
              submissions.map((sub) => (
                <div key={sub.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Bab {sub.chapterId}: {sub.type}
                      </span>
                      <h4 className="font-bold text-slate-800 text-xs mt-1">
                        Siswa: {sub.studentName} {sub.studentClass && `(${sub.studentClass})`} • Target: {sub.target}
                      </h4>
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      sub.status === 'Sudah Dinilai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {sub.status}
                    </span>
                  </div>

                  {sub.type.includes('Hanzi') && sub.dataUrl && (
                    <div className="w-24 h-24 bg-white border border-red-200 rounded-2xl overflow-hidden p-1 shadow-inner">
                      <img src={sub.dataUrl} alt="Tulisan Siswa" className="w-full h-full object-contain" />
                    </div>
                  )}

                  {sub.type.includes('Suara') && sub.dataUrl && (
                    <audio src={sub.dataUrl} controls className="w-full max-w-sm mt-1" />
                  )}

                  <div className="flex justify-between items-center pt-2 border-t text-xs">
                    <div>
                      <span className="font-bold text-slate-700">
                        Nilai: <strong className="text-red-600 text-sm">{sub.score ?? '-'}</strong>/100
                      </span>
                      {sub.feedback && (
                        <p className="text-[11px] text-slate-500 italic mt-0.5">
                          "{sub.feedback}"
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleOpenGrade(sub)}
                      className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-3 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1"
                    >
                      <Star className="w-3.5 h-3.5 text-amber-600" />
                      <span>{sub.status === 'Sudah Dinilai' ? 'Ubah Nilai' : 'Beri Nilai'}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: DAFTAR SISWA (ROSTER) */}
      {activeTab === 'roster' && (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="font-bold text-slate-900 text-base">
              Roster Siswa ({filteredStudents.length} Siswa Terdaftar)
            </h3>
            <button
              onClick={() => setIsAddStudentOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Tambah 1 Siswa</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredStudents.map((st) => (
              <div key={st.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xs text-slate-900 flex items-center gap-1.5">
                    <span>{st.avatar}</span>
                    {st.name}
                  </span>
                  <span className="text-[10px] font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    {st.totalStars} ⭐
                  </span>
                </div>
                <div className="text-[11px] text-blue-700 font-bold flex items-center gap-1">
                  <School className="w-3 h-3" />
                  {st.kelas || 'Belum ada kelas'}
                </div>
                <div className="text-[10px] text-slate-500">{st.email}</div>
                <div className="text-[10px] font-semibold text-slate-600 flex justify-between pt-1 border-t">
                  <span>Bab: {st.completedLessons.length}/15</span>
                  <span>Workbook: {st.completedWorkbook.length}/15</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: UPLOAD / TAMBAH SOAL GURU */}
      {isUploadQuestionOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <form onSubmit={handleSaveCustomQuestion} className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-amber-400 space-y-3.5 my-6">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <PlusCircle className="w-4 h-4 text-red-600" />
                Upload / Tambah Soal Latihan Baru oleh Guru
              </h3>
              <button type="button" onClick={() => setIsUploadQuestionOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Target Bab</label>
                <select
                  value={targetChapterId}
                  onChange={(e) => setTargetChapterId(Number(e.target.value))}
                  className="w-full border rounded-xl p-2 text-xs font-bold"
                >
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((ch) => (
                    <option key={ch} value={ch}>
                      Bab {ch}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Kategori</label>
                <select
                  value={qType}
                  onChange={(e) => setQType(e.target.value as any)}
                  className="w-full border rounded-xl p-2 text-xs font-bold"
                >
                  <option value="reading">Membaca (阅读)</option>
                  <option value="listening">Mendengar (听力)</option>
                  <option value="grammar">Tata Bahasa (语法)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Tingkat Kesulitan</label>
                <select
                  value={qDifficulty}
                  onChange={(e) => setQDifficulty(e.target.value as any)}
                  className="w-full border rounded-xl p-2 text-xs font-bold capitalize"
                >
                  <option value="dasar">Dasar</option>
                  <option value="menengah">Menengah</option>
                  <option value="mahir">Mahir</option>
                </select>
              </div>
            </div>

            {qType === 'listening' && (
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Teks Suara Audio Soal</label>
                <input
                  type="text"
                  placeholder="Contoh: 你好！很高兴认识你！"
                  value={qAudioPrompt}
                  onChange={(e) => setQAudioPrompt(e.target.value)}
                  className="w-full border rounded-xl p-2 text-xs"
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Pertanyaan Soal</label>
              <textarea
                required
                rows={2}
                placeholder="Tuliskan pertanyaan soal latihan..."
                value={qText}
                onChange={(e) => setQText(e.target.value)}
                className="w-full border rounded-xl p-2 text-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Pilihan Jawaban</label>
              <div className="space-y-1.5">
                {qOptions.map((opt, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correctChoice"
                      checked={qCorrectAnswer === oIdx}
                      onChange={() => setQCorrectAnswer(oIdx)}
                      title="Tandai sebagai kunci jawaban"
                    />
                    <input
                      type="text"
                      required
                      placeholder={`Opsi ${String.fromCharCode(65 + oIdx)}...`}
                      value={opt}
                      onChange={(e) => {
                        const copy = [...qOptions];
                        copy[oIdx] = e.target.value;
                        setQOptions(copy);
                      }}
                      className="w-full border rounded-xl px-2.5 py-1.5 text-xs"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">
                *Pilih tombol radio di samping kiri opsi yang merupakan kunci jawaban yang benar.
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Penjelasan / Pembahasan Soal</label>
              <input
                type="text"
                placeholder="Penjelasan ringkas materi ini..."
                value={qExplanation}
                onChange={(e) => setQExplanation(e.target.value)}
                className="w-full border rounded-xl p-2 text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsUploadQuestionOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow"
              >
                Simpan & Terbitkan Soal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: BULK UPLOAD SISWA */}
      {isBulkStudentOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-amber-400 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-blue-600" />
                Upload & Impor Daftar Nama Siswa Massal
              </h3>
              <button onClick={() => setIsBulkStudentOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Tempelkan daftar siswa dengan format <code>Nama, Email, Kelas</code> per baris (mendukung keterangan kelas SMP/SMA GCC & RCC):
            </p>

            <textarea
              rows={6}
              value={bulkInputText}
              onChange={(e) => setBulkInputText(e.target.value)}
              className="w-full border border-slate-300 rounded-xl p-3 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            {bulkMessage && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{bulkMessage}</span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => setIsBulkStudentOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Batal
              </button>
              <button
                onClick={handleBulkUploadStudents}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow"
              >
                Proses Impor Siswa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SINGLE STUDENT ADD */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleAddStudent} className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-amber-400 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Tambah Siswa Baru</h3>
              <button type="button" onClick={() => setIsAddStudentOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Nama Siswa</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Siti Rahma"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Siswa</label>
                <input
                  type="email"
                  required
                  placeholder="siti@siswa.edu"
                  value={newStudentEmail}
                  onChange={(e) => setNewStudentEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pilih Jenjang & Kelas</label>
                <select
                  value={newStudentKelas}
                  onChange={(e) => setNewStudentKelas(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"
                >
                  <optgroup label="Tingkat SMP">
                    <option value="Kelas 7 (RCC)">Kelas 7 (RCC)</option>
                    <option value="Kelas 7 (GCC)">Kelas 7 (GCC)</option>
                    <option value="Kelas 8">Kelas 8</option>
                    <option value="Kelas 9">Kelas 9</option>
                  </optgroup>
                  <optgroup label="Tingkat SMA">
                    <option value="Kelas 10">Kelas 10</option>
                    <option value="Kelas 11">Kelas 11</option>
                    <option value="Kelas 12">Kelas 12</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddStudentOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white shadow"
              >
                Simpan Siswa
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: GRADE SUBMISSION */}
      {activeModalSub && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-amber-400 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">
                Penilaian Tugas Siswa: {activeModalSub.studentName}
              </h3>
              <button onClick={() => setActiveModalSub(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Skor Nilai (0 - 100)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={gradeScore}
                  onChange={(e) => setGradeScore(Number(e.target.value))}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Catatan & Umpan Balik Guru</label>
                <textarea
                  rows={3}
                  value={gradeFeedback}
                  onChange={(e) => setGradeFeedback(e.target.value)}
                  placeholder="Catatan untuk siswa..."
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setActiveModalSub(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Batal
              </button>
              <button
                onClick={handleSaveGrade}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Simpan Penilaian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
