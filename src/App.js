import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
  // Define hardcoded user credentials (for demonstration purposes)
  const validCredentials = {
    loginId: 'user123',
    password: 'password123',
  };

  // State to store form input values
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
  });

  // State to manage authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission and authentication
  const handleLogin = () => {
    // Check if the entered credentials match the valid credentials
    if (
      formData.loginId === validCredentials.loginId &&
      formData.password === validCredentials.password
    ) {
      window.location.href = 'week.html';
     
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <div className="app">
      {/* Background image */}
      <div>  <div className="background-image"> </div></div>
     
      <div className='cont'>
         <img className="background-images" src='https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png'></img>
      <div className="login-container">
        <div className="login-form">
          {authenticated ? (
            <p className="welcome-message">Welcome, {validCredentials.loginId}!</p>
           
          ) : (
            <div>
              <h1>Login</h1>
              <div className="input-container">
                <label htmlFor="loginId">Login ID:</label>
                <input
                  type="text"
                  id="loginId"
                  name="loginId"
                  value={formData.loginId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button className="login-button" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Login form container */}
    
    </div>
  );
};

export default App;
