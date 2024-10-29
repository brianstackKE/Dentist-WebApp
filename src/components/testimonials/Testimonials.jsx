import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
    arrows: true, 
  };

  const testimonials = [
    {
      name: 'Sarah P.',
      text: 'Dr. Wright made my root canal so easy! I experienced no pain during the procedure. Highly recommend!',
      image: '/pt8.webp',
    },
    {
      name: 'James L.',
      text: 'Amazing care from Dr. Wright and her staff. They saved my tooth, and the process was smooth!',
      image: '/pt1.webp',
    },
    {
      name: 'Emily W.',
      text: 'Professional, efficient, and compassionate. The best dental experience I’ve ever had!',
      image: './pt2.webp',
    },
    {
      name: 'Michael D.',
      text: 'Dr. Wright is skilled and caring. I couldn’t be happier with the results. Best experience!',
      image: './pt7.webp',
    },
    {
      name: 'Sophia K.',
      text: 'From start to finish, the staff was friendly, and Dr. Wright made the process painless.',
      image: '/pt3.webp',
    },
    {
      name: 'David H.',
      text: 'Excellent experience with Dr. Wright. The procedure was flawless, and recovery was quick.',
      image: '/pt6.webp',
    },
    {
      name: 'Brian J.',
      text: 'I was nervous about my root canal, but Dr. Wright and her team put me at ease!',
      image: '/pt5.webp',
    },
  ];

  return (
    <section className="testimonials-slider" id="testimonials-section">
      <h2>What Our Patients Say</h2>
      <Slider {...settings} className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialsSlider;
