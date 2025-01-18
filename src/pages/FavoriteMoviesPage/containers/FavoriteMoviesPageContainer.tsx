import { useEffect } from "react";
import { useFavoriteMovies, usePagination } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { useGetMovieGenresQuery } from "../../../store/movies.api";
import {
  handleMoviesListChange,
} from "../../../store/searchMoviesSlice";
import FavoriteMoviesPageLayout from "../components/FavoriteMoviesPageLayout";

const FavoriteMoviesPageContainer = () => {
  const dispatch = useAppDispatch();
  const { moviesList, movie } = useAppSelector((state) => state.searchMovies);

  const { favoriteMovies, handleRemoveFavoriteMovie, isAddMovieToFavorite } =
    useFavoriteMovies();
  const { list, isPageLoading, currentPage, totalPages, handlePageChange } =
    usePagination(moviesList);

  const { isLoading: isGenresLoading } = useGetMovieGenresQuery();

  const handleRemoveMovieFromFavorite = (id: number) => {
    handleRemoveFavoriteMovie(id);
  };

  useEffect(() => {
    dispatch(handleMoviesListChange(favoriteMovies));
  }, [dispatch, favoriteMovies]);

  return (
    <FavoriteMoviesPageLayout
      isPageLoading={isPageLoading}
      isGenresLoading={isGenresLoading}
      totalPages={totalPages}
      currentPage={currentPage}
      favoriteMovies={favoriteMovies}
      list={list}
      handleRemoveMovieFromFavorite={handleRemoveMovieFromFavorite}
      isAddMovieToFavorite={isAddMovieToFavorite}
      handlePageChange={handlePageChange}
    />
  );
};

export default FavoriteMoviesPageContainer;
