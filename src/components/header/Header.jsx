import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll'; // Import react-scroll's scroller
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTestimonialsClick = () => {
    if (location.pathname !== "/") {
      // Navigate to the homepage
      navigate("/");
      // Wait for the navigation to complete before scrolling
      setTimeout(() => {
        scroller.scrollTo("testimonials-section", {
          smooth: true,
          duration: 500,
          offset: -70, // Adjust if header overlaps
        });
      }, 100); // Small delay to ensure the page has loaded
    } else {
      // If already on the homepage, just scroll down
      scroller.scrollTo("testimonials-section", {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust if header overlaps
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.webp" alt="Pacific Smiles Logo" className="logo-image" />
        <h1>Pacific Smiles Endodontics</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dr-wright">Meet Dr. Wright</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/resources">Patient Resources</Link></li>
          <li><Link to="/" onClick={handleTestimonialsClick}>Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
