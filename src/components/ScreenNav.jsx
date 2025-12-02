import React, { useState } from "react";
import { TrendingUp, Bell, Settings, X, Menu } from "lucide-react";

/**
 * ScreenNav.jsx
 * Top navigation component
 */
const ScreenNav = ({ activeScreen, goTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "splash", label: "🌟 Splash" },
    { id: "onboarding", label: "🚀 Onboarding" },
    { id: "resume-analysis", label: "🔍 Resume" },
    { id: "dashboard", label: "🏠 Dashboard" },
    { id: "learning-path", label: "📚 Learning" },
    { id: "course-detail", label: "📖 Course" },
    { id: "projects", label: "💼 Projects" },
    { id: "opportunities", label: "💰 Jobs" },
    { id: "community", label: "👥 Community" },
    { id: "profile", label: "👤 Profile" },
    { id: "achievements", label: "🏆 Achievements" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="font-bold text-lg">SkillPath AI</div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:grid flex-1 grid-cols-11 gap-2 mx-6">
          {navItems.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all text-center
                ${activeScreen === s.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            A
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown with animation */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col p-3">
          {navItems.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                goTo(s.id);
                setMenuOpen(false);
              }}
              className={`text-left w-full px-4 py-2 rounded-lg text-sm font-medium mb-1 transition-all
                ${activeScreen === s.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenNav;