import React, { useState } from 'react';
/* import adCampaign1 from '../assets/images/ad_campaign1.jpg'; */
import websiteRedesign from '../assets/images/portfolio/website_redesign.png';
import brandIdentity1 from '../assets/images/portfolio/LQ2050_logo6.png';
import brandIdentity2 from '../assets/images/portfolio/loqta2050.de_logo.png';
import brandIdentity3 from '../assets/images/portfolio/vosonbilsh.png';
import brandIdentity4 from  '../assets/images/portfolio/eng_edlib_logo.png';
import productPackaging1 from '../assets/images/portfolio/Embroidered_tissue_box_with_satin_ribbons.jpg';
import productPackaging2 from '../assets/images/portfolio/Wooden_keychain1.png';
import productPackaging3 from '../assets/images/portfolio/Wooden_keychain2.png';

import brochureDesign1 from '../assets/images/portfolio/bruschure_eng.png';
import brochureDesign2 from '../assets/images/portfolio/bruschure_educationcollage.png';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All',
    'Advertising',
    'Digital',
    'Logos & Visual ID',
    'Packaging',
    'Photography',
    'Printing',
  ];

  const portfolioItems = [
    /* Advertising category*/
    { id: 1, category: 'Advertising', title: 'Ad Campaign 1', description: 'A successful ad campaign for product X', imgSrc: "adCampaign1" },
    /* Digital category*/
    { id: 51, category: 'Digital', title: 'Website Redesign', description: 'Redesign of a corporate website', imgSrc: websiteRedesign },
    
    /* 'Logos & Visual ID' category */
    { id: 101, category: 'Logos & Visual ID', title: 'Brand Identity', description: 'Complete branding for a startup', imgSrc: brandIdentity1 },
    { id: 102, category: 'Logos & Visual ID', title: 'Brand Identity', description: 'Complete branding for a startup', imgSrc: brandIdentity2 },
    { id: 103, category: 'Logos & Visual ID', title: 'Brand Identity', description: 'Complete branding for a startup', imgSrc: brandIdentity3 },
    { id: 104, category: 'Logos & Visual ID', title: 'Engineers Union, Idlib Branch - Logo 2008', description: 'Complete branding for a startup', imgSrc: brandIdentity4 },

    /* Packaging category */
    { id: 151, category: 'Packaging', title: 'Embroidered tissue box with satin ribbons', description: 'Innovative packaging for a new product line', imgSrc: productPackaging1 },   
    { id: 152, category: 'Packaging', title: 'Wooden keychain1', description: 'Innovative packaging for a new product line', imgSrc: productPackaging2 },   
    { id: 153, category: 'Packaging', title: 'Wooden keychain2', description: 'Innovative packaging for a new product line', imgSrc: productPackaging3 },   
   
    /* Photography category */
    { id: 201, category: 'Photography', title: 'Event Photography', description: 'Photography coverage for an event', imgSrc: "eventPhotography" },
       
    /* Printing category */
    { id: 251, category: 'Printing', title: 'Engineers Union, Idlib Branch - 2008', description: 'Design and printing of promotional brochure for the Engineers Union, Idlib Branch - 2008', imgSrc: brochureDesign1 },
    { id: 252, category: 'Printing', title: 'Education\'s Faculty - Aleppo University - Idlib Branch - 2009', description: 'Design and printing of promotional brochure for the Faculty of Education, University of Aleppo - Idlib Branch - 2009', imgSrc: brochureDesign2 },    // Add more items for each category
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc); // Set the selected image to be displayed in the modal
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by setting the selected image to null
  };

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <h4>More of Our Portfolios Will Be Uploaded Soon</h4>
      <div className="portfolio-categories">
        {categories.map(category => (
          <button 
            key={category} 
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-items">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item" onClick={() => handleImageClick(item.imgSrc)}>
            <img src={item.imgSrc} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
