import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div className="App-header">
      <h1 className='page-title'>Finess Fitness 🏋🏽‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <div className="form-container">
            <h2 className="signup-title">Sign Up</h2>
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" required />
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
    </div>
  );
}

export default SignupForm;
