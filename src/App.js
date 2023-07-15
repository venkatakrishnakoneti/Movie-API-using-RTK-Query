
import React from "react"
import './App.css';
import { useGetMovieByNameQuery } from './Redux/movieApi';
// import { useGetPokemonByNameQuery } from './Redux/api';

function App() {
  const {data, error, isLoading}= useGetMovieByNameQuery()
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{data.Title}</h1>
        </>
      ) : null}
    </div>
  );
}

export default App;
