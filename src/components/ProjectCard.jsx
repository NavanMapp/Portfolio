import React from 'react';

function ProjectCard({title, description, image}) {
  return (
    <div className='card'>
        {image && <img src={image} alt={title} className='cardImage' /> }
        <div className='CardContent'>
            <h2 className='cardTitle'>{title}</h2>
            <h3 className='cardDescription' >{description}</h3>
        </div>
    </div>
  )
}

export default ProjectCard;
