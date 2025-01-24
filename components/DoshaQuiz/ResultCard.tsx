import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultCardProps {
  results: Record<string, number>;
  onReset: () => void;
}

export default function ResultCard({ results, onReset }: ResultCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-[#2F3B2F]">Your Dosha Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(results).map(([dosha, score]) => (
          <div key={dosha} className="flex justify-between items-center">
            <span className="font-semibold capitalize">{dosha}:</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-4">
              <div
                className={`rounded-full h-4 ${
                  dosha === 'vata' ? 'bg-[#2F3B2F]' :
                  dosha === 'pitta' ? 'bg-[#E4B04A]' : 'bg-primary'
                }`}
                style={{ width: `${(score / 5) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2">{score}</span>
          </div>
        ))}
        <button
          onClick={onReset}
          className="w-full mt-6 py-3 bg-[#E4B04A] text-white rounded-lg hover:bg-[#c99b3f]"
        >
          Take Quiz Again
        </button>
      </CardContent>
    </Card>
  );
}
