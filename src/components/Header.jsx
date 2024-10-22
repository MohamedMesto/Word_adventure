import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Header.scss";
/* import i18n from '../i18n'; // Make sure this path is correct based on your project structure
 */import un2050_logo from '../un2050_logo.png'; // Ensure this path is correct
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
/*   const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // State for language menu
 */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

/*   const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen); // Toggle language menu
  }; */

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

/*   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language
    setIsLanguageMenuOpen(false); // Close the language menu after selection
  }; */

  return (
    <header className="header">
      <div className="logo-title">
        <img src={un2050_logo} alt="Logo" className="logo" />
        <h1>UN2050</h1>
      </div>
      <div className="slogan-container">
        <h3><p className="slogan">United we stand, divided we fall</p></h3>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰ Menu
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/" exact className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/WordsAdventure" exact className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Words Adventure</NavLink></li>  
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Our Projects</NavLink></li>
          <li><NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Our Team</NavLink></li>
          <li><NavLink to="/about-me" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>About Me</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Portfolio</NavLink></li>
          <li><NavLink to="/mediahub" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Media Hub</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>Contact Us</NavLink></li>
        </ul>
      </nav>

      {/* Language Selector */}
      {/* <div className="language-selector">
        <button onClick={toggleLanguageMenu}>
          🌐 Language
        </button>
        {isLanguageMenuOpen && (
          <ul className="language-menu">
            <li onClick={() => changeLanguage('en')}>English</li>
            <li onClick={() => changeLanguage('de')}>Deutsch</li>
          </ul>
        )}
      </div> */}
    </header>
  );
};

export default Header;
