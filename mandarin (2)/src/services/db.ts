import { UserProfile, ActivityLog, StudentSubmission, StudentWorkbookResult, WorkbookQuestionItem } from '../types';
import { hashPassword, generateSalt, computeHash } from './security';

const STORAGE_KEY_USERS = 'hsk1_secure_users_v3';
const STORAGE_KEY_SESSION = 'hsk1_current_session_v3';
const STORAGE_KEY_LOGS = 'hsk1_activity_logs_v3';
const STORAGE_KEY_SUBS = 'hsk1_submissions_v3';
const STORAGE_KEY_WB_RESULTS = 'hsk1_wb_results_v3';
const STORAGE_KEY_CUSTOM_Q = 'hsk1_custom_questions_v3';

export class DatabaseService {
  private users: UserProfile[] = [];
  private logs: ActivityLog[] = [];
  private submissions: StudentSubmission[] = [];
  private workbookResults: StudentWorkbookResult[] = [];
  private customQuestions: Record<number, WorkbookQuestionItem[]> = {};
  private currentUser: UserProfile | null = null;

  constructor() {
    this.loadFromStorage();
    if (this.users.length === 0) {
      this.seedDefaultUsers();
    }
  }

  private loadFromStorage() {
    try {
      const usersData = localStorage.getItem(STORAGE_KEY_USERS);
      if (usersData) this.users = JSON.parse(usersData);

      const logsData = localStorage.getItem(STORAGE_KEY_LOGS);
      if (logsData) this.logs = JSON.parse(logsData);

      const subsData = localStorage.getItem(STORAGE_KEY_SUBS);
      if (subsData) this.submissions = JSON.parse(subsData);

      const wbData = localStorage.getItem(STORAGE_KEY_WB_RESULTS);
      if (wbData) this.workbookResults = JSON.parse(wbData);

      const qData = localStorage.getItem(STORAGE_KEY_CUSTOM_Q);
      if (qData) this.customQuestions = JSON.parse(qData);

      const sessionData = localStorage.getItem(STORAGE_KEY_SESSION);
      if (sessionData) {
        const sessionUser = JSON.parse(sessionData);
        this.currentUser = this.users.find(u => u.id === sessionUser.id) || null;
      }
    } catch (e) {
      console.error('Failed to load local database:', e);
    }
  }

