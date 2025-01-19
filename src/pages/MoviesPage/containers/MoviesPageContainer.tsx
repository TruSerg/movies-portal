import { useContext, useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useLazyGetMoviesByFilterQuery,
} from "../../../store/movies.api";
import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

import { useFavoriteMovies, useModal, usePagination } from "../../../hooks";
import { useAppSelector } from "../../../hooks/useStoreHooks";

import MoviesPageLayout from "../components/MoviesPageLayout";

const MoviesPageContainer = () => {
  const { moviesFilterValue, moviesFilterValueTitle } = useAppSelector(
    (state) => state.searchMovies,
  );
  const { movie, handleGetMovieDetails } = useContext(MovieDetailsContext);

  const { currentPage, handlePageChange } = usePagination();

  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  console.log(movie?.id);

  const [
    fetchMovies,
    {
      data: movies,
      isLoading: isMoviesLoading,
      isFetching: isMoviesFetching,
      isError: isMoviesError,
      error: moviesError,
    },
  ] = useLazyGetMoviesByFilterQuery();

  const moviesList = movies?.results;
  const totalPages = movies?.total_pages;
  const movieTitle = movie?.title;

  const {
    handleAddMovieToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies(moviesList ? moviesList : []);

  useEffect(() => {
    fetchMovies({ moviesFilterValue, currentPage });
  }, [moviesFilterValue, currentPage]);

  return (
    <MoviesPageLayout
      isMoviesLoading={isMoviesLoading}
      isMoviesFetching={isMoviesFetching}
      isMoviesError={isMoviesError}
      isGenresLoading={isGenresLoading}
      isModalOpen={isModalOpen}
      moviesError={moviesError}
      moviesFilterValueTitle={moviesFilterValueTitle}
      movieTitle={movieTitle ? movieTitle : ""}
      moviesList={moviesList ? moviesList : []}
      totalPages={totalPages ? totalPages : 0}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      handleModalClose={handleModalClose}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default MoviesPageContainer;
