import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import social media icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <div className="footer-item">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            <p>Phone: 516-662-9016</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            <p>Email: Thelma@pacificsmilesendo@gmail.com</p>
          </div>
          <div className="footer-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
            <p>Address: 151 Adam’s Ave Lynbrook, NY 11563</p>
          </div>
        </div>
        <div className="hours">
          <h4>Hours of Operation</h4>
          <p>Mon–Fri: 8 AM – 5 PM</p>
        </div>
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li className="quick-links"><a href="#privacy-policy">Privacy Policy</a></li>
            <li className="quick-links"><a href="#terms-of-service">Terms of Service</a></li>
            <li className="quick-links"><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#instagram" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#twitter" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
