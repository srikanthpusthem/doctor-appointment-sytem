import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import heroImage from "../assets/images/hero.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => navigate("/")}>
          MediConnect
        </div>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/userregister")}>Get Started</li>
          <li onClick={() => navigate("/doctorregister")}>Join as a Doctor</li>
        </ul>
        <button className="nav-cta" onClick={() => navigate("/userlogin")}>
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>
          <p>Access quality healthcare anytime, anywhere with trusted professionals.</p>
          <div className="hero-buttons">
            <button className="cta primary" onClick={() => navigate("/userregister")}>
              Get Started
            </button>
            <button className="cta secondary" onClick={() => navigate("/doctorregister")}>
              Join as a Doctor
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
          src={heroImage}
            alt="Healthcare illustration"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Primary Care"
            />
            <h3>Primary Care</h3>
            <p>General health consultations at your convenience.</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mental Health"
            />
            <h3>Mental Health</h3>
            <p>Get expert support for your emotional well-being.</p>
          </div>
          <div className="service-card">
            <img
              src="https://images.pexels.com/photos/3993217/pexels-photo-3993217.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chronic Management"
            />
            <h3>Chronic Management</h3>
            <p>Manage ongoing health conditions with ease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 MediConnect. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
