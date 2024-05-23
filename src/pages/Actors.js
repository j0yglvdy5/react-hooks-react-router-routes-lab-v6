import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Actors() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        <article>
          <h2>{Actors.name}</h2>
          <ul>
            <li>{Actors.movies}</li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default Actors;
