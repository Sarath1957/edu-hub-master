import React, { useState } from 'react';
import './log.css';

const LoginPage = () => {
    // State variables to store username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      console.log('Username:', username);
      console.log('Password:', password);
      // You can add your login logic here (e.g., sending data to a server)
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  };
  

export default LoginPage;