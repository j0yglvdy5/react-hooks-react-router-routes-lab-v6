// MovieList.js
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    fetch("https://reactrouter.com/en/main")

      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default MovieList;
