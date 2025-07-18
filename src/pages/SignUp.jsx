import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useOnboarding } from "../context/OnboardingContext";
import Button from "../components/common/Button";
import BigMascotIcon from "../assets/icons/BigMascotIcon";
import { Link } from "react-router-dom";

export default function SignUp({ hideLogin, onLogin, onClose }) {
  const { signup } = useAuth();
  const { selectedQuitHabits, selectedBuildHabits } = useOnboarding();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const ok = signup(email, password, selectedQuitHabits, selectedBuildHabits);
    if (ok) {
      navigate("/profile");
      onClose && onClose();
    } else {
      setError("Could not sign up");
    }
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-200" onClick={onClose} />
        {/* Modal content */}
        <div className="relative z-10 w-full max-w-xl mx-4">
          <div className="bg-green-500 w-full min-h-[340px] border-4 border-black shadow-[8px_8px_0_#000] p-14 flex flex-col gap-6 animate-fade-in-up" style={{ borderRadius: 0 }}>
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
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2 tracking-tight">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" className="bg-[#171925] border border-[#353650] text-white shadow-[4px_4px_0_#000] placeholder:text-gray-400  px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-accent transition" />
              <input type="text" placeholder="Last Name" className="bg-[#171925] border border-[#353650] text-white shadow-[4px_4px_0_#000] placeholder:text-gray-400  px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-accent transition" />
              <input type="number" placeholder="Age" className="bg-[#171925] border border-[#353650] text-white shadow-[4px_4px_0_#000] placeholder:text-gray-400  px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-accent transition" />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="bg-[#171925] border border-[#353650] text-white shadow-[4px_4px_0_#000] placeholder:text-gray-400  px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-accent transition" required />
              <div className="relative">
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-[#171925] border border-[#353650] text-white shadow-[4px_4px_0_#000] placeholder:text-gray-400  px-5 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-accent transition" required />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-accent focus:outline-none">
                  <span role="img" aria-label="Show Password">👁️</span>
                </button>
              </div>
              {error && <div className="text-red-300 text-sm font-semibold text-center">{error}</div>}
              <Button color="accent" className="w-full text-lg py-3  font-bold tracking-tight mt-2" type="submit">Sign Up</Button>
            </form>
        {!hideLogin && (
          <div className="flex flex-col items-center gap-2 mt-2">
            <span className="text-gray-400 text-sm">Already have an account?</span>
            <button onClick={onLogin} className="w-full">
              <Button color="white" className="w-full text-lg py-3  font-bold tracking-tight">Login</Button>
            </button>
          </div>
        )}
        <div className="flex items-center gap-2 text-white mt-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex gap-4 mt-2">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-white  py-3 text-gray-700 hover:bg-gray-50 transition">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            <span className="font-semibold">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-white  py-3 text-gray-700 hover:bg-gray-50 transition">
            <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
            <span className="font-semibold">Facebook</span>
          </button>
        </div>
        <div className="text-center text-white text-xs font-medium italic mt-2">
          By signing in to Nudgr, you agree to our <a href="#" className="underline hover:text-accent">Terms</a> and <a href="#" className="underline hover:text-accent">Privacy Policy</a>.<br />
          This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-accent">Privacy Policy</a> and <a href="#" className="underline hover:text-accent">Terms of Service</a> apply.
        </div>
          {/* Absolutely positioned modal buttons */}
          {(!hideLogin || onClose) && (
            <>
              <button
                onClick={onClose}
                className="absolute top-6 right-7 text-white/80 hover:text-white text-2xl font-bold focus:outline-none"
                aria-label="Close"
              >
                ×
              </button>
              {!hideLogin && (
                <button
                  onClick={onLogin}
                  className="absolute top-6 left-7 z-20"
                >
                  <Button color="white" className="text-lg px-6 py-3 font-semibold">Login</Button>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  </>
  );
}
