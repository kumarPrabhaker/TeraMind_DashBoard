
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/mockApi';

const UserManagement = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData().then(data => setUserData(data));
  }, []);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
