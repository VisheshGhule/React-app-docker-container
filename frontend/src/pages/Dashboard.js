import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [backendStatus, setBackendStatus] = useState('Loading...');
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health');
      if (response.ok) {
        const data = await response.json();
        setHealthData(data);
        setBackendStatus('Connected');
      } else {
        setBackendStatus('Error');
      }
    } catch (error) {
      console.error('Backend health check failed:', error);
      setBackendStatus('Disconnected');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="page-title">Application Dashboard</h1>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Backend Status</h3>
            <div className={`status-indicator ${backendStatus.toLowerCase()}`}>
              {backendStatus}
            </div>
            <button 
              className="btn btn-primary" 
              onClick={checkBackendHealth}
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Refresh Status'}
            </button>
          </div>

          {healthData && (
            <div className="dashboard-card">
              <h3>Backend Health Data</h3>
              <div className="health-data">
                <p><strong>Status:</strong> {healthData.status}</p>
                <p><strong>Version:</strong> {healthData.version}</p>
                <p><strong>Environment:</strong> {healthData.environment}</p>
                <p><strong>Uptime:</strong> {Math.floor(healthData.uptime)}s</p>
                <p><strong>Timestamp:</strong> {new Date(healthData.timestamp).toLocaleString()}</p>
              </div>
            </div>
          )}

          <div className="dashboard-card">
            <h3>Application Info</h3>
            <div className="app-info">
              <p><strong>Frontend:</strong> React 18</p>
              <p><strong>Backend:</strong> Node.js + Express</p>
              <p><strong>Containerized:</strong> Docker</p>
              <p><strong>Deployment:</strong> EC2 Ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 