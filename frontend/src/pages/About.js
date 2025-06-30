import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About This Application</h1>
        
        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>Frontend</h3>
              <ul>
                <li>React 18</li>
                <li>React Router</li>
                <li>Axios for API calls</li>
                <li>Modern CSS</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Morgan (logging)</li>
                <li>Helmet (security)</li>
              </ul>
            </div>
            <div className="tech-card">
              <h3>DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Ready for EC2</li>
                <li>Environment configs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Project Structure</h2>
          <div className="structure-info">
            <p>
              This application follows industry best practices with a modular architecture:
            </p>
            <ul>
              <li><strong>Frontend:</strong> Component-based React architecture with routing</li>
              <li><strong>Backend:</strong> MVC pattern with routes, controllers, and middleware</li>
              <li><strong>Configuration:</strong> Environment-based configuration management</li>
              <li><strong>Error Handling:</strong> Global error handling and logging</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 