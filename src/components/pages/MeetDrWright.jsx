import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MeetDrWright.css';

function MeetDrWright() {

  const navigate = useNavigate();

  return (
    <section className="meet-dr-wright">

      <h2>Meet Dr. Thelma Wright</h2>

      <div className="dr-wright-info">

        <div className="dr-photo">
          <img src="/a6.webp" alt="Dr. Thelma Wright" />
        </div>

        <div className="bio">
          <p>Dr. Thelma Wright is a board-certified endodontist with over 15 years of experience in providing high-quality dental care.</p>
            <p>Dr. Wright’s expertise in root canal therapy and her compassionate approach to patient care make her a trusted provider in the community.</p>

          <h3>Qualifications & Certifications</h3>
          <ul>
            <li>Dental Degree from Harvard School of Dental Medicine (HSDM)</li>
            <li>Specialized Endodontics Training from New York University (NYU) College of Dentistry]</li>
            <li>Member of the American Association of Endodontists</li>
          </ul>

          <h3>Philosophy of Care</h3>
          <p>“I believe in treating each patient with the same care and attention I would offer to my own family. My goal is to make every treatment as comfortable and stress-free as possible.” – Dr. Wright</p>

          <button className="cta-button" onClick={() => navigate('/contact')}>Schedule a Consultation with Dr. Wright</button>
        </div>
        
      </div>
    </section>
  );
}

export default MeetDrWright;
