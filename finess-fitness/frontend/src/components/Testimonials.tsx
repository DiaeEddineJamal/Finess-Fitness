import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="testimonial-card-header">
            <img
              src="https://i.ibb.co/xJq3zCY/anastase-maragos-i-Uzge-POo-Gko-unsplash.jpg"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info">
              <h4 className="user-name">John Doe</h4>
              <p className="user-occupation">Fitness Enthusiast</p>
            </div>
          </div>
          <div className="testimonial-card-body">
            <p className="testimonial-text">
              "Finesse Fitness has been a game-changer for me. The personalized workouts and guidance from expert trainers have helped me achieve results I never thought possible. I highly recommend this app to anyone looking to take their fitness journey to the next level."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-header">
            <img
              src="https://i.ibb.co/1zCm6P6/ptrainer.jpg"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info">
              <h4 className="user-name">Jane Smith</h4>
              <p className="user-occupation">Yoga Instructor</p>
            </div>
          </div>
          <div className="testimonial-card-body">
            <p className="testimonial-text">
              "As a yoga instructor, I appreciate Finesse Fitness's holistic approach to wellness. The mindfulness resources and healthy eating tips have been invaluable in helping me maintain a balanced lifestyle. The app has truly become an integral part of my self-care routine."
            </p>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card-header">
            <img
              src="https://i.ibb.co/1z8GgPV/anastase-maragos-Hyv-E5-Si-KMUs-unsplash.jpg"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info">
              <h4 className="user-name">Michael Johnson</h4>
              <p className="user-occupation">Personal Trainer</p>
            </div>
          </div>
          <div className="testimonial-card-body">
            <p className="testimonial-text">
              "As a personal trainer, I'm always on the lookout for helpful tools to recommend to my clients. Finesse Fitness has exceeded my expectations with its comprehensive features and user-friendly interface. My clients have seen fantastic results, and I couldn't be happier with the app."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;