import React from 'react';
import './Footer.css';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Our Socials</h3>
            <div className="social-icons">
              <a href="https://github.com/DiaeEddineJamal/Finess-Fitness" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: FinessFitness@gmail.com</li>
              <li>Phone: +212 618475658</li>
              <li>Address:42 Fitness St, Papoudo, Morocco</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;