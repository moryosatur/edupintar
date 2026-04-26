export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Recommendation {
  id: string;
  title: string;
  type: string;
  questions: number;
  grade: string;
  color: string;
}

export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
}
