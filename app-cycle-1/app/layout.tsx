import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Fortune Teller POC",
  description: "RevenueCat powered fortune telling app for X influencers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
          <header className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Fortune Teller POC 🔮
            </h1>
            <div className="text-xs text-slate-500">Cycle 1 / Day 6</div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="p-6 border-t border-slate-800 text-center text-sm text-slate-500">
            Powered by <span className="font-semibold text-orange-400">RevenueCat</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
