import { useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useTrendingMoviesQuery,
} from "../../../store/movies.api";
import {
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
  const {
    handleAddFavoriteMovie,
    handleRemoveFavoriteMovie,
    isAddMovieToFavorite,
  } = useFavoriteMovies();

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const {
    data: trendingMovies,
    isLoading: isTrendingMoviesLoading,
    isFetching: isTrendingMoviesFetching,
    isError: isTrendingMoviesError,
    error: trendingMoviesError,
  } = useTrendingMoviesQuery({ currentPage });

  const trendingMoviesList = trendingMovies?.results;
  const totalPages = trendingMovies?.total_pages;
  const movieTitle = movie.title;

  const handleAddMovieToFavorite = (id: number) => {
    handleAddFavoriteMovie(id);
  };

  const handleRemoveMovieFromFavorite = (id: number) => {
    handleRemoveFavoriteMovie(id);
  };

  useEffect(() => {
    dispatch(handleMoviesListChange(trendingMoviesList));
  }, [dispatch, trendingMovies]);

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
      movieTitle={movieTitle}
      moviesList={moviesList}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleModalClose={handleModalClose}
    />
  );
};

export default TrendingMoviesPageContainer;
