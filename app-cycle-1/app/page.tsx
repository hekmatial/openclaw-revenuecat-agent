"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasEntitlement, setHasEntitlement] = useState(false); // Mock entitlement state

  const handleReveal = () => {
    if (!question.trim()) return;
    
    // RevenueCat check: if not entitled, redirect to paywall
    if (!hasEntitlement) {
      window.location.href = "/paywall";
      return;
    }
    
    setIsRevealed(true);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl w-full text-slate-900">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-left text-purple-900">
            FortuneFlow AI 🔮
          </h1>
          <p className="text-lg text-gray-600 text-center sm:text-left">
            Inspired by @pepegumi's spiritual insights. Your personal AI-powered spiritual guide. 
          </p>
        </div>

        <div className="w-full p-6 bg-white rounded-xl shadow-lg border border-purple-100 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="question" className="text-sm font-medium text-gray-700">
              Ask the oracle:
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none h-32"
              placeholder="What do the stars say about my career this month?"
            ></textarea>
          </div>
          
          <button 
            onClick={handleReveal}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
          >
            Reveal My Destiny ✨
          </button>
        </div>

        {isRevealed && (
          <div className="w-full p-6 bg-purple-50 border-2 border-purple-200 rounded-xl animate-in fade-in slide-in-from-bottom-4">
            <h3 className="text-lg font-bold text-purple-900 mb-2">The Oracle Speaks...</h3>
            <p className="text-slate-700 leading-relaxed italic">
              "The stars align in your favor for career growth. Watch for a specific opportunity around the 20th that involves collaboration. Trust your intuition, as @pepegumi often says."
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50">
            <h3 className="font-semibold mb-1">Daily Tarot</h3>
            <p className="text-sm text-gray-500 text-balance">Pull a card to see what energy surrounds you today.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-1">Star Compatibility</h3>
              <p className="text-sm text-gray-500 text-balance">Check how your signs align for love and business.</p>
            </div>
            {!hasEntitlement && (
              <span className="mt-2 text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded self-start">PRO ONLY</span>
            )}
          </div>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-400">
        <p>Built for Pepegumi's fans • Powered by AI & RevenueCat</p>
      </footer>
    </div>
  );
}
