import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, KeyRound, School } from 'lucide-react';
import { dbService } from '../services/db';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'siswa' | 'guru'>('siswa');
  const [kelas, setKelas] = useState('Kelas 7 (GCC)');
  const [customKelas, setCustomKelas] = useState('');
  const [isCustomKelas, setIsCustomKelas] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [encryptionStatus, setEncryptionStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isRegister) {
        if (!name.trim()) {
          setError('Harap masukkan nama lengkap.');
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError('Kata sandi minimal 6 karakter untuk perlindungan kriptografis yang kuat.');
          setLoading(false);
          return;
        }

        const finalKelas = role === 'guru' 
          ? 'Guru / Pengajar' 
          : (isCustomKelas ? customKelas.trim() || 'Kelas Umum' : kelas);

        setEncryptionStatus('Membuat Unique Salt & Hash PBKDF2-SHA256 (100.000 iterasi)...');
        const res = await dbService.registerUser(name.trim(), email.trim(), password, role, finalKelas);
        if (res.success && res.user) {
          setEncryptionStatus('Akun terenkripsi dan tersimpan aman di basis data!');
          setTimeout(() => {
            onSuccess(res.user!);
            onClose();
          }, 600);
        } else {
          setError(res.message);
        }
      } else {
        setEncryptionStatus('Memverifikasi Hash Kata Sandi dengan Salt Kriptografi...');
        const res = await dbService.loginUser(email.trim(), password);
        if (res.success && res.user) {
          setEncryptionStatus('Otentikasi Berhasil! Memuat profil terenkripsi...');
          setTimeout(() => {
            onSuccess(res.user!);
            onClose();
          }, 500);
        } else {
          setError(res.message);
        }
      }
    } catch {
      setError('Terjadi kendala keamanan saat memproses data.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = async (demoEmail: string, demoPass: string) => {
    setLoading(true);
    setError(null);
    setEncryptionStatus('Memverifikasi kredensial demo terenkripsi...');
    const res = await dbService.loginUser(demoEmail, demoPass);
    if (res.success && res.user) {
      setTimeout(() => {
        onSuccess(res.user!);
        onClose();
      }, 400);
    } else {
      setError(res.message);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-amber-400 relative my-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Security Badge */}
        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-2xl w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Sistem Keamanan Terenkripsi: PBKDF2 & AES-256</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 font-brand">
          {isRegister ? 'Daftar Akun HSK 1 Baru' : 'Masuk ke Platform HSK 1'}
        </h3>
        <p className="text-xs text-slate-600 mt-1 mb-5">
          {isRegister
            ? 'Profil dan kata sandi Anda disimpan dengan enkripsi salted-hash yang aman di basis data.'
            : 'Masukkan email dan kata sandi terdaftar untuk melanjutkan belajar.'}
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-semibold">
            {error}
          </div>
        )}

        {encryptionStatus && (
          <div className="mb-4 p-2.5 bg-blue-50 border border-blue-200 text-blue-800 rounded-2xl text-[11px] font-medium flex items-center gap-2">
            <KeyRound className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>{encryptionStatus}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Kata Sandi</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="Minimal 6 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          {isRegister && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Peran Pengguna</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('siswa')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      role === 'siswa'
                        ? 'bg-red-600 text-white border-red-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>🐼 Siswa</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('guru')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      role === 'guru'
                        ? 'bg-red-600 text-white border-red-700 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>👨‍🏫 Guru / Pengajar</span>
                  </button>
                </div>
              </div>

              {/* Requirement #5: Class Selection for SMP / SMA (GCC / RCC) */}
              {role === 'siswa' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <School className="w-3.5 h-3.5 text-red-600" />
                    <span>Pilih Jenjang & Kelas (GCC / RCC)</span>
                  </label>

                  {!isCustomKelas ? (
                    <select
                      value={kelas}
                      onChange={(e) => {
                        if (e.target.value === 'custom') {
                          setIsCustomKelas(true);
                        } else {
                          setKelas(e.target.value);
                        }
                      }}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
                    >
                      <optgroup label="SMP">
                        <option value="Kelas 7 (RCC)">Kelas 7 (RCC)</option>
                        <option value="Kelas 7 (GCC)">Kelas 7 (GCC)</option>
                        <option value="Kelas 8">Kelas 8</option>
                        <option value="Kelas 9">Kelas 9</option>
                      </optgroup>
                      <optgroup label="SMA">
                        <option value="Kelas 10">Kelas 10</option>
                        <option value="Kelas 11">Kelas 11</option>
                        <option value="Kelas 12">Kelas 12</option>
                      </optgroup>
                      <option value="custom">+ Tulis Kelas Sendiri (Lainnya)</option>
                    </select>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Contoh: SMP 8 GCC MandarIn"
                        value={customKelas}
                        onChange={(e) => setCustomKelas(e.target.value)}
                        className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                      <button
                        type="button"
                        onClick={() => setIsCustomKelas(false)}
                        className="text-xs font-bold px-3 py-1 bg-slate-200 rounded-xl text-slate-700"
                      >
                        Pilih
                      </button>
                    </div>
                  )}
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    *Keterangan kelas ini membantu guru memonitor nilai kelas GCC dan RCC secara terpisah.
                  </span>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black rounded-xl text-sm shadow-md transition disabled:opacity-50 mt-2"
          >
            {loading ? 'Memproses Enkripsi...' : isRegister ? 'Daftar Akun Baru' : 'Masuk Sekarang'}
          </button>
        </form>

        {/* Switch Mode */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setError(null);
            }}
            className="text-xs font-bold text-red-600 hover:text-red-700 transition"
          >
            {isRegister
              ? 'Sudah punya akun? Masuk di sini'
              : 'Belum punya akun? Daftar akun baru'}
          </button>
        </div>

        {/* Quick Demo Access Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-200">
          <p className="text-[11px] font-bold text-slate-500 mb-2 uppercase tracking-wider text-center">
            Akses Cepat Akun Demo (1-Klik)
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleQuickLogin('budi@siswa.edu', 'BudiHSK2026!')}
              className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-left transition"
            >
              <div className="text-xs font-extrabold text-amber-900 flex items-center gap-1">
                <span>🐼 Siswa (SMP GCC)</span>
              </div>
              <div className="text-[10px] text-amber-700">budi@siswa.edu</div>
            </button>
            <button
              onClick={() => handleQuickLogin('guru@hsk1.edu', 'GuruHSK2026!')}
              className="p-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-300 text-left transition"
            >
              <div className="text-xs font-extrabold text-red-900 flex items-center gap-1">
                <span>👨‍🏫 Akun Guru</span>
              </div>
              <div className="text-[10px] text-red-700">guru@hsk1.edu</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
