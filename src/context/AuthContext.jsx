import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, habits: { quit: [], build: [] } }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email, password) {
    // Simulate backend login
    // In production, call your backend API here
    // For demo, always succeed and restore demo data
    setUser({ email, habits: { quit: ["Smoking"], build: ["Exercise"] } });
    setIsAuthenticated(true);
    return true;
  }

  function signup(email, password, quitHabits, buildHabits) {
    // Simulate backend signup
    setUser({ email, habits: { quit: quitHabits, build: buildHabits } });
    setIsAuthenticated(true);
    return true;
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
