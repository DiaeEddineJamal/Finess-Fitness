// SignupForm.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface SignupFormProps {
  switchToLoginForm: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ switchToLoginForm }) => {
  const handleLoginClick = () => {
    switchToLoginForm();
  };

  return (
    <div className="form-container">
      <form>
        <h2 className="signup-title">Sign Up</h2>
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
        <Link to="/login" onClick={handleLoginClick}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
