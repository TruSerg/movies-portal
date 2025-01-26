import { FC, useEffect, useState, useContext } from "react";

import {
  useGetMovieGenresQuery,
  useLazySearchMoviesQuery,
} from "../../../store/movies.api";
import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

import { getRequestErrors } from "../../../utils/getRequestErrors";

import {
  useFavoriteMovies,
  usePagination,
  useSelect,
  useYearPickerInput,
} from "../../../hooks";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer: FC = () => {
  const [isFirstRequest, setIsFirstRequest] = useState(false);

  const { handleGetMovieDetails } = useContext(MovieDetailsContext);

  const {
    moviesGenreValue,
    rateFrom,
    rateTo,
    sortValue,
    handleMovieValueChange,
    handleRateFromChange,
    handleRateToChange,
    handleSortValueChange,
  } = useSelect();
  const { currentPage, handlePageChange } = usePagination();
  const { yearPickerValue, handleYearPickerValueChange } = useYearPickerInput();

  const {
    data: genres,
    isLoading: isGenresLoading,
    isFetching: isGenresFetching,
    isError: isGenresError,
    error: genresError,
  } = useGetMovieGenresQuery();

  const [
    fetchSearchMovies,
    {
      data: movies,
      isLoading: isMoviesLoading,
      isFetching: isMoviesFetching,
      isError: isMoviesError,
      error: moviesError,
    },
  ] = useLazySearchMoviesQuery();

  const handleFormSubmit = (e: globalThis.KeyboardEvent) => {
    e.preventDefault();

    if (moviesGenreValue) {
      handlePageChange(1);
      fetchSearchMovies({
        currentPage,
        sortValue,
        moviesGenreValue,
        releaseYear: yearPickerValue,
        from: rateFrom,
        to: rateTo,
      });

      setIsFirstRequest(true);
    }
  };

  useEffect(() => {
    if (isFirstRequest) {
      fetchSearchMovies({
        currentPage,
        sortValue,
        moviesGenreValue,
        releaseYear: yearPickerValue,
        from: rateFrom,
        to: rateTo,
      });
    }
  }, [isFirstRequest, currentPage, sortValue]);

  const searchMovies = movies?.results;
  const totalPages = movies?.total_pages;
  const genresErrorChange = getRequestErrors(genresError);

  const {
    handleAddMovieToFavorite,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies(searchMovies ? searchMovies : []);

  return (
    <HomePageLayout
      isGenresError={isGenresError}
      isGenresLoading={isGenresLoading}
      isGenresFetching={isGenresFetching}
      isFirstRequest={isFirstRequest}
      isMoviesLoading={isMoviesLoading}
      isMoviesFetching={isMoviesFetching}
      isMoviesError={isMoviesError}
      moviesError={moviesError}
      moviesGenreValue={moviesGenreValue}
      totalPages={totalPages ? totalPages : 0}
      genresErrorChange={genresErrorChange ? genresErrorChange : ""}
      yearPickerValue={yearPickerValue ? yearPickerValue : null}
      currentPage={currentPage}
      moviesList={searchMovies ? searchMovies : []}
      genres={genres ? genres : []}
      handleFormSubmit={handleFormSubmit}
      handleMovieValueChange={handleMovieValueChange}
      handleRateFromChange={handleRateFromChange}
      handleRateToChange={handleRateToChange}
      handleSortValueChange={handleSortValueChange}
      handleYearPickerValueChange={handleYearPickerValueChange}
      handleAddMovieToFavorite={handleAddMovieToFavorite}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default HomePageContainer;
