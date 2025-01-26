import { useContext, useEffect } from "react";

import {
  useGetMovieGenresQuery,
  useLazySearchMoviesByTitleQuery,
} from "../../../store/movies.api";

import { useAppSelector } from "../../../hooks/useStoreHooks";
import {
  useDebounce,
  useFavoriteMovies,
  usePagination,
} from "../../../hooks";

import SearchMoviesPageLayout from "../components/SearchMoviesPageLayout";
import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

const SearchMoviesPageContainer = () => {
  const { searchMovieValue } = useAppSelector((state) => state.searchMovies);
  const {  handleGetMovieDetails } = useContext(MovieDetailsContext);

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const { currentPage, handlePageChange } = usePagination();
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
      moviesError={moviesError}
      searchedMoviesList={searchedMoviesList ? searchedMoviesList : []}
      totalPages={totalPages ? totalPages : 0}
      searchedMoviesQuantity={
        searchedMoviesQuantity ? searchedMoviesQuantity : 0
      }
      currentPage={currentPage}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default SearchMoviesPageContainer;
