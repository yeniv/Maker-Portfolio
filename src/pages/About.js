import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Me</h1>

        <div className="about-image">
          <img
            src="/images/profile.jpg"
            alt="Tristan Viney"
            onError={(e) => {
              e.target.src = "/api/placeholder/400/400";
              e.target.alt = "Profile photo placeholder";
            }}
          />
        </div>

        <div className="about-text">
          <p>
            I'm Tristan Viney, a multidisciplinary maker based in [Your Location].
            With over [X] years of experience in design, development, and creative
            direction, I specialize in creating meaningful digital experiences that
            connect brands with their audiences.
          </p>

          <p>
            My work spans across web applications, advertising campaigns, portrait
            photography, and film production. Each project is approached with a
            focus on clean aesthetics, intuitive functionality, and authentic storytelling.
          </p>

          <h2>Expertise</h2>
          <ul className="expertise-list">
            <li>
              <span className="expertise-title">Web Development</span>
              <span className="expertise-description">Frontend development with React, responsive design, performance optimization</span>
            </li>
            <li>
              <span className="expertise-title">Digital Advertising</span>
              <span className="expertise-description">Strategic campaign planning, creative direction, content production</span>
            </li>
            <li>
              <span className="expertise-title">Photography</span>
              <span className="expertise-description">Portrait and lifestyle photography, studio lighting, post-production</span>
            </li>
            <li>
              <span className="expertise-title">Filmmaking</span>
              <span className="expertise-description">Short films, documentaries, promotional videos, editing</span>
            </li>
          </ul>

          <h2>Education</h2>
          <p>
            [Your Degree] in [Your Field] — [Your University], [Graduation Year]
          </p>

          <h2>Experience</h2>
          <div className="experience-item">
            <h3>[Your Position]</h3>
            <p className="experience-company">[Company Name] — [Years]</p>
            <p className="experience-description">
              Brief description of your role and responsibilities.
            </p>
          </div>

          <div className="experience-item">
            <h3>[Previous Position]</h3>
            <p className="experience-company">[Previous Company] — [Years]</p>
            <p className="experience-description">
              Brief description of your role and responsibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;