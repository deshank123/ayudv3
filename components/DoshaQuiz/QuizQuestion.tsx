import { QuizQuestion as QuestionType } from '@/lib/quiz-data';

interface QuizQuestionProps {
  question: QuestionType;
  onAnswer: (doshaType: string) => void;
  selectedAnswer?: string;
}

export default function QuizQuestion({ 
  question, 
  onAnswer, 
  selectedAnswer 
}: QuizQuestionProps) {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-[#2F3B2F]">
        {question.text}
      </h3>
      
      <div className="space-y-3">
        {Object.entries(question.options).map(([doshaType, text]) => (
          <button
            key={doshaType}
            onClick={() => onAnswer(doshaType)}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              selectedAnswer === doshaType
                ? 'bg-[#E4B04A] text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-[#2F3B2F]'
            }`}
          >
            <span className="block font-medium capitalize mb-1">{doshaType}</span>
            <span className="text-sm">{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
