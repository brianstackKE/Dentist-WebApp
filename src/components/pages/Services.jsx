import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="endodontic-services-page">
      <h2>Our Endodontic Services</h2>
      <div className="endodontic-service-overview">
        <p>
          At Pacific Smiles Endodontics, we offer a comprehensive range of endodontic services to treat issues related to the dental pulp and surrounding tissues. 
          Our advanced technology ensures the best outcomes for our patients.
        </p>
      </div>

      <div className="endodontic-service-list">
        
        <div className="endodontic-service-item">
          <img src="/a1.jpeg" alt="Root Canal Therapy" />
          <h3>Root Canal Therapy</h3>
          <p>
            Root canal therapy involves removing infected pulp from inside your tooth to save it from extraction. This procedure restores the tooth’s function while relieving pain caused by deep infection or decay.
          </p>
        </div>

        <div className="endodontic-service-item">
          <img src="/a3.jpeg" alt="Endodontic Retreatment" />
          <h3>Endodontic Retreatment</h3>
          <p>
            Endodontic retreatment corrects a previously failed root canal procedure. It involves removing old filling material, cleaning, disinfecting, and resealing the canals to prevent further infection and restore tooth health.
          </p>
        </div>

        <div className="endodontic-service-item">
          <img src="a4.jpeg" alt="Cracked Tooth Repair" />
          <h3>Cracked Tooth Repair</h3>
          <p>
            Cracked tooth repair focuses on diagnosing and treating cracks that may extend into the tooth’s root. Immediate care prevents further damage, preserves the tooth, and alleviates pain or sensitivity.
          </p>
        </div>

        <div className="endodontic-service-item">
          <img src="dd.jpeg" alt="Apicoectomy" />
          <h3>Apicoectomy</h3>
          <p>
            Apicoectomy is a surgical procedure performed when a root canal treatment alone is insufficient. The root tip is removed along with the surrounding infected tissue to save the tooth.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
