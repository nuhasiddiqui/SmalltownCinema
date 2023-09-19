import React from 'react';
import './movieContent.css';
import titleImg from '../../images/transformer-title.png'
import Button from './Button';

const MovieContent = () => {
  return (
    <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title"/>
        <h4>
            <span>Year</span>
            <span>
                <i>age</i>
            </span>
            <span>length</span>
            <span>category</span>
        </h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed ut quam non ex volutpat fringilla. In eget efficitur nulla. 
        Nam vel justo justo. Nulla auctor viverra eros, a elementum nisi lacinia nec. 
        Aliquam vestibulum vestibulum quam, nec posuere turpis hendrerit in. 
        Sed vitae justo et lorem vehicula volutpat.
        </p>
        <div className="button">
          <Button 
            icon={<ion-icon name="bookmark-outline"></ion-icon>} 
            name='Book' 
          />
          <Button 
            icon={<ion-icon name="add-outline"></ion-icon>} 
            name='My List' 
          />
        </div>
    </div>
  )
}

export default MovieContent
