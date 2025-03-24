import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Ensure this CSS file exists

const HomePage = () => {
  const handleLogout = (event) => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) {
      event.preventDefault();
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Smart Home</div>
        <nav className="navbar">
          <Link to="/" className="active">
            Home
          </Link>
          <a href="#features">Features</a>
          <Link to="/about">About</Link>
          <a href="#footer">Contact</a>
          <Link to="/login" className="logout-button" onClick={handleLogout}>
            Logout
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Smart Home Manager</h1>
        <p>You can control your home by this app.</p>
        <button>Start Manager</button>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <p>&copy; Smart Home Controller with Phone. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
