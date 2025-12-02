import React from 'react';
import { Briefcase, Lock, CheckCircle } from 'lucide-react';

/**
 * ProjectsScreen.jsx
 */
const ProjectsScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6">
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="inline-block p-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-xl">
          <Briefcase className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI-Driven Projects
        </h1>
        <p className="text-xl text-gray-600">
          Build portfolio-ready projects tailored to your learning path
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: 'Personal Portfolio Website',
            difficulty: 'Beginner',
            progress: 90,
            category: 'Frontend',
            emoji: '🌐',
            color: 'from-green-400 to-emerald-600',
            status: 'In Progress',
          },
          {
            title: 'RESTful API with Express',
            difficulty: 'Intermediate',
            progress: 45,
            category: 'Backend',
            emoji: '⚙️',
            color: 'from-indigo-400 to-purple-600',
            status: 'In Progress',
          },
          {
            title: 'Full-Stack MERN App',
            difficulty: 'Advanced',
            progress: 0,
            category: 'Full Stack',
            emoji: '🚀',
            color: 'from-pink-500 to-red-600',
            status: 'Not Started',
          },
          {
            title: 'AI Resume Analyzer',
            difficulty: 'Pro',
            progress: 0,
            category: 'Machine Learning',
            emoji: '🧠',
            color: 'from-yellow-400 to-orange-600',
            status: 'Locked',
          },
        ].map((proj, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{proj.emoji}</span>
                <h3 className="text-2xl font-bold text-gray-900">{proj.title}</h3>
              </div>
              <span
                className={`px-4 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${proj.color}`}
              >
                {proj.category}
              </span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600 font-medium">
                Difficulty: <span className="font-bold text-gray-900">{proj.difficulty}</span>
              </div>
              <div className="text-sm font-bold text-indigo-600">{proj.progress}%</div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${proj.color}`}
                style={{ width: `${proj.progress}%` }}
              ></div>
            </div>

            <button
              className={`w-full py-4 font-bold rounded-2xl transition-all ${
                proj.status === 'Locked'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105'
              }`}
            >
              {proj.status === 'Locked' ? (
                <div className="flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" /> Locked
                </div>
              ) : proj.progress === 0 ? (
                'Start Project →'
              ) : proj.progress < 100 ? (
                'Continue Project →'
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" /> Completed
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl text-center">
        <h3 className="text-3xl font-bold mb-4">🎯 Complete Projects. Build Your Legacy.</h3>
        <p className="opacity-90 mb-8">
          Each project you complete brings you closer to becoming a certified Full Stack Developer.
        </p>
        <button
          onClick={() => goTo('opportunities')}
          className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Explore Job Opportunities →
        </button>
      </div>
    </div>
  </div>
);

export default ProjectsScreen;