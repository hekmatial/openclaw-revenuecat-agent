import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight">
          AIがあなたの運命を読み解く
        </h2>
        <p className="text-slate-400 text-lg">
          フォロワー限定の特別な鑑定を、RevenueCatの安全な決済システムで。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 transition-colors">
          <h3 className="text-xl font-bold mb-2">無料鑑定</h3>
          <p className="text-slate-400 text-sm mb-4">本日の全体的な運勢を確認できます。</p>
          <button className="w-full py-2 bg-slate-800 rounded-lg font-medium">試してみる</button>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/50 hover:border-purple-400 transition-colors">
          <h3 className="text-xl font-bold mb-2">プレミアム詳細鑑定</h3>
          <p className="text-slate-400 text-sm mb-4">AIがあなたの個人的な悩みに対して具体的なアドバイスを提供します。</p>
          <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold">購読してアンロック</button>
        </div>
      </div>
    </div>
  );
}
