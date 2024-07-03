
import React, { useEffect, useState } from 'react';
import { fetchActivityData, fetchAlertsData } from '../services/mockApi';

const Dashboard = () => {
  const [activityData, setActivityData] = useState([]);
  const [alertsData, setAlertsData] = useState([]);

  useEffect(() => {
    fetchActivityData().then(data => setActivityData(data));
    fetchAlertsData().then(data => setAlertsData(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Main Dashboard</h1>

      <section className="dashboard-section">
        <h2>Real-Time Monitoring</h2>
        <ul>
          {activityData.map(item => (
            <li key={item.id}>
              <strong>{item.user}</strong> - {item.action} ({new Date(item.timestamp).toLocaleTimeString()})
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-section">
        <h2>Alerts</h2>
        <ul>
          {alertsData.map(alert => (
            <li key={alert.id}>
              <strong>{alert.type}</strong> - {alert.description} ({new Date(alert.timestamp).toLocaleTimeString()})
            </li>
          ))}
        </ul>
      </section>

      {/* Add more sections for Activity Summary, Reports, User Management, Settings */}
    </div>
  );
};

export default Dashboard;
