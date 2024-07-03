
const mockData = {
    activity: [
        { id: 1, user: 'Prabhaker', action: 'Logged in', timestamp: '2024-07-01T09:30:00Z' },
        { id: 2, user: 'Viji', action: 'Opened document', timestamp: '2024-07-01T09:31:00Z' },
        { id: 3, user: 'Herminie', action: 'Printed report', timestamp: '2024-07-01T09:32:00Z' },
        { id: 4, user: 'Wissley', action: 'Accessed settings', timestamp: '2024-07-01T09:33:00Z' },
        { id: 5, user: 'HARRY', action: 'Viewed details', timestamp: '2024-07-01T09:34:00Z' }
      
    ],
    alerts: [
      { id: 1, type: 'Security', description: 'Unauthorized access attempt', timestamp: '2024-07-01T09:30:00Z' },
      { id: 2, type: 'Productivity', description: 'High usage alert', timestamp: '2024-07-01T09:35:00Z' },
    
    ],
    reports: [
      { id: 1, name: 'Weekly Activity Report', date: '2024-06-25', status: 'Completed' },
      { id: 2, name: 'Productivity Summary', date: '2024-07-01', status: 'In Progress' },
      
    ],
    users: [
      { id: 1, name: 'Admin User', role: 'Administrator' },
      { id: 2, name: 'Manager User', role: 'Manager' },
      { id: 3, name: 'Employee User', role: 'Employee' },
      
    ],
  };
  
  export const fetchActivityData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.activity);
      }, 1000); // Simulate delay
    });
  };
  
  export const fetchAlertsData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.alerts);
      }, 1000); // Simulate delay
    });
  };
  
  export const fetchReportsData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.reports);
      }, 1000); // Simulate delay
    });
  };
  
  export const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.users);
      }, 1000); // Simulate delay
    });
  };
  