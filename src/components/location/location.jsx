import React from 'react';
import './location.css';

const Location = () => {
  return (
    <div className="location-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.9401367572016!2d-38.45752496196714!3d-13.002453795253128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bd77c2211c1%3A0x4bab1ef84cceb8bc!2sStudio%20Canal%20de%20Lutas!5e0!3m2!1spt-BR!2sbr!4v1682640867093!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{borderRadius: '10px'}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Location;
