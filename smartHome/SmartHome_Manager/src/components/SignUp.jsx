import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link, NOT BrowserRouter

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default SignUp;
