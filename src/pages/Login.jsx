import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import BigMascotIcon from "../assets/icons/BigMascotIcon";

export default function Login({ hideSignUp, onSignUp, onClose }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const ok = login(email, password);
    if (ok) {
      navigate("/profile");
      onClose && onClose();
    } else {
      setError("Invalid credentials");
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-200" onClick={onClose} />
      {/* Modal content */}
      <div className="relative z-10 w-full max-w-xl mx-4">
        <div className="bg-green-500 w-full min-h-[340px] border-4 border-black shadow-[8px_8px_0_#000] p-14 flex flex-col gap-6 animate-fade-in-up" style={{ borderRadius: 0 }}>
      {/* Mascot in the corner for brand personality */}
          <div className="absolute left-4 top-4 hidden md:block">
        <BigMascotIcon className="w-16 h-16 opacity-80" />
      </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-7 text-white/80 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 tracking-tight">Log in</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-[#171925] border border-[#353650] text-white placeholder:text-gray-400 shadow-[4px_4px_0_#000] 0]  px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-accent transition"
            required
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-[#171925] border border-[#353650] text-white placeholder:text-gray-400 shadow-[4px_4px_0_#000] 0]  px-5 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-accent transition"
              required
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:underline">FORGOT?</button>
          </div>
          {error && <div className="text-red-300 text-sm font-semibold text-center">{error}</div>}
          <Button color="accent" className="w-full text-lg py-3  font-bold tracking-tight mt-2" type="submit">Log In</Button>
        </form>
        <div className="flex items-center gap-2 text-white">
          <div className="flex-1 h-px bg-[#353650]" />
          <span className="text-sm">OR</span>
          <div className="flex-1 h-px bg-[#353650]" />
        </div>
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#353650] bg-[#171925]  py-3 text-white hover:bg-[#23243a] transition">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            <span className="font-semibold">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-[#353650] bg-[#171925]  py-3 text-white hover:bg-[#23243a] transition">
            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            <span className="font-semibold">Facebook</span>
          </button>
        </div>
        <div className="text-center text-white text-xs font-medium italic mt-2">
          By signing in to Nudgr, you agree to our <a href="#" className="underline hover:text-accent">Terms</a> and <a href="#" className="underline hover:text-accent">Privacy Policy</a>.<br />
          This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-accent">Privacy Policy</a> and <a href="#" className="underline hover:text-accent">Terms of Service</a> apply.
        </div>
      </div>
        {/* Absolutely positioned modal buttons */}
        {(!hideSignUp || onClose) && (
          <>
            <button
              onClick={onClose}
              className="absolute top-6 right-7 text-white/80 hover:text-white text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            {!hideSignUp && (
              <button
                onClick={onSignUp}
                className="absolute top-6 left-7 z-20"
              >
                <Button color="white" className="text-lg px-6 py-3 font-semibold">Sign Up</Button>
              </button>
            )}
          </>
        )}
        {/* End modal content */}
      </div>
    </div>
  
  );
}
