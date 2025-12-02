import React from 'react';
import { TrendingUp } from 'lucide-react';

/**
 * SplashScreen.jsx
 */
const SplashScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6 pt-28 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
      <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-white/8 blur-3xl animate-pulse" />
    </div>

    <div className="relative z-10 text-center max-w-3xl">
      <div className="mb-6 inline-block">
        <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl animate-bounce">
          <TrendingUp className="w-12 h-12 text-indigo-600" />
        </div>
      </div>
      <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">SkillPath AI</h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8">Transform your career with personalized AI-guided learning and projects.</p>
      <div className="flex justify-center gap-4">
        <button onClick={() => goTo("onboarding")} className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-2xl hover:scale-105 transition">Get Started</button>
        <button onClick={() => goTo("dashboard")} className="px-6 py-4 bg-white/20 text-white rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition">Explore Dashboard</button>
      </div>
    </div>
  </div>
);

export default SplashScreen;