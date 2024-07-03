
import React, { useState, useEffect } from 'react';
import { fetchActivityData } from '../services/mockApi';

const RealTimeMonitoring = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetchActivityData().then(data => setActivityData(data));
  }, []);

  return (
    <div className="real-time-monitoring">
      <h2>Real-Time Monitoring</h2>
      <ul>
        {activityData.map(item => (
          <li key={item.id}>
            <strong>{item.user}</strong> - {item.action} ({new Date(item.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeMonitoring;
