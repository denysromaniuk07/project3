import React from 'react';
import { Trophy, CheckCircle, Star } from 'lucide-react';

/**
 * AchievementsScreen.jsx
 */
const AchievementsScreen = ({ goTo, achievements }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-28 pb-16">
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-black">Achievements</h1>
        <button onClick={() => goTo("dashboard")} className="px-3 py-2 rounded-lg border">Back</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((a) => (
          <div key={a.id} className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
              <a.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="font-bold">{a.title}</div>
            <div className="text-sm text-gray-500 mt-2">{a.date}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AchievementsScreen;