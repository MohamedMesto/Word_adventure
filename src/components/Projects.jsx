import React, { useState, useEffect, useCallback } from 'react';
import project1 from '../assets/images/project/project1.jpg';
import project2 from '../assets/images/project/project2.jpg';
import project3 from '../assets/images/project/project3.jpg';
import project4 from '../assets/images/project/project4.jpg';
import project5 from '../assets/images/project/project5.jpg';
import project6 from '../assets/images/project/project6.jpg';
import project7 from '../assets/images/project/project7.jpg';
import project8 from '../assets/images/project/project8.jpg';
import project9 from '../assets/images/project/project9.jpg';
import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      img: project1,
      titleLink: 'https://vosonbilash.de/',
      websiteLink: 'https://vosonbilash.de/',
      websiteName: 'Connecting diverse customers to authentic, culturally fused cuisine in a warm and inviting atmosphere.', 
      title: 'www.vosonbilash.de',
      description: `Voson Bilash Kulturcafe & Restaurant serves a diverse clientele, attracting both locals and tourists with its unique blend of traditional and modern cuisine. Customers appreciate the warm, inviting atmosphere, exceptional service, and authentic flavors that reflect a fusion of cultures.`,
    },
    {
      img: project2,
      titleLink: 'https://Loqta2050.com/',
      websiteLink: 'https://Loqta2050.com/',
      websiteName: 'Our E-Commerce Website', 
      title: 'www.Loqta2050.com',
      description: `At Loqta2050.com, we value our customers' unique needs by offering a wide range of personal, home, and car electronic accessories. Our detailed customer profiles help us tailor recommendations and ensure a personalized shopping experience that meets every customer's lifestyle and preferences.`,
    },
    {
      img: project3,
      titleLink: 'https://www.ifrc.org/',
      websiteLink: 'https://www.ifrc.org/',
      websiteName: 'Integrated management system - www.ifrc.org', 
      title: 'www.ifrc.org',
      description: `The customer details feature in the integrated management system captures and manages comprehensive client information, including personal data, contact details, and transaction history. Designed using C# for robust application logic and SQL for efficient data storage and retrieval, the system ensures seamless interaction and data consistency across the head office, branches, warehouses, and registration centers.`,
    },
    {
      img: project4,
      titleLink: 'https://mohamedmesto.github.io/love-your-body2/',
      websiteLink: 'https://github.com/MohamedMesto/love-your-body2',
      websiteName: 'Love Your Body (Fasting Treatment) Documentation.', 
      title: 'To the Love Your Body Website',
      description: `"Love Your Body (Fasting Treatment)" a digital haven dedicated to the transformative power of fasting for holistic well-being. Our platform is a nurturing guide, offering insights into the profound connection between self-love and the art of intentional fasting. Explore evidence-backed fasting treatments, tailor-made to rejuvenate your body, mind, and spirit. Immerse yourself in a wealth of resources, from expert advice on fasting protocols to delicious and nutritious recipes that support your wellness journey. Join our community of mindful individuals committed to embracing the healing potential of fasting, and embark on a transformative path toward a healthier, more balanced life.`,
    },
    {
      img: project5,
      titleLink: 'https://Loqta2050.de/',
      websiteLink: 'https://Loqta2050.de/',
      websiteName: 'Delivering personalized deals and exclusive discounts for a premium shopping experience.', 
      title: 'www.Loqta2050.de',
      description: `At Loqta2050.de, we value our customers as our top priority, offering tailored deals and exclusive discounts to ensure a premium shopping experience. Discover personalized offers that cater to your needs, delivering exceptional value in no time.`,
    },
    {
      img: project6,
      titleLink: 'https://omarion.co/',
      websiteLink: 'https://omarion.co/',
      websiteName: 'Reliable electrical solutions for homeowners and small businesses.', 
      title: 'www.omarion.co',
      description: `Omarion serves homeowners and small businesses seeking reliable and efficient electrical solutions. Customers appreciate the company's expertise, timely service, and commitment to safety and quality.`,
    },
    {
      img: project7,
      titleLink: 'https://github.com/aminjaber25/Passfinder',
      websiteLink: 'https://github.com/aminjaber25/Passfinder',
      websiteName: 'PassFinder: Custom Password Generator and Archive Manager Documentation.', 
      title: 'To The Passfinder App',
      description: `The program is a comprehensive tool that combines secure password generation with archive management capabilities. It provides extensive customization for creating passwords of various lengths and character compositions, ensuring security and flexibility. The ability to manage archive files further enhances its functionality, making it a practical solution for both password creation and file handling tasks.`,
    },
    {
      img: project8,
      titleLink: 'https://love-cake-0ca041934c7d.herokuapp.com/',
      websiteLink: 'https://github.com/MohamedMesto/Ultimate_Battleship',
      websiteName: 'Ultimate Battleship Documentation.', 
      title: 'Ultimate Battleship Game.',
      description: `Welcome to the classic game of Battleship! Battleship is a strategic naval combat game where players engage in a thrilling battle of wits on the high seas. In this game, each player commands a fleet of ships hidden on a grid, and the objective is to strategically guess and locate the opponent's ships while concealing the positions of your own. With a combination of cunning tactics and sharp deduction skills, players aim to sink their opponent's entire fleet before theirs meets the same fate. Prepare for an adrenaline-pumping adventure filled with suspense, strategy, and exhilarating naval warfare. Get ready to embark on a voyage of excitement as you challenge your friends or test your skills against the computer in the timeless game of Battleship! However, the game could be played via Python Terminal game.`,
    },
    {
      img: project9,
      titleLink: 'https://mohamedmesto.github.io/Love-CrossWords/',
      websiteLink: 'https://github.com/MohamedMesto/Love-CrossWords',
      websiteName: 'Love Cross Words (Think and play rationally forever) Documentation.', 
      title: 'To The Love-CrossWords Website.',
      description: `"Love Cross Words (Think and play rationally forever)" Engaging in crossword puzzles can be a source of both mental stimulation and motivation. The challenge of deciphering clues and finding the right words within a grid not only exercises one's vocabulary but also promotes cognitive flexibility and problem-solving skills. The satisfaction derived from successfully completing a crossword puzzle can boost self-esteem and provide a sense of accomplishment. Additionally, the variety of topics covered in crosswords exposes individuals to a diverse range of information, making the activity an enjoyable way to learn new words and trivia. Whether it's the thrill of solving challenging clues or the joy of expanding one's knowledge base, the motivation behind tackling crossword puzzles lies in the mental exercise, accomplishment, and the sheer enjoyment of the linguistic journey they offer.`,
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 3 : prevIndex - 3
    );
  }, [projects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 20000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="projects-page">
      <h2>Our Projects</h2>
      <h4>More of Our Projects Will Be Uploaded Soon</h4>
      <div className="projects">
        {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
          <div key={index} className="project">
            <h3>
              <a href={project.titleLink}>
                <img src={project.img} alt={`project ${index + 1}`} />
                {project.title}
              </a>
            </h3>
            <p className="website-name">
              <a href={project.websiteLink}>{project.websiteName}</a>
            </p> {/* Display the website name as a clickable link */}
            <p className="justified-text">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button">
          &#10094;
        </button>
        <button onClick={handleNext} className="carousel-button">
          &#10095;
        </button>
      </div>
    </div>
  );
  
};  

export default Projects;
