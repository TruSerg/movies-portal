import { useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useLazyGetMoviesByFilterQuery,
} from "../../../store/movies.api";

import {
  findMovie,
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import {
  useModal,
  usePagination,
  useRatedMovies,
  useVisible,
} from "../../../hooks";

import MoviesPageLayout from "../components/MoviesPageLayout";

const MoviesPageContainer = () => {
  const dispatch = useAppDispatch();
  const { moviesList, moviesFilterValue, movie, moviesFilterValueTitle } =
    useAppSelector((state) => state.searchMovies);

  const { currentPage, handlePageChange } = usePagination();
  const { handleAddFavoriteMovie, isAddMovieToFavorite } = useRatedMovies();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const { isVisible, handleVisible, handleHidden } = useVisible();

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

  console.log("movies: ", movies);

  const totalPages = movies?.total_pages;
  const movieTitle = movie.title;
  const movieId = movie.id;

  useEffect(() => {
    fetchMovies({ moviesFilterValue, currentPage });
  }, [moviesFilterValue, currentPage]);

  const handleFindMovie = (id: number) => {
    dispatch(findMovie(id));
  };

  useEffect(() => {
    dispatch(handleMoviesListChange(movies?.results));
  }, [dispatch, movies]);

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
      handleAddFavoriteMovie={handleAddFavoriteMovie}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handleFindMovie={handleFindMovie}
    />
  );
};

export default MoviesPageContainer;
