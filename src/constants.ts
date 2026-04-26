import { Subject, Recommendation, MenuItem } from './types';

export const SUBJECTS: Subject[] = [
  { id: 'math', name: 'Matematika', icon: 'Calculator', color: 'bg-green-500' },
  { id: 'indo', name: 'Bahasa Indonesia', icon: 'BookText', color: 'bg-orange-500' },
  { id: 'ipa', name: 'IPA', icon: 'FlaskConical', color: 'bg-blue-500' },
  { id: 'ips', name: 'IPS', icon: 'Globe', color: 'bg-purple-500' },
  { id: 'pkn', name: 'PKN', icon: 'Flag', color: 'bg-red-500' },
  { id: 'more', name: 'Lainnya', icon: 'LayoutGrid', color: 'bg-gray-500' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'latihan', title: 'Latihan Soal', subtitle: 'Latihan setiap hari', icon: 'FileText', gradient: 'from-blue-500 to-blue-600' },
  { id: 'ulangan', title: 'Ulangan', subtitle: 'Persiapan ulangan harian', icon: 'ClipboardCheck', gradient: 'from-green-500 to-green-600' },
  { id: 'quiz', title: 'Quiz', subtitle: 'Kuis seru dan menantang', icon: 'Trophy', gradient: 'from-yellow-400 to-yellow-500' },
  { id: 'tka', title: 'Latihan Ujian TKA', subtitle: 'Persiapan ujian TKA SD', icon: 'GraduationCap', gradient: 'from-indigo-500 to-indigo-600' },
  { id: 'bank', title: 'Bank Soal', subtitle: 'Ribuan soal terlengkap', icon: 'Library', gradient: 'from-rose-500 to-rose-600' },
];

export const RECOMMENDATIONS: Recommendation[] = [
  { id: '1', title: 'Operasi Hitung Campuran', type: 'LATIHAN', questions: 20, grade: 'Kelas 4', color: 'bg-green-100 text-green-700' },
  { id: '2', title: 'Ulangan Harian Bahasa Indonesia', type: 'ULANGAN', questions: 25, grade: 'Kelas 4', color: 'bg-indigo-100 text-indigo-700' },
  { id: '3', title: 'Quiz Pengetahuan Umum SD', type: 'QUIZ', questions: 15, grade: 'Kelas 4-6', color: 'bg-orange-100 text-orange-700' },
  { id: '4', title: 'Latihan TKA Numerasi', type: 'TKA', questions: 30, grade: 'Kelas 5-6', color: 'bg-blue-100 text-blue-700' },
];
