import { WorkbookExercise, WorkbookQuestionItem } from '../types';
import { COMPREHENSIVE_WORKBOOK } from './hskWorkbookData';
import { COMPREHENSIVE_WORKBOOK_PART2 } from './hskWorkbookData2';
import { COMPREHENSIVE_WORKBOOK_PART3 } from './hskWorkbookData3';
import { COMPREHENSIVE_WORKBOOK_PART4 } from './hskWorkbookData4';

// Combine all 15 chapters (Bab 1 to 15, with 20 questions each, total 300+ rigorous questions!)
export const ALL_HSK_WORKBOOK_CHAPTERS: WorkbookExercise[] = [
  ...COMPREHENSIVE_WORKBOOK,
  ...COMPREHENSIVE_WORKBOOK_PART2,
  ...COMPREHENSIVE_WORKBOOK_PART3,
  ...COMPREHENSIVE_WORKBOOK_PART4
];

// Helper to get questions for a specific chapter, incorporating any custom teacher questions
export function getWorkbookForChapter(
  chapterId: number,
  customQuestions: WorkbookQuestionItem[] = []
): WorkbookExercise {
  const base = ALL_HSK_WORKBOOK_CHAPTERS.find((w) => w.chapterId === chapterId) || ALL_HSK_WORKBOOK_CHAPTERS[0];
  const teacherQuestionsForChapter = customQuestions.filter((q) => Number((q as any).chapterId) === chapterId);

  return {
    ...base,
    questions: [...base.questions, ...teacherQuestionsForChapter]
  };
}
