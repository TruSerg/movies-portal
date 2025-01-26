import { useContext } from "react";

import {
  useGetMovieGenresQuery,
  useTrendingMoviesQuery,
} from "../../../store/movies.api";
import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

import { useFavoriteMovies, usePagination } from "../../../hooks";

import TrendingPageLayout from "../components/TrendingMoviesPageLayout";

const TrendingMoviesPageContainer = () => {
  const { movie, handleGetMovieDetails } = useContext(MovieDetailsContext);

  const { currentPage, handlePageChange } = usePagination();

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
  const movieTitle = movie?.title;

  const {
    handleAddMovieToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies(trendingMoviesList ? trendingMoviesList : []);

  return (
    <TrendingPageLayout
      isTrendingMoviesLoading={isTrendingMoviesLoading}
      isTrendingMoviesFetching={isTrendingMoviesFetching}
      isGenresLoading={isGenresLoading}
      isTrendingMoviesError={isTrendingMoviesError}
      trendingMoviesError={trendingMoviesError}
      totalPages={totalPages ? totalPages : 0}
      currentPage={currentPage}
      moviesList={trendingMoviesList ? trendingMoviesList : []}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default TrendingMoviesPageContainer;
