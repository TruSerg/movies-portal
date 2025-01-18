import { useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useTrendingMoviesQuery,
} from "../../../store/movies.api";
import {
  findMovie,
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";

import { useFavoriteMovies, useModal, usePagination } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";

import TrendingPageLayout from "../components/TrendingMoviesPageLayout";

const TrendingMoviesPageContainer = () => {
  const dispatch = useAppDispatch();
  const { moviesList, movie } = useAppSelector((state) => state.searchMovies);

  const { currentPage, handlePageChange } = usePagination();
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const { handleAddFavoriteMovie, isAddMovieToFavorite } = useFavoriteMovies();

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const {
    data: trendingMovies,
    isLoading: isTrendingMoviesLoading,
    isFetching: isTrendingMoviesFetching,
    isError: isTrendingMoviesError,
    error: trendingMoviesError,
  } = useTrendingMoviesQuery({ currentPage });

  useEffect(() => {
    dispatch(handleMoviesListChange(trendingMoviesList));
  }, [dispatch, trendingMovies]);

  const trendingMoviesList = trendingMovies?.results;
  const totalPages = trendingMovies?.total_pages;
  const movieTitle = movie.title;
  const movieId = movie.id;

  const handleFindMovie = (id: number) => {
    handleModalOpen();

    dispatch(findMovie(id));
  };

  return (
    <TrendingPageLayout
      isTrendingMoviesLoading={isTrendingMoviesLoading}
      isTrendingMoviesFetching={isTrendingMoviesFetching}
      isGenresLoading={isGenresLoading}
      isTrendingMoviesError={isTrendingMoviesError}
      trendingMoviesError={trendingMoviesError}
      isModalOpen={isModalOpen}
      totalPages={totalPages ? totalPages : 0}
      currentPage={currentPage}
      movieId={movieId}
      movieTitle={movieTitle}
      moviesList={moviesList}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handleFindMovie={handleFindMovie}
      handlePageChange={handlePageChange}
      handleModalClose={handleModalClose}
      handleAddFavoriteMovie={handleAddFavoriteMovie}
    />
  );
};

export default TrendingMoviesPageContainer;
