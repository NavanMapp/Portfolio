import React from "react";

function Card({image, title, subTitle, description}) {
  return (
    <div className='card'>
        {image && <img src={image} alt={title} className='cardImage' /> }
        <div className='cardContent'>
            <h2 className='cardTitle'>{title}</h2>
            <p className='cardDescription'>{description}</p>
        </div>
    </div>
  )
}

export default Card;
