import React, { useState } from 'react';
import './PatientResources.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function PatientResources() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is a root canal procedure?",
      answer: "A root canal procedure involves removing infected or damaged tissue from the inside of the tooth and sealing it to prevent further infection."
    },
    {
      question: "How long is the recovery time for a root canal?",
      answer: "Most patients can resume normal activities the day after the procedure. Some discomfort may persist for a few days."
    },
    {
      question: "What are the costs involved in a root canal?",
      answer: "The cost of a root canal depends on the complexity of the procedure and your insurance coverage. Please contact us for more details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="patient-resources">
      <h2>Patient Resources</h2>

      <div className="new-patient-forms">
        <h3>New Patient Forms</h3>
        <p>Download and complete the following forms before your visit:</p>
        <a href="./docs/medical-records.pdf" className="cta-button" download>Download Medical History Form</a>
        <a href="./docs/insurance.pdf" className="cta-button" download>Download Insurance Form</a>
      </div>

      <div className="insurance-info">
        <h3>Insurance Information</h3>
        <p>We accept most major insurance plans. Please contact us to verify your coverage before your appointment.</p>
      </div>

      <div className="faq-section">
        <h3>FAQs</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button onClick={() => toggleFAQ(index)} className="faq-question">
              {faq.question}
              {openFAQ === index ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
            </button>
            {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="post-treatment-care">
        <h3>Post-Treatment Care</h3>
        <p>After a root canal or other endodontic procedures, follow these tips for a smooth recovery:</p>
        <ul>
          <li>Avoid chewing on the treated side of your mouth for a few days.</li>
          <li>Take prescribed medications as directed.</li>
          <li>Maintain good oral hygiene and avoid hard or crunchy foods.</li>
          <li>Contact us if you experience prolonged pain or swelling.</li>
        </ul>
      </div>

      <div className="contact-cta">
        <button className="cta-button">Have Questions? Contact Us!</button>
      </div>
    </section>
  );
}

export default PatientResources;
