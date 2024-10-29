import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainBanner from './components/banner/MainBanner';
import IntroductionSection from './components/intro/IntroductionSection';
import FeaturedServices from './components/services/FeaturedServices';
import TestimonialsSlider from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import MeetDrWright from './components/pages/MeetDrWright'; 
import Services from './components/pages/Services';
import PatientResources from './components/pages/PatientResources';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainBanner />
              <IntroductionSection />
              <FeaturedServices />
              <TestimonialsSlider />
            </>
          } />
          <Route path="/dr-wright" element={<MeetDrWright />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<PatientResources />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
