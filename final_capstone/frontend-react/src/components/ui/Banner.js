import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api/MovieApi'; // Import the getMovies function from your movie API

import './banner.css'
import MovieContent from './MovieContent';
import MovieDate from './ MovieDate';
import PlayBtn from './PlayBtn';
import MovieSwiper from './MovieSwiper';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const movieData = await getMovies(); // Use the getMovies function to fetch movies
            setMovies(movieData); // Update the movies state with fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the fetchData function when the component mounts
    }, []);

    const handleSlideChange = id => {
        const newMovies = movies.map(movie=>{
            movie.active = false;
            if(movie.movieId===id){
                movie.active = true;
            }
            return movie;
        })
        setMovies(newMovies);
    }

    return (
        <div className="banner">
            {
                movies && movies.length > 0 && movies.map(movie=>(
                    <div className="movie">
                    <img 
                        src={movie.bgImg} 
                        alt="Background Image" 
                        className={`bgImg ${movie.active ? 'active' : undefined}`} 
                    />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <MovieContent movie={movie}/>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <MovieDate movie={movie}/>
                                    <PlayBtn movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>                        
                ))
            }
            {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
        </div>
    );
}

export default Banner;

