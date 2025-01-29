import { useContext, useEffect } from "react";

import { useGetMovieGenresQuery } from "../../../store/movies.api";
import { handleMoviesListChange } from "../../../store/favoriteMoviesSlice";

import { MovieDetailsContext } from "../../../context/MovieDetailsContext";

import { useFavoriteMovies, usePagination } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";

import FavoriteMoviesPageLayout from "../components/FavoriteMoviesPageLayout";

const FavoriteMoviesPageContainer = () => {
  const dispatch = useAppDispatch();

  const { favoriteMoviesList } = useAppSelector(
    (state) => state.favoriteMovies,
  );

  const { handleGetMovieDetails } = useContext(MovieDetailsContext);

  const {
    favoriteMovies,
    handleRemoveMovieFromFavorite,
    isAddMovieToFavorite,
  } = useFavoriteMovies(favoriteMoviesList);

  const {
    slicedMoviesList,
    isPageLoading,
    currentPage,
    totalPages,
    handlePageChange,
  } = usePagination(favoriteMoviesList);

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  useEffect(() => {
    dispatch(handleMoviesListChange(favoriteMovies));
  }, [dispatch, favoriteMovies]);

  return (
    <FavoriteMoviesPageLayout
      isPageLoading={isPageLoading}
      isGenresLoading={isGenresLoading}
      totalPages={totalPages}
      currentPage={currentPage}
      favoriteMovies={favoriteMoviesList}
      slicedMoviesList={slicedMoviesList}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
      handleGetMovieDetails={handleGetMovieDetails}
    />
  );
};

export default FavoriteMoviesPageContainer;
