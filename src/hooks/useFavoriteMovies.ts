import { IMovie } from "../interfaces/searchMoviesDataInterfaces";

import useLocalStorage from "./useLocalStorage";

const useFavoriteMovies = (moviesList: IMovie[]) => {
  const [favoriteMovies, setFavoriteMovies] = useLocalStorage(
    "favoriteMovies",
    [] as IMovie[],
  );

  const handleAddMovieToFavorite = (id: number) => {
    moviesList.filter((movie) => {
      if (movie.id === id) {
        setFavoriteMovies([...favoriteMovies, movie]);
      }
    });
  };

  const handleAddMovieFromDetailsToFavorite = (movieDetails: IMovie) => {
    if (favoriteMovies.length !== 0) {
      favoriteMovies.forEach((movie: IMovie) => {
        if (movie.id !== movieDetails.id) {
          setFavoriteMovies([...favoriteMovies, movieDetails]);
        }
      });
    } else {
      setFavoriteMovies([movieDetails]);
    }
  };

  const handleRemoveMovieFromFavorite = (id: number) => {
    setFavoriteMovies(
      favoriteMovies.filter((movie: IMovie) => movie.id !== id),
    );
  };

  const isAddMovieToFavorite = (id: number) => {
    return favoriteMovies.findIndex((movie: IMovie) => movie.id === id) !== -1;
  };

  return {
    favoriteMovies,
    handleAddMovieToFavorite,
    handleAddMovieFromDetailsToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  };
};

export default useFavoriteMovies;
