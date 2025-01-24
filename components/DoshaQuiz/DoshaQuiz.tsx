'use client';

import { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import ResultCard from './ResultCard';
import { quizQuestions } from '@/lib/quiz-data';

export default function DoshaQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({
    vata: 0,
    pitta: 0,
    kapha: 0
  });

  const handleAnswer = (questionId: number, doshaType: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: doshaType
    }));
  };

  const calculateResults = () => {
    const newResults = {
      vata: 0,
      pitta: 0,
      kapha: 0
    };

    Object.values(answers).forEach(doshaType => {
      newResults[doshaType as keyof typeof newResults]++;
    });

    setResults(newResults);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setResults({ vata: 0, pitta: 0, kapha: 0 });
  };

  const isQuizComplete = Object.keys(answers).length === quizQuestions.length;

  if (showResults) {
    return <ResultCard results={results} onReset={resetQuiz} />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {quizQuestions.map((question) => (
        <QuizQuestion
          key={question.id}
          question={question}
          onAnswer={(doshaType) => handleAnswer(question.id, doshaType)}
          selectedAnswer={answers[question.id]}
        />
      ))}

      <button
        onClick={calculateResults}
        disabled={!isQuizComplete}
        className={`w-full py-3 rounded-lg text-white font-semibold ${
          isQuizComplete
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        {isQuizComplete ? 'Show My Results' : 'Please Answer All Questions'}
      </button>
    </div>
  );
}
