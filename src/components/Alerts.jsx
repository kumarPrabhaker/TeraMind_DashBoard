
import React, { useState, useEffect } from 'react';
import { fetchAlertsData } from '../services/mockApi';

const Alerts = () => {
  const [alertsData, setAlertsData] = useState([]);

  useEffect(() => {
    fetchAlertsData().then(data => setAlertsData(data));
  }, []);

  return (
    <div className="alerts">
      <h2>Alerts</h2>
      <ul>
        {alertsData.map(alert => (
          <li key={alert.id}>
            <strong>{alert.type}</strong> - {alert.description} ({new Date(alert.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
