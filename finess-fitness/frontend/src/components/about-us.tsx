import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        className="carousel"
        
      >
        <div className="carousel-slide">
          <h3 className="carousel-heading">
            <span className="brand-name">Finesse Fitness</span> isn't just another fitness app. We believe in helping you reach your
            goals with a touch of sophistication and a focus on feeling your best.
            Our app empowers you to:
          </h3>
          
        </div>

        <div className="carousel-slide">
          <ul>
            <li className="carousel-list-item">
              
              <span className="list-item-text">
              <ul>
            <li className="carousel-list-item">
              <span className="list-item-icon">🏋️‍♀️</span>
              <span className="list-item-text">
                Craft personalized workouts: Design a program that fits your fitness
                level and goals, or choose from a library of pre-built routines.
              </span>
            </li>
          </ul>
              </span>
            </li>
          </ul>
        </div>

        <div className="carousel-slide">
          <ul>
            <li className="carousel-list-item">
              <span className="list-item-icon">👩‍🏫</span>
              <span className="list-item-text">
                Connect with expert trainers: Get personalized guidance and support
                from certified trainers who can help you refine your technique and
                push your limits.
              </span>
            </li>
          </ul>
        </div>

        <div className="carousel-slide">
          <ul>
            <li className="carousel-list-item">
              <span className="list-item-icon">🧘‍♀️</span>
              <span className="list-item-text">
                Embrace a holistic approach: Finesse Fitness goes beyond physical
                exercise. We provide tips and resources to promote overall wellness,
                including healthy eating habits and mindfulness practices.
              </span>
            </li>
          </ul>
        </div>

        <div className="carousel-slide">
          <h3 className="carousel-heading">
            Join our supportive community and experience the <span className="brand-name">Finesse</span> difference.
            Download the app today and start your journey to a healthier, happier
            you!
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutUs;