import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/movies/${id}`)
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.error('Error fetching movie:', error));
  },[id])
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
      <p>{movie.description}</p>
      </main>
    </>
  );
};

export default Movie;
