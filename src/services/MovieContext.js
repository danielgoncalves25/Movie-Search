import React, { useState, useEffect, createContext } from "react";
import KEY from "./key";

const MOVIE_QUERY = "https://api.themoviedb.org/3/search/movie?";
const TOP_MOVIES = "https://api.themoviedb.org/3/movie/popular?";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [queryMovie, setQueryMovie] = useState(false);
  const [isMovieFound, setIsMovieFound] = useState(true);

  useEffect(() => {
    fetch(`${TOP_MOVIES}api_key=${KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("FETCHING POPULAR MOVIES");
        setMovies(data.results);
      });
  }, []);

  if (queryMovie === true) {
    if (query !== "") {
      fetch(`${MOVIE_QUERY}api_key=${KEY}&language=en-US&query=${query}&page=1`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results.length > 0) {
            // console.log(`FETCHING FOR ${query} MOVIES`);
            let filteredMovies = data.results.filter((movie) => {
              return movie.poster_path != null;
            });
            // console.log(filteredMovies);
            setMovies(filteredMovies);
            setIsMovieFound(true);
            setQueryMovie(false);
            setQuery("");
          } else {
            setIsMovieFound(false);
          }
        });
    }
  }

  return (
    <MovieContext.Provider
      value={{
        value1: [query, setQuery],
        value2: [movies, setMovies],
        value3: [queryMovie, setQueryMovie],
        value4: [isMovieFound, setIsMovieFound],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
