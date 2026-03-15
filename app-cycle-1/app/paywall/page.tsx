"use client";

import { useEffect, useState } from "react";
// In a real app, we'd import the rc instance
// import { rc } from "@/lib/revenuecat";

export default function Paywall() {
  const [offerings, setOfferings] = useState<any[]>([]);

  // Placeholder offerings for POC visualization
  const mockOfferings = [
    {
      id: "rc_monthly",
      title: "Monthly Seeker",
      price: "¥980",
      description: "Unlimited AI readings for one month.",
      features: ["Unlimited Tarot pulls", "Deep Star analysis", "Save your history"]
    },
    {
      id: "rc_annual",
      title: "Yearly Visionary",
      price: "¥8,800",
      description: "A full year of spiritual guidance. Best value!",
      features: ["All Monthly features", "Exclusive monthly forecast", "Priority AI response"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <div className="max-w-md w-full text-center mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Unlock Your Full Potential 💎</h1>
        <p className="text-slate-600">Choose a plan to get unlimited access to the AI Oracle.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl w-full sm:grid-cols-2">
        {mockOfferings.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent hover:border-purple-500 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-1">{pkg.title}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold">{pkg.price}</span>
              <span className="text-slate-500 text-sm">/ {pkg.id.includes("monthly") ? "month" : "year"}</span>
            </div>
            <p className="text-slate-600 text-sm mb-6">{pkg.description}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg">
              Start Your Journey
            </button>
          </div>
        ))}
      </div>

      <button className="mt-8 text-slate-400 text-sm hover:underline">
        Restore Purchases
      </button>

      <div className="mt-12 text-xs text-slate-400 text-center max-w-xs">
        By subscribing, you agree to our Terms of Service and Privacy Policy. Subscriptions renew automatically unless cancelled.
      </div>
    </div>
  );
}
