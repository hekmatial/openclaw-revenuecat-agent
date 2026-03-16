'use client';

import { useEffect } from 'react';
import { initRevenueCat } from '@/lib/revenuecat';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initRevenueCat();
  }, []);

  return (
    <html lang="ja">
      <body className="bg-slate-50 text-slate-900">
        <header className="p-4 border-b bg-white">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold font-serif">FortuneFlow AI 🔮</h1>
            <nav className="space-x-4 text-sm">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#features" className="hover:text-indigo-600">Features</a>
              <a href="/paywall" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">Get Pro</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto py-8 px-4">
          {children}
        </main>
        <footer className="p-8 border-t text-center text-slate-400 text-xs">
          © 2026 FortuneFlow AI. Powered by RevenueCat & Agentic AI.
        </footer>
      </body>
    </html>
  );
}