  private saveUsers() {
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(this.users));
  }

  private saveLogs() {
    localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(this.logs));
  }

  private saveSubmissions() {
    localStorage.setItem(STORAGE_KEY_SUBS, JSON.stringify(this.submissions));
  }

  private saveWorkbookResults() {
    localStorage.setItem(STORAGE_KEY_WB_RESULTS, JSON.stringify(this.workbookResults));
  }

  private saveCustomQuestions() {
    localStorage.setItem(STORAGE_KEY_CUSTOM_Q, JSON.stringify(this.customQuestions));
  }

  private saveSession() {
    if (this.currentUser) {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify({ id: this.currentUser.id }));
    } else {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    }
  }

  private async seedDefaultUsers() {
    const teacherSalt = generateSalt();
    const teacherHash = await hashPassword('GuruHSK2026!', teacherSalt);
    const studentSalt1 = generateSalt();
    const studentHash1 = await hashPassword('BudiHSK2026!', studentSalt1);
    const studentSalt2 = generateSalt();
    const studentHash2 = await hashPassword('SitiHSK2026!', studentSalt2);

    const defaultTeacher: UserProfile = {
      id: 'usr_teacher_01',
      name: 'Laoshi Wang (王老师)',
      email: 'guru@hsk1.edu',
      role: 'guru',
      kelas: 'Guru / Pembina Bahasa Mandarin',
      salt: teacherSalt,
      passwordHash: teacherHash,
      avatar: '👨‍🏫',
      level: 'Pengajar Senior HSK',
      totalStars: 300,
      streakDays: 45,
      completedLessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      completedWorkbook: [1, 2, 3, 4, 5],
      registeredAt: '2026-08-01T08:00:00.000Z',
      lastLoginAt: new Date().toISOString()
    };

    const defaultStudent1: UserProfile = {
      id: 'usr_student_01',
      name: 'Budi Santoso',
      email: 'budi@siswa.edu',
      role: 'siswa',
      kelas: 'Kelas 7 (GCC)',
      salt: studentSalt1,
      passwordHash: studentHash1,
      avatar: '🐼',
      level: 'Pendekar HSK',
      totalStars: 65,
      streakDays: 8,
      completedLessons: [1, 2, 3],
      completedWorkbook: [1, 2],
      highestExamScore: 185,
      registeredAt: '2026-09-10T10:30:00.000Z',
      lastLoginAt: new Date().toISOString()
    };

    const defaultStudent2: UserProfile = {
      id: 'usr_student_02',
      name: 'Siti Rahma',
      email: 'siti@siswa.edu',
      role: 'siswa',
      kelas: 'Kelas 10',
      salt: studentSalt2,
      passwordHash: studentHash2,
      avatar: '👧',
      level: 'Prajurit Mandarin',
      totalStars: 40,
      streakDays: 4,
      completedLessons: [1, 2],
      completedWorkbook: [1],
      highestExamScore: 160,
      registeredAt: '2026-09-15T10:30:00.000Z',
      lastLoginAt: new Date().toISOString()
    };

    this.users = [defaultTeacher, defaultStudent1, defaultStudent2];
    this.currentUser = defaultStudent1;
    this.saveUsers();
    this.saveSession();

    // Seed default submissions & results
    this.submissions = [
      {
        id: 'sub_001',
        studentId: 'usr_student_01',
        studentName: 'Budi Santoso',
        studentClass: 'Kelas 7 (GCC)',
        chapterId: 1,
        type: 'Tulisan Hanzi (田字格)',
        target: '你 (nǐ)',
        submittedAt: new Date(Date.now() - 86400000).toISOString(),
        status: 'Sudah Dinilai',
        score: 95,
        feedback: 'Goresan撇 (piě) dan 竖 (shù) sangat proporsional di dalam kotak Tianzi Ge!'
      },
      {
        id: 'sub_002',
        studentId: 'usr_student_02',
        studentName: 'Siti Rahma',
        studentClass: 'Kelas 10',
        chapterId: 2,
        type: 'Rekaman Suara Pelafalan',
        target: '谢谢你！不客气！',
        submittedAt: new Date(Date.now() - 43200000).toISOString(),
        status: 'Belum Dinilai'
      }
    ];
    this.saveSubmissions();

    this.workbookResults = [
      {
        id: 'wbr_001',
        studentId: 'usr_student_01',
        studentName: 'Budi Santoso',
        studentClass: 'Kelas 7 (GCC)',
        chapterId: 1,
        totalQuestions: 12,
        correctAnswers: 11,
        scorePercent: 92,
        submittedAt: new Date(Date.now() - 72000000).toISOString(),
        difficulty: 'menengah',
        answersSummary: [
          { questionId: 101, question: "Audio: 你好！", selected: "Menyapa teman", correct: "Menyapa teman", isCorrect: true },
          { questionId: 102, question: "Audio: 您好！", selected: "Bentuk sopan", correct: "Bentuk sopan", isCorrect: true }
        ],
        teacherComment: "Pemahaman nada dan sapaan dasar sangat mantap!"
      }
    ];
    this.saveWorkbookResults();

    await this.logActivity('SYSTEM_SEED', 'Basis data diamankan dengan enkripsi PBKDF2/SHA-256');
  }

  getCurrentUser(): UserProfile | null {
    return this.currentUser;
  }

  getAllUsers(): UserProfile[] {
    return this.users;
  }

  getAllSubmissions(): StudentSubmission[] {
    return this.submissions;
  }

  getAllLogs(): ActivityLog[] {
    return this.logs;
  }

  getAllWorkbookResults(): StudentWorkbookResult[] {
    return this.workbookResults;
  }

  getCustomQuestions(chapterId: number): WorkbookQuestionItem[] {
    return this.customQuestions[chapterId] || [];
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
    role: 'siswa' | 'guru',
    kelas?: string
  ): Promise<{ success: boolean; message: string; user?: UserProfile }> {
    const existing = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return { success: false, message: 'Email sudah terdaftar. Silakan masuk.' };
    }

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    const newUser: UserProfile = {
      id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5),
      name,
      email: email.toLowerCase(),
      role,
      kelas: kelas || (role === 'guru' ? 'Guru Pengajar' : 'SMP Kelas 7 GCC'),
      salt,
      passwordHash,
      avatar: role === 'guru' ? '👩‍🏫' : '🐼',
      level: 'Pemula HSK',
      totalStars: 10,
      streakDays: 1,
      completedLessons: [],
      completedWorkbook: [],
      registeredAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };

    this.users.push(newUser);
    this.currentUser = newUser;
    this.saveUsers();
    this.saveSession();

    await this.logActivity('REGISTER', `Pendaftaran akun baru: ${name} (${newUser.kelas})`);
    return { success: true, message: 'Akun berhasil dibuat dengan enkripsi aman!', user: newUser };
  }

  async loginUser(email: string, password: string): Promise<{ success: boolean; message: string; user?: UserProfile }> {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return { success: false, message: 'Email atau kata sandi tidak cocok.' };
    }

    const computedHash = await hashPassword(password, user.salt);
    if (computedHash !== user.passwordHash) {
      return { success: false, message: 'Email atau kata sandi salah.' };
    }

    user.lastLoginAt = new Date().toISOString();
    this.currentUser = user;
    this.saveUsers();
    this.saveSession();

    await this.logActivity('LOGIN', `Login sukses untuk ${user.name} (${user.kelas || user.role})`);
    return { success: true, message: 'Berhasil login!', user };
  }

  logout() {
    if (this.currentUser) {
      this.logActivity('LOGIN', `Logout oleh ${this.currentUser.name}`);
    }
    this.currentUser = null;
    this.saveSession();
  }

  switchUser(user: UserProfile) {
    this.currentUser = user;
    this.saveSession();
    this.logActivity('LOGIN', `Beralih profil ke ${user.name}`);
  }

  updateUserProfile(updated: Partial<UserProfile>) {
    if (!this.currentUser) return;
    this.currentUser = { ...this.currentUser, ...updated };
    this.users = this.users.map(u => u.id === this.currentUser!.id ? this.currentUser! : u);
    this.saveUsers();
    this.saveSession();
  }

  addStars(amount: number) {
    if (!this.currentUser) return;
    this.currentUser.totalStars += amount;

    if (this.currentUser.totalStars >= 200) this.currentUser.level = 'Master HSK 1';
    else if (this.currentUser.totalStars >= 100) this.currentUser.level = 'Pendekar HSK';
    else if (this.currentUser.totalStars >= 40) this.currentUser.level = 'Prajurit Mandarin';
    else this.currentUser.level = 'Pemula HSK';

    this.updateUserProfile({
      totalStars: this.currentUser.totalStars,
      level: this.currentUser.level
    });
  }

  markLessonComplete(chapterId: number) {
    if (!this.currentUser) return;
    if (!this.currentUser.completedLessons.includes(chapterId)) {
      const updated = [...this.currentUser.completedLessons, chapterId].sort((a, b) => a - b);
      this.updateUserProfile({ completedLessons: updated });
      this.addStars(15);
      this.logActivity('COMPLETE_LESSON', `Menyelesaikan Buku Ajar Bab ${chapterId}`, chapterId);
    }
  }

  markWorkbookComplete(chapterId: number) {
    if (!this.currentUser) return;
    if (!this.currentUser.completedWorkbook.includes(chapterId)) {
      const updated = [...this.currentUser.completedWorkbook, chapterId].sort((a, b) => a - b);
      this.updateUserProfile({ completedWorkbook: updated });
      this.addStars(20);
      this.logActivity('SUBMIT_WORKBOOK', `Menyelesaikan Buku Latihan Workbook Bab ${chapterId}`, chapterId);
    }
  }

  // Connect student workbook answers directly to teacher
  saveStudentWorkbookResult(result: Omit<StudentWorkbookResult, 'id' | 'submittedAt'>) {
    const newRes: StudentWorkbookResult = {
      ...result,
      id: 'wbr_' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    this.workbookResults.unshift(newRes);
    this.saveWorkbookResults();

    this.markWorkbookComplete(result.chapterId);
    this.logActivity(
      'SUBMIT_WORKBOOK',
      `Hasil latihan Bab ${result.chapterId} dikirim ke guru (${result.correctAnswers}/${result.totalQuestions} Benar - Skor ${result.scorePercent}%)`,
      result.chapterId,
      result.scorePercent
    );
    return newRes;
  }

  addTeacherCommentToResult(resultId: string, comment: string) {
    this.workbookResults = this.workbookResults.map(r => {
      if (r.id === resultId) {
        return { ...r, teacherComment: comment };
      }
      return r;
    });
    this.saveWorkbookResults();
  }

  addSubmission(sub: Omit<StudentSubmission, 'id' | 'submittedAt' | 'status'>) {
    const newSub: StudentSubmission = {
      ...sub,
      id: 'sub_' + Date.now(),
      submittedAt: new Date().toISOString(),
      status: 'Belum Dinilai'
    };
    this.submissions.unshift(newSub);
    this.saveSubmissions();
    this.addStars(10);
    this.logActivity(
      sub.type.includes('Hanzi') ? 'SUBMIT_HANZI' : 'SUBMIT_VOICE',
      `Tugas ${sub.type} dikirim untuk Bab ${sub.chapterId}`,
      sub.chapterId
    );
    return newSub;
  }

  gradeSubmission(submissionId: string, score: number, feedback: string) {
    this.submissions = this.submissions.map(sub => {
      if (sub.id === submissionId) {
        return {
          ...sub,
          score,
          feedback,
          status: 'Sudah Dinilai'
        };
      }
      return sub;
    });
    this.saveSubmissions();
    this.logActivity('GRADE_STUDENT', `Memberikan nilai ${score} untuk tugas ${submissionId}`);
  }

  // Teacher custom question upload
  addCustomQuestion(chapterId: number, q: WorkbookQuestionItem) {
    if (!this.customQuestions[chapterId]) {
      this.customQuestions[chapterId] = [];
    }
    this.customQuestions[chapterId].push(q);
    this.saveCustomQuestions();
    this.logActivity('UPLOAD_SOAL', `Guru menambahkan soal baru untuk Bab ${chapterId}: "${q.question.slice(0, 30)}..."`, chapterId);
  }

  // Teacher bulk student roster import
  async batchRegisterStudents(studentsList: { name: string; email: string; kelas: string }[]): Promise<number> {
    let count = 0;
    for (const item of studentsList) {
      if (!this.users.some(u => u.email.toLowerCase() === item.email.toLowerCase())) {
        const salt = generateSalt();
        const passwordHash = await hashPassword('SiswaHSK123!', salt);
        this.users.push({
          id: 'usr_imp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
          name: item.name,
          email: item.email.toLowerCase(),
          role: 'siswa',
          kelas: item.kelas || 'SMP Kelas 7 GCC',
          salt,
          passwordHash,
          avatar: '🐼',
          level: 'Pemula HSK',
          totalStars: 10,
          streakDays: 1,
          completedLessons: [],
          completedWorkbook: [],
          registeredAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString()
        });
        count++;
      }
    }
    this.saveUsers();
    await this.logActivity('UPLOAD_SISWA', `Guru mengunggah daftar ${count} siswa baru secara massal.`);
    return count;
  }

  async logActivity(
    actionType: ActivityLog['actionType'] | 'SYSTEM_SEED',
    details: string,
    chapterId?: number,
    score?: number
  ) {
    const rawData = `${Date.now()}-${this.currentUser?.id || 'sys'}-${actionType}-${details}`;
    const hash = await computeHash(rawData);

    const logEntry: ActivityLog = {
      id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      userId: this.currentUser?.id || 'system',
      userName: this.currentUser?.name || 'Sistem MandarIn',
      userRole: this.currentUser?.role || 'siswa',
      timestamp: new Date().toISOString(),
      actionType: actionType as ActivityLog['actionType'],
      chapterId,
      score,
      details,
      deviceInfo: typeof navigator !== 'undefined' ? `${navigator.platform} (${navigator.userAgent.slice(0, 32)}...)` : 'Web Client',
      hash: hash.substring(0, 16)
    };

    this.logs.unshift(logEntry);
    if (this.logs.length > 300) this.logs.pop();
    this.saveLogs();
  }
}

export const dbService = new DatabaseService();
