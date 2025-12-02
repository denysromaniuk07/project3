import React from 'react';
import { Briefcase, Search, MapPin } from 'lucide-react';

/**
 * OpportunitiesScreen.jsx
 */
const OpportunitiesScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="inline-block p-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-xl">
          <Briefcase className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Job Opportunities
        </h1>
        <p className="text-xl text-gray-600">
          Matched to your learning path and current skillset
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Search className="w-7 h-7 text-indigo-600" />
          Recommended for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              company: 'TechNova Labs',
              title: 'Junior Frontend Developer',
              match: 92,
              location: 'Remote • Europe',
              salary: '$1.2k – $2.5k/mo',
              skills: ['React', 'TypeScript', 'TailwindCSS'],
              emoji: '💻',
            },
            {
              company: 'NeuroLink Systems',
              title: 'AI Research Intern',
              match: 88,
              location: 'San Francisco, USA',
              salary: '$2k stipend',
              skills: ['Python', 'TensorFlow', 'Data Science'],
              emoji: '🧠',
            },
            {
              company: 'SkyCloud Global',
              title: 'Backend Engineer',
              match: 76,
              location: 'Hybrid • Berlin',
              salary: '$3k – $4k/mo',
              skills: ['Node.js', 'MongoDB', 'Express'],
              emoji: '☁️',
            },
            {
              company: 'NextWave Startups',
              title: 'Full Stack Developer',
              match: 85,
              location: 'Remote',
              salary: '$2.8k – $3.5k/mo',
              skills: ['MERN', 'API', 'Docker'],
              emoji: '🚀',
            },
          ].map((job, i) => (
            <div
              key={i}
              className="p-8 border-2 border-gray-200 rounded-3xl hover:border-indigo-300 hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{job.emoji}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  </div>
                  <p className="text-gray-600 font-medium">{job.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-indigo-600">{job.match}%</div>
                  <p className="text-sm text-gray-500">Match Score</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill, s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-gray-700 font-semibold">{job.salary}</div>
                <button
                  onClick={() => goTo('profile')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">🚀 Ready to Apply?</h3>
        <p className="opacity-90 mb-6">
          Update your profile and let AI boost your chances with auto-tailored cover letters.
        </p>
        <button
          onClick={() => goTo('community')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Go to Community →
        </button>
      </div>
    </div>
  </div>
);

export default OpportunitiesScreen;