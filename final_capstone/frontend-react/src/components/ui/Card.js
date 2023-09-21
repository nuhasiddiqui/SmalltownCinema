import React from 'react'
import './card.css'

const Card = ({filteredMovie}) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
       <div className="movie-card">
            <img src={filteredMovie.previewImg} alt="Preview Image" className="img-fluid" />
            <p>
                {filteredMovie.length} | {filteredMovie.category}
            </p>
            <div className="content">
                <h4>{filteredMovie.title}</h4>
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
       </div>
    </div>
  )
}

export default Card
