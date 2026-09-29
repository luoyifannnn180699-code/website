/**
 * Mandarin Speech Synthesis Engine (Web Speech API)
 * Optimised for Mandarin (zh-CN) pronunciation, rate control, pitch and continuous dialogue playback.
 */

class MandarinSpeechEngine {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private onEndCallbacks: (() => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  private getMandarinVoice(): SpeechSynthesisVoice | null {
    if (!this.voices.length) this.loadVoices();
    // Prioritize natural zh-CN voices
    const zhVoices = this.voices.filter(v => v.lang.startsWith('zh') || v.lang.includes('cmn'));
    const preferred = zhVoices.find(v => v.lang === 'zh-CN' || v.lang === 'cmn-Hans-CN') 
      || zhVoices[0];
    return preferred || null;
  }

  speak(text: string, speed = 0.8, onEnd?: () => void) {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getMandarinVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'zh-CN';
    }

    utterance.rate = Math.max(0.4, Math.min(1.5, speed));
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
  }

  getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const speechEngine = new MandarinSpeechEngine();
