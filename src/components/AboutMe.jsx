// src/components/AboutMe.js

import React from 'react';
import './AboutMe.css';
import profilePhoto from '../assets/images/aboutme/mmm2050.png';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-section">
        <img src={profilePhoto} alt="Mohamed Mesto" className="profile-photo" />
        <div className="bio-text">
          <h2>About Me</h2>
          <p>
            I completed my bachelor's degree in the College of Electronic Engineering at the University of Aleppo in the field of computer engineering, then I held several jobs, the last of which was: I worked for a few years as an employee and lecturer in a number of colleges affiliated with the University of Aleppo, such as the College of Education and Science and the Computer Institute, as well as at Al-Mamoun Private University.
          </p>
          <p>
            I supervised many projects in the field of informatics at the university and was responsible for operating and maintaining the electronic technologies and equipment necessary for those projects. In addition, I completed my Master's degree in Computer Science at the Technical University of Berlin. It is worth noting that it is the second best technical university in Europe! This was in the field of digital and human computer interaction.
          </p>
          <p>
            My goal was, and still is, to increase my experience in the fields of electronics, artificial intelligence, and software, and to pursue graduate studies to complete a doctorate in those scientific fields. All to serve people and make their lives better.
          </p>
          <p>
            As God Almighty commanded us to be positive on earth and help our brothers and sisters from the children of Adam and Eve, peace be upon them!
          </p>
          <p className='Berlin-font'>
            Berlin -  Mohamed Mesto  
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
