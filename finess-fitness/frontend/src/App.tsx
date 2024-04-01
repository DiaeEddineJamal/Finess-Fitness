import React, { useState } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom'; // Changed import to import BrowserRouter
import SignupForm from './components/signupform';
import LoginForm from './components/loginform';
import './App.css';
import AboutUs from './components/about-us';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const switchToLoginForm = () => {
    setShowLoginForm(true);
  };

  const switchToSignupForm = () => {
    setShowLoginForm(false);
  };

  return (
    <BrowserRouter> {/* Changed from Router to BrowserRouter */}
      <div className="App-header">
        <h1 className='page-title'>Finess Fitness 🏋🏽‍♀️</h1>
        
        <div className="content-container">
          <div className="form-container">
            {showLoginForm ? (
              <LoginForm switchToSignupForm={switchToSignupForm} />
            ) : (
              <SignupForm switchToLoginForm={switchToLoginForm} />
            )}
              
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
