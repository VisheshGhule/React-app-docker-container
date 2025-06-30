import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to DevOps Application
          </h1>
          <p className="hero-subtitle">
            A modern fullstack application built with React, Node.js, and Docker
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Responsive</h3>
              <p>Built with modern React and optimized for performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Docker Ready</h3>
              <p>Containerized application ready for deployment</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Scalable Architecture</h3>
              <p>Modular backend structure for easy scaling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 