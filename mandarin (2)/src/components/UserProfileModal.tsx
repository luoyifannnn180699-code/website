import React, { useState } from 'react';
import { X, ShieldCheck, Key, Lock, Sparkles, Award, Calendar, Clock, Save } from 'lucide-react';
import { UserProfile } from '../types';
import { dbService } from '../services/db';
import { encryptData, decryptData } from '../services/security';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  onUpdate: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdate
}) => {
  const [privateNote, setPrivateNote] = useState('');
  const [decryptedNote, setDecryptedNote] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen || !user) return null;

  const handleSaveEncryptedNote = async () => {
    if (!privateNote.trim()) return;
    setIsSaving(true);
    setStatusMessage('Mengenkripsi catatan pribadi dengan algoritma AES-256-GCM...');

    try {
      const { cipherText, iv } = await encryptData(privateNote, user.salt, user.id);
      dbService.updateUserProfile({
        encryptedNotes: cipherText,
        encryptedNotesIv: iv
      });
      setDecryptedNote(privateNote);
      setStatusMessage('Catatan berhasil dienkripsi dan disimpan secara aman ke database!');
      onUpdate();
      setTimeout(() => setStatusMessage(null), 3000);
    } catch {
      setStatusMessage('Gagal mengenkripsi catatan.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDecryptExisting = async () => {
    if (!user.encryptedNotes || !user.encryptedNotesIv) return;
    setStatusMessage('Mendekripsi data dengan kunci turunan sesi pengguna...');
    try {
      const text = await decryptData(user.encryptedNotes, user.encryptedNotesIv, user.salt, user.id);
      setDecryptedNote(text);
      setPrivateNote(text);
      setStatusMessage('Dekripsi sukses! Teks asli dipulihkan dari cipher.');
      setTimeout(() => setStatusMessage(null), 3000);
    } catch {
      setStatusMessage('Dekripsi gagal.');
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-2 border-amber-400 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 border-b pb-4 mb-5">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-4xl shadow-inner">
            {user.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase ${
                user.role === 'guru' ? 'bg-amber-400 text-slate-900' : 'bg-emerald-500 text-white'
              }`}>
                {user.role}
              </span>
            </div>
            <p className="text-xs text-slate-500">{user.email}</p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600">
              <span className="flex items-center gap-1 font-bold text-amber-600">
                <Sparkles className="w-3.5 h-3.5" />
                {user.totalStars} Bintang
              </span>
              <span>•</span>
              <span className="font-semibold text-slate-700">{user.level}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 text-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Bab Selesai</span>
            <span className="text-lg font-black text-red-600">{user.completedLessons.length} / 15</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 text-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Workbook</span>
            <span className="text-lg font-black text-amber-600">{user.completedWorkbook.length} / 15</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 text-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase block">Streak Hari</span>
            <span className="text-lg font-black text-emerald-600">{user.streakDays} Hari 🔥</span>
          </div>
        </div>

        {/* Encryption & Security Specs */}
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-3.5 border border-slate-800 space-y-2 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Status Keamanan & Enkripsi Basis Data
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono font-bold">
              AKTIF
            </span>
          </div>
          <div className="text-[11px] text-slate-300 space-y-1 font-mono">
            <div className="truncate">
              <span className="text-slate-400">Salt Kriptografis: </span>
              <span className="text-amber-300">{user.salt.substring(0, 16)}...</span>
            </div>
            <div className="truncate">
              <span className="text-slate-400">Hash Kata Sandi: </span>
              <span className="text-blue-300">PBKDF2-SHA256 (100k rounds)</span>
            </div>
            <div className="truncate">
              <span className="text-slate-400">Enkripsi Profil: </span>
              <span className="text-emerald-300">AES-256-GCM Authenticated</span>
            </div>
          </div>
        </div>

        {/* AES-256 Vault / Notes Demo */}
        <div className="space-y-2 border-t pt-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-500" />
              Brankas Catatan Rahasia (Terenkripsi AES-256)
            </label>
            {user.encryptedNotes && (
              <button
                onClick={handleDecryptExisting}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Key className="w-3 h-3" />
                Dekripsi Catatan
              </button>
            )}
          </div>

          <textarea
            rows={2}
            value={privateNote}
            onChange={(e) => setPrivateNote(e.target.value)}
            placeholder="Tulis catatan pribadi siswa/guru di sini untuk diuji enkripsi AES-256..."
            className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-500">
              {user.encryptedNotes ? `Ciphertext: ${user.encryptedNotes.substring(0, 20)}...` : 'Belum ada catatan terenkripsi.'}
            </span>
            <button
              onClick={handleSaveEncryptedNote}
              disabled={isSaving || !privateNote.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow transition flex items-center gap-1"
            >
              <Save className="w-3.5 h-3.5" />
              {isSaving ? 'Menyimpan...' : 'Enkripsi & Simpan'}
            </button>
          </div>

          {statusMessage && (
            <p className="text-[11px] font-semibold text-blue-700 bg-blue-50 p-2 rounded-xl mt-1">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
