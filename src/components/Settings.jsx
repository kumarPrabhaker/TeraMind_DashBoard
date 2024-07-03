
import React, { useState } from 'react';

const Settings = () => {
  // Example state for settings form
  const [settings, setSettings] = useState({
    emailNotifications: true,
    language: 'en',
    timezone: 'UTC'
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: newValue
    }));
  };

  // Handle form submission (mock implementation)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., save settings to backend)
    console.log('Settings saved:', settings);
    // Show alert after saving settings
    alert('Settings saved successfully!');
    // Reset form or show confirmation
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleInputChange}
            />
            Receive Email Notifications
          </label>
        </div>
        <div className="form-group">
          <label>
            Language:
            <select
              name="language"
              value={settings.language}
              onChange={handleInputChange}
            >
              <option value="en">English</option>
              <option value="Hn">Hindi</option>
              <option value="de">German</option>
              {/* Add more language options as needed */}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Timezone:
            <input
              type="text"
              name="timezone"
              value={settings.timezone}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;

