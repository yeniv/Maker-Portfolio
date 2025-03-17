import React from 'react';
import './InfoPage.css';

const Contact = () => {
  return (
    <div className="info-page">
      <div className="contact-content">
        <h1>
          Feel free to get in touch for collaboration requests, additional information, or coffee (on me).
        </h1>
        <div className="page-grid">
          <div className="column">
            <h3>Contact</h3>
            <p>(+61) 0438 527-815</p>
            <a className="text-link" href="mailto:hi@tristanviney.com">hi@tristanviney.com</a>
            <br />
          </div>
          <div className="column">
            <h3>Socials</h3>
            <a className="text-link" href="http://instagram.com/tristan_viney" target="_blank" rel="noreferrer" >Instagram</a>
            <a className="text-link" href="https://www.linkedin.com/in/tristanviney" target="_blank" rel="noreferrer" >LinkedIn</a>
            <a className="text-link" href="https://www.youtube.com/@tristan_viney" target="_blank" rel="noreferrer" >YouTube</a>
            <a className="text-link" href="https://github.com/yeniv" target="_blank" rel="noreferrer" >GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;