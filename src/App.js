import React, { useState } from 'react';
import { useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';    



// API Key: 7b20b75e

const API_URL = 'http://www.omdbapi.com?apikey=7b20b75e'

const movie1 = 
    {
        "Title": "Shrek the Third",
        "Year": "2007",
        "imdbID": "tt0413267",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg"
    }


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Shrek')
    }, [])

    return (
       <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input 
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie) => (

                        < MovieCard movie={movie} />

                    ))}
                </div>
            ) 
            : (
                <div className='empty'>
                    <h2>No movie found</h2>
                </div>
            )
        }
        
       </div>
    );
}

export default App;