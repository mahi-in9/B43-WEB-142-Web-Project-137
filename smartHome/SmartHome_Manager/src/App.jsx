import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { HouseholdProvider } from "./context/HouseholdContext";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <HouseholdProvider>
        <Router>  {/* ✅ Use BrowserRouter only here */}
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </HouseholdProvider>
    </AuthProvider>
  );
}

export default App;
