
import React, { useState, useEffect } from 'react';
import { fetchReportsData } from '../services/mockApi';

const Reports = () => {
  const [reportsData, setReportsData] = useState([]);

  useEffect(() => {
    fetchReportsData().then(data => setReportsData(data));
  }, []);

  return (
    <div className="reports">
      <h2>Reports</h2>
      <ul>
        {reportsData.map(report => (
          <li key={report.id}>
            {report.name} - {report.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
