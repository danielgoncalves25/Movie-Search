import React, { useContext } from "react";
import { MovieContext } from "../services/MovieContext";

const Movie = (props) => {
  const { title, release_date, poster_path, vote_average, overview } = props;
  const IMG_URL = "http://image.tmdb.org/t/p/w1280";

  return (
    <section className="movie-container">
      <div className="movie">
        <figure className="movie-front">
          <img src={IMG_URL + poster_path} alt="" />
          <div className="rating-container">
            <p
              id="rating"
              style={{
                color:
                  vote_average < 4
                    ? "red"
                    : vote_average >= 4 && vote_average < 7
                    ? "orange"
                    : "green",
              }}
            >
              {vote_average}
            </p>
          </div>
          <div className="movie-info">
            <p>{title}</p>
            <p>{release_date}</p>
          </div>
        </figure>
        <figure className="movie-back">
          <p> {overview}</p>
        </figure>
      </div>
    </section>
  );
};

const MovieList = () => {
  const { value2, value4 } = useContext(MovieContext);
  const [movies, setMovies] = value2;
  const [isMovieFound, setIsMovieFound] = value4;

  return (
    <div className={isMovieFound ? "movie-list" : "try-again"}>
      {isMovieFound ? (
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })
      ) : (
        <h2>We couldn't find any movies with that name. Please try again!</h2>
      )}
    </div>
  );
};
export default MovieList;
