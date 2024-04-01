import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className="App-header">
      <h1 className='page-title'>Finess Fitness 🏋🏽‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <div className="form-container">
            <form>
              <h2 className="login-title">Log In</h2>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" required />
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
