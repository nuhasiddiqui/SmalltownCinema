import React from 'react'
import './movieDate.css'

const  MovideDate = ({movie}) => {
  return (
    <div className={`date ${movie.active ? 'active' : undefined}`}>
        <h2>{movie.date}</h2>
    </div>
  )
}

export default  MovideDate
