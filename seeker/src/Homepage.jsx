import React, { useEffect, useState} from "react";
import { ReactDOM } from "react";
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=9963f318';
const Search = () => {

    const [searchTerm, setsearchTerm] = useState("");
    const [movie, setMovies] = useState([]);
    
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
    
      searchMovies(data.Search);
    }
    
    useEffect(() => {
      searchMovies('Batman');
    }, [])
    
      return (
        <div className="App">
          <h1>Seeker</h1>
    
          <div className="Home">
            <input
              value={searchTerm}
              onChange={(e) => {setsearchTerm(e.target.value)}}
              placeholder="Search For Movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movie.length > 0 ? (
          <div className="container">
            {movie.map((movie) => (
              <Homepage movie={movie[0]} />
            ))}
          </div>
          ) : (
            <div className="empty">
              <h2>No Movies found</h2>
            </div>
          )}
        </div>
      );
    }
export const Homepage = ({ movie }) => {
    return (
    <div className="Movie">
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://vie.placeholder.com/400'} alt={movie.Title}/>
        </div>

        <div>
            <span> {movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    );    
}
