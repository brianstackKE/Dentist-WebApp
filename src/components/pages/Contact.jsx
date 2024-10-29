import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import Footer from '../footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Show a popup that the message has been sent (whether or not the actual email sends)
    window.alert("Message Sent!");
  
    // Clear the form fields after showing the alert
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    // Send email using EmailJS
    emailjs
      .send(
        'service_5qb6r2q', // Your Service ID
        'template_j4og7uw', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '3cxYmpmPJNPos5bjK' // Your User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.error('FAILED...', err);
        }
      );
  };
  

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
        <p>Please fill out the form below or reach out to us through the provided contact details.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: Thelma@pacificsmilesendo@gmail.com</p>
          <p>Phone: 516-662-9016</p>
          <p>Address: 151 Adam’s Ave Lynbrook, NY 11563</p>

          <iframe
            className="map-container"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.838194715048!2d36.8071843!3d-1.2700207999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17f610c7322f%3A0x44b37418baa4f00c!2sKenya%20Association%20For%20The%20Welfare%20Of%20People%20With%20Epilepsy!5e0!3m2!1sen!2ske!4v1729684955110!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
