import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const testimonials = [
  {
    id: 1,
    name: '',
    text: '',
    image: 'user1.png',
  },
  {
    id: 2,
    name: '',
    text: '',
    image: 'user2.png',
  },
  {
    id: 3,
    name: '',
    text: '.',
    image: 'user3.png',
  },
 
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container className="testimonial-container">
      <h3 className="text-center my-4">What Our Users Say</h3>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="text-center">
            <img
              src={`/images/${testimonial.image}`}
              alt={testimonial.name}
              className="testimonial-image rounded-circle"
            />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonial;
