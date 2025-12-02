import React from 'react';
import { Play, BookOpen, FileText, CheckCircle, Clock } from 'lucide-react';

/**
 * CourseDetailScreen.jsx
 */
const CourseDetailScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
    <div className="max-w-5xl mx-auto py-12">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900">React Hooks Deep Dive</h1>
            <p className="text-gray-600">6 modules • Intermediate • 4h 20m</p>
          </div>
        </div>
        <button 
          onClick={() => goTo('learning-path')}
          className="text-indigo-600 font-bold hover:underline"
        >
          ← Back to Path
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-10">
        <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          <Play className="w-20 h-20 text-white opacity-90 hover:opacity-100 cursor-pointer transition-all" />
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-lg text-white px-4 py-2 rounded-xl text-sm font-semibold">
            Lesson 1: Understanding useState
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Course Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            This course dives deep into React Hooks — a revolutionary way to use state and lifecycle features without writing a class. 
            You’ll learn how to structure components efficiently, manage global state, and optimize performance using advanced techniques.
          </p>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" /> Modules
            </h3>
            <div className="space-y-4">
              {[
                { title: 'useState & useEffect Basics', time: '45m', completed: true },
                { title: 'useReducer & State Management', time: '55m', completed: true },
                { title: 'Custom Hooks & Best Practices', time: '1h 10m', completed: false },
                { title: 'Performance Optimization with useMemo', time: '50m', completed: false },
                { title: 'Integrating Context API with Hooks', time: '1h 40m', completed: false },
              ].map((mod, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-5 border-2 rounded-2xl transition-all ${
                    mod.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {mod.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <Clock className="w-6 h-6 text-indigo-600" />
                    )}
                    <div>
                      <h4 className="font-bold text-gray-900">{mod.title}</h4>
                      <p className="text-sm text-gray-500">{mod.time}</p>
                    </div>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                      mod.completed
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {mod.completed ? 'Done' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl">
        <h3 className="text-3xl font-bold mb-3">🎯 Next Challenge Awaits</h3>
        <p className="opacity-90 mb-6">
          Complete all modules to unlock a hands-on React project and earn your SkillPath Badge.
        </p>
        <button 
          onClick={() => goTo('projects')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Continue to Project →
        </button>
      </div>
    </div>
  </div>
);

export default CourseDetailScreen;