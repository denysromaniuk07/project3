import React from 'react';
import { Home, Star, Trophy, Zap, Users, BookOpen, Briefcase, Rocket, MessageSquare } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

/**
 * DashboardScreen.jsx
 */
const DashboardScreen = ({ goTo, profile, learningCourses }) => (
  <div className="min-h-screen bg-gray-50 pt-28 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-6">
        <h1 className="text-4xl font-black">Welcome back, {profile.name.split(" ")[0]}! 👋</h1>
        <p className="text-gray-600">You are 67% through your Full Stack Developer path</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[{ label: "Skills Acquired", value: 12, icon: Star, color: "from-yellow-400 to-orange-500" },
          { label: "Projects Done", value: 5, icon: Trophy, color: "from-purple-400 to-pink-500" },
          { label: "Day Streak", value: 18, icon: Zap, color: "from-blue-400 to-indigo-500" },
          { label: "Network", value: 47, icon: Users, color: "from-green-400 to-teal-500" }].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center text-white mb-3`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black">{s.value}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-md border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Continue Learning</h3>
            <button onClick={() => goTo("learning-path")} className="text-indigo-600 font-bold">View All →</button>
          </div>

          <div className="space-y-4">
            {learningCourses.map((c) => (
              <div key={c.id} className="border rounded-2xl p-4 hover:shadow-lg transition flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${c.color} flex items-center justify-center text-white`}><BookOpen className="w-6 h-6" /></div>
                  <div>
                    <div className="font-bold">{c.title}</div>
                    <div className="text-sm text-gray-500">{c.modules ?? "—"} modules • {c.time ?? "—"}</div>
                  </div>
                </div>
                <div className="w-48">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold text-indigo-600">{c.progress}%</div>
                    <button onClick={() => goTo("course-detail", { course: c })} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm">Open</button>
                  </div>
                  <ProgressBar value={c.progress} gradient={c.color} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Quick Actions</h3>
          <div className="space-y-3">
            <button onClick={() => goTo("opportunities")} className="w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center gap-2"><Briefcase className="w-4 h-4" /> Find Jobs</button>
            <button onClick={() => goTo("projects")} className="w-full p-3 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-xl flex items-center justify-center gap-2"><Rocket className="w-4 h-4" /> Start Project</button>
            <button onClick={() => goTo("community")} className="w-full p-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-gray-700"><MessageSquare className="w-4 h-4" /> Community</button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-3xl p-6 shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">New Opportunities</h3>
          <button onClick={() => goTo("opportunities")} className="text-indigo-600 font-bold">View All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{ company: "TechCorp", role: "Frontend Intern", match: 92, type: "Internship", salary: "$800" },
            { company: "StartupXYZ", role: "UI/UX Project", match: 88, type: "Freelance", salary: "$600" },
            { company: "DevAgency", role: "React Dev", match: 85, type: "Contract", salary: "$1.2k" }].map((o, i) => (
            <div key={i} className="border rounded-2xl p-4 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm px-2 py-1 bg-green-100 rounded-full font-bold">{o.match}% Match</div>
                <div className="text-2xl">🏢</div>
              </div>
              <div className="font-bold">{o.role}</div>
              <div className="text-sm text-gray-500">{o.company}</div>
              <div className="flex items-center justify-between mt-3">
                <div className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">{o.type}</div>
                <div className="font-bold">{o.salary}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DashboardScreen;