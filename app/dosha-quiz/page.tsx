import DoshaQuiz from "@/components/DoshaQuiz/DoshaQuiz";

export const metadata = {
  title: 'Dosha Quiz | Sanjivani Ayurvedshala',
  description: 'Discover your Ayurvedic body type with our dosha quiz',
};

export default function DoshaQuizPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E6]">
      {/* Hero Section */}
      <div className="relative bg-[#2F3B2F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Dosha</h1>
          <p className="text-lg text-[#E4B04A]">Understanding your unique constitution</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F5F0E6] clip-path-slant" />
      </div>

      {/* Quiz Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2F3B2F] mb-6">Take the Dosha Quiz</h2>
            <p className="text-gray-600 mb-8">
              Answer these questions to discover your unique Ayurvedic constitution (Prakriti) 
              and receive personalized wellness recommendations.
            </p>
            <DoshaQuiz />
          </div>
        </div>
      </div>
    </main>
  );
}
