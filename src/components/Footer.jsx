import React from "react";
import { NavLink } from "react-router-dom";
import linkedin from "../assets/images/footer/linkedin.png";
import xing from "../assets/images/footer/xing.png";
import github from "../assets/images/footer/github.png";
import youtube from "../assets/images/footer/youtube.jpeg";
import telegram from "../assets/images/footer/telegram.png";
import haendlerbund from "../assets/images/footer/haendlerbund.png"; // Import the Händlerbund image

import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Händlerbund Column */}
          <div className="footer-column">
            <a href='https://logo.haendlerbund.de/show.php?uuid=ea7bf7e1-5e26-11ef-a43e-0242ac130003-3112389951'>
              <h3>Honored to be a member of the Händlerbund</h3>
              <img src={haendlerbund} alt="Händlerbund" className="haendlerbund-logo"/>
            </a>
          </div>

          {/* About Me Column */}
          <div className="footer-column-about">
            <h3>About Me</h3>
            <p>
              With over 15 years of experience in the field of Computer Science, I have served as an IT Administrator, Frontend/Backend Developer, and Lecturer. My expertise spans across Digital Media, Human-Computer Interaction, Networking and Distributed Systems, Computer Engineering, Machine Learning and Neural Modeling (AI), and Advanced Web Technologies (Frontend/Backend with React and Node.js).
            </p>
            <p><NavLink to="/about-me">More about Mohamed Mesto</NavLink></p>
          </div>

          {/* Site Links Column */}
          <div className="footer-column">
            <h3>Site Links</h3>
            <nav>
             
              <p><NavLink to="/" exact className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></p>
              <p><NavLink to="/WordsAdventure" exact className={({ isActive }) => isActive ? 'active' : ''}>WordsAdventure</NavLink></p>
              <p><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Our Projects</NavLink></p>
              <p><NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''}>Our Team</NavLink></p>
              <p><NavLink to="/about-me" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink></p>
              <p><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink></p>
              <p><NavLink to="/mediahub" className={({ isActive }) => isActive ? 'active' : ''}>MediaHub</NavLink></p>
              <p><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></p>
            </nav>
          </div>

          {/* Contact Us Column */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p><strong>Accessibility</strong></p>
            <p>Monday to Thursday:<br />10:00 a.m. - 6:00 p.m.</p>
            <p>Friday:<br />10:00 a.m. - 5:00 p.m.</p>
            <p><a href='mailto:ing.mesto2050@gmail.com'>Email: ing.mesto2050@gmail.com</a></p>
            <p>Mob: +49 157 821 78 521</p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mohamedmesto/"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="https://www.xing.com/profile/Mohamed_Mesto2"><img src={xing} alt="Xing" /></a>
              <a href="https://github.com/MohamedMesto"><img src={github} alt="GitHub" /></a>
              <a href="https://www.youtube.com/c/TippsausEuropa"><img src={youtube} alt="YouTube" /></a>
              <a href='https://t.me/IngMoMst'><img src={telegram} alt="Telegram" /></a>
            </div>
          </div>
        </div>
      </div>
      <p>© 2024 UN2050. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
