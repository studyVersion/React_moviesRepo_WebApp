import {useEffect} from "react";
import './App.css';
import searchIcon from './search.svg';
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
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    
    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return(
        <div className="app">
            <h1>MoviesRepo</h1>
            <div className="search">
                <input
                   placeholder="Search for movives"
                   value=""
                   onchange ={ () => {} }
                />
                <img
                    src = {searchIcon} 
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
