
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className='sub-heading'>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/real-time-monitoring">Real-Time Monitoring</Link></li>
            <li><Link to="/alerts">Alerts</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/user-management">User Management</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>&copy; 2024 Prabhaker Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
