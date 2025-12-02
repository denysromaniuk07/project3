import React from 'react';
import { Sparkles, Upload } from 'lucide-react';

/**
 * OnboardingScreen.jsx
 */
const OnboardingScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-start justify-center p-6 pt-28">
    <div className="max-w-4xl w-full">
      <div className="text-center mb-10">
        <div className="inline-block p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-xl">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome to SkillPath AI</h1>
        <p className="text-gray-600">Upload a resume or answer a few quick questions — and we'll build your personalized roadmap.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-dashed border-indigo-200 rounded-2xl p-6 text-center cursor-pointer hover:border-indigo-400 transition">
            <div className="w-20 h-20 mx-auto mb-4 bg-indigo-50 rounded-lg flex items-center justify-center">
              <Upload className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg mb-1">Upload Resume</h3>
            <p className="text-sm text-gray-500">PDF, DOCX • Max 5MB</p>
          </div>

          <div className="rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Quick Questions</h3>
            <p className="text-sm text-gray-600 mb-4">We'll customize your learning path based on experience & goals.</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="border rounded-lg p-3">
                <div className="text-sm font-semibold">Career Goal</div>
                <div className="text-gray-500 text-sm">Full Stack Developer</div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="text-sm font-semibold">Experience Level</div>
                <div className="text-gray-500 text-sm">Intermediate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={() => goTo("splash")} className="px-4 py-2 rounded-lg">Back</button>
          <button onClick={() => goTo("resume-analysis")} className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold">Analyze →</button>
        </div>
      </div>
    </div>
  </div>
);

export default OnboardingScreen;