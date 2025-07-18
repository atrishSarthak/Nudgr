import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingModals from "./pages/LandingModals";
// import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AuthContext";

import { OnboardingProvider } from "./context/OnboardingContext";
import { AuthProvider } from "./context/AuthContext";

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    window.location.href = "/";
    return null;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingModals />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          </Routes>
        </Router>
      </OnboardingProvider>
    </AuthProvider>
  );
}

export default App;
