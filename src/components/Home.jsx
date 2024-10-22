import React, { useState, useEffect } from 'react';
import un2050_logo from '../assets/images/home/un2050_logo.png';
import image2 from '../assets/images/home/logo2.png'; // Import additional images
import image3 from '../assets/images/home/logo3.png';
import image4 from '../assets/images/home/logo4.png';
import image5 from '../assets/images/home/logo5.png';

import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [un2050_logo, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index); // Set the image based on the clicked indicator
  };

  return (
    <div className="home">
      <h2>Welcome to you</h2>
      <div className="un2050_logo">
        <div>
          <Link to="/projects">
            <img src={images[currentImageIndex]} alt={`Customer ${currentImageIndex + 1}`} />
          </Link>
        </div>
      </div>
      <div className="image-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)} // Handle click on the indicator
          ></span>
        ))}
        <h2><Link to="/team">About Us</Link></h2>
        <p className="justified-text">
          Welcome to our world of innovation, where creativity meets technology. With over 15 years of experience, our team of skilled full-stack developers and a visionary graphic designer brings your ideas to life. We specialize in crafting cutting-edge web and mobile applications, paired with stunning graphic designs. Our solutions are tailored to elevate your brand and drive success. From concept to completion, we deliver excellence with every project. Let's build something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default Home;
