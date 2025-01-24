export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    vata: string;
    pitta: string;
    kapha: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "What's your body frame like?",
    options: {
      vata: "Thin, light, tall or short",
      pitta: "Medium, moderate build",
      kapha: "Large, solid, well-developed"
    }
  },
  // ... other questions
];
