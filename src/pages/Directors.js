import React from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const directors = [
    {
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
    },
    {
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
    },
    {
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
    },
  ];
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        <article>
          <h2>{directors.name}</h2>
          <ul>
            <li>{directors.movies}</li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default Directors;
