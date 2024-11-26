import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <img src="https://via.placeholder.com/100" alt="MediConnect Logo" className="logo" />
            <h1>MediConnect</h1>
            <p className="tagline">Your Gateway to Expert Healthcare</p>
          </div>
          <div className="hero-text">
            <h2>Find Your Specialist</h2>
            <p>
              Connecting you with the best doctors near you. Book appointments with ease and access expert healthcare services.
            </p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/userdashboard')}>Explore Doctors</button>
              <button onClick={() => navigate('/userregister')}>Get Started</button>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/800X600"
            alt="Healthcare Illustration"
          />
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img
              src="https://via.placeholder.com/100"
              alt="Verified Doctors"
            />
            <h3>Verified Doctors</h3>
            <p>Our doctors are licensed and verified to ensure you get the best care.</p>
          </div>
          <div className="feature">
            <img
              src="https://via.placeholder.com/100"
              alt="Easy Appointments"
            />
            <h3>Easy Appointments</h3>
            <p>Book appointments in just a few clicks, anytime, anywhere.</p>
          </div>
          <div className="feature">
            <img
              src="https://via.placeholder.com/100"
              alt="Seamless Experience"
            />
            <h3>Seamless Experience</h3>
            <p>Enjoy a smooth and user-friendly experience across all devices.</p>
          </div>
        </div>
      </section>

      {/* For Doctors Section */}
      <section className="for-doctors">
        <h2>Are You a Doctor?</h2>
        <p>Join MediConnect and connect with patients effortlessly. Manage appointments and grow your practice.</p>
        <div className="doctor-buttons">
          <button onClick={() => navigate('/doctorlogin')}>Login as Doctor</button>
          <button onClick={() => navigate('/doctorregister')}>Register as Doctor</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 MediConnect. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
