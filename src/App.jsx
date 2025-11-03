import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  Home,
  BookOpen,
  Briefcase,
  TrendingUp,
  User,
  Upload,
  Target,
  CheckCircle,
  Clock,
  ArrowRight,
  Star,
  Users,
  Zap,
  Trophy,
  Settings,
  Bell,
  Search,
  Brain,
  Sparkles,
  Rocket,
  Play,
  Menu,
  MessageSquare,
  MapPin,
  DollarSign,
  Heart,
  Share2,
  Plus,
  ChevronRight,
  FileText,
  Camera,
  Lock,
  X,
  Edit,
  Mail,
  Code,
  Github,
  ExternalLink,
  heckCircle,
} from "lucide-react";

/**
 * CareerPlatformDesign.jsx
 * Повний компонент з усіма екранами:
 * splash, onboarding, resume-analysis, dashboard,
 * learning-path, course-detail, projects, opportunities,
 * community, profile, achievements
 *
 * Потребує: React, Tailwind CSS, lucide-react
 */

const CareerPlatformDesign = () => {
  const [activeScreen, setActiveScreen] = useState("splash");

  // State для деталей курсів / проектів / профілю
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", status: "In Progress", difficulty: 3, progress: 65 },
    { id: 2, title: "API Integration", status: "Not Started", difficulty: 4, progress: 0 },
    { id: 3, title: "Realtime Chat App", status: "Completed", difficulty: 5, progress: 100 },
  ]);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    title: "Aspiring Full Stack Developer",
    location: "Warsaw, Poland",
    bio: "I build delightful web experiences. Learning everyday.",
  });
  const [communityPosts] = useState([
    { id: 1, author: "Marta", text: "Як почати з Node.js? Є добрі ресурси?", likes: 12 },
    { id: 2, author: "Lukas", text: "Поділіться порадами щодо технічних співбесід.", likes: 8 },
  ]);
  const [achievements] = useState([
    { id: 1, title: "First Project", date: "2025-03-10", icon: Trophy },
    { id: 2, title: "100% Course Completion", date: "2025-07-21", icon: CheckCircle },
    { id: 3, title: "Streak: 30 days", date: "2025-10-01", icon: Star },
  ]);

  // Данні для LearningPath
  const learningCourses = [
    { id: "c1", title: "React Hooks Deep Dive", progress: 75, modules: 8, time: "4h", color: "from-indigo-500 to-purple-500" },
    { id: "c2", title: "TypeScript for JS Devs", progress: 40, modules: 6, time: "6h", color: "from-green-400 to-teal-500" },
    { id: "c3", title: "Node.js & Express", progress: 20, modules: 5, time: "5h", color: "from-yellow-400 to-orange-400" },
  ];

  // Utility: перемикання екранів
  const goTo = (screen, opts = {}) => {
    if (opts.course) setSelectedCourse(opts.course);
    setActiveScreen(screen);
    window.scrollTo?.(0, 0);
  };

  // Projects handlers
  const toggleProjectComplete = (id) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, status: p.status === "Completed" ? "In Progress" : "Completed", progress: p.status === "Completed" ? 80 : 100 } : p)));
  };

  const markProjectProgress = (id, progress) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, progress: Math.min(100, Math.max(0, progress)) } : p)));
  };

  // tiny helpers
  const ProgressBar = ({ value = 0, gradient = "from-indigo-500 to-purple-500" }) => (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div className={`h-full rounded-full bg-gradient-to-r ${gradient} shadow-sm`} style={{ width: `${value}%` }} />
    </div>
  );

  // ---------------- SCREENS ----------------

  const ScreenNav = () => {
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

  const SplashScreen = () => (
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

  const OnboardingScreen = () => (
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

  const ResumeAnalysisScreen = () => {
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

  const DashboardScreen = () => (
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

  const LearningPathScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="inline-block p-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 shadow-xl">
          <BookOpen className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Your Learning Path
        </h1>
        <p className="text-xl text-gray-600">
          Personalized roadmap curated by AI based on your skills & goals
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Rocket className="w-7 h-7 text-indigo-600" />
          Recommended Learning Modules
        </h2>

        <div className="space-y-6">
          {[
            { 
              title: 'TypeScript Fundamentals', 
              description: 'Strongly typed JavaScript for scalable projects',
              progress: 40,
              duration: '2h 15m',
              emoji: '💡',
              next: 'Advanced Type Inference'
            },
            { 
              title: 'Node.js & Express API Development', 
              description: 'Build backend APIs using Node.js and Express',
              progress: 20,
              duration: '3h 30m',
              emoji: '🧩',
              next: 'RESTful Authentication'
            },
            { 
              title: 'MongoDB Masterclass', 
              description: 'Learn NoSQL database design and querying',
              progress: 0,
              duration: '4h',
              emoji: '🍃',
              next: 'Aggregation Pipelines'
            }
          ].map((module, i) => (
            <div 
              key={i} 
              className="border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{module.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{module.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Clock className="w-4 h-4" /> {module.duration}
                    <ChevronRight className="w-4 h-4" /> Next: {module.next}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-indigo-600">{module.progress}%</div>
                  <button 
                    onClick={() => setActiveScreen('course-detail')}
                    className="mt-2 p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-all"
                  >
                    <Play className="w-4 h-4 text-indigo-600 group-hover:text-white" />
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-3 transition-all"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">🔥 Next Step in Your Journey</h3>
        <p className="text-lg opacity-90 mb-6">
          You’re 40% through your current learning path. Keep it up and unlock your next project challenge!
        </p>
        <button 
          onClick={() => setActiveScreen('projects')}
          className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
        >
          Start Project →
        </button>
      </div>
    </div>
  </div>
);

  const CourseDetailScreen = () => (
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
          onClick={() => setActiveScreen('learning-path')}
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
          onClick={() => setActiveScreen('projects')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Continue to Project →
        </button>
      </div>
    </div>
  </div>
);

  const ProjectsScreen = () => (
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
          onClick={() => setActiveScreen('opportunities')}
          className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Explore Job Opportunities →
        </button>
      </div>
    </div>
  </div>
);


  const OpportunitiesScreen = () => (
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
                  onClick={() => setActiveScreen('profile')}
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
          onClick={() => setActiveScreen('community')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          Go to Community →
        </button>
      </div>
    </div>
  </div>
);


  const CommunityScreen = () => (
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
              onClick={() => setActiveScreen('profile')}
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
          onClick={() => setActiveScreen('profile')}
          className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all"
        >
          View My Profile →
        </button>
      </div>
    </div>
  </div>
);


  const ProfileScreen = () => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Developer",
    title: "Frontend Engineer",
    location: "Lviv, Ukraine",
    bio: "Creative developer passionate about React, design systems and cool UI.",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    email: "alex.dev@example.com",
    telegram: "https://t.me/example",
  });
  const [temp, setTemp] = useState(profile);

  const save = () => {
    setProfile(temp);
    setEdit(false);
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "UI/UX Design", level: 70 },
  ];

  const achievements = [
    { title: "Top Performer 2025", icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { title: "100+ Projects Completed", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    { title: "5 Years Experience", icon: <Star className="w-5 h-5 text-indigo-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black">Profile</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo("dashboard")}
              className="px-3 py-2 rounded-lg border flex items-center gap-2 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setEdit(!edit)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              {edit ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
              {edit ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm mb-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold">
              {profile.name.charAt(0)}
            </div>
            <div className="flex-1">
              {!edit ? (
                <>
                  <div className="text-2xl font-bold">{profile.name}</div>
                  <div className="text-sm text-gray-500">
                    {profile.title} • {profile.location}
                  </div>
                  <p className="mt-3 text-gray-600">{profile.bio}</p>
                </>
              ) : (
                <div className="space-y-3">
                  <input
                    value={temp.name}
                    onChange={(e) => setTemp({ ...temp, name: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Full name"
                  />
                  <input
                    value={temp.title}
                    onChange={(e) => setTemp({ ...temp, title: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Job title"
                  />
                  <input
                    value={temp.location}
                    onChange={(e) => setTemp({ ...temp, location: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Location"
                  />
                  <textarea
                    value={temp.bio}
                    onChange={(e) => setTemp({ ...temp, bio: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Short bio"
                  />

                  {/* Editable Social Links */}
                  <h3 className="text-lg font-semibold mt-6">Social Links</h3>
                  <input
                    value={temp.github}
                    onChange={(e) => setTemp({ ...temp, github: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="GitHub URL"
                  />
                  <input
                    value={temp.linkedin}
                    onChange={(e) => setTemp({ ...temp, linkedin: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="LinkedIn URL"
                  />
                  <input
                    value={temp.email}
                    onChange={(e) => setTemp({ ...temp, email: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Email"
                  />
                  <input
                    value={temp.telegram}
                    onChange={(e) => setTemp({ ...temp, telegram: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Telegram link"
                  />

                  <div className="flex gap-2 pt-3">
                    <button
                      onClick={save}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
                    >
                      <Save className="w-4 h-4" /> Save
                    </button>
                    <button
                      onClick={() => {
                        setEdit(false);
                        setTemp(profile);
                      }}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" /> My Skills
          </h2>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" /> Achievements
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="p-4 border rounded-xl flex items-center gap-3 hover:shadow-md transition"
              >
                {a.icon}
                <span className="font-medium">{a.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Contact Links */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-600" /> Social & Contact Links
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-4 border rounded-xl flex items-center gap-3 hover:shadow-md transition">
                <Github className="w-5 h-5 text-gray-700" /> GitHub
                <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 border rounded-xl flex items-center gap-3 hover:shadow-md transition">
                <Briefcase className="w-5 h-5 text-blue-600" /> LinkedIn
                <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
              </a>
            )}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="p-4 border rounded-xl flex items-center gap-3 hover:shadow-md transition">
                <Mail className="w-5 h-5 text-red-500" /> {profile.email}
                <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
              </a>
            )}
            {profile.telegram && (
              <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="p-4 border rounded-xl flex items-center gap-3 hover:shadow-md transition">
                <MessageSquare className="w-5 h-5 text-sky-500" /> Telegram
                <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



  const AchievementsScreen = () => (
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

  // --------------- Render active screen ---------------
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <ScreenNav />

      {/* screens */}
      {activeScreen === "splash" && <SplashScreen />}
      {activeScreen === "onboarding" && <OnboardingScreen />}
      {activeScreen === "resume-analysis" && <ResumeAnalysisScreen />}
      {activeScreen === "dashboard" && <DashboardScreen />}
      {activeScreen === "learning-path" && <LearningPathScreen />}
      {activeScreen === "course-detail" && <CourseDetailScreen />}
      {activeScreen === "projects" && <ProjectsScreen />}
      {activeScreen === "opportunities" && <OpportunitiesScreen />}
      {activeScreen === "community" && <CommunityScreen />}
      {activeScreen === "profile" && <ProfileScreen />}
      {activeScreen === "achievements" && <AchievementsScreen />}

      {/* bottom nav for small screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-inner md:hidden">
        <div className="max-w-4xl mx-auto flex justify-around">
          {[
            { icon: <Home />, screen: "dashboard", label: "Home" },
            { icon: <BookOpen />, screen: "learning-path", label: "Learn" },
            { icon: <Briefcase />, screen: "opportunities", label: "Jobs" },
            { icon: <Users />, screen: "community", label: "Community" },
            { icon: <User />, screen: "profile", label: "Profile" },
          ].map((it, i) => (
            <button key={i} onClick={() => goTo(it.screen)} className="flex flex-col items-center text-xs text-gray-600">
              <div className="w-6 h-6">{it.icon}</div>
              <div>{it.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPlatformDesign;
