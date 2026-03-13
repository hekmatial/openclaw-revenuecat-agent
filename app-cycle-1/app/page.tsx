import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            FortuneFlow AI
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Features
            </button>
            <button className="text-sm font-bold text-white bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700 transition-shadow shadow-md active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-700 uppercase bg-indigo-100 rounded-full">
          AI-Powered Spiritual Guide
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Your Personal <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Fortune Navigator
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Inspired by @pepegumi's wisdom. Instant, personalized astrology and tarot readings designed to guide your heart 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 hover:shadow-indigo-200 transition-all active:scale-95">
            Start Free Reading
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition-all">
            See How It Works
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white py-20 border-y">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Designed for Your Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-2xl">✨</div>
              <h3 className="text-xl font-bold mb-3">AI Daily Horizon</h3>
              <p className="text-slate-600 leading-relaxed">
                Hyper-personalized daily horoscopes based on your exact birth details, not just your sun sign.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-2xl">🃏</div>
              <h3 className="text-xl font-bold mb-3">Instant Tarot Guide</h3>
              <p className="text-slate-600 leading-relaxed">
                Ask specific questions about career or love and receive immediate AI-powered tarot readings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paywall Mockup / RC Integration Area */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">Unlock the Full Path</h2>
            <p className="text-slate-400 mb-8">
              Join FortuneFlow Pro to access unlimited tarot sessions and advanced transit tracking.
            </p>
            
            {/* Simple Paywall Pricing UI */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-indigo-500 bg-indigo-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="font-bold">Annual Pro</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">¥7,800 / year</div>
                  <div className="text-xs text-indigo-300">Save 33%</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border-2 border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                  <span className="font-bold">Monthly Pro</span>
                </div>
                <div className="font-bold">¥980 / month</div>
              </div>
            </div>

            <button className="w-full py-5 bg-white text-slate-900 font-black rounded-2xl shadow-xl hover:bg-indigo-50 transition-colors active:scale-95 mb-4">
              START 7-DAY FREE TRIAL
            </button>
            <p className="text-xs text-slate-500">
              Securely powered by RevenueCat. Cancel anytime.
            </p>
          </div>
          
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] -ml-32 -mb-32" />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-10 border-t text-center text-sm text-slate-500">
        <p>&copy; 2026 FortuneFlow AI. All rights reserved.</p>
        <p className="mt-2 italic">A POC for the RevenueCat Growth Advocate role 🤖</p>
      </footer>
    </main>
  );
}
