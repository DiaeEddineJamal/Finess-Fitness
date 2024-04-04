import React from 'react';
import './App.css'; // Import your CSS file for styling

const FitnessDashboard: React.FC = () => {
    return (
        <div className="wrapper">
            {/* Background image */}
            <div className="bg-image"></div>

            {/* Side Navbar */}
            <nav className="navbar">
                <div className="home-container">
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
                <h2 className="page-title">Welcome to Your Fitness Dashboard</h2>
                <p>This is where you can track your workouts, monitor your nutrition, and see your progress.</p>
                
                {/* Embedded YouTube Video */}
                <div className="video-container">
                    <iframe
                        width="1050"
                        height="550"
                        src="https://www.youtube.com/embed/ig17bjPE-hE?autoplay=1"
                        title="Finess Fitness"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default FitnessDashboard;
