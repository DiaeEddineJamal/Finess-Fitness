import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import AboutUs from './components/about-us';

const FitnessDashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="wrapper">
            {/* Background image */}
            <div className="bg-image"></div>

            {/* Side Navbar */}
            <nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
                <div className="container">
                    <div className="menu-icon" onClick={toggleSidebar}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <h1 className="logo">Fitness Dashboard</h1>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Workouts</a></li>
                        <li><a href="#">Calories calculator</a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Support us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Page Content */}
            <div className="content">
                <h2 className="page-title">Finess Fitness</h2>
              
                
                {/* Embedded YouTube Video */}
                <div className="video-container">
                    <iframe 
                        width="1100" 
                        height="500" // Adjusted width and height
                        src="https://www.youtube.com/embed/WAlpUCrf5ZE?autoplay=1" // Added autoplay
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
                    <AboutUs/>
                </div>
                <br>
                </br>
                <br>
                </br>
                <div className='quotes'>
                "Don't count the days, make the days count." 
                    

                </div>
            </div>
        </div>
    );
}

export default FitnessDashboard;
