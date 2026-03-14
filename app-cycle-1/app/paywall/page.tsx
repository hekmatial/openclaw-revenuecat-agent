'use client';

import React, { useEffect, useState } from 'react';

// Note: In a real app, this would be an environment variable.
// For the POC, we describe the integration pattern.
const REVENUECAT_WEB_SDK_URL = "https://cdn.revenuecat.com/web-sdk/v1/revenuecat.js";

export default function PaywallPage() {
  const [loading, setLoading] = useState(true);
  const [offerings, setOfferings] = useState<any>(null);

  useEffect(() => {
    // 1. Initialize RevenueCat Web SDK logic
    console.log("RevenueCat SDK would be initialized here with App ID.");
    
    // Simulate fetching offerings from RevenueCat
    const timer = setTimeout(() => {
      setOfferings({
        current: {
          packages: [
            { identifier: 'monthly', product: { title: 'Monthly Pro', priceString: '¥980' } },
            { identifier: 'annual', product: { title: 'Annual Pro', priceString: '¥7,800' } }
          ]
        }
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handlePurchase = (packageId: string) => {
    alert(`RevenueCat purchase flow initiated for: ${packageId}\n\nThis would call RC.purchase(package) behind the scenes.`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto flex items-center justify-center text-4xl mb-6 shadow-2xl shadow-indigo-500/20">
            🔮
          </div>
          <h1 className="text-3xl font-black mb-2 tracking-tight">FortuneFlow Pro</h1>
          <p className="text-slate-400">Unlock your spiritual potential with unlimited AI tarot and advanced transit charts.</p>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-20 bg-white/5 rounded-2xl" />
            <div className="h-20 bg-white/5 rounded-2xl" />
          </div>
        ) : (
          <div className="space-y-4">
            {offerings?.current.packages.map((pkg: any) => (
              <button
                key={pkg.identifier}
                onClick={() => handlePurchase(pkg.identifier)}
                className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                  pkg.identifier === 'annual' 
                  ? 'border-indigo-500 bg-indigo-500/10 hover:bg-indigo-500/20' 
                  : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="text-left">
                  <div className="font-bold text-lg">{pkg.product.title}</div>
                  {pkg.identifier === 'annual' && <div className="text-xs text-indigo-400 font-medium">Best Value — ¥650/mo equivalent</div>}
                </div>
                <div className="text-right">
                  <div className="font-black text-xl">{pkg.product.priceString}</div>
                  <div className="text-xs text-slate-500">7-day free trial</div>
                </div>
              </button>
            ))}

            <button 
              className="w-full mt-6 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98]"
            >
              CONTINUE TO TRIAL
            </button>
            
            <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              Powered by RevenueCat Web SDK
            </p>
          </div>
        )}

        <div className="mt-12 flex gap-6 justify-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <button className="hover:text-slate-400 transition-colors">Restore</button>
          <button className="hover:text-slate-400 transition-colors">Terms</button>
          <button className="hover:text-slate-400 transition-colors">Privacy</button>
        </div>
      </div>
    </div>
  );
}
