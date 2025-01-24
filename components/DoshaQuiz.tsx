'use client';

import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: {
    vata: string;
    pitta: string;
    kapha: string;
  };
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your body frame like?",
    options: {
      vata: "Thin, light, tall or short",
      pitta: "Medium, moderate build",
      kapha: "Large, solid, well-developed"
    }
  },
  {
    id: 2,
    text: "How's your skin typically?",
    options: {
      vata: "Dry, rough, thin",
      pitta: "Warm, reddish, sensitive",
      kapha: "Thick, oily, smooth"
    }
  },
  {
    id: 3,
    text: "What's your typical energy level?",
    options: {
      vata: "Variable, comes in bursts",
      pitta: "Strong, purposeful",
      kapha: "Steady, enduring"
    }
  },
  {
    id: 4,
    text: "How do you typically respond to stress?",
    options: {
      vata: "Anxious and worried",
      pitta: "Irritable and intense",
      kapha: "Calm and steady"
    }
  },
  {
    id: 5,
    text: "What's your appetite like?",
    options: {
      vata: "Irregular, variable",
      pitta: "Strong, sharp",
      kapha: "Steady, can skip meals"
    }
  }
];

export default function DoshaQuiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Record<string, number>>({
    vata: 0,
    pitta: 0,
    kapha: 0
  });

  const handleSelection = (questionId: number, doshaType: string) => {
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

  const getDominantDosha = () => {
    const maxScore = Math.max(...Object.values(results));
    const dominantDoshas = Object.entries(results)
      .filter(([_, score]) => score === maxScore)
      .map(([dosha]) => dosha);
    
    return dominantDoshas.join('-');
  };

  const isQuizComplete = Object.keys(answers).length === questions.length;

  return (
    <div className="max-w-2xl mx-auto">
      {!showResults ? (
        <>
          {questions.map((question) => (
            <div key={question.id} className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
              <div className="space-y-3">
                {Object.entries(question.options).map(([doshaType, text]) => (
                  <button
                    key={doshaType}
                    onClick={() => handleSelection(question.id, doshaType)}
                    className={`w-full p-3 text-left rounded-lg transition-colors ${
                      answers[question.id] === doshaType
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
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
        </>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Dosha Profile</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Vata:</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-500 rounded-full h-4"
                  style={{ width: `${(results.vata / questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{results.vata}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Pitta:</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-red-500 rounded-full h-4"
                  style={{ width: `${(results.pitta / questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{results.pitta}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Kapha:</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 rounded-full h-4"
                  style={{ width: `${(results.kapha / questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{results.kapha}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Your Dominant Dosha:</h3>
            <p className="text-lg">{getDominantDosha()}</p>
          </div>

          <button
            onClick={resetQuiz}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Take Quiz Again
          </button>
        </div>
      )}
    </div>
  );
} 