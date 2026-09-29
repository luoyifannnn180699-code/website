import React, { useState, useRef } from 'react';
import { Mic, Square, Play, Volume2, CloudUpload, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { speechEngine } from '../services/speech';
import { soundEffects } from '../services/soundEffects';
import { dbService } from '../services/db';

interface AudioRecorderProps {
  currentChapterId: number;
  targetSentence: {
    hanzi: string;
    pinyin: string;
    translation: string;
  };
  audioSpeed: number;
  onSubmitted?: () => void;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  currentChapterId,
  targetSentence,
  audioSpeed,
  onSubmitted
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = async () => {
    setStatusMessage(null);
    setIsSubmitted(false);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioBlobUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);

      timerRef.current = window.setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch {
      setStatusMessage('Izin mikrofon ditolak atau mikrofon tidak ditemukan di perangkat Anda.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const handleListenTarget = () => {
    speechEngine.speak(targetSentence.hanzi, audioSpeed);
  };

  const handleSubmit = () => {
    if (!audioBlobUrl) return;
    const user = dbService.getCurrentUser();

    dbService.addSubmission({
      studentId: user?.id || 'guest',
      studentName: user?.name || 'Siswa MandarIn',
      chapterId: currentChapterId,
      type: 'Rekaman Suara Pelafalan',
      target: targetSentence.hanzi,
      dataUrl: audioBlobUrl
    });

    soundEffects.playSuccess();
    setIsSubmitted(true);
    setStatusMessage('Rekaman suara berhasil dikirim ke Guru! +10 Bintang 🌟');
    if (onSubmitted) onSubmitted();
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 text-center max-w-2xl mx-auto">
      <div className="space-y-1 mb-5">
        <span className="text-[10px] bg-red-100 text-red-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Pelatihan Bicara & Nada (口语训练)
        </span>
        <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
          Perekam Suara Pelafalan Mandarin
        </h3>
        <p className="text-xs text-slate-600">
          Dengarkan pelafalan standar dari native speaker, lalu rekam suaramu untuk dievaluasi oleh Guru.
        </p>
      </div>

      {/* Target Sentence Box */}
      <div className="bg-gradient-to-b from-amber-50 to-orange-50 p-6 rounded-3xl border-2 border-amber-300 mb-6 shadow-inner space-y-2">
        <span className="text-[10px] bg-amber-400 text-slate-900 font-black uppercase px-2.5 py-0.5 rounded-full">
          Target Kalimat Bab Ini
        </span>
        <div className="text-3xl md:text-4xl font-hanzi font-black text-slate-900 tracking-wide mt-2">
          {targetSentence.hanzi}
        </div>
        <div className="text-red-600 font-bold text-base md:text-lg">
          {targetSentence.pinyin}
        </div>
        <div className="text-slate-600 text-xs italic">
          "{targetSentence.translation}"
        </div>

        <button
          onClick={handleListenTarget}
          className="mt-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-4 py-2 rounded-full text-xs transition inline-flex items-center gap-1.5 shadow"
        >
          <Volume2 className="w-4 h-4" />
          <span>Dengarkan Contoh Native</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-2xl shadow-xl transform active:scale-95 transition hover:scale-105"
              title="Mulai Rekam Suara"
            >
              <Mic className="w-7 h-7" />
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl shadow-xl animate-pulse ring-4 ring-red-300"
              title="Hentikan Rekaman"
            >
              <Square className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="text-xs font-bold text-slate-600">
          {isRecording ? (
            <span className="text-red-600 flex items-center gap-1.5 animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
              Sedang merekam... ({recordingSeconds}s) - Bicara sekarang!
            </span>
          ) : audioBlobUrl ? (
            'Rekaman selesai! Dengarkan kembali di bawah atau rekam ulang.'
          ) : (
            'Klik tombol mikrofon merah untuk mulai merekam suara.'
          )}
        </div>

        {/* Audio Player Preview */}
        {audioBlobUrl && (
          <div className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-2 space-y-3 text-left">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-700">Hasil Rekaman Suaramu:</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">
                Siap Dikirim
              </span>
            </div>

            <audio src={audioBlobUrl} controls className="w-full" />

            <div className="flex gap-2">
              <button
                onClick={startRecording}
                className="w-1/3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Rekam Ulang
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-2/3 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5"
              >
                <CloudUpload className="w-4 h-4" />
                {isSubmitted ? 'Terkirim ke Guru' : 'Kirim Rekaman ke Guru (+10 ⭐)'}
              </button>
            </div>
          </div>
        )}

        {statusMessage && (
          <div className={`p-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 w-full ${
            isSubmitted ? 'bg-emerald-50 text-emerald-800 border border-emerald-300' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {isSubmitted ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
            <span>{statusMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
