import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="movie-list">
            <img src={movie.Poster} alt="movie" />
            <div
              className="overlay"
              onClick={() => props.handleFavourite(movie)}
            >
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
