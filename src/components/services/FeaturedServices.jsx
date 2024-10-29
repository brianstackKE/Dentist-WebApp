import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './FeaturedServices.css';

function FeaturedServices() {
  const navigate = useNavigate();

  return (
    <section className="featured-services">
      <h2>Our Featured Services</h2>
      <div className="featured-services-list">
        <div className="featured-service-item" onClick={() => navigate('/services')}>
          <h3>Root Canal Therapy <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></h3>
          <p>Relieve pain, save teeth with minimally invasive treatment</p>
        </div>
        <div className="featured-service-item" onClick={() => navigate('/services')}>
          <h3>Endodontic Retreatment <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></h3>
          <p>Correct failed root canals with expert retreatment techniques.</p>
        </div>
        <div className="featured-service-item" onClick={() => navigate('/services')}>
          <h3>Cracked Tooth Repair <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></h3>
          <p>Quick care for cracked teeth, preserving function and appearance.</p>
        </div>
        <div className="featured-service-item" onClick={() => navigate('/services')}>
          <h3>Apicoectomy <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></h3>
          <p>Surgery to remove infection and save damaged teeth.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
