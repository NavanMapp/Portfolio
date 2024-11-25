import React from "react";

function ExperienceCard({ image, company, location, duration, description }) {
  return (
    <div className="right-content">    <div className='card'>
      {image && <img src={image} alt={company} className='cardImage' />}
      <div className='cardContent'>
        <h2 className='cardTitle'>{company}</h2>
        <h3 className='cardLocation' >{location}</h3>
        <h4 className='cardYear' >{duration}</h4>
        <p className='cardDescription'>{description}</p>
      </div>
    </div></div>

  )
}

export default ExperienceCard;
