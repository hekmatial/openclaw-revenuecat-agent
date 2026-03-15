import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left">
            AI Fortune Teller 🔮
          </h1>
          <p className="text-lg text-gray-600 text-center sm:text-left">
            Your personal AI-powered spiritual guide. Get instant insights into your future, relationships, and career.
          </p>
        </div>

        <div className="w-full p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="question" className="text-sm font-medium text-gray-700">
              Ask the oracle:
            </label>
            <textarea
              id="question"
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none h-32"
              placeholder="What do the stars say about my career this month?"
            ></textarea>
          </div>
          
          <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2">
            Reveal My Destiny ✨
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
            <h3 className="font-semibold mb-1">Daily Tarot</h3>
            <p className="text-sm text-gray-500 text-balance">Pull a card to see what energy surrounds you today.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
            <h3 className="font-semibold mb-1">Star Compatibility</h3>
            <p className="text-sm text-gray-500 text-balance">Check how your signs align for love and business.</p>
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-400">
        <p>Built for Pepegumi's fans • Powered by AI & RevenueCat</p>
      </footer>
    </div>
  );
}
