import { FC, useEffect, useState } from "react";

import {
  useGetMovieGenresQuery,
  useLazySearchMoviesQuery,
} from "../../../store/movies.api";

import {
  findMovie,
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";

import { getRequestErrors } from "../../../utils/getRequestErrors";

import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import {
  useFavoriteMovies,
  useModal,
  usePagination,
  useSelect,
  useYearPickerInput,
} from "../../../hooks";

import HomePageLayout from "../components/HomePageLayout";

const HomePageContainer: FC = () => {
  const dispatch = useAppDispatch();
  const [isFirstRequest, setIsFirstRequest] = useState(false);

  const { moviesList, movie } = useAppSelector((state) => state.searchMovies);

  const { handleAddFavoriteMovie, isAddMovieToFavorite } = useFavoriteMovies();
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
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const { yearPickerValue, handleYearPickerValueChange } = useYearPickerInput();

  console.log("moviesGenreValue: ", moviesGenreValue);

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
  const movieTitle = movie.title;
  const movieId = movie.id;
  const genresErrorChange = getRequestErrors(genresError);

  useEffect(() => {
    dispatch(handleMoviesListChange(searchMovies));
  }, [dispatch, searchMovies]);

  const handleFindMovie = (id: number) => {
    dispatch(findMovie(id));
  };

  return (
    <HomePageLayout
      isGenresError={isGenresError}
      isGenresLoading={isGenresLoading}
      isGenresFetching={isGenresFetching}
      isFirstRequest={isFirstRequest}
      isMoviesLoading={isMoviesLoading}
      isMoviesFetching={isMoviesFetching}
      isMoviesError={isMoviesError}
      isModalOpen={isModalOpen}
      moviesError={moviesError}
      moviesGenreValue={moviesGenreValue}
      totalPages={totalPages ? totalPages : 0}
      genresErrorChange={genresErrorChange ? genresErrorChange : ""}
      yearPickerValue={yearPickerValue ? yearPickerValue : null}
      currentPage={currentPage}
      movieTitle={movieTitle}
      movieId={movieId}
      moviesList={moviesList ? moviesList : []}
      genres={genres ? genres : []}
      handleFormSubmit={handleFormSubmit}
      handleMovieValueChange={handleMovieValueChange}
      handleRateFromChange={handleRateFromChange}
      handleRateToChange={handleRateToChange}
      handleSortValueChange={handleSortValueChange}
      handleYearPickerValueChange={handleYearPickerValueChange}
      handleModalClose={handleModalClose}
      handleAddFavoriteMovie={handleAddFavoriteMovie}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handleFindMovie={handleFindMovie}
      handlePageChange={handlePageChange}
    />
  );
};

export default HomePageContainer;
