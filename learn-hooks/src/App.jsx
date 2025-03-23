import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const Home = ({ movies, handleFavorites }) => {
  return (
    <div>
        {
          movies.map(movie => (
            <div key={movie.id}>
              <h1>{movie.original_title}</h1>
              <img width={500} height={500}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              />
              <h4>Release Date: {movie.release_date}</h4>
              <button onClick={() => handleFavorites(movie)}>Add To Watch List</button>
            </div>
          ))
        }
      </div>
  );
}

const WatchList = ({ favorites, handleRemove }) => {
  return (
    <div>
        {
          favorites.map(movie => (
            <div key={movie.id}>
              <h1>{movie.original_title}</h1>
              <img width={500} height={500}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              />
              <h4>Release Date: {movie.release_date}</h4>
              <button onClick={() => handleRemove(movie.id)}>Remove From Watch List</button>
            </div>
          ))
        }
      </div>
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(
    () => {
      axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86'
      )
      .then(response=>response.data.results)
      .then(data=>setMovies(data))
    }, []
  )

  const handleFavorites = (movie) => {
    setFavorites([...favorites, movie])
  }

  const handleRemove = (id) => {
    setFavorites(favorites.filter(movie => movie.id !== id));
  }

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watchlist">Watch List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home movies={movies} handleFavorites={handleFavorites}/>} />
          <Route path="/watchlist" element={<WatchList favorites={favorites} handleRemove={handleRemove} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
