// LoginForm.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  switchToSignupForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ switchToSignupForm }) => {
  return (
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
        <Link to="/signup" onClick={switchToSignupForm}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
