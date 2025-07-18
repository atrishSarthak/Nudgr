import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Navbar({ onLogin, onSignUp }) {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-primary shadow-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-2xl text-dark">
          {/* Mascot Placeholder */}
          🦁
        </div>
        <span className="text-2xl font-extrabold font-sans text-dark tracking-tight">Nudgr</span>
      </div>
      <div className="flex gap-4">
        {typeof onLogin === 'function' ? (
          <Button color="white" className="text-lg px-6 py-3 font-semibold" onClick={onLogin}>Login</Button>
        ) : (
          <Link to="/login">
            <Button color="white" className="text-lg px-6 py-3 font-semibold">Login</Button>
          </Link>
        )}
        {typeof onSignUp === 'function' ? (
          <Button color="accent" className="text-lg px-6 py-3 font-semibold" onClick={onSignUp}>Sign Up</Button>
        ) : (
          <Link to="/signup">
            <Button color="accent" className="text-lg px-6 py-3 font-semibold">Sign Up</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
