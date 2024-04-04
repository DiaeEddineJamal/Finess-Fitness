import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      email,
      username,
      password
    };

    try {
      const response = await axios.post('/api/signup', requestBody);

      if (response.status === 200) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App-header">
      <h1 className='page-title'>Fitness Fitness 🏋🏽‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
