import { useContext, useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useLazySearchMoviesByTitleQuery,
} from "../../../store/movies.api";

import { useAppSelector } from "../../../hooks/useStoreHooks";
import {
  useDebounce,
  useFavoriteMovies,
  useModal,
  usePagination,
} from "../../../hooks";

import SearchMoviesPageLayout from "../components/SearchMoviesPageLayout";
import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

const SearchMoviesPageContainer = () => {
  const { searchMovieValue } = useAppSelector((state) => state.searchMovies);
  const { movie, handleGetMovieDetails } = useContext(MovieDetailsContext);

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const { currentPage, handlePageChange } = usePagination();
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const debouncedSearchMovieInputValue = useDebounce(searchMovieValue);

  const [
    searchMoviesByTitle,
    {
      data: movies,
      isLoading: isMoviesLoading,
      isFetching: isMoviesFetching,
      isError: isMoviesError,
      error: moviesError,
    },
  ] = useLazySearchMoviesByTitleQuery();

  const searchedMoviesList = movies?.results;
  const searchedMoviesQuantity = movies?.total_results;
  const totalPages = movies?.total_pages;
  const movieTitle = movie?.title;

  console.log("searchedMoviesList: ", searchedMoviesList);

  console.log("movies: ", movies);

  const {
    handleAddMovieToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies(searchedMoviesList ? searchedMoviesList : []);

  useEffect(() => {
    if (debouncedSearchMovieInputValue.length > 3) {
      searchMoviesByTitle({ currentPage, debouncedSearchMovieInputValue });
    }
  }, [currentPage, searchMoviesByTitle, debouncedSearchMovieInputValue]);

  return (
    <SearchMoviesPageLayout
      isMoviesLoading={isMoviesLoading}
      isMoviesFetching={isMoviesFetching}
      isGenresLoading={isGenresLoading}
      isMoviesError={isMoviesError}
      isModalOpen={isModalOpen}
      moviesError={moviesError}
      searchedMoviesList={searchedMoviesList ? searchedMoviesList : []}
      totalPages={totalPages ? totalPages : 0}
      movieTitle={movieTitle ? movieTitle : ""}
      searchedMoviesQuantity={
        searchedMoviesQuantity ? searchedMoviesQuantity : 0
      }
      currentPage={currentPage}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleModalClose={handleModalClose}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default SearchMoviesPageContainer;
