import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
function Home() {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/movie/1")
    .then((r)=>r.json())
    .then((data)=>setMovies(data))
  },[])

  const movieList = movies.map(movies=>{
    return <MovieCard key={movies.id} movies={movies} />
  })
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          <li>
            <MovieCard/>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
