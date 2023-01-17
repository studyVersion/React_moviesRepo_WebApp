import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";
//5f896d0d


const API_URL = 'http://www.omdbapi.com?apikey=5f896d0d';

const movie1 = {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, [])
    return (
        <div className="app">
            <h1>MoviesRepo</h1>
            <div className="search">
                <input
                    placeholder="Search for movives"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>}


        </div>
    );
}

export default App;
