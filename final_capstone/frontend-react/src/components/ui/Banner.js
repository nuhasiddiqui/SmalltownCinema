import React, { useState, useEffect } from 'react';

import './banner.css'
import MovieContent from './MovieContent';
import MovieDate from './ MovieDate';
import PlayBtn from './PlayBtn';

import bgImg from '../../images/bg-transformer.jpg'


const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/data/movieData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data); // Update the movies state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, []); // The empty dependency array ensures this effect runs only once

    return (
        <div className="banner">
            <div className="movie">
            <img src={bgImg} alt="Background Image" className="bgImg active" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <MovieContent />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <MovieDate />
                            <PlayBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

