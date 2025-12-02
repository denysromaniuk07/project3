import React from 'react';
import { Brain, CheckCircle, Sparkles } from 'lucide-react';

/**
 * ResumeAnalysisScreen.jsx
 */
const ResumeAnalysisScreen = ({ goTo }) => {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "Git", level: 65 },
  ];

  const gaps = [
    { name: "TypeScript", demand: "High", priority: "Critical" },
    { name: "Node.js", demand: "High", priority: "Important" },
    { name: "AWS", demand: "High", priority: "Important" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6 pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black mb-2">AI Resume Analysis</h1>
          <p className="text-gray-600">We analyzed your resume and extracted skills, gaps and best matches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
              <div>
                <div className="font-bold">Top Skills</div>
                <div className="text-sm text-gray-500">Extracted from your resume</div>
              </div>
            </div>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm font-bold text-indigo-600">{s.level}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg"><Sparkles className="w-5 h-5 text-orange-600" /></div>
              <div>
                <div className="font-bold">Skills Gap</div>
                <div className="text-sm text-gray-500">What to learn next</div>
              </div>
            </div>
            <div className="space-y-3">
              {gaps.map((g, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-100">
                  <div>
                    <div className="font-semibold">{g.name}</div>
                    <div className="text-sm text-gray-500">{g.demand} demand</div>
                  </div>
                  <div className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-bold">{g.priority}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="mb-4">
              <div className="text-sm opacity-90">Best Match</div>
              <div className="text-3xl font-black">Full Stack Developer</div>
              <div className="text-sm opacity-90 mt-1">Compatibility: <span className="font-bold">92%</span></div>
            </div>
            <div className="mt-4">
              <button onClick={() => goTo("learning-path")} className="w-full bg-white/20 border border-white/30 rounded-xl py-2 font-bold">Generate Learning Path</button>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={() => goTo("dashboard")} className="px-5 py-3 bg-white rounded-xl border">Back to Dashboard</button>
          <button onClick={() => goTo("learning-path")} className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold">Start Learning →</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysisScreen;