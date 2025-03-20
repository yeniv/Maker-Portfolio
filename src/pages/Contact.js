import React from 'react';
import './InfoPage.css';

const Contact = () => {
  return (
    <div className="info-page">
      <div className="contact-content">
        <h1>
          Let's make something together. Feel free to get in touch about a project, collaboration, or a slice (on me).
        </h1>
        <h3>Say hi 👋</h3>
        <p>(+61) 0438 527-815</p>
        <a className='text-link' href="mailto:hi@tristanviney.com">hi@tristanviney.com</a>
      </div>
    </div>
  );
};

export default Contact;