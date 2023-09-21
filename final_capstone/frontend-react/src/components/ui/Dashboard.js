import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Card from './Card'


const Dashboard = () => {
    const filterList = [
        {
            _id: 1,
            name: 'All',
            active: true,
        },
        {
            _id: 2,
            name: 'Romance',
            active: false,
        },
        {
            _id: 3,
            name: 'Action',
            active: false,
        },
        {
            _id: 4,
            name: 'Thriller',
            active: false,
        },
        {
            _id: 5,
            name: 'Horror',
            active: false,
        },
        {
            _id: 6,
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
                        <li key={filter._id} 
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
                <Card key={filteredMovie._id} filteredMovie={filteredMovie} />
            ))}
            </div>
        </div>
    </section>
  )
}

export default Dashboard
