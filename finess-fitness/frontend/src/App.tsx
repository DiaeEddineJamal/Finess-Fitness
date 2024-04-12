import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/about-us';
import logoImage from './components/images/logonobg.png';
import ScrollAnimation from './components/ScrollAnimation';
import Workouts from './components/workouts';
import CaloriesCounter from './components/caloriescounter';
import { Link } from 'react-router-dom';

const FitnessDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showWorkouts, setShowWorkouts] = useState(false);
  const [showCaloriesCounter, setShowCaloriesCounter] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
};

const showHomeSection = () => {
    setShowHome(true);
    setShowWorkouts(false);
    setShowCaloriesCounter(false); // Hide CaloriesCounter component
};

const showWorkoutsSection = () => {
    setShowHome(false);
    setShowWorkouts(true);
    setShowCaloriesCounter(false); // Hide CaloriesCounter component
};

const showCaloriesCounterSection = () => {
    setShowHome(false);
    setShowWorkouts(false);
    setShowCaloriesCounter(true); // Show CaloriesCounter component
};

  return (
    <div className="wrapper">
      {/* Background image */}
      <div className="bg-image"></div>
      
      {/* Top Navbar with Scroll Animation */}
      <ScrollAnimation>
      <nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
                <div className="container">
            
                    <div className="logo-container">
                       <img src={logoImage} alt="Logo" className="logo" width={120} height={53} />
                    </div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><Link to = "/workouts">Workouts</Link></li>
                        <li><Link to = "/caloriescounter">Calories Counter</Link></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Support us</a></li>
                    </ul>
                </div>
            </nav>
      </ScrollAnimation>

      {/* Page Content */}
      <div className="content">
        <h2 className="page-title">Finess Fitness</h2>

        {/* Embedded YouTube Video */}
        <div className="video-container">
          <iframe
            width="1100"
            height="500"
            src="https://www.youtube.com/embed/WAlpUCrf5ZE?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className='About us'>
          <button className='aboutusbtn'>
            about us
          </button>
          <AboutUs />
        </div>
        <br />
        <br />
        <div className='quotes'>
          "Don't count the days, make the days count."
        </div>
      </div>
    </div>
  );
}

export default FitnessDashboard;