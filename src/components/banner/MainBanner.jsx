import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainBanner.css';

function MainBanner() {
  const navigate = useNavigate();

  return (
    <section className="main-banner">

      <div className="banner-content">

        <h2>Your Comfort, Our Priority</h2>
        <h3>Expert Endodontic Care by Dr. Thelma Wright</h3>
        
        <div className="cta-buttons">
          <button onClick={() => navigate('/contact')}>Schedule an Appointment</button> 
          <button onClick={() => navigate('/services')}>Learn About Our Services</button>
        </div>
        
        <p>Providing gentle and effective root canal treatment to save your smile.</p>

      </div>
    </section>
  );
}

export default MainBanner;
