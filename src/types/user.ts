export interface User {
  id: string;
  username: string;
  points: number;
  badges: Badge[];
  completedLessons: string[];
  completedQuizzes: string[];
  lastActivity: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
}

export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: string;
  points: number;
}
