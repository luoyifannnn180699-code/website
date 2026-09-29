import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Download, 
  Filter, 
  Sparkles, 
  Activity, 
  BookOpen, 
  PenTool, 
  Mic, 
  Award,
  Search
} from 'lucide-react';
import { dbService } from '../services/db';
import { ActivityLog, UserProfile } from '../types';

export const AnalyticsDashboard: React.FC = () => {
  const users = dbService.getAllUsers();
  const logs = dbService.getAllLogs();
  const submissions = dbService.getAllSubmissions();
  const currentUser = dbService.getCurrentUser();

  const [selectedUserFilter, setSelectedUserFilter] = useState<string>('all');
  const [selectedActionFilter, setSelectedActionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Metrics
  const totalStarsEarned = users.reduce((acc, u) => acc + u.totalStars, 0);
  const totalCompletedLessons = users.reduce((acc, u) => acc + u.completedLessons.length, 0);
  const totalSubmissions = submissions.length;

  const filteredLogs = logs.filter((log) => {
    if (selectedUserFilter !== 'all' && log.userId !== selectedUserFilter) return false;
    if (selectedActionFilter !== 'all' && log.actionType !== selectedActionFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        log.details.toLowerCase().includes(q) ||
        log.userName.toLowerCase().includes(q) ||
        log.actionType.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleExportLogs = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `HSK1_Audit_Logs_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-400">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                Sistem Telemetri & Analisis
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> SHA-256 Signed
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mt-2 font-brand flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-amber-400" />
              Dasbor Analisis Data & Aktivitas Pengguna
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Memantau metrik pembelajaran murid, progres modul HSK 1, frekuensi latihan suara/tulisan, dan jejak audit aktivitas yang diamankan dengan tanda tangan kriptografi.
            </p>
          </div>

          <button
            onClick={handleExportLogs}
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-4 py-2.5 rounded-2xl text-xs transition shadow-lg flex items-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Ekspor Log Audit (.JSON)</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-xl shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase block">Total Pengguna</span>
            <span className="text-2xl font-black text-slate-900">{users.length} Akun</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase block">Bintang Diperoleh</span>
            <span className="text-2xl font-black text-slate-900">{totalStarsEarned} ⭐</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase block">Bab Dikuasai</span>
            <span className="text-2xl font-black text-slate-900">{totalCompletedLessons} Modul</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase block">Tugas Diserahkan</span>
            <span className="text-2xl font-black text-slate-900">{totalSubmissions} Berkas</span>
          </div>
        </div>
      </div>

      {/* Chapters Mastery Overview (1 to 15) */}
      <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-md">
        <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-600" />
          Tingkat Penguasaan 15 Bab HSK 1
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Pemantauan progres siswa dalam menyelesaikan materi Buku Ajar dan Buku Latihan Workbook 1.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-15 gap-2">
          {Array.from({ length: 15 }, (_, i) => i + 1).map((chNum) => {
            const isCompleted = currentUser?.completedLessons.includes(chNum);
            const isWbCompleted = currentUser?.completedWorkbook.includes(chNum);
            return (
              <div
                key={chNum}
                className={`p-3 rounded-2xl border text-center transition ${
                  isCompleted
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : isWbCompleted
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
              >
                <div className="text-[10px] uppercase font-bold">Bab</div>
                <div className="text-xl font-black">{chNum}</div>
                <div className="mt-1 text-[9px] font-bold">
                  {isCompleted ? 'Tuntas' : isWbCompleted ? 'Latihan' : 'Belum'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Users Summary Table */}
      <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-md">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-600" />
          Ringkasan Profil Murid & Pengajar
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b text-slate-400 uppercase text-[10px]">
                <th className="pb-2 font-bold">Pengguna</th>
                <th className="pb-2 font-bold">Peran</th>
                <th className="pb-2 font-bold">Level</th>
                <th className="pb-2 font-bold">Bintang</th>
                <th className="pb-2 font-bold">Progres Bab</th>
                <th className="pb-2 font-bold">Login Terakhir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="py-2.5 flex items-center gap-2">
                    <span className="text-xl">{u.avatar}</span>
                    <div>
                      <div className="font-bold text-slate-800">{u.name}</div>
                      <div className="text-[10px] text-slate-400">{u.email}</div>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <span className={`px-2 py-0.5 rounded-full font-black text-[10px] uppercase ${
                      u.role === 'guru' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-2.5 font-semibold text-slate-700">{u.level}</td>
                  <td className="py-2.5 font-bold text-amber-600">{u.totalStars} ⭐</td>
                  <td className="py-2.5 font-bold text-slate-700">
                    {u.completedLessons.length} / 15 Bab
                  </td>
                  <td className="py-2.5 text-slate-400 font-mono text-[10px]">
                    {new Date(u.lastLoginAt).toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Logs & Cryptographic Audit Table */}
      <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-md space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600" />
              Log Aktivitas & Audit Keamanan Real-Time
            </h3>
            <p className="text-xs text-slate-500">
              Setiap aksi ditandai dengan stempel waktu dan tanda tangan integritas hash SHA-256.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-grow md:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari aktivitas..."
                className="w-full pl-8 pr-2.5 py-1.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>

            {/* Filter by User */}
            <select
              value={selectedUserFilter}
              onChange={(e) => setSelectedUserFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">Semua Pengguna</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>

            {/* Filter by Action */}
            <select
              value={selectedActionFilter}
              onChange={(e) => setSelectedActionFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">Semua Jenis Aksi</option>
              <option value="LOGIN">LOGIN</option>
              <option value="REGISTER">REGISTER</option>
              <option value="PLAY_AUDIO">PLAY_AUDIO</option>
              <option value="COMPLETE_LESSON">COMPLETE_LESSON</option>
              <option value="SUBMIT_QUIZ">SUBMIT_QUIZ</option>
              <option value="SUBMIT_HANZI">SUBMIT_HANZI</option>
              <option value="SUBMIT_VOICE">SUBMIT_VOICE</option>
              <option value="SUBMIT_WORKBOOK">SUBMIT_WORKBOOK</option>
              <option value="TAKE_EXAM">TAKE_EXAM</option>
            </select>
          </div>
        </div>

        {/* Logs Table */}
        <div className="overflow-x-auto max-h-96 custom-scrollbar">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 sticky top-0 border-b text-slate-500 uppercase text-[10px]">
              <tr>
                <th className="p-2.5 font-bold">Waktu</th>
                <th className="p-2.5 font-bold">Pengguna</th>
                <th className="p-2.5 font-bold">Aktivitas</th>
                <th className="p-2.5 font-bold">Rincian</th>
                <th className="p-2.5 font-bold">Perangkat</th>
                <th className="p-2.5 font-bold">Hash Integritas (SHA-256)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-slate-400">
                    Tidak ada catatan aktivitas yang cocok dengan filter.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-2.5 whitespace-nowrap font-mono text-[11px] text-slate-500">
                      {new Date(log.timestamp).toLocaleTimeString('id-ID')}
                    </td>
                    <td className="p-2.5 font-bold text-slate-800 whitespace-nowrap">
                      {log.userName}
                    </td>
                    <td className="p-2.5 whitespace-nowrap">
                      <span className="bg-slate-100 text-slate-800 font-mono px-2 py-0.5 rounded text-[10px] font-bold">
                        {log.actionType}
                      </span>
                    </td>
                    <td className="p-2.5 text-slate-700 max-w-xs truncate" title={log.details}>
                      {log.details}
                    </td>
                    <td className="p-2.5 text-slate-400 text-[10px] max-w-[120px] truncate" title={log.deviceInfo}>
                      {log.deviceInfo}
                    </td>
                    <td className="p-2.5 whitespace-nowrap">
                      <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded">
                        {log.hash}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
