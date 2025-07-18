import React from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/profile/Sidebar";

export default function Profile() {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Sidebar */}
      <Sidebar onLogout={logout} />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-16">
        {/* Mascot & Streak */}
        <div className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-yellow-400 rounded-2xl border-4 border-black shadow-lg w-32 h-32 flex items-center justify-center text-7xl">🦁</div>
            <div className="mt-2 text-center">
              <span className="text-2xl font-black text-dark">Welcome!</span>
              <div className="text-base font-semibold text-blue-900">{user.email}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {/* Streak/Progress Bar */}
            <div className="bg-white border-2 border-black rounded-xl shadow p-6 flex flex-col items-center">
              <div className="text-lg font-bold text-accent mb-2">Habit Streak</div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-green-400 h-4 rounded-full" style={{ width: "60%" }}></div>
              </div>
              <div className="mt-1 text-xs font-semibold text-gray-500">6 days in a row!</div>
            </div>
            {/* Stats/XP/Rewards */}
            <div className="flex gap-4 mt-2">
              <StatCard label="XP" value={120} color="bg-blue-400" />
              <StatCard label="Nudges" value={18} color="bg-green-400" />
              <StatCard label="Badges" value={3} color="bg-yellow-300" />
            </div>
          </div>
        </div>
        {/* Habits Section */}
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <HabitColumn title="Quit Habits" color="red" habits={user.habits.quit} emptyMsg="No quit habits selected." />
          <HabitColumn title="Build Habits" color="yellow" habits={user.habits.build} emptyMsg="No build habits selected." />
        </div>
        {/* Rewards/Badges Placeholder */}
        <div className="w-full max-w-3xl mt-10">
          <div className="bg-white border-2 border-black rounded-xl shadow p-6 flex flex-col items-center">
            <div className="text-lg font-bold text-accent mb-2">Rewards & Badges (Coming Soon!)</div>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">🏅</div>
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">🎖️</div>
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">🏆</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`flex flex-col items-center px-4 py-2 rounded-xl border-2 border-black shadow font-bold text-lg ${color} text-white`}>
      <div>{value}</div>
      <div className="text-xs font-semibold text-black/80">{label}</div>
    </div>
  );
}

function HabitColumn({ title, color, habits, emptyMsg }) {
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 flex flex-col gap-4">
      <div className={`text-xl font-bold mb-2 text-${color}-600`}>{title}</div>
      {habits.length === 0 ? (
        <div className="text-gray-400 italic">{emptyMsg}</div>
      ) : (
        <ul className="flex flex-col gap-2">
          {habits.map((h, i) => (
            <li key={h} className={`bg-${color}-100 border-l-4 border-${color}-500 px-4 py-2 rounded-lg font-semibold text-${color}-800 shadow`}>
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
