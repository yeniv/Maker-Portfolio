import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="http://instagram.com/tristan_viney" target="_blank" rel="noreferrer" >Instagram</a>
        <a href="https://www.linkedin.com/in/tristanviney" target="_blank" rel="noreferrer" >LinkedIn</a>
        <a href="https://www.youtube.com/@tristan_viney" target="_blank" rel="noreferrer" >YouTube</a>
        <a href="https://github.com/yeniv" target="_blank" rel="noreferrer" >GitHub</a>
        <a href="mailto:hi@tristanviney.com">Email</a>
      </div>
      <Link to="/" className="emoji">🐝</Link>
    </footer>
  );
};

export default Footer;