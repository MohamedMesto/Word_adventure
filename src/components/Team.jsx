import React from 'react';
import team1 from '../assets/images/team/team1.jpg';
import team2 from '../assets/images/team/team2.jpg';
import team3 from '../assets/images/team/team3.jpg';
import team4 from '../assets/images/team/team4.jpg';
import team5 from '../assets/images/team/team5.jpg';
import '../styles/Team.scss';

const Team = () => {
  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-row">
        <div className="team-member">
          <img src={team1} alt="Mohamed Mesto" className="team-photo" />
          <div className="member-details">
            <h3>Mohamed Mesto</h3>
            {/*             <h4>Full-Stack Developer - Founder & CEO</h4> */}
            <h4>Full-Stack Developer - Founder & Team leader</h4>
            <p> Visionary leader with expertise in technology and strategies.
            </p>
            <p><a href='https://www.linkedin.com/in/mohamedmesto/' >LinkedIn</a> | <a href='https://www.xing.com/profile/Mohamed_Mesto2' >Xing</a> | <a href='https://github.com/MohamedMesto' >GitHub</a> | <a href='https://un2050.de/' >Website</a></p></div>
        </div>
        <div className="team-member">
          <img src={team2} alt="Lyna Mesto" className="team-photo" />
          <div className="member-details">
            <h3>Lyna Mesto</h3>
            <h4>Software Engineer | Graphic Designer </h4>
            <p>Computer engineer specializing in teaching and programming, as well as a painter and author of two published books.</p>
            <p><a href='https://www.linkedin.com/in/lyna-mesto-b7123b129/' >LinkedIn</a> | <a href='https://rb.gy/uahppz' >Books</a> | <a href=' ' >GitHub</a> | <a href='https://un2050.de/' >Website</a></p>
          </div>
        </div>
        <div className="team-member">
          <img src={team3} alt="Ghazwan Alharch" className="team-photo" />
          <div className="member-details">
            <h3>Ghazwan Alharsh</h3>
            <h4>Creative Lead  |  Senior Art Director
            </h4>
            <p>Design is his driving passion. Everything in his life is influenced by it, life decisions are based on it.</p>
            <p><a href='https://www.linkedin.com/in/gazwan-al-harash-81420059/' >LinkedIn</a> | <a href='https://www.xing.com/profile/Gazwan_AlHarash' >Xing</a> | <a href='https://www.instagram.com/gazwan.harash/' >Instagram</a> | <a href='https://gazwan.info/' >Website</a></p>
          </div>
        </div>
      </div>
      <div className="team-row">
        <div className="team-member">
          <img src={team4} alt="Salma Al Kheja" className="team-photo" />
          <div className="member-details">
            <h3>Salma Al Kheja</h3>
            <h4>Full-Stack Developer | Software Engineer</h4>
            <p>Expert in project management and team leadership with experience in full-stack development.</p>            <p><a href='https://www.linkedin.com/in/salma-alkheja/' >LinkedIn</a> | <a href=' ' >Xing</a> | <a href=' ' >GitHub</a> | <a href='https://un2050.de/' >Website</a></p>
          </div>
        </div>
        <div className="team-member">
          <img src={team5} alt="Amin Jaber" className="team-photo" />
          <div className="member-details">
            <h3>Amin Jaber</h3>
            <h4>Software Engineer | Research Scientist</h4>
            <p>Software Engineer specializing in Full-stack Development, machine learning, and NLP.</p>
            <p><a href='https://www.linkedin.com/in/amin-jaber-07b52a163/' >LinkedIn</a> | <a href='https://www.tu.berlin/qu/studium-und-lehre/abschlussarbeiten' >Paper</a> | <a href='https://github.com/aminjaber25' >GitHub</a> | <a href='https://un2050.de/' >Website</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
