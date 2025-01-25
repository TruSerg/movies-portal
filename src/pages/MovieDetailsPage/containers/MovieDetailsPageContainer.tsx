import { useContext } from "react";

import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

import MovieDetailsPageLayout from "../components/MovieDetailsPageLayout";
import {
  IGenre,
  IMovie,
  IMovieDetails,
  IProductionCompany,
} from "../../../interfaces/searchMoviesDataInterfaces";
import { useFavoriteMovies } from "../../../hooks";

const MovieDetailsPageContainer = () => {
  const {
    isMovieLoading,
    isMovieFetching,
    isMovieError,
    movieError,
    movie,
    movieVideo,
  } = useContext(MovieDetailsContext);

  console.log("movie: ", movie);

  const {
    handleAddMovieFromDetailsToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies([]);

  const movieId = movie?.id;
  const title = movie?.title;
  const image = movie?.backdrop_path;
  const date = movie?.release_date;
  const rate = movie?.vote_average;
  const popularity = movie?.popularity;
  const genresList: IGenre[] = movie ? movie.genres : [];
  const duration = movie?.runtime;
  const budget = movie?.budget;
  const grossWorldwide = movie?.revenue;
  const movieTrailerId = movieVideo?.results
    ? movieVideo.results[0]?.key
    : null;
  const movieDescription = movie?.overview;
  const movieProduction: IProductionCompany[] = movie
    ? movie.production_companies
    : [];
  const isShowDetailsBlock =
    movieTrailerId ?? movieDescription ?? movieProduction;
  const isFavorite = isAddMovieToFavorite(movieId ? movieId : 0);

  const newMovie = {
    adult: movie?.adult,
    backdrop_path: movie?.backdrop_path,
    genre_ids: movie?.genres.map(({ id }) => id),
    id: movie?.id,
    original_language: movie?.original_language,
    original_title: movie?.original_title,
    overview: movie?.overview,
    popularity: movie?.popularity,
    poster_path: movie?.poster_path,
    release_date: movie?.release_date,
    title: movie?.title,
    video: movie?.video,
    vote_average: movie?.vote_average,
    vote_count: movie?.vote_count,
  };


  return (
    <MovieDetailsPageLayout
      isMovieLoading={isMovieLoading}
      isMovieFetching={isMovieFetching}
      isMovieError={isMovieError}
      isFavorite={isFavorite}
      movieError={movieError}
      newMovie={newMovie as IMovie}
      movie={movie as IMovieDetails}
      image={image ? image : ""}
      title={title ? title : ""}
      date={date ? date : ""}
      rate={rate ? rate : 0}
      popularity={popularity ? popularity : 0}
      duration={duration ? duration : 0}
      budget={budget ? budget : 0}
      grossWorldwide={grossWorldwide ? grossWorldwide : 0}
      genresList={genresList}
      isShowDetailsBlock={isShowDetailsBlock}
      movieTrailerId={movieTrailerId ? movieTrailerId : ""}
      movieDescription={movieDescription ? movieDescription : ""}
      movieProduction={movieProduction ? movieProduction : []}
      handleRemoveMovie={handleRemoveMovieFromFavorite}
      handleAddMovie={handleAddMovieFromDetailsToFavorite}
    />
  );
};

export default MovieDetailsPageContainer;
