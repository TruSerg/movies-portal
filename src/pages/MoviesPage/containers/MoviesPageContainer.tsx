import { useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useLazyGetMoviesByFilterQuery,
} from "../../../store/movies.api";

import {
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { useFavoriteMovies, useModal, usePagination } from "../../../hooks";

import MoviesPageLayout from "../components/MoviesPageLayout";

const MoviesPageContainer = () => {
  const dispatch = useAppDispatch();
  const { moviesList, moviesFilterValue, movie, moviesFilterValueTitle } =
    useAppSelector((state) => state.searchMovies);

  const { currentPage, handlePageChange } = usePagination();
  const {
    handleAddFavoriteMovie,
    handleRemoveFavoriteMovie,
    isAddMovieToFavorite,
  } = useFavoriteMovies();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

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

  const totalPages = movies?.total_pages;
  const movieTitle = movie.title;

  const handleAddMovieToFavorite = (id: number) => {
    handleAddFavoriteMovie(id);
  };

  const handleRemoveMovieFromFavorite = (id: number) => {
    handleRemoveFavoriteMovie(id);
  };

  useEffect(() => {
    dispatch(handleMoviesListChange(movies?.results));
  }, [dispatch, movies]);

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
      movieTitle={movieTitle}
      moviesList={moviesList}
      totalPages={totalPages ? totalPages : 0}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      handleModalClose={handleModalClose}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
    />
  );
};

export default MoviesPageContainer;
