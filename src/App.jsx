import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("");

  const getMovieRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=edded3c5`;

    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourite")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };


  return (
    <div className="container">
      <div className="heading">
        <MovieListHeading heading="Movies" />
        <SearchBox setSearch={setSearch} search={search} />
      </div>
      <div className="movie-container">
        <MovieList
          movies={movies}
          handleFavourite={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="heading">
        <MovieListHeading heading="Favourite" />
      </div>
      <div className="movie-container">
        <MovieList
          movies={favourites}
          handleFavourite={RemoveFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
