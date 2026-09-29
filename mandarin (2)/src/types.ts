export type UserRole = 'siswa' | 'guru';

export const SCHOOL_CLASSES = {
  smp: [
    'Kelas 7 (RCC)',
    'Kelas 7 (GCC)',
    'Kelas 8',
    'Kelas 9'
  ],
  sma: [
    'Kelas 10',
    'Kelas 11',
    'Kelas 12'
  ]
} as const;

export const ALL_STANDARD_CLASSES = [
  ...SCHOOL_CLASSES.smp,
  ...SCHOOL_CLASSES.sma
];

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  kelas?: string; // e.g., "Kelas 7 (RCC)", "Kelas 7 (GCC)", "Kelas 8", "Kelas 9", "Kelas 10", "Kelas 11", "Kelas 12"
  salt: string;
  passwordHash: string; // PBKDF2 with SHA-256
  encryptedNotes?: string; // AES-256-GCM encrypted
  encryptedNotesIv?: string;
  avatar: string;
  level: string;
  totalStars: number;
  streakDays: number;
  completedLessons: number[];
  completedWorkbook: number[];
  highestExamScore?: number;
  registeredAt: string;
  lastLoginAt: string;
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  timestamp: string;
  actionType: 
    | 'LOGIN'
    | 'REGISTER'
    | 'PLAY_AUDIO'
    | 'COMPLETE_LESSON'
    | 'SUBMIT_QUIZ'
    | 'SUBMIT_HANZI'
    | 'SUBMIT_VOICE'
    | 'SUBMIT_WORKBOOK'
    | 'TAKE_EXAM'
    | 'GRADE_STUDENT'
    | 'UPLOAD_SOAL'
    | 'UPLOAD_SISWA'
    | 'EXPORT_REPORT';
  chapterId?: number;
  score?: number;
  details: string;
  deviceInfo: string;
  hash: string; // SHA-256 integrity signature
}

export interface StudentSubmission {
  id: string;
  studentId: string;
  studentName: string;
  studentClass?: string;
  chapterId: number;
  type: 'Tulisan Hanzi (田字格)' | 'Rekaman Suara Pelafalan' | 'Latihan Workbook';
  target: string;
  dataUrl?: string; // image, audio, or json summary
  submittedAt: string;
  status: 'Belum Dinilai' | 'Sudah Dinilai';
  score?: number;
  feedback?: string;
}

export interface StudentWorkbookResult {
  id: string;
  studentId: string;
  studentName: string;
  studentClass: string;
  chapterId: number;
  totalQuestions: number;
  correctAnswers: number;
  scorePercent: number;
  submittedAt: string;
  difficulty?: 'dasar' | 'menengah' | 'mahir';
  answersSummary: {
    questionId: number;
    question: string;
    selected: string;
    correct: string;
    isCorrect: boolean;
  }[];
  teacherComment?: string;
}

export interface VocabItem {
  hanzi: string;
  pinyin: string;
  translation: string;
  pos?: string;
  example?: string;
}

export interface DialogueLine {
  speaker: string;
  hanzi: string;
  pinyin: string;
  translation: string;
}

export interface GrammarExample {
  hanzi: string;
  traditional?: string;
  pinyin: string;
  translation: string;
}

export interface GrammarItem {
  id?: string;
  chapterId?: number;
  category?: string;
  rule: string;
  formula?: string;
  desc: string;
  notes?: string[];
  example: string;
  examples?: GrammarExample[];
}

export interface ChapterQuiz {
  q: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface HSKLesson {
  id: number;
  title: string;
  pinyinTitle: string;
  translation: string;
  dialogues: DialogueLine[][];
  vocab: VocabItem[];
  grammar: GrammarItem[];
  phoneticsInfo: string[];
  charactersInfo: {
    strokes: string[];
    characters: string[];
    radicals?: { radical: string; meaning: string; examples: string[] };
  };
  quiz: ChapterQuiz[];
}

export interface WorkbookQuestionItem {
  id: number;
  type: 'listening' | 'reading' | 'grammar' | 'order' | 'hanzi' | 'culture';
  difficulty: 'dasar' | 'menengah' | 'mahir';
  audioPrompt?: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface WorkbookExercise {
  chapterId: number;
  title: string;
  levelDesc: string;
  questions: WorkbookQuestionItem[];
  hanziPractice: string[];
}
