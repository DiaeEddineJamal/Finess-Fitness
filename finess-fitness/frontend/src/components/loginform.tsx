import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Construct the request body
    const requestBody = {
      username,
      password
    };

    try {
      const response = await axios.post('https://your-backend-url/api/login', requestBody);

      if (response.status === 200) {
        // Login successful, redirect or show success message
        console.log('Login successful');
      } else {
        // Login failed, handle error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App-header-login">
      <h1 className='page-title'>Finess Fitness 🏋🏽‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h2 className="login-title">Log In</h2>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit">Log In</button>
            </form>
            <p>
              Don't have an account?{' '}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
