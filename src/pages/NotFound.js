import React from 'react';
import './InfoPage.css';

const NotFound = () => {
  return (
    <div className="info-page">
      <img 
        className='not-found-gif'
        src="/images/not-found.gif" 
        alt="gif of Homer Simson walking into the hedges, except the hedges are made of pizza" 
      />
      <h2>Nothing to see here.</h2>
    </div>
  );
};

export default NotFound;