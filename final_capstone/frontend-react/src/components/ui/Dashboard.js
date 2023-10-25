import React, {useState, useEffect} from 'react'

import { getMovies } from '../../api/MovieApi'; // Import the getMovies function from your movie API
import './dashboard.css'
import Card from './Card'


const Dashboard = () => {
    const filterList = [
        {
            filterId: 1,
            name: 'All',
            active: true,
        },
        {
            filterId: 2,
            name: 'Romance',
            active: false,
        },
        {
            filterId: 3,
            name: 'Action',
            active: false,
        },
        {
            filterId: 4,
            name: 'Thriller',
            active: false,
        },
        {
            filterId: 5,
            name: 'Horror',
            active: false,
        },
        {
            filterId: 6,
            name: 'Adventure',
            active: false,
        },
    ];

    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [filters, setFilters] = useState(filterList)

    
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

    useEffect(() => {
        setFilteredMovies(movies);
    },[movies])

    const handleFilterMovies = category => {
        setFilters(
            filters.map(filter => {
                filter.active = false;
                if (filter.name === category) {
                    filter.active = true;
                }
                return filter;
            })
        )

        if(category === 'All') {
            setFilteredMovies(movies);
            return;
        }
        setFilteredMovies(movies.filter(movie => movie.category === category));
    }

  return (
    <section id="dashboard" className="dashboard">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Featured Movies</h4>
            </div>
            <div className="row">
                <ul className="filters">
                    {filters.map(filter => (
                        <li key={filter.filterId} 
                        className={`${filter.active ? 'active' : undefined}`}
                        onClick={()=>{handleFilterMovies(filter.name)}}
                        >
                            {filter.name}
                        </li>
                    ))}        
                </ul>
            </div>
            <div className="row mt-5">
            {filteredMovies && filteredMovies.length > 0 && filteredMovies.map(filteredMovie => (
                <Card key={filteredMovie.movieId} filteredMovie={filteredMovie} />
            ))}
            </div>
        </div>
    </section>
  )
}

export default Dashboard
