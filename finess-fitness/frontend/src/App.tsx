import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/about-us';
import logoImage from './components/images/logonobg.png';
import ScrollAnimation from './components/ScrollAnimation';
import Workouts from './components/workouts';
import CaloriesCounter from './components/caloriescounter';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonials from './components/Testimonials';

// Import the Foutre component
import Foutre from './components/Foutre'; // Update the path accordingly

const FitnessDashboard: React.FC = () => {
  // useState hook not currently used in this component
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
              <li><Link to="/workouts">Workouts</Link></li>
              <li><Link to="/caloriescounter">Calories Counter</Link></li>
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
            width="1400"
            height="550"
            src="https://www.youtube.com/embed/PoiUaDVZw0w?si=oYFIFm6APK8H-DFf&amp;start=8&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <br />
        <Testimonials />
        <div className='About us'>
          <button className='aboutusbtn'>
            about us
          </button>
          <AboutUs />
        </div>
        <div className='quotes'>
          "Don't count the days, make the days count."
        </div>

        {/* Include the Foutre component */}
        
      </div>
      <Foutre />
    </div>
  );
}

export default FitnessDashboard;
