import React, { useRef, useState, useEffect } from 'react';
import { Volume2, Eraser, Send, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { speechEngine } from '../services/speech';
import { soundEffects } from '../services/soundEffects';
import { dbService } from '../services/db';

interface TianziCanvasProps {
  currentChapterId: number;
  availableCharacters: string[];
  onSubmitted?: () => void;
  audioSpeed: number;
}

export const TianziCanvas: React.FC<TianziCanvasProps> = ({
  currentChapterId,
  availableCharacters,
  onSubmitted,
  audioSpeed
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedChar, setSelectedChar] = useState<string>(availableCharacters[0] || '你');
  const [strokeColor, setStrokeColor] = useState('#0f172a');
  const [brushWidth, setBrushWidth] = useState(8);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [showWatermark, setShowWatermark] = useState(true);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (availableCharacters.length > 0 && !availableCharacters.includes(selectedChar)) {
      setSelectedChar(availableCharacters[0]);
    }
  }, [availableCharacters, selectedChar]);

  useEffect(() => {
    drawGrid();
    setHasDrawn(false);
  }, [selectedChar]);

  const drawGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    // Cross lines (horizontal & vertical)
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Diagonal lines
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.2)';
    ctx.setLineDash([2, 5]);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    ctx.restore();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasDrawn(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    drawGrid();
    setHasDrawn(false);
    setSubmittedSuccess(false);
  };

  const handleSpeak = () => {
    speechEngine.speak(selectedChar, audioSpeed);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Hanzi_${selectedChar}_TianziGe.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleSubmit = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasDrawn) return;
    const user = dbService.getCurrentUser();

    dbService.addSubmission({
      studentId: user?.id || 'guest',
      studentName: user?.name || 'Siswa MandarIn',
      chapterId: currentChapterId,
      type: 'Tulisan Hanzi (田字格)',
      target: selectedChar,
      dataUrl: canvas.toDataURL()
    });

    soundEffects.playStar();
    setSubmittedSuccess(true);
    if (onSubmitted) onSubmitted();
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-amber-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5 border-b pb-4">
        <div>
          <span className="text-[10px] bg-red-100 text-red-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Latihan Menulis Karakter Mandarin
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
            Kanvas Kotak Tianzi Ge (田字格)
          </h3>
          <p className="text-xs text-slate-600">
            Tulis karakter Hanzi dengan panduan garis ortogonal dan diagonal untuk melatih proporsi goresan yang indah.
          </p>
        </div>

        {/* Character Picker */}
        <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-2xl border border-amber-300">
          <span className="text-xs font-bold text-slate-700">Pilih Karakter:</span>
          <select
            value={selectedChar}
            onChange={(e) => setSelectedChar(e.target.value)}
            className="bg-white border border-amber-400 font-bold px-3 py-1.5 rounded-xl text-sm text-red-700 focus:outline-none cursor-pointer"
          >
            {availableCharacters.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button
            onClick={handleSpeak}
            className="p-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 transition shadow"
            title="Dengarkan Pelafalan Karakter"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex flex-col items-center gap-5">
        <div className="relative bg-red-50/70 p-3 rounded-3xl border-4 border-red-600 shadow-inner">
          {/* Watermark Guide */}
          {showWatermark && (
            <div className="absolute inset-0 flex items-center justify-center font-hanzi text-[180px] text-red-200/60 pointer-events-none select-none">
              {selectedChar}
            </div>
          )}

          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="bg-transparent rounded-2xl cursor-crosshair touch-none relative z-10"
          />
        </div>

        {/* Drawing Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200 w-full max-w-xl shadow-sm">
          {/* Stroke Color */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 mr-1">Tinta:</span>
            {[
              { color: '#0f172a', label: 'Hitam' },
              { color: '#dc2626', label: 'Merah' },
              { color: '#059669', label: 'Hijau' },
              { color: '#0284c7', label: 'Biru' }
            ].map((item) => (
              <button
                key={item.color}
                onClick={() => setStrokeColor(item.color)}
                style={{ backgroundColor: item.color }}
                className={`w-7 h-7 rounded-full border-2 transition ${
                  strokeColor === item.color ? 'border-amber-400 scale-110 shadow-md ring-2 ring-red-400' : 'border-white'
                }`}
                title={item.label}
              />
            ))}
          </div>

          <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>

          {/* Brush Size */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500">Kuas:</span>
            <select
              value={brushWidth}
              onChange={(e) => setBrushWidth(Number(e.target.value))}
              className="bg-white border border-slate-300 rounded-lg text-xs p-1 font-semibold"
            >
              <option value={4}>Tipis (4px)</option>
              <option value={8}>Sedang (8px)</option>
              <option value={14}>Tebal (14px)</option>
            </select>
          </div>

          <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>

          {/* Toggle Watermark */}
          <button
            onClick={() => setShowWatermark(!showWatermark)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition border ${
              showWatermark ? 'bg-amber-100 border-amber-300 text-amber-900' : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            {showWatermark ? 'Panduan: Nyala' : 'Panduan: Mati'}
          </button>

          {/* Actions */}
          <button
            onClick={handleClear}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-3 py-1.5 rounded-xl text-xs transition flex items-center gap-1"
          >
            <Eraser className="w-3.5 h-3.5" />
            Hapus
          </button>

          <button
            onClick={handleDownload}
            disabled={!hasDrawn}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 font-bold px-3 py-1.5 rounded-xl text-xs transition flex items-center gap-1 border border-slate-300"
            title="Unduh Gambar Tulisan"
          >
            <Download className="w-3.5 h-3.5" />
            Unduh
          </button>

          <button
            onClick={handleSubmit}
            disabled={!hasDrawn}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white font-black px-4 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            Kirim ke Guru (+10 ⭐)
          </button>
        </div>

        {submittedSuccess && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Tugas tulisan Hanzi berhasil dikirim dan tersimpan di database guru! Anda mendapat 10 bintang 🌟
          </div>
        )}
      </div>
    </div>
  );
};
