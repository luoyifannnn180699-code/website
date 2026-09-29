import React from 'react';
import { 
  BookOpen, 
  BookMarked, 
  PenTool, 
  Mic, 
  BarChart3, 
  Bot, 
  ShieldCheck, 
  User, 
  LogOut, 
  GraduationCap, 
  Award,
  Sparkles,
  Volume2
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onOpenProfile: () => void;
  onLogout: () => void;
  audioSpeed: number;
  setAudioSpeed: (s: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuth,
  onOpenProfile,
  onLogout,
  audioSpeed,
  setAudioSpeed
}) => {
  return (
    <header className="bg-gradient-to-r from-red-800 via-red-700 to-red-900 text-white shadow-xl sticky top-0 z-40 border-b-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center gap-3">
          {/* Brand Logo & Name */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('lessons')}
          >
            <div className="w-11 h-11 bg-amber-400 rounded-2xl flex items-center justify-center text-2xl shadow-inner border-2 border-white transform group-hover:rotate-6 transition duration-200">
              🐼
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-black tracking-wide font-brand flex items-center gap-1.5">
                  HSK 1 Mandarin <span className="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">Lengkap</span>
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  AES-256
                </span>
              </div>
              <p className="text-[11px] text-red-100 hidden sm:block">
                Buku Ajar Standard Course + Buku Latihan Workbook 1 (15 Bab)
              </p>
            </div>
          </div>

          {/* Gamification, Audio Speed, and Profile Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Audio Speed Selector */}
            <div className="flex items-center gap-1 bg-red-950/60 border border-amber-400/40 rounded-xl px-2 py-1 text-xs">
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] text-amber-200 hidden md:inline font-semibold">Speed:</span>
              <button
                onClick={() => setAudioSpeed(0.7)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition ${
                  audioSpeed === 0.7 ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
                title="Kecepatan 0.7x (Pelan/Jelas)"
              >
                0.7x
              </button>
              <button
                onClick={() => setAudioSpeed(1.0)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition ${
                  audioSpeed === 1.0 ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
                title="Kecepatan 1.0x (Normal)"
              >
                1.0x
              </button>
            </div>

            {/* Stars & Level Badge */}
            {currentUser && (
              <div 
                onClick={onOpenProfile}
                className="bg-red-950/80 hover:bg-red-900 cursor-pointer transition border border-amber-400/60 rounded-2xl px-3 py-1 flex items-center gap-2 text-amber-300 font-bold shadow-inner"
                title="Lihat Profil Pengguna & Keamanan"
              >
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-sm font-black">{currentUser.totalStars}</span>
                <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-black uppercase hidden lg:inline">
                  {currentUser.level}
                </span>
              </div>
            )}

            {/* User Auth Info / Login Trigger */}
            {currentUser ? (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onOpenProfile}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 px-2.5 py-1 rounded-xl text-xs font-bold transition"
                >
                  <span className="text-base">{currentUser.avatar}</span>
                  <span className="hidden md:inline max-w-[100px] truncate">{currentUser.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-black uppercase ${
                    currentUser.role === 'guru' ? 'bg-amber-400 text-slate-900' : 'bg-emerald-500 text-white'
                  }`}>
                    {currentUser.role}
                  </span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 hover:text-white transition"
                  title="Keluar"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-3.5 py-1.5 rounded-xl text-xs transition shadow-md flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Masuk / Daftar</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1.5 overflow-x-auto mt-2.5 pt-1 border-t border-red-600/60 pb-0.5 custom-scrollbar text-xs">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'lessons'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Buku Ajar (15 Bab)</span>
          </button>

          <button
            onClick={() => setActiveTab('workbook')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'workbook'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Buku Latihan (Workbook 1)</span>
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'exam'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <Award className="w-4 h-4 text-amber-300" />
            <span>Simulasi Ujian HSK 1</span>
          </button>

          <button
            onClick={() => setActiveTab('canvas')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'canvas'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Tulis Hanzi (田字格)</span>
          </button>

          <button
            onClick={() => setActiveTab('recorder')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'recorder'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>Rekam Suara</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-tutor')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ai-tutor'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Tutor AI (Lidia)</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : 'text-red-100 hover:bg-white/10'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dasbor Analisis Data</span>
          </button>

          <button
            onClick={() => {
              if (currentUser?.role === 'guru') {
                setActiveTab('teacher');
              } else {
                onOpenAuth();
              }
            }}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'teacher'
                ? 'bg-amber-400 text-slate-900 shadow-md'
                : currentUser?.role === 'guru'
                ? 'bg-emerald-600/80 hover:bg-emerald-600 text-white'
                : 'text-amber-200 bg-red-950/40 hover:bg-white/10 border border-amber-400/30'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Portal Guru {currentUser?.role !== 'guru' ? '(Khusus Guru)' : ''}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
