import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const SignUpForm = () => {
  const navigate = useNavigate(); // For redirecting after signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.verifyPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log("✅ Signup successful:", res.data);
      alert("Signup Successful! Please log in.");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section className="wrapped">
      <h1>Sign-Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form id="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="verifyPassword" placeholder="Verify Password" value={formData.verifyPassword} onChange={handleChange} required />
        <button type="submit">Sign-Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in</Link></p>
    </section>
  );
};

export default SignUpForm;
