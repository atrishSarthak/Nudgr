import React from "react";
import { FaUser, FaListAlt, FaChartBar, FaGift, FaCog } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ onLogout }) {
  const { user } = useAuth();
  return (
    <aside className="bg-[#23243a] text-white w-20 md:w-56 min-h-screen flex flex-col items-center py-8 shadow-2xl border-r-4 border-black">
      <div className="mb-12 flex flex-col items-center">
        <div className="bg-yellow-400 rounded-full w-14 h-14 flex items-center justify-center text-4xl border-4 border-black shadow-lg mb-2">
          🦁
        </div>
        <span className="hidden md:block font-bold text-lg text-center mt-2 truncate max-w-[120px]">{user?.email}</span>
      </div>
      <nav className="flex flex-col gap-8 w-full items-center">
        <SidebarIcon icon={<FaUser />} label="Profile" />
        <SidebarIcon icon={<FaListAlt />} label="Habits" />
        <SidebarIcon icon={<FaChartBar />} label="Progress" />
        <SidebarIcon icon={<FaGift />} label="Rewards" />
        <SidebarIcon icon={<FaCog />} label="Settings" />
      </nav>
      <button
        className="mt-auto mb-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-bold shadow border-2 border-black"
        onClick={onLogout}
      >
        Log Out
      </button>
    </aside>
  );
}

function SidebarIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="text-2xl md:text-3xl mb-1 group-hover:text-accent transition-all">
        {icon}
      </div>
      <span className="hidden md:block text-xs font-semibold group-hover:text-accent transition-all">{label}</span>
    </div>
  );
}
