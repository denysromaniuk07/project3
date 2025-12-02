import React from 'react';
import { Users, Star, MessageSquare, Heart } from 'lucide-react';

/**
 * CommunityScreen.jsx
 */
const CommunityScreen = ({ goTo }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6">
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="inline-block p-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-xl">
          <Users className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Developer Community
        </h1>
        <p className="text-xl text-gray-600">
          Connect, learn, and grow with other innovators worldwide
        </p>
      </div>

      {/* 🔹 AI Forum Feed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Posts */}
        <div className="md:col-span-2 space-y-8">
          {[
            {
              user: "Sophia Dev",
              avatar: "🧑‍💻",
              title: "How do I optimize React performance with hooks?",
              content:
                "I'm struggling with re-rendering issues in my dashboard. Any pro tips on memoization or useCallback?",
              likes: 42,
              comments: 8,
              time: "2h ago",
            },
            {
              user: "Artem AI",
              avatar: "🤖",
              title: "AI-powered resume scoring — my approach",
              content:
                "I built a small GPT-4 API that gives a 0–100 score to resumes. Would love feedback on my weighting algorithm.",
              likes: 61,
              comments: 14,
              time: "5h ago",
            },
            {
              user: "Lina Codes",
              avatar: "👩‍🎨",
              title: "TailwindCSS design tips",
              content:
                "Sharing my color palette combos for dashboard aesthetics. Hope it helps others building AI apps 💜",
              likes: 89,
              comments: 23,
              time: "1d ago",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="bg-white p-8 border-2 border-gray-200 rounded-3xl hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{post.avatar}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{post.user}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <h4 className="text-xl font-bold text-indigo-700 mb-2">{post.title}</h4>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-rose-500" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4 text-indigo-600" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Mentors */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" /> Top Mentors
            </h3>
            {[
              { name: "Emma Stone", role: "Frontend Guru", emoji: "🎨" },
              { name: "Liam Patel", role: "Backend Mentor", emoji: "⚙️" },
              { name: "Noah AI", role: "ML Expert", emoji: "🧠" },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-indigo-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{m.name}</h4>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                </div>
                <button className="text-indigo-600 font-bold text-sm hover:underline">
                  Message
                </button>
              </div>
            ))}
          </div>

          {/* AI Helper */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-3">🤖 Ask AI Mentor</h3>
            <p className="opacity-90 mb-6">
              Need coding advice or design feedback? Get instant insights powered by AI.
            </p>
            <button
              onClick={() => goTo('profile')}
              className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-2xl hover:scale-105 transition-all"
            >
              Ask AI →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl text-center">
        <h3 className="text-3xl font-bold mb-4">💬 Keep Learning. Keep Sharing.</h3>
        <p className="opacity-90 mb-6">
          Collaboration turns knowledge into mastery. Stay active and grow your network!
        </p>
        <button
          onClick={() => goTo('profile')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          View My Profile →
        </button>
      </div>
    </div>
  </div>
);

export default CommunityScreen;