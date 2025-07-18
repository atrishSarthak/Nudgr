import React from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";

export default function OnboardingAuthModal({ open, onLogin, onSignUp, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-md min-w-[320px] py-10 px-6 bg-green-500 border-4 border-black shadow-[8px_8px_0_#000] relative flex flex-col items-center" style={{ borderRadius: 24 }}>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center">Never lose your progress</h2>
        <div className="text-lg text-white/90 mb-8 text-center">Login or sign up to save your habits and track your journey.</div>
        <div className="flex flex-col gap-5 w-full items-center">
          <Button color="white" className="w-full py-4 text-lg font-bold" onClick={onLogin}>
            Login
          </Button>
          <Button color="yellow" className="w-full py-4 text-lg font-bold" onClick={onSignUp}>
            Sign Up
          </Button>
        </div>
      </div>
    </Modal>
  );
}
