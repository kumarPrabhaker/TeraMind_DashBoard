

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import ActivitySummary from './components/ActivitySummary';
import Alerts from './components/Alerts';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';
import './App.css'

const App = () => {
  return (
    
    <div className='heading'>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="/activity-summary" element={<ActivitySummary />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
    </div>
  );
};

export default App;

